import { whyUs } from "@/lib/content";
import Reveal from "./Reveal";
import { BoltIcon, BrainIcon, WrenchIcon, LayersIcon, UsersIcon, PinIcon } from "./Icons";

const ICONS = [BoltIcon, BrainIcon, WrenchIcon, LayersIcon, UsersIcon, PinIcon];
const ACCENT_BG = [
  "bg-signal/10 text-signal",
  "bg-warm/10 text-warm",
  "bg-violet/10 text-violet",
  "bg-sky/10 text-sky",
];

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-line bg-panel2 py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{whyUs.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{whyUs.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.points.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            const iconBg = ACCENT_BG[i % ACCENT_BG.length];
            return (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <div className="flex h-full gap-4 rounded-sm border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/5">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium text-paper">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
