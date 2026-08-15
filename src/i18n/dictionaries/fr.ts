import type { Dictionary } from "./types";

export const fr: Dictionary = {
  common: {
    skipToContent: "Passer au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  nav: {
    catalog: "Catalogue",
    adHoc: "Ad hoc",
    request: "Demander un instrument",
    about: "À propos",
  },
  footer: {
    tagline:
      "ChatSelect — Catalogue d'instruments d'évaluation de chatbots éducatifs.",
    subtagline:
      "Données extraites d'articles scientifiques revus manuellement.",
  },
  localeSwitcher: {
    label: "Langue",
    submit: "Appliquer",
  },
  facets: {
    category: "Catégorie",
    originalLanguage: "Langue",
    communicationModality: "Modalité de communication",
    attribute: "Attributs",
    qualityAttribute: "Attributs de qualité",
  },
  siteMeta: {
    title: "ChatSelect — Catalogue d'instruments d'évaluation",
    description:
      "Catalogue d'instruments d'évaluation (questionnaires, échelles, entretiens, grilles) utilisés dans la recherche sur les chatbots éducatifs.",
  },
  catalogPage: {
    metaTitle: "Instruments",
    metaDescription:
      "Catalogue consultable d'instruments d'évaluation utilisés dans la recherche sur les chatbots éducatifs.",
    heading: "Instruments d'évaluation",
    subtitleTemplate:
      "{count} instruments issus de sources psychométriques validées, utilisés dans la recherche sur les chatbots éducatifs — questionnaires, échelles, entretiens et grilles.",
    filtersHeading: "Filtres",
    clearAll: "Effacer",
    searchPlaceholder: "Rechercher par titre, auteur ou description...",
    searchButton: "Rechercher",
    searchAriaLabel: "Rechercher des instruments",
    resultsCountOne: "{count} instrument trouvé",
    resultsCountOther: "{count} instruments trouvés",
    emptyTitle: "Aucun instrument trouvé",
    emptyDescription: "Essayez d'ajuster les filtres ou le terme de recherche.",
  },
  adHocPage: {
    metaTitle: "Ad hoc",
    metaDescription:
      "Instruments ad hoc : questionnaires créés par les auteurs des études eux-mêmes, sans dériver d'une source psychométrique validée.",
    heading: "Instruments ad hoc",
    introText:
      "Les instruments ad hoc sont des questionnaires, échelles ou protocoles créés par les auteurs d'une étude spécifiquement pour cette recherche, sans dériver d'une source psychométrique validée et citable. Cela signifie que, dans la plupart des cas, aucune donnée formelle de fiabilité (comme l'alpha de Cronbach) ni de validation préalable n'est disponible pour ces instruments — ils ont été conçus sur mesure pour répondre aux besoins de l'étude spécifique dans laquelle ils ont été appliqués.",
    countTemplate: "{count} instruments ad hoc répertoriés.",
  },
  requestPage: {
    metaTitle: "Demander un instrument",
    metaDescription:
      "Suggérez l'ajout d'un nouvel instrument d'évaluation au catalogue.",
    heading: "Demander un instrument",
    introText:
      "Vous connaissez un instrument d'évaluation utilisé dans la recherche sur les chatbots éducatifs qui n'est pas encore dans le catalogue ? Remplissez le formulaire ci-dessous.",
    requiredBadge: "obligatoire",
    formNameLabel: "Nom de l'instrument",
    formNamePlaceholder: "Ex. : System Usability Scale (SUS)",
    formAuthorsLabel: "Auteurs / référence",
    formAuthorsHelp: "Si vous les connaissez, citez les auteurs et l'année",
    formAuthorsPlaceholder: "Ex. : Brooke, J. (1996)",
    formLinkLabel: "Lien vers l'article ou l'instrument",
    formLinkHelp: "Collez l'URL, si vous en avez une",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "Brève description de ce que mesure l'instrument",
    formDescriptionPlaceholder:
      "Ex. : Échelle de 10 items mesurant l'utilisabilité perçue d'un système.",
    formEmailLabel: "Votre e-mail",
    formEmailHelp: "Facultatif, si vous souhaitez une réponse",
    formEmailPlaceholder: "vous@email.com",
    formNotesLabel: "Remarques complémentaires",
    formNotesPlaceholder: "Toute autre information pertinente...",
    requiredFieldError: "Veuillez remplir ce champ obligatoire.",
    submitButton: "Envoyer la demande",
    submittingButton: "Envoi…",
    emailSubject: "Nouvelle demande d'instrument — ChatSelect",
    successMessage: "Merci ! Votre demande a bien été envoyée.",
    errorMessage:
      "Impossible d'envoyer votre demande. Veuillez réessayer dans un instant.",
  },
  aboutPage: {
    metaTitle: "À propos",
    metaDescription:
      "À propos de ChatSelect et de la construction du catalogue.",
    heading: "À propos de ChatSelect",
    subtitle:
      "Un catalogue d'instruments d'évaluation pour la recherche sur les chatbots éducatifs.",
    problemHeading: "Le problème",
    problemBody:
      "Les chercheurs qui évaluent des chatbots éducatifs doivent souvent choisir, parmi des dizaines de questionnaires, échelles, entretiens et grilles dispersés dans la littérature, quel instrument utiliser pour mesurer l'utilisabilité, la satisfaction, l'engagement, la confiance ou l'efficacité pédagogique. Ce choix est difficile lorsqu'il n'existe pas un endroit unique réunissant ces options côte à côte.",
    catalogHeading: "Le catalogue",
    catalogBodyTemplate:
      "ChatSelect rassemble {count} instruments extraits d'articles scientifiques ayant évalué des chatbots en contexte éducatif. Chaque fiche documente les auteurs, la langue d'origine, les traductions, l'échantillon de l'étude, le nombre d'items, le format de réponse, le mode de notation, la fiabilité, les avantages, les limites et la source bibliographique complète.",
    originScreeningTemplate:
      "Chaque instrument a fait l'objet d'un tri selon son origine : les instruments issus d'une source psychométrique validée et citable, comme le SUS ou le TAM, constituent la liste principale ({adaptedCount} instruments) ; les instruments ad hoc ({adHocCount} instruments) — créés par les auteurs d'une étude spécifiquement pour cette recherche, généralement sans données formelles de fiabilité — sont regroupés à part dans l'onglet ",
    originScreeningMiddle:
      ". La page d'accueil n'affiche que les instruments d'origine validée ; la liste complète des instruments ad hoc se trouve dans l'onglet ",
    originScreeningSuffix: ".",
    howToUseHeading: "Comment l'utiliser",
    howToUseIntro: "Parcourez la liste des instruments dans l'onglet ",
    howToUseMiddle:
      ", recherchez par nom, auteur ou description, ou filtrez par catégorie, langue, modalité de communication et attributs. Cliquez sur un instrument pour voir la fiche complète. Si vous connaissez un instrument qui n'est pas dans le catalogue, proposez son ajout dans l'onglet ",
    howToUseSuffix: ".",
  },
  instrumentDetail: {
    backLink: "Retour aux instruments",
    metaAuthors: "Auteurs",
    metaOriginalLanguage: "Langue d'origine",
    metaTranslations: "Traductions",
    metaInstrumentType: "Type d'instrument",
    metaItemCount: "Nombre d'items",
    metaResponseFormat: "Format de réponse",
    metaOriginalSample: "Échantillon de l'étude d'origine",
    metaCommunicationModalities: "Modalités de communication",
    metaQualityAttributes: "Attributs de qualité",
    metaAttributes: "Attributs",
    metaInstrumentLink: "Lien de l'instrument",
    sectionInstrumentDescription: "Description de l'instrument",
    sectionScoring: "Comment noter",
    sectionReliability: "Fiabilité",
    sectionReferenceResult: "Résultat de référence",
    sectionAdvantages: "Avantages",
    sectionLimitations: "Limites",
    sectionSource: "Source",
    dualApplicationTitle: "Cette fiche documente deux applications",
    dualApplicationBody:
      "Les données ci-dessous (auteurs, échantillon, fiabilité, avantages et limites) décrivent deux instruments ad hoc distincts, créés par des équipes de recherche différentes, regroupés dans cette fiche parce que le tableau source les documente ensemble. Consultez le texte des sections « Description de l'instrument » et « Source » pour distinguer l'Application 1 de l'Application 2.",
    notFoundTitle: "Instrument introuvable",
    notFoundDescription:
      "L'instrument que vous recherchez n'existe pas ou a été retiré du catalogue.",
    notFoundCta: "Retour aux instruments",
  },
};
