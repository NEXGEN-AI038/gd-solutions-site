import Image from "next/image";
import { reviews, site } from "@/lib/content";
import { getGoogleReviews } from "@/lib/googleReviews";
import Reveal from "./Reveal";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="font-mono text-sm tracking-widest text-signal" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      <span className="text-line">{"★".repeat(5 - full)}</span>
    </div>
  );
}

export default async function Reviews() {
  const google = await getGoogleReviews();

  return (
    <section id="reviews" className="border-t border-line py-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4">{reviews.eyebrow}</p>
              <h2 className="section-heading max-w-xl">{reviews.heading}</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">{reviews.sub}</p>
              {google && google.userRatingsTotal > 0 && (
                <div className="mt-4 flex items-center gap-2">
                  <Stars rating={google.rating} />
                  <span className="font-mono text-sm text-paper">{google.rating.toFixed(1)}</span>
                  <span className="font-mono text-xs text-muted">
                    · {google.userRatingsTotal} Google review{google.userRatingsTotal === 1 ? "" : "s"}
                  </span>
                </div>
              )}
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
        </Reveal>

        {google && google.reviews.length > 0 ? (
          <>
            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {google.reviews.slice(0, 6).map((r, i) => (
                <Reveal key={`${r.author_name}-${r.time}`} delay={i * 100}>
                  <figure className="card flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      {r.profile_photo_url ? (
                        <Image
                          src={r.profile_photo_url}
                          alt={r.author_name}
                          width={36}
                          height={36}
                          className="rounded-full"
                          unoptimized
                        />
                      ) : (
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/10 font-mono text-sm text-signal">
                          {r.author_name.charAt(0).toUpperCase()}
                        </span>
                      )}
                      <div>
                        <p className="font-display text-sm font-medium text-paper">{r.author_name}</p>
                        <p className="font-mono text-[11px] text-muted">{r.relative_time_description}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Stars rating={r.rating} />
                    </div>
                    <blockquote className="mt-3 line-clamp-6 flex-1 text-sm leading-relaxed text-paper">
                      "{r.text}"
                    </blockquote>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
              Reviews shown via Google ·{" "}
              <a href={google.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
                View all on Google
              </a>
            </p>
          </>
        ) : (
          <Reveal delay={100}>
            <div className="mt-14 rounded-sm border border-dashed border-line bg-panel p-10 text-center">
              <p className="text-sm text-muted">
                Our Google reviews will appear here automatically once they're connected.
              </p>
              <a href={site.social.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 inline-flex">
                {reviews.ctaLabel}
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
