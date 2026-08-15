export const SUPPORTED_LOCALES = [
  "pt-BR",
  "en",
  "es",
  "fr",
  "de",
  "it",
  "zh-CN",
  "ja",
  "ru",
  "ar",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt-BR";
export const LOCALE_COOKIE_NAME = "locale";

/** pt-BR and en are hand-authored/reviewed; the rest are AI-translated UI
 * chrome only — the instrument data itself always stays in Portuguese. */
export const NATIVE_LOCALES: readonly Locale[] = ["pt-BR", "en"];

/** Each language's own native name, always shown in that language
 * regardless of the currently active locale (standard i18n switcher UX). */
export const LOCALE_LABELS: Record<Locale, string> = {
  "pt-BR": "Português",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  "zh-CN": "中文",
  ja: "日本語",
  ru: "Русский",
  ar: "العربية",
};

const RTL_LOCALES = new Set<Locale>(["ar"]);

export function isRtlLocale(locale: Locale): boolean {
  return RTL_LOCALES.has(locale);
}

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
