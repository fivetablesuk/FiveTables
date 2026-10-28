import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 md:h-[4.25rem] md:px-10">
        <Link
          href="/"
          className="shrink-0 font-serif text-[0.82rem] tracking-[0.16em] text-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.95rem] sm:tracking-[0.28em] md:text-[1.05rem]"
        >
          Five Tables
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/founding-table-hosts"
            className="hidden text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:inline sm:text-[0.65rem] sm:tracking-[0.18em]"
          >
            Founding Hosts
          </Link>
          <Link
            href="/#early-access"
            className="btn-outline-gold shrink-0 whitespace-nowrap px-3 py-2 sm:px-4"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
