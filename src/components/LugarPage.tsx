import { Link } from "@tanstack/react-router";
import { AffiliateButton } from "@/components/AffiliateButton";
import { PageHeader, Section } from "@/components/PageLayout";
import { useContent } from "@/content";
import { getContent } from "@/content";
import { DISCOVERCARS_URL, gygLink } from "@/config/site";

function getLugar(slug: string) {
  const c = getContent();
  const lugar = c.lugares.find((l) => l.slug === slug)!;
  const base = c.atracciones.find((a) => "guia" in a && a.guia === slug);
  return { lugar, base };
}

/** head() compartido para las páginas de lugar. */
export function lugarHead(slug: string) {
  const { lugar } = getLugar(slug);
  return {
    meta: [
      { title: lugar.meta.title },
      { name: "description", content: lugar.meta.description },
      { property: "og:title", content: lugar.meta.title },
      { property: "og:description", content: lugar.meta.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: slug },
    ],
    links: [{ rel: "canonical", href: slug }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: lugar.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}

function Bloque({ titulo, items }: { titulo: string; items: readonly string[] }) {
  return (
    <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
      <h2 className="font-display text-xl font-semibold text-foreground">{titulo}</h2>
      {items.map((t, i) => (
        <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t}
        </p>
      ))}
    </div>
  );
}

export function LugarPage({ slug }: { slug: string }) {
  const { lugares } = useContent();
  const { lugar, base } = getLugar(slug);
  const parrafos = [...(lugar.propio?.parrafos ?? base?.parrafos ?? []), ...lugar.extra];
  const imagen = lugar.propio?.imagen ?? base?.imagen;
  const aviso = lugar.propio?.aviso ?? (base && "aviso" in base ? base.aviso : undefined);
  const href =
    lugar.afiliado.tipo === "coche" ? DISCOVERCARS_URL : gygLink(lugar.afiliado.query);

  return (
    <>
      <PageHeader eyebrow={lugar.eyebrow} title={lugar.h1} intro={lugar.intro} />

      <Section>
        <article className="grid gap-7 md:grid-cols-2 md:items-start">
          {imagen && (
            <img
              src={imagen}
              alt={lugar.nombre}
              width={1024}
              height={688}
              className="w-full rounded-3xl object-cover shadow-soft"
            />
          )}
          <div className="min-w-0">
            {parrafos.map((p, i) => (
              <p
                key={i}
                className={`${i ? "mt-4" : ""} text-base leading-relaxed text-muted-foreground`}
              >
                {p}
              </p>
            ))}
            {aviso && (
              <div
                role="alert"
                className="mt-6 rounded-2xl border-l-4 border-gold-ink bg-sand p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-ink">
                  ⚠ {aviso.titulo}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{aviso.texto}</p>
              </div>
            )}
            <AffiliateButton href={href} className="mt-6">
              {lugar.afiliado.label}
            </AffiliateButton>
          </div>
        </article>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Bloque titulo="Cómo llegar desde Corralejo" items={lugar.comoLlegar} />
          <Bloque titulo="Mejor momento para ir" items={lugar.mejorMomento} />
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-semibold text-foreground">Consejos</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {lugar.consejos.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-5 space-y-3">
            {lugar.faq.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-soft"
              >
                <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-border/70 bg-sand p-8">
          <h2 className="text-center font-display text-2xl font-semibold text-foreground">
            Otros lugares del norte
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {lugares
              .filter((l) => l.slug !== slug)
              .map((l) => (
                <li key={l.slug}>
                  <Link
                    to={l.slug}
                    className="inline-flex rounded-full border border-ocean/30 px-5 py-2 text-sm font-semibold text-ocean transition-colors hover:bg-ocean/10"
                  >
                    {l.nombre}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
