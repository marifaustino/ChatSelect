import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categoryBadgeClasses } from "@/lib/catalog/category-colors";
import type { Instrument } from "@/core/models/instrument";

export function InstrumentCard({
  instrument,
  backHref,
}: {
  instrument: Instrument;
  /** Current list URL (filters/search included) — carried as `?from=` so
   * the detail page's breadcrumb can return here with filters intact. */
  backHref?: string;
}) {
  const href = backHref
    ? `/instrumentos/${instrument.slug}?from=${encodeURIComponent(backHref)}`
    : `/instrumentos/${instrument.slug}`;
  return (
    <Link href={href} className="group block h-full">
      <Card className="hover:border-primary-hover flex h-full flex-col transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
          {instrument.category && (
            <Badge className={categoryBadgeClasses(instrument.category) + " w-fit"}>
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
