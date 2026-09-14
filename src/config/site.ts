/**
 * Configuración global del sitio.
 *
 * ─────────────────────────────────────────────────────────────
 *  ENLACE DE AFILIADO DE BOOKING.COM
 * ─────────────────────────────────────────────────────────────
 *  Sustituye el valor de AFFILIATE_URL por tu enlace real de
 *  afiliado de Booking.com (el que te genera Booking Partner /
 *  el programa de afiliados, con tu aid=XXXXXX).
 *
 *  Ejemplo real:
 *  "https://www.booking.com/searchresults.es.html?city=-388733&aid=1234567"
 *
 *  Mientras no lo cambies, los botones apuntan a una búsqueda
 *  genérica de Corralejo SIN comisión.
 */
export const AFFILIATE_URL =
  "https://www.booking.com/searchresults.es.html?ss=Corralejo%2C+Fuerteventura"; // ← PEGA AQUÍ TU ENLACE DE AFILIADO

/**
 * Construye un enlace de afiliado para un alojamiento concreto.
 * Si tu enlace ya lleva parámetros, se añaden con "&".
 */
export function affiliateLink(query?: string): string {
  if (!query) return AFFILIATE_URL;
  const sep = AFFILIATE_URL.includes("?") ? "&" : "?";
  return `${AFFILIATE_URL}${sep}ss=${encodeURIComponent(query)}`;
}

export const SITE = {
  name: "Dunas de Corralejo",
  tagline: "Guía de viaje de Corralejo y su Parque Natural",
  email: "hola@dunasdecorralejo.example",
} as const;

/** Idiomas previstos. De momento solo español está activo. */
export const LOCALES = ["es", "en", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";
