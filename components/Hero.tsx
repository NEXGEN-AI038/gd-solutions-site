import Image from "next/image";
import { hero, about } from "@/lib/content";
import Reveal from "./Reveal";

const ACCENTS = ["#7C6FF0", "#0D9488", "#F1650B", "#0EA5E9"];

function HeroIllustration() {
  // Original hub illustration, violet-led for contrast against the white
  // page — swap for a real product screenshot any time via hero.media in
  // content.ts.
  const nodes = [
    { x: 70, y: 70, color: ACCENTS[1] },
    { x: 330, y: 60, color: ACCENTS[2] },
    { x: 350, y: 260, color: ACCENTS[0] },
    { x: 60, y: 270, color: ACCENTS[3] },
  ];
  return (
    <svg viewBox="0 0 400 340" className="h-auto w-full" role="presentation">
      {/* faint decorative ring, drifting the opposite direction for depth */}
      <g className="motion-safe:animate-orbit-spin-reverse" style={{ transformOrigin: "200px 170px" }}>
        <circle
          cx={200}
          cy={170}
          r={155}
          fill="none"
          stroke="#7C6FF0"
          strokeOpacity={0.16}
          strokeWidth={1}
          strokeDasharray="2 7"
        />
      </g>

      {/* orbiting node cluster — nodes slowly circle the hub */}
      <g className="motion-safe:animate-orbit-spin" style={{ transformOrigin: "200px 170px" }}>
        {nodes.map((n, i) => (
          <line
            key={`line-${i}`}
            x1={200}
            y1={170}
            x2={n.x}
            y2={n.y}
            stroke={n.color}
            strokeOpacity={0.45}
            strokeWidth={2.5}
            strokeDasharray="5 8"
            strokeLinecap="round"
            className="motion-safe:animate-dash-flow"
          />
        ))}
        <g className="motion-reduce:hidden">
          {nodes.map((n, i) => (
            <circle key={`pulse-${i}`} r={4} fill={n.color}>
              <animateMotion
                dur="2.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
                path={`M200,170 L${n.x},${n.y}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="2.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <circle cx={n.x} cy={n.y} r={30} fill="#FFFFFF" stroke={n.color} strokeWidth={2.5} />
            <circle
              cx={n.x}
              cy={n.y}
              r={9}
              fill={n.color}
              className="animate-node-pulse"
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </g>
        ))}
      </g>

      {/* hub — violet, stays upright while everything orbits around it */}
      <circle cx={200} cy={170} r={62} fill="#7C6FF0" className="animate-hub-glow" style={{ transformOrigin: "200px 170px" }} />
      <circle cx={200} cy={170} r={50} fill="#FFFFFF" stroke="#7C6FF0" strokeWidth={2.5} />
      <circle cx={200} cy={170} r={18} fill="#7C6FF0" opacity={0.9} />
    </svg>
  );
}

function HeroMedia() {
  const { media } = hero;
  if (media.type === "image" && media.src) {
    return (
      <div className="overflow-hidden rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/40">
        <Image src={media.src} alt={media.alt ?? "GD Solutions"} width={520} height={420} className="rounded-md" />
      </div>
    );
  }
  if (media.type === "video" && media.src) {
    return (
      <div className="overflow-hidden rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/40">
        <video src={media.src} controls className="w-full rounded-md" />
      </div>
    );
  }
  return <HeroIllustration />;
}

function HeroHeadline() {
  const words = hero.headline.split(" ");
  const normalPart = words.slice(0, -2).join(" ");
  const gradientPart = words.slice(-2).join(" ");
  return (
    <h1 className="section-heading max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
      {normalPart} <span className="gradient-text">{gradientPart}</span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-28">
      {/* colorful ambient blobs, quiet by default */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-signal/25 blur-[110px]" />
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-violet/25 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-warm/15 blur-[110px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">{hero.eyebrow}</p>
            <HeroHeadline />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.sub}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={hero.ctaPrimary.href} className="btn-primary animate-cta-pulse">
                {hero.ctaPrimary.label}
              </a>
              <a href={hero.ctaSecondary.href} className="btn-ghost">
                {hero.ctaSecondary.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
              {about.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <span className="font-display text-2xl font-semibold text-paper">
                    {s.value}
                    <span className="text-signal">{s.suffix}</span>
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
            {hero.tags.map((tag, i) => (
              <div
                key={tag}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted"
              >
                <span style={{ color: ACCENTS[i % ACCENTS.length] }}>{String(i + 1).padStart(2, "0")}</span>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-self-center lg:block">
          {/* large violet halo, filling the column for strong contrast on white */}
          <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-violet/20 blur-[90px]" />
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-signal/10 blur-3xl" />
          <div className="w-full max-w-lg motion-safe:animate-float xl:max-w-xl">
            <HeroMedia />
          </div>
        </div>
      </div>
    </section>
  );
}
