import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-2 px-4 sm:h-16 sm:gap-3 sm:px-6 md:h-[4.25rem] md:px-10">
        <Link
          href="/"
          className="shrink-0 font-serif text-[0.82rem] tracking-[0.16em] text-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.95rem] sm:tracking-[0.28em] md:text-[1.05rem]"
        >
          Five Tables
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-2 sm:gap-3 md:gap-5"
        >
          <Link
            href="/"
            className="text-[0.55rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.16em] md:text-[0.65rem] md:tracking-[0.18em]"
          >
            Home
          </Link>
          <Link
            href="/founding-table-hosts"
            className="text-[0.55rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.14em] md:text-[0.65rem] md:tracking-[0.18em]"
          >
            <span className="sm:hidden">Hosts</span>
            <span className="hidden sm:inline">Founding Table Hosts</span>
          </Link>
          <Link
            href="/experiences"
            className="text-[0.55rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.16em] md:text-[0.65rem] md:tracking-[0.18em]"
          >
            Experiences
          </Link>
          <Link
            href="/#early-access"
            className="btn-outline-gold shrink-0 whitespace-nowrap px-2.5 py-2 sm:px-4"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
