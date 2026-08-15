/**
 * UI-chrome strings only. Instrument ficha data (título, descrição,
 * vantagens, limitações, fonte etc. of each of the 41 instruments) is never
 * translated — it always renders in Portuguese regardless of locale.
 */
export interface Dictionary {
  common: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
  };
  nav: {
    catalog: string;
    adHoc: string;
    request: string;
    about: string;
  };
  footer: {
    tagline: string;
    subtagline: string;
  };
  localeSwitcher: {
    label: string;
    submit: string;
  };
  facets: {
    category: string;
    originalLanguage: string;
    communicationModality: string;
    attribute: string;
    qualityAttribute: string;
  };
  siteMeta: {
    title: string;
    description: string;
  };
  catalogPage: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subtitleTemplate: string;
    filtersHeading: string;
    clearAll: string;
    searchPlaceholder: string;
    searchButton: string;
    searchAriaLabel: string;
    resultsCountOne: string;
    resultsCountOther: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  adHocPage: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    introText: string;
    countTemplate: string;
  };
  requestPage: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    introText: string;
    requiredBadge: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formAuthorsLabel: string;
    formAuthorsHelp: string;
    formAuthorsPlaceholder: string;
    formLinkLabel: string;
    formLinkHelp: string;
    formLinkPlaceholder: string;
    formDescriptionLabel: string;
    formDescriptionPlaceholder: string;
    formEmailLabel: string;
    formEmailHelp: string;
    formEmailPlaceholder: string;
    formNotesLabel: string;
    formNotesPlaceholder: string;
    requiredFieldError: string;
    submitButton: string;
    submittingButton: string;
    emailSubject: string;
    successMessage: string;
    errorMessage: string;
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    subtitle: string;
    problemHeading: string;
    problemBody: string;
    catalogHeading: string;
    catalogBodyTemplate: string;
    originScreeningTemplate: string;
    originScreeningMiddle: string;
    originScreeningSuffix: string;
    howToUseHeading: string;
    howToUseIntro: string;
    howToUseMiddle: string;
    howToUseSuffix: string;
  };
  instrumentDetail: {
    backLink: string;
    metaAuthors: string;
    metaOriginalLanguage: string;
    metaTranslations: string;
    metaInstrumentType: string;
    metaItemCount: string;
    metaResponseFormat: string;
    metaOriginalSample: string;
    metaCommunicationModalities: string;
    metaQualityAttributes: string;
    metaAttributes: string;
    metaInstrumentLink: string;
    sectionInstrumentDescription: string;
    sectionScoring: string;
    sectionReliability: string;
    sectionReferenceResult: string;
    sectionAdvantages: string;
    sectionLimitations: string;
    sectionSource: string;
    dualApplicationTitle: string;
    dualApplicationBody: string;
    notFoundTitle: string;
    notFoundDescription: string;
    notFoundCta: string;
  };
}
