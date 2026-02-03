import type { Metadata } from "next";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-8">
            About
          </h1>
        </ScrollReveal>

        <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-2xl">
          <ScrollReveal delay={80}>
            <p>
              {config.companyName} is an independent software company focused on
              building well-crafted tools for developers and productivity-minded
              users.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p>
              We believe in shipping software that solves real problems without
              unnecessary complexity. Each product we build is designed to do one
              thing well, with careful attention to performance, reliability, and
              user experience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p>
              Our current focus is on native applications — software that feels
              at home on your device and respects your system resources. We use
              platform-native technologies wherever possible.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <p>
              Questions or inquiries? Reach us at{" "}
              <a
                href={`mailto:${config.supportEmail}`}
                className="text-accent transition-colors duration-150 ease hover:text-accent-hover hover:underline hover:underline-offset-4"
              >
                {config.supportEmail}
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
