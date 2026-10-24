import { createFileRoute, Link } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/drone")({
  head: () => meta(
    "Drone-inspeksjon og filming — EMS Mujic",
    "Drone-inspeksjon av tak, fasader og utilgjengelige steder, luftopptak til eiendom, prosjekter og markedsføring. Bergen og Stord.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const d = t.drone;

  return (
    <>
      <PageHead kicker={d.kicker} title={d.title}>{d.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2">
        {d.services.map(([title, text]) => (
          <div key={title} className="rounded-xl border bg-card p-6 transition hover:border-primary/60">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {d.points.map((p) => (
            <li key={p} className="rounded-lg border bg-secondary px-4 py-3 text-sm font-medium">{p}</li>
          ))}
        </ul>
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="rounded-2xl border border-primary/40 bg-card p-8">
          <h2 className="text-2xl font-bold">{d.quote.title}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{d.quote.text}</p>
          <Link to="/kontakt" className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            {d.quote.button}
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
