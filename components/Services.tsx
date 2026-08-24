import { services } from "@/lib/content";
import Reveal from "./Reveal";
import { BoltIcon, ServerIcon, BuildingIcon, WrenchIcon, HeadsetIcon } from "./Icons";

const ICONS = [BoltIcon, ServerIcon, BuildingIcon, WrenchIcon, HeadsetIcon];

// Full class names listed literally so Tailwind's scanner picks them up
// (it can't detect classes built by concatenating strings at runtime).
const ACCENT_BG = ["bg-signal/10 text-signal", "bg-warm/10 text-warm", "bg-violet/10 text-violet", "bg-sky/10 text-sky"];
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
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4">{services.eyebrow}</p>
              <h2 className="section-heading max-w-xl">{services.heading}</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">{services.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const iconBg = ACCENT_BG[i % ACCENT_BG.length];
            const hoverTextAccent = ACCENT_HOVER_TEXT[i % ACCENT_HOVER_TEXT.length];
            const hoverBorderAccent = ACCENT_HOVER_BORDER[i % ACCENT_HOVER_BORDER.length];
            return (
              <Reveal key={item.code} delay={(i % 3) * 100}>
                <div
                  className={`group flex h-full flex-col rounded-sm border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-signal/5 ${hoverBorderAccent}`}
                >
                  <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className={`font-display text-lg font-medium text-paper transition-colors ${hoverTextAccent}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                  <a
                    href="#contact"
                    className={`mt-5 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors ${hoverTextAccent}`}
                  >
                    Learn More →
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-sm border border-line bg-panel p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-medium text-paper">{services.ctaHeading}</h3>
              <p className="mt-1 max-w-md text-sm text-muted">{services.ctaBody}</p>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              {services.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
