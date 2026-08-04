import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import {
  filterByClassification,
  sortByTitle,
} from "@/lib/catalog/catalog-service";

export const metadata: Metadata = {
  title: "Ad-hoc",
  description:
    "Instrumentos ad-hoc: questionários criados pelos próprios autores dos estudos, sem derivar de uma fonte psicométrica validada.",
};

export default function AdHocPage() {
  const instruments = sortByTitle(
    filterByClassification(getAllInstruments(), "ad-hoc"),
  );

  return (
    <Container className="space-y-6 py-8">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-2xl font-bold tracking-tight">
          Instrumentos ad-hoc
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Instrumentos ad-hoc são questionários, escalas ou roteiros criados
          pelos próprios autores de um estudo especificamente para aquela
          pesquisa, sem derivar de uma fonte psicométrica validada e citável.
          Isso significa que, na maioria dos casos, não há dados formais de
          confiabilidade (como Alfa de Cronbach) ou validação prévia disponíveis
          para esses instrumentos — eles foram construídos sob medida para
          responder às necessidades do estudo específico em que foram aplicados.
        </p>
        <p className="text-muted-foreground text-sm">
          {instruments.length} instrumentos ad-hoc catalogados.
        </p>
      </div>
      <CatalogGrid instruments={instruments} />
    </Container>
  );
}
