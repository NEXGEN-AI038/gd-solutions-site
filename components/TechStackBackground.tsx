"use client";

import { LaserCollection } from "@designcodeio/threeui/components/LaserCollection";
import "@designcodeio/threeui/style.css";

export default function TechStackBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <LaserCollection
        variant="halftone-relay"
        speed={0.5}
        size={1}
        length={1}
        density={0.9}
        opacity={0.5}
        hue={165}
        saturation={0.85}
        brightness={1.1}
        style={{ background: "transparent" }}
      />
    </div>
  );
}
