import { site } from "@/lib/content";

export default function WhatsappButton() {
  const primary = site.whatsapp[0];

  return (
    <a
      href={`https://wa.me/${primary.number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp — ${primary.label}`}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-signal/40 bg-panel px-4 py-3 font-mono text-xs uppercase tracking-wide text-signal shadow-lg shadow-black/40 transition-colors hover:bg-signal hover:text-ink"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.44.3.15.47.13.65-.08.17-.2.73-.85.93-1.14.2-.29.4-.24.66-.15.27.1 1.71.81 2 .96.3.15.49.22.56.35.08.13.08.75-.16 1.44Z" />
      </svg>
      Enquire on WhatsApp
    </a>
  );
}
