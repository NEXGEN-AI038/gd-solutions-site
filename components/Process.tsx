import { Fragment } from "react";
import { process } from "@/lib/content";
import Reveal from "./Reveal";

function FlowArrows() {
  const icons = Array.from({ length: 14 });
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 top-3 hidden h-4 overflow-hidden sm:block"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center" style={{ animationDuration: "5s" }}>
        {[...icons, ...icons].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-3 shrink-0 text-signal/70"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-1 sm:hidden" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="animate-bounce text-signal/70">
        <path
          d="M12 5v13m0 0l-5-5m5 5l5-5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Process() {
  return (
    <section className="border-t border-line py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{process.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{process.heading}</h2>
        </Reveal>

        <div className="relative mt-16">
          {/* static hairline track, desktop */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-line sm:block" />
          {/* continuously traveling arrows along the track */}
          <FlowArrows />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
            {process.steps.map((step, i) => (
              <Fragment key={step.step}>
                <div className="relative">
                  <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-signal bg-ink font-mono text-xs text-signal">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-medium text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
                {i < process.steps.length - 1 && <ArrowDown />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
