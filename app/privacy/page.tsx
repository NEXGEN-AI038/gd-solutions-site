import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="section-heading">Privacy Policy</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">1. Introduction</h2>
              <p>
                {site.name} ("we", "us", "our") respects your privacy. This policy explains what
                information we collect through this website, how we use it, and the choices you
                have.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">2. Information We Collect</h2>
              <p>
                When you submit our contact form, we collect the information you provide: your
                name, email address, company/organization (optional), the service you're
                enquiring about, and your message. We do not require you to create an account, and
                we do not collect payment information through this website.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">3. How We Use Your Information</h2>
              <p>
                We use the information you submit solely to respond to your enquiry — for example,
                to email or WhatsApp you back about the service you asked about. We do not sell,
                rent, or share your information with third parties for marketing purposes.
              </p>
              <p className="mt-2">
                Contact form submissions are processed via a third-party email delivery provider
                (Resend) solely to deliver your message to our team.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">4. Cookies &amp; Tracking</h2>
              <p>
                This website does not use tracking cookies or third-party analytics scripts at
                this time. If that changes, this policy will be updated accordingly.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">5. Data Retention</h2>
              <p>
                We retain contact form submissions only as long as needed to respond to your
                enquiry and maintain reasonable business records. You may request deletion of your
                information at any time by emailing us.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of any personal information
                you've submitted to us by contacting us using the details below.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">7. Contact Us</h2>
              <p>
                For any privacy-related questions, reach us at{" "}
                <a href={`mailto:${site.email}`} className="text-signal hover:underline">
                  {site.email}
                </a>{" "}
                or at our office address: {site.address.line1} {site.address.line2}.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-medium text-paper">8. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Changes will be posted on this page
                with an updated "last updated" date.
              </p>
            </section>

            <p className="border-t border-line pt-6 text-xs text-muted">
              This is a general-purpose policy and is not a substitute for legal advice. If your
              business has specific regulatory obligations, please have this reviewed by a
              qualified professional.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
