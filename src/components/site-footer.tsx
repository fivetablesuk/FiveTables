import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-2.5 px-4 py-8 text-center sm:gap-3 sm:px-6 sm:py-10 md:px-10">
        <p className="font-serif text-[0.95rem] tracking-[0.2em] text-foreground uppercase sm:text-[1.05rem] sm:tracking-[0.28em]">
          Five Tables
        </p>
        <p className="text-[0.6rem] tracking-[0.16em] text-taupe uppercase sm:text-[0.65rem] sm:tracking-[0.2em]">
          London · Est. 2026
        </p>
        <nav
          aria-label="Footer"
          className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          <Link
            href="/"
            className="text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.65rem] sm:tracking-[0.18em]"
          >
            Home
          </Link>
          <Link
            href="/founding-table-hosts"
            className="text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.65rem] sm:tracking-[0.18em]"
          >
            Founding Table Hosts
          </Link>
          <Link
            href="/#early-access"
            className="text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.65rem] sm:tracking-[0.18em]"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </footer>
  );
}
