import Link from "next/link";
import type { Metadata } from "next";
import { User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import { filterByClassification } from "@/lib/catalog/catalog-service";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre o ChatSelect e como o catálogo foi construído.",
};

const TEAM = [
  { name: "Mariana Faustino", institution: "UTFPR" },
  { name: "Gabriel Meira", institution: "PUCPR" },
  { name: "Leo Paschoal", institution: "PUCPR" },
  { name: "Pedro Valle", institution: "IME-USP" },
] as const;

export default function AboutPage() {
  const all = getAllInstruments();
  const adHocCount = filterByClassification(all, "ad-hoc").length;
  const adaptedCount = all.length - adHocCount;

  return (
    <Container className="max-w-3xl space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Sobre o ChatSelect
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
          efetividade pedagógica. Essa escolha é difícil quando não há um
          lugar único reunindo essas opções lado a lado.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">O catálogo</h2>
        <p>
          O ChatSelect reúne {all.length} instrumentos extraídos de artigos
          científicos que avaliaram chatbots em contextos educacionais. Cada
          ficha documenta autores, idioma original, traduções, amostra do
          estudo, número de itens, formato de resposta, forma de pontuação,
          confiabilidade, vantagens, limitações e a fonte bibliográfica
          completa.
        </p>
        <p>
          Cada instrumento passou por uma triagem quanto à sua origem:
          instrumentos com fonte psicométrica validada e citável, como a SUS
          ou o TAM, compõem a lista principal ({adaptedCount} instrumentos);
          já os instrumentos Ad Hoc ({adHocCount} instrumentos) — criados
          pelos próprios autores de um estudo especificamente para aquela
          pesquisa, geralmente sem dados formais de confiabilidade — ficam
          reunidos separadamente na aba{" "}
          <Link
            href="/ad-hoc"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            Ad Hoc
          </Link>
          . A página inicial mostra apenas os instrumentos com origem
          validada; a lista completa de instrumentos Ad Hoc fica na aba{" "}
          <Link
            href="/ad-hoc"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            Ad Hoc
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold">Como usar</h2>
        <p>
          Navegue pela lista de instrumentos na aba{" "}
          <Link
            href="/"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            Catálogo
          </Link>
          , busque por nome, autor ou descrição, ou filtre por categoria,
          idioma, modalidade de comunicação e atributos. Clique em um
          instrumento para ver a ficha completa. Se você conhece um
          instrumento que não está no catálogo, sugira sua inclusão na aba{" "}
          <Link
            href="/solicitar"
            className="text-primary hover:text-primary-hover hover:underline"
          >
            Solicitar instrumento
          </Link>
          .
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Quem fez</h2>
          <div className="bg-primary-hover mt-2 h-[3px] w-12" />
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TEAM.map((person) => (
            <div key={person.name} className="space-y-2 text-center">
              {/* Placeholder avatar — swap for <img src="..." /> once
                  real photos are available, keeping this same circle. */}
              <div className="bg-secondary mx-auto flex size-20 items-center justify-center rounded-full">
                <User className="text-primary size-10" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold">{person.name}</p>
              <p className="text-muted-foreground text-xs">
                {person.institution}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
