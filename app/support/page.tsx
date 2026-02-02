import type { Metadata } from "next";
import Container from "@/components/Container";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <Container>
      <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-8">
        Support
      </h1>

      <p className="text-lg text-text-secondary leading-relaxed mb-4">
        If you need help or have a question, please contact us at:
      </p>

      <p className="mb-12">
        <a
          href={`mailto:${config.supportEmail}`}
          className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors duration-150 text-lg"
        >
          {config.supportEmail}
        </a>
      </p>

      <p className="text-sm text-text-muted tracking-[0.01em]">
        We aim to respond to all enquiries, but cannot guarantee a specific
        response time.
      </p>
    </Container>
  );
}
