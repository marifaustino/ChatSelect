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
    const value = state[key];
    if (value) params.set(key, value);
  }
  return params;
}

function toHref(basePath: string, params: URLSearchParams): string {
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export function hrefToggleFacet(
  basePath: string,
  state: CatalogUrlState,
  key: FacetKey,
  value: string,
): string {
  const next = state[key] === value ? undefined : value;
  return toHref(basePath, buildParams({ ...state, [key]: next }));
}

export function hrefClearAll(basePath: string): string {
  return basePath;
}

export function hasActiveFilters(state: CatalogUrlState): boolean {
  return Boolean(state.q || FACET_KEYS.some((key) => state[key]));
}
