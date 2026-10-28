import { Link } from "@tanstack/react-router";
import { useRef, type ReactNode } from "react";
import { LangSwitcher } from "@/components/lang-switcher";
import { AuthControl } from "@/components/auth-control";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavKey } from "@/lib/content";

const nav: { to: "/" | "/elektronika" | "/servis" | "/it-support" | "/e-otpad" | "/usluge" | "/drone" | "/retro-elektronikk" | "/kontakt"; key: NavKey }[] = [
  { to: "/", key: "home" },
  { to: "/elektronika", key: "electronics" },
  { to: "/servis", key: "service" },
  { to: "/it-support", key: "it" },
  { to: "/e-otpad", key: "ewaste" },
  { to: "/usluge", key: "ai" },
  { to: "/drone", key: "drone" },
  { to: "/retro-elektronikk", key: "retro" },
  { to: "/kontakt", key: "contact" },
];

export const CONTACT = {
  phone: "+47 973 88 326",
  email: "ems.mujic@gmail.com",
};

export function Header() {
  const { t } = useLang();
  const navRef = useRef<HTMLElement>(null);
  const moveNav = (direction: number) => navRef.current?.scrollBy({ left: direction * 240, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="font-display text-lg font-bold">
          EMS <span className="text-primary">Mujic</span>
          <span className="ml-2 hidden text-xs font-normal text-muted-foreground sm:inline">Smart Solutions</span>
        </Link>
        <div className="flex items-center gap-2">
          <AuthControl />
          <LangSwitcher />
        </div>
        <div className="w-full min-w-0 border-t pt-3">
          <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden" aria-label={t.assistant.previousNav} onClick={() => moveNav(-1)}><ChevronLeft /></Button>
          <nav ref={navRef} className="flex min-w-0 flex-1 gap-1 overflow-x-auto text-sm md:justify-center">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {t.nav[n.key]}
              </Link>
            ))}
          </nav>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden" aria-label={t.assistant.nextNav} onClick={() => moveNav(1)}><ChevronRight /></Button>
          </div>
        </div>
      </div>
    </header>
  );
}

const footerLink = "text-muted-foreground transition hover:text-foreground";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-base font-bold text-foreground">EMS Mujic Smart Solutions</p>
          <p className="mt-2 text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.servicesTitle}>
          <p className="font-semibold text-foreground">{t.footer.servicesTitle}</p>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className={footerLink}>{t.nav[n.key]}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t.footer.companyTitle}>
          <p className="font-semibold text-foreground">{t.footer.companyTitle}</p>
          <ul className="mt-3 space-y-2">
            <li><Link to="/personvern" className={footerLink}>{t.footer.privacy}</Link></li>
            <li><Link to="/vilkar" className={footerLink}>{t.footer.terms}</Link></li>
            <li><Link to="/account" className={footerLink}>{t.footer.account}</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-foreground">{t.footer.contactTitle}</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className={footerLink}>{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className={footerLink}>{CONTACT.email}</a></li>
            <li>{t.footer.locations}</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} emsmujic.tech — {t.footer.rights}</p>
          <LangSwitcher />
        </div>
      </div>
    </footer>
  );
}

export function PageHead({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-16">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{kicker}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
      {children && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</p>}
    </section>
  );
}

export function Card({ title, children, tag, className }: { title: string; children: ReactNode; tag?: string; className?: string }) {
  return (
    <div className={["rounded-xl border bg-card p-6 transition hover:border-primary/60", className].filter(Boolean).join(" ")}>
      {tag && <span className="text-xs font-medium uppercase tracking-wider text-accent">{tag}</span>}
      <h3 className="mt-1 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{children}</p>
    </div>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5">
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/40 bg-secondary p-8 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">{t.cta.title}</h2>
          <p className="text-muted-foreground">{t.cta.text}</p>
        </div>
        <Link to="/kontakt" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
