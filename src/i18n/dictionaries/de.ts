import type { Dictionary } from "./types";

export const de: Dictionary = {
  common: {
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  nav: {
    catalog: "Katalog",
    adHoc: "Ad-hoc",
    request: "Instrument anfragen",
    about: "Über uns",
  },
  footer: {
    tagline:
      "ChatSelect — Katalog von Bewertungsinstrumenten für Bildungs-Chatbots.",
    subtagline:
      "Daten aus manuell geprüften wissenschaftlichen Artikeln extrahiert.",
  },
  localeSwitcher: {
    label: "Sprache",
    submit: "Anwenden",
  },
  facets: {
    category: "Kategorie",
    originalLanguage: "Sprache",
    communicationModality: "Kommunikationsmodalität",
    attribute: "Attribute",
    qualityAttribute: "Qualitätsattribute",
  },
  siteMeta: {
    title: "ChatSelect — Katalog von Bewertungsinstrumenten",
    description:
      "Katalog von Bewertungsinstrumenten (Fragebögen, Skalen, Interviews, Rubriken), die in der Forschung zu Bildungs-Chatbots verwendet werden.",
  },
  catalogPage: {
    metaTitle: "Instrumente",
    metaDescription:
      "Durchsuchbarer Katalog von Bewertungsinstrumenten, die in der Forschung zu Bildungs-Chatbots verwendet werden.",
    heading: "Bewertungsinstrumente",
    subtitleTemplate:
      "{count} Instrumente aus validierten psychometrischen Quellen, die in der Forschung zu Bildungs-Chatbots verwendet werden — Fragebögen, Skalen, Interviews und Rubriken.",
    filtersHeading: "Filter",
    clearAll: "Zurücksetzen",
    searchPlaceholder: "Suche nach Titel, Autor oder Beschreibung...",
    searchButton: "Suchen",
    searchAriaLabel: "Instrumente suchen",
    resultsCountOne: "{count} Instrument gefunden",
    resultsCountOther: "{count} Instrumente gefunden",
    emptyTitle: "Keine Instrumente gefunden",
    emptyDescription:
      "Versuchen Sie, die Filter oder den Suchbegriff anzupassen.",
  },
  adHocPage: {
    metaTitle: "Ad-hoc",
    metaDescription:
      "Ad-hoc-Instrumente: Fragebögen, die von den Autoren der Studien selbst erstellt wurden, ohne von einer validierten psychometrischen Quelle abzuleiten.",
    heading: "Ad-hoc-Instrumente",
    introText:
      "Ad-hoc-Instrumente sind Fragebögen, Skalen oder Leitfäden, die von den Autoren einer Studie speziell für diese Forschung erstellt wurden, ohne von einer validierten, zitierfähigen psychometrischen Quelle abzuleiten. Das bedeutet, dass in den meisten Fällen keine formalen Reliabilitätsdaten (wie Cronbachs Alpha) oder vorherige Validierungen für diese Instrumente verfügbar sind — sie wurden maßgeschneidert entwickelt, um den Anforderungen der jeweiligen Studie zu entsprechen, in der sie angewendet wurden.",
    countTemplate: "{count} Ad-hoc-Instrumente katalogisiert.",
  },
  requestPage: {
    metaTitle: "Instrument anfragen",
    metaDescription:
      "Schlagen Sie ein neues Bewertungsinstrument für den Katalog vor.",
    heading: "Instrument anfragen",
    introText:
      "Kennen Sie ein Bewertungsinstrument aus der Forschung zu Bildungs-Chatbots, das noch nicht im Katalog ist? Füllen Sie das untenstehende Formular aus.",
    requiredBadge: "erforderlich",
    formNameLabel: "Name des Instruments",
    formNamePlaceholder: "Z. B.: System Usability Scale (SUS)",
    formAuthorsLabel: "Autoren / Referenz",
    formAuthorsHelp: "Falls bekannt, Autoren und Jahr angeben",
    formAuthorsPlaceholder: "Z. B.: Brooke, J. (1996)",
    formLinkLabel: "Link zum Artikel oder Instrument",
    formLinkHelp: "URL einfügen, falls vorhanden",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "Kurze Beschreibung dessen, was das Instrument misst",
    formDescriptionPlaceholder:
      "Z. B.: Eine 10-Item-Skala zur Messung der wahrgenommenen Benutzerfreundlichkeit eines Systems.",
    formEmailLabel: "Ihre E-Mail",
    formEmailHelp: "Optional, falls Sie eine Rückmeldung wünschen",
    formEmailPlaceholder: "sie@email.com",
    formNotesLabel: "Zusätzliche Anmerkungen",
    formNotesPlaceholder: "Alle weiteren relevanten Informationen...",
    requiredFieldError: "Bitte füllen Sie dieses Pflichtfeld aus.",
    submitButton: "Anfrage senden",
    submittingButton: "Wird gesendet…",
    emailSubject: "Neue Instrumentenanfrage — ChatSelect",
    successMessage: "Danke! Ihre Anfrage wurde gesendet.",
    errorMessage:
      "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es in Kürze erneut.",
  },
  aboutPage: {
    metaTitle: "Über uns",
    metaDescription: "Über ChatSelect und wie der Katalog entstanden ist.",
    heading: "Über ChatSelect",
    subtitle:
      "Ein Katalog von Bewertungsinstrumenten für die Forschung zu Bildungs-Chatbots.",
    problemHeading: "Das Problem",
    problemBody:
      "Forscher, die Bildungs-Chatbots bewerten, müssen oft unter Dutzenden von Fragebögen, Skalen, Interviews und Rubriken, die in der Literatur verstreut sind, entscheiden, welches Instrument sie verwenden, um Benutzerfreundlichkeit, Zufriedenheit, Engagement, Vertrauen oder pädagogische Wirksamkeit zu messen. Diese Wahl ist schwierig, wenn es keinen zentralen Ort gibt, an dem diese Optionen nebeneinander zusammengeführt werden.",
    catalogHeading: "Der Katalog",
    catalogBodyTemplate:
      "ChatSelect vereint {count} Instrumente aus wissenschaftlichen Artikeln, die Chatbots in Bildungskontexten bewertet haben. Jeder Eintrag dokumentiert Autoren, Originalsprache, Übersetzungen, Studienstichprobe, Anzahl der Items, Antwortformat, Bewertungsmethode, Reliabilität, Vorteile, Einschränkungen und die vollständige bibliografische Quelle.",
    originScreeningTemplate:
      "Jedes Instrument wurde nach seiner Herkunft geprüft: Instrumente aus einer validierten, zitierfähigen psychometrischen Quelle wie dem SUS oder dem TAM bilden die Hauptliste ({adaptedCount} Instrumente); Ad-hoc-Instrumente ({adHocCount} Instrumente) — von den Autoren einer Studie speziell für diese Forschung erstellt, im Allgemeinen ohne formale Reliabilitätsdaten — werden getrennt im Tab ",
    originScreeningMiddle:
      " zusammengefasst. Die Startseite zeigt nur Instrumente mit validierter Herkunft; die vollständige Liste der Ad-hoc-Instrumente befindet sich im Tab ",
    originScreeningSuffix: ".",
    howToUseHeading: "So verwenden Sie es",
    howToUseIntro: "Durchsuchen Sie die Liste der Instrumente im Tab ",
    howToUseMiddle:
      ", suchen Sie nach Name, Autor oder Beschreibung oder filtern Sie nach Kategorie, Sprache, Kommunikationsmodalität und Attributen. Klicken Sie auf ein Instrument, um den vollständigen Eintrag zu sehen. Wenn Sie ein Instrument kennen, das nicht im Katalog ist, schlagen Sie es im Tab ",
    howToUseSuffix: " vor.",
  },
  instrumentDetail: {
    backLink: "Zurück zu den Instrumenten",
    metaAuthors: "Autoren",
    metaOriginalLanguage: "Originalsprache",
    metaTranslations: "Übersetzungen",
    metaInstrumentType: "Instrumententyp",
    metaItemCount: "Anzahl der Items",
    metaResponseFormat: "Antwortformat",
    metaOriginalSample: "Stichprobe der Originalstudie",
    metaCommunicationModalities: "Kommunikationsmodalitäten",
    metaQualityAttributes: "Qualitätsattribute",
    metaAttributes: "Attribute",
    metaInstrumentLink: "Link zum Instrument",
    sectionInstrumentDescription: "Beschreibung des Instruments",
    sectionScoring: "Bewertung",
    sectionReliability: "Reliabilität",
    sectionReferenceResult: "Referenzergebnis",
    sectionAdvantages: "Vorteile",
    sectionLimitations: "Einschränkungen",
    sectionSource: "Quelle",
    dualApplicationTitle: "Dieser Eintrag dokumentiert zwei Anwendungen",
    dualApplicationBody:
      "Die folgenden Daten (Autoren, Stichprobe, Reliabilität, Vorteile und Einschränkungen) beschreiben zwei unterschiedliche Ad-hoc-Instrumente, die von verschiedenen Forschungsteams erstellt wurden und in diesem Eintrag zusammengefasst sind, weil die Quelltabelle sie gemeinsam dokumentiert. Sehen Sie sich den Text der Abschnitte „Beschreibung des Instruments“ und „Quelle“ an, um Anwendung 1 von Anwendung 2 zu unterscheiden.",
    notFoundTitle: "Instrument nicht gefunden",
    notFoundDescription:
      "Das gesuchte Instrument existiert nicht oder wurde aus dem Katalog entfernt.",
    notFoundCta: "Zurück zu den Instrumenten",
  },
};
