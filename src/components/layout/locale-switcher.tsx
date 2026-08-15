import { setLocaleAction } from "@/i18n/actions";
import { SUPPORTED_LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionaries";

/** JS-free language switcher: a <select> + submit button posting to a
 * Server Action that sets the `locale` cookie and redirects back. */
export function LocaleSwitcher({
  locale,
  pathname,
  dict,
}: {
  locale: Locale;
  pathname: string;
  dict: Dictionary["localeSwitcher"];
}) {
  return (
    <form action={setLocaleAction} className="flex items-center gap-1.5">
      <input type="hidden" name="redirectTo" value={pathname} />
      <label htmlFor="locale-switcher-select" className="sr-only">
        {dict.label}
      </label>
      <select
        id="locale-switcher-select"
        name="locale"
        defaultValue={locale}
        className="border-input bg-background h-8 rounded-md border px-2 text-sm"
      >
        {SUPPORTED_LOCALES.map((value) => (
          <option key={value} value={value}>
            {LOCALE_LABELS[value]}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="border-input hover:bg-accent h-8 rounded-md border px-2 text-sm"
      >
        {dict.submit}
      </button>
    </form>
  );
}
