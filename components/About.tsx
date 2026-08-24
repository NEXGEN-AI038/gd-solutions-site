import { about } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";
import { SparkleIcon, TargetIcon, ShieldIcon, BookIcon } from "./Icons";

const ICONS = [SparkleIcon, TargetIcon, ShieldIcon, BookIcon];
const ACCENT_TEXT = ["text-signal", "text-warm", "text-violet", "text-sky"];

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
            {about.values.map((v, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div key={v.title} className="bg-panel p-6 transition-colors hover:bg-panel2">
                  <Icon className={`mb-3 h-6 w-6 ${ACCENT_TEXT[i % ACCENT_TEXT.length]}`} />
                  <h3 className="font-display text-lg font-medium text-paper">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                </div>
              );
            })}
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
