"use client";

import Image from "next/image";
import { PredictiveArcCanvas } from "@designcodeio/threeui/components/PredictiveArcCanvas";
import "@designcodeio/threeui/style.css";

export default function WaterHeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <PredictiveArcCanvas
        variant="amber-halftone"
        mode="dark"
        speed={0.8}
        size={1.1}
        length={1}
        density={1}
        opacity={0.9}
        hue={0}
        saturation={1}
        brightness={1}
        style={{ background: "transparent" }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-16 xl:pr-28">
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-8 py-7 ring-1 ring-white/20 backdrop-blur-md shadow-[0_0_60px_20px_rgba(255,255,255,0.12)] sm:px-10 sm:py-8">
          <Image
            src="/logo.png"
            alt="GD Solutions"
            width={96}
            height={96}
            className="h-20 w-20 drop-shadow-lg sm:h-24 sm:w-24"
          />
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-paper sm:text-xl">GD Solutions</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted sm:text-xs">
              AI | Technology | Automation | Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
