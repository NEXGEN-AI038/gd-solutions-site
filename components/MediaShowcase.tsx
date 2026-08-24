import Image from "next/image";
import { showcase } from "@/lib/content";

const ACCENT_BORDER = ["border-signal/40", "border-warm/40", "border-violet/40"];
const ACCENT_TEXT = ["text-signal", "text-warm", "text-violet"];

function PlaceholderIcon({ type, className }: { type: "image" | "video"; className?: string }) {
  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
      <path d="M21 15l-5.5-5.5L5 20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export default function MediaShowcase() {
  return (
    <section className="border-t border-line py-24">
      <div className="container-page">
        <p className="eyebrow mb-4">{showcase.eyebrow}</p>
        <h2 className="section-heading max-w-xl">{showcase.heading}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{showcase.sub}</p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {showcase.items.map((item, i) => {
            const border = ACCENT_BORDER[i % ACCENT_BORDER.length];
            const text = ACCENT_TEXT[i % ACCENT_TEXT.length];
            const hasMedia = Boolean(item.src);

            return (
              <div key={item.title} className={`overflow-hidden rounded-sm border bg-panel ${border}`}>
                <div className="flex aspect-video items-center justify-center bg-ink/60">
                  {hasMedia ? (
                    item.type === "video" ? (
                      <video src={item.src} controls className="h-full w-full object-cover" />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={480}
                        height={270}
                        className="h-full w-full object-cover"
                      />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-3 px-6 text-center">
                      <PlaceholderIcon type={item.type} className={`h-8 w-8 ${text}`} />
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-medium text-paper">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
