import { ArrowUpRight, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

const PETITION_URL =
  "https://www.petitions.com/gjor_elsparkesykler_tryggere_innfor_intelligent_lydvarsling_for_fotgjengere";

export function PetitionBanner() {
  const { t } = useLang();
  const p = t.petition;
  return (
    <section className="mx-auto mt-20 max-w-6xl px-5">
      <div className="flex flex-col gap-6 rounded-2xl border border-primary/40 bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <Megaphone className="mt-1 size-8 shrink-0 text-primary" aria-hidden />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.kicker}</p>
            <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">{p.text}</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.share}</p>
          </div>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <a href={PETITION_URL} target="_blank" rel="noopener noreferrer">
            {p.button}
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
