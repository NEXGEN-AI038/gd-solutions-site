import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Each token reads a CSS variable (defined per-theme in
        // globals.css) so every existing bg-ink / text-paper / etc. class
        // across the whole site automatically re-themes when the `dark`
        // class is toggled on <html> — no per-component changes needed.
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        panel2: "rgb(var(--color-panel2) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        signal: {
          DEFAULT: "rgb(var(--color-signal) / <alpha-value>)",
          dim: "rgb(var(--color-signal-dim) / <alpha-value>)",
        },
        warm: {
          DEFAULT: "rgb(var(--color-warm) / <alpha-value>)",
          dim: "rgb(var(--color-warm-dim) / <alpha-value>)",
        },
        violet: {
          DEFAULT: "rgb(var(--color-violet) / <alpha-value>)",
          dim: "rgb(var(--color-violet-dim) / <alpha-value>)",
        },
        sky: {
          DEFAULT: "rgb(var(--color-sky) / <alpha-value>)",
          dim: "rgb(var(--color-sky-dim) / <alpha-value>)",
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
        "orbit-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "orbit-spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
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
        "orbit-spin": "orbit-spin 36s linear infinite",
        "orbit-spin-reverse": "orbit-spin-reverse 36s linear infinite",
        float: "float 4s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
