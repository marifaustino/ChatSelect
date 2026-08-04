import "server-only";
import catalogData from "@/data/instruments.generated.json";
import {
  instrumentCatalogSchema,
  type Instrument,
} from "@/core/models/instrument";

/**
 * Only module that touches the generated catalog file. Validated once at
 * import time so any drift between the ingestion script and the domain
 * model fails loudly and early instead of surfacing as a runtime bug.
 */
const catalog = instrumentCatalogSchema.parse(catalogData);

export function getAllInstruments(): Instrument[] {
  return catalog.instruments;
}
