import type { Dictionary } from "./types";

export const ja: Dictionary = {
  common: {
    skipToContent: "コンテンツへスキップ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
  },
  nav: {
    catalog: "カタログ",
    adHoc: "アドホック",
    request: "ツールをリクエスト",
    about: "サイトについて",
  },
  footer: {
    tagline: "ChatSelect — 教育用チャットボット評価ツールのカタログ。",
    subtagline: "手動でレビューされた学術論文から抽出されたデータです。",
  },
  localeSwitcher: {
    label: "言語",
    submit: "適用",
  },
  facets: {
    category: "カテゴリー",
    originalLanguage: "言語",
    communicationModality: "コミュニケーション様式",
    attribute: "属性",
    qualityAttribute: "品質属性",
  },
  siteMeta: {
    title: "ChatSelect — 評価ツールカタログ",
    description:
      "教育用チャットボットの研究で使用される評価ツール（アンケート、尺度、インタビュー、ルーブリック）のカタログ。",
  },
  catalogPage: {
    metaTitle: "評価ツール",
    metaDescription:
      "教育用チャットボットの研究で使用される評価ツールの検索可能なカタログ。",
    heading: "評価ツール",
    subtitleTemplate:
      "検証済みの心理測定学的な出典に由来し、教育用チャットボットの研究で使用される評価ツール {count} 件 — アンケート、尺度、インタビュー、ルーブリック。",
    filtersHeading: "フィルター",
    clearAll: "クリア",
    searchPlaceholder: "タイトル、著者、説明で検索...",
    searchButton: "検索",
    searchAriaLabel: "評価ツールを検索",
    resultsCountOne: "{count} 件のツールが見つかりました",
    resultsCountOther: "{count} 件のツールが見つかりました",
    emptyTitle: "ツールが見つかりません",
    emptyDescription: "フィルターや検索語を変更してみてください。",
  },
  adHocPage: {
    metaTitle: "アドホック",
    metaDescription:
      "アドホックツール：検証済みの心理測定学的な出典に基づかず、研究の著者自身が作成したアンケート。",
    heading: "アドホックツール",
    introText:
      "アドホックツールとは、検証済みで引用可能な心理測定学的な出典に基づくことなく、その研究のために著者自身が独自に作成したアンケート、尺度、またはインタビュー項目のことです。つまり、多くの場合、これらのツールには（クロンバックのアルファ係数のような）正式な信頼性データや事前の妥当性検証が存在しません — 適用された特定の研究のニーズに応えるために、その都度オーダーメイドで作成されたものです。",
    countTemplate: "{count} 件のアドホックツールを収録しています。",
  },
  requestPage: {
    metaTitle: "ツールをリクエスト",
    metaDescription: "カタログに追加する新しい評価ツールを提案してください。",
    heading: "ツールをリクエスト",
    introText:
      "まだカタログに掲載されていない、教育用チャットボットの研究で使用される評価ツールをご存じですか？以下のフォームにご記入ください。",
    requiredBadge: "必須",
    formNameLabel: "ツール名",
    formNamePlaceholder: "例：System Usability Scale (SUS)",
    formAuthorsLabel: "著者 / 出典",
    formAuthorsHelp: "分かる場合は著者名と年を記載してください",
    formAuthorsPlaceholder: "例：Brooke, J. (1996)",
    formLinkLabel: "論文またはツールへのリンク",
    formLinkHelp: "URLがあれば貼り付けてください",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "そのツールが測定する内容の簡単な説明",
    formDescriptionPlaceholder:
      "例：システムの知覚的なユーザビリティを測定する10項目の尺度。",
    formEmailLabel: "メールアドレス",
    formEmailHelp: "任意です。返信をご希望の場合にご記入ください",
    formEmailPlaceholder: "you@email.com",
    formNotesLabel: "補足事項",
    formNotesPlaceholder: "その他、関連する情報があれば...",
    requiredFieldError: "この必須項目を入力してください。",
    submitButton: "リクエストを送信",
    submittingButton: "送信中…",
    emailSubject: "新しいツールのリクエスト — ChatSelect",
    successMessage: "ありがとうございます。リクエストを送信しました。",
    errorMessage:
      "リクエストを送信できませんでした。しばらくしてからもう一度お試しください。",
  },
  aboutPage: {
    metaTitle: "サイトについて",
    metaDescription: "ChatSelect について、そしてカタログの作成方法について。",
    heading: "ChatSelect について",
    subtitle: "教育用チャットボット研究のための評価ツールカタログです。",
    problemHeading: "課題",
    problemBody:
      "教育用チャットボットを評価する研究者は、文献に散在する数十のアンケート、尺度、インタビュー、ルーブリックの中から、ユーザビリティ、満足度、エンゲージメント、信頼、教育的効果を測定するためにどのツールを使うべきか選ばなければならないことがよくあります。これらの選択肢を一箇所にまとめて比較できる場所がないと、この選択は困難になります。",
    catalogHeading: "カタログについて",
    catalogBodyTemplate:
      "ChatSelect は、教育的文脈におけるチャットボットを評価した学術論文から抽出した {count} 件のツールをまとめています。各エントリには、著者、原語、翻訳、研究サンプル、項目数、回答形式、採点方法、信頼性、利点、限界、および完全な参考文献情報が記載されています。",
    originScreeningTemplate:
      "各ツールは出典に基づいて選別されています。SUS や TAM のような、検証済みで引用可能な心理測定学的な出典に基づくツールはメインリストを構成し（{adaptedCount} 件）、その研究のために著者自身が独自に作成し、一般的に正式な信頼性データを持たないアドホックツール（{adHocCount} 件）は、",
    originScreeningMiddle:
      " タブに分けてまとめられています。ホームページには出典が検証済みのツールのみが表示されます。アドホックツールの完全な一覧は ",
    originScreeningSuffix: " タブにあります。",
    howToUseHeading: "使い方",
    howToUseIntro: "",
    howToUseMiddle:
      " タブでツールの一覧を閲覧し、名前・著者・説明で検索したり、カテゴリー・言語・コミュニケーション様式・属性で絞り込んだりできます。ツールをクリックすると詳細エントリを確認できます。カタログに掲載されていないツールをご存じの場合は、",
    howToUseSuffix: " タブから追加をご提案ください。",
  },
  instrumentDetail: {
    backLink: "評価ツール一覧に戻る",
    metaAuthors: "著者",
    metaOriginalLanguage: "原語",
    metaTranslations: "翻訳",
    metaInstrumentType: "ツールの種類",
    metaItemCount: "項目数",
    metaResponseFormat: "回答形式",
    metaOriginalSample: "原研究のサンプル",
    metaCommunicationModalities: "コミュニケーション様式",
    metaQualityAttributes: "品質属性",
    metaAttributes: "属性",
    metaInstrumentLink: "ツールへのリンク",
    sectionInstrumentDescription: "ツールの説明",
    sectionScoring: "採点方法",
    sectionReliability: "信頼性",
    sectionReferenceResult: "参考結果",
    sectionAdvantages: "利点",
    sectionLimitations: "限界",
    sectionSource: "出典",
    dualApplicationTitle: "このエントリは2つの適用例を記載しています",
    dualApplicationBody:
      "以下のデータ（著者、サンプル、信頼性、利点、限界）は、異なる研究チームによって作成された2つの異なるアドホックツールを説明しています。元の表がこれらをまとめて記載しているため、このエントリでも一緒に掲載しています。「ツールの説明」と「出典」セクションの本文を参照し、適用例1と適用例2を区別してください。",
    notFoundTitle: "ツールが見つかりません",
    notFoundDescription:
      "お探しのツールは存在しないか、カタログから削除されました。",
    notFoundCta: "評価ツール一覧に戻る",
  },
};
