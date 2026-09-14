import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageLayout";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal | Dunas de Corralejo" },
      {
        name: "description",
        content:
          "Aviso legal de la guía de viaje Dunas de Corralejo: titularidad, condiciones de uso, propiedad intelectual y responsabilidad sobre los contenidos.",
      },
      { property: "og:title", content: "Aviso legal | Dunas de Corralejo" },
      {
        property: "og:description",
        content: "Condiciones de uso y titularidad de esta guía de viaje.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/aviso-legal" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Aviso legal"
        intro="Información general sobre la titularidad y el uso de este sitio web."
      />
      <Section className="max-w-3xl">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Titularidad.</strong>{" "}
            {SITE.name} es una guía de viaje informativa e independiente sobre
            Corralejo y el norte de Fuerteventura. Datos de contacto:{" "}
            {SITE.email}. Completa aquí la identificación fiscal del titular
            (nombre o razón social, NIF y domicilio) antes de publicar.
          </p>
          <p>
            <strong className="text-foreground">Objeto.</strong> Los contenidos
            tienen finalidad divulgativa. Horarios, precios, frecuencias de
            transporte y condiciones de los alojamientos pueden variar; conviene
            confirmarlos siempre en las fuentes oficiales de cada proveedor.
          </p>
          <p>
            <strong className="text-foreground">
              Propiedad intelectual.
            </strong>{" "}
            Los textos, el diseño y las imágenes de este sitio están protegidos.
            No se permite su reproducción total o parcial sin autorización
            previa, salvo cita con enlace a la fuente.
          </p>
          <p>
            <strong className="text-foreground">Responsabilidad.</strong> No nos
            hacemos responsables del contenido de sitios de terceros enlazados
            desde aquí, ni de los daños derivados del uso de la información
            publicada.
          </p>
          <p>
            <strong className="text-foreground">Legislación.</strong> Esta
            relación se rige por la legislación española y, en particular, por la
            Ley 34/2002 de Servicios de la Sociedad de la Información y de
            Comercio Electrónico.
          </p>
        </div>
      </Section>
    </>
  );
}
