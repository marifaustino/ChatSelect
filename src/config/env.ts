import { z } from "zod";

/**
 * Public env. Only NEXT_PUBLIC_* vars belong here (inlined into the browser
 * bundle). Formspree endpoint is optional: the request form renders a setup
 * notice instead of a broken submit action when it's missing.
 */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_FORMSPREE_ENDPOINT: z
    .string()
    .url("NEXT_PUBLIC_FORMSPREE_ENDPOINT must be a valid URL")
    .optional(),
});

const parsed = publicEnvSchema.safeParse({
  NEXT_PUBLIC_FORMSPREE_ENDPOINT: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
});

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
    .join("\n");
  throw new Error(`Invalid public environment variables:\n${issues}`);
}

export const env = parsed.data;
