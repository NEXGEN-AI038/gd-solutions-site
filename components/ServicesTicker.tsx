import { ticker } from "@/lib/content";

export default function ServicesTicker() {
  // duplicated so the loop is seamless
  const items = [...ticker, ...ticker];

  return (
    <div
      className="group relative overflow-hidden border-y border-line bg-panel py-4"
      aria-label="Our services"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-panel to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-panel to-transparent" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((label, i) => (
          <div key={`${label}-${i}`} className="flex items-center gap-3 px-6">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
