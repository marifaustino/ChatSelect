/** Per-category color assignments so Categoria tags/checkboxes are visually
 * distinguishable at a glance instead of all sharing the same light-blue
 * tint. Keyed by the exact Portuguese category string from the CSV. */
const CATEGORY_COLORS: Record<
  string,
  { badge: string; solid: string; border: string }
> = {
  "Experiência do Usuário": {
    badge: "border-transparent bg-blue-100 text-blue-800",
    solid: "border-blue-600 bg-blue-600 text-white",
    border: "border-blue-600",
  },
  Usabilidade: {
    badge: "border-transparent bg-green-100 text-green-800",
    solid: "border-green-600 bg-green-600 text-white",
    border: "border-green-600",
  },
  Aceitação: {
    badge: "border-transparent bg-orange-100 text-orange-800",
    solid: "border-orange-500 bg-orange-500 text-white",
    border: "border-orange-500",
  },
  "Impacto Psicológico": {
    badge: "border-transparent bg-purple-100 text-purple-800",
    solid: "border-purple-600 bg-purple-600 text-white",
    border: "border-purple-600",
  },
  "Qualidade das Respostas": {
    badge: "border-transparent bg-[#f4e0d7] text-[#7c2d12]",
    solid: "border-[#b3542c] bg-[#b3542c] text-white",
    border: "border-[#b3542c]",
  },
};

const DEFAULT_COLOR = {
  badge: "border-transparent bg-secondary text-secondary-foreground",
  solid: "border-primary bg-primary text-primary-foreground",
  border: "border-primary",
};

/** Badge classes (light tint background + dark text) for displaying a
 * category tag on cards and instrument headers. */
export function categoryBadgeClasses(category: string | null | undefined) {
  return (category && CATEGORY_COLORS[category]?.badge) || DEFAULT_COLOR.badge;
}

/** Solid fill classes (used for the checked state of a category filter
 * checkbox) plus the matching border color for its unchecked state. */
export function categorySolidClasses(category: string | null | undefined) {
  return (category && CATEGORY_COLORS[category]?.solid) || DEFAULT_COLOR.solid;
}
