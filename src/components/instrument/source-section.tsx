import { Linkify } from "@/lib/text/linkify";

export function SourceSection({ source }: { source: string | null }) {
  if (!source) return null;
  const citations = source.split("\n").filter(Boolean);

  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Fonte</h2>
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
