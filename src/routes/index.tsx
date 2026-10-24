import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Card, CTA, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta(
    "EMS Mujić Smart Solutions — polovna elektronika i AI rješenja",
    "Povoljna polovna elektronika, e-skuteri i e-bicikla, otkup i reciklaža e-otpada, te AI botovi, automatizacija i brending.",
  ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Elektronika · E-mobilnost · AI</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Tehnologija s drugom šansom, <span className="text-primary">po pravoj cijeni.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Prodajemo provjerenu polovnu elektroniku i električna vozila po veoma povoljnim cijenama,
            otkupljujemo e-otpad i gradimo pametna AI rješenja za vaš biznis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/elektronika" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
              Pogledaj ponudu
            </Link>
            <Link to="/e-otpad" className="rounded-lg border px-5 py-3 font-semibold hover:bg-secondary">
              Prodaj nam uređaj
            </Link>
          </div>
        </div>
        <img src={hero} alt="Polovni laptop, telefon i tablet" className="aspect-[16/10] w-full rounded-2xl border object-cover" width={1600} height={1000} />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="text-3xl font-bold">Šta radimo</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card tag="Primarno" title="Polovna elektronika">Laptopi, računari, tableti i telefoni — testirani i spremni za upotrebu.</Card>
          <Card tag="E-mobilnost" title="Električni skuteri i bicikla">Povoljan prelazak na električnu vožnju po gradu.</Card>
          <Card tag="Eko" title="Otkup i reciklaža e-otpada">Otkup, sortiranje i odgovorno recikliranje stare elektronike.</Card>
          <Card tag="AI" title="AI botovi i recepcionisti">Virtualni asistenti koji odgovaraju klijentima 24/7.</Card>
          <Card tag="Automatizacija" title="Poslovna automatizacija">Manje ručnog posla, više vremena za rast.</Card>
          <Card tag="Dizajn" title="Brending, logo, 3D i AI vizualizacija">Kompletan vizuelni identitet vašeg brenda.</Card>
          <Card tag="Servis" title="Servis elektronike, e-skutera, bicikala i motora" className="md:col-span-3">
            Kvar nije kraj — dijagnostika i popravka laptopa, računara, telefona, električnih skutera, bicikala i motora.{" "}
            <Link to="/servis" className="font-semibold text-primary hover:underline">Pogledaj servis →</Link>
          </Card>
        </div>
      </section>
      <CTA />
    </>
  );
}
