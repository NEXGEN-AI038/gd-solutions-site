import Link from "next/link";
import { careerSupport } from "@/lib/content";
import Reveal from "./Reveal";
import { HeadsetIcon } from "./Icons";

export default function CareerSupport() {
  const { item } = careerSupport;
  return (
    <section className="border-t border-line bg-panel2 py-16">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start gap-8 rounded-sm border border-line bg-panel p-8 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-warm/10 text-warm">
              <HeadsetIcon className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <p className="eyebrow mb-2">{careerSupport.eyebrow}</p>
              <h3 className="font-display text-xl font-medium text-paper">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
            <Link href={`/services/${item.slug}`} className="btn-ghost shrink-0">
              {careerSupport.ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
