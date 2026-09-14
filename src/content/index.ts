import { DEFAULT_LOCALE, type Locale } from "@/config/site";
import { es, type Content } from "./es";

/**
 * Registro de idiomas. Para añadir inglés/alemán:
 *   import { en } from "./en";
 *   const dictionaries = { es, en, de };
 */
const dictionaries: Partial<Record<Locale, Content>> = { es };

export function getContent(locale: Locale = DEFAULT_LOCALE): Content {
  return dictionaries[locale] ?? es;
}

/** Hook usado por los componentes para leer los textos. */
export function useContent(): Content {
  return getContent(DEFAULT_LOCALE);
}

export type { Content };
