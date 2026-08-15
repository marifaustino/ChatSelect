import type { Dictionary } from "./types";

export const ptBR: Dictionary = {
  common: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  nav: {
    catalog: "Catálogo",
    adHoc: "Ad-hoc",
    request: "Solicitar instrumento",
    about: "Sobre",
  },
  footer: {
    tagline:
      "ChatSelect — Catálogo de instrumentos de avaliação de chatbots educacionais.",
    subtagline: "Dados extraídos de artigos científicos revisados manualmente.",
  },
  localeSwitcher: {
    label: "Idioma",
    submit: "Aplicar",
  },
  facets: {
    category: "Categoria",
    originalLanguage: "Idioma",
    communicationModality: "Modalidade de comunicação",
    attribute: "Atributos",
    qualityAttribute: "Atributos de qualidade",
  },
  siteMeta: {
    title: "ChatSelect — Catálogo de Instrumentos de Avaliação",
    description:
      "Catálogo de instrumentos de avaliação (questionários, escalas, entrevistas, rubricas) usados em pesquisas sobre chatbots educacionais.",
  },
  catalogPage: {
    metaTitle: "Instrumentos",
    metaDescription:
      "Catálogo pesquisável de instrumentos de avaliação usados em pesquisas sobre chatbots educacionais.",
    heading: "Instrumentos de avaliação",
    subtitleTemplate:
      "{count} instrumentos com origem em fontes psicométricas validadas, usados em pesquisas sobre chatbots educacionais — questionários, escalas, entrevistas e rubricas.",
    filtersHeading: "Filtros",
    clearAll: "Limpar",
    searchPlaceholder: "Buscar por título, autor ou descrição...",
    searchButton: "Buscar",
    searchAriaLabel: "Buscar instrumentos",
    resultsCountOne: "{count} instrumento encontrado",
    resultsCountOther: "{count} instrumentos encontrados",
    emptyTitle: "Nenhum instrumento encontrado",
    emptyDescription: "Tente ajustar os filtros ou o termo de busca.",
  },
  adHocPage: {
    metaTitle: "Ad-hoc",
    metaDescription:
      "Instrumentos ad-hoc: questionários criados pelos próprios autores dos estudos, sem derivar de uma fonte psicométrica validada.",
    heading: "Instrumentos ad-hoc",
    introText:
      "Instrumentos ad-hoc são questionários, escalas ou roteiros criados pelos próprios autores de um estudo especificamente para aquela pesquisa, sem derivar de uma fonte psicométrica validada e citável. Isso significa que, na maioria dos casos, não há dados formais de confiabilidade (como Alfa de Cronbach) ou validação prévia disponíveis para esses instrumentos — eles foram construídos sob medida para responder às necessidades do estudo específico em que foram aplicados.",
    countTemplate: "{count} instrumentos ad-hoc catalogados.",
  },
  requestPage: {
    metaTitle: "Solicitar instrumento",
    metaDescription:
      "Sugira a inclusão de um novo instrumento de avaliação no catálogo.",
    heading: "Solicitar instrumento",
    introText:
      "Conhece um instrumento de avaliação usado em pesquisas sobre chatbots educacionais que ainda não está no catálogo? Preencha o formulário abaixo.",
    requiredBadge: "obrigatório",
    formNameLabel: "Nome do instrumento",
    formNamePlaceholder: "Ex.: System Usability Scale (SUS)",
    formAuthorsLabel: "Autores / referência",
    formAuthorsHelp: "Se souber, cite os autores e o ano",
    formAuthorsPlaceholder: "Ex.: Brooke, J. (1996)",
    formLinkLabel: "Link do artigo ou do instrumento",
    formLinkHelp: "Cole a URL, se tiver",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "Breve descrição do que o instrumento avalia",
    formDescriptionPlaceholder:
      "Ex.: Escala de 10 itens para medir a usabilidade percebida de um sistema.",
    formEmailLabel: "Seu e-mail",
    formEmailHelp: "Opcional, caso queira retorno sobre sua sugestão",
    formEmailPlaceholder: "voce@email.com",
    formNotesLabel: "Observações adicionais",
    formNotesPlaceholder: "Qualquer outra informação relevante...",
    requiredFieldError: "Preencha este campo obrigatório.",
    submitButton: "Enviar solicitação",
    submittingButton: "Enviando…",
    emailSubject: "Nova solicitação de instrumento — ChatSelect",
    successMessage: "Obrigado! Sua solicitação foi enviada.",
    errorMessage:
      "Não foi possível enviar sua solicitação. Tente novamente em instantes.",
  },
  aboutPage: {
    metaTitle: "Sobre",
    metaDescription: "Sobre o ChatSelect e como o catálogo foi construído.",
    heading: "Sobre o ChatSelect",
    subtitle:
      "Um catálogo de instrumentos de avaliação para pesquisa em chatbots educacionais.",
    problemHeading: "O problema",
    problemBody:
      "Pesquisadores que avaliam chatbots educacionais frequentemente precisam escolher, entre dezenas de questionários, escalas, entrevistas e rubricas espalhados pela literatura, qual instrumento usar para medir usabilidade, satisfação, engajamento, confiança ou efetividade pedagógica. Essa escolha é difícil quando não há um lugar único reunindo essas opções lado a lado.",
    catalogHeading: "O catálogo",
    catalogBodyTemplate:
      "O ChatSelect reúne {count} instrumentos extraídos de artigos científicos que avaliaram chatbots em contextos educacionais. Cada ficha documenta autores, idioma original, traduções, amostra do estudo, número de itens, formato de resposta, forma de pontuação, confiabilidade, vantagens, limitações e a fonte bibliográfica completa.",
    originScreeningTemplate:
      "Cada instrumento passou por uma triagem quanto à sua origem: instrumentos com fonte psicométrica validada e citável, como a SUS ou o TAM, compõem a lista principal ({adaptedCount} instrumentos); já os instrumentos ad-hoc ({adHocCount} instrumentos) — criados pelos próprios autores de um estudo especificamente para aquela pesquisa, geralmente sem dados formais de confiabilidade — ficam reunidos separadamente na aba ",
    originScreeningMiddle:
      ". A página inicial mostra apenas os instrumentos com origem validada; a lista completa de instrumentos ad-hoc fica na aba ",
    originScreeningSuffix: ".",
    howToUseHeading: "Como usar",
    howToUseIntro: "Navegue pela lista de instrumentos na aba ",
    howToUseMiddle:
      ", busque por nome, autor ou descrição, ou filtre por categoria, idioma, modalidade de comunicação e atributos. Clique em um instrumento para ver a ficha completa. Se você conhece um instrumento que não está no catálogo, sugira sua inclusão na aba ",
    howToUseSuffix: ".",
  },
  instrumentDetail: {
    backLink: "Voltar aos instrumentos",
    metaAuthors: "Autores",
    metaOriginalLanguage: "Idioma original",
    metaTranslations: "Traduções",
    metaInstrumentType: "Tipo de instrumento",
    metaItemCount: "Número de itens",
    metaResponseFormat: "Formato de resposta",
    metaOriginalSample: "Amostra do estudo original",
    metaCommunicationModalities: "Modalidades de comunicação",
    metaQualityAttributes: "Atributos de qualidade",
    metaAttributes: "Atributos",
    metaInstrumentLink: "Link do instrumento",
    sectionInstrumentDescription: "Descrição do instrumento",
    sectionScoring: "Como pontuar",
    sectionReliability: "Confiabilidade",
    sectionReferenceResult: "Resultado de referência",
    sectionAdvantages: "Vantagens",
    sectionLimitations: "Limitações",
    sectionSource: "Fonte",
    dualApplicationTitle: "Esta ficha documenta duas aplicações",
    dualApplicationBody:
      "Os dados abaixo (autores, amostra, confiabilidade, vantagens e limitações) descrevem dois instrumentos ad-hoc distintos, criados por equipes de pesquisa diferentes, agrupados nesta ficha porque a planilha-fonte os documenta em conjunto. Consulte o texto das seções “Descrição do instrumento” e “Fonte” para distinguir Aplicação 1 de Aplicação 2.",
    notFoundTitle: "Instrumento não encontrado",
    notFoundDescription:
      "O instrumento que você procura não existe ou foi removido do catálogo.",
    notFoundCta: "Voltar aos instrumentos",
  },
};
