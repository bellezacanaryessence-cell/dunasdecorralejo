import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/grandes-playas")({
  staticData: { sitemap: true },
  head: () => lugarHead("/grandes-playas"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/grandes-playas" />;
}
