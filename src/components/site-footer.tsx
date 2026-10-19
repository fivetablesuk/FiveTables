export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-6 py-10 text-center md:px-10">
        <p className="font-serif text-[1.05rem] tracking-[0.28em] text-foreground uppercase">
          Five Tables
        </p>
        <p className="text-[0.65rem] tracking-[0.2em] text-taupe uppercase">
          London · Est. 2026
        </p>
      </div>
    </footer>
  );
}
