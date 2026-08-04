import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClassificationBadge } from "@/components/catalog/classification-badge";
import type { Instrument } from "@/core/models/instrument";

export function InstrumentCard({ instrument }: { instrument: Instrument }) {
  return (
    <Link href={`/instrumentos/${instrument.slug}`} className="block h-full">
      <Card className="flex h-full flex-col transition-colors hover:border-primary">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="secondary">{instrument.sheetName}</Badge>
            {instrument.category && (
              <Badge variant="muted">{instrument.category}</Badge>
            )}
          </div>
          <CardTitle className="text-base">{instrument.title}</CardTitle>
          {instrument.description && (
            <CardDescription className="line-clamp-4">
              {instrument.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="mt-auto pt-0">
          <ClassificationBadge classification={instrument.classification} />
        </CardContent>
      </Card>
    </Link>
  );
}
