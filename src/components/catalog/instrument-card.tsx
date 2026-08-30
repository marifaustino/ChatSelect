import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { categorySolidClasses } from "@/lib/catalog/category-colors";
import type { Instrument } from "@/core/models/instrument";

export function InstrumentCard({
  instrument,
  backHref,
}: {
  instrument: Instrument;
  /** Current list URL (filters/search included) — carried as `?from=` so
   * the detail page's back link can return here with filters intact. */
  backHref?: string;
}) {
  const href = backHref
    ? `/instrumentos/${instrument.slug}?from=${encodeURIComponent(backHref)}`
    : `/instrumentos/${instrument.slug}`;
  return (
    <Link href={href} className="group block h-full">
      <Card className="flex h-full flex-col shadow-[0_2px_6px_rgba(29,78,216,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(29,78,216,0.18)]">
        <CardHeader>
          {instrument.category && (
            <Badge
              className={cn(
                "w-fit rounded-full",
                categorySolidClasses(instrument.category),
              )}
            >
              {instrument.category}
            </Badge>
          )}
          <CardTitle className="group-hover:text-primary font-serif text-base transition-colors">
            {instrument.title}
          </CardTitle>
          {instrument.description && (
            <CardDescription className="line-clamp-4">
              {instrument.description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
