import { techStack } from "@/lib/content";
import Reveal from "./Reveal";
import {
  SparkleIcon,
  BrainIcon,
  ShuffleIcon,
  CodeIcon,
  LayersIcon,
  CupIcon,
  SearchIcon,
  NodesIcon,
} from "./Icons";

// Positional pairing with techStack.items in lib/content.ts — keep the
// order in sync if you add/remove/reorder tools there.
const ICONS = [SparkleIcon, BrainIcon, ShuffleIcon, CodeIcon, LayersIcon, CupIcon, SearchIcon, NodesIcon];

export default function TechStack() {
  const items = techStack.items.map((item, i) => ({ ...item, Icon: ICONS[i % ICONS.length] }));
  const loop = [...items, ...items];

  return (
    <section className="border-t border-line py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{techStack.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{techStack.heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{techStack.sub}</p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="group relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />

          <div
            className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "30s" }}
          >
            {loop.map(({ name, color, Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-3 flex shrink-0 items-center gap-3 rounded-sm border border-line bg-panel px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-signal/5"
                style={{ borderColor: `${color}33` }}
              >
                <Icon className="h-5 w-5" style={{ color }} />
                <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-paper">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
