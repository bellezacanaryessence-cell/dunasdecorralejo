import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/la-oliva")({
  staticData: { sitemap: true },
  head: () => lugarHead("/la-oliva"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/la-oliva" />;
}
