import type { Instrument } from "@/core/models/instrument";

/**
 * Pure functions over an `Instrument[]` — no data-source dependency, so
 * tests can pass small fixture arrays directly instead of mocking a module.
 */

export interface CatalogFilters {
  q?: string;
  category?: string;
}

function matchesQuery(instrument: Instrument, q: string): boolean {
  const needle = q.toLowerCase();
  const haystack = [
    instrument.title,
    instrument.sheetName,
    instrument.authors,
    instrument.description,
    instrument.instrumentDescription,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

export function filterInstruments(
  instruments: Instrument[],
  filters: CatalogFilters,
): Instrument[] {
  return instruments.filter((instrument) => {
    if (filters.q && !matchesQuery(instrument, filters.q)) return false;
    if (filters.category && instrument.category !== filters.category)
      return false;
    return true;
  });
}

export function sortByTitle(instruments: Instrument[]): Instrument[] {
  return [...instruments].sort((a, b) =>
    a.title.localeCompare(b.title, "pt-BR"),
  );
}

export function findInstrumentBySlug(
  instruments: Instrument[],
  slug: string,
): Instrument | undefined {
  return instruments.find((instrument) => instrument.slug === slug);
}

export function filterByClassification(
  instruments: Instrument[],
  classification: Instrument["classification"],
): Instrument[] {
  return instruments.filter(
    (instrument) => instrument.classification === classification,
  );
}

export function getUniqueCategories(instruments: Instrument[]): string[] {
  const set = new Set<string>();
  for (const instrument of instruments) {
    if (instrument.category) set.add(instrument.category);
  }
  return [...set].sort((a, b) => a.localeCompare(b, "pt-BR"));
}
