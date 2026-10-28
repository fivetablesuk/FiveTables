import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "The Founding Table Hosts",
  description:
    "Five Tables founding hosts — stewards of conversation, culture and community across five professional sectors.",
};

const TABLES = [
  { numeral: "I", name: "Medicine & Dentistry" },
  { numeral: "II", name: "Law & Legal Services" },
  { numeral: "III", name: "Banking, Finance & FinTech" },
  { numeral: "IV", name: "Technology & Engineering" },
  { numeral: "V", name: "Business & Leadership" },
] as const;

const RESPONSIBILITIES = [
  "Setting the tone of conversation within their sector",
  "Welcoming new members with discretion and care",
  "Helping shape gatherings that feel intimate, not transactional",
  "Upholding the calibre and culture of Five Tables",
] as const;

export default function FoundingTableHostsPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border/60 px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:px-10 md:pb-20 md:pt-32">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.745_0.072_85/0.08),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl text-center fade-up">
            <p className="eyebrow mb-4 sm:mb-5">Five Tables</p>
            <h1 className="mb-4 font-serif text-[clamp(2rem,8vw,3.75rem)] font-normal leading-[1.1] text-foreground">
              The Founding Table Hosts
            </h1>
            <div className="mx-auto mb-5 h-px w-12 bg-primary sm:mb-6" aria-hidden />
            <p className="mx-auto max-w-xl font-serif text-base italic leading-relaxed text-foreground/90 sm:text-lg">
              Stewards of conversation across five sectors.
            </p>
            <p className="mx-auto mt-5 max-w-lg text-[0.8125rem] font-light leading-6 text-muted-foreground sm:mt-6 sm:text-[0.875rem] sm:leading-7">
              Each table will have a Founding Host — a trusted presence who helps
              shape community within their professional world, with care,
              discretion and exceptional company at the centre.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-8 text-center sm:mb-10">The Five Tables</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-4">
              {TABLES.map((table) => (
                <div
                  key={table.numeral}
                  className="flex flex-col items-center border border-border/70 px-4 py-8 text-center"
                >
                  <span className="mb-2 font-serif text-[1.75rem] font-light text-primary sm:text-3xl">
                    {table.numeral}
                  </span>
                  <div className="mb-3 h-px w-7 bg-primary" aria-hidden />
                  <p className="mb-4 max-w-[10rem] text-[0.62rem] font-light leading-4 tracking-[0.1em] text-muted-foreground uppercase">
                    {table.name}
                  </p>
                  <p className="text-[0.7rem] font-light tracking-[0.14em] text-primary uppercase">
                    Host seat
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3 sm:mb-4">The Role</p>
            <h2 className="mb-3 font-serif text-[clamp(1.5rem,5vw,2.25rem)] font-normal leading-[1.15] text-foreground">
              What a Founding Host carries
            </h2>
            <div className="mx-auto mb-8 h-px w-10 bg-primary sm:mb-10" aria-hidden />
            <ul className="mx-auto max-w-md space-y-4 text-left sm:space-y-5">
              {RESPONSIBILITIES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[0.875rem] font-light leading-6 text-muted-foreground"
                >
                  <span
                    className="mt-2.5 h-px w-4 shrink-0 bg-primary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-md font-serif text-[0.95rem] italic leading-relaxed text-foreground/90 sm:mt-12">
              Hosts are invited, not applied for in public. Expression of interest
              begins on the waitlist.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link href="/#early-access" className="btn-gold">
                Join the Waitlist
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
