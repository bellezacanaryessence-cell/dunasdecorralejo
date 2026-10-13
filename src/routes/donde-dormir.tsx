import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";
import { affiliateLink } from "@/config/site";

export const Route = createFileRoute("/donde-dormir")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Hoteles en Corralejo: dónde dormir junto a las dunas" },
      {
        name: "description",
        content:
          "Dónde alojarse en Corralejo según lo que busques: centro y puerto, junto a las Grandes Playas y las dunas, o la zona tranquila de Bristol.",
      },
      { property: "og:title", content: "Hoteles en Corralejo: dónde dormir" },
      {
        property: "og:description",
        content:
          "Las tres mejores zonas para alojarse en Corralejo, con disponibilidad en Booking.com.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/donde-dormir" },
    ],
    links: [{ rel: "canonical", href: "/donde-dormir" }],
  }),
  component: DondeDormir,
});

function DondeDormir() {
  const { zonas } = useContent();

  return (
    <>
      <PageHeader
        eyebrow="Dónde dormir"
        title="Dónde alojarse en Corralejo"
        intro="Corralejo concentra la mayor oferta de alojamiento del norte de Fuerteventura. Más que un hotel concreto, lo importante es elegir bien la zona: estas son las tres que recomendamos según lo que busques."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {zonas.map((z, i) => (
            <article
              key={z.nombre}
              className="flex flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-ink">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Zona {i + 1}</span>
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold text-foreground">
                {z.nombre}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {z.descripcion}
              </p>
              <AffiliateButton
                href={affiliateLink(z.query, {
                  dest_id: z.destId,
                  dest_type: "landmark",
                  order: "distance_from_search",
                })}
                className="mt-5 w-full"
              >
                Ver alojamientos en Booking
              </AffiliateButton>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          Consulta precios, disponibilidad y condiciones actualizadas en
          Booking.com. Los botones contienen enlaces de afiliado.
        </p>
      </Section>
    </>
  );
}
