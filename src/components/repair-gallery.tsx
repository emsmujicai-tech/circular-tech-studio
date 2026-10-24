import { useEffect, useRef, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Wrench, ShoppingBag, Recycle, MessageCircle, Pause, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import tablet from "@/assets/icon-tablet.png";
import phone from "@/assets/icon-phone.png";
import tv from "@/assets/icon-tv.png";
import desktop from "@/assets/icon-desktop.png";
import audio from "@/assets/icon-audio.png";
import scooter from "@/assets/icon-scooter.png";
import laptop from "@/assets/icon-laptop.png";
import ebike from "@/assets/icon-ebike.png";
import { Button } from "@/components/ui/button";
import { MotionSurface } from "@/components/motion-surface";
import { useLang } from "@/lib/i18n";

const images = [laptop, tablet, phone, tv, desktop, scooter, ebike, audio];

export function RepairGallery() {
  const { t } = useLang();
  const g = t.home.gallery;
  const [selected, setSelected] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  function slide(direction: number, automatic = false) {
    const element = track.current;
    if (!element) return;
    if (!automatic) setPaused(true);
    const distance = (element.firstElementChild?.getBoundingClientRect().width ?? 280) + 20;
    const max = element.scrollWidth - element.clientWidth;
    const target = direction > 0 && element.scrollLeft >= max - 4 ? 0 : direction < 0 && element.scrollLeft <= 4 ? max : element.scrollLeft + distance * direction;
    element.scrollTo({ left: target, behavior: reduced ? "instant" : "smooth" });
  }
  useEffect(() => {
    if (paused || interacting || reduced || selected !== null) return;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element || document.hidden) return;
      const distance = (element.firstElementChild?.getBoundingClientRect().width ?? 280) + 20;
      element.scrollTo({ left: element.scrollLeft >= element.scrollWidth - element.clientWidth - 4 ? 0 : element.scrollLeft + distance, behavior: "smooth" });
    }, 3500);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reduced, selected]);

  return (
    <section className="mx-auto mt-16 max-w-6xl px-5" aria-labelledby="repair-gallery-title">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{g.kicker}</p>
          <h2 id="repair-gallery-title" className="mt-2 text-3xl font-bold sm:text-4xl">{g.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild><Link to="/servis">{t.home.service.link}<ArrowUpRight /></Link></Button>
          <Button variant="outline" size="icon" aria-label={g.previous} title={g.previous} onClick={() => slide(-1)}><ArrowLeft /></Button>
          <Button variant="outline" size="icon" aria-label={paused || reduced ? g.play : g.pause} title={paused || reduced ? g.play : g.pause} disabled={reduced} onClick={() => setPaused(!paused)}>{paused || reduced ? <Play /> : <Pause />}</Button>
          <Button variant="outline" size="icon" aria-label={g.next} title={g.next} onClick={() => slide(1)}><ArrowRight /></Button>
        </div>
      </div>
      <div ref={track} className="gallery-track" onPointerEnter={() => setInteracting(true)} onPointerLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }} onTouchStart={() => setPaused(true)}>
        {g.items.map((item, index) => (
          <MotionSurface key={item.title} className="gallery-slide rounded-lg border bg-card group">
            <DropdownMenu onOpenChange={(open) => setSelected(open ? index : null)}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="device-trigger group relative flex h-auto w-full flex-col whitespace-normal rounded-lg px-4 pb-5 pt-3 text-center hover:bg-transparent hover:text-foreground" aria-label={`${g.open}: ${item.title}`}>
                  <img src={images[index]} alt="" width={816} height={816} loading="lazy" className="device-icon aspect-square w-full object-contain" />
                  <span className="mt-2 flex min-h-12 items-center justify-center gap-2 font-display text-lg font-semibold">{item.title}<ChevronDown className="shrink-0 text-accent" /></span>
                  <span className="mt-1 min-h-8 text-xs font-normal text-muted-foreground">{item.text}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8} className="w-72 max-w-[calc(100vw-2rem)] p-2">
                <DropdownMenuLabel className="text-accent">{item.title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/servis"><Wrench />{g.repair}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/elektronika"><ShoppingBag />{g.buy}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/e-otpad"><Recycle />{g.sell}</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/kontakt"><MessageCircle />{g.quote}</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </MotionSurface>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{g.note}</p>

    </section>
  );
}