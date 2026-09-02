import { techStack } from "@/lib/content";
import Reveal from "./Reveal";
import {
  BrainIcon,
  BoltIcon,
  ServerIcon,
  GlobeIcon,
  LockIcon,
  SearchIcon,
  CameraIcon,
  HeadsetIcon,
} from "./Icons";

const ICONS = [BrainIcon, BoltIcon, ServerIcon, GlobeIcon, LockIcon, SearchIcon, CameraIcon, HeadsetIcon];

export default function TechStack() {
  const items = techStack.items.map((label, i) => ({ label, Icon: ICONS[i % ICONS.length] }));
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

          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]" style={{ animationDuration: "34s" }}>
            {loop.map(({ label, Icon }, i) => (
              <div
                key={`${label}-${i}`}
                className="mx-3 flex shrink-0 items-center gap-3 rounded-sm border border-line bg-panel px-5 py-4"
              >
                <Icon className="h-5 w-5 text-signal" />
                <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-paper">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
