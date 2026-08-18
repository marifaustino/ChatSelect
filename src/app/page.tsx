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

export const metadata: Metadata = {
  title: "Instrumentos",
  description:
    "Catálogo pesquisável de instrumentos de avaliação usados em pesquisas sobre chatbots educacionais.",
};

type RawSearchParams = Record<string, string | string[] | undefined>;

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const query = catalogQueryFromSearchParams(await searchParams);

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
        />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Instrumentos de avaliação
            </h1>
            <p className="text-muted-foreground text-sm">
              {adapted.length} instrumentos com origem em fontes psicométricas
              validadas, usados em pesquisas sobre chatbots educacionais —
              questionários, escalas, entrevistas e rubricas.
            </p>
          </div>
          <SearchBar action="/" state={query} />
          <p className="text-muted-foreground text-sm">
            {filtered.length}{" "}
            {filtered.length === 1
              ? "instrumento encontrado"
              : "instrumentos encontrados"}
          </p>
          <CatalogGrid instruments={filtered} />
        </div>
      </Container>
    </>
  );
}
