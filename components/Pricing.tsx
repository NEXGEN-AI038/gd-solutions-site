"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "@designcodeio/threeui/style.css";
import { pricing } from "@/lib/content";
import Reveal from "./Reveal";

// WebGL animation: load on the client only so it never runs during SSR.
// Import from the per-component entry, not the package root — the root barrel
// pulls in Gallery/SectionElements, whose inline data-URL assets break Next's webpack build.
const ConstellationField = dynamic(
  () =>
    import("@designcodeio/threeui/components/ConstellationField").then(
      (m) => m.ConstellationField
    ),
  { ssr: false }
);

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-signal" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
        <path d="M6 10.5l2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-muted/50" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const formatINR = (n: number) => n.toLocaleString("en-IN");

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const discount = pricing.yearlyDiscountPercent;

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-line py-24">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <ConstellationField
          variant="gateway-flow"
          mode="dark"
          speed={1.0}
          size={1.0}
          length={1.0}
          density={1.0}
          opacity={1.0}
          hue={0}
          saturation={1.0}
          brightness={1.0}
        />
      </div>

      <div className="container-page relative z-10">
        <Reveal>
          <p className="eyebrow mb-4">{pricing.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{pricing.heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{pricing.sub}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`font-mono text-xs uppercase tracking-wider transition-colors ${!yearly ? "text-paper" : "text-muted hover:text-paper"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle yearly billing"
              className={`relative h-7 w-14 shrink-0 rounded-full border transition-colors duration-300 ${
                yearly ? "border-signal bg-signal/30" : "border-line bg-panel"
              }`}
            >
              <span
                className={`absolute left-[3px] top-[3px] h-5 w-5 rounded-full bg-signal shadow transition-transform duration-300 ${
                  yearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`font-mono text-xs uppercase tracking-wider transition-colors ${yearly ? "text-paper" : "text-muted hover:text-paper"}`}
              >
                Yearly
              </button>
              <span className="rounded-full border border-signal/30 bg-signal/10 px-2 py-0.5 font-mono text-[10px] text-signal">
                -{discount}%
              </span>
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => {
            const fullYearPrice = plan.monthlyPrice * 12;
            const yearlyPrice = Math.round(fullYearPrice * (1 - discount / 100));
            const displayPrice = yearly ? yearlyPrice : plan.monthlyPrice;
            const savings = fullYearPrice - yearlyPrice;

            return (
              <Reveal key={plan.name} delay={i * 100}>
                <article
                  className={`relative flex h-full flex-col rounded-sm border p-8 ${
                    plan.recommended ? "border-signal/50 bg-panel shadow-xl shadow-signal/10" : "border-line bg-panel"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-signal px-4 py-1 font-mono text-[10px] uppercase tracking-wider text-ink">
                      Recommended
                    </span>
                  )}

                  <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {plan.name}
                  </span>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-semibold text-paper">₹{formatINR(displayPrice)}</span>
                    <span className="font-mono text-xs text-muted">{yearly ? "/ year" : "/ month"}</span>
                    {yearly && (
                      <span className="ml-2 font-mono text-xs text-muted line-through">₹{formatINR(fullYearPrice)}</span>
                    )}
                  </div>
                  {yearly && (
                    <p className="mt-1 font-mono text-[11px] text-muted">
                      ₹{formatINR(plan.monthlyPrice)} × 12 months · {discount}% off · you save ₹{formatINR(savings)}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-muted">{plan.description}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 text-sm text-paper">
                        <CheckIcon included={f.included} />
                        <span className={f.included ? "" : "text-muted/60 line-through"}>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={plan.recommended ? "btn-primary mt-8 w-full justify-center" : "btn-ghost mt-8 w-full justify-center"}
                  >
                    {pricing.ctaLabel}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-5">
            {pricing.highlights.map((h) => (
              <div key={h.title} className="text-center">
                <p className="font-display text-sm font-medium text-paper">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{h.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
