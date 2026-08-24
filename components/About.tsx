import { about } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{about.eyebrow}</p>
          <h2 className="section-heading max-w-2xl">{about.heading}</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{about.body}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => (
              <div key={v.title} className="bg-panel p-6 transition-colors hover:bg-panel2">
                <h3 className="font-display text-lg font-medium text-paper">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
