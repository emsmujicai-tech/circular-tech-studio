import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowUpRight, ChevronDown, Wrench, ShoppingBag, Recycle, MessageCircle } from "lucide-react";
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
import { useState } from "react";

const images = [laptop, tablet, phone, tv, desktop, scooter, ebike, audio];

export function RepairGallery() {
  const { t } = useLang();
  const g = t.home.gallery;
  const [openDevice, setOpenDevice] = useState<number | null>(null);

  return (
    <section className="mx-auto mt-16 max-w-6xl px-5" aria-labelledby="repair-gallery-title">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{g.kicker}</p>
          <h2 id="repair-gallery-title" className="mt-2 text-3xl font-bold sm:text-4xl">{g.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild><Link to="/servis">{t.home.service.link}<ArrowUpRight /></Link></Button>

        </div>
      </div>
      <div className="device-grid">
        {g.items.map((item, index) => (
          <MotionSurface key={item.title} className="flex h-full flex-col rounded-lg border bg-card group">
            <DropdownMenu modal={false} open={openDevice === index} onOpenChange={(open) => setOpenDevice(open ? index : null)}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="device-trigger group relative flex h-auto w-full flex-col whitespace-normal rounded-lg px-4 pb-5 pt-3 text-center hover:bg-transparent hover:text-foreground" aria-label={`${g.open}: ${item.title}`}
                  onPointerDown={(event) => {
                    // Radix opens on pointer-down by default, before a touch swipe can begin.
                    if (event.pointerType === "touch") event.preventDefault();
                  }}
                  onPointerUp={(event) => {
                    // Native scrolling cancels the pointer, so only a completed tap opens the menu.
                    if (event.pointerType === "touch") setOpenDevice((current) => current === index ? null : index);
                  }}>
                  <img src={images[index]} alt="" width={816} height={816} loading="lazy" draggable={false} className="device-icon aspect-square w-full object-contain" />
                  <span className="mt-2 flex min-h-12 items-center justify-center gap-2 font-display text-lg font-semibold">{item.title}<ChevronDown className="shrink-0 text-accent" /></span>
                  <span className="mt-1 min-h-8 text-xs font-normal text-muted-foreground">{item.text}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8} className="w-72 max-w-[calc(100vw-2rem)] p-2">
                <DropdownMenuLabel className="text-accent">{item.title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/servis" search={{ device: item.title }}><Wrench />{g.repair}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/elektronika"><ShoppingBag />{g.buy}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/e-otpad"><Recycle />{g.sell}</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/servis" search={{ device: item.title }}><MessageCircle />{g.quote}</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild variant="outline" className="mx-3 mb-4 mt-auto whitespace-normal text-xs"><Link to="/servis" search={{ device: item.title }}><Wrench />{t.assistant.enquiry}</Link></Button>
          </MotionSurface>
        ))}
      </div>


    </section>
  );
}