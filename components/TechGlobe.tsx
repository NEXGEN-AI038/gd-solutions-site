"use client";

import { useEffect, useRef } from "react";

const RADIUS = 270;

type LogoItem = { name: string; file: string; color: string };

function fibonacciSphere(count: number, radius: number) {
  const points: { x: number; y: number; z: number }[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    points.push({ x: Math.cos(phi) * r * radius, y: y * radius, z: Math.sin(phi) * r * radius });
  }
  return points;
}

export default function TechGlobe({ items }: { items: LogoItem[] }) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef(0);
  const hoveredRef = useRef<number | null>(null);
  const pointsRef = useRef(fibonacciSphere(items.length, RADIUS));

  useEffect(() => {
    let frame: number;

    const animate = () => {
      angleRef.current += 0.003;
      const cos = Math.cos(angleRef.current);
      const sin = Math.sin(angleRef.current);

      pointsRef.current.forEach((p, i) => {
        // rotate this point around the vertical (Y) axis
        const x = p.x * cos + p.z * sin;
        const z = -p.x * sin + p.z * cos;
        const y = p.y;

        const el = itemRefs.current[i];
        if (!el) return;

        const depth = (z + RADIUS) / (RADIUS * 2); // 0 = far side, 1 = near side
        const isHovered = hoveredRef.current === i;

        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${isHovered ? 1.55 : 1})`;
        el.style.opacity = String(isHovered ? 1 : 0.35 + depth * 0.65);
        el.style.zIndex = String(isHovered ? 9999 : Math.round(z + RADIUS));
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-2xl sm:h-[620px]" style={{ perspective: "850px" }}>
      {/* faint wireframe rings hinting at the sphere's outline */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/60"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line/40"
        style={{ width: RADIUS * 2 * 0.62, height: RADIUS * 2 }}
      />

      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {items.map((item, i) => (
          <div
            key={item.name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onMouseEnter={() => {
              hoveredRef.current = i;
            }}
            onMouseLeave={() => {
              hoveredRef.current = null;
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-[opacity] duration-200"
            style={{ willChange: "transform" }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2.5 sm:h-16 sm:w-16"
              style={{ boxShadow: `0 10px 24px -8px ${item.color}99` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/logos/${item.file}`} alt={item.name} className="h-full w-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
