import Image from "next/image";
import { hero, about } from "@/lib/content";
import Reveal from "./Reveal";
import HeroCarousel from "./HeroCarousel";
import { BoltIcon, ServerIcon, CameraIcon, GlobeIcon, HeadsetIcon, WrenchIcon } from "./Icons";

const ACCENTS = ["#7C6FF0", "#0D9488", "#F1650B", "#0EA5E9"];

const CX = 200;
const CY = 200;
const R = 140;

function toXY(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

const SERVICE_NODES = [
  { Icon: BoltIcon, color: "#0D9488" }, // AI Automation
  { Icon: ServerIcon, color: "#F1650B" }, // IT Infrastructure
  { Icon: CameraIcon, color: "#0EA5E9" }, // Surveillance
  { Icon: GlobeIcon, color: "#7C6FF0" }, // Website Design
  { Icon: HeadsetIcon, color: "#0D9488" }, // BPO
  { Icon: WrenchIcon, color: "#F1650B" }, // IT Services
].map((n, i) => ({ ...n, ...toXY(-90 + (360 / 6) * i) }));

function HeroIllustration() {
  // Orbiting service-icon cluster around a pulsing hub — a square viewBox
  // matched to an aspect-square container so it can never get cropped.
  // Swap for a real product screenshot any time via hero.media in content.ts.
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="presentation">
      {/* faint decorative ring, drifting the opposite direction for depth */}
      <g className="motion-safe:animate-orbit-spin-reverse" style={{ transformOrigin: "200px 200px" }}>
        <circle
          cx={CX}
          cy={CY}
          r={175}
          fill="none"
          stroke="#7C6FF0"
          strokeOpacity={0.16}
          strokeWidth={1}
          strokeDasharray="2 7"
        />
      </g>

      {/* orbiting service icons — slowly circle the hub */}
      <g className="motion-safe:animate-orbit-spin" style={{ transformOrigin: "200px 200px" }}>
        {SERVICE_NODES.map((n, i) => (
          <line
            key={`line-${i}`}
            x1={CX}
            y1={CY}
            x2={n.x}
            y2={n.y}
            stroke={n.color}
            strokeOpacity={0.4}
            strokeWidth={2}
            strokeDasharray="5 8"
            strokeLinecap="round"
            className="motion-safe:animate-dash-flow"
          />
        ))}
        <g className="motion-reduce:hidden">
          {SERVICE_NODES.map((n, i) => (
            <circle key={`pulse-${i}`} r={3.5} fill={n.color}>
              <animateMotion
                dur="2.4s"
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
                path={`M${CX},${CY} L${n.x},${n.y}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="2.4s"
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
        {SERVICE_NODES.map((n, i) => (
          <g key={`node-${i}`}>
            <rect
              x={n.x - 24}
              y={n.y - 24}
              width={48}
              height={48}
              rx={14}
              fill="#FFFFFF"
              stroke={n.color}
              strokeWidth={2}
            />
            <foreignObject x={n.x - 13} y={n.y - 13} width={26} height={26}>
              <div className="flex h-full w-full items-center justify-center">
                <n.Icon style={{ color: n.color }} className="h-4 w-4" />
              </div>
            </foreignObject>
          </g>
        ))}
      </g>

      {/* hub — violet, stays upright while everything orbits around it */}
      <circle cx={CX} cy={CY} r={64} fill="#7C6FF0" className="animate-hub-glow" style={{ transformOrigin: "200px 200px" }} />
      <circle cx={CX} cy={CY} r={52} fill="#FFFFFF" stroke="#7C6FF0" strokeWidth={2.5} />
      <foreignObject x={CX - 28} y={CY - 28} width={56} height={56}>
        <div className="flex h-full w-full items-center justify-center">
          <Image src="/logo.png" alt="GD Solutions" width={40} height={40} />
        </div>
      </foreignObject>
    </svg>
  );
}

function HeroMedia() {
  const { media } = hero;
  if (media.type === "carousel" && media.images?.length) {
    return <HeroCarousel images={media.images} />;
  }
  if (media.type === "image" && media.src) {
    return (
      <div className="h-full w-full overflow-hidden rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/40">
        <Image
          src={media.src}
          alt={media.alt ?? "GD Solutions"}
          width={520}
          height={520}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    );
  }
  if (media.type === "video" && media.src) {
    return (
      <div className="h-full w-full overflow-hidden rounded-lg border border-line bg-panel p-2 shadow-2xl shadow-black/40">
        <video src={media.src} controls className="h-full w-full rounded-md object-cover" />
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

        <div className="relative hidden min-w-0 lg:block">
          {/* large violet halo, filling the column for strong contrast on white */}
          <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-violet/20 blur-[90px]" />
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-signal/10 blur-3xl" />
          <div className="aspect-square w-full max-w-md motion-safe:animate-float xl:max-w-lg mx-auto">
            <HeroMedia />
          </div>
        </div>
      </div>
    </section>
  );
}
