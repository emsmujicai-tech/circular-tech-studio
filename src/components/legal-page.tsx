import { PageHead } from "@/components/site";

type LegalSection = {
  kicker: string;
  title: string;
  lead: string;
  updated: string;
  sections: { title: string; text: string }[];
};

export function LegalPage({ section }: { section: LegalSection }) {
  return (
    <>
      <PageHead kicker={section.kicker} title={section.title}>{section.lead}</PageHead>
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <p className="text-sm text-muted-foreground">{section.updated}</p>
        <div className="mt-8 space-y-8">
          {section.sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
