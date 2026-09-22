import { techStack } from "@/lib/content";
import Reveal from "./Reveal";

const LOGOS = [
  { name: "Claude", file: "claude.jpg", color: "#DA7756" },
  { name: "OpenAI", file: "openai.png", color: "#10A37F" },
  { name: "Gemini", file: "gemini.png", color: "#8E75FF" },
  { name: "Perplexity", file: "perplexity.png", color: "#1FB8CD" },
  { name: "Make.com", file: "make.jpg", color: "#6100FF" },
  { name: "n8n", file: "n8n.png", color: "#EA4B71" },
  { name: "Zapier", file: "zapier.jpg", color: "#FF4A00" },
  { name: "Next.js", file: "nextjs.png", color: "#A1A1AA" },
  { name: "React", file: "react.png", color: "#61DAFB" },
  { name: "Tailwind CSS", file: "tailwindcss.png", color: "#38BDF8" },
  { name: "Java", file: "java.png", color: "#E76F00" },
  { name: "Supabase", file: "supabase.svg", color: "#3ECF8E" },
  { name: "Red Hat", file: "redhat.svg", color: "#EE0000" },
  { name: "Vapi", file: "vapi.svg", color: "#F2B705" },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24">
      {/* ambient color, matching the rest of the site */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 translate-y-1/2 rounded-full bg-violet/10 blur-[120px]" />

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow mb-4">{techStack.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{techStack.heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{techStack.sub}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {LOGOS.map(({ name, file, color }) => (
              <div
                key={name}
                className="relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-line bg-panel p-6"
              >
                <div
                  className="pointer-events-none absolute -inset-8 rounded-full opacity-25 blur-2xl"
                  style={{ background: color }}
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2.5 sm:h-20 sm:w-20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/logos/${file}`} alt={name} className="h-full w-full object-contain" />
                </div>
                <span className="relative text-center font-mono text-[11px] uppercase tracking-wider text-paper">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
