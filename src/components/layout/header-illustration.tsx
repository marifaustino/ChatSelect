import type { SVGProps } from "react";

/** Minimalist line-art mark: a stylized human profile "speaking" to an
 * abstract geometric chatbot glyph, linked by a dotted message line. Pure
 * thin strokes (no large fills) so it reads as an academic/editorial mark
 * rather than a flat corporate mascot. Inherits color via `currentColor`. */
export function HeaderIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 200" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* human profile, facing right */}
        <circle cx="86" cy="72" r="26" />
        <path d="M108,66 C118,70 118,84 104,90" />
        <path d="M78,96 C74,104 72,112 70,120" />
        <path d="M70,120 C48,128 24,130 4,126" />

        {/* dotted message line */}
        <line x1="118" y1="76" x2="212" y2="76" strokeDasharray="2 7" />

        {/* abstract chatbot glyph */}
        <rect x="220" y="46" width="60" height="60" rx="16" />
        <polygon points="250,62 264,76 250,90 236,76" />
        <path d="M250,62 L250,50" />
        <path d="M264,76 L276,76" />
        <path d="M250,90 L250,102" />
        <path d="M236,76 L224,76" />
      </g>
      <g fill="currentColor" stroke="none">
        <circle cx="150" cy="76" r="2.5" />
        <circle cx="180" cy="76" r="2.5" />
      </g>
    </svg>
  );
}
