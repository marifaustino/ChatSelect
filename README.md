# ChatSelect

> Catálogo de **instrumentos de avaliação** (questionários, escalas, entrevistas, rubricas) usados em pesquisas sobre **chatbots educacionais**.
>
> ⚠️ Este nome colide com outro projeto separado feito na mesma sessão (catálogo de **métodos** de avaliação, com Supabase, em `../chatselect`). São dois apps distintos que passaram a compartilhar o mesmo nome de marca a pedido do usuário.

ChatSelect ajuda pesquisadores a escolher qual instrumento usar para avaliar um chatbot educacional, navegando pelos instrumentos **Adaptado/Original** (derivam de uma fonte psicométrica validada, ex.: SUS, TAM) extraídos de artigos científicos. Instrumentos **Ad-hoc** (criados pelos próprios autores do estudo, sem validação psicométrica formal) ficam de fora da página inicial e da busca geral — eles têm uma aba própria, "Ad-hoc".

## Stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4** + **shadcn/ui**
- **Sem banco de dados**: site estático. Os dados vêm de um CSV, transformados em JSON em tempo de build
- **Zod** para validação
- **Vitest** para testes
- **Formspree** para o formulário de solicitação de instrumentos (sem backend próprio), enviado via `fetch` (sem reload/redirect da página)
- **i18n próprio** via dicionários TypeScript por idioma (sem serviço de tradução externo) — ver seção [Internacionalização](#internacionalização)

## Arquitetura

```
data/Fichas_Instrumentos_Avaliacao.csv   ← fonte dos dados (editável)
        │
        ▼  npm run build:catalog (scripts/build-catalog.ts)
src/data/instruments.generated.json       ← gerado, não versionado
        │
        ▼
src/lib/catalog/instruments-repository.ts ← único ponto que importa o JSON
        │
        ▼
src/lib/catalog/catalog-service.ts        ← funções puras (busca, filtro, ordenação)
        │
        ▼
src/app/**                                ← páginas (View)
```

`npm run dev` e `npm run build` regeneram o catálogo automaticamente antes de rodar — não é preciso rodar o script manualmente no dia a dia.

## Instrumentos Adaptado/Original vs. Ad-hoc

- A **página inicial** (`/`) e sua busca/filtros mostram **apenas** instrumentos Adaptado/Original — ad-hoc nunca aparece lá, mesmo digitando um termo que daria match no título de um instrumento ad-hoc.
- A aba **Ad-hoc** (`/ad-hoc`) lista exclusivamente os instrumentos ad-hoc, sem busca/filtros.
- Essa restrição é aplicada em `src/app/page.tsx` (`filterByClassification(getAllInstruments(), "adapted")` antes de qualquer outro filtro) — não depende de nenhum parâmetro de URL, então não dá para "escapar" dela pela busca.

## Filtros da página inicial

Categoria, Idioma, Modalidade de comunicação, Atributos e Atributos de qualidade — cada um extrai suas opções dinamicamente dos valores presentes nos instrumentos Adaptado/Original (não do catálogo inteiro), para que nenhuma opção de filtro leve a uma lista vazia.

## Rodando localmente

```bash
npm install
npm run dev   # http://localhost:3000 (ou a próxima porta livre)
```

## Como atualizar o catálogo com novos instrumentos

1. Edite `data/Fichas_Instrumentos_Avaliacao.csv` (mesmas 22 colunas) ou substitua o arquivo por um export mais novo da planilha.
2. Se o instrumento novo for **ad-hoc**, adicione o nome da aba (`Nome_Aba`) a `KNOWN_AD_HOC_SHEET_NAMES` em `src/core/models/known-classification.ts` (ou a `KNOWN_ADAPTED_SHEET_NAMES` se for adaptado/original). Sem isso, a classificação é estimada por texto (procura "ad-hoc" nos campos) e o build avisa no console para você revisar.
3. Rode `npm run build:catalog` (ou apenas `npm run dev`) para regenerar o catálogo.

O script valida o CSV inteiro com Zod e falha alto (com mensagem clara) se algum campo obrigatório faltar ou se houver slug duplicado.

## Solicitar instrumento

A aba "Solicitar instrumento" (`/solicitar`) é um formulário nativo (`src/components/request/request-instrument-form.tsx`, client component) com os mesmos componentes de UI do resto do site — nada de iframe ou redirecionamento para fora do app. O envio é feito via `fetch` para o endpoint do Formspree (`FORMSPREE_ENDPOINT`, hardcoded no componente — não é um segredo, já que é usado no navegador de qualquer forma), com `Accept: application/json` para receber uma resposta JSON em vez do redirecionamento padrão do Formspree. Em caso de sucesso, o formulário é substituído por uma mensagem de confirmação; em caso de falha, uma mensagem de erro aparece acima do botão de envio sem limpar os campos já preenchidos. Para trocar o formulário/conta do Formspree, edite a constante `FORMSPREE_ENDPOINT` nesse arquivo. Não há variáveis de ambiente necessárias no projeto no momento.

## Internacionalização

O ChatSelect **não** usa mais o widget clássico do Google Translate (descontinuado para uso comercial desde 2019, instável e ruim para SEO). Em vez disso, a interface usa um sistema de i18n próprio, sem dependência de serviço externo:

- **Escopo**: apenas a interface (navegação, botões, filtros, textos estáticos das páginas Sobre/Ad-hoc/Solicitar) é traduzida. Os dados das 41 fichas de instrumentos (título, descrição, autores, vantagens, limitações, fonte etc.) **nunca** são traduzidos — sempre renderizam em português, independentemente do idioma selecionado, seguindo o mesmo princípio do projeto irmão (Supabase) de nunca traduzir os dados de pesquisa subjacentes.
- **10 idiomas**: português (`pt-BR`) e inglês (`en`) são nativos, escritos e revisados manualmente. Os outros 8 — espanhol, francês, alemão, italiano, chinês simplificado, japonês, russo e árabe — foram traduzidos diretamente (sem API/serviço de tradução, sem custo recorrente, sem nova dependência de runtime).
- **Árabe** usa layout RTL (`dir="rtl"` no `<html>`, calculado automaticamente por `isRtlLocale()`).
- **Persistência**: cookie `locale`, sem prefixo de idioma na URL. A troca de idioma é uma Server Action (`src/i18n/actions.ts`) que grava o cookie e redireciona — o seletor de idioma (`LocaleSwitcher`) não depende de JavaScript no cliente.

Arquitetura:

```
src/i18n/locales.ts              ← idiomas suportados, labels nativos, RTL
src/i18n/get-locale.ts           ← lê o cookie `locale` (server-only)
src/i18n/actions.ts              ← Server Action que grava o cookie e redireciona
src/i18n/format-message.ts       ← interpolação de {tokens} nas strings
src/i18n/dictionaries/types.ts   ← interface Dictionary (contrato compartilhado)
src/i18n/dictionaries/*.ts       ← uma implementação por idioma
src/i18n/dictionaries/index.ts   ← getDictionary(locale)
```

Para adicionar um novo idioma: acrescente o código a `SUPPORTED_LOCALES` e um rótulo a `LOCALE_LABELS` em `src/i18n/locales.ts`, crie `src/i18n/dictionaries/<locale>.ts` implementando `Dictionary`, e registre-o em `src/i18n/dictionaries/index.ts`. O TypeScript aponta qualquer campo faltante em tempo de compilação.

## Scripts

| Script                 | Ação                                          |
| ----------------------- | ---------------------------------------------- |
| `npm run dev`           | `build:catalog` + servidor de desenvolvimento |
| `npm run build`         | `build:catalog` + build de produção           |
| `npm run build:catalog` | Regenera `src/data/instruments.generated.json` a partir do CSV |
| `npm run typecheck`     | Checagem de tipos (regenera o catálogo antes) |
| `npm run lint`          | ESLint                                        |
| `npm run test`          | Testes (Vitest) — 25 testes, cobrindo o mapeamento CSV→Instrument e os filtros do catálogo |
| `npm run format`        | Prettier (escrita)                            |

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Importe o repositório na Vercel (`vercel.json` já define `framework: nextjs`).
3. Deploy. O build já regenera o catálogo a partir do CSV versionado no repositório.
