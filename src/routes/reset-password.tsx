import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { LoaderCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/reset-password")({
  head: () => meta(
    "Nytt passord — EMS Mujic Smart Solutions",
    "Velg et nytt passord for kontoen din hos EMS Mujic.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const a = t.auth;
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setReady(true);
    });
    if (typeof window !== "undefined" && window.location.hash.includes("type=recovery")) setReady(true);
    return () => sub.subscription.unsubscribe();
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (password.length < 8) {
      setError(a.minPassword);
      return;
    }
    if (password !== confirm) {
      setError(a.passwordMismatch);
      return;
    }
    setBusy(true);
    try {
      const { error: err } = await supabase.auth.updateUser({ password });
      if (err) {
        setError(a.genericError);
        return;
      }
      setDone(true);
    } catch {
      setError(a.genericError);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHead kicker={a.kicker} title={a.resetTitle}>{a.resetText}</PageHead>
      <section className="mx-auto max-w-md px-5 pb-16">
        <div className="rounded-xl border bg-card p-6">
          {done ? (
            <div aria-live="polite" className="space-y-4">
              <p className="text-sm text-primary">{a.resetDone}</p>
              <Button asChild className="w-full">
                <Link to="/login">{a.backToLogin}</Link>
              </Button>
            </div>
          ) : !ready ? (
            <div className="space-y-4">
              <p className="text-sm text-destructive" role="alert">
                {a.resetExpired}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">{a.backToLogin}</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="reset-password" className="block text-sm font-medium">
                  {a.newPassword}
                </label>
                <input
                  id="reset-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby={error ? "reset-feedback" : undefined}
                  className="mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5"
                />
                <p className="mt-1.5 text-xs text-muted-foreground">{a.minPassword}</p>
              </div>
              <div>
                <label htmlFor="reset-confirm" className="block text-sm font-medium">
                  {a.confirmPassword}
                </label>
                <input
                  id="reset-confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  aria-describedby={error ? "reset-feedback" : undefined}
                  className="mt-1.5 block w-full rounded-md border bg-background px-3 py-2.5"
                />
              </div>
              <div id="reset-feedback" aria-live="polite">
                {error && (
                  <p role="alert" className="text-sm text-destructive">
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={busy}>
                {busy && <LoaderCircle className="animate-spin motion-reduce:animate-none" />}
                {a.resetButton}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
