import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E14", // base background
        panel: "#12181F", // card / panel background
        panel2: "#171E27", // slightly raised panel
        line: "#232B36", // hairline borders
        paper: "#E8ECEF", // primary text
        muted: "#8B96A5", // secondary text
        signal: {
          DEFAULT: "#4CE0B3", // primary accent — circuit-trace teal
          dim: "#2E8A6E",
        },
        warm: {
          DEFAULT: "#FF8A5B", // secondary accent — human warmth
          dim: "#C96B45",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(76,224,179,0.06), transparent 40%)",
      },
      keyframes: {
        "pulse-trace": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "node-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        "hub-glow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-32" },
        },
      },
      animation: {
        "pulse-trace": "pulse-trace 2.4s ease-in-out infinite",
        scan: "scan 3.5s linear infinite",
        marquee: "marquee 26s linear infinite",
        "node-pulse": "node-pulse 2.6s ease-in-out infinite",
        "hub-glow": "hub-glow 3.2s ease-in-out infinite",
        "dash-flow": "dash-flow 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
