import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { LoaderCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { PageHead, meta } from "@/components/site";

type Mode = "signin" | "signup" | "forgot";

function safeRedirect(value: unknown): string {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? value : "/account";
}

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): { redirect: string } => ({
    redirect: safeRedirect(search["redirect"]),
  }),
  head: () => meta(
    "Logg inn — EMS Mujic Smart Solutions",
    "Logg inn på kontoen din, opprett en ny konto eller tilbakestill passordet hos EMS Mujic.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const a = t.auth;
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    void supabase.auth.getUser().then(({ data }) => {
      if (active && data.user) void navigate({ to: redirect, replace: true });
    });
    return () => {
      active = false;
    };
  }, [navigate, redirect]);

  function mapError(message: string | undefined): string {
    const m = (message ?? "").toLowerCase();
    if (m.includes("invalid login")) return a.invalidCredentials;
    if (m.includes("email not confirmed")) return a.emailNotConfirmed;
    if (m.includes("already registered") || m.includes("already been registered")) return a.userExists;
    if (m.includes("rate limit") || m.includes("too many")) return a.rateLimited;
    return a.genericError;
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setNotice("");
    const cleanEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError(a.invalidEmail);
      return;
    }
    if (mode !== "forgot") {
      if (password.length < 8) {
        setError(a.minPassword);
        return;
      }
      if (mode === "signup" && password !== confirm) {
        setError(a.passwordMismatch);
        return;
      }
    }
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error: err } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
        if (err) {
          setError(mapError(err.message));
          return;
        }
        await navigate({ to: redirect, replace: true });
      } else if (mode === "signup") {
        const { data, error: err } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (err) {
          setError(mapError(err.message));
          return;
        }
        if (data.session) await navigate({ to: redirect, replace: true });
        else setNotice(a.checkEmailText);
      } else {
        const { error: err } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (err) {
          setError(mapError(err.message));
          return;
        }
        setNotice(a.resetSent);
      }
    } catch {
      setError(a.genericError);
    } finally {
      setBusy(false);
    }
  }

  const tabs: { id: Mode; label: string }[] = [
    { id: "signin", label: a.signInTab },
    { id: "signup", label: a.signUpTab },
    { id: "forgot", label: a.forgotTab },
  ];

  const autoComplete = mode === "signin" ? "current-password" : "new-password";

  return (
    <>
      <PageHead kicker={a.kicker} title={a.title}>{a.lead}</PageHead>
      <section className="mx-auto max-w-md px-5 pb-16">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex gap-1 rounded-lg border p-1" role="tablist" aria-label={a.kicker}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={mode === tab.id}
                variant={mode === tab.id ? "secondary" : "ghost"}
                size="sm"
                className="flex-1"
                onClick={() => {
                  setMode(tab.id);
                  setError("");
                  setNotice("");
                }}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {mode === "forgot" && (
            <div className="mt-5">
              <h2 className="text-lg font-semibold">{a.forgotTitle}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{a.forgotText}</p>
            </div>
          )}

          <form onSubmit={submit} className="mt-5 space-y-4" noValidate>
            <div>
              <label htmlFor="auth-email" className="block text-sm font-medium">
                {a.email}
              </label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                maxLength={254}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={error || notice ? "auth-feedback" : undefined}
                className="mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5"
              />
            </div>

            {mode !== "forgot" && (
              <div>
                <label htmlFor="auth-password" className="block text-sm font-medium">
                  {a.password}
                </label>
                <input
                  id="auth-password"
                  type="password"
                  autoComplete={autoComplete}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby={error || notice ? "auth-feedback" : undefined}
                  className="mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5"
                />
                {mode === "signup" && <p className="mt-1.5 text-xs text-muted-foreground">{a.minPassword}</p>}
              </div>
            )}

            {mode === "signup" && (
              <div>
                <label htmlFor="auth-confirm" className="block text-sm font-medium">
                  {a.confirmPassword}
                </label>
                <input
                  id="auth-confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  aria-describedby={error || notice ? "auth-feedback" : undefined}
                  className="mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5"
                />
              </div>
            )}

            <div id="auth-feedback" aria-live="polite">
              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}
              {notice && <p className="text-sm text-primary">{notice}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <LoaderCircle className="animate-spin motion-reduce:animate-none" />}
              {mode === "signin" ? a.signInButton : mode === "signup" ? a.signUpButton : a.sendResetButton}
            </Button>
          </form>

          <p className="mt-5 text-sm text-muted-foreground">
            {mode === "signin" ? (
              <button type="button" className="underline hover:text-foreground" onClick={() => setMode("signup")}>
                {a.switchToSignUp}
              </button>
            ) : (
              <button type="button" className="underline hover:text-foreground" onClick={() => setMode("signin")}>
                {a.switchToSignIn}
              </button>
            )}
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/kontakt" className="underline hover:text-foreground">
            {t.cta.button}
          </Link>
        </p>
      </section>
    </>
  );
}
