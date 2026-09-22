import { hero, about } from "@/lib/content";
import Reveal from "./Reveal";
import WaterHeroVisual from "./WaterHeroVisual";
import RotatingWords from "./RotatingWords";

const ACCENTS = ["#7C6FF0", "#0D9488", "#F1650B", "#0EA5E9"];

function HeroHeadline() {
  return (
    <h1 className="section-heading max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_2px_24px_rgba(6,7,8,0.85)]">
      {hero.headline} <RotatingWords words={hero.rotatingPhrases} />
    </h1>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-40 pb-28">
      {/* full-bleed animated water background, sitting behind everything */}
      <div className="absolute inset-0 -z-20">
        <WaterHeroVisual />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />
      </div>

      {/* colorful ambient blobs, quiet by default */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-signal/20 blur-[110px]" />
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-violet/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-warm/10 blur-[110px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative z-10">
        <Reveal>
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <HeroHeadline />
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg [text-shadow:0_2px_16px_rgba(6,7,8,0.9)]">{hero.sub}</p>
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
    </section>
  );
}
