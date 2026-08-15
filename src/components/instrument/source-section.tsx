import { Linkify } from "@/lib/text/linkify";
import type { Dictionary } from "@/i18n/dictionaries";

export function SourceSection({
  source,
  dict,
}: {
  source: string | null;
  dict: Dictionary["instrumentDetail"];
}) {
  if (!source) return null;
  const citations = source.split("\n").filter(Boolean);

  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">{dict.sectionSource}</h2>
      <ul className="space-y-2 text-sm">
        {citations.map((citation) => (
          <li key={citation}>
            <Linkify text={citation} />
          </li>
        ))}
      </ul>
    </section>
  );
}
