"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-paper">
          {site.name}
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
            AI · Tech · Learning
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Get Started
        </a>

        <button
          className="flex h-9 w-9 items-center justify-center border border-line text-paper md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <div className="container-page flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-signal"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-fit">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
