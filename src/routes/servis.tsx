import { createFileRoute, Link } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";
import { IconCard } from "@/components/icon-card";
import { ServiceIcon, type ServiceIconName } from "@/components/service-icons";
import { useLang } from "@/lib/i18n";
import { ServiceAssistant } from "@/components/service-assistant";

export const Route = createFileRoute("/servis")({
  validateSearch: (search: Record<string, unknown>): { device?: string } => ({ device: typeof search['device'] === "string" ? search['device'].slice(0, 100) : "" }),
  head: () => meta(
    "Service av elektronikk, elsykler, sparkesykler og motorsykler — EMS Mujic",
    "Feilsøking og reparasjon av bærbare PC-er, stasjonære PC-er, nettbrett og mobiltelefoner, samt service av elektriske sparkesykler, sykler og motorsykler.",
  ),
  component: Page,
});

const icons: ServiceIconName[] = ["repair", "phone", "scooter", "ebike", "motorcycle", "desktop"];

function Page() {
  const { t } = useLang();
  const s = t.servis;
  const { device } = Route.useSearch();

  return (
    <>
      <PageHead kicker={s.kicker} title={s.title}>{s.lead}</PageHead>
      <ServiceAssistant initialDevice={device ?? ""} />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2 lg:grid-cols-3">
        {s.services.map(([title, desc], index) => <IconCard key={title} title={title} icon={icons[index] ?? "repair"}>{desc}</IconCard>)}
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <h2 className="text-3xl font-bold">{s.howItWorks}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {s.steps.map(([title, desc], i) => (
            <div key={title} className="rounded-lg border bg-card p-6">
              <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
              <ServiceIcon compact name={(["phone", "repair", "receptionist", "repair"] as ServiceIconName[])[i] ?? "repair"} />
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <div className="rounded-2xl border bg-secondary p-8">
          <h2 className="text-2xl font-bold">{s.buyout.title}</h2>
          <p className="mt-2 text-muted-foreground">{s.buyout.text}</p>
          <Link to="/e-otpad" className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            {s.buyout.button}
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
