import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { PageHead, meta } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STATUSES = ["received", "diagnosing", "waiting_parts", "repairing", "ready", "delivered"] as const;
type Status = (typeof STATUSES)[number];

const ordersQuery = queryOptions({
  queryKey: ["service-orders"],
  queryFn: async () => {
    const { data: auth } = await supabase.auth.getUser();
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", auth.user?.id ?? "")
      .eq("role", "admin");
    if (!roles?.length) return { admin: false, orders: [] };
    const { data, error } = await supabase
      .from("service_orders")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return { admin: true, orders: data };
  },
});

export const Route = createFileRoute("/_authenticated/orders")({
  head: () => ({
    ...meta("Serviceordrer — EMS Mujic", "Administrer serviceordrer for kundehjelpen."),
    meta: [
      ...meta("Serviceordrer — EMS Mujic", "Administrer serviceordrer for kundehjelpen.").meta,
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(ordersQuery),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const s = t.support;
  const qc = useQueryClient();
  const { data } = useSuspenseQuery(ordersQuery);
  const [busy, setBusy] = useState(false);
  const label = (st: string) => s[`s_${st}` as `s_${Status}`] ?? st;

  async function add(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setBusy(true);
    const { error } = await supabase.from("service_orders").insert({
      order_number: String(f.get("order_number")).trim().toUpperCase(),
      customer_email: String(f.get("customer_email")).trim().toLowerCase(),
      device: String(f.get("device")).trim(),
      customer_note: String(f.get("customer_note") ?? "").trim(),
    });
    setBusy(false);
    if (error) return toast.error(s.failed);
    form.reset();
    toast.success(s.saved);
    void qc.invalidateQueries({ queryKey: ordersQuery.queryKey });
  }

  async function update(id: string, patch: { status?: string; customer_note?: string }) {
    const { error } = await supabase
      .from("service_orders")
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (error) return toast.error(s.failed);
    toast.success(s.saved);
    void qc.invalidateQueries({ queryKey: ordersQuery.queryKey });
  }

  if (!data.admin)
    return (
      <PageHead kicker={s.adminKicker} title={s.adminTitle}>
        {s.notAdmin}
      </PageHead>
    );

  return (
    <>
      <PageHead kicker={s.adminKicker} title={s.adminTitle}>
        {s.adminLead}
      </PageHead>
      <section className="mx-auto max-w-6xl space-y-8 px-5">
        <form onSubmit={add} className="grid gap-4 rounded-xl border bg-card p-6 md:grid-cols-2">
          {(
            [
              ["order_number", s.orderNumber, "text", 40],
              ["customer_email", s.customerEmail, "email", 254],
              ["device", s.device, "text", 200],
              ["customer_note", s.note, "text", 1000],
            ] as const
          ).map(([name, text, type, max]) => (
            <div key={name} className="space-y-2">
              <Label htmlFor={name}>{text}</Label>
              <Input
                id={name}
                name={name}
                type={type}
                maxLength={max}
                required={name !== "customer_note"}
                minLength={name === "order_number" ? 3 : undefined}
              />
            </div>
          ))}
          <Button type="submit" disabled={busy} className="md:col-span-2 md:justify-self-start">
            {s.add}
          </Button>
        </form>
        {data.orders.length === 0 ? (
          <p className="text-muted-foreground">{s.empty}</p>
        ) : (
          <ul className="space-y-3">
            {data.orders.map((o) => (
              <li key={o.id} className="grid gap-3 rounded-xl border bg-card p-5 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-display font-bold">
                    {o.order_number} · {o.device}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {o.customer_email} · {s.updatedLabel}{" "}
                    {new Date(o.updated_at).toLocaleDateString()}
                  </p>
                  <Input
                    aria-label={s.note}
                    defaultValue={o.customer_note}
                    maxLength={1000}
                    className="mt-3"
                    onBlur={(e) =>
                      e.target.value !== o.customer_note &&
                      void update(o.id, { customer_note: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`st-${o.id}`}>{s.statusLabel}</Label>
                  <select
                    id={`st-${o.id}`}
                    defaultValue={o.status}
                    onChange={(e) => void update(o.id, { status: e.target.value })}
                    className="block h-10 w-full rounded-md border bg-background px-3 text-sm"
                  >
                    {STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {label(st)}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
