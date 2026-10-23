import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Početna" },
  { to: "/elektronika", label: "Polovna elektronika" },
  { to: "/e-otpad", label: "Otkup e-otpada" },
  { to: "/usluge", label: "AI & Dizajn" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const CONTACT = {
  phone: "+387 61 000 000",
  email: "info@emsmujic.tech",
  city: "Bosna i Hercegovina",
};

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="font-display text-lg font-bold">
          EMS <span className="text-primary">Mujić</span>
          <span className="ml-2 hidden text-xs font-normal text-muted-foreground sm:inline">Smart Solutions</span>
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-muted-foreground sm:grid-cols-3">
        <div>
          <p className="font-display text-base font-bold text-foreground">EMS Mujić Smart Solutions</p>
          <p className="mt-2">Polovna elektronika, e-mobilnost, reciklaža i AI rješenja.</p>
        </div>
        <div>
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.city}</p>
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

export function Card({ title, children, tag }: { title: string; children: ReactNode; tag?: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 transition hover:border-primary/60">
      {tag && <span className="text-xs font-medium uppercase tracking-wider text-accent">{tag}</span>}
      <h3 className="mt-1 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{children}</p>
    </div>
  );
}

export function CTA() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5">
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/40 bg-secondary p-8 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Imate pitanje ili uređaj za prodaju?</h2>
          <p className="text-muted-foreground">Javite se — odgovaramo brzo.</p>
        </div>
        <Link to="/kontakt" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
          Kontaktirajte nas
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
