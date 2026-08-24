import { training } from "@/lib/content";

const ACCENT_TOP_BORDER = ["border-t-signal", "border-t-warm", "border-t-violet"];
const ACCENT_DOT = ["bg-signal", "bg-warm", "bg-violet"];
const ACCENT_TEXT = ["text-signal", "text-warm", "text-violet"];

export default function Training() {
  return (
    <section id="training" className="border-t border-line py-24">
      <div className="container-page">
        <p className="eyebrow mb-4">{training.eyebrow}</p>
        <h2 className="section-heading max-w-xl">{training.heading}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{training.sub}</p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {training.courses.map((course, i) => {
            const topBorder = ACCENT_TOP_BORDER[i % ACCENT_TOP_BORDER.length];
            const dot = ACCENT_DOT[i % ACCENT_DOT.length];
            const text = ACCENT_TEXT[i % ACCENT_TEXT.length];
            return (
              <div key={course.title} className={`card flex flex-col border-t-2 ${topBorder}`}>
                <h3 className="font-display text-lg font-medium text-paper">{course.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted">
                      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} />
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${text}`}
                >
                  {course.cta} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
