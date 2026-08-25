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
        ink: "#FFFFFF", // base background (was near-black; now white)
        panel: "#F7F8FA", // card / panel background
        panel2: "#EEF1F5", // slightly raised panel
        line: "#E2E6EC", // hairline borders
        paper: "#10151C", // primary text (was off-white; now near-black)
        muted: "#5B6572", // secondary text
        signal: {
          DEFAULT: "#0D9488", // primary accent — deepened teal for contrast on white
          dim: "#0B7A70",
        },
        warm: {
          DEFAULT: "#F1650B", // secondary accent
          dim: "#C2570C",
        },
        violet: {
          DEFAULT: "#7C6FF0", // tertiary accent
          dim: "#5F52D6",
        },
        sky: {
          DEFAULT: "#0EA5E9", // quaternary accent
          dim: "#0284C7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(13,148,136,0.06), transparent 40%)",
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
        "cta-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(13,148,136,0.35)" },
          "50%": { boxShadow: "0 0 0 10px rgba(13,148,136,0)" },
        },
      },
      animation: {
        "pulse-trace": "pulse-trace 2.4s ease-in-out infinite",
        scan: "scan 3.5s linear infinite",
        marquee: "marquee 26s linear infinite",
        "node-pulse": "node-pulse 2.6s ease-in-out infinite",
        "hub-glow": "hub-glow 3.2s ease-in-out infinite",
        "dash-flow": "dash-flow 1.6s linear infinite",
        "cta-pulse": "cta-pulse 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
