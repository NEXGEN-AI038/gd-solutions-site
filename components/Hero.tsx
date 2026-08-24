import Image from "next/image";
import { hero } from "@/lib/content";
import Reveal from "./Reveal";

const ACCENTS = ["#0D9488", "#F1650B", "#7C6FF0", "#0EA5E9"];

function HeroIllustration() {
  // Small original hub illustration in the 4-color accent rotation —
  // swap for a real product screenshot any time via hero.media in content.ts.
  const nodes = [
    { x: 70, y: 70, color: ACCENTS[0] },
    { x: 330, y: 60, color: ACCENTS[1] },
    { x: 350, y: 260, color: ACCENTS[2] },
    { x: 60, y: 270, color: ACCENTS[3] },
  ];
  return (
    <svg viewBox="0 0 400 340" className="h-auto w-full max-w-md" role="presentation">
      {nodes.map((n, i) => (
        <line key={i} x1={200} y1={170} x2={n.x} y2={n.y} stroke={n.color} strokeOpacity={0.35} strokeWidth={2} />
      ))}
      <circle cx={200} cy={170} r={44} fill="#F7F8FA" stroke="#0D9488" strokeWidth={2} />
      <circle cx={200} cy={170} r={16} fill="#0D9488" opacity={0.8} />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={26} fill="#F7F8FA" stroke={n.color} strokeWidth={2} />
          <circle cx={n.x} cy={n.y} r={8} fill={n.color} className="animate-node-pulse" style={{ transformOrigin: `${n.x}px ${n.y}px` }} />
        </g>
      ))}
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
              <a href={hero.ctaPrimary.href} className="btn-primary">
                {hero.ctaPrimary.label}
              </a>
              <a href={hero.ctaSecondary.href} className="btn-ghost">
                {hero.ctaSecondary.label}
              </a>
            </div>
          </Reveal>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
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

        <div className="hidden justify-self-center lg:block">
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}
