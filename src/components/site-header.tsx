import Link from "next/link";

const navLinkClass =
  "inline-flex items-center text-[0.55rem] leading-none tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.16em] md:text-[0.65rem] md:tracking-[0.18em]";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto grid h-14 max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-16 sm:gap-3 sm:px-6 md:h-[4.25rem] md:px-10">
        <Link
          href="/"
          className="justify-self-start self-center font-serif text-[0.82rem] leading-none tracking-[0.16em] text-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.95rem] sm:tracking-[0.28em] md:text-[1.05rem]"
        >
          Five Tables
        </Link>

        <nav
          aria-label="Primary"
          className="col-start-2 flex items-center justify-center gap-3 self-center sm:gap-5 md:gap-7"
        >
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/founding-table-hosts" className={navLinkClass}>
            <span className="sm:hidden">Hosts</span>
            <span className="hidden sm:inline">Founding Table Hosts</span>
          </Link>
          <Link href="/experiences" className={navLinkClass}>
            Experiences
          </Link>
        </nav>

        <Link
          href="/#early-access"
          className="btn-outline-gold justify-self-end self-center whitespace-nowrap px-2.5 py-2 sm:px-4"
        >
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
