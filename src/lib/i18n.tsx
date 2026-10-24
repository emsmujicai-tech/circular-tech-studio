import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang, type SiteContent } from "@/lib/content";

const STORAGE_KEY = "emsmujic-lang";
const LANG_CODES: Lang[] = ["nb", "en", "bs"];

type LangContextValue = { lang: Lang; setLang: (next: Lang) => void; t: SiteContent };

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  // Norwegian is the default. The stored choice is read after mount so the
  // server-rendered markup and the first client render always match.
  const [lang, setLangState] = useState<Lang>("nb");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && LANG_CODES.includes(saved)) setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice still applies for this visit.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(() => ({ lang, setLang, t: content[lang] }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
