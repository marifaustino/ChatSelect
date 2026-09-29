import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { categorySolidClasses } from "@/lib/catalog/category-colors";
import type { Instrument } from "@/core/models/instrument";

function SidebarField({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <div>
      <dt className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
        {label}
      </dt>
      <dd className="text-foreground text-sm">{value}</dd>
    </div>
  );
}

/** Fixed-style side panel replacing the old rigid 3-column meta grid for
 * short/identifying fields (title, authors, category, language,
 * translations) — the "← Voltar" link lives here too, carrying whatever
 * filters/search were active on the listing (see isValidListHref in
 * catalog-url.ts) so returning to the list doesn't reset them. Border
 * (instead of a background color) separates it from the main content, which
 * shares the same bg-card/white tone. */
export function InstrumentSidebar({
  instrument,
  backHref,
  parentLabel,
}: {
  instrument: Instrument;
  backHref: string;
  parentLabel: string;
}) {
  return (
    <aside className="space-y-6 border-b bg-card px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r">
      <Link
        href={backHref}
        className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 text-sm font-medium"
      >
        &larr; Voltar ao {parentLabel}
      </Link>

      <div className="space-y-3">
        <Badge className="border-transparent bg-muted text-muted-foreground">
          {instrument.sheetName}
        </Badge>
        <h1 className="text-foreground text-2xl font-bold tracking-tight">
          {instrument.title}
        </h1>
        {instrument.description && (
          <p className="text-muted-foreground text-sm">
            {instrument.description}
          </p>
        )}
      </div>

      <dl className="space-y-4">
        <SidebarField label="Autores" value={instrument.authors} />
        {instrument.category && (
          <div>
            <dt className="text-muted-foreground mb-1 text-xs font-medium tracking-wide uppercase">
              Categoria
            </dt>
            <dd>
              <Badge
                className={cn(
                  "rounded-full",
                  categorySolidClasses(instrument.category),
                )}
              >
                {instrument.category}
              </Badge>
            </dd>
          </div>
        )}
        <SidebarField
          label="Idioma original"
          value={instrument.originalLanguage}
        />
        <SidebarField label="Traduções" value={instrument.translations} />
      </dl>
    </aside>
  );
}
