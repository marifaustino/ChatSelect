import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import { filterByClassification } from "@/lib/catalog/catalog-service";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre o InstruChat e como o catálogo foi construído.",
};

export default function AboutPage() {
  const all = getAllInstruments();
  const adHocCount = filterByClassification(all, "ad-hoc").length;
  const adaptedCount = all.length - adHocCount;

  return (
    <Container className="max-w-3xl space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Sobre o InstruChat
        </h1>
        <p className="text-muted-foreground">
          Um catálogo de instrumentos de avaliação para pesquisa em chatbots
          educacionais.
        </p>
      </div>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">O problema</h2>
        <p>
          Pesquisadores que avaliam chatbots educacionais frequentemente
          precisam escolher, entre dezenas de questionários, escalas,
          entrevistas e rubricas espalhados pela literatura, qual instrumento
          usar para medir usabilidade, satisfação, engajamento, confiança ou
          efetividade pedagógica. Essa escolha é difícil quando não há um lugar
          único reunindo essas opções lado a lado.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">O catálogo</h2>
        <p>
          O InstruChat reúne {all.length} instrumentos extraídos de artigos
          científicos que avaliaram chatbots em contextos educacionais. Cada
          ficha documenta autores, idioma original, traduções, amostra do
          estudo, número de itens, formato de resposta, forma de pontuação,
          confiabilidade, vantagens, limitações e a fonte bibliográfica
          completa.
        </p>
        <p>
          Cada instrumento é classificado como{" "}
          <strong>Adaptado/Original</strong> ({adaptedCount} instrumentos) —
          quando deriva de uma fonte psicométrica validada e citável, como a SUS
          ou o TAM — ou <strong>Ad-hoc</strong> ({adHocCount} instrumentos) —
          quando foi criado pelos próprios autores de um estudo especificamente
          para aquela pesquisa, geralmente sem dados formais de confiabilidade.
          Veja a lista completa de instrumentos ad-hoc na aba{" "}
          <Link href="/ad-hoc" className="text-primary hover:underline">
            Ad-hoc
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">Como usar</h2>
        <p>
          Navegue pela lista de instrumentos na aba{" "}
          <Link href="/" className="text-primary hover:underline">
            Instrumentos
          </Link>
          , busque por nome, autor ou descrição, ou filtre por categoria. Clique
          em um instrumento para ver a ficha completa. Se você conhece um
          instrumento que não está no catálogo, sugira sua inclusão na aba{" "}
          <Link href="/solicitar" className="text-primary hover:underline">
            Solicitar instrumento
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">Créditos</h2>
        <p>
          O formato do catálogo e da página de detalhe de cada instrumento é
          inspirado no{" "}
          <a
            href="https://www.ux4all.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            UX4ALL
          </a>
          . A organização por categorias e filtros é inspirada no{" "}
          <a
            href="https://uxnator.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            UXNATOR
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
