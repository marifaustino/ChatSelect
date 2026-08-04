import { describe, expect, it } from "vitest";
import type { Instrument } from "@/core/models/instrument";
import {
  filterByClassification,
  filterInstruments,
  findInstrumentBySlug,
  getUniqueCategories,
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
    qualityAttributes: null,
    attributes: null,
    communicationModalities: null,
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
});
const ATTITUDE = buildInstrument({
  slug: "attitude-survey",
  sheetName: "Attitude_Survey",
  title: "Attitude Survey",
  authors: "Kaleemunnisa et al.",
  category: "Acceptance",
  classification: "ad-hoc",
});

const ALL = [SUS, CUQ, ATTITUDE];

describe("filterInstruments", () => {
  it("matches the query against title, authors and description", () => {
    expect(filterInstruments(ALL, { q: "chatbot" })).toEqual([CUQ]);
    expect(filterInstruments(ALL, { q: "kaleemunnisa" })).toEqual([ATTITUDE]);
  });

  it("is case-insensitive", () => {
    expect(filterInstruments(ALL, { q: "USABILITY SCALE" })).toEqual([SUS]);
  });

  it("filters by category", () => {
    expect(filterInstruments(ALL, { category: "Acceptance" })).toEqual([
      ATTITUDE,
    ]);
  });

  it("combines query and category with AND semantics", () => {
    expect(
      filterInstruments(ALL, { q: "chatbot", category: "Acceptance" }),
    ).toEqual([]);
  });

  it("returns everything when no filters are given", () => {
    expect(filterInstruments(ALL, {})).toEqual(ALL);
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

describe("getUniqueCategories", () => {
  it("returns sorted, de-duplicated categories", () => {
    expect(getUniqueCategories(ALL)).toEqual(["Acceptance", "Usability"]);
  });

  it("ignores null categories", () => {
    const withNull = [...ALL, buildInstrument({ slug: "x", category: null })];
    expect(getUniqueCategories(withNull)).toEqual(["Acceptance", "Usability"]);
  });
});
