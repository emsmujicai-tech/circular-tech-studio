import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import retro from "@/assets/retro-club.jpg";
import { CONTACT, meta } from "@/components/site";
import { Button } from "@/components/ui/button";
import { MotionSurface } from "@/components/motion-surface";
import { useLang } from "@/lib/i18n";
import { ServiceIcon, type ServiceIconName } from "@/components/service-icons";
import { content } from "@/lib/content";

export const Route = createFileRoute("/retro-elektronikk")({
  head: () => meta(`${content.nb.retro.title} — EMS Mujic`, content.nb.retro.lead),
  component: RetroClub,
});

function RetroClub() {
  const { t } = useLang();
  const r = t.retro;
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(r.emailBody)}`;
  const icons: ServiceIconName[] = ["retro", "repair", "community"];
  return <>
    <section className="relative min-h-[520px] overflow-hidden border-b">
      <img src={retro} alt={r.alt} width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-right" />
      <div className="retro-cover absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{r.kicker}</p>
        <h1 className="mt-4 max-w-lg text-5xl font-bold leading-tight sm:text-6xl">{r.title}</h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed">{r.lead}</p>
        <Button asChild size="lg" className="mt-7"><a href={mailto}><Mail />{r.join}</a></Button>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs text-muted-foreground">{r.note}</p>
      <h2 className="mt-8 text-3xl font-bold">{r.introTitle}</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{r.intro}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {r.topics.map(([title, text], index) => {
          return <MotionSurface key={title} className="rounded-lg border bg-card p-6"><ServiceIcon name={icons[index] ?? "retro"} /><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-muted-foreground">{text}</p></MotionSurface>;
        })}
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t pt-8">
        <p className="max-w-2xl text-muted-foreground">{r.membership}</p>
        <Button asChild size="lg"><a href={mailto}><Mail />{r.join}</a></Button>
      </div>
    </section>
  </>;
}