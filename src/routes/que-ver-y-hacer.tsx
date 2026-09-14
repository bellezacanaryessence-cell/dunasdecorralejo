import { createFileRoute } from "@tanstack/react-router";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";

export const Route = createFileRoute("/que-ver-y-hacer")({
  head: () => ({
    meta: [
      { title: "Qué ver en Corralejo y el norte de Fuerteventura: guía local" },
      {
        name: "description",
        content:
          "Qué ver en Corralejo y el norte de Fuerteventura, contado por alguien que vive aquí: dunas, Popcorn Beach, lagos de El Cotillo, Tindaya, Montaña Roja, Majanicho y la Casa de los Coroneles.",
      },
      { property: "og:title", content: "Qué ver en Corralejo y el norte de Fuerteventura" },
      {
        property: "og:description",
        content:
          "Guía local del norte de Fuerteventura: dunas de Corralejo, Popcorn Beach, El Cotillo, Tindaya, Majanicho y surf, con avisos prácticos honestos.",
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
        title="El norte de Fuerteventura, contado desde aquí"
        intro="Esta no es una guía turística más: vivimos en el norte y te contamos lo que de verdad merece la visita, con sus leyendas —dichas como tales— y sus avisos importantes. Del campo dunar a Popcorn Beach, de El Cotillo a Tindaya."
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
                width={1024}
                height={688}
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
                {a.parrafos.map((p, j) => (
                  <p
                    key={j}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
                {"aviso" in a && a.aviso && (
                  <div
                    role="alert"
                    className="mt-6 rounded-2xl border-l-4 border-gold-ink bg-sand p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold-ink">
                      ⚠ {a.aviso.titulo}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {a.aviso.texto}
                    </p>
                  </div>
                )}
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
