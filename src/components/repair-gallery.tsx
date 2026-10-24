import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Expand } from "lucide-react";
import { Link } from "@tanstack/react-router";
import ps5 from "@/assets/repair-ps5.jpg";
import scooter from "@/assets/repair-scooter.jpg";
import laptop from "@/assets/repair-laptop.jpg";
import ebike from "@/assets/repair-ebike.jpg";
import { Button } from "@/components/ui/button";
import { MotionSurface } from "@/components/motion-surface";
import { useLang } from "@/lib/i18n";

const images = [ps5, scooter, laptop, ebike];

export function RepairGallery() {
  const { t } = useLang();
  const g = t.home.gallery;
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? null : g.items[selected];
  function step(direction: number) {
    setSelected((index) => index === null ? null : (index + direction + images.length) % images.length);
  }

  return (
    <section className="mx-auto mt-16 max-w-6xl px-5" aria-labelledby="repair-gallery-title">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{g.kicker}</p>
          <h2 id="repair-gallery-title" className="mt-2 text-3xl font-bold sm:text-4xl">{g.title}</h2>
        </div>
        <Button variant="outline" asChild><Link to="/servis">{t.home.service.link}<ArrowUpRight /></Link></Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {g.items.map((item, index) => (
          <MotionSurface key={item.title} className="repair-tile group">
            <Button variant="ghost" className="relative block h-auto w-full overflow-hidden rounded-none p-0 text-left hover:bg-transparent hover:text-foreground" aria-label={`${g.open}: ${item.title}`} onClick={() => setSelected(index)}>
              <img src={images[index]} alt={item.alt} width={1280} height={960} loading="lazy" className="repair-image aspect-[4/3] w-full object-cover" />
              <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-foreground/30 bg-scrim text-foreground"><Expand className="size-4" /></span>
              <span className="repair-caption absolute inset-x-0 bottom-0 px-6 pb-6 pt-20 text-foreground">
                <span className="mb-2 block text-xs uppercase tracking-widest text-accent">{item.text}</span>
                <span className="flex items-center justify-between gap-3 whitespace-normal font-display text-2xl font-semibold">{item.title}<ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
              </span>
            </Button>
          </MotionSurface>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{g.note}</p>
      <Dialog.Root open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-scrim backdrop-blur-sm" />
          <Dialog.Content aria-describedby="repair-image-description" className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border bg-background shadow-xl" onKeyDown={(event) => { if (event.key === "ArrowRight") step(1); if (event.key === "ArrowLeft") step(-1); }}>
            {current && selected !== null && <>
              <img src={images[selected]} alt={current.alt} width={1280} height={960} className="max-h-[65dvh] w-full object-contain" />
              <div className="flex items-center justify-between gap-3 p-4">
                <div><Dialog.Title className="font-display text-xl font-semibold">{current.title}</Dialog.Title><Dialog.Description id="repair-image-description" className="mt-1 text-sm text-muted-foreground">{g.note}</Dialog.Description></div>
                <div className="flex shrink-0 gap-2"><Button variant="outline" size="icon" aria-label={g.previous} title={g.previous} onClick={() => step(-1)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label={g.next} title={g.next} onClick={() => step(1)}><ArrowRight /></Button></div>
              </div>
            </>}
            <Dialog.Close asChild><Button variant="secondary" size="icon" className="absolute right-3 top-3" aria-label={g.close} title={g.close}><X /></Button></Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}