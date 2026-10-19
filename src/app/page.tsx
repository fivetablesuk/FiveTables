import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaitlistForm } from "@/components/waitlist-form";

const TABLES = [
  { numeral: "I", name: "Medicine & Dentistry" },
  { numeral: "II", name: "Law & Legal Services" },
  { numeral: "III", name: "Banking, Finance & FinTech" },
  { numeral: "IV", name: "Technology & Engineering" },
  { numeral: "V", name: "Business & Leadership" },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Compact hero */}
        <section
          id="home"
          className="relative flex min-h-[70svh] items-center justify-center overflow-hidden md:min-h-[72svh]"
        >
          <Image
            src="/images/hero-dining.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="veil absolute inset-0" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-14 pt-24 text-center fade-up md:px-10 md:pb-16 md:pt-28">
            <p className="eyebrow mb-5">
              A Private Community for Black Professionals
            </p>
            <h1 className="display-caps mb-4 text-[clamp(2.4rem,6.5vw,4.25rem)] leading-[0.95] text-foreground">
              Five&nbsp;Tables
            </h1>
            <p className="mb-5 font-serif text-lg italic text-foreground/90 md:text-xl">
              The Calibre of Our Community.
            </p>
            <p className="mx-auto mb-8 max-w-md text-[0.875rem] font-light leading-7 text-muted-foreground">
              An invitation-led community across five sectors — good company and
              exceptional conversation.
            </p>
            <a href="#early-access" className="btn-gold">
              Join the Waitlist
            </a>
          </div>
        </section>

        {/* Compact tables strip */}
        <section className="border-y border-border/70 bg-background px-6 py-12 md:px-10 md:py-14">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-8 text-center">Five Sectors. One Community.</p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
              {TABLES.map((table, index) => (
                <div
                  key={table.numeral}
                  className={`flex flex-col items-center px-2 text-center ${
                    index > 0 ? "lg:border-l lg:border-border" : ""
                  }`}
                >
                  <span className="mb-2 font-serif text-3xl font-light text-primary">
                    {table.numeral}
                  </span>
                  <div className="mb-3 h-px w-7 bg-primary" aria-hidden />
                  <p className="max-w-[8.5rem] text-[0.62rem] font-light leading-4 tracking-[0.1em] text-muted-foreground uppercase">
                    {table.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section
          id="early-access"
          className="bg-background px-6 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Early Access</p>
            <h2 className="mb-3 font-serif text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-[1.1] text-foreground">
              Join the Waitlist
            </h2>
            <div className="mx-auto mb-5 h-px w-10 bg-primary" aria-hidden />
            <p className="mx-auto mb-10 max-w-md text-[0.875rem] font-light leading-7 text-muted-foreground">
              Share your details to be considered for early access.
            </p>
            <WaitlistForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
