import type { Dictionary } from "./types";

export const zhCN: Dictionary = {
  common: {
    skipToContent: "跳转到内容",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  nav: {
    catalog: "目录",
    adHoc: "临时性工具",
    request: "申请添加工具",
    about: "关于",
  },
  footer: {
    tagline: "ChatSelect — 教育聊天机器人评估工具目录。",
    subtagline: "数据摘自经人工审核的科学文献。",
  },
  localeSwitcher: {
    label: "语言",
    submit: "应用",
  },
  facets: {
    category: "类别",
    originalLanguage: "语言",
    communicationModality: "交流方式",
    attribute: "属性",
    qualityAttribute: "质量属性",
  },
  siteMeta: {
    title: "ChatSelect — 评估工具目录",
    description:
      "用于教育聊天机器人研究的评估工具（问卷、量表、访谈、评分标准）目录。",
  },
  catalogPage: {
    metaTitle: "评估工具",
    metaDescription: "可检索的教育聊天机器人研究评估工具目录。",
    heading: "评估工具",
    subtitleTemplate:
      "{count} 个源自经过验证的心理测量学来源的工具，用于教育聊天机器人研究——问卷、量表、访谈和评分标准。",
    filtersHeading: "筛选",
    clearAll: "清除",
    searchPlaceholder: "按标题、作者或描述搜索...",
    searchButton: "搜索",
    searchAriaLabel: "搜索评估工具",
    resultsCountOne: "找到 {count} 个工具",
    resultsCountOther: "找到 {count} 个工具",
    emptyTitle: "未找到评估工具",
    emptyDescription: "请尝试调整筛选条件或搜索词。",
  },
  adHocPage: {
    metaTitle: "临时性工具",
    metaDescription:
      "临时性工具：由研究作者自行创建、并非源自经过验证的心理测量学来源的问卷。",
    heading: "临时性评估工具",
    introText:
      "临时性工具是研究作者专为该项研究自行创建的问卷、量表或访谈提纲，并非源自经过验证、可引用的心理测量学来源。这意味着，在大多数情况下，这些工具没有正式的信度数据（如克隆巴赫α系数）或事先的效度验证——它们是为满足所应用的特定研究的需求而定制开发的。",
    countTemplate: "已收录 {count} 个临时性工具。",
  },
  requestPage: {
    metaTitle: "申请添加工具",
    metaDescription: "建议将新的评估工具添加到目录中。",
    heading: "申请添加工具",
    introText:
      "您是否知道某个用于教育聊天机器人研究、但尚未收录在本目录中的评估工具？请填写以下表单。",
    requiredBadge: "必填",
    formNameLabel: "工具名称",
    formNamePlaceholder: "例如：系统可用性量表（SUS）",
    formAuthorsLabel: "作者/参考文献",
    formAuthorsHelp: "如果知道，请注明作者和年份",
    formAuthorsPlaceholder: "例如：Brooke, J.（1996）",
    formLinkLabel: "论文或工具链接",
    formLinkHelp: "如有链接，请粘贴在此",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "该工具评估内容的简要说明",
    formDescriptionPlaceholder:
      "例如：一个包含10个题项、用于测量系统感知可用性的量表。",
    formEmailLabel: "您的邮箱",
    formEmailHelp: "可选，如果您希望收到回复",
    formEmailPlaceholder: "you@email.com",
    formNotesLabel: "补充说明",
    formNotesPlaceholder: "其他任何相关信息……",
    requiredFieldError: "请填写此必填项。",
    submitButton: "提交申请",
    submittingButton: "正在提交…",
    emailSubject: "新的评估工具申请 — ChatSelect",
    successMessage: "谢谢！您的申请已提交。",
    errorMessage: "提交失败，请稍后重试。",
  },
  aboutPage: {
    metaTitle: "关于",
    metaDescription: "关于 ChatSelect 及本目录的构建方式。",
    heading: "关于 ChatSelect",
    subtitle: "一个面向教育聊天机器人研究的评估工具目录。",
    problemHeading: "问题背景",
    problemBody:
      "评估教育聊天机器人的研究人员常常需要在文献中散落的数十种问卷、量表、访谈和评分标准中，选择合适的工具来衡量可用性、满意度、参与度、信任度或教学效果。当没有一个统一的地方将这些选项并列呈现时，这种选择就会变得困难。",
    catalogHeading: "关于目录",
    catalogBodyTemplate:
      "ChatSelect 汇集了从评估教育情境下聊天机器人的科学文献中提取的 {count} 个工具。每个条目都记录了作者、原始语言、译本、研究样本、题项数量、作答格式、计分方式、信度、优点、局限性以及完整的文献来源。",
    originScreeningTemplate:
      "每个工具都按其来源经过筛选：源自经过验证、可引用的心理测量学来源（如 SUS 或 TAM）的工具构成主列表（{adaptedCount} 个工具）；临时性工具（{adHocCount} 个工具）——由研究作者专为该项研究自行创建、通常没有正式信度数据——单独收录在 ",
    originScreeningMiddle:
      " 标签页。首页仅显示来源经过验证的工具；完整的临时性工具列表位于 ",
    originScreeningSuffix: " 标签页。",
    howToUseHeading: "使用方法",
    howToUseIntro: "在 ",
    howToUseMiddle:
      " 标签页中浏览工具列表，按名称、作者或描述搜索，或按类别、语言、交流方式和属性进行筛选。点击某个工具可查看完整条目。如果您知道某个工具未被收录，可以在 ",
    howToUseSuffix: " 标签页中提出添加建议。",
  },
  instrumentDetail: {
    backLink: "返回评估工具列表",
    metaAuthors: "作者",
    metaOriginalLanguage: "原始语言",
    metaTranslations: "译本",
    metaInstrumentType: "工具类型",
    metaItemCount: "题项数量",
    metaResponseFormat: "作答格式",
    metaOriginalSample: "原始研究样本",
    metaCommunicationModalities: "交流方式",
    metaQualityAttributes: "质量属性",
    metaAttributes: "属性",
    metaInstrumentLink: "工具链接",
    sectionInstrumentDescription: "工具描述",
    sectionScoring: "计分方式",
    sectionReliability: "信度",
    sectionReferenceResult: "参考结果",
    sectionAdvantages: "优点",
    sectionLimitations: "局限性",
    sectionSource: "来源",
    dualApplicationTitle: "本条目记录了两种应用",
    dualApplicationBody:
      "以下数据（作者、样本、信度、优点和局限性）描述了由不同研究团队创建的两个不同的临时性工具，因源表格将它们合并记录而在本条目中一并呈现。请参阅“工具描述”和“来源”部分的文字内容，以区分应用一和应用二。",
    notFoundTitle: "未找到该工具",
    notFoundDescription: "您要查找的工具不存在，或已从目录中移除。",
    notFoundCta: "返回评估工具列表",
  },
};
