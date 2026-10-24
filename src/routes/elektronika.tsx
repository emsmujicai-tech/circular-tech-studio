import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CTA, PageHead, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/elektronika")({
  head: () => meta(
    "Brukt elektronikk og e-voziler — EMS Mujic",
    "Brukte bærbare PC-er, stasjonære PC-er, nettbrett, mobiltelefoner, elektriske sparkesykler og sykler til svært gunstige priser.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const e = t.elektronika;

  return (
    <>
      <PageHead kicker={e.kicker} title={e.title}>{e.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {e.cats.map(([cat, desc]) => <Card key={cat} title={cat}>{desc}</Card>)}
      </section>
      <section className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 sm:grid-cols-3">
        {e.checks.map((x) => (
          <div key={x} className="rounded-xl bg-secondary p-5 font-semibold"><span className="text-primary">✓</span> {x}</div>
        ))}
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="rounded-2xl border border-primary/40 bg-secondary p-8">
          <h2 className="text-2xl font-bold">{e.repair.title}</h2>
          <p className="mt-2 text-muted-foreground">{e.repair.text}</p>
          <Link to="/servis" className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            {e.repair.button}
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
