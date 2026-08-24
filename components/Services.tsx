import { services } from "@/lib/content";

// Full class names listed literally so Tailwind's scanner picks them up
// (it can't detect classes built by concatenating strings at runtime).
const ACCENT_TEXT = ["text-signal", "text-warm", "text-violet", "text-sky"];
const ACCENT_HOVER_TEXT = [
  "group-hover:text-signal",
  "group-hover:text-warm",
  "group-hover:text-violet",
  "group-hover:text-sky",
];
const ACCENT_HOVER_BORDER = [
  "hover:border-signal/40",
  "hover:border-warm/40",
  "hover:border-violet/40",
  "hover:border-sky/40",
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">{services.eyebrow}</p>
            <h2 className="section-heading max-w-xl">{services.heading}</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{services.sub}</p>
        </div>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {services.items.map((item, i) => {
            const textAccent = ACCENT_TEXT[i % ACCENT_TEXT.length];
            const hoverTextAccent = ACCENT_HOVER_TEXT[i % ACCENT_HOVER_TEXT.length];
            const hoverBorderAccent = ACCENT_HOVER_BORDER[i % ACCENT_HOVER_BORDER.length];
            return (
              <div
                key={item.code}
                className={`group grid grid-cols-1 gap-4 border-l-2 border-transparent py-8 pl-4 transition-colors sm:grid-cols-[80px_1fr_auto] sm:items-center ${hoverBorderAccent}`}
              >
                <span className={`font-mono text-sm ${textAccent}`}>{item.code}</span>
                <div>
                  <h3 className={`font-display text-xl font-medium text-paper transition-colors ${hoverTextAccent}`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
                <a
                  href="#contact"
                  className={`font-mono text-xs uppercase tracking-widest text-muted transition-colors ${hoverTextAccent}`}
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-sm border border-line bg-panel p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-medium text-paper">{services.ctaHeading}</h3>
            <p className="mt-1 max-w-md text-sm text-muted">{services.ctaBody}</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            {services.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
