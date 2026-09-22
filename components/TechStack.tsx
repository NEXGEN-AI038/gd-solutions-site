import { techStack } from "@/lib/content";
import Reveal from "./Reveal";
import TechStackBackground from "./TechStackBackground";
import TechGlobe from "./TechGlobe";

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
    <section className="relative isolate overflow-hidden border-t border-line py-24">
      {/* full-bleed laser background */}
      <div className="absolute inset-0 -z-10">
        <TechStackBackground />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(6,7,8,0.85) 75%)" }}
        />
      </div>

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow mb-4">{techStack.eyebrow}</p>
          <h2 className="section-heading max-w-xl">{techStack.heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{techStack.sub}</p>
        </Reveal>

        <Reveal delay={100}>
          <TechGlobe items={LOGOS} />
        </Reveal>
      </div>
    </section>
  );
}
