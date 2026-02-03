import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "MoraFyn — A Pomodoro timer that stays with you",
  description:
    "MoraFyn is a floating sidebar timer for macOS. It remains visible across all your desktops — no hunting for windows, no context switching.",
  alternates: { canonical: "/morafyn" },
};

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="bg-surface border border-border rounded-xl flex items-center justify-center text-text-muted text-sm"
      style={{ aspectRatio: "4/3" }}
    >
      {label}
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-8 h-full">
      <div className="w-16 h-16 rounded-[14px] bg-surface-hover flex items-center justify-center mb-6 text-text-secondary">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 rounded-full bg-[#C8725E] text-white font-semibold flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

export default function MoraFynPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200, 114, 94, 0.06) 0%, transparent 70%)",
          }}
        />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h1 className="font-heading text-[56px] leading-[1.1] font-bold tracking-[-0.02em] mb-6">
                  A Pomodoro timer that stays with you.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  MoraFyn is a floating sidebar timer for macOS. It remains
                  visible across all your desktops — no hunting for windows, no
                  context switching.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="/morafyn/MoraFyn.dmg"
                    className="inline-block bg-[#C8725E] text-white text-base font-semibold px-7 py-3.5 rounded-[10px] transition-all duration-150 ease hover:bg-[#B5654F] hover:-translate-y-px"
                  >
                    Download for macOS
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <p className="text-sm text-text-muted mt-4">
                  Requires macOS 13.0 or later • Free
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={160}>
              <ScreenshotPlaceholder label="Screenshot: Expanded sidebar with work session" />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Key Differentiator */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-xl text-text-secondary leading-relaxed">
                Most timer apps disappear behind windows. MoraFyn&apos;s sidebar
                floats at the edge of your screen — always one glance away.
                Collapse it to a 5-pixel progress bar when you need focus.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="grid grid-cols-2 gap-4">
                <ScreenshotPlaceholder label="Expanded" />
                <ScreenshotPlaceholder label="Collapsed" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-12">
              Features
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={80}>
              <FeatureCard
                title="Always visible"
                description="Persistent floating sidebar stays on top across all desktops and Spaces."
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                }
              />
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <FeatureCard
                title="55 color themes"
                description="Choose from built-in themes or create your own with custom work, short break, and long break colors."
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="13.5" cy="6.5" r="2.5" />
                    <circle cx="19" cy="13" r="2.5" />
                    <circle cx="16" cy="20" r="2.5" />
                    <circle cx="8" cy="20" r="2.5" />
                    <circle cx="5" cy="13" r="2.5" />
                    <circle cx="10.5" cy="6.5" r="2.5" />
                  </svg>
                }
              />
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <FeatureCard
                title="Global hotkeys"
                description="Control your timer from anywhere with system-wide shortcuts. Start, pause, skip, or toggle the sidebar without switching apps."
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M6 8h.01" />
                    <path d="M10 8h.01" />
                    <path d="M14 8h.01" />
                    <path d="M18 8h.01" />
                    <path d="M6 12h.01" />
                    <path d="M10 12h.01" />
                    <path d="M14 12h.01" />
                    <path d="M18 12h.01" />
                    <path d="M6 16h12" />
                  </svg>
                }
              />
            </ScrollReveal>
            <ScrollReveal delay={320}>
              <FeatureCard
                title="Works quietly"
                description="Respects Do Not Disturb. No dock icon. Pauses automatically when you lock your screen."
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                }
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-12">
              How it works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal delay={80}>
              <StepCard
                number={1}
                title="Launch"
                description="MoraFyn appears as a sidebar at the screen edge. No dock icon, no clutter."
              />
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <StepCard
                number={2}
                title="Focus"
                description="Start a work session. The circular progress ring counts down. Collapse the sidebar to a thin progress bar when you need more screen space."
              />
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <StepCard
                number={3}
                title="Break"
                description="When the session ends, you're notified and the break timer begins (if auto-advance is enabled)."
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Full Feature List */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-8">
              Everything included
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="bg-surface border border-border rounded-2xl p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-text-secondary">
                {[
                  "Pomodoro timer with work, short break, and long break modes",
                  "Customizable durations (work 1–90 min, breaks 1–60 min)",
                  "Long break every N sessions (configurable)",
                  "Auto-advance toggle",
                  "Session counter",
                  "Circular progress ring with collapse/expand animation",
                  "Collapsed 5px vertical progress bar at screen edge",
                  "55 built-in color themes + custom color pickers",
                  "5 configurable global hotkeys",
                  "Menu bar icon with timer controls",
                  "Pause on screen lock (work sessions only)",
                  "Launch at login",
                  "Completion sound with Do Not Disturb awareness",
                  "macOS notifications on session complete",
                  "App Nap prevention during work sessions",
                  "First-launch onboarding",
                  "Preferences window with 5 tabs",
                  "Automatic updates via Sparkle",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#C8725E] shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Download Section */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.01em] leading-[1.2] mb-6">
                Download MoraFyn
              </h2>
              <p className="text-text-secondary mb-8">
                Version 1.0.0 • macOS 13.0 (Ventura) or later • Free
              </p>
              <a
                href="/morafyn/MoraFyn.dmg"
                className="inline-block bg-[#C8725E] text-white text-base font-semibold px-7 py-3.5 rounded-[10px] transition-all duration-150 ease hover:bg-[#B5654F] hover:-translate-y-px"
              >
                Download MoraFyn
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Back Link */}
      <section className="py-12">
        <Container>
          <Link
            href="/"
            className="text-text-secondary transition-colors duration-150 ease hover:text-text-primary hover:underline hover:underline-offset-4"
          >
            ← Back to all products
          </Link>
        </Container>
      </section>
    </>
  );
}
