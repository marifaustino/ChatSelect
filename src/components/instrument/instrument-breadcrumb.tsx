import Link from "next/link";

/** Replaces the old plain-text "Voltar aos instrumentos" link, which had
 * the same visual weight as body copy and was easy to miss. `parentHref` is
 * expected to already include the caller's preserved filters/search (see
 * `currentListHref`/`isValidListHref` in catalog-url.ts), so following it
 * returns to the listing exactly as the user left it. */
export function InstrumentBreadcrumb({
  parentHref,
  parentLabel,
  title,
}: {
  parentHref: string;
  parentLabel: string;
  title: string;
}) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm">
      <Link
        href={parentHref}
        className="text-foreground hover:text-primary font-semibold hover:underline"
      >
        &larr; {parentLabel}
      </Link>
      <span className="text-muted-foreground" aria-hidden="true">
        /
      </span>
      <span className="text-muted-foreground truncate" aria-current="page">
        {title}
      </span>
    </nav>
  );
}
