import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SearchBar } from "@/components/catalog/search-bar";
import { CategoryFilter } from "@/components/catalog/category-filter";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import {
  filterInstruments,
  getUniqueCategories,
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

  const all = getAllInstruments();
  const categories = getUniqueCategories(all);
  const filtered = sortByTitle(filterInstruments(all, query));

  return (
    <Container className="grid gap-8 py-8 lg:grid-cols-[260px_1fr]">
      <CategoryFilter basePath="/" state={query} categories={categories} />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Instrumentos de avaliação
          </h1>
          <p className="text-muted-foreground text-sm">
            {all.length} instrumentos usados em pesquisas sobre chatbots
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
        <CatalogGrid instruments={filtered} />
      </div>
    </Container>
  );
}
