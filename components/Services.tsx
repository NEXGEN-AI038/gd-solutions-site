import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">{services.eyebrow}</p>
            <h2 className="section-heading max-w-xl">{services.heading}</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{services.sub}</p>
        </div>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {services.items.map((item) => (
            <div
              key={item.code}
              className="group grid grid-cols-1 gap-4 py-8 transition-colors sm:grid-cols-[80px_1fr_auto] sm:items-center"
            >
              <span className="font-mono text-sm text-signal">{item.code}</span>
              <div>
                <h3 className="font-display text-xl font-medium text-paper transition-colors group-hover:text-signal">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-signal"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-sm border border-line bg-panel p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-medium text-paper">{services.ctaHeading}</h3>
            <p className="mt-1 max-w-md text-sm text-muted">{services.ctaBody}</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            {services.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
