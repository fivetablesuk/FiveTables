"use client";

import { FormEvent, useState } from "react";
import { SECTORS } from "@/lib/sectors";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "sector" | "form", string>
>;

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      name: String(new FormData(form).get("name") ?? "").trim(),
      email: String(new FormData(form).get("email") ?? "").trim(),
      phone: String(new FormData(form).get("phone") ?? "").trim(),
      sector: String(new FormData(form).get("sector") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok) {
        setErrors(
          payload.errors ?? { form: payload.message ?? "Unable to submit." },
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="fade-up border border-border px-5 py-10 text-center sm:px-8 sm:py-14"
      >
        <p className="eyebrow mb-4 sm:mb-5">Request received</p>
        <h3 className="mb-3 text-2xl text-foreground sm:mb-4 sm:text-3xl md:text-4xl">
          Thank you for your interest in Five Tables.
        </h3>
        <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground">
          Your early access request has been received. We will be in touch if a
          place becomes available.
        </p>
      </div>
    );
  }

  const disabled = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="fade-up space-y-6 text-left sm:space-y-8"
      aria-busy={disabled}
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block sm:mb-3">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={disabled}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="field text-base sm:text-sm"
            placeholder="Your full name"
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-xs text-primary">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block sm:mb-3">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={disabled}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="field text-base sm:text-sm"
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-xs text-primary">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="eyebrow mb-2 block sm:mb-3">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            disabled={disabled}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="field text-base sm:text-sm"
            placeholder="+44 …"
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-2 text-xs text-primary">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="sector" className="eyebrow mb-2 block sm:mb-3">
            Sector
          </label>
          <select
            id="sector"
            name="sector"
            required
            disabled={disabled}
            defaultValue=""
            aria-invalid={Boolean(errors.sector)}
            aria-describedby={errors.sector ? "sector-error" : undefined}
            className="field appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22%3E%3Cpath d=%22M1 1.5L6 6.5L11 1.5%22 stroke=%22%23C5A059%22 stroke-width=%221.2%22/%3E%3C/svg%3E')] bg-size-[12px_8px] bg-position-[right_0_center] bg-no-repeat pr-8 text-base sm:text-sm"
          >
            <option value="" disabled>
              Select your table
            </option>
            {SECTORS.map((sector) => (
              <option key={sector.value} value={sector.value}>
                {sector.label}
              </option>
            ))}
          </select>
          {errors.sector ? (
            <p id="sector-error" className="mt-2 text-xs text-primary">
              {errors.sector}
            </p>
          ) : null}
        </div>
      </div>

      {errors.form ? (
        <p role="alert" className="text-center text-sm text-primary">
          {errors.form}
        </p>
      ) : null}

      <div className="pt-1 text-center sm:pt-2">
        <button
          type="submit"
          disabled={disabled}
          className="btn-gold w-full sm:w-auto sm:min-w-[240px]"
        >
          {disabled ? "Submitting…" : "Request Early Access"}
        </button>
        <p className="mt-5 px-2 text-xs leading-6 text-taupe sm:mt-6">
          Early access is invitation-led. Submitting this form does not
          guarantee membership.
        </p>
      </div>
    </form>
  );
}
