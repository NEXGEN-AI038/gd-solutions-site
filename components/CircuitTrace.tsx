"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "training", label: "Training" },
  { id: "why", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

/**
 * A fixed vertical "circuit trace" that runs down the right edge of the
 * viewport on large screens. Each node corresponds to a section; the trace
 * fills and the active node glows as the visitor scrolls past it — a nod
 * to the signal-routing / systems-tracing world GD Solutions works in.
 */
export default function CircuitTrace() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="relative flex flex-col items-center gap-8 py-2">
        {/* base line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line" />
        {/* filled line, tracks scroll progress */}
        <div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-signal transition-[height] duration-300 ease-out"
          style={{ height: `${progress * 100}%` }}
        />

        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative z-10 flex items-center"
            aria-current={activeIndex === i ? "true" : undefined}
          >
            <span
              className={`trace-node h-2.5 w-2.5 rounded-full border transition-colors duration-300 ${
                activeIndex === i
                  ? "active border-signal bg-signal"
                  : "border-line bg-ink group-hover:border-signal"
              }`}
            />
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-sm border border-line bg-panel px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
