import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/i18n/dictionaries";

export function DualApplicationNotice({
  dict,
}: {
  dict: Dictionary["instrumentDetail"];
}) {
  return (
    <Card className="border-amber-500/40 bg-amber-500/10">
      <CardContent className="pt-6 text-sm">
        <p className="font-medium">{dict.dualApplicationTitle}</p>
        <p className="text-muted-foreground">{dict.dualApplicationBody}</p>
      </CardContent>
    </Card>
  );
}
