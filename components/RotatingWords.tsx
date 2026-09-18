"use client";

import { useEffect, useState } from "react";

const COLORS = ["#7C6FF0", "#0D9488", "#F1650B", "#0EA5E9"];

export default function RotatingWords({
  words,
  intervalMs = 2600,
}: {
  words: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || words.length <= 1) return;

    const id = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(swap);
    }, intervalMs);

    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      className="inline-block transition-all duration-300 ease-out"
      style={{
        color: COLORS[index % COLORS.length],
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {words[index]}
    </span>
  );
}
