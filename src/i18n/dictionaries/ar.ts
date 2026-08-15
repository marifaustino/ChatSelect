import type { Dictionary } from "./types";

export const ar: Dictionary = {
  common: {
    skipToContent: "الانتقال إلى المحتوى",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  nav: {
    catalog: "الفهرس",
    adHoc: "أدوات مخصصة",
    request: "طلب إضافة أداة",
    about: "حول الموقع",
  },
  footer: {
    tagline: "ChatSelect — فهرس أدوات تقييم روبوتات الدردشة التعليمية.",
    subtagline: "بيانات مستخرجة من أبحاث علمية روجعت يدويًا.",
  },
  localeSwitcher: {
    label: "اللغة",
    submit: "تطبيق",
  },
  facets: {
    category: "الفئة",
    originalLanguage: "اللغة",
    communicationModality: "نمط التواصل",
    attribute: "الخصائص",
    qualityAttribute: "خصائص الجودة",
  },
  siteMeta: {
    title: "ChatSelect — فهرس أدوات التقييم",
    description:
      "فهرس أدوات التقييم (الاستبيانات، المقاييس، المقابلات، معايير التقييم) المستخدمة في أبحاث روبوتات الدردشة التعليمية.",
  },
  catalogPage: {
    metaTitle: "الأدوات",
    metaDescription:
      "فهرس قابل للبحث لأدوات التقييم المستخدمة في أبحاث روبوتات الدردشة التعليمية.",
    heading: "أدوات التقييم",
    subtitleTemplate:
      "{count} أداة مستندة إلى مصادر نفسية قياسية معتمدة، تُستخدم في أبحاث روبوتات الدردشة التعليمية — استبيانات ومقاييس ومقابلات ومعايير تقييم.",
    filtersHeading: "التصفية",
    clearAll: "مسح",
    searchPlaceholder: "ابحث بالعنوان أو المؤلف أو الوصف...",
    searchButton: "بحث",
    searchAriaLabel: "البحث عن أدوات",
    resultsCountOne: "تم العثور على {count} أداة",
    resultsCountOther: "تم العثور على {count} أداة",
    emptyTitle: "لم يتم العثور على أدوات",
    emptyDescription: "حاول تعديل عوامل التصفية أو مصطلح البحث.",
  },
  adHocPage: {
    metaTitle: "أدوات مخصصة",
    metaDescription:
      "الأدوات المخصصة: استبيانات أنشأها مؤلفو الدراسات أنفسهم، دون الاستناد إلى مصدر نفسي قياسي معتمد.",
    heading: "الأدوات المخصصة",
    introText:
      "الأدوات المخصصة هي استبيانات أو مقاييس أو أدلة أنشأها مؤلفو الدراسة أنفسهم خصيصًا لتلك الدراسة، دون الاستناد إلى مصدر نفسي قياسي معتمد وقابل للاستشهاد به. هذا يعني أنه في معظم الحالات، لا تتوفر بيانات موثوقية رسمية (مثل معامل ألفا كرونباخ) أو تحقق مسبق من الصحة لهذه الأدوات — فقد صُممت خصيصًا لتلبية احتياجات الدراسة المحددة التي طُبقت فيها.",
    countTemplate: "تم فهرسة {count} أداة مخصصة.",
  },
  requestPage: {
    metaTitle: "طلب إضافة أداة",
    metaDescription: "اقترح إضافة أداة تقييم جديدة إلى الفهرس.",
    heading: "طلب إضافة أداة",
    introText:
      "هل تعرف أداة تقييم تُستخدم في أبحاث روبوتات الدردشة التعليمية ولم تُدرج بعد في الفهرس؟ يرجى تعبئة النموذج أدناه.",
    requiredBadge: "إلزامي",
    formNameLabel: "اسم الأداة",
    formNamePlaceholder: "مثال: System Usability Scale (SUS)",
    formAuthorsLabel: "المؤلفون / المرجع",
    formAuthorsHelp: "إن كنت تعرفها، اذكر المؤلفين والسنة",
    formAuthorsPlaceholder: "مثال: Brooke, J. (1996)",
    formLinkLabel: "رابط المقالة أو الأداة",
    formLinkHelp: "الصق الرابط إن وُجد",
    formLinkPlaceholder: "https://",
    formDescriptionLabel: "وصف موجز لما تقيسه الأداة",
    formDescriptionPlaceholder:
      "مثال: مقياس من 10 بنود لقياس قابلية الاستخدام المتصورة لنظام ما.",
    formEmailLabel: "بريدك الإلكتروني",
    formEmailHelp: "اختياري، في حال رغبتك بالحصول على رد",
    formEmailPlaceholder: "you@email.com",
    formNotesLabel: "ملاحظات إضافية",
    formNotesPlaceholder: "أي معلومات أخرى ذات صلة...",
    requiredFieldError: "يرجى تعبئة هذا الحقل الإلزامي.",
    submitButton: "إرسال الطلب",
    submittingButton: "جارٍ الإرسال…",
    emailSubject: "طلب أداة جديد — ChatSelect",
    successMessage: "شكرًا لك! تم إرسال طلبك.",
    errorMessage: "تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى بعد قليل.",
  },
  aboutPage: {
    metaTitle: "حول الموقع",
    metaDescription: "حول ChatSelect وكيفية بناء الفهرس.",
    heading: "حول ChatSelect",
    subtitle: "فهرس لأدوات التقييم الخاصة بأبحاث روبوتات الدردشة التعليمية.",
    problemHeading: "المشكلة",
    problemBody:
      "غالبًا ما يحتاج الباحثون الذين يقيّمون روبوتات الدردشة التعليمية إلى الاختيار من بين عشرات الاستبيانات والمقاييس والمقابلات ومعايير التقييم المتناثرة في الأدبيات العلمية، لتحديد الأداة المناسبة لقياس قابلية الاستخدام أو الرضا أو التفاعل أو الثقة أو الفعالية التعليمية. يصبح هذا الاختيار صعبًا في غياب مكان واحد يجمع هذه الخيارات جنبًا إلى جنب.",
    catalogHeading: "حول الفهرس",
    catalogBodyTemplate:
      "يجمع ChatSelect {count} أداة مستخلصة من مقالات علمية قيّمت روبوتات الدردشة في سياقات تعليمية. توثّق كل بطاقة المؤلفين، واللغة الأصلية، والترجمات، وعينة الدراسة، وعدد البنود، وصيغة الإجابة، وطريقة الاحتساب، والموثوقية، والمزايا، والقيود، والمصدر الببليوغرافي الكامل.",
    originScreeningTemplate:
      "خضعت كل أداة لفرز بحسب مصدرها: الأدوات المستندة إلى مصدر نفسي قياسي معتمد وقابل للاستشهاد به، مثل SUS أو TAM، تشكّل القائمة الرئيسية ({adaptedCount} أداة)؛ أما الأدوات المخصصة ({adHocCount} أداة) — التي أنشأها مؤلفو دراسة معيّنة خصيصًا لتلك الدراسة، دون بيانات موثوقية رسمية غالبًا — فتُجمع بشكل منفصل في تبويب ",
    originScreeningMiddle:
      ". تعرض الصفحة الرئيسية الأدوات ذات المصدر المعتمد فقط؛ وتوجد القائمة الكاملة للأدوات المخصصة في تبويب ",
    originScreeningSuffix: ".",
    howToUseHeading: "كيفية الاستخدام",
    howToUseIntro: "تصفّح قائمة الأدوات في تبويب ",
    howToUseMiddle:
      "، أو ابحث بالاسم أو المؤلف أو الوصف، أو صفِّ حسب الفئة أو اللغة أو نمط التواصل أو الخصائص. انقر على أداة لعرض بطاقتها الكاملة. إذا كنت تعرف أداة غير مدرجة في الفهرس، اقترح إضافتها في تبويب ",
    howToUseSuffix: ".",
  },
  instrumentDetail: {
    backLink: "العودة إلى الأدوات",
    metaAuthors: "المؤلفون",
    metaOriginalLanguage: "اللغة الأصلية",
    metaTranslations: "الترجمات",
    metaInstrumentType: "نوع الأداة",
    metaItemCount: "عدد البنود",
    metaResponseFormat: "صيغة الإجابة",
    metaOriginalSample: "عينة الدراسة الأصلية",
    metaCommunicationModalities: "أنماط التواصل",
    metaQualityAttributes: "خصائص الجودة",
    metaAttributes: "الخصائص",
    metaInstrumentLink: "رابط الأداة",
    sectionInstrumentDescription: "وصف الأداة",
    sectionScoring: "طريقة الاحتساب",
    sectionReliability: "الموثوقية",
    sectionReferenceResult: "النتيجة المرجعية",
    sectionAdvantages: "المزايا",
    sectionLimitations: "القيود",
    sectionSource: "المصدر",
    dualApplicationTitle: "توثّق هذه البطاقة تطبيقين",
    dualApplicationBody:
      "تصف البيانات أدناه (المؤلفون، العينة، الموثوقية، المزايا والقيود) أداتين مخصصتين مختلفتين، أنشأهما فريقا بحث مختلفان، وجُمعتا في هذه البطاقة لأن الجدول المصدر يوثّقهما معًا. راجع نص قسمي «وصف الأداة» و«المصدر» للتمييز بين التطبيق 1 والتطبيق 2.",
    notFoundTitle: "الأداة غير موجودة",
    notFoundDescription:
      "الأداة التي تبحث عنها غير موجودة أو أُزيلت من الفهرس.",
    notFoundCta: "العودة إلى الأدوات",
  },
};
