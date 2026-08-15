import type { Dictionary } from "./types";

export const it: Dictionary = {
  common: {
    skipToContent: "Vai al contenuto",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
  },
  nav: {
    catalog: "Catalogo",
    adHoc: "Ad hoc",
    request: "Richiedi strumento",
    about: "Chi siamo",
  },
  footer: {
    tagline:
      "ChatSelect — Catalogo di strumenti di valutazione per chatbot educativi.",
    subtagline:
      "Dati estratti da articoli scientifici revisionati manualmente.",
  },
  localeSwitcher: {
    label: "Lingua",
    submit: "Applica",
  },
  facets: {
    category: "Categoria",
    originalLanguage: "Lingua",
    communicationModality: "Modalità di comunicazione",
    attribute: "Attributi",
    qualityAttribute: "Attributi di qualità",
  },
  siteMeta: {
    title: "ChatSelect — Catalogo di Strumenti di Valutazione",
    description:
      "Catalogo di strumenti di valutazione (questionari, scale, interviste, rubriche) usati nella ricerca sui chatbot educativi.",
  },
  catalogPage: {
    metaTitle: "Strumenti",
    metaDescription:
      "Catalogo consultabile di strumenti di valutazione usati nella ricerca sui chatbot educativi.",
    heading: "Strumenti di valutazione",
    subtitleTemplate:
      "{count} strumenti derivati da fonti psicometriche validate, usati nella ricerca sui chatbot educativi — questionari, scale, interviste e rubriche.",
    filtersHeading: "Filtri",
    clearAll: "Cancella",
    searchPlaceholder: "Cerca per titolo, autore o descrizione...",
    searchButton: "Cerca",
    searchAriaLabel: "Cerca strumenti",
    resultsCountOne: "{count} strumento trovato",
    resultsCountOther: "{count} strumenti trovati",
    emptyTitle: "Nessuno strumento trovato",
    emptyDescription: "Prova a modificare i filtri o il termine di ricerca.",
  },
  adHocPage: {
    metaTitle: "Ad hoc",
    metaDescription:
      "Strumenti ad hoc: questionari creati dagli stessi autori degli studi, senza derivare da una fonte psicometrica validata.",
    heading: "Strumenti ad hoc",
    introText:
      "Gli strumenti ad hoc sono questionari, scale o protocolli creati dagli autori di uno studio specificamente per quella ricerca, senza derivare da una fonte psicometrica validata e citabile. Ciò significa che, nella maggior parte dei casi, non sono disponibili dati formali di affidabilità (come l'Alfa di Cronbach) o validazioni precedenti per questi strumenti — sono stati costruiti su misura per rispondere alle esigenze dello studio specifico in cui sono stati applicati.",
    countTemplate: "{count} strumenti ad hoc catalogati.",
  },
  requestPage: {
    metaTitle: "Richiedi strumento",
    metaDescription:
      "Suggerisci l'inclusione di un nuovo strumento di valutazione nel catalogo.",
    heading: "Richiedi uno strumento",
    introText:
      "Conosci uno strumento di valutazione usato nella ricerca sui chatbot educativi che non è ancora nel catalogo? Compila il modulo qui sotto.",
    requiredBadge: "obbligatorio",
    formNameLabel: "Nome dello strumento",
    formNamePlaceholder: "Es.: System Usability Scale (SUS)",
    formAuthorsLabel: "Autori / riferimento",
    formAuthorsHelp: "Se li conosci, indica autori e anno",
    formAuthorsPlaceholder: "Es.: Brooke, J. (1996)",
    formLinkLabel: "Link all'articolo o allo strumento",
    formLinkHelp: "Incolla l'URL, se ne hai uno",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "Breve descrizione di cosa valuta lo strumento",
    formDescriptionPlaceholder:
      "Es.: Scala di 10 item per misurare l'usabilità percepita di un sistema.",
    formEmailLabel: "La tua email",
    formEmailHelp: "Facoltativo, se desideri una risposta",
    formEmailPlaceholder: "tu@email.com",
    formNotesLabel: "Note aggiuntive",
    formNotesPlaceholder: "Qualsiasi altra informazione rilevante...",
    requiredFieldError: "Compila questo campo obbligatorio.",
    submitButton: "Invia richiesta",
    submittingButton: "Invio in corso…",
    emailSubject: "Nuova richiesta di strumento — ChatSelect",
    successMessage: "Grazie! La tua richiesta è stata inviata.",
    errorMessage:
      "Non è stato possibile inviare la richiesta. Riprova tra qualche istante.",
  },
  aboutPage: {
    metaTitle: "Chi siamo",
    metaDescription:
      "Informazioni su ChatSelect e su come è stato costruito il catalogo.",
    heading: "Chi siamo — ChatSelect",
    subtitle:
      "Un catalogo di strumenti di valutazione per la ricerca sui chatbot educativi.",
    problemHeading: "Il problema",
    problemBody:
      "I ricercatori che valutano i chatbot educativi devono spesso scegliere, tra decine di questionari, scale, interviste e rubriche sparsi nella letteratura, quale strumento usare per misurare usabilità, soddisfazione, coinvolgimento, fiducia o efficacia pedagogica. Questa scelta è difficile quando non esiste un unico luogo che riunisca queste opzioni fianco a fianco.",
    catalogHeading: "Il catalogo",
    catalogBodyTemplate:
      "ChatSelect riunisce {count} strumenti estratti da articoli scientifici che hanno valutato chatbot in contesti educativi. Ogni scheda documenta autori, lingua originale, traduzioni, campione dello studio, numero di item, formato di risposta, modalità di punteggio, affidabilità, vantaggi, limitazioni e la fonte bibliografica completa.",
    originScreeningTemplate:
      "Ogni strumento è stato vagliato in base alla sua origine: gli strumenti con fonte psicometrica validata e citabile, come il SUS o il TAM, compongono l'elenco principale ({adaptedCount} strumenti); gli strumenti ad hoc ({adHocCount} strumenti) — creati dagli autori di uno studio specificamente per quella ricerca, generalmente senza dati formali di affidabilità — sono raccolti separatamente nella scheda ",
    originScreeningMiddle:
      ". La homepage mostra solo gli strumenti con origine validata; l'elenco completo degli strumenti ad hoc si trova nella scheda ",
    originScreeningSuffix: ".",
    howToUseHeading: "Come usarlo",
    howToUseIntro: "Sfoglia l'elenco degli strumenti nella scheda ",
    howToUseMiddle:
      ", cerca per nome, autore o descrizione, oppure filtra per categoria, lingua, modalità di comunicazione e attributi. Clicca su uno strumento per vedere la scheda completa. Se conosci uno strumento che non è nel catalogo, suggeriscine l'inclusione nella scheda ",
    howToUseSuffix: ".",
  },
  instrumentDetail: {
    backLink: "Torna agli strumenti",
    metaAuthors: "Autori",
    metaOriginalLanguage: "Lingua originale",
    metaTranslations: "Traduzioni",
    metaInstrumentType: "Tipo di strumento",
    metaItemCount: "Numero di item",
    metaResponseFormat: "Formato di risposta",
    metaOriginalSample: "Campione dello studio originale",
    metaCommunicationModalities: "Modalità di comunicazione",
    metaQualityAttributes: "Attributi di qualità",
    metaAttributes: "Attributi",
    metaInstrumentLink: "Link allo strumento",
    sectionInstrumentDescription: "Descrizione dello strumento",
    sectionScoring: "Come assegnare il punteggio",
    sectionReliability: "Affidabilità",
    sectionReferenceResult: "Risultato di riferimento",
    sectionAdvantages: "Vantaggi",
    sectionLimitations: "Limitazioni",
    sectionSource: "Fonte",
    dualApplicationTitle: "Questa scheda documenta due applicazioni",
    dualApplicationBody:
      "I dati seguenti (autori, campione, affidabilità, vantaggi e limitazioni) descrivono due strumenti ad hoc distinti, creati da team di ricerca diversi, raggruppati in questa scheda perché il foglio di calcolo di origine li documenta insieme. Consulta il testo delle sezioni “Descrizione dello strumento” e “Fonte” per distinguere l'Applicazione 1 dall'Applicazione 2.",
    notFoundTitle: "Strumento non trovato",
    notFoundDescription:
      "Lo strumento cercato non esiste o è stato rimosso dal catalogo.",
    notFoundCta: "Torna agli strumenti",
  },
};
