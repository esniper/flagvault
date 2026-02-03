import type { Metadata } from "next";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-8">
            Support
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            If you need help or have a question, please contact us at:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mb-12">
            <a
              href={`mailto:${config.supportEmail}`}
              className="text-accent text-lg transition-colors duration-150 ease hover:text-accent-hover hover:underline hover:underline-offset-4"
            >
              {config.supportEmail}
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <p className="text-sm text-text-muted tracking-[0.01em]">
            We aim to respond to all enquiries, but cannot guarantee a specific
            response time.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
