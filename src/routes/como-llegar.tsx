import { createFileRoute } from "@tanstack/react-router";
import { Plane, Car, Bus, Ship } from "lucide-react";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";

const icons = [Plane, Car, Bus, Ship];

export const Route = createFileRoute("/como-llegar")({
  head: () => ({
    meta: [
      { title: "Cómo llegar a Corralejo desde el aeropuerto de Fuerteventura" },
      {
        name: "description",
        content:
          "Cómo llegar a Corralejo: traslado desde el aeropuerto de Fuerteventura, coche de alquiler, guagua (líneas 6 y 8) y ferris a Lanzarote e Isla de Lobos.",
      },
      { property: "og:title", content: "Cómo llegar a Corralejo" },
      {
        property: "og:description",
        content:
          "Aeropuerto, coche, guagua y ferry: todas las formas de llegar a Corralejo.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/como-llegar" },
    ],
    links: [{ rel: "canonical", href: "/como-llegar" }],
  }),
  component: ComoLlegar,
});

function ComoLlegar() {
  const { comoLlegar } = useContent();

  return (
    <>
      <PageHeader
        eyebrow="Cómo llegar"
        title="Llegar a Corralejo paso a paso"
        intro="Corralejo está en el extremo norte de Fuerteventura, a unos 37 kilómetros del aeropuerto. Estas son las opciones habituales y lo que puedes esperar de cada una."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {comoLlegar.map((item, i) => {
            const Icon = icons[i] ?? Plane;
            return (
              <article
                key={item.titulo}
                className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ocean/10 text-ocean">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="min-w-0 font-display text-lg font-semibold text-foreground">
                    {item.titulo}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Horarios, tarifas y frecuencias son orientativos y pueden cambiar según
          la temporada. Consulta siempre las webs oficiales de Tiadhe y de las
          navieras antes de viajar.
        </p>
      </Section>
    </>
  );
}
