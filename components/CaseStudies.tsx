import { caseStudies } from "@/lib/content";
import ExpandableImage from "./ExpandableImage";
import Reveal from "./Reveal";

type Media =
  | { type: "video"; src: string; poster: string; label: string }
  | { type: "audio"; src: string; label: string; poster?: undefined };

const ACCENT_BADGE = [
  "bg-signal/15 text-signal border-signal/30",
  "bg-warm/15 text-warm border-warm/30",
  "bg-violet/15 text-violet border-violet/30",
];

function MediaBlock({ media }: { media: Media }) {
  if (media.type === "video") {
    return (
      <video controls poster={media.poster} preload="none" className="w-full rounded-md bg-ink">
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }
  return (
    <audio controls preload="none" className="w-full">
      <source src={media.src} type="audio/mp4" />
    </audio>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-line py-24">
      <div className="container-page">
        <p className="eyebrow mb-4">{caseStudies.eyebrow}</p>
        <h2 className="section-heading max-w-xl">{caseStudies.heading}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{caseStudies.sub}</p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.items.map((item, i) => {
            const badge = ACCENT_BADGE[i % ACCENT_BADGE.length];
            return (
              <Reveal key={item.title} delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl hover:shadow-signal/5">
                  <div className="bg-white p-2">
                    <ExpandableImage
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={502}
                      className="h-auto w-full rounded-sm"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`mb-3 inline-block w-fit rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${badge}`}
                    >
                      {item.tag}
                    </span>
                    <h3 className="font-display text-lg font-medium leading-snug text-paper">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                    <div className="mt-5 border-t border-line pt-5">
                      <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                        {item.media.label}
                      </p>
                      <MediaBlock media={item.media as Media} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
