import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/service-assistant")({
  server: { handlers: { POST: async ({ request }) => {
    const { handleServiceAssistant } = await import("@/lib/service-assistant.server");
    return handleServiceAssistant(request);
  } } },
});