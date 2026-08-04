# InstruChat

> Catálogo de **instrumentos de avaliação** (questionários, escalas, entrevistas, rubricas) usados em pesquisas sobre **chatbots educacionais**.

InstruChat ajuda pesquisadores a escolher qual instrumento usar para avaliar um chatbot educacional, navegando por 41 instrumentos extraídos de artigos científicos, cada um classificado como **Adaptado/Original** (deriva de uma fonte psicométrica validada, ex.: SUS, TAM) ou **Ad-hoc** (criado pelos próprios autores do estudo, sem validação psicométrica formal).

## Stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4** + **shadcn/ui**
- **Sem banco de dados**: site estático. Os dados vêm de um CSV, transformados em JSON em tempo de build
- **Zod** para validação
- **Vitest** para testes
- **Formspree** para o formulário de solicitação de instrumentos (sem backend próprio)
- **Google Translate** (widget de tradução, PT/EN ocultados da lista de idiomas)

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

## Variáveis de ambiente

| Variável                          | Escopo  | Descrição                                                                 |
| ---------------------------------- | ------- | -------------------------------------------------------------------------- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT`   | público | Endpoint do Formspree (`https://formspree.io/f/xxxxxxx`) para a aba "Solicitar instrumento". Sem essa variável, a página mostra um aviso explicando como configurar, em vez de um formulário quebrado. |

Copie `.env.example` para `.env.local` e preencha.

## Google Translate

O widget (aba superior do site) traduz a interface e o conteúdo para qualquer idioma **exceto** português e inglês (já nativos). Detalhes técnicos:

- `src/components/layout/google-translate-widget.tsx`: carrega o script oficial do Google e restringe idiomas via `includedLanguages` (a API pública do widget não tem um parâmetro de exclusão — por isso listamos todos os idiomas suportados menos `pt`/`en`).
- `src/components/layout/dom-patch-for-translate.tsx`: o Google Translate reescreve o DOM por fora do React (envolve textos em `<font>`), o que pode causar o erro clássico `NotFoundError: removeChild` quando o React tenta reconciliar essa mesma área depois (ex.: navegação client-side). Esse componente aplica um patch defensivo em `removeChild`/`insertBefore`, documentado e usado por outros projetos React nessa mesma situação.
- **Não foi possível verificar via `curl`** que o dropdown de tradução funciona de fato (isso exige um navegador executando JavaScript) — confirme manualmente abrindo o site e testando a troca de idioma antes de considerar essa parte concluída.

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
3. Configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` em Project Settings → Environment Variables.
4. Deploy. O build já regenera o catálogo a partir do CSV versionado no repositório.
