import { Badge } from "@/components/ui/badge";
import { ClassificationBadge } from "@/components/catalog/classification-badge";
import type { Instrument } from "@/core/models/instrument";

export function InstrumentHeader({ instrument }: { instrument: Instrument }) {
  return (
    <header className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{instrument.sheetName}</Badge>
        {instrument.category && (
          <Badge variant="muted">{instrument.category}</Badge>
        )}
        <ClassificationBadge classification={instrument.classification} />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">{instrument.title}</h1>
      {instrument.description && (
        <p className="text-lg text-muted-foreground">
          {instrument.description}
        </p>
      )}
    </header>
  );
}
