import { createFileRoute } from "@tanstack/react-router";
import { Card, CTA, PageHead, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/usluge")({
  head: () => meta(
    "AI, automatisering og branding — EMS Mujić",
    "AI-botter, AI-resepsjonister, forretningsautomatisering, logo, 3D-design og AI-visualisering.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const u = t.usluge;

  return (
    <>
      <PageHead kicker={u.kicker} title={u.title}>{u.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2">
        {u.cards.map((c) => <Card key={c.title} tag={c.tag} title={c.title}>{c.text}</Card>)}
      </section>
      <CTA />
    </>
  );
}
