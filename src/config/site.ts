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
 * ─────────────────────────────────────────────────────────────
 *  ENLACES DE AFILIADO: GETYOURGUIDE Y DISCOVERCARS
 * ─────────────────────────────────────────────────────────────
 *  GYG_PARTNER_ID es tu ID de partner de GetYourGuide y
 *  DISCOVERCARS_URL tu enlace de afiliado de DiscoverCars
 *  (ya llevan los valores reales; edítalos aquí si cambian).
 */
export const GYG_PARTNER_ID = "QIMQH8E";
export const DISCOVERCARS_URL =
  "https://www.discovercars.com/?a_aid=dunasdecorralejo";

/**
 * Construye un enlace de búsqueda de GetYourGuide con tu partner_id.
 * Por defecto busca "Corralejo Fuerteventura".
 */
export function gygLink(query: string = "Corralejo Fuerteventura"): string {
  return `https://www.getyourguide.es/s/?q=${encodeURIComponent(query)}&partner_id=${GYG_PARTNER_ID}`;
}

/**
 * Construye un enlace de afiliado de Booking para una búsqueda concreta.
 * Mantiene los parámetros de tu enlace (como aid) y sustituye la búsqueda
 * (ss): Booking solo lee el primer ss, así que no basta con añadir otro.
 * `params` permite afinar la búsqueda, p. ej. un punto de interés:
 * { dest_id: "900137256", dest_type: "landmark" }.
 */
export function affiliateLink(query?: string, params?: Record<string, string>): string {
  if (!query && !params) return AFFILIATE_URL;
  const url = new URL(AFFILIATE_URL);
  if (query) url.searchParams.set("ss", query);
  for (const [k, v] of Object.entries(params ?? {})) url.searchParams.set(k, v);
  return url.toString();
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
