"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCarousel({
  images,
  intervalMs = 4500,
}: {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReduced);
    if (prefersReduced || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-line shadow-2xl shadow-black/30">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1280px) 512px, (min-width: 1024px) 448px, 90vw"
          priority={i === 0}
          className="object-cover"
          style={
            reducedMotion
              ? { opacity: i === index ? 1 : 0, transition: "opacity 300ms ease-in-out" }
              : {
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "scale(1.09)" : "scale(1)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "1200ms, 5200ms",
                  transitionTimingFunction: "ease-in-out, ease-out",
                }
          }
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-signal" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
