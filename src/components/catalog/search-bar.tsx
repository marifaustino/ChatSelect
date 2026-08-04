import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FACET_KEYS } from "@/core/models/catalog-query";
import type { CatalogUrlState } from "@/lib/catalog/catalog-url";

/** Plain GET form — no client JS needed. Preserves every active facet via
 * hidden fields; resets to page defaults on a new search. */
export function SearchBar({
  action,
  state,
}: {
  action: string;
  state: CatalogUrlState;
}) {
  return (
    <form action={action} method="get" className="flex gap-2" role="search">
      {FACET_KEYS.map((key) => {
        const value = state[key];
        return value ? (
          <input key={key} type="hidden" name={key} value={value} />
        ) : null;
      })}
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
