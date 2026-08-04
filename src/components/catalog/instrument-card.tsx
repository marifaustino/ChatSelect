import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Instrument } from "@/core/models/instrument";

export function InstrumentCard({ instrument }: { instrument: Instrument }) {
  return (
    <Link href={`/instrumentos/${instrument.slug}`} className="block h-full">
      <Card className="hover:border-primary flex h-full flex-col transition-colors">
        <CardHeader>
          {instrument.category && (
            <Badge variant="muted" className="w-fit">
              {instrument.category}
            </Badge>
          )}
          <CardTitle className="text-base">{instrument.title}</CardTitle>
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
