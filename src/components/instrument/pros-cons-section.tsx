import type { Dictionary } from "@/i18n/dictionaries";

export function ProsConsSection({
  advantages,
  limitations,
  dict,
}: {
  advantages: string[];
  limitations: string[];
  dict: Dictionary["instrumentDetail"];
}) {
  if (advantages.length === 0 && limitations.length === 0) return null;

  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {advantages.length > 0 && (
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            {dict.sectionAdvantages}
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {limitations.length > 0 && (
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            {dict.sectionLimitations}
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            {limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
