export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-[4.25rem] md:px-10">
        <a
          href="#home"
          className="font-serif text-[0.95rem] tracking-[0.28em] text-foreground uppercase transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring md:text-[1.05rem]"
        >
          Five Tables
        </a>

        <a href="#early-access" className="btn-outline-gold px-4 py-2 text-[0.62rem]">
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
