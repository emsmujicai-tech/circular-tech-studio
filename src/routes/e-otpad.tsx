import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/e-otpad")({
  head: () => meta(
    "Otkup i reciklaža e-otpada — EMS Mujić",
    "Otkupljujemo staru i neispravnu elektroniku, sortiramo je i odgovorno recikliramo.",
  ),
  component: Page,
});

const steps = [
  ["Javite se", "Pošaljite nam opis ili fotografiju uređaja."],
  ["Procjena", "Dajemo vam ponudu za otkup."],
  ["Preuzimanje", "Dogovaramo predaju ili preuzimanje."],
  ["Reciklaža", "Sortiramo, obnavljamo ili odgovorno recikliramo."],
];

function Page() {
  return (
    <>
      <PageHead kicker="E-waste" title="Otkup, sortiranje i reciklaža e-otpada">
        Stari laptopi, telefoni, računari, kablovi i baterije ne pripadaju u smeće. Mi ih otkupljujemo i dajemo im novi život.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <div key={t} className="rounded-xl border bg-card p-6">
            <span className="font-display text-4xl font-bold text-primary">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold">{t}</h3>
            <p className="mt-1 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
