import { Card, CardContent } from "@/components/ui/card";
import type { Instrument } from "@/core/models/instrument";
import type { Dictionary } from "@/i18n/dictionaries";

function MetaItem({ label, value }: { label: string; value: React.ReactNode }) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <div>
      <dt className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
        {label}
      </dt>
      <dd className="text-sm">{value}</dd>
    </div>
  );
}

export function InstrumentMeta({
  instrument,
  dict,
}: {
  instrument: Instrument;
  dict: Dictionary["instrumentDetail"];
}) {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        <MetaItem label={dict.metaAuthors} value={instrument.authors} />
        <MetaItem
          label={dict.metaOriginalLanguage}
          value={instrument.originalLanguage}
        />
        <MetaItem
          label={dict.metaTranslations}
          value={instrument.translations}
        />
        <MetaItem
          label={dict.metaInstrumentType}
          value={instrument.instrumentType}
        />
        <MetaItem label={dict.metaItemCount} value={instrument.itemCount} />
        <MetaItem
          label={dict.metaResponseFormat}
          value={instrument.responseFormat}
        />
        <MetaItem
          label={dict.metaOriginalSample}
          value={instrument.originalSample}
        />
        <MetaItem
          label={dict.metaCommunicationModalities}
          value={instrument.communicationModalities}
        />
        <MetaItem
          label={dict.metaQualityAttributes}
          value={instrument.qualityAttributes}
        />
        <MetaItem label={dict.metaAttributes} value={instrument.attributes} />
        {instrument.instrumentLink && (
          <MetaItem
            label={dict.metaInstrumentLink}
            value={
              <a
                href={instrument.instrumentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover break-all hover:underline"
              >
                {instrument.instrumentLink}
              </a>
            }
          />
        )}
      </CardContent>
    </Card>
  );
}
