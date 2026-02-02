import type { Metadata } from "next";
import Container from "@/components/Container";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Container>
      <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-4">
        Terms of Service
      </h1>
      <p className="text-sm text-text-muted tracking-[0.01em] mb-16">
        Last updated: February 2026
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Agreement
          </h2>
          <p className="text-text-secondary leading-relaxed">
            By accessing {config.baseUrl}, you agree to these terms. If you do
            not agree, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Nature of the site
          </h2>
          <p className="text-text-secondary leading-relaxed">
            This website is an informational site operated by{" "}
            {config.companyName}. We do not currently offer an active SaaS
            product or service through this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            No warranties
          </h2>
          <p className="text-text-secondary leading-relaxed">
            This website and its content are provided &quot;as is&quot; without
            warranties of any kind, whether express or implied. We do not
            guarantee the accuracy, completeness, or usefulness of any
            information on this site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Limitation of liability
          </h2>
          <p className="text-text-secondary leading-relaxed">
            To the fullest extent permitted by law, {config.companyName} shall
            not be liable for any damages arising from the use of or inability
            to use this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Governing law
          </h2>
          <p className="text-text-secondary leading-relaxed">
            These terms shall be governed by and construed in accordance with the
            laws of India, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Contact
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Questions about these terms may be directed to{" "}
            <a
              href={`mailto:${config.supportEmail}`}
              className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors duration-150"
            >
              {config.supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
