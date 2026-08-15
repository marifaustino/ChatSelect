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
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionaries";

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
  const dict = getDictionary(await getLocale()).instrumentDetail;

  return (
    <Container className="max-w-3xl space-y-8 py-8">
      <Link href="/" className="text-muted-foreground text-sm hover:underline">
        &larr; {dict.backLink}
      </Link>
      <InstrumentHeader instrument={instrument} />
      {instrument.isDualApplication && <DualApplicationNotice dict={dict} />}
      <InstrumentMeta instrument={instrument} dict={dict} />
      <TextSection
        title={dict.sectionInstrumentDescription}
        text={instrument.instrumentDescription}
      />
      <TextSection title={dict.sectionScoring} text={instrument.scoring} />
      <TextSection
        title={dict.sectionReliability}
        text={instrument.reliability}
      />
      <TextSection
        title={dict.sectionReferenceResult}
        text={instrument.referenceResult}
      />
      <ProsConsSection
        advantages={instrument.advantages}
        limitations={instrument.limitations}
        dict={dict}
      />
      <SourceSection source={instrument.source} dict={dict} />
    </Container>
  );
}
