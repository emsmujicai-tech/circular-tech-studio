import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { PageHead, meta } from "@/components/site";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => meta(
    "Min konto — EMS Mujic Smart Solutions",
    "Se kontoinformasjonen din hos EMS Mujic.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const a = t.account;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = Route.useRouteContext();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    void navigate({ to: "/login", replace: true });
  }

  const created = user.created_at
    ? new Date(user.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
    : a.unknown;

  return (
    <>
      <PageHead kicker={a.kicker} title={a.title}>{a.lead}</PageHead>
      <section className="mx-auto max-w-md px-5 pb-16">
        <div className="rounded-xl border bg-card p-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">{a.emailLabel}</dt>
              <dd className="mt-0.5 break-all font-semibold">{user.email}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{a.createdLabel}</dt>
              <dd className="mt-0.5 font-semibold">{created}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{a.securityNote}</p>
          <Button variant="outline" className="mt-6 w-full" onClick={() => void signOut()}>
            <LogOut />
            {a.signOut}
          </Button>
        </div>
      </section>
    </>
  );
}
