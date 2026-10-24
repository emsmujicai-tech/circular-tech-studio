import { useEffect, useRef, useState } from "react";
import { LANGS } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={lang === "nb" ? "Velg språk" : lang === "en" ? "Choose language" : "Odaberi jezik"}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition hover:bg-secondary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        <span className="font-semibold">{current?.short ?? lang.toUpperCase()}</span>
        <span aria-hidden className="text-xs text-muted-foreground">▾</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={lang === "nb" ? "Språk" : lang === "en" ? "Language" : "Jezik"}
          className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          {LANGS.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full rounded-md px-3 py-1.5 text-left text-sm transition hover:bg-secondary ${
                  l.code === lang ? "font-semibold text-primary" : ""
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
