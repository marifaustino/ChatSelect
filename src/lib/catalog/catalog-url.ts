import type { CatalogQuery } from "@/core/models/catalog-query";

export type CatalogUrlState = CatalogQuery;

function buildParams(state: CatalogUrlState): URLSearchParams {
  const params = new URLSearchParams();
  if (state.q) params.set("q", state.q);
  if (state.category) params.set("category", state.category);
  return params;
}

function toHref(basePath: string, params: URLSearchParams): string {
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export function hrefToggleCategory(
  basePath: string,
  state: CatalogUrlState,
  category: string,
): string {
  const next = state.category === category ? undefined : category;
  return toHref(basePath, buildParams({ ...state, category: next }));
}

export function hrefClearAll(basePath: string): string {
  return basePath;
}

export function hasActiveFilters(state: CatalogUrlState): boolean {
  return Boolean(state.q || state.category);
}
