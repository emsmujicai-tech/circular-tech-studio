import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { z } from 'zod';
import { content } from './content';
import { customerChatInstructions } from './customer-chat-policy';
import { createLovableAiGatewayRunIdFetch, withLovableAiGatewayRunIdHeader } from './ai/run-id.server.ts';
const schema = z.object({ lang: z.enum(['nb','en','bs']).default('nb'), messages: z.array(z.object({ id: z.string().max(200), role: z.enum(['user','assistant']), parts: z.array(z.object({ type: z.enum(['text','reasoning']), text: z.string().max(20000) }).passthrough()).max(40) })).min(1).max(100) });
export async function handleCustomerChat(request: Request) {
  if (request.headers.get('origin') !== new URL(request.url).origin) return Response.json({ error: content.nb.chat.error }, { status: 403 });
  const raw = await request.text();
  if (raw.length > 200000) return Response.json({ error: content.nb.assistant.invalid }, { status: 413 });
  let body: unknown;
  try { body = JSON.parse(raw); } catch { return Response.json({ error: content.nb.assistant.invalid }, { status: 400 }); }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return Response.json({ error: content.nb.assistant.invalid }, { status: 400 });
  const { lang } = parsed.data;
  const messages = parsed.data.messages as UIMessage[];
  const key = process.env.LOVABLE_API_KEY;
  if (!key) return Response.json({ error: content[lang].chat.error }, { status: 503 });
  const gateway = createLovableAiGatewayRunIdFetch();
  let status = 200;
  let error = content[lang].chat.error;
  const provider = createOpenAI({ baseURL: 'https://ai.gateway.lovable.dev/v1', apiKey: key, headers: { 'Lovable-API-Key': key, 'X-Lovable-AIG-SDK': 'vercel-ai-sdk' }, fetch: async (url, init) => {
    const response = await gateway.fetch(url, init);
    status = response.status;
    if (!response.ok) {
      try { const data = await response.clone().json() as { message?: string; error?: { message?: string } }; error = data.message ?? data.error?.message ?? error; } catch { /* keep safe fallback */ }
    }
    return response;
  } });
  try {
    const result = streamText({ model: provider.responses('openai/gpt-6-astra'), instructions: customerChatInstructions(lang), messages: await convertToModelMessages(messages.map(m => ({ ...m, parts: m.parts.filter(p => p.type === 'text') }))), abortSignal: request.signal, maxRetries: 0, providerOptions: { openai: { forceReasoning: true, reasoningEffort: 'low', reasoningSummary: 'auto', store: false, include: ['reasoning.encrypted_content'] } } });
    const response = result.toUIMessageStreamResponse({ originalMessages: messages, sendReasoning: true, onFinish: () => {}, onError: () => error });
    const wrapped = await withLovableAiGatewayRunIdHeader(response, gateway);
    if (status >= 400) { await wrapped.body?.cancel(); return Response.json({ error }, { status }); }
    return wrapped;
  } catch { return Response.json({ error }, { status: request.signal.aborted ? 499 : status >= 400 ? status : 500 }); }
}
