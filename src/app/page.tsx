import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { HeaderIllustration } from "@/components/layout/header-illustration";
import { SearchBar } from "@/components/catalog/search-bar";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import {
  filterByClassification,
  filterInstruments,
  getFacetOptions,
  sortByTitle,
} from "@/lib/catalog/catalog-service";
import { catalogQueryFromSearchParams } from "@/core/models/catalog-query";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format-message";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.catalogPage.metaTitle,
    description: dict.catalogPage.metaDescription,
  };
}

type RawSearchParams = Record<string, string | string[] | undefined>;

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const query = catalogQueryFromSearchParams(await searchParams);
  const dict = getDictionary(await getLocale());

  // Only Adaptado/Original instruments are shown here (and match the search
  // bar). Ad-hoc instruments are exclusive to the dedicated /ad-hoc page.
  const adapted = filterByClassification(getAllInstruments(), "adapted");
  const facetOptions = getFacetOptions(adapted);
  const filtered = sortByTitle(filterInstruments(adapted, query));

  return (
    <>
      <Container className="flex justify-center py-10 sm:py-14">
        <HeaderIllustration
          aria-hidden="true"
          className="text-primary h-28 w-auto sm:h-36"
        />
      </Container>
      <Container className="grid gap-8 py-8 lg:grid-cols-[260px_1fr]">
        <FilterSidebar
          basePath="/"
          state={query}
          facetOptions={facetOptions}
          dict={dict.facets}
          filtersHeading={dict.catalogPage.filtersHeading}
          clearAll={dict.catalogPage.clearAll}
        />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {dict.catalogPage.heading}
            </h1>
            <p className="text-muted-foreground text-sm">
              {formatMessage(dict.catalogPage.subtitleTemplate, {
                count: adapted.length,
              })}
            </p>
          </div>
          <SearchBar action="/" state={query} dict={dict.catalogPage} />
          <p className="text-muted-foreground text-sm">
            {formatMessage(
              filtered.length === 1
                ? dict.catalogPage.resultsCountOne
                : dict.catalogPage.resultsCountOther,
              { count: filtered.length },
            )}
          </p>
          <CatalogGrid instruments={filtered} dict={dict.catalogPage} />
        </div>
      </Container>
    </>
  );
}
