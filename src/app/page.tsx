import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
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
import { currentListHref } from "@/lib/catalog/catalog-url";

export const metadata: Metadata = {
  // Set as a full literal string rather than relying on the root layout's
  // title template ("%s | ChatSelect") — on this Next.js version the
  // template silently doesn't apply to the root "/" route specifically
  // (verified: every other route applies it correctly), which left the
  // browser tab reading bare "Instrumentos" with no "ChatSelect" in sight.
  title: "ChatSelect",
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
      <Container className="grid gap-8 py-8 lg:grid-cols-[260px_1fr]">
        <FilterSidebar
          basePath="/"
          state={query}
          facetOptions={facetOptions}
        />
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-primary text-xs font-semibold tracking-wide uppercase">
              Instrumentos validados
            </p>
            <h1 className="text-2xl font-bold tracking-tight">
              Instrumentos de avaliação
            </h1>
            <p className="text-muted-foreground text-sm">
              {adapted.length} instrumentos com origem em fontes
              psicométricas validadas, usados em pesquisas sobre chatbots
              educacionais — questionários, escalas, entrevistas e rubricas.
            </p>
          </div>
          <SearchBar action="/" state={query} />
          <p className="text-muted-foreground text-sm">
            {filtered.length}{" "}
            {filtered.length === 1
              ? "instrumento encontrado"
              : "instrumentos encontrados"}
          </p>
          <CatalogGrid
            instruments={filtered}
            backHref={currentListHref("/", query)}
          />
        </div>
      </Container>
    </>
  );
}
