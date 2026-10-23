import { createFileRoute } from "@tanstack/react-router";
import { Card, CTA, PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/usluge")({
  head: () => meta(
    "AI, automatizacija i brending — EMS Mujić",
    "AI botovi, AI recepcionisti, automatizacija poslovanja, logo, 3D dizajn i AI vizualizacija.",
  ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHead kicker="Smart Solutions" title="AI, automatizacija i kompletan brending">
        Pametni alati i vizuelni identitet koji vašem biznisu štede vrijeme i privlače klijente.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2">
        <Card tag="AI" title="AI botovi">Chat botovi za web, Viber, WhatsApp i društvene mreže.</Card>
        <Card tag="AI" title="AI recepcionisti">Virtualni recepcioner koji prima pozive, zakazuje i odgovara 24/7.</Card>
        <Card tag="Automatizacija" title="Automatizacija poslovanja">Povezujemo vaše alate i uklanjamo ponavljajuće zadatke.</Card>
        <Card tag="Dizajn" title="Logo i brending">Kompletna brending rješenja — od logotipa do vizuelnog identiteta.</Card>
        <Card tag="3D" title="3D dizajn">3D modeli i prikazi proizvoda i prostora.</Card>
        <Card tag="AI" title="AI vizualizacija">Realistični vizuali proizvoda, enterijera i kampanja uz pomoć AI.</Card>
      </section>
      <CTA />
    </>
  );
}
