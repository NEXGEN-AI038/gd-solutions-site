import Image from "next/image";
import { aiNetwork } from "@/lib/content";

// Hub-and-spoke layout: center hub (logo) + 6 orbiting nodes.
const CX = 400;
const CY = 250;
const R = 168;

const ANGLES_DEG = [-90, -30, 30, 90, 150, 210]; // top, clockwise hexagon

function toXY(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + R * Math.cos(rad),
    y: CY + R * Math.sin(rad),
  };
}

export default function AiNetworkMap() {
  const nodes = aiNetwork.nodes.map((label, i) => ({
    label,
    ...toXY(ANGLES_DEG[i % ANGLES_DEG.length]),
    delay: i * 0.35,
  }));

  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-24">
      {/* fine grid, quiet */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#4CE0B3 1px, transparent 1px), linear-gradient(90deg, #4CE0B3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative">
        <p className="eyebrow mb-4">{aiNetwork.eyebrow}</p>
        <h2 className="section-heading max-w-xl">{aiNetwork.heading}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{aiNetwork.sub}</p>

        <div className="relative mx-auto mt-14 w-full max-w-3xl">
          <svg
            viewBox="0 0 800 500"
            className="h-auto w-full"
            role="img"
            aria-label="Animated diagram of GD Solutions' services connected to a central AI hub"
          >
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4CE0B3" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#4CE0B3" stopOpacity="0" />
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
                stroke="#232B36"
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
                stroke="#4CE0B3"
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
                <circle key={`pulse-${i}`} r={4} fill="#4CE0B3">
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
            <circle cx={CX} cy={CY} r={70} fill="url(#hubGlow)" className="animate-hub-glow" />
            <circle cx={CX} cy={CY} r={46} fill="#12181F" stroke="#4CE0B3" strokeWidth={2} />
            <foreignObject x={CX - 30} y={CY - 30} width={60} height={60}>
              <div className="flex h-full w-full items-center justify-center">
                <Image src="/logo.png" alt="GD Solutions" width={40} height={40} />
              </div>
            </foreignObject>

            {/* outer nodes */}
            {nodes.map((n, i) => (
              <g key={`node-${i}`}>
                <circle cx={n.x} cy={n.y} r={22} fill="#12181F" stroke="#232B36" strokeWidth={2} />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={5}
                  fill="#4CE0B3"
                  className="animate-node-pulse"
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
                <text
                  x={n.x}
                  y={n.y > CY ? n.y + 40 : n.y - 32}
                  textAnchor="middle"
                  fill="#8B96A5"
                  fontSize="13"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.5"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
