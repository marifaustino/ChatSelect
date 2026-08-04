/**
 * Ingests data/Fichas_Instrumentos_Avaliacao.csv into src/data/instruments.generated.json.
 *
 * Run with `npm run build:catalog` (also runs automatically before `dev`/`build`).
 * To update the catalog with new instruments, replace the CSV in data/ (same
 * column layout) and re-run this script.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "csv-parse/sync";
import {
  instrumentCatalogSchema,
  type Instrument,
} from "../src/core/models/instrument";
import {
  KNOWN_ADAPTED_SHEET_NAMES,
  KNOWN_AD_HOC_SHEET_NAMES,
} from "../src/core/models/known-classification";

const CSV_PATH = resolve(__dirname, "../data/Fichas_Instrumentos_Avaliacao.csv");
const OUTPUT_PATH = resolve(
  __dirname,
  "../src/data/instruments.generated.json",
);

interface CsvRow {
  Nome_Aba: string;
  Título: string;
  Autores: string;
  "Idioma Original": string;
  Traduções: string;
  Descrição: string;
  "Link do instrumento": string;
  Instrumento: string;
  "Descrição do instrumento": string;
  Categoria: string;
  "Atributos de qualidade": string;
  Atributos: string;
  "Modalidades de comunicação": string;
  "Amostra do estudo original": string;
  "Número de itens": string;
  "Formato de resposta": string;
  "Como pontuar": string;
  Confiabilidade: string;
  "Resultado de referência": string;
  Vantagens: string;
  Limitações: string;
  Fonte: string;
}

function nullIfEmpty(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

/** "•  A | •  B" -> ["A", "B"] */
function splitBullets(value: string | undefined): string[] {
  const trimmed = value?.trim();
  if (!trimmed) return [];
  return trimmed
    .split("|")
    .map((item) => item.trim().replace(/^[••]\s*/, "").trim())
    .filter(Boolean);
}

