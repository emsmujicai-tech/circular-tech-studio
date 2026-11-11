import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, stepCountIs, streamText, tool, type UIMessage } from "ai";
import { z } from "zod";
import { content } from "./content";
import { customerChatInstructions } from "./customer-chat-policy";
import {
  createLovableAiGatewayRunIdFetch,
  withLovableAiGatewayRunIdHeader,
} from "./ai/run-id.server.ts";
const schema = z.object({
  lang: z.enum(["nb", "en", "bs"]).default("nb"),
  messages: z
    .array(
      z.object({
        id: z.string().max(200),
        role: z.enum(["user", "assistant"]),
        parts: z
          .array(
            z
              .object({
                type: z.string().regex(/^(text|reasoning|step-start|tool-[a-z_]+)$/),
                text: z.string().max(20000).optional(),
              })
              .passthrough(),
          )
          .max(40),
      }),
    )
    .min(1)
    .max(100),
});
export async function handleCustomerChat(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin)
    return Response.json({ error: content.nb.chat.error }, { status: 403 });
  const raw = await request.text();
  if (raw.length > 200000)
    return Response.json({ error: content.nb.assistant.invalid }, { status: 413 });
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: content.nb.assistant.invalid }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return Response.json({ error: content.nb.assistant.invalid }, { status: 400 });
  const { lang } = parsed.data;
  const messages = parsed.data.messages as UIMessage[];
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) return Response.json({ error: content[lang].chat.error }, { status: 503 });
  const gateway = createLovableAiGatewayRunIdFetch();
  let status = 200;
  let error = content[lang].chat.error;
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey: key,
    headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: async (url, init) => {
      const response = await gateway.fetch(url, init);
      status = response.status;
      if (!response.ok) {
        try {
          const data = (await response.clone().json()) as {
            message?: string;
            error?: { message?: string };
          };
          error = data.message ?? data.error?.message ?? error;
        } catch {
          /* keep safe fallback */
        }
      }
      return response;
    },
  });
  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      instructions: customerChatInstructions(lang),
      messages: await convertToModelMessages(
        messages.map((m) => ({ ...m, parts: m.parts.filter((p) => p.type === "text") as UIMessage["parts"] })),
      ),
      tools: {
        lookup_order: tool({
          description:
            "Look up a service order status. Requires both the order number and the email the customer gave. Never guess either value.",
          inputSchema: z.object({
            order_number: z.string().min(3).max(40),
            email: z.string().email().max(254),
          }),
          execute: async ({ order_number, email }) => {
            const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
            const { data } = await supabaseAdmin
              .from("service_orders")
              .select("order_number, device, status, customer_note, updated_at")
              .eq("order_number", order_number.trim().toUpperCase())
              .ilike("customer_email", email.trim())
              .maybeSingle();
            return data ? { found: true, ...data } : { found: false };
          },
        }),
        request_handover: tool({
          description:
            "Hand the conversation to a person at EMS Mujic when you are not sure of the answer, the question needs a personal decision, or the customer asks for a human.",
          inputSchema: z.object({ reason: z.string().max(300) }),
          execute: async () => ({ handover: true }),
        }),
      },
      stopWhen: stepCountIs(4),
      abortSignal: request.signal,
      maxRetries: 0,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });
    const response = result.toUIMessageStreamResponse({
      originalMessages: messages,
      sendReasoning: true,
      onFinish: () => {},
      onError: () => error,
    });
    const wrapped = await withLovableAiGatewayRunIdHeader(response, gateway);
    if (status >= 400) {
      await wrapped.body?.cancel();
      return Response.json({ error }, { status });
    }
    return wrapped;
  } catch {
    return Response.json(
      { error },
      { status: request.signal.aborted ? 499 : status >= 400 ? status : 500 },
    );
  }
}
