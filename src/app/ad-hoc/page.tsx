import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import {
  filterByClassification,
  sortByTitle,
} from "@/lib/catalog/catalog-service";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format-message";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.adHocPage.metaTitle,
    description: dict.adHocPage.metaDescription,
  };
}

export default async function AdHocPage() {
  const instruments = sortByTitle(
    filterByClassification(getAllInstruments(), "ad-hoc"),
  );
  const dict = getDictionary(await getLocale());

  return (
    <Container className="space-y-6 py-8">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-2xl font-bold tracking-tight">
          {dict.adHocPage.heading}
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {dict.adHocPage.introText}
        </p>
        <p className="text-muted-foreground text-sm">
          {formatMessage(dict.adHocPage.countTemplate, {
            count: instruments.length,
          })}
        </p>
      </div>
      <CatalogGrid instruments={instruments} dict={dict.catalogPage} />
    </Container>
  );
}
