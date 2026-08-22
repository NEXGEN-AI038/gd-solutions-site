import { reviews, site } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="font-mono text-sm tracking-widest text-signal" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-line">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-line py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">{reviews.eyebrow}</p>
            <h2 className="section-heading max-w-xl">{reviews.heading}</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">{reviews.sub}</p>
          </div>
          <a
            href={site.social.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost shrink-0"
          >
            {reviews.ctaLabel}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.items.map((r) => (
            <figure key={r.name} className="card flex flex-col">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-paper">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-display text-sm font-medium text-paper">{r.name}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
