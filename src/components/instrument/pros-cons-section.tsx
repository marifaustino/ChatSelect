export function ProsConsSection({
  advantages,
  limitations,
}: {
  advantages: string[];
  limitations: string[];
}) {
  if (advantages.length === 0 && limitations.length === 0) return null;

  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {advantages.length > 0 && (
        <div>
          <h2 className="mb-2 text-xl font-semibold">Vantagens</h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {limitations.length > 0 && (
        <div>
          <h2 className="mb-2 text-xl font-semibold">Limitações</h2>
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
