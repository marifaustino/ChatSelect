import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InstrumentBreadcrumb } from "@/components/instrument/instrument-breadcrumb";
import { InstrumentHeader } from "@/components/instrument/instrument-header";
import { InstrumentMeta } from "@/components/instrument/instrument-meta";
import { TextSection } from "@/components/instrument/text-section";
import { ProsConsSection } from "@/components/instrument/pros-cons-section";
import { SourceSection } from "@/components/instrument/source-section";
import { DualApplicationNotice } from "@/components/instrument/dual-application-notice";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import { findInstrumentBySlug } from "@/lib/catalog/catalog-service";
import { isValidListHref } from "@/lib/catalog/catalog-url";

interface InstrumentPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}

export function generateStaticParams() {
  return getAllInstruments().map((instrument) => ({ slug: instrument.slug }));
}

export async function generateMetadata({
  params,
}: InstrumentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const instrument = findInstrumentBySlug(getAllInstruments(), slug);
  if (!instrument) return {};
  return {
    title: instrument.title,
    description: instrument.description ?? undefined,
  };
}

export default async function InstrumentPage({
  params,
  searchParams,
}: InstrumentPageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const instrument = findInstrumentBySlug(getAllInstruments(), slug);
  if (!instrument) notFound();

  // Ad-hoc instruments are only ever linked from /ad-hoc (the home catalog
  // excludes them), so classification alone tells us where "back" belongs.
  const isAdHoc = instrument.classification === "ad-hoc";
  const parentHref = isAdHoc ? "/ad-hoc" : "/";
  const parentLabel = isAdHoc ? "Ad Hoc" : "Catálogo";
  // `from` carries whatever filters/search were active on the listing the
  // user came from; only trust it if it actually points back into that same
  // section (see isValidListHref), otherwise fall back to the bare route.
  const backHref = isValidListHref(from, parentHref) ? from : parentHref;

  return (
    <Container className="max-w-3xl space-y-8 py-8">
      <InstrumentBreadcrumb
        parentHref={backHref}
        parentLabel={parentLabel}
        title={instrument.title}
      />
      <InstrumentHeader instrument={instrument} />
      {instrument.isDualApplication && <DualApplicationNotice />}
      <InstrumentMeta instrument={instrument} />
      <TextSection
        title="Descrição do instrumento"
        text={instrument.instrumentDescription}
      />
      <TextSection title="Como pontuar" text={instrument.scoring} />
      <TextSection title="Confiabilidade" text={instrument.reliability} />
      <TextSection
        title="Resultado de referência"
        text={instrument.referenceResult}
      />
      <ProsConsSection
        advantages={instrument.advantages}
        limitations={instrument.limitations}
      />
      <SourceSection source={instrument.source} />
    </Container>
  );
}
