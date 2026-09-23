import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.6fr_0.8fr]">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <BrandMark decorative className="size-9" />
            <span className="font-serif text-lg font-bold">ChatSelect</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Catálogo científico para apoiar a escolha de instrumentos de
            avaliação de chatbots educacionais.
          </p>
        </div>

        <div>
          <p className="text-muted-foreground mb-3 text-xs font-bold tracking-[0.16em] uppercase">
            Navegação
          </p>
          <div className="text-muted-foreground flex flex-col gap-2 text-sm">
            <Link href="/instrumentos" className="hover:text-primary">
              Catálogo
            </Link>
            <Link href="/ad-hoc" className="hover:text-primary">
              Instrumentos personalizados
            </Link>
            <Link href="/solicitar" className="hover:text-primary">
              Solicitar instrumento
            </Link>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground mb-3 text-xs font-bold tracking-[0.16em] uppercase">
            Pesquisa
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Dados extraídos de estudos científicos e revisados manualmente.
          </p>
          <a
            href="/assets/artigo-chatselect.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-hover mt-3 inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            Ler o artigo
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
      <Container className="text-muted-foreground flex flex-col gap-2 border-t py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ChatSelect</p>
        <p>Pesquisa aberta, seleção mais fundamentada.</p>
      </Container>
    </footer>
  );
}
