"use client";

import { useState } from "react";
import Image from "next/image";
import { caseStudies } from "@/lib/content";

type Story = {
  client: string;
  scenario: string;
  challenges: string[];
  solution: string;
  benefit: string;
};

const ACCENT = [
  {
    badge: "bg-signal/15 text-signal border-signal/30",
    bar: "border-signal/40",
    dot: "bg-signal",
    text: "text-signal",
  },
  {
    badge: "bg-warm/15 text-warm border-warm/30",
    bar: "border-warm/40",
    dot: "bg-warm",
    text: "text-warm",
  },
  {
    badge: "bg-violet/15 text-violet border-violet/30",
    bar: "border-violet/40",
    dot: "bg-violet",
    text: "text-violet",
  },
];

function StoryBlock({
  label,
  accentText,
  accentDot,
  children,
}: {
  label: string;
  accentText: string;
  accentDot: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`} aria-hidden />
      <div>
        <p className={`font-mono text-[10px] uppercase tracking-wider ${accentText}`}>{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-muted">{children}</div>
      </div>
    </div>
  );
}

function CaseStudyCard({
  item,
  accent,
}: {
  item: (typeof caseStudies.items)[number];
  accent: (typeof ACCENT)[number];
}) {
  const [open, setOpen] = useState(false);
  const story = item.story as Story;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-line bg-panel transition-colors hover:border-line/70">
      <div className="bg-paper p-2">
        <Image
          src={item.image}
          alt={item.title}
          width={900}
          height={502}
          className="h-auto w-full rounded-sm"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span
          className={`mb-3 inline-block w-fit rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${accent.badge}`}
        >
          {item.tag}
        </span>
        <h3 className="font-display text-lg font-medium leading-snug text-paper">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`mt-5 inline-flex w-fit items-center gap-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-wider ${accent.text} transition-opacity hover:opacity-80`}
        >
          {open ? "Hide the full story" : "See the full story"}
          <span
            className={`inline-block transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            ↓
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className={`space-y-4 border-l pl-4 ${accent.bar}`}>
              <StoryBlock label="About the Client" accentText={accent.text} accentDot={accent.dot}>
                {story.client}
              </StoryBlock>
              <StoryBlock label="The Scenario" accentText={accent.text} accentDot={accent.dot}>
                {story.scenario}
              </StoryBlock>
              <StoryBlock label="The Challenges" accentText={accent.text} accentDot={accent.dot}>
                <ul className="space-y-1.5">
                  {story.challenges.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-muted/60">–</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </StoryBlock>
              <StoryBlock label="Solution Implemented" accentText={accent.text} accentDot={accent.dot}>
                {story.solution}
              </StoryBlock>
              <StoryBlock label="Manual → Automated: The Benefit" accentText={accent.text} accentDot={accent.dot}>
                <span className="text-paper">{story.benefit}</span>
              </StoryBlock>
            </div>
          </div>
        </div>
      </div>
    </article>
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
          {caseStudies.items.map((item, i) => (
            <CaseStudyCard key={item.title} item={item} accent={ACCENT[i % ACCENT.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
