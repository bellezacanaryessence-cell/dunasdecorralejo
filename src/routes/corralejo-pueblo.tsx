import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/corralejo-pueblo")({
  staticData: { sitemap: true },
  head: () => lugarHead("/corralejo-pueblo"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/corralejo-pueblo" />;
}
