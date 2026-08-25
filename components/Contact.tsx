"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/lib/content";
import Reveal from "./Reveal";
import { MailIcon, PinIcon, WhatsappGlyphIcon, LinkedinIcon, InstagramIcon } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

const ACCENT_ICON_BG = [
  "bg-signal/10 text-signal",
  "bg-warm/10 text-warm",
  "bg-violet/10 text-violet",
  "bg-sky/10 text-sky",
];

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
    <section id="contact" className="border-t border-line bg-panel2 py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{contact.eyebrow}</p>
            <h2 className="section-heading">{contact.heading}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{contact.sub}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${site.email}`}
              className="group flex flex-col items-start gap-3 rounded-sm border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/5"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${ACCENT_ICON_BG[0]}`}>
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Email</p>
                <p className="mt-0.5 break-all text-sm text-paper">{site.email}</p>
              </div>
            </a>

            <div className="flex flex-col items-start gap-3 rounded-sm border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/5">
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${ACCENT_ICON_BG[1]}`}>
                <WhatsappGlyphIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">WhatsApp</p>
                {site.whatsapp.map((w) => (
                  <a
                    key={w.number}
                    href={`https://wa.me/${w.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm text-paper hover:text-signal"
                  >
                    {w.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 rounded-sm border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/5">
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${ACCENT_ICON_BG[2]}`}>
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Address</p>
                <p className="mt-0.5 whitespace-pre-line text-sm text-paper">
                  {site.address.line1}
                  {"\n"}
                  {site.address.line2}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 rounded-sm border border-line bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/5">
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${ACCENT_ICON_BG[3]}`}>
                <LinkedinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Follow Us</p>
                <a href={site.social.linkedin} className="mt-0.5 block text-sm text-paper hover:text-signal">
                  LinkedIn
                </a>
                <a
                  href={site.social.instagram}
                  className="mt-0.5 flex items-center gap-1.5 text-sm text-paper hover:text-signal"
                >
                  <InstagramIcon className="h-3.5 w-3.5" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-3xl space-y-6 rounded-sm border border-line bg-panel p-6 sm:p-10">
            <div>
              <label className="mb-3 block font-mono text-xs uppercase tracking-wider text-muted">
                What do you need?
              </label>
              <div className="flex flex-wrap gap-2">
                {contact.serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setService(opt)}
                    className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-all ${
                      service === opt
                        ? "border-signal bg-signal text-white shadow-md shadow-signal/20"
                        : "border-line text-muted hover:border-signal hover:text-signal"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <input type="hidden" name="service" value={service} />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
            </div>
            <Field label="Company / Organization" name="company" />

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-sm border border-line bg-panel2 px-4 py-3 text-sm text-paper focus:border-signal"
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
        </Reveal>
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
        className="w-full rounded-sm border border-line bg-panel2 px-4 py-3 text-sm text-paper focus:border-signal"
      />
    </div>
  );
}
