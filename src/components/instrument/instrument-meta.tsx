import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Instrument } from "@/core/models/instrument";

/** Fact-sheet row: label on the left, value on the right, one field per
 * line. A rigid multi-column grid put a one-line field (e.g. "Idioma
 * Original: Alemão") next to a six-line one (e.g. "Formato de resposta"),
 * leaving ragged whitespace — this stacks instead, so every field takes
 * only the height it needs. `emphasize` gives key fields (Autores, Amostra)
 * more typographic weight than short/secondary ones. */
function MetaItem({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: React.ReactNode;
  emphasize?: boolean;
}) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6">
      <dt className="text-muted-foreground w-full shrink-0 text-xs font-medium tracking-wide uppercase sm:w-52">
        {label}
      </dt>
      <dd
        className={cn(
          "text-sm",
          emphasize && "text-base leading-relaxed font-medium",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

export function InstrumentMeta({ instrument }: { instrument: Instrument }) {
  return (
    <Card>
      <CardContent className="pt-4">
        <dl className="divide-y">
          <MetaItem label="Autores" value={instrument.authors} emphasize />
          <MetaItem
            label="Amostra do estudo original"
            value={instrument.originalSample}
            emphasize
          />
          <MetaItem
            label="Idioma original"
            value={instrument.originalLanguage}
          />
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
                  className="text-primary hover:text-primary-hover break-all hover:underline"
                >
                  {instrument.instrumentLink}
                </a>
              }
            />
          )}
        </dl>
      </CardContent>
    </Card>
  );
}
