import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, PageHead, meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/kontakt")({
  head: () => meta(
    "Kontakt — EMS Mujić Smart Solutions",
    "Kontakt EMS Mujić i Bergen og Stord for kjøp av brukt elektronikk, service, oppkjøp av elektronavfall eller AI- og designløsninger.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const k = t.kontakt;

  const items: [string, string, string | undefined][] = [
    [k.labels.phone, CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, "")}`],
    [k.labels.email, CONTACT.email, `mailto:${CONTACT.email}`],
    [k.labels.location, t.footer.locations, undefined],
  ];

  return (
    <>
      <PageHead kicker={k.kicker} title={k.title}>{k.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {items.map(([label, value, href]) => (
          <div key={label} className="rounded-xl border bg-card p-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">{label}</p>
            {href ? (
              <a href={href} className="mt-2 block text-xl font-semibold text-primary">{value}</a>
            ) : (
              <p className="mt-2 text-xl font-semibold">{value}</p>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
