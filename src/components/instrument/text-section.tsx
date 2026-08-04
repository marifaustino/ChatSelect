export function TextSection({
  title,
  text,
}: {
  title: string;
  text: string | null;
}) {
  if (!text) return null;
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line">{text}</p>
    </section>
  );
}
