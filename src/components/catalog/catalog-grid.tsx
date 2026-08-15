import { InstrumentCard } from "@/components/catalog/instrument-card";
import type { Instrument } from "@/core/models/instrument";
import type { Dictionary } from "@/i18n/dictionaries";

export function CatalogGrid({
  instruments,
  dict,
}: {
  instruments: Instrument[];
  dict: Pick<Dictionary["catalogPage"], "emptyTitle" | "emptyDescription">;
}) {
  if (instruments.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-12 text-center">
        <p className="font-medium">{dict.emptyTitle}</p>
        <p className="text-muted-foreground text-sm">{dict.emptyDescription}</p>
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
