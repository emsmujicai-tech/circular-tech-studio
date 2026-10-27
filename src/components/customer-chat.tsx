import { useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Conversation, ConversationContent, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { PromptInput, PromptInputTextarea, PromptInputFooter, PromptInputSubmit } from '@/components/ai-elements/prompt-input';
import { Shimmer } from '@/components/ai-elements/shimmer';
import { Reasoning, ReasoningTrigger, ReasoningContent } from '@/components/ai-elements/reasoning';
import { ServiceIcon } from '@/components/service-icons';
import { useLang } from '@/lib/i18n';
export function CustomerChat() {
  const { lang, t } = useLang();
  const a = t.chat;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const textarea = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(() => new DefaultChatTransport({ api: '/api/public/customer-chat', body: { lang } }), [lang]);
  const { messages, sendMessage, status, stop, error } = useChat({ transport });
  const busy = status === 'submitted' || status === 'streaming';
  useEffect(() => { if (open && !busy) textarea.current?.focus(); }, [open, busy]);
  useEffect(() => { if (!open) return; const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey); }, [open]);
  return <div className="customer-chat fixed bottom-4 right-4 z-50">
    {open ? <section role="dialog" aria-modal="false" aria-label={a.title} className="chat-panel flex w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-lg border bg-background shadow-xl">
      <header className="flex shrink-0 items-center justify-between border-b px-4 py-3"><h2 className="text-sm font-semibold">{a.title}</h2><Button size="icon" variant="ghost" aria-label={a.close} onClick={() => setOpen(false)}><X /></Button></header>
      <Conversation initial="instant" resize="instant" className="min-h-0"><ConversationContent className="gap-5">
        {messages.length === 0 && <div className="space-y-4 py-4"><div className="mx-auto w-24"><ServiceIcon name="chatbot" compact /></div><p className="text-center font-semibold">{a.greeting}</p><div className="flex flex-col gap-2">{[a.services,a.pricing,a.repair].map(q => <Button key={q} variant="outline" className="h-auto justify-start whitespace-normal py-3 text-left" onClick={() => { void sendMessage({ text: q }); textarea.current?.focus(); }}>{q}</Button>)}</div></div>}
        {messages.map(message => <Message key={message.id} from={message.role}><MessageContent className={message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}>{message.parts.map((part,i) => part.type === 'text' ? <MessageResponse key={i}>{part.text}</MessageResponse> : part.type === 'reasoning' ? <Reasoning key={i} defaultOpen={false}><ReasoningTrigger>{a.reasoning}</ReasoningTrigger><ReasoningContent>{part.text}</ReasoningContent></Reasoning> : null)}</MessageContent></Message>)}
        {status === 'submitted' && <Shimmer>{a.loading}</Shimmer>}
      </ConversationContent><ConversationScrollButton aria-label={t.assistant.nextNav} /></Conversation>
      {error && <p role="alert" className="px-4 py-2 text-sm text-destructive">{error.message || a.error}</p>}
      <div className="shrink-0 border-t p-3"><PromptInput onSubmit={({ text }) => { if (!text.trim() || busy) return; setInput(''); void sendMessage({ text }); textarea.current?.focus(); }}><PromptInputTextarea ref={textarea} aria-label={a.placeholder} placeholder={a.placeholder} value={input} maxLength={3000} onChange={e => setInput(e.target.value)} className="min-h-20" /><PromptInputFooter className="justify-end"><Button asChild variant="ghost" size="icon" aria-label={a.contact}><a href="mailto:ems.mujic@gmail.com"><Mail /></a></Button><PromptInputSubmit aria-label={busy ? a.stop : a.send} status={status} onStop={() => void stop()} disabled={!busy && !input.trim()} /></PromptInputFooter></PromptInput><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.privacy}</p></div>
    </section> : <Button className="h-12 gap-2 shadow-lg" aria-expanded={open} onClick={() => setOpen(true)}><span className="w-8"><ServiceIcon name="chatbot" compact /></span>{a.open}</Button>}
  </div>;
}
