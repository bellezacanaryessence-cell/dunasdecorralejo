import { createFileRoute } from "@tanstack/react-router";
import { LugarPage, lugarHead } from "@/components/LugarPage";

export const Route = createFileRoute("/el-cotillo")({
  staticData: { sitemap: true },
  head: () => lugarHead("/el-cotillo"),
  component: Page,
});

function Page() {
  return <LugarPage slug="/el-cotillo" />;
}
