import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import { filterByClassification } from "@/lib/catalog/catalog-service";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format-message";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.aboutPage.metaTitle,
    description: dict.aboutPage.metaDescription,
  };
}

export default async function AboutPage() {
  const all = getAllInstruments();
  const adHocCount = filterByClassification(all, "ad-hoc").length;
  const adaptedCount = all.length - adHocCount;
  const dict = getDictionary(await getLocale());
  const about = dict.aboutPage;

  return (
    <Container className="max-w-3xl space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{about.heading}</h1>
        <p className="text-muted-foreground">{about.subtitle}</p>
      </div>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">{about.problemHeading}</h2>
        <p>{about.problemBody}</p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">{about.catalogHeading}</h2>
        <p>{formatMessage(about.catalogBodyTemplate, { count: all.length })}</p>
        <p>
          {formatMessage(about.originScreeningTemplate, {
            adaptedCount,
            adHocCount,
          })}
          <Link
            href="/ad-hoc"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            {dict.nav.adHoc}
          </Link>
          {about.originScreeningMiddle}
          <Link
            href="/ad-hoc"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            {dict.nav.adHoc}
          </Link>
          {about.originScreeningSuffix}
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">{about.howToUseHeading}</h2>
        <p>
          {about.howToUseIntro}
          <Link
            href="/"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            {dict.nav.catalog}
          </Link>
          {about.howToUseMiddle}
          <Link
            href="/solicitar"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            {dict.nav.request}
          </Link>
          {about.howToUseSuffix}
        </p>
      </section>
    </Container>
  );
}
