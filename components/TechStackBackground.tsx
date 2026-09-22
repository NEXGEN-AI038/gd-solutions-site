"use client";

import { LaserCollection } from "@designcodeio/threeui/components/LaserCollection";
import "@designcodeio/threeui/style.css";

export default function TechStackBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <LaserCollection
        variant="halftone-relay"
        speed={0.5}
        size={0.8}
        length={0.8}
        density={0.6}
        opacity={0.2}
        hue={165}
        saturation={0.7}
        brightness={0.8}
        style={{ background: "transparent" }}
      />
    </div>
  );
}
