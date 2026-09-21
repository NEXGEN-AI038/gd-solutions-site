import Image from "next/image";
import { aiNetwork } from "@/lib/content";
import Reveal from "./Reveal";

// Hub-and-spoke layout: center hub (logo) + orbiting nodes, evenly spaced
// starting from the top — automatically adapts to however many nodes are
// listed in aiNetwork.nodes.
const CX = 260;
const CY = 260;
const R = 200;

function toXY(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + R * Math.cos(rad),
    y: CY + R * Math.sin(rad),
  };
}

const HIGHLIGHTS = [
  { title: "One dashboard", desc: "Every system reports into a single connected view." },
  { title: "Faster response", desc: "Automations react in real time, not end of day." },
  { title: "Fewer manual errors", desc: "Data moves between tools without re-typing." },
  { title: "Always current", desc: "Every node stays in sync as your business changes." },
];

export default function AiNetworkMap() {
  const count = aiNetwork.nodes.length;
  const nodes = aiNetwork.nodes.map((label, i) => ({
    label,
    ...toXY(-90 + (360 / count) * i),
    delay: i * 0.35,
  }));

  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-24">
      {/* ambient color, matching the hero and rest of the site */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-signal/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet/15 blur-[120px]" />
      {/* fine grid, quiet */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">{aiNetwork.eyebrow}</p>
            <h2 className="section-heading max-w-xl">{aiNetwork.heading}</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{aiNetwork.sub}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <div key={h.title} className="card">
                  <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-display text-sm font-semibold text-paper">{h.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{h.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-signal/10 blur-3xl" />
            <svg
              viewBox="0 0 520 520"
              className="h-auto w-full"
              role="img"
              aria-label="Animated diagram of GD Solutions' services connected to a central AI hub"
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0D9488" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* spokes */}
              {nodes.map((n, i) => (
                <line
                  key={`line-${i}`}
                  x1={CX}
                  y1={CY}
                  x2={n.x}
                  y2={n.y}
                  stroke="rgb(var(--color-line))"
                  strokeWidth={2}
                />
              ))}
              {nodes.map((n, i) => (
                <line
                  key={`dash-${i}`}
                  x1={CX}
                  y1={CY}
                  x2={n.x}
                  y2={n.y}
                  stroke="#0D9488"
                  strokeWidth={2}
                  strokeDasharray="6 10"
                  strokeLinecap="round"
                  className="motion-safe:animate-dash-flow"
                  opacity={0.8}
                />
              ))}

              {/* traveling pulse dots, hidden for reduced-motion users */}
              <g className="motion-reduce:hidden">
                {nodes.map((n, i) => (
                  <circle key={`pulse-${i}`} r={4} fill="#0D9488">
                    <animateMotion
                      dur="2.8s"
                      begin={`${n.delay}s`}
                      repeatCount="indefinite"
                      path={`M${CX},${CY} L${n.x},${n.y}`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.15;0.85;1"
                      dur="2.8s"
                      begin={`${n.delay}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>

              {/* hub */}
              <circle cx={CX} cy={CY} r={78} fill="url(#hubGlow)" className="animate-hub-glow" />
              <circle cx={CX} cy={CY} r={50} fill="rgb(var(--color-panel))" stroke="#0D9488" strokeWidth={2} />
              <foreignObject x={CX - 32} y={CY - 32} width={64} height={64}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image src="/logo.png" alt="GD Solutions" width={44} height={44} />
                </div>
              </foreignObject>

              {/* outer nodes */}
              {nodes.map((n, i) => (
                <g key={`node-${i}`}>
                  <circle cx={n.x} cy={n.y} r={24} fill="rgb(var(--color-panel))" stroke="rgb(var(--color-line))" strokeWidth={2} />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={5}
                    fill="#0D9488"
                    className="animate-node-pulse"
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <text
                    x={n.x}
                    y={n.y > CY ? n.y + 42 : n.y - 34}
                    textAnchor="middle"
                    fill="rgb(var(--color-muted))"
                    fontSize="13"
                    fontFamily="var(--font-mono)"
                    letterSpacing="0.3"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
