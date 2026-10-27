import { createFileRoute } from '@tanstack/react-router';
import { handleCustomerChat } from '@/lib/customer-chat.server';
export const Route = createFileRoute('/api/public/customer-chat')({ server: { handlers: { POST: ({ request }) => handleCustomerChat(request) } } });
