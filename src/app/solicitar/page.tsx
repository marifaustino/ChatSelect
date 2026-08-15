import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { RequestInstrumentForm } from "@/components/request/request-instrument-form";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.requestPage.metaTitle,
    description: dict.requestPage.metaDescription,
  };
}

export default async function RequestInstrumentPage() {
  const dict = getDictionary(await getLocale());

  return (
    <Container className="max-w-xl space-y-6 py-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {dict.requestPage.heading}
        </h1>
        <p className="text-muted-foreground text-sm">
          {dict.requestPage.introText}
        </p>
      </div>

      <RequestInstrumentForm dict={dict.requestPage} />
    </Container>
  );
}
