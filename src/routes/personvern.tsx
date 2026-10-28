import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { meta } from "@/components/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/personvern")({
  head: () => meta(
    "Personvernerklæring — EMS Mujic Smart Solutions",
    "Slik behandler EMS Mujic personopplysninger når du bruker emsmujic.tech.",
  ),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return <LegalPage section={t.legal.privacy} />;
}
