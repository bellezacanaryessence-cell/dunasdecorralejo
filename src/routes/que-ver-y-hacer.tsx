import { createFileRoute } from "@tanstack/react-router";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";

export const Route = createFileRoute("/que-ver-y-hacer")({
  head: () => ({
    meta: [
      { title: "Qué ver en Corralejo: dunas, playas e Isla de Lobos" },
      {
        name: "description",
        content:
          "Qué ver y hacer en Corralejo: Parque Natural de las Dunas, Grandes Playas, kitesurf y windsurf, Isla de Lobos, el pueblo pesquero y los mejores miradores.",
      },
      { property: "og:title", content: "Qué ver en Corralejo, Fuerteventura" },
      {
        property: "og:description",
        content:
          "Dunas, Grandes Playas, kitesurf, Isla de Lobos, el pueblo y los miradores del norte de Fuerteventura.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/que-ver-y-hacer" },
    ],
    links: [{ rel: "canonical", href: "/que-ver-y-hacer" }],
  }),
  component: QueVer,
});

function QueVer() {
  const { atracciones } = useContent();

  return (
    <>
      <PageHeader
        eyebrow="Qué ver y hacer"
        title="Los imprescindibles de Corralejo"
        intro="Del campo dunar protegido al islote volcánico de Lobos, el norte de Fuerteventura reúne playas enormes, viento perfecto para el kitesurf y un pueblo marinero para terminar el día."
      />

      <Section>
        <div className="space-y-14">
          {atracciones.map((a, i) => (
            <article
              key={a.titulo}
              className="grid gap-7 md:grid-cols-2 md:items-center"
            >
              <img
                src={a.imagen}
                alt={a.titulo}
                width={1200}
                height={800}
                loading="lazy"
                className={`w-full rounded-3xl object-cover shadow-soft ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {a.titulo}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {a.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/70 bg-sand p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Duerme a un paso de las dunas
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Alojarte en Corralejo te deja todos estos planes a menos de quince
            minutos.
          </p>
          <AffiliateButton query="Corralejo" className="mt-6">
            Ver alojamientos en Corralejo
          </AffiliateButton>
        </div>
      </Section>
    </>
  );
}
