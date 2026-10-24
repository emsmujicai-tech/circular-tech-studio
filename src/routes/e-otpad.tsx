import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/e-otpad")({
  head: () => meta(
    "Oppkjøp og resirkulering av elektronavfall — EMS Mujic",
    "Vi kjøper opp gammel og defekt elektronikk, sorterer den og resirkulerer den ansvarlig.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const e = t.eotpad;

  return (
    <>
      <PageHead kicker={e.kicker} title={e.title}>{e.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-4">
        {e.steps.map(([title, desc], i) => (
          <div key={title} className="rounded-xl border bg-card p-6">
            <span className="font-display text-4xl font-bold text-primary">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
