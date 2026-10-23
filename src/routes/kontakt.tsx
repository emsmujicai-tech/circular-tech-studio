import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/kontakt")({
  head: () => meta("Kontakt — EMS Mujić Smart Solutions", "Kontaktirajte EMS Mujić za kupovinu elektronike, otkup e-otpada ili AI i dizajn usluge."),
  component: Page,
});

function Page() {
  const items = [
    ["Telefon", CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, "")}`],
    ["Email", CONTACT.email, `mailto:${CONTACT.email}`],
    ["Lokacija", CONTACT.city, undefined],
  ] as const;
  return (
    <>
      <PageHead kicker="Kontakt" title="Razgovarajmo">
        Kupovina, otkup ili novi projekt — javite se pozivom ili emailom.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {items.map(([l, v, href]) => (
          <div key={l} className="rounded-xl border bg-card p-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">{l}</p>
            {href ? <a href={href} className="mt-2 block text-xl font-semibold text-primary">{v}</a> : <p className="mt-2 text-xl font-semibold">{v}</p>}
          </div>
        ))}
      </section>
    </>
  );
}
