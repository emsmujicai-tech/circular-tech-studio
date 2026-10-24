import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CTA, PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/servis")({
  head: () => meta(
    "Servis elektronike, e-skutera, bicikala i motora — EMS Mujić",
    "Dijagnostika i popravka laptopa, računara, tableta i telefona te servis električnih skutera, bicikala i motora.",
  ),
  component: Page,
});

const services: [string, string][] = [
  ["Servis elektronike", "Dijagnostika i popravka laptopa, računara, tableta i telefona — hardver i softver."],
  ["Ekran, baterija, konektor", "Zamjena ekrana, baterija, tipkovnica, konektora punjenja i drugih dijelova."],
  ["Servis električnih skutera", "Baterija, motor, kontroler, kočnice, gume i elektronika — brzo i povoljno."],
  ["Servis električnih bicikala", "Servis pogona, motora i baterije te podešavanje i redovno održavanje."],
  ["Servis motora i motocikala", "Redovni servisi, mehaničke popravke, dijagnostika i priprema za tehnički pregled."],
  ["Nadogradnja računara", "Jači disk, više RAM-a, čišćenje i ubrzanje starijih konfiguracija."],
];

const steps = [
  ["Prijavite kvar", "Opisite problem ili pošaljite fotografiju uređaja."],
  ["Dijagnostika", "Pregledamo uređaj i utvrdimo uzrok kvara."],
  ["Ponuda", "Dobijate cijenu i rok prije bilo kakve intervencije."],
  ["Popravka", "Popravimo i testiramo — predajemo vam ispravan uređaj."],
];

function Page() {
  return (
    <>
      <PageHead kicker="Servis" title="Servis elektronike, e-skutera, bicikala i motora">
        Neispravan uređaj ne mora biti kraj. Pregledamo, dijagnostikujemo i popravljamo — uz jasan predračun prije rada.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <h2 className="text-3xl font-bold">Kako radi servis</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-xl border bg-card p-6">
              <span className="font-display text-4xl font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="rounded-2xl border bg-secondary p-8">
          <h2 className="text-2xl font-bold">Ne isplati se popravljati?</h2>
          <p className="mt-2 text-muted-foreground">Otkupljujemo neispravne i stare uređaje — sve završava u sortiranju i reciklaži e-otpada.</p>
          <Link to="/e-otpad" className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Prodaj nam uređaj
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
