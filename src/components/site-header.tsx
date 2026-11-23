import Link from "next/link";
import { AboutNavDropdown } from "@/components/about-nav-dropdown";
import { MobileNav } from "@/components/mobile-nav";

const navLinkClass =
  "inline-flex items-center gap-1.5 whitespace-nowrap text-[0.58rem] leading-none tracking-[0.2em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.22em] md:tracking-[0.24em]";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 md:h-[4.5rem] md:px-10">
        <Link
          href="/"
          className="relative z-[60] shrink-0 font-serif text-[0.85rem] leading-none tracking-[0.28em] text-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.95rem] sm:tracking-[0.32em] md:text-[1.05rem]"
        >
          Five Tables
        </Link>

        <nav
          aria-label="Primary"
          className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex lg:gap-8"
        >
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <AboutNavDropdown />
          <Link href="/the-five-tables" className={navLinkClass}>
            The Five Tables
          </Link>
          <Link href="/experiences" className={navLinkClass}>
            Experiences
          </Link>
          <Link href="/#early-access" className={navLinkClass}>
            Membership
          </Link>
        </nav>

        <div className="relative z-[60] flex items-center gap-3">
          <Link
            href="/#early-access"
            className="relative hidden shrink-0 items-center justify-center border border-primary/80 px-3 py-2 text-[0.55rem] tracking-[0.16em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:px-4 sm:text-[0.62rem] sm:tracking-[0.2em] lg:inline-flex"
          >
            Member Login
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
