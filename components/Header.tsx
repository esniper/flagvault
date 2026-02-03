import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";

export default async function Header() {
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain");
  const isMorafyn = subdomain === "morafyn";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-[rgba(15,13,12,0.8)] backdrop-blur-[12px]">
      <div className="mx-auto max-w-[1120px] px-6 md:px-12 h-full flex items-center justify-between">
        {isMorafyn ? (
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/morafyn-logo.png"
              alt="MoraFyn"
              width={32}
              height={32}
            />
            <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
              MoraFyn
            </span>
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="FlagVault" width={24} height={35} />
            <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
              FlagVault
            </span>
          </Link>
        )}
        <nav className="flex gap-6 text-[15px] font-medium text-text-secondary">
          {isMorafyn ? (
            <>
              <a
                href="#features"
                className="transition-colors duration-150 ease hover:text-text-primary"
              >
                Features
              </a>
              <a
                href="/morafyn/MoraFyn.dmg"
                className="transition-colors duration-150 ease hover:text-text-primary"
              >
                Download
              </a>
            </>
          ) : (
            <>
              <Link
                href="/#products"
                className="transition-colors duration-150 ease hover:text-text-primary"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="transition-colors duration-150 ease hover:text-text-primary"
              >
                About
              </Link>
              <Link
                href="/support"
                className="transition-colors duration-150 ease hover:text-text-primary"
              >
                Contact
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
