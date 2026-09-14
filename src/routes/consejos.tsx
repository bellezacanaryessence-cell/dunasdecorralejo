import { createFileRoute } from "@tanstack/react-router";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";

export const Route = createFileRoute("/consejos")({
  head: () => ({
    meta: [
      { title: "Consejos para visitar las Dunas de Corralejo" },
      {
        name: "description",
        content:
          "Mejor época para viajar a Corralejo, clima y viento, qué llevar en la maleta y cómo respetar el Parque Natural de las Dunas de Fuerteventura.",
      },
      { property: "og:title", content: "Consejos prácticos para Corralejo" },
      {
        property: "og:description",
        content:
          "Mejor época, clima, equipaje y normas de respeto al Parque Natural de las Dunas.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/consejos" },
    ],
    links: [{ rel: "canonical", href: "/consejos" }],
  }),
  component: Consejos,
});

function Consejos() {
  const { consejos } = useContent();

  return (
    <>
      <PageHeader
        eyebrow="Consejos prácticos"
        title="Antes de viajar a Corralejo"
        intro="Cuatro claves para aprovechar el viaje y dejar las dunas tal y como las encontraste."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {consejos.map((c) => (
            <article
              key={c.titulo}
              className="rounded-3xl border border-border/70 bg-sand p-7"
            >
              <h2 className="font-display text-xl font-semibold text-foreground">
                {c.titulo}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <AffiliateButton query="Corralejo">
            Buscar alojamiento en Corralejo
          </AffiliateButton>
        </div>
      </Section>
    </>
  );
}
