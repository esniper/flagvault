import Link from "next/link";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-[1120px] px-6 md:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <p>&copy; {config.currentYear} {config.companyName}</p>
        <nav className="flex gap-6">
          <Link
            href="/privacy"
            className="transition-colors duration-150 ease hover:text-text-primary"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors duration-150 ease hover:text-text-primary"
          >
            Terms
          </Link>
          <Link
            href="/support"
            className="transition-colors duration-150 ease hover:text-text-primary"
          >
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
