import { describe, expect, it } from "vitest";
import type { Instrument } from "@/core/models/instrument";
import {
  filterByClassification,
  filterInstruments,
  findInstrumentBySlug,
  getFacetOptions,
  getUniqueValues,
  sortByTitle,
} from "@/lib/catalog/catalog-service";

function buildInstrument(overrides: Partial<Instrument> = {}): Instrument {
  return {
    slug: "sus",
    sheetName: "SUS",
    title: "System Usability Scale (SUS)",
    authors: "Brooke, J.",
    originalLanguage: "Inglês",
    translations: null,
    description: "Escala padronizada de usabilidade.",
    instrumentLink: null,
    instrumentType: "Questionário",
    instrumentDescription: null,
    category: "Usability",
    qualityAttributes: "Product Quality",
    attributes: "Usability",
    communicationModalities: "Text",
    originalSample: null,
    itemCount: "10 itens",
    responseFormat: null,
    scoring: null,
    reliability: null,
    referenceResult: null,
    advantages: [],
    limitations: [],
    source: null,
    classification: "adapted",
    isDualApplication: false,
    ...overrides,
  };
}

const SUS = buildInstrument();
const CUQ = buildInstrument({
  slug: "cuq",
  sheetName: "CUQ",
  title: "Chatbot Usability Questionnaire (CUQ)",
  category: "Usability",
  originalLanguage: "Inglês",
  communicationModalities: "Multimodality",
});
const ATTITUDE = buildInstrument({
  slug: "attitude-survey",
  sheetName: "Attitude_Survey",
  title: "Attitude Survey",
  authors: "Kaleemunnisa et al.",
  category: "Acceptance",
  originalLanguage: "Inglês",
  classification: "ad-hoc",
});

const MULTI = buildInstrument({
  slug: "multi",
  sheetName: "MULTI",
  title: "Multi-Value Fixture Instrument",
  category: "Usability, Acceptance",
  qualityAttributes: "Quality in use, Product Quality",
  attributes: "Functional Adequacy, Usability",
});

const ALL = [SUS, CUQ, ATTITUDE];
const ALL_WITH_MULTI = [SUS, CUQ, ATTITUDE, MULTI];

describe("filterInstruments", () => {
  it("matches the query against title, authors and description", () => {
    expect(filterInstruments(ALL, { q: "chatbot" })).toEqual([CUQ]);
    expect(filterInstruments(ALL, { q: "kaleemunnisa" })).toEqual([ATTITUDE]);
  });

  it("is case-insensitive", () => {
    expect(filterInstruments(ALL, { q: "USABILITY SCALE" })).toEqual([SUS]);
  });

  it("filters by category", () => {
    expect(filterInstruments(ALL, { category: ["Acceptance"] })).toEqual([
      ATTITUDE,
    ]);
  });

  it("filters by communication modality", () => {
    expect(
      filterInstruments(ALL, { communicationModality: ["Multimodality"] }),
    ).toEqual([CUQ]);
  });

  it("combines query and category with AND semantics", () => {
    expect(
      filterInstruments(ALL, { q: "chatbot", category: ["Acceptance"] }),
    ).toEqual([]);
  });

  it("returns everything when no filters are given", () => {
    expect(filterInstruments(ALL, {})).toEqual(ALL);
  });

  it("matches a comma-separated multi-value field by any of its individual values", () => {
    expect(
      filterInstruments(ALL_WITH_MULTI, {
        attribute: ["Functional Adequacy"],
      }),
    ).toEqual([MULTI]);
    // "Usability" is also the default `attributes` fixture value shared by
    // SUS/CUQ/ATTITUDE, so it must match all of them plus MULTI.
    expect(
      filterInstruments(ALL_WITH_MULTI, { attribute: ["Usability"] }),
    ).toEqual([SUS, CUQ, ATTITUDE, MULTI]);
    expect(
      filterInstruments(ALL_WITH_MULTI, {
        qualityAttribute: ["Quality in use"],
      }),
    ).toEqual([MULTI]);
    expect(
      filterInstruments(ALL_WITH_MULTI, { category: ["Acceptance"] }),
    ).toEqual([ATTITUDE, MULTI]);
  });

  it("selecting multiple values within one facet ORs them together", () => {
    // Only MULTI has "Acceptance" AND "Usability" in the same category
    // field, so AND semantics would wrongly narrow this down to [MULTI].
    // OR semantics correctly returns the union: SUS/CUQ (Usability) +
    // ATTITUDE/MULTI (Acceptance, or both).
    expect(
      filterInstruments(ALL_WITH_MULTI, {
        category: ["Usability", "Acceptance"],
      }),
    ).toEqual(ALL_WITH_MULTI);
  });

  it("still ANDs across different facets while ORing within each one", () => {
    // Only MULTI has "Functional Adequacy" as an attribute, so adding the
    // qualityAttribute filter must not loosen that back up.
    expect(
      filterInstruments(ALL_WITH_MULTI, {
        attribute: ["Functional Adequacy"],
        qualityAttribute: ["Product Quality", "Quality in use"],
      }),
    ).toEqual([MULTI]);
  });
});

