import { process } from "@/lib/content";

export default function Process() {
  return (
    <section className="border-t border-line py-24">
      <div className="container-page">
        <p className="eyebrow mb-4">{process.eyebrow}</p>
        <h2 className="section-heading max-w-xl">{process.heading}</h2>

        <div className="relative mt-16">
          {/* horizontal trace line, desktop */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-line sm:block" />
          <div
            className="absolute left-0 top-5 hidden h-px bg-signal sm:block animate-pulse-trace"
            style={{ width: "100%" }}
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
            {process.steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-signal bg-ink font-mono text-xs text-signal">
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-medium text-paper">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
