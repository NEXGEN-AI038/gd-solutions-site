import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { services, careerSupport, site, buildWhatsappLink } from "@/lib/content";
import {
  BoltIcon,
  ServerIcon,
  CameraIcon,
  WrenchIcon,
  GlobeIcon,
  HeadsetIcon,
} from "@/components/Icons";

const ICON_BY_SLUG: Record<string, typeof BoltIcon> = {
  "ai-automation": BoltIcon,
  "it-infrastructure": ServerIcon,
  "surveillance-systems": CameraIcon,
  "it-services": WrenchIcon,
  "website-design-hosting": GlobeIcon,
  "bpo-interview-assistance": HeadsetIcon,
};

function getAllServiceEntries() {
  return [...services.items, careerSupport.item];
}

function getServiceBySlug(slug: string) {
  return getAllServiceEntries().find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return getAllServiceEntries().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getServiceBySlug(params.slug);
  if (!entry) return {};
  return {
    title: `${entry.title} — ${site.name}`,
    description: entry.details,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const entry = getServiceBySlug(params.slug);
  if (!entry) notFound();

  const Icon = ICON_BY_SLUG[entry.slug] ?? BoltIcon;
  const isCareer = entry.slug === careerSupport.item.slug;
  const contactHref = `/?service=${encodeURIComponent(entry.title)}#contact`;
  const whatsappHref = buildWhatsappLink(
    site.whatsapp[0].number,
    `Hi GD Solutions, I'd like to know more about ${entry.title}.`
  );

  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link
              href="/#services"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-signal"
            >
              ← Back to Services
            </Link>

            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <p className="eyebrow mb-1">{isCareer ? careerSupport.eyebrow : services.eyebrow}</p>
                <h1 className="font-display text-3xl font-semibold text-paper sm:text-4xl">{entry.title}</h1>
              </div>
            </div>

            <p className="mt-6 font-display text-xl font-medium text-paper">{entry.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{entry.details}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 rounded-sm border border-line bg-panel p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-signal">What's included</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {entry.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-paper">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 text-sm text-muted">
              <span className="font-mono uppercase tracking-wider text-muted">Ideal for: </span>
              {entry.idealFor}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
              <a href={contactHref} className="btn-primary">
                Talk to Us About {entry.title.split(" ").slice(0, 2).join(" ")}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
