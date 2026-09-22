"use client";

import { LaserCollection } from "@designcodeio/threeui/components/LaserCollection";
import "@designcodeio/threeui/style.css";

export default function TechStackBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <LaserCollection
        speed={0.6}
        size={1}
        length={1.1}
        density={0.7}
        opacity={0.35}
        hue={165}
        saturation={0.8}
        brightness={1}
        style={{ background: "transparent" }}
      />
    </div>
  );
}
