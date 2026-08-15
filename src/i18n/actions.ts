"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isLocale, LOCALE_COOKIE_NAME } from "./locales";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

/** Server Action backing the language switcher form: persists the chosen
 * locale in a cookie (no client JS required) and redirects back. */
export async function setLocaleAction(formData: FormData): Promise<void> {
  const locale = formData.get("locale");
  const redirectTo = formData.get("redirectTo");

  if (typeof locale === "string" && isLocale(locale)) {
    const cookieStore = await cookies();
    cookieStore.set(LOCALE_COOKIE_NAME, locale, {
      path: "/",
      maxAge: ONE_YEAR_SECONDS,
      sameSite: "lax",
    });
  }

  redirect(typeof redirectTo === "string" && redirectTo ? redirectTo : "/");
}
