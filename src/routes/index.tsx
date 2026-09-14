import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-dunas.jpg";
import grandesPlayas from "@/assets/grandes-playas.jpg";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Section } from "@/components/PageLayout";
import { useContent } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dunas de Corralejo: guía de Corralejo, Fuerteventura",
      },
      {
        name: "description",
        content:
          "Guía de las Dunas de Corralejo: qué ver en Corralejo, hoteles en Corralejo, playas, Isla de Lobos, cómo llegar y consejos prácticos de Fuerteventura.",
      },
      {
        property: "og:title",
        content: "Dunas de Corralejo: guía de Corralejo, Fuerteventura",
      },
      {
        property: "og:description",
        content:
          "Parque Natural, Grandes Playas, kitesurf, Isla de Lobos y dónde dormir en Corralejo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Dunas de Corralejo",
          description:
            "Parque Natural de las Dunas de Corralejo, al norte de Fuerteventura, Islas Canarias.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Corralejo",
            addressRegion: "Fuerteventura",
            addressCountry: "ES",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const c = useContent();

  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Dunas doradas del Parque Natural de Corralejo junto al océano turquesa, Fuerteventura"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/25 to-foreground/70" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
            Fuerteventura · Islas Canarias
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-sand drop-shadow-sm sm:text-6xl md:text-7xl">
            {c.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand/90 sm:text-lg">
            {c.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <AffiliateButton query="Corralejo" className="px-8 py-4 text-base">
              {c.hero.cta}
            </AffiliateButton>
            <span className="text-xs text-sand/75">{c.hero.ctaNote}</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
              El Parque Natural
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Un desierto en miniatura frente al Atlántico
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Las Dunas de Corralejo forman un campo dunar de más de 2.600
              hectáreas protegido desde 1982. La arena, formada por restos de
              conchas y organismos marinos, avanza empujada por el alisio hasta
              morir en playas de agua transparente que miran a Isla de Lobos y
              Lanzarote.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A un extremo está Corralejo, un antiguo pueblo pesquero convertido
              en la mejor base para explorar el norte de Fuerteventura: playas,
              deportes de viento, excursiones en barco y una vida tranquila
              alrededor del puerto.
            </p>
            <Link
              to="/que-ver-y-hacer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-ocean/80"
            >
              Qué ver y hacer en Corralejo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={grandesPlayas}
            alt="Grandes Playas de Corralejo con arena blanca e Isla de Lobos al fondo"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/donde-dormir", t: "Dónde dormir", d: "Hoteles y apartamentos en Corralejo, por zonas y presupuesto." },
            { to: "/que-ver-y-hacer", t: "Qué ver y hacer", d: "Dunas, Grandes Playas, kitesurf, Isla de Lobos y miradores." },
            { to: "/como-llegar", t: "Cómo llegar", d: "Desde el aeropuerto, en coche, en guagua y en ferry." },
            { to: "/consejos", t: "Consejos prácticos", d: "Mejor época, clima, qué llevar y respeto al parque." },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-soft"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {card.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.d}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ocean">
                Ver más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl bg-ocean px-6 py-14 text-center sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-ocean-foreground sm:text-3xl">
            ¿Buscas hotel en Corralejo?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ocean-foreground/80">
            Compara hoteles, apartamentos y villas frente a las dunas con
            cancelación gratuita en la mayoría de alojamientos.
          </p>
          <AffiliateButton
            query="Corralejo"
            className="mt-8 bg-gold text-foreground hover:bg-gold/90"
          >
            Ver disponibilidad y precios
          </AffiliateButton>
        </div>
      </Section>
    </>
  );
}
