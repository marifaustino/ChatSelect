import {
  FACET_KEYS,
  type CatalogQuery,
  type FacetKey,
} from "@/core/models/catalog-query";

export type CatalogUrlState = CatalogQuery;

function buildParams(state: CatalogUrlState): URLSearchParams {
  const params = new URLSearchParams();
  if (state.q) params.set("q", state.q);
  for (const key of FACET_KEYS) {
    const values = state[key];
    if (values) for (const value of values) params.append(key, value);
  }
  return params;
}

function toHref(basePath: string, params: URLSearchParams): string {
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

/** Toggles a single value within a facet's selection — adds it if absent,
 * removes it if present — while leaving every other selected value (in
 * this facet and every other one) untouched. This is what allows multiple
 * options to be selected at once within the same facet. */
export function hrefToggleFacet(
  basePath: string,
  state: CatalogUrlState,
  key: FacetKey,
  value: string,
): string {
  const current = state[key] ?? [];
  const next = current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];
  return toHref(
    basePath,
    buildParams({ ...state, [key]: next.length > 0 ? next : undefined }),
  );
}

export function hrefClearAll(basePath: string): string {
  return basePath;
}

export function hasActiveFilters(state: CatalogUrlState): boolean {
  return Boolean(
    state.q || FACET_KEYS.some((key) => (state[key]?.length ?? 0) > 0),
  );
}
