import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Card, CTA, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => meta(
    "EMS Mujić Smart Solutions — brukt elektronikk, service og AI-løsninger",
    "Brukt elektronikk til svært gunstige priser, elektriske sparkesykler og sykler, oppkjøp og resirkulering av elektronavfall, AI-botter, automatisering og branding.",
  ),
  component: Index,
});

function Index() {
  const { t } = useLang();
  const h = t.home;

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

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="text-3xl font-bold">{h.h2}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {h.cards.map((c) => (
            <Card key={c.title} tag={c.tag} title={c.title}>{c.text}</Card>
          ))}
          <Card tag={h.service.tag} title={h.service.title} className="md:col-span-3">
            {h.service.text}{" "}
            <Link to="/servis" className="font-semibold text-primary hover:underline">{h.service.link} →</Link>
          </Card>
        </div>
      </section>
      <CTA />
    </>
  );
}
