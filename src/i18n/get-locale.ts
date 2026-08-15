import "server-only";
import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  isLocale,
  type Locale,
} from "./locales";

/** Reads the user's locale preference from the `locale` cookie set by
 * `setLocaleAction`, falling back to the default (pt-BR). */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}
