import { Container } from "@/components/layout/container";
import type { Dictionary } from "@/i18n/dictionaries";

export function SiteFooter({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t">
      <Container className="text-muted-foreground flex flex-col gap-1 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{dict.tagline}</p>
        <p>{dict.subtagline}</p>
      </Container>
    </footer>
  );
}
