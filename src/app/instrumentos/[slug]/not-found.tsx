import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionaries";

export default async function InstrumentNotFound() {
  const dict = getDictionary(await getLocale()).instrumentDetail;

  return (
    <Container className="space-y-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">{dict.notFoundTitle}</h1>
      <p className="text-muted-foreground text-sm">
        {dict.notFoundDescription}
      </p>
      <Button asChild>
        <Link href="/">{dict.notFoundCta}</Link>
      </Button>
    </Container>
  );
}
