import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FACET_KEYS } from "@/core/models/catalog-query";
import type { CatalogUrlState } from "@/lib/catalog/catalog-url";
import type { Dictionary } from "@/i18n/dictionaries";

/** Plain GET form — no client JS needed. Preserves every active facet via
 * hidden fields; resets to page defaults on a new search. */
export function SearchBar({
  action,
  state,
  dict,
}: {
  action: string;
  state: CatalogUrlState;
  dict: Dictionary["catalogPage"];
}) {
  return (
    <form action={action} method="get" className="flex gap-2" role="search">
      {FACET_KEYS.flatMap((key) =>
        (state[key] ?? []).map((value) => (
          <input key={`${key}:${value}`} type="hidden" name={key} value={value} />
        )),
      )}
      <Input
        type="search"
        name="q"
        defaultValue={state.q ?? ""}
        placeholder={dict.searchPlaceholder}
        aria-label={dict.searchAriaLabel}
      />
      <Button type="submit">{dict.searchButton}</Button>
    </form>
  );
}
