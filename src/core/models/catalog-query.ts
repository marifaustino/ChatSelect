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

const facetArray = z.array(z.string().trim().min(1)).optional();

export const catalogQuerySchema = z.object({
  q: z.string().trim().optional(),
  category: facetArray,
  originalLanguage: facetArray,
  communicationModality: facetArray,
  attribute: facetArray,
  qualityAttribute: facetArray,
});

export type CatalogQuery = z.infer<typeof catalogQuerySchema>;

/** Normalizes a raw searchParams value (string | string[] | undefined) into
 * a non-empty string array, or undefined if there's nothing selected. Each
 * facet can appear multiple times in the URL (?category=A&category=B),
 * which Next.js already parses into an array for us. */
function toFacetArray(
  value: string | string[] | undefined,
): string[] | undefined {
  if (value === undefined) return undefined;
  const values = Array.isArray(value) ? value : [value];
  return values.length > 0 ? values : undefined;
}

export function catalogQueryFromSearchParams(
  record: Record<string, string | string[] | undefined>,
): CatalogQuery {
  const single = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value;
  const parsed = catalogQuerySchema.safeParse({
    q: single(record.q) || undefined,
    category: toFacetArray(record.category),
    originalLanguage: toFacetArray(record.originalLanguage),
    communicationModality: toFacetArray(record.communicationModality),
    attribute: toFacetArray(record.attribute),
    qualityAttribute: toFacetArray(record.qualityAttribute),
  });
  return parsed.success ? parsed.data : {};
}
