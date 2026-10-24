import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";
import { ServiceIcon, type ServiceIconName } from "@/components/service-icons";
import { MotionSurface } from "@/components/motion-surface";
import { useLang } from "@/lib/i18n";
import { RetroTeaser } from "@/components/retro-teaser";

export const Route = createFileRoute("/e-otpad")({
  head: () => meta(
    "Oppkjøp og resirkulering av elektronavfall — EMS Mujic",
    "Vi kjøper opp gammel og defekt elektronikk, sorterer den og resirkulerer den ansvarlig.",
  ),
  component: Page,
});

const icons: ServiceIconName[] = ["phone", "laptop", "community", "recycling"];

function Page() {
  const { t } = useLang();
  const e = t.eotpad;

  return (
    <>
      <PageHead kicker={e.kicker} title={e.title}>{e.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {e.steps.map(([title, desc], i) => (
          <MotionSurface key={title} className="rounded-lg border bg-card p-6">
            <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
            <ServiceIcon name={icons[i] ?? "recycling"} />
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-muted-foreground">{desc}</p>
          </MotionSurface>
        ))}
      </section>
      <RetroTeaser />
      <CTA />
    </>
  );
}
