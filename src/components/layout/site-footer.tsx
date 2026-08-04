import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="text-muted-foreground flex flex-col gap-1 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          InstruChat — Catálogo de instrumentos de avaliação de chatbots
          educacionais.
        </p>
        <p>Dados extraídos de artigos científicos revisados manualmente.</p>
      </Container>
    </footer>
  );
}
