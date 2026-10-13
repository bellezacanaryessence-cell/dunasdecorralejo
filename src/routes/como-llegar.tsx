import { createFileRoute } from "@tanstack/react-router";
import { Plane, Car, Bus, Ship } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";
import { DISCOVERCARS_URL } from "@/config/site";
import accesoParque from "@/assets/img_8314.webp.asset.json";
import carreteraAtardecer from "@/assets/img_8305.webp.asset.json";

const icons = [Plane, Car, Bus, Ship];

export const Route = createFileRoute("/como-llegar")({
  staticData: { sitemap: true },
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
  const { comoLlegar, alquilerCoche } = useContent();

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

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <img
            src={accesoParque.url}
            alt="Carretera de acceso al Parque Natural de las Dunas de Corralejo, con el cartel de espacio natural protegido y el océano al fondo"
            width={1600}
            height={900}
            loading="lazy"
            className="h-64 w-full rounded-3xl object-cover shadow-soft"
          />
          <img
            src={carreteraAtardecer.url}
            alt="Carretera hacia las Dunas de Corralejo al atardecer, entre malpaís volcánico y el mar, con un coche de frente"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-64 w-full rounded-3xl object-cover shadow-soft"
          />
        </div>

        <div className="mt-10 rounded-3xl border border-border/70 bg-sand p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {alquilerCoche.titulo}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {alquilerCoche.texto}
          </p>
          <AffiliateButton href={DISCOVERCARS_URL} className="mt-6">
            {alquilerCoche.cta}
          </AffiliateButton>
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
