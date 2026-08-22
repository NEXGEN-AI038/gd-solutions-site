"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
      setService("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">{contact.eyebrow}</p>
            <h2 className="section-heading">{contact.heading}</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{contact.sub}</p>

            <div className="mt-10 space-y-4 font-mono text-sm">
              <a href={`mailto:${site.email}`} className="block text-paper hover:text-signal">
                {site.email}
              </a>

              <div className="space-y-1">
                {site.whatsapp.map((w) => (
                  <a
                    key={w.number}
                    href={`https://wa.me/${w.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted hover:text-signal"
                  >
                    WhatsApp — {w.label}
                  </a>
                ))}
              </div>

              <p className="whitespace-pre-line text-muted">
                {site.address.line1}
                {"\n"}
                {site.address.line2}
              </p>

              <a href={site.social.linkedin} className="block text-muted hover:text-signal">
                LinkedIn — {site.name}
              </a>
              <a href={site.social.instagram} className="block text-muted hover:text-signal">
                Instagram — @gdsolutions
              </a>
            </div>

            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Quick-select what you need — it fills the form
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {contact.serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setService(opt)}
                    className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                      service === opt
                        ? "border-signal bg-signal/10 text-signal"
                        : "border-line text-muted hover:border-signal hover:text-signal"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
            </div>
            <Field label="Company / Organization" name="company" />

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                Service Interested In
              </label>
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-sm border border-line bg-panel px-4 py-3 text-sm text-paper focus:border-signal"
              >
                <option value="">Select a service</option>
                {contact.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-sm border border-line bg-panel px-4 py-3 text-sm text-paper focus:border-signal"
              />
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="font-mono text-xs text-signal">
                Message sent. We'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-warm">
                Something went wrong — email us directly at {site.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-line bg-panel px-4 py-3 text-sm text-paper focus:border-signal"
      />
    </div>
  );
}
