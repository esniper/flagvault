import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200, 114, 94, 0.06) 0%, transparent 70%)",
          }}
        />
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-3">
              {config.companyName}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-lg leading-relaxed text-text-secondary mb-8">
              {config.tagline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <a
              href="#products"
              className="inline-block bg-accent text-white text-base font-semibold px-7 py-3.5 rounded-[10px] transition-all duration-150 ease hover:bg-accent-hover hover:-translate-y-px"
            >
              View Products
            </a>
          </ScrollReveal>
        </Container>
      </section>

      {/* Notice Section */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-2xl p-8">
              <p className="text-base font-medium text-text-primary mb-1">
                {config.discontinuedProductNotice}
              </p>
              <p className="text-text-secondary leading-relaxed">
                FlagVault Technologies builds and operates independent software
                products. New products are currently in development.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* What we do Section */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-6">
              What we do
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="text-text-secondary text-lg leading-relaxed space-y-4 max-w-2xl">
              <p>
                We build and sell independent software products, with a focus on
                developer tools and productivity software. Our products are
                designed to be focused, well-crafted, and solve real problems.
              </p>
              <p>
                We operate both subscription-based and one-time-purchase models,
                choosing whichever approach best serves users for each product.
                Every tool we ship is built to last.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-8">
              Products
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={80}>
              <ProductCard
                name="MoraFyn"
                description="A focused Pomodoro timer for macOS with a warm, distraction-free interface."
                platforms={["macOS"]}
                comingSoon
              />
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <ProductCard
                name="1NinetyFive"
                description="Learn all 195 countries through scheduled, spaced exposure."
                platforms={["iOS", "Android"]}
                comingSoon
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-6">
              Contact
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p>
              <a
                href={`mailto:${config.supportEmail}`}
                className="text-accent transition-colors duration-150 ease hover:text-accent-hover hover:underline hover:underline-offset-4"
              >
                {config.supportEmail}
              </a>
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
