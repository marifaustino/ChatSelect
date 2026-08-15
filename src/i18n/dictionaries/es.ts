import type { Dictionary } from "./types";

export const es: Dictionary = {
  common: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  nav: {
    catalog: "Catálogo",
    adHoc: "Ad-hoc",
    request: "Solicitar instrumento",
    about: "Acerca de",
  },
  footer: {
    tagline:
      "ChatSelect — Catálogo de instrumentos de evaluación de chatbots educativos.",
    subtagline:
      "Datos extraídos de artículos científicos revisados manualmente.",
  },
  localeSwitcher: {
    label: "Idioma",
    submit: "Aplicar",
  },
  facets: {
    category: "Categoría",
    originalLanguage: "Idioma",
    communicationModality: "Modalidad de comunicación",
    attribute: "Atributos",
    qualityAttribute: "Atributos de calidad",
  },
  siteMeta: {
    title: "ChatSelect — Catálogo de Instrumentos de Evaluación",
    description:
      "Catálogo de instrumentos de evaluación (cuestionarios, escalas, entrevistas, rúbricas) usados en investigaciones sobre chatbots educativos.",
  },
  catalogPage: {
    metaTitle: "Instrumentos",
    metaDescription:
      "Catálogo consultable de instrumentos de evaluación usados en investigaciones sobre chatbots educativos.",
    heading: "Instrumentos de evaluación",
    subtitleTemplate:
      "{count} instrumentos con origen en fuentes psicométricas validadas, usados en investigaciones sobre chatbots educativos — cuestionarios, escalas, entrevistas y rúbricas.",
    filtersHeading: "Filtros",
    clearAll: "Limpiar",
    searchPlaceholder: "Buscar por título, autor o descripción...",
    searchButton: "Buscar",
    searchAriaLabel: "Buscar instrumentos",
    resultsCountOne: "{count} instrumento encontrado",
    resultsCountOther: "{count} instrumentos encontrados",
    emptyTitle: "No se encontraron instrumentos",
    emptyDescription: "Intenta ajustar los filtros o el término de búsqueda.",
  },
  adHocPage: {
    metaTitle: "Ad-hoc",
    metaDescription:
      "Instrumentos ad-hoc: cuestionarios creados por los propios autores de los estudios, sin derivar de una fuente psicométrica validada.",
    heading: "Instrumentos ad-hoc",
    introText:
      "Los instrumentos ad-hoc son cuestionarios, escalas o guiones creados por los propios autores de un estudio específicamente para esa investigación, sin derivar de una fuente psicométrica validada y citable. Esto significa que, en la mayoría de los casos, no hay datos formales de fiabilidad (como el Alfa de Cronbach) ni validación previa disponibles para estos instrumentos — fueron construidos a medida para responder a las necesidades del estudio específico en que se aplicaron.",
    countTemplate: "{count} instrumentos ad-hoc catalogados.",
  },
  requestPage: {
    metaTitle: "Solicitar instrumento",
    metaDescription:
      "Sugiere la inclusión de un nuevo instrumento de evaluación en el catálogo.",
    heading: "Solicitar instrumento",
    introText:
      "¿Conoces un instrumento de evaluación usado en investigaciones sobre chatbots educativos que aún no está en el catálogo? Completa el formulario a continuación.",
    requiredBadge: "obligatorio",
    formNameLabel: "Nombre del instrumento",
    formNamePlaceholder: "Ej.: System Usability Scale (SUS)",
    formAuthorsLabel: "Autores / referencia",
    formAuthorsHelp: "Si lo sabes, cita a los autores y el año",
    formAuthorsPlaceholder: "Ej.: Brooke, J. (1996)",
    formLinkLabel: "Enlace al artículo o al instrumento",
    formLinkHelp: "Pega la URL, si tienes una",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "Breve descripción de lo que evalúa el instrumento",
    formDescriptionPlaceholder:
      "Ej.: Escala de 10 ítems para medir la usabilidad percibida de un sistema.",
    formEmailLabel: "Tu correo electrónico",
    formEmailHelp: "Opcional, por si quieres recibir una respuesta",
    formEmailPlaceholder: "tu@correo.com",
    formNotesLabel: "Observaciones adicionales",
    formNotesPlaceholder: "Cualquier otra información relevante...",
    requiredFieldError: "Completa este campo obligatorio.",
    submitButton: "Enviar solicitud",
    submittingButton: "Enviando…",
    emailSubject: "Nueva solicitud de instrumento — ChatSelect",
    successMessage: "¡Gracias! Tu solicitud fue enviada.",
    errorMessage:
      "No se pudo enviar tu solicitud. Inténtalo de nuevo en unos instantes.",
  },
  aboutPage: {
    metaTitle: "Acerca de",
    metaDescription: "Acerca de ChatSelect y cómo se construyó el catálogo.",
    heading: "Acerca de ChatSelect",
    subtitle:
      "Un catálogo de instrumentos de evaluación para la investigación en chatbots educativos.",
    problemHeading: "El problema",
    problemBody:
      "Los investigadores que evalúan chatbots educativos suelen necesitar elegir, entre decenas de cuestionarios, escalas, entrevistas y rúbricas dispersos en la literatura, qué instrumento usar para medir usabilidad, satisfacción, compromiso, confianza o efectividad pedagógica. Esa elección es difícil cuando no hay un solo lugar que reúna estas opciones una junto a otra.",
    catalogHeading: "El catálogo",
    catalogBodyTemplate:
      "ChatSelect reúne {count} instrumentos extraídos de artículos científicos que evaluaron chatbots en contextos educativos. Cada ficha documenta autores, idioma original, traducciones, muestra del estudio, número de ítems, formato de respuesta, forma de puntuación, fiabilidad, ventajas, limitaciones y la fuente bibliográfica completa.",
    originScreeningTemplate:
      "Cada instrumento pasó por un cribado según su origen: los instrumentos con fuente psicométrica validada y citable, como el SUS o el TAM, componen la lista principal ({adaptedCount} instrumentos); los instrumentos ad-hoc ({adHocCount} instrumentos) — creados por los propios autores de un estudio específicamente para esa investigación, generalmente sin datos formales de fiabilidad — se reúnen aparte en la pestaña ",
    originScreeningMiddle:
      ". La página principal muestra solo los instrumentos con origen validado; la lista completa de instrumentos ad-hoc está en la pestaña ",
    originScreeningSuffix: ".",
    howToUseHeading: "Cómo usar",
    howToUseIntro: "Explora la lista de instrumentos en la pestaña ",
    howToUseMiddle:
      ", busca por nombre, autor o descripción, o filtra por categoría, idioma, modalidad de comunicación y atributos. Haz clic en un instrumento para ver la ficha completa. Si conoces un instrumento que no está en el catálogo, sugiere su inclusión en la pestaña ",
    howToUseSuffix: ".",
  },
  instrumentDetail: {
    backLink: "Volver a los instrumentos",
    metaAuthors: "Autores",
    metaOriginalLanguage: "Idioma original",
    metaTranslations: "Traducciones",
    metaInstrumentType: "Tipo de instrumento",
    metaItemCount: "Número de ítems",
    metaResponseFormat: "Formato de respuesta",
    metaOriginalSample: "Muestra del estudio original",
    metaCommunicationModalities: "Modalidades de comunicación",
    metaQualityAttributes: "Atributos de calidad",
    metaAttributes: "Atributos",
    metaInstrumentLink: "Enlace del instrumento",
    sectionInstrumentDescription: "Descripción del instrumento",
    sectionScoring: "Cómo puntuar",
    sectionReliability: "Fiabilidad",
    sectionReferenceResult: "Resultado de referencia",
    sectionAdvantages: "Ventajas",
    sectionLimitations: "Limitaciones",
    sectionSource: "Fuente",
    dualApplicationTitle: "Esta ficha documenta dos aplicaciones",
    dualApplicationBody:
      "Los datos a continuación (autores, muestra, fiabilidad, ventajas y limitaciones) describen dos instrumentos ad-hoc distintos, creados por equipos de investigación diferentes, agrupados en esta ficha porque la hoja de cálculo de origen los documenta en conjunto. Consulta el texto de las secciones “Descripción del instrumento” y “Fuente” para distinguir la Aplicación 1 de la Aplicación 2.",
    notFoundTitle: "Instrumento no encontrado",
    notFoundDescription:
      "El instrumento que buscas no existe o ha sido eliminado del catálogo.",
    notFoundCta: "Volver a los instrumentos",
  },
};
