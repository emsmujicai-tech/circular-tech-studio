import { createFileRoute, Link } from "@tanstack/react-router";
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
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="rounded-2xl border border-primary/40 bg-secondary p-8">
          <h2 className="text-2xl font-bold">Uređaj se kvari ili ne radi?</h2>
          <p className="mt-2 text-muted-foreground">Radimo servis laptopa, računara, tableta i telefona te popravke električnih skutera, bicikala i motora.</p>
          <Link to="/servis" className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Pogledaj servis
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
