import Container from "@/components/Container";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <Container>
      <section className="mb-24">
        <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-3">
          {config.companyName}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          {config.tagline}
        </p>
      </section>

      <div className="rounded-2xl border border-border bg-surface p-8 mb-24">
        <p className="text-base font-medium text-text-primary mb-1">
          {config.discontinuedProductNotice}
        </p>
        <p className="text-text-secondary leading-relaxed">
          FlagVault Technologies builds and operates independent software
          products. New products are currently in development.
        </p>
      </div>

      <section className="mb-24">
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-6">
          What we do
        </h2>
        <ul className="space-y-3 text-text-secondary text-lg leading-relaxed">
          <li>Build and sell independent software products</li>
          <li>Focus on developer tools and productivity software</li>
          <li>Operate subscription-based and one-time-purchase products</li>
        </ul>
      </section>

      <section className="mb-24">
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-6">
          Products
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          New products will be announced here when available.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-6">
          Contact
        </h2>
        <p>
          <a
            href={`mailto:${config.supportEmail}`}
            className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors duration-150"
          >
            {config.supportEmail}
          </a>
        </p>
      </section>
    </Container>
  );
}
