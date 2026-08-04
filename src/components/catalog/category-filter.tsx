import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  hrefClearAll,
  hrefToggleCategory,
  type CatalogUrlState,
} from "@/lib/catalog/catalog-url";

export function CategoryFilter({
  basePath,
  state,
  categories,
}: {
  basePath: string;
  state: CatalogUrlState;
  categories: string[];
}) {
  return (
    <aside className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
          Filtros
        </h2>
        <Link
          href={hrefClearAll(basePath)}
          className="text-primary text-xs hover:underline"
        >
          Limpar
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Categoria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 pt-0">
          {categories.map((category) => {
            const active = state.category === category;
            return (
              <Link
                key={category}
                href={hrefToggleCategory(basePath, state, category)}
                aria-pressed={active}
                className={cn(
                  "hover:bg-accent flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                  active && "bg-accent font-medium",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "border-input flex size-4 shrink-0 items-center justify-center rounded-sm border",
                    active &&
                      "border-primary bg-primary text-primary-foreground",
                  )}
                >
                  {active && <Check className="size-3" />}
                </span>
                {category}
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </aside>
  );
}
