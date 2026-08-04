"use client";

import Script from "next/script";
import { GOOGLE_TRANSLATE_INCLUDED_LANGUAGES } from "@/components/layout/google-translate-languages";

/**
 * Widget lives in its own container that React mounts once and never
 * re-renders, so Google Translate is free to rewrite its contents without
 * fighting React's reconciliation (the rest of the page is protected by
 * DomPatchForTranslate, mounted once in the root layout). `pt` and `en` are
 * left out of includedLanguages since this site is already natively PT-BR.
 */
export function GoogleTranslateWidget() {
  return (
    <>
      <div
        id="google_translate_element"
        className="google-translate-widget"
        translate="no"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'pt',
              includedLanguages: '${GOOGLE_TRANSLATE_INCLUDED_LANGUAGES}',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
