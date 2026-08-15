import type { Dictionary } from "./types";

export const en: Dictionary = {
  common: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  nav: {
    catalog: "Catalog",
    adHoc: "Ad-hoc",
    request: "Request instrument",
    about: "About",
  },
  footer: {
    tagline:
      "ChatSelect — Catalog of educational chatbot evaluation instruments.",
    subtagline: "Data extracted from manually reviewed scientific papers.",
  },
  localeSwitcher: {
    label: "Language",
    submit: "Apply",
  },
  facets: {
    category: "Category",
    originalLanguage: "Language",
    communicationModality: "Communication modality",
    attribute: "Attributes",
    qualityAttribute: "Quality attributes",
  },
  siteMeta: {
    title: "ChatSelect — Evaluation Instrument Catalog",
    description:
      "Catalog of evaluation instruments (questionnaires, scales, interviews, rubrics) used in research on educational chatbots.",
  },
  catalogPage: {
    metaTitle: "Instruments",
    metaDescription:
      "Searchable catalog of evaluation instruments used in research on educational chatbots.",
    heading: "Evaluation instruments",
    subtitleTemplate:
      "{count} instruments originating from validated psychometric sources, used in research on educational chatbots — questionnaires, scales, interviews, and rubrics.",
    filtersHeading: "Filters",
    clearAll: "Clear",
    searchPlaceholder: "Search by title, author, or description...",
    searchButton: "Search",
    searchAriaLabel: "Search instruments",
    resultsCountOne: "{count} instrument found",
    resultsCountOther: "{count} instruments found",
    emptyTitle: "No instruments found",
    emptyDescription: "Try adjusting the filters or the search term.",
  },
  adHocPage: {
    metaTitle: "Ad-hoc",
    metaDescription:
      "Ad-hoc instruments: questionnaires created by the studies' own authors, not derived from a validated psychometric source.",
    heading: "Ad-hoc instruments",
    introText:
      "Ad-hoc instruments are questionnaires, scales, or protocols created by a study's own authors specifically for that research, without deriving from a validated, citable psychometric source. This means that, in most cases, no formal reliability data (such as Cronbach's Alpha) or prior validation is available for these instruments — they were built to order to meet the needs of the specific study in which they were applied.",
    countTemplate: "{count} ad-hoc instruments cataloged.",
  },
  requestPage: {
    metaTitle: "Request instrument",
    metaDescription:
      "Suggest a new evaluation instrument to be added to the catalog.",
    heading: "Request an instrument",
    introText:
      "Know an evaluation instrument used in research on educational chatbots that isn't in the catalog yet? Fill out the form below.",
    requiredBadge: "required",
    formNameLabel: "Instrument name",
    formNamePlaceholder: "E.g.: System Usability Scale (SUS)",
    formAuthorsLabel: "Authors / reference",
    formAuthorsHelp: "If you know it, cite the authors and year",
    formAuthorsPlaceholder: "E.g.: Brooke, J. (1996)",
    formLinkLabel: "Link to the paper or instrument",
    formLinkHelp: "Paste the URL, if you have one",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "Brief description of what the instrument measures",
    formDescriptionPlaceholder:
      "E.g.: A 10-item scale measuring perceived usability of a system.",
    formEmailLabel: "Your email",
    formEmailHelp: "Optional, in case you'd like a reply",
    formEmailPlaceholder: "you@email.com",
    formNotesLabel: "Additional notes",
    formNotesPlaceholder: "Any other relevant information...",
    requiredFieldError: "Please fill in this required field.",
    submitButton: "Submit request",
    submittingButton: "Submitting…",
    emailSubject: "New instrument request — ChatSelect",
    successMessage: "Thank you! Your request has been submitted.",
    errorMessage:
      "We couldn't submit your request. Please try again in a moment.",
  },
  aboutPage: {
    metaTitle: "About",
    metaDescription: "About ChatSelect and how the catalog was built.",
    heading: "About ChatSelect",
    subtitle:
      "A catalog of evaluation instruments for educational chatbot research.",
    problemHeading: "The problem",
    problemBody:
      "Researchers evaluating educational chatbots often need to choose, among dozens of questionnaires, scales, interviews, and rubrics scattered across the literature, which instrument to use to measure usability, satisfaction, engagement, trust, or pedagogical effectiveness. That choice is hard when there is no single place bringing these options together side by side.",
    catalogHeading: "The catalog",
    catalogBodyTemplate:
      "ChatSelect brings together {count} instruments extracted from scientific papers that evaluated chatbots in educational contexts. Each entry documents authors, original language, translations, study sample, item count, response format, scoring method, reliability, advantages, limitations, and the full bibliographic source.",
    originScreeningTemplate:
      "Each instrument went through a screening based on its origin: instruments derived from a validated, citable psychometric source, such as the SUS or the TAM, make up the main list ({adaptedCount} instruments); ad-hoc instruments ({adHocCount} instruments) — created by a study's own authors specifically for that research, generally without formal reliability data — are gathered separately on the ",
    originScreeningMiddle:
      " tab. The home page shows only instruments with a validated origin; the full list of ad-hoc instruments is on the ",
    originScreeningSuffix: " tab.",
    howToUseHeading: "How to use",
    howToUseIntro: "Browse the list of instruments on the ",
    howToUseMiddle:
      " tab, search by name, author, or description, or filter by category, language, communication modality, and attributes. Click an instrument to see its full entry. If you know an instrument that isn't in the catalog, suggest adding it on the ",
    howToUseSuffix: " tab.",
  },
  instrumentDetail: {
    backLink: "Back to instruments",
    metaAuthors: "Authors",
    metaOriginalLanguage: "Original language",
    metaTranslations: "Translations",
    metaInstrumentType: "Instrument type",
    metaItemCount: "Number of items",
    metaResponseFormat: "Response format",
    metaOriginalSample: "Original study sample",
    metaCommunicationModalities: "Communication modalities",
    metaQualityAttributes: "Quality attributes",
    metaAttributes: "Attributes",
    metaInstrumentLink: "Instrument link",
    sectionInstrumentDescription: "Instrument description",
    sectionScoring: "How to score",
    sectionReliability: "Reliability",
    sectionReferenceResult: "Reference result",
    sectionAdvantages: "Advantages",
    sectionLimitations: "Limitations",
    sectionSource: "Source",
    dualApplicationTitle: "This entry documents two applications",
    dualApplicationBody:
      "The data below (authors, sample, reliability, advantages, and limitations) describes two distinct ad-hoc instruments, created by different research teams, grouped in this entry because the source spreadsheet documents them together. See the “Instrument description” and “Source” sections' text to tell Application 1 apart from Application 2.",
    notFoundTitle: "Instrument not found",
    notFoundDescription:
      "The instrument you're looking for doesn't exist or has been removed from the catalog.",
    notFoundCta: "Back to instruments",
  },
};
