import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/vilkar")({
  head: () => meta(
    "Vilkår for bruk — EMS Mujic Smart Solutions",
    "Vilkår for bruk av emsmujic.tech og tjenestene til EMS Mujic.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return <LegalPage section={t.legal.terms} />;
}
