import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CatalogUrlState } from "@/lib/catalog/catalog-url";

/** Plain GET form — no client JS needed. Preserves the active category via a
 * hidden field; resets to page defaults on a new search. */
export function SearchBar({
  action,
  state,
}: {
  action: string;
  state: CatalogUrlState;
}) {
  return (
    <form action={action} method="get" className="flex gap-2" role="search">
      {state.category && (
        <input type="hidden" name="category" value={state.category} />
      )}
      <Input
        type="search"
        name="q"
        defaultValue={state.q ?? ""}
        placeholder="Buscar por título, autor ou descrição..."
        aria-label="Buscar instrumentos"
      />
      <Button type="submit">Buscar</Button>
    </form>
  );
}
