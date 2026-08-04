/**
 * Ingests data/Fichas_Instrumentos_Avaliacao.csv into src/data/instruments.generated.json.
 *
 * Run with `npm run build:catalog` (also runs automatically before `dev`/`build`).
 * To update the catalog with new instruments, replace the CSV in data/ (same
 * column layout) and re-run this script. Row -> Instrument mapping logic
 * lives in scripts/lib/csv-mapping.ts (pure, unit tested).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "csv-parse/sync";
import {
  instrumentCatalogSchema,
  type Instrument,
} from "../src/core/models/instrument";
import { classify, mapRow, type CsvRow } from "./lib/csv-mapping";

const CSV_PATH = resolve(
  __dirname,
  "../data/Fichas_Instrumentos_Avaliacao.csv",
);
const OUTPUT_PATH = resolve(
  __dirname,
  "../src/data/instruments.generated.json",
);

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
