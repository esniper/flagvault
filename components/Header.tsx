import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-bg/80 backdrop-blur-[12px]">
      <div className="mx-auto max-w-[1120px] px-6 md:px-12 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-lg text-text-primary tracking-tight"
        >
          FlagVault
        </Link>
        <nav className="flex gap-6 text-[15px] font-medium text-text-secondary">
          <Link
            href="/support"
            className="transition-colors duration-150 ease-in-out hover:text-text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
