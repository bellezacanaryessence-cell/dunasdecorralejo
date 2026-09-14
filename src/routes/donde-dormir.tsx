import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";

export const Route = createFileRoute("/donde-dormir")({
  head: () => ({
    meta: [
      { title: "Hoteles en Corralejo: dónde dormir junto a las dunas" },
      {
        name: "description",
        content:
          "Selección de hoteles y apartamentos en Corralejo por zonas: primera línea de Grandes Playas, centro del pueblo y alojamientos económicos para surfistas.",
      },
      { property: "og:title", content: "Hoteles en Corralejo: dónde dormir" },
      {
        property: "og:description",
        content:
          "Hoteles y apartamentos en Corralejo por zonas y presupuesto, con disponibilidad en Booking.com.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/donde-dormir" },
    ],
    links: [{ rel: "canonical", href: "/donde-dormir" }],
  }),
  component: DondeDormir,
});

function DondeDormir() {
  const { hoteles } = useContent();

  return (
    <>
      <PageHeader
        eyebrow="Dónde dormir"
        title="Hoteles y apartamentos en Corralejo"
        intro="Corralejo concentra la mayor oferta de alojamiento del norte de Fuerteventura. Estas son cuatro opciones de ejemplo según zona y presupuesto, desde resorts frente a las dunas hasta alojamientos sencillos junto al puerto."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {hoteles.map((h) => (
            <article
              key={h.nombre}
              className="flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={h.imagen}
                alt={`${h.nombre}, alojamiento en ${h.zona}, Corralejo`}
                width={1024}
                height={768}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-ink">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span className="min-w-0 truncate">{h.zona}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-foreground">
                  {h.nombre}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {h.descripcion}
                </p>
                <p className="mt-4 text-sm font-semibold text-ocean">
                  {h.precio}
                </p>
                <AffiliateButton query={h.query} className="mt-5 w-full">
                  Ver disponibilidad
                </AffiliateButton>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          Los alojamientos mostrados son ejemplos orientativos y los precios son
          aproximados. Consulta disponibilidad y condiciones actualizadas en
          Booking.com. Los botones contienen enlaces de afiliado.
        </p>
      </Section>
    </>
  );
}