function slugify(sheetName: string): string {
  return sheetName
    .toLowerCase()
    .replace(/\+/g, "-plus")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const KNOWN_ADAPTED = new Set<string>(KNOWN_ADAPTED_SHEET_NAMES);
const KNOWN_AD_HOC = new Set<string>(KNOWN_AD_HOC_SHEET_NAMES);

/** Text-only heuristic (case-insensitive "ad-hoc" / "ad hoc" substring).
 * Kept only as a fallback for instruments that aren't in the curated fixed
 * list yet — see `classify` below for why it isn't the primary signal. */
function detectClassificationFromText(row: CsvRow): "adapted" | "ad-hoc" {
  const haystack = [
    row.Instrumento,
    row["Descrição do instrumento"],
    row.Traduções,
    row.Confiabilidade,
    row.Limitações,
  ]
    .join(" ")
    .toLowerCase();
  return /ad[\s-]hoc/.test(haystack) ? "ad-hoc" : "adapted";
}

/**
 * The curated fixed list (BRIEFING_CLAUDE_CODE.md section 3) reflects a
 * richer judgment than a text substring can: some ad-hoc instruments never
 * literally say "ad-hoc" (e.g. Heuristic_Set_Chatbots), and some
 * adapted/original ones mention "ad hoc" only in passing about a reduced
 * version used in one application (e.g. CHISM, WFC_SES_WorkStudy). So the
 * fixed list is authoritative for the 41 known sheets; text detection is
 * only a heuristic guess for instruments added later that aren't in it yet.
 */
function classify(row: CsvRow): {
  classification: "adapted" | "ad-hoc";
  source: "known-list" | "text-heuristic";
} {
  if (KNOWN_ADAPTED.has(row.Nome_Aba))
    return { classification: "adapted", source: "known-list" };
  if (KNOWN_AD_HOC.has(row.Nome_Aba))
    return { classification: "ad-hoc", source: "known-list" };
  return {
    classification: detectClassificationFromText(row),
    source: "text-heuristic",
  };
}

function isDualApplication(row: CsvRow): boolean {
  const text = row["Descrição do instrumento"] ?? "";
  return /aplicaç[ãa]o 1/i.test(text) && /aplicaç[ãa]o 2/i.test(text);
}

function mapRow(row: CsvRow): Instrument {
  return {
    slug: slugify(row.Nome_Aba),
    sheetName: row.Nome_Aba,
    title: row.Título,
    authors: nullIfEmpty(row.Autores),
    originalLanguage: nullIfEmpty(row["Idioma Original"]),
    translations: nullIfEmpty(row.Traduções),
    description: nullIfEmpty(row.Descrição),
    instrumentLink: nullIfEmpty(row["Link do instrumento"]),
    instrumentType: nullIfEmpty(row.Instrumento),
    instrumentDescription: nullIfEmpty(row["Descrição do instrumento"]),
    category: nullIfEmpty(row.Categoria),
    qualityAttributes: nullIfEmpty(row["Atributos de qualidade"]),
    attributes: nullIfEmpty(row.Atributos),
    communicationModalities: nullIfEmpty(row["Modalidades de comunicação"]),
    originalSample: nullIfEmpty(row["Amostra do estudo original"]),
    itemCount: nullIfEmpty(row["Número de itens"]),
    responseFormat: nullIfEmpty(row["Formato de resposta"]),
    scoring: nullIfEmpty(row["Como pontuar"]),
    reliability: nullIfEmpty(row.Confiabilidade),
    referenceResult: nullIfEmpty(row["Resultado de referência"]),
    advantages: splitBullets(row.Vantagens),
    limitations: splitBullets(row.Limitações),
    source: nullIfEmpty(row.Fonte),
    classification: classify(row).classification,
    isDualApplication: isDualApplication(row),
  };
}

function reportClassification(rows: CsvRow[], instruments: Instrument[]): void {
  const adaptedCount = instruments.filter(
    (i) => i.classification === "adapted",
  ).length;
  const adHocCount = instruments.filter(
    (i) => i.classification === "ad-hoc",
  ).length;

  console.log(
    `[build-catalog] ${instruments.length} instrumentos: ${adaptedCount} adapted, ${adHocCount} ad-hoc`,
  );

  const fromHeuristic = rows.filter(
    (row) => classify(row).source === "text-heuristic",
  );
  if (fromHeuristic.length > 0) {
    console.warn(
      `[build-catalog] ⚠ ${fromHeuristic.length} instrumento(s) fora da lista fixa do briefing — classificação estimada só por texto, revise manualmente e adicione a known-classification.ts:`,
    );
    for (const row of fromHeuristic) {
      console.warn(
        `  - ${row.Nome_Aba}: estimado como "${classify(row).classification}"`,
      );
    }
  }
}

function main() {
  const raw = readFileSync(CSV_PATH, "utf8").replace(/^﻿/, "");
  const rows: CsvRow[] = parse(raw, {
    columns: true,
    skip_empty_lines: true,
  });

  const instruments = rows.map(mapRow);

  const parsed = instrumentCatalogSchema.safeParse({
    generatedAt: new Date().toISOString(),
    instruments,
  });

  if (!parsed.success) {
    console.error("[build-catalog] Validação falhou:");
    console.error(parsed.error.format());
    process.exit(1);
  }

  reportClassification(rows, instruments);

  const slugs = new Set<string>();
  for (const instrument of instruments) {
    if (slugs.has(instrument.slug)) {
      console.error(
        `[build-catalog] Slug duplicado: "${instrument.slug}" (${instrument.sheetName})`,
      );
      process.exit(1);
    }
    slugs.add(instrument.slug);
  }

  mkdirSync(resolve(__dirname, "../src/data"), { recursive: true });
  writeFileSync(
    OUTPUT_PATH,
    JSON.stringify(
      { generatedAt: new Date().toISOString(), instruments },
      null,
      2,
    ) + "\n",
  );

  console.log(`[build-catalog] Escrito em ${OUTPUT_PATH}`);
}

main();
