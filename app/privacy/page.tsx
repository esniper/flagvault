import type { Metadata } from "next";
import Container from "@/components/Container";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container>
      <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-text-muted tracking-[0.01em] mb-16">
        Last updated: February 2026
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {config.companyName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            operates the website at{" "}
            <span className="text-text-primary">{config.baseUrl}</span>. This
            page explains what data we collect and how we use it.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Data we collect
          </h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            This website is informational. We do not use analytics, tracking
            pixels, or third-party cookies.
          </p>
          <p className="text-text-secondary leading-relaxed">
            If you contact us via email, we will retain your email address and
            message content to respond to your enquiry.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Server logs
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Our hosting provider (Vercel) may collect standard server logs
            including IP addresses, browser user-agent strings, and request
            timestamps. These logs are used for security and operational
            purposes and are retained according to Vercel&apos;s data retention
            policies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Contact
          </h2>
          <p className="text-text-secondary leading-relaxed">
            For privacy-related questions, contact us at{" "}
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
