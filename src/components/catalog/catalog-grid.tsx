import { InstrumentCard } from "@/components/catalog/instrument-card";
import type { Instrument } from "@/core/models/instrument";

export function CatalogGrid({ instruments }: { instruments: Instrument[] }) {
  if (instruments.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-12 text-center">
        <p className="font-medium">Nenhum instrumento encontrado</p>
        <p className="text-sm text-muted-foreground">
          Tente ajustar os filtros ou o termo de busca.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {instruments.map((instrument) => (
        <InstrumentCard key={instrument.slug} instrument={instrument} />
      ))}
    </div>
  );
}
