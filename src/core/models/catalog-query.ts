import { z } from "zod";

/** Facet keys supported by the home catalog filters. Each maps 1:1 to an
 * Instrument field via FACET_FIELD_MAP in catalog-service.ts. */
export const FACET_KEYS = [
  "category",
  "originalLanguage",
  "communicationModality",
  "attribute",
  "qualityAttribute",
] as const;

export type FacetKey = (typeof FACET_KEYS)[number];

export const catalogQuerySchema = z.object({
  q: z.string().trim().optional(),
  category: z.string().trim().optional(),
  originalLanguage: z.string().trim().optional(),
  communicationModality: z.string().trim().optional(),
  attribute: z.string().trim().optional(),
  qualityAttribute: z.string().trim().optional(),
});

export type CatalogQuery = z.infer<typeof catalogQuerySchema>;

export function catalogQueryFromSearchParams(
  record: Record<string, string | string[] | undefined>,
): CatalogQuery {
  const single = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value;
  const parsed = catalogQuerySchema.safeParse({
    q: single(record.q) || undefined,
    category: single(record.category) || undefined,
    originalLanguage: single(record.originalLanguage) || undefined,
    communicationModality: single(record.communicationModality) || undefined,
    attribute: single(record.attribute) || undefined,
    qualityAttribute: single(record.qualityAttribute) || undefined,
  });
  return parsed.success ? parsed.data : {};
}
