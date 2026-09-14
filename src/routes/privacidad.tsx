import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageLayout";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Dunas de Corralejo" },
      {
        name: "description",
        content:
          "Política de privacidad: qué datos tratamos, con qué finalidad, durante cuánto tiempo y cómo ejercer tus derechos según el RGPD.",
      },
      {
        property: "og:title",
        content: "Política de privacidad | Dunas de Corralejo",
      },
      {
        property: "og:description",
        content: "Tratamiento de datos personales y derechos del usuario.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de privacidad"
        intro="Cómo tratamos los datos personales de quienes visitan esta guía."
      />
      <Section className="max-w-3xl">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Responsable.</strong> El titular
            de {SITE.name}. Contacto: {SITE.email}.
          </p>
          <p>
            <strong className="text-foreground">Datos que tratamos.</strong>{" "}
            Esta web no dispone de formularios de registro ni de suscripción. Solo
            tratamos los datos que nos envíes voluntariamente por correo
            electrónico y los datos técnicos anónimos de navegación.
          </p>
          <p>
            <strong className="text-foreground">Finalidad y base legal.</strong>{" "}
            Responder a tus consultas (interés legítimo y consentimiento) y
            elaborar estadísticas agregadas de uso del sitio (consentimiento, a
            través de cookies analíticas si se activan).
          </p>
          <p>
            <strong className="text-foreground">Destinatarios.</strong> No
            cedemos datos a terceros salvo obligación legal. Al hacer clic en un
            enlace a Booking.com abandonas este sitio y pasas a regirte por la
            política de privacidad de Booking.com.
          </p>
          <p>
            <strong className="text-foreground">Conservación.</strong> Los
            correos se conservan mientras dure la relación y durante los plazos
            legalmente exigibles.
          </p>
          <p>
            <strong className="text-foreground">Tus derechos.</strong> Puedes
            solicitar acceso, rectificación, supresión, limitación, portabilidad
            y oposición escribiendo a {SITE.email}. También puedes reclamar ante
            la Agencia Española de Protección de Datos (aepd.es).
          </p>
        </div>
      </Section>
    </>
  );
}
