"use client";

import { useState, type FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgawwqjl";

type Status = "idle" | "submitting" | "success" | "error";
type RequiredField = "name" | "description";

const errorClasses = "border-destructive focus-visible:ring-destructive";

/** Submits via fetch so the page never reloads/redirects — Formspree
 * returns JSON instead of its default redirect when sent an Accept:
 * application/json header. Required-field validation is done by hand
 * (rather than relying on the browser's native `required` tooltip) so the
 * error is a clearly visible, styled message next to the field. */
export function RequestInstrumentForm({
  dict,
}: {
  dict: Dictionary["requestPage"];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Set<RequiredField>>(new Set());

  function clearFieldError(field: RequiredField) {
    setFieldErrors((current) => {
      if (!current.has(field)) return current;
      const next = new Set(current);
      next.delete(field);
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const missing = new Set<RequiredField>();
    if (!String(formData.get("name") ?? "").trim()) missing.add("name");
    if (!String(formData.get("description") ?? "").trim())
      missing.add("description");

    if (missing.size > 0) {
      setFieldErrors(missing);
      form.querySelector<HTMLElement>(`[name="${[...missing][0]}"]`)?.focus();
      return;
    }

    setFieldErrors(new Set());
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Card className="border-emerald-500/40 bg-emerald-500/10">
        <CardHeader>
          <CardTitle>{dict.successMessage}</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Spam honeypot (Formspree convention) — left empty by real users. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="_subject" value={dict.emailSubject} />

      <div className="space-y-1.5">
        <Label htmlFor="name">
          {dict.formNameLabel}{" "}
          <span className="text-muted-foreground font-normal">
            ({dict.requiredBadge})
          </span>
        </Label>
        <Input
          id="name"
          name="name"
          placeholder={dict.formNamePlaceholder}
          aria-required="true"
          aria-invalid={fieldErrors.has("name")}
          aria-describedby={fieldErrors.has("name") ? "name-error" : undefined}
          className={cn(fieldErrors.has("name") && errorClasses)}
          onChange={() => clearFieldError("name")}
        />
        {fieldErrors.has("name") && (
          <p id="name-error" role="alert" className="text-destructive text-sm">
            {dict.requiredFieldError}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="authors">{dict.formAuthorsLabel}</Label>
        <p className="text-muted-foreground text-xs">{dict.formAuthorsHelp}</p>
        <Input
          id="authors"
          name="authors"
          placeholder={dict.formAuthorsPlaceholder}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="link">{dict.formLinkLabel}</Label>
        <p className="text-muted-foreground text-xs">{dict.formLinkHelp}</p>
        <Input
          id="link"
          name="link"
          type="url"
          placeholder={dict.formLinkPlaceholder}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="description">
          {dict.formDescriptionLabel}{" "}
          <span className="text-muted-foreground font-normal">
            ({dict.requiredBadge})
          </span>
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder={dict.formDescriptionPlaceholder}
          rows={4}
          aria-required="true"
          aria-invalid={fieldErrors.has("description")}
          aria-describedby={
            fieldErrors.has("description") ? "description-error" : undefined
          }
          className={cn(fieldErrors.has("description") && errorClasses)}
          onChange={() => clearFieldError("description")}
        />
        {fieldErrors.has("description") && (
          <p
            id="description-error"
            role="alert"
            className="text-destructive text-sm"
          >
            {dict.requiredFieldError}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">{dict.formEmailLabel}</Label>
        <p className="text-muted-foreground text-xs">{dict.formEmailHelp}</p>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={dict.formEmailPlaceholder}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">{dict.formNotesLabel}</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder={dict.formNotesPlaceholder}
          rows={3}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-destructive text-sm">
          {dict.errorMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? dict.submittingButton : dict.submitButton}
      </Button>
    </form>
  );
}
