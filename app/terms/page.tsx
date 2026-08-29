import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
};

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="section-heading">Terms of Service</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">1. Acceptance of Terms</h2>
              <p>
                By using this website, you agree to these Terms of Service. If you do not agree,
                please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">2. Our Services</h2>
              <p>
                {site.name} provides AI automation, IT infrastructure, surveillance systems,
                website design and hosting, Business Process Outsourcing interview assistance, and
                technology training. Specific scope, pricing, and deliverables for any engagement
                are agreed separately in writing (e.g. a proposal, quote, or contract) between
                {" "}{site.name} and the client — this website is informational and does not itself
                constitute a binding service agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">3. No Guarantee of Results</h2>
              <p>
                While we aim to deliver reliable, high-quality automation, infrastructure and
                training outcomes, we do not guarantee specific business results, as these depend
                on factors outside our control. Training course content is provided for
                educational purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and case study
                material — is the property of {site.name} unless otherwise noted, and may not be
                reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">5. Third-Party Links</h2>
              <p>
                This site links to third-party platforms (WhatsApp, LinkedIn, Instagram, Google
                Reviews). We are not responsible for the content or privacy practices of those
                external platforms.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">6. Limitation of Liability</h2>
              <p>
                To the extent permitted by law, {site.name} is not liable for any indirect,
                incidental, or consequential damages arising from your use of this website.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">7. Governing Law</h2>
              <p>
                These terms are governed by the laws of India, with courts in Kolkata, West Bengal
                having jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">8. Contact Us</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${site.email}`} className="text-signal hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </section>

            <p className="border-t border-line pt-6 text-xs text-muted">
              This is a general-purpose terms template and is not a substitute for legal advice.
              Please have this reviewed by a qualified professional before relying on it for
              formal client engagements.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
