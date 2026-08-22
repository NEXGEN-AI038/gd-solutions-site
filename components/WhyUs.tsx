import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-line py-24">
      <div className="container-page">
        <p className="eyebrow mb-4">{whyUs.eyebrow}</p>
        <h2 className="section-heading max-w-xl">{whyUs.heading}</h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.points.map((p, i) => (
            <div key={p.title} className="flex gap-4">
              <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-base font-medium text-paper">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