describe("sortByTitle", () => {
  it("sorts alphabetically without mutating the input array", () => {
    const input = [CUQ, SUS, ATTITUDE];
    const sorted = sortByTitle(input);
    expect(sorted.map((i) => i.slug)).toEqual([
      "attitude-survey",
      "cuq",
      "sus",
    ]);
    expect(input.map((i) => i.slug)).toEqual(["cuq", "sus", "attitude-survey"]);
  });
});

describe("findInstrumentBySlug", () => {
  it("finds an instrument by slug", () => {
    expect(findInstrumentBySlug(ALL, "cuq")).toBe(CUQ);
  });

  it("returns undefined for an unknown slug", () => {
    expect(findInstrumentBySlug(ALL, "does-not-exist")).toBeUndefined();
  });
});

describe("filterByClassification", () => {
  it("filters ad-hoc instruments", () => {
    expect(filterByClassification(ALL, "ad-hoc")).toEqual([ATTITUDE]);
  });

  it("filters adapted instruments", () => {
    expect(filterByClassification(ALL, "adapted")).toEqual([SUS, CUQ]);
  });
});

describe("getUniqueValues", () => {
  it("returns sorted, de-duplicated values for a given field", () => {
    expect(getUniqueValues(ALL, "category")).toEqual([
      "Acceptance",
      "Usability",
    ]);
  });

  it("ignores null values", () => {
    const withNull = [...ALL, buildInstrument({ slug: "x", category: null })];
    expect(getUniqueValues(withNull, "category")).toEqual([
      "Acceptance",
      "Usability",
    ]);
  });

  it("splits comma-separated multi-value fields into individual, de-duplicated options", () => {
    expect(getUniqueValues(ALL_WITH_MULTI, "attributes")).toEqual([
      "Functional Adequacy",
      "Usability",
    ]);
    expect(getUniqueValues(ALL_WITH_MULTI, "qualityAttributes")).toEqual([
      "Product Quality",
      "Quality in use",
    ]);
    expect(getUniqueValues(ALL_WITH_MULTI, "category")).toEqual([
      "Acceptance",
      "Usability",
    ]);
  });
});

describe("getFacetOptions", () => {
  it("builds option lists for every facet from the given instrument subset", () => {
    const adaptedOnly = filterByClassification(ALL, "adapted");
    const facets = getFacetOptions(adaptedOnly);

    // Acceptance only exists on the ad-hoc ATTITUDE instrument, so it must
    // not appear as an option when facets are derived from adapted-only —
    // otherwise selecting it on the home page would always yield 0 results.
    expect(facets.category).toEqual(["Usability"]);
    expect(facets.originalLanguage).toEqual(["Inglês"]);
    expect(facets.communicationModality).toEqual(["Multimodality", "Text"]);
  });

  it("splits multi-value facets and de-duplicates shared values across instruments", () => {
    const facets = getFacetOptions(ALL_WITH_MULTI);

    // MULTI shares "Usability" with CUQ/SUS (attribute) and ATTITUDE
    // (category) — each value must appear only once in the option list.
    expect(facets.attribute).toEqual(["Functional Adequacy", "Usability"]);
    expect(facets.qualityAttribute).toEqual([
      "Product Quality",
      "Quality in use",
    ]);
    expect(facets.category).toEqual(["Acceptance", "Usability"]);
  });
});
