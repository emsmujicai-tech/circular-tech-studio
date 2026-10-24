import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead, meta } from "@/components/site";
import { MotionSurface } from "@/components/motion-surface";
import { useLang } from "@/lib/i18n";
import chatbot from "@/assets/smart-chatbot.png";
import receptionist from "@/assets/smart-receptionist.png";
import automation from "@/assets/smart-automation.png";
import branding from "@/assets/smart-branding.png";
import modelling from "@/assets/smart-3d.png";
import visualisation from "@/assets/smart-visualisation.png";

const icons = [chatbot, receptionist, automation, branding, modelling, visualisation];

export const Route = createFileRoute("/usluge")({
  head: () => meta(
    "AI, automatisering og branding — EMS Mujic",
    "AI-botter, AI-resepsjonister, forretningsautomatisering, logo, 3D-design og AI-visualisering.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const u = t.usluge;

  return (
    <>
      <PageHead kicker={u.kicker} title={u.title}>{u.lead}</PageHead>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3" aria-label={u.title}>
        {u.cards.map((c, index) => (
          <MotionSurface key={c.title} className="smart-tile flex flex-col rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">{c.tag}</span>
              <span aria-hidden="true" className="font-display text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex h-44 items-center justify-center py-3">
              <img src={icons[index]} alt="" loading="lazy" width={816} height={816} className="service-icon h-full w-auto max-w-full object-contain" />
            </div>
            <h2 className="smart-title mt-3 font-display text-xl font-semibold leading-snug">{c.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
          </MotionSurface>
        ))}
      </section>
      <CTA />
    </>
  );
}
