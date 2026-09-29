import catalogData from "@/data/instruments.generated.json";

/**
 * Client-safe slice of the generated catalog: just the slugs classified as
 * ad-hoc. instruments-repository.ts is "server-only" (keeps the full catalog
 * out of the client bundle), but the header (a Client Component) needs to
 * know which section a /instrumentos/[slug] detail page belongs to — the
 * route is shared between validated and ad-hoc instruments, so the URL
 * alone can't tell them apart. This reads the same instruments.generated.json
 * the repository does, not a second, independently-maintained list.
 */
export const AD_HOC_SLUGS: ReadonlySet<string> = new Set(
  catalogData.instruments
    .filter((instrument) => instrument.classification === "ad-hoc")
    .map((instrument) => instrument.slug),
);
