import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InstrumentHeader } from "@/components/instrument/instrument-header";
import { InstrumentMeta } from "@/components/instrument/instrument-meta";
import { TextSection } from "@/components/instrument/text-section";
import { ProsConsSection } from "@/components/instrument/pros-cons-section";
import { SourceSection } from "@/components/instrument/source-section";
import { DualApplicationNotice } from "@/components/instrument/dual-application-notice";
import { getAllInstruments } from "@/lib/catalog/instruments-repository";
import { findInstrumentBySlug } from "@/lib/catalog/catalog-service";

interface InstrumentPageProps {
  params: Promise<{ slug: string }>;
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

export default async function InstrumentPage({ params }: InstrumentPageProps) {
  const { slug } = await params;
  const instrument = findInstrumentBySlug(getAllInstruments(), slug);
  if (!instrument) notFound();

  return (
    <Container className="max-w-3xl space-y-8 py-8">
      <Link href="/" className="text-sm text-muted-foreground hover:underline">
        &larr; Voltar aos instrumentos
      </Link>
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
