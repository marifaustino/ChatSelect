import { Card, CardContent } from "@/components/ui/card";
import type { Instrument } from "@/core/models/instrument";

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

export function InstrumentMeta({ instrument }: { instrument: Instrument }) {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        <MetaItem label="Autores" value={instrument.authors} />
        <MetaItem label="Idioma original" value={instrument.originalLanguage} />
        <MetaItem label="Traduções" value={instrument.translations} />
        <MetaItem
          label="Tipo de instrumento"
          value={instrument.instrumentType}
        />
        <MetaItem label="Número de itens" value={instrument.itemCount} />
        <MetaItem
          label="Formato de resposta"
          value={instrument.responseFormat}
        />
        <MetaItem
          label="Amostra do estudo original"
          value={instrument.originalSample}
        />
        <MetaItem
          label="Modalidades de comunicação"
          value={instrument.communicationModalities}
        />
        <MetaItem
          label="Atributos de qualidade"
          value={instrument.qualityAttributes}
        />
        <MetaItem label="Atributos" value={instrument.attributes} />
        {instrument.instrumentLink && (
          <MetaItem
            label="Link do instrumento"
            value={
              <a
                href={instrument.instrumentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary break-all hover:underline"
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
