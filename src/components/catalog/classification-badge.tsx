import { Badge } from "@/components/ui/badge";
import type { Instrument } from "@/core/models/instrument";
import { cn } from "@/lib/utils";

export function ClassificationBadge({
  classification,
  className,
}: {
  classification: Instrument["classification"];
  className?: string;
}) {
  const isAdHoc = classification === "ad-hoc";
  return (
    <Badge
      variant="outline"
      className={cn(
        isAdHoc
          ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400"
          : "border-primary/30 bg-primary/10 text-primary",
        className,
      )}
    >
      {isAdHoc ? "Ad-hoc" : "Adaptado/Original"}
    </Badge>
  );
}
