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
  const mid = Math.ceil(items.length / 2);
  const rowA = [...items.slice(0, mid), ...items.slice(0, mid)];
  const rowB = [...items.slice(mid), ...items.slice(mid)];

  return (
    <section className="relative overflow-hidden border-t border-line py-24">
      {/* ambient color, matching the rest of the site */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 translate-y-1/2 rounded-full bg-violet/10 blur-[120px]" />

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow mb-4">{techStack.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{techStack.heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{techStack.sub}</p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="group relative mt-16 space-y-6">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28"
            style={{ background: "linear-gradient(to right, rgba(6,7,8,1) 0%, transparent 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28"
            style={{ background: "linear-gradient(to left, rgba(6,7,8,1) 0%, transparent 100%)" }}
          />

          {/* row 1 — scrolls left */}
          <div className="overflow-hidden">
            <div
              className="flex w-max items-center gap-5 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "32s" }}
            >
              {rowA.map(({ name, color, Icon }, i) => (
                <div
                  key={`a-${name}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-lg border bg-panel px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-signal/10"
                  style={{ borderColor: `${color}33` }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ background: `${color}1A` }}
                  >
                    <Icon className="h-5 w-5" style={{ color }} />
                  </span>
                  <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-paper">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* row 2 — scrolls right, opposite direction for a layered feel */}
          <div className="overflow-hidden">
            <div
              className="flex w-max items-center gap-5 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "38s", animationDirection: "reverse" }}
            >
              {rowB.map(({ name, color, Icon }, i) => (
                <div
                  key={`b-${name}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-lg border bg-panel px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-signal/10"
                  style={{ borderColor: `${color}33` }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ background: `${color}1A` }}
                  >
                    <Icon className="h-5 w-5" style={{ color }} />
                  </span>
                  <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-paper">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
