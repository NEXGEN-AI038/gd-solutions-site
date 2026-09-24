"use client";

import { useEffect, useState } from "react";
import { caseStudies } from "@/lib/content";
import ExpandableImage from "./ExpandableImage";
import Reveal from "./Reveal";

const ACCENT_BADGE = [
  "bg-signal/10 text-signal border-signal/30",
  "bg-warm/10 text-warm border-warm/30",
  "bg-violet/10 text-violet border-violet/30",
];
const ACCENT_BENEFIT = [
  "border-signal/30 bg-signal/5",
  "border-warm/30 bg-warm/5",
  "border-violet/30 bg-violet/5",
];
const ACCENT_TEXT = ["text-signal", "text-warm", "text-violet"];

const ROTATE_MS = 7000;

export default function CaseStudies() {
  const items = caseStudies.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 2 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [items.length, paused]);

  const indexed = items.map((item, i) => ({ item, i }));
  const visible =
    items.length <= 2 ? indexed : [indexed[index % items.length], indexed[(index + 1) % items.length]];

  return (
    <section id="case-studies" className="border-t border-line py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{caseStudies.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{caseStudies.heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{caseStudies.sub}</p>
        </Reveal>

        <div
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map(({ item, i }) => {
            const badge = ACCENT_BADGE[i % ACCENT_BADGE.length];
            const benefitAccent = ACCENT_BENEFIT[i % ACCENT_BENEFIT.length];
            const text = ACCENT_TEXT[i % ACCENT_TEXT.length];
            return (
              <Reveal key={`${item.title}-${index}`}>
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
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                      {item.story.client}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{item.story.scenario}</p>

                    <div className="mt-4">
                      <p className={`mb-2 font-mono text-[11px] uppercase tracking-wider ${text}`}>
                        Without This
                      </p>
                      <ul className="space-y-1.5">
                        {item.story.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm leading-snug text-muted">
                            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${text.replace("text-", "bg-")}`} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <p className={`mb-1 font-mono text-[11px] uppercase tracking-wider ${text}`}>What We Built</p>
                      <p className="text-sm leading-relaxed text-muted">{item.story.solution}</p>
                    </div>

                    <div className={`mt-5 rounded-sm border p-4 ${benefitAccent}`}>
                      <p className={`mb-1 font-mono text-[11px] uppercase tracking-wider ${text}`}>What Changed</p>
                      <p className="text-sm leading-relaxed text-paper">{item.story.benefit}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {items.length > 2 && (
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${items[i].title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index || i === (index + 1) % items.length ? "w-6 bg-signal" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
