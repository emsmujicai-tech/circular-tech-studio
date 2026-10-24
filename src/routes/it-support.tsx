import { createFileRoute, Link } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/it-support")({
  head: () => meta(
    "IT-support for bedrifter — EMS Mujić",
    "Fast vedlikehold av PC-er og servere, nettverk, sikkerhet og fjernsupport for bedrifter i Bergen og Stord.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const i = t.it;

  return (
    <>
      <PageHead kicker={i.kicker} title={i.title}>{i.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {i.packages.map((p) => (
          <div key={p.name} className="flex flex-col rounded-xl border bg-card p-6 transition hover:border-primary/60">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-accent">{p.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <Link to="/kontakt" className="mt-6 inline-block self-start rounded-lg border px-4 py-2 text-sm font-semibold transition hover:bg-secondary">
              {p.cta}
            </Link>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="grid gap-8 rounded-2xl border bg-secondary p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{i.remote.title}</h2>
            <p className="mt-3 text-muted-foreground">{i.remote.text}</p>
          </div>
          <ul className="grid gap-2 self-center sm:grid-cols-2">
            {i.remote.points.map((pt) => (
              <li key={pt} className="rounded-lg bg-background px-4 py-2 text-sm font-medium">{pt}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="rounded-2xl border border-primary/40 bg-card p-8">
          <h2 className="text-2xl font-bold">{i.quote.title}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{i.quote.text}</p>
          <Link to="/kontakt" className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            {i.quote.button}
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
