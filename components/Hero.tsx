import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-28">
      {/* ambient grid + fade, quiet by default */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#4CE0B3 1px, transparent 1px), linear-gradient(90deg, #4CE0B3 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>

        <h1 className="section-heading max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={hero.ctaPrimary.href} className="btn-primary">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn-ghost">
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
          {hero.tags.map((tag, i) => (
            <div key={tag} className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
              <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
