import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/isla-de-lobos")({
  staticData: { sitemap: true },
  head: () => lugarHead("/isla-de-lobos"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/isla-de-lobos" />;
}
