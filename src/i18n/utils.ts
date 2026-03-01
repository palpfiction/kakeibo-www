import { translations, defaultLocale, locales, type Locale, type Translations } from "./translations";

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

/**
 * Detect the best locale from an Accept-Language header value.
 * Falls back to defaultLocale if no match is found.
 */
export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  // Parse Accept-Language header, e.g. "es-ES,es;q=0.9,en;q=0.8"
  const parsed = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, q] = part.trim().split(";q=");
      return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of parsed) {
    // Exact match (e.g. "en" or "es")
    if (locales.includes(lang as Locale)) return lang as Locale;
    // Prefix match (e.g. "es-ar" -> "es", "en-us" -> "en")
    const prefix = lang.split("-")[0];
    if (locales.includes(prefix as Locale)) return prefix as Locale;
  }

  return defaultLocale;
}
