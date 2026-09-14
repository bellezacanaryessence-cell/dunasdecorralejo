import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies | Dunas de Corralejo" },
      {
        name: "description",
        content:
          "Política de cookies: qué cookies usa esta guía de Corralejo, cookies de afiliación de Booking.com y cómo gestionarlas desde tu navegador.",
      },
      {
        property: "og:title",
        content: "Política de cookies | Dunas de Corralejo",
      },
      {
        property: "og:description",
        content: "Cookies propias, de terceros y de afiliación de Booking.com.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de cookies"
        intro="Qué son las cookies, cuáles puede utilizar esta web y cómo desactivarlas."
      />
      <Section className="max-w-3xl">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Qué son.</strong> Las cookies son
            pequeños archivos que un sitio web guarda en tu dispositivo para
            recordar información sobre tu visita.
          </p>
          <p>
            <strong className="text-foreground">Cookies técnicas.</strong>{" "}
            Necesarias para que la web funcione correctamente. No requieren
            consentimiento.
          </p>
          <p>
            <strong className="text-foreground">Cookies analíticas.</strong> Si
            se activa una herramienta de analítica, se usará únicamente con datos
            agregados y previo consentimiento.
          </p>
          <p>
            <strong className="text-foreground">
              Cookies de afiliación (Booking.com).
            </strong>{" "}
            Al pulsar un botón de reserva, Booking.com puede instalar cookies en
            tu navegador para atribuir la reserva a esta web. Su duración y
            finalidad se describen en la política de cookies de Booking.com.
          </p>
          <p>
            <strong className="text-foreground">Cómo gestionarlas.</strong>{" "}
            Puedes bloquear o eliminar las cookies desde la configuración de tu
            navegador (Chrome, Safari, Firefox o Edge). Desactivarlas no impide
            navegar por esta guía.
          </p>
        </div>
      </Section>
    </>
  );
}
