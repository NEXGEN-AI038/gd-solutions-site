"use client";

import { useState } from "react";
import Image from "next/image";
import { nav, site } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/70 bg-ink/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-line">
            <Image src="/logo.png" alt="GD Solutions logo" width={22} height={22} />
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-paper sm:text-lg">
            {site.name}
          </span>
        </a>

        <nav className="hidden min-w-0 items-center gap-x-5 xl:flex xl:gap-x-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden shrink-0 rounded-sm bg-gradient-to-r from-signal to-sky px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink shadow-lg shadow-signal/20 transition-transform hover:scale-105 xl:inline-flex"
          >
            Get Started
          </a>

          <button
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-paper xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-ink xl:hidden">
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
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-fit rounded-sm bg-gradient-to-r from-signal to-sky px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

