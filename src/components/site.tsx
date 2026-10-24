import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LangSwitcher } from "@/components/lang-switcher";
import { useLang } from "@/lib/i18n";
import type { NavKey } from "@/lib/content";

const nav: { to: "/" | "/elektronika" | "/servis" | "/it-support" | "/e-otpad" | "/usluge" | "/kontakt"; key: NavKey }[] = [
  { to: "/", key: "home" },
  { to: "/elektronika", key: "electronics" },
  { to: "/servis", key: "service" },
  { to: "/it-support", key: "it" },
  { to: "/e-otpad", key: "ewaste" },
  { to: "/usluge", key: "ai" },
  { to: "/kontakt", key: "contact" },
];

export const CONTACT = {
  phone: "+47 973 88 326",
  email: "ems.mujic@gmail.com",
};

export function Header() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="font-display text-lg font-bold">
          EMS <span className="text-primary">Mujić</span>
          <span className="ml-2 hidden text-xs font-normal text-muted-foreground sm:inline">Smart Solutions</span>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <nav className="flex flex-wrap gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {t.nav[n.key]}
              </Link>
            ))}
          </nav>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-muted-foreground sm:grid-cols-3">
        <div>
          <p className="font-display text-base font-bold text-foreground">EMS Mujić Smart Solutions</p>
          <p className="mt-2">{t.footer.tagline}</p>
        </div>
        <div>
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.email}</p>
          <p>{t.footer.locations}</p>
        </div>
        <p className="sm:text-right">© {new Date().getFullYear()} emsmujic.tech</p>
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
