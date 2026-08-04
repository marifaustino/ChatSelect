import { Badge } from "@/components/ui/badge";
import type { Instrument } from "@/core/models/instrument";

export function InstrumentHeader({ instrument }: { instrument: Instrument }) {
  return (
    <header className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{instrument.sheetName}</Badge>
        {instrument.category && (
          <Badge variant="muted">{instrument.category}</Badge>
        )}
      </div>
      <h1 className="text-3xl font-bold tracking-tight">{instrument.title}</h1>
      {instrument.description && (
        <p className="text-muted-foreground text-lg">
          {instrument.description}
        </p>
      )}
    </header>
  );
}
