import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/montana-roja")({
  staticData: { sitemap: true },
  head: () => lugarHead("/montana-roja"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/montana-roja" />;
}
