import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/popcorn-beach")({
  staticData: { sitemap: true },
  head: () => lugarHead("/popcorn-beach"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/popcorn-beach" />;
}
