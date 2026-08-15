import type { Locale } from "../locales";
import { ptBR } from "./pt-BR";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { it } from "./it";
import { zhCN } from "./zh-CN";
import { ja } from "./ja";
import { ru } from "./ru";
import { ar } from "./ar";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
  es,
  fr,
  de,
  it,
  "zh-CN": zhCN,
  ja,
  ru,
  ar,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary } from "./types";
