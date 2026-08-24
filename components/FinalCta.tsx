import { finalCta } from "@/lib/content";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="border-t border-line py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-line bg-panel px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <h2 className="section-heading relative mx-auto max-w-2xl text-3xl sm:text-4xl">
              {finalCta.heading}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {finalCta.body}
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={finalCta.ctaPrimary.href} className="btn-primary">
                {finalCta.ctaPrimary.label}
              </a>
              <a href={finalCta.ctaSecondary.href} className="btn-ghost">
                {finalCta.ctaSecondary.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
