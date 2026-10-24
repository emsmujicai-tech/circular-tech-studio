import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { CTA, meta } from "@/components/site";
import { RepairGallery } from "@/components/repair-gallery";
import { MotionSurface } from "@/components/motion-surface";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Laptop, Bike, Recycle, Bot, Workflow, PenTool, Wrench, ScanLine, Network } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => meta(
    "EMS Mujic Smart Solutions — brukt elektronikk, service og AI-løsninger",
    "Brukt elektronikk til svært gunstige priser, elektriske sparkesykler og sykler, oppkjøp og resirkulering av elektronavfall, AI-botter, automatisering og branding.",
  ),
  component: Index,
});

function Index() {
  const { t } = useLang();
  const h = t.home;
  const tiles = [
    { ...h.cards[0], to: "/elektronika" as const, icon: Laptop },
    { ...h.cards[1], to: "/elektronika" as const, icon: Bike },
    { ...h.service, to: "/servis" as const, icon: Wrench },
    { ...h.cards[2], to: "/e-otpad" as const, icon: Recycle },
    { ...h.it, to: "/it-support" as const, icon: Network },
    { ...h.drone, to: "/drone" as const, icon: ScanLine },
    { ...h.cards[3], to: "/usluge" as const, icon: Bot },
    { ...h.cards[4], to: "/usluge" as const, icon: Workflow },
    { ...h.cards[5], to: "/usluge" as const, icon: PenTool },
  ];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">{h.kicker}</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            {h.h1a} <span className="text-primary">{h.h1b}</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{h.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/elektronika" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
              {h.primary}
            </Link>
            <Link to="/e-otpad" className="rounded-lg border px-5 py-3 font-semibold hover:bg-secondary">
              {h.secondary}
            </Link>
          </div>
        </div>
        <img src={hero} alt={h.heroAlt} className="aspect-[16/10] w-full rounded-2xl border object-cover" width={1600} height={1000} />
      </section>

      <RepairGallery />

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="text-3xl font-bold">{h.h2}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <MotionSurface key={tile.title} className="rounded-lg border bg-card">
              <Button asChild variant="ghost" className="block h-full min-h-64 whitespace-normal rounded-lg p-6 text-left hover:bg-transparent hover:text-foreground">
                <Link to={tile.to}>
                  <span className="mb-6 flex items-center justify-between"><tile.icon className="service-icon size-7 text-primary" /><ArrowUpRight className="size-4 text-muted-foreground" /></span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-accent">{tile.tag}</span>
                  <h3 className="mt-2 text-xl font-semibold">{tile.title}</h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground">{tile.text}</p>
                </Link>
              </Button>
            </MotionSurface>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
