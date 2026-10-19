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
          className="relative flex min-h-[62svh] items-center justify-center overflow-hidden sm:min-h-[68svh] md:min-h-[72svh]"
        >
          <Image
            src="/images/hero-dining.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[center_30%] sm:object-center"
            sizes="100vw"
          />
          <div className="veil absolute inset-0" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/90"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-12 pt-20 text-center fade-up sm:px-6 sm:pb-14 sm:pt-24 md:px-10 md:pb-16 md:pt-28">
            <p className="eyebrow mx-auto mb-4 max-w-[18rem] sm:mb-5 sm:max-w-none">
              A Private Community for Black Professionals
            </p>
            <h1 className="display-caps mb-3 text-[clamp(2rem,9vw,4.25rem)] leading-[1.05] text-foreground sm:mb-4">
              Five&nbsp;Tables
            </h1>
            <p className="mb-4 font-serif text-base italic text-foreground/90 sm:mb-5 sm:text-lg md:text-xl">
              The Calibre of Our Community.
            </p>
            <p className="mx-auto mb-7 max-w-md text-[0.8125rem] font-light leading-6 text-muted-foreground sm:mb-8 sm:text-[0.875rem] sm:leading-7">
              An invitation-led community across five sectors — good company and
              exceptional conversation.
            </p>
            <a href="#early-access" className="btn-gold">
              Join the Waitlist
            </a>
          </div>
        </section>

        {/* Compact tables strip */}
        <section className="border-y border-border/70 bg-background px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-7 text-center sm:mb-8">
              Five Sectors. One Community.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5 lg:gap-0">
              {TABLES.map((table, index) => (
                <div
                  key={table.numeral}
                  className={`flex flex-col items-center px-1 text-center sm:px-2 ${
                    index === 4 ? "col-span-2 sm:col-span-1" : ""
                  } ${index > 0 ? "lg:border-l lg:border-border" : ""}`}
                >
                  <span className="mb-2 font-serif text-[1.75rem] font-light text-primary sm:text-3xl">
                    {table.numeral}
                  </span>
                  <div className="mb-3 h-px w-7 bg-primary" aria-hidden />
                  <p className="max-w-[9rem] text-[0.58rem] font-light leading-4 tracking-[0.08em] text-muted-foreground uppercase sm:text-[0.62rem] sm:tracking-[0.1em]">
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
          className="scroll-mt-16 bg-background px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3 sm:mb-4">Early Access</p>
            <h2 className="mb-3 font-serif text-[clamp(1.65rem,6vw,2.75rem)] font-normal leading-[1.15] text-foreground">
              Join the Waitlist
            </h2>
            <div className="mx-auto mb-4 h-px w-10 bg-primary sm:mb-5" aria-hidden />
            <p className="mx-auto mb-8 max-w-md text-[0.8125rem] font-light leading-6 text-muted-foreground sm:mb-10 sm:text-[0.875rem] sm:leading-7">
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
