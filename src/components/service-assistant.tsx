import { useEffect, useRef, useState, type FormEvent } from "react";
import { ImagePlus, Mail, Copy, X, Sparkles, Square, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { CONTACT } from "@/components/site";
import { MAX_PHOTO_BYTES } from "@/lib/service-input";

export function ServiceAssistant({ initialDevice = "" }: { initialDevice?: string }) {
  const { t, lang } = useLang();
  const a = t.assistant;
  const [device, setDevice] = useState(initialDevice);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [complete, setComplete] = useState(false);
  const [copied, setCopied] = useState(false);
  const controller = useRef<AbortController | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  useEffect(() => setDevice(initialDevice), [initialDevice]);
  useEffect(() => {
    if (!photo) { setPreview(""); return; }
    const url = URL.createObjectURL(photo); setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [photo]);
  useEffect(() => () => controller.current?.abort(), []);
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!description.trim() && !photo) { setError(a.required); return; }
    setBusy(true); setError(""); setResult(""); setReasoning(""); setComplete(false); setCopied(false);
    const abort = new AbortController(); controller.current = abort;
    const form = new FormData(); form.set("device", device); form.set("description", description); form.set("lang", lang); if (photo) form.set("photo", photo);
    try {
      const response = await fetch("/api/public/service-assistant", { method: "POST", body: form, signal: abort.signal });
      if (!response.ok) { const body = await response.json() as { error?: string }; throw new Error(body.error ?? a.unavailable); }
      const reader = response.body?.getReader(); if (!reader) throw new Error(a.unavailable);
      const decoder = new TextDecoder(); let buffer = "";
      while (true) {
        const chunk = await reader.read(); if (chunk.done) break;
        buffer += decoder.decode(chunk.value, { stream: true });
        const lines = buffer.split("\n"); buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line) continue;
          const data = JSON.parse(line) as { type: string; text?: string; error?: string };
          if (data.type === "text") setResult((value) => value + (data.text ?? ""));
          if (data.type === "reasoning") setReasoning((value) => value + (data.text ?? ""));
          if (data.type === "error") throw new Error(data.error ?? a.unavailable);
          if (data.type === "done") setComplete(true);
        }
      }
    } catch (failure) { if (!abort.signal.aborted) setError(failure instanceof Error ? failure.message : a.unavailable); }
    finally { setBusy(false); controller.current = null; }
  }
  return <section className="mx-auto mt-12 max-w-6xl px-5" aria-labelledby="assistant-title">
    <div className="border-y py-10">
      <h2 id="assistant-title" className="flex items-center gap-3 text-3xl font-bold"><Sparkles className="size-7 shrink-0 text-accent" />{a.title}</h2>
      <p className="mt-3 text-muted-foreground">{a.lead}</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <form onSubmit={submit} className="space-y-5">
          <label className="block text-sm font-medium">{a.device}<input className="mt-2 block w-full rounded-md border bg-background px-3 py-3" value={device} maxLength={100} onChange={(e) => setDevice(e.target.value)} /></label>
          <label className="block text-sm font-medium">{a.description}<textarea className="mt-2 block min-h-32 w-full rounded-md border bg-background px-3 py-3" value={description} maxLength={3000} placeholder={a.placeholder} onChange={(e) => setDescription(e.target.value)} /></label>
          <input ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" aria-label={a.photo} onChange={(e) => { const file = e.target.files?.[0]; if (!file) return; if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > MAX_PHOTO_BYTES) { setError(a.photoError); e.target.value = ""; return; } setError(""); setPhoto(file); }} />
          <Button type="button" variant="outline" onClick={() => fileInput.current?.click()}><ImagePlus />{a.photo}</Button>
          {preview && <div className="relative w-40"><img src={preview} alt={a.photo} className="aspect-square w-full rounded-lg object-cover" /><Button type="button" size="icon" variant="secondary" aria-label={a.remove} className="absolute right-1 top-1" onClick={() => { setPhoto(null); if (fileInput.current) fileInput.current.value = ""; }}><X /></Button></div>}
          <p className="text-xs leading-relaxed text-muted-foreground">{a.note}</p>
          {error && <p role="alert" className="break-words text-sm text-destructive">{error}</p>}
          <div className="flex flex-wrap gap-3"><Button type="submit" disabled={busy}>{busy ? <LoaderCircle className="animate-spin motion-reduce:animate-none" /> : <Sparkles />}{busy ? a.loading : a.submit}</Button>{busy && <Button type="button" variant="outline" onClick={() => controller.current?.abort()}><Square />{a.stop}</Button>}</div>
        </form>
        <div aria-live="polite" className="min-w-0">
          {reasoning && <details className="mb-4 text-sm text-muted-foreground"><summary>{a.reasoning}</summary><p className="mt-2 whitespace-pre-wrap">{reasoning}</p></details>}
          {result && <><h3 className="text-xl font-semibold">{a.result}</h3><textarea aria-label={a.result} value={result} onChange={(e) => setResult(e.target.value)} readOnly={busy} className="mt-3 min-h-80 w-full rounded-md border bg-card p-4 text-sm leading-relaxed" />
            {complete && !error && <div className="mt-4 flex flex-wrap gap-3"><Button asChild><a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`${a.subject}: ${device}`)}&body=${encodeURIComponent(result)}`}><Mail />{a.send}</a></Button><Button variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(result); setCopied(true); } catch { setError(a.invalid); } }}><Copy />{copied ? a.copied : a.copy}</Button></div>}
          </>}
        </div>
      </div>
    </div>
  </section>;
}