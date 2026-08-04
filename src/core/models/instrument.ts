import { z } from "zod";

/**
 * Domain shape for one instrument card ("ficha"). Field names are English
 * translations of the CSV column labels (kept 1:1 with the source so the
 * ingestion script in scripts/build-catalog.ts stays a thin mapping).
 */
export const instrumentSchema = z.object({
  slug: z.string(),
  sheetName: z.string(),
  title: z.string(),
  authors: z.string().nullable(),
  originalLanguage: z.string().nullable(),
  translations: z.string().nullable(),
  description: z.string().nullable(),
  instrumentLink: z.string().nullable(),
  instrumentType: z.string().nullable(),
  instrumentDescription: z.string().nullable(),
  category: z.string().nullable(),
  qualityAttributes: z.string().nullable(),
  attributes: z.string().nullable(),
  communicationModalities: z.string().nullable(),
  originalSample: z.string().nullable(),
  itemCount: z.string().nullable(),
  responseFormat: z.string().nullable(),
  scoring: z.string().nullable(),
  reliability: z.string().nullable(),
  referenceResult: z.string().nullable(),
  advantages: z.array(z.string()),
  limitations: z.array(z.string()),
  source: z.string().nullable(),
  classification: z.enum(["adapted", "ad-hoc"]),
  isDualApplication: z.boolean(),
});

export type Instrument = z.infer<typeof instrumentSchema>;

export const instrumentCatalogSchema = z.object({
  generatedAt: z.string(),
  instruments: z.array(instrumentSchema),
});

export type InstrumentCatalog = z.infer<typeof instrumentCatalogSchema>;
