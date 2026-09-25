"use client";

import { Button } from "@/components/ui/Button";
import { useState, type FormEvent } from "react";

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
};

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requirement: "",
};

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [ready, setReady] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setReady(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Enter your name.";
    if (!fields.company.trim()) next.company = "Enter your company name.";
    if (!fields.phone.trim()) next.phone = "Enter a phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Enter a valid email address.";
    if (!fields.requirement.trim()) next.requirement = "Describe the packaging requirement.";
    setErrors(next);
    setReady(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field id="name" label="Name" value={fields.name} error={errors.name} onChange={(value) => update("name", value)} />
      <Field id="company" label="Company Name" value={fields.company} error={errors.company} onChange={(value) => update("company", value)} />
      <Field id="phone" label="Phone Number" value={fields.phone} error={errors.phone} onChange={(value) => update("phone", value)} type="tel" />
      <Field id="email" label="Email" value={fields.email} error={errors.email} onChange={(value) => update("email", value)} type="email" />
      <div>
        <label htmlFor="requirement" className="font-sans text-label uppercase">
          Requirement
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={5}
          value={fields.requirement}
          onChange={(event) => update("requirement", event.target.value)}
          aria-invalid={Boolean(errors.requirement)}
          aria-describedby={errors.requirement ? "requirement-error" : undefined}
          className="mt-2 w-full border border-border bg-white px-3 py-3 text-base outline-none focus-visible:outline-gold"
        />
        {errors.requirement ? (
          <p id="requirement-error" className="mt-2 text-sm text-charcoal">
            {errors.requirement}
          </p>
        ) : null}
      </div>
      <Button type="submit">Send Enquiry</Button>
      {ready ? (
        <p role="status" className="max-w-xl text-sm leading-relaxed text-muted">
          The enquiry is ready, and a phone number or email address has not been published yet.
          Keep these details and send them when FIDVI shares a contact channel. Nothing was
          transmitted from this form.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-sans text-label uppercase">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 min-h-12 w-full border border-border bg-white px-3 text-base outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-charcoal">
          {error}
        </p>
      ) : null}
    </div>
  );
}
