import { createFileRoute } from "@tanstack/react-router";
import { Card, CTA, PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/elektronika")({
  head: () => meta(
    "Polovna elektronika i e-vozila — EMS Mujić",
    "Polovni laptopi, računari, tableti, telefoni, električni skuteri i bicikla po veoma povoljnim cijenama.",
  ),
  component: Page,
});

const cats: [string, string][] = [
  ["Laptopi", "Poslovni i gaming modeli, provjerene baterije i ekrani."],
  ["Računari", "Desktop konfiguracije za kancelariju, školu i igru."],
  ["Tableti", "Za učenje, posao i zabavu — povoljno."],
  ["Mobilni telefoni", "Testirani pametni telefoni poznatih brendova."],
  ["Električni skuteri", "Gradska e-mobilnost bez troška goriva."],
  ["Električna bicikla", "Lakša vožnja uz pomoć elektromotora."],
];

function Page() {
  return (
    <>
      <PageHead kicker="Primarna djelatnost" title="Polovna elektronika po veoma povoljnim cijenama">
        Svaki uređaj prolazi provjeru prije prodaje. Pitajte nas za trenutno stanje zaliha.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {cats.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}
      </section>
      <section className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 sm:grid-cols-3">
        {["Testirani uređaji", "Niske cijene", "Brz dogovor i preuzimanje"].map((x) => (
          <div key={x} className="rounded-xl bg-secondary p-5 font-semibold"><span className="text-primary">✓</span> {x}</div>
        ))}
      </section>
      <CTA />
    </>
  );
}
