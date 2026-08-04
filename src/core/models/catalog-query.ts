import { z } from "zod";

export const catalogQuerySchema = z.object({
  q: z.string().trim().optional(),
  category: z.string().trim().optional(),
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
  });
  return parsed.success ? parsed.data : {};
}
