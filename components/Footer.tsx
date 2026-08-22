import Image from "next/image";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/95">
              <Image src="/logo.png" alt="GD Solutions logo" width={26} height={26} />
            </span>
            <p className="font-display text-lg font-semibold text-paper">{site.name}</p>
          </div>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-signal">
            AI | Technology | Automation | Learning
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Empowering businesses and individuals through AI, technology and digital innovation.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Navigate</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted hover:text-signal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-line pt-6">
        <p className="font-mono text-xs text-muted">
          © {site.year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
