import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import retro from "@/assets/retro-club.jpg";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export function RetroTeaser() {
  const { t } = useLang();
  const r = t.retro;
  return <section className="relative mt-20 overflow-hidden border-y">
    <img src={retro} alt={r.alt} width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-right" />
    <div className="retro-cover absolute inset-0" />
    <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{r.kicker}</p>
      <h2 className="mt-3 text-4xl font-bold">{r.title}</h2>
      <p className="mt-4 max-w-md text-lg text-foreground">{r.teaser}</p>
      <Button asChild className="mt-6"><Link to="/retro-elektronikk">{r.explore}<ArrowUpRight /></Link></Button>
    </div>
  </section>;
}