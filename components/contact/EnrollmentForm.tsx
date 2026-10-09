"use client";

import { useId, useState } from "react";
import { site } from "@/data/site";
import { formatInr, whatsappHref } from "@/lib/utils";
import { leadSchema } from "@/lib/validation";
import { contactMethods, experienceLevels, programOptions, type ContactMethod } from "@/types";
import type { EnrollIntent } from "@/components/contact/EnrollmentProvider";
import { pricing } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function EnrollmentForm({
  intent = "enroll",
  defaultMethod,
}: {
  intent?: EnrollIntent;
  defaultMethod?: ContactMethod;
}) {
  const baseId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [leadId, setLeadId] = useState("");
  const [paymentNote, setPaymentNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      phone: String(form.get("phone") ?? ""),
      whatsapp: String(form.get("whatsapp") ?? ""),
      email: String(form.get("email") ?? ""),
      tradingExperience: String(form.get("tradingExperience") ?? ""),
      experienceLevel: String(form.get("experienceLevel") ?? ""),
      interestedProgram: String(form.get("interestedProgram") ?? ""),
      preferredContact: String(form.get("preferredContact") ?? ""),
      message: String(form.get("message") ?? ""),
      intent,
      company: String(form.get("company") ?? ""),
    };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      setMessage("Check the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setErrors({});
    setMessage("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        leadId?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!response.ok || !data.ok) {
        setErrors(data.fieldErrors ?? {});
        setStatus("error");
        setMessage(data.message || "We could not send your enquiry. Please try again.");
        return;
      }
      setLeadId(data.leadId ?? "");
      setStatus("success");
      setMessage(data.message || "Thank you. A MARKEX representative will contact you shortly.");
    } catch {
      setStatus("error");
      setMessage("We could not send your enquiry. Please try again.");
    }
  }

  async function requestPayment(purpose: "initial_enrollment" | "advanced_membership") {
    if (!leadId) return;
    setPaymentNote("");
    const response = await fetch("/api/payments/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ leadId, purpose }),
    });
    const data = (await response.json()) as { message?: string; ok?: boolean };
    setPaymentNote(data.message || "The payment step could not be created.");
  }

  const wa = whatsappHref("Hello MARKEX, I just submitted an enrollment enquiry.");

  if (status === "success") {
    return (
      <div role="status" className="border border-accent/40 bg-surface p-6">
        <p className="text-lg text-paper">{message}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Initial enrollment is {formatInr(pricing.initial)}. The advanced membership is{" "}
          {formatInr(pricing.membership)}. Payment is confirmed only after a verified gateway webhook.
        </p>
        {leadId ? (
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="min-h-11 bg-accent px-4 text-xs font-semibold tracking-[0.16em] text-ink uppercase" onClick={() => requestPayment("initial_enrollment")}>
              Register {formatInr(pricing.initial)} step
            </button>
            <button type="button" className="min-h-11 border border-line px-4 text-xs tracking-[0.16em] uppercase" onClick={() => requestPayment("advanced_membership")}>
              Register {formatInr(pricing.membership)} step
            </button>
          </div>
        ) : null}
        {paymentNote ? <p className="mt-4 text-sm text-muted">{paymentNote}</p> : null}
        {wa ? (
          <a href={wa} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm text-accent">
            Continue on WhatsApp
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Field id={`${baseId}-name`} name="fullName" label="Full name" autoComplete="name" error={errors.fullName} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${baseId}-phone`} name="phone" label="Phone" autoComplete="tel" error={errors.phone} />
        <Field id={`${baseId}-wa`} name="whatsapp" label="WhatsApp" autoComplete="tel" error={errors.whatsapp} />
      </div>
      <Field id={`${baseId}-email`} name="email" label="Email" type="email" autoComplete="email" error={errors.email} />
      <label className="grid gap-2 text-sm text-muted" htmlFor={`${baseId}-experience`}>
        Trading experience
        <textarea id={`${baseId}-experience`} name="tradingExperience" rows={3} className="field" placeholder="What have you studied or traded so far?" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select id={`${baseId}-level`} name="experienceLevel" label="Experience level" error={errors.experienceLevel} options={experienceLevels} />
        <Select id={`${baseId}-program`} name="interestedProgram" label="Interested program" error={errors.interestedProgram} options={programOptions} />
      </div>
      <Select
        id={`${baseId}-method`}
        name="preferredContact"
        label="Preferred contact method"
        error={errors.preferredContact}
        options={contactMethods}
        defaultValue={defaultMethod ?? (intent === "whatsapp" ? "WhatsApp" : undefined)}
      />
      <label className="grid gap-2 text-sm text-muted" htmlFor={`${baseId}-message`}>
        Message
        <textarea id={`${baseId}-message`} name="message" rows={4} className="field" />
      </label>
      <label className="absolute -left-[9999px]" aria-hidden>
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      {message ? (
        <p role="alert" className="text-sm text-[#f0b4b4]">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-12 bg-accent px-5 text-xs font-semibold tracking-[0.18em] text-ink uppercase disabled:opacity-60"
      >
        {status === "submitting" ? "Sending your enquiry…" : "Submit enquiry"}
      </button>
      <p className="text-xs leading-relaxed text-muted">
        {site.fullName} will use these details to contact you about the program. Trading involves substantial risk. MARKEX does not guarantee profits.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm text-muted" htmlFor={id}>
      {label}
      <input id={id} name={name} type={type} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className="field" required={name !== "whatsapp"} />
      {error ? (
        <span id={`${id}-error`} className="text-[#f0b4b4]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Select({
  id,
  name,
  label,
  options,
  error,
  defaultValue,
}: {
  id: string;
  name: string;
  label: string;
  options: readonly string[];
  error?: string;
  defaultValue?: string;
}) {
  return (
    <label className="grid gap-2 text-sm text-muted" htmlFor={id}>
      {label}
      <select id={id} name={name} defaultValue={defaultValue ?? ""} aria-invalid={Boolean(error)} className="field">
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="text-[#f0b4b4]">{error}</span> : null}
    </label>
  );
}
