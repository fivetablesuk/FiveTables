import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "The Five Tables",
  description:
    "Five Sectors. One Community. — every member has a professional home within Five Tables.",
};

const TABLES = [
  {
    numeral: "I",
    name: "Medicine & Dentistry",
    roles: "Doctors · Dentists · Surgeons · Healthcare Leaders",
  },
  {
    numeral: "II",
    name: "Law & Legal Services",
    roles:
      "Solicitors · Barristers · In-House Counsel · Legal Professionals",
  },
  {
    numeral: "III",
    name: "Banking, Finance & FinTech",
    roles:
      "Banking · Accounting · Investment · Private Equity · Venture Capital · Wealth Management · FinTech",
  },
  {
    numeral: "IV",
    name: "Technology & Engineering",
    roles:
      "Software · Artificial Intelligence · Cybersecurity · Data · Mechanical · Civil · Electrical Engineering",
  },
  {
    numeral: "V",
    name: "Business & Leadership",
    roles:
      "Executives · Directors · Founders · Entrepreneurs · Business Owners · Consulting · Education Leaders",
  },
] as const;

export default function TheFiveTablesPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="px-4 pb-12 pt-28 text-center sm:px-6 sm:pb-14 sm:pt-32 md:px-10 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-3xl fade-up">
            <p className="eyebrow mb-5 sm:mb-6">The Five Tables</p>
            <h1 className="mb-5 font-serif text-[clamp(2rem,7vw,3.5rem)] font-normal leading-[1.12] text-foreground sm:mb-6">
              Five Sectors. One Community.
            </h1>
            <div className="mx-auto mb-5 h-px w-12 bg-primary sm:mb-6" aria-hidden />
            <p className="mx-auto max-w-xl text-[0.875rem] font-light leading-7 text-muted-foreground sm:text-base sm:leading-7">
              Every member has a professional home within Five Tables and access
              to a wider cross-sector community.
            </p>
          </div>
        </section>

        <section className="border-t border-border/40 px-4 py-4 sm:px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            {TABLES.map((table) => (
              <article
                key={table.numeral}
                className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border/40 py-10 sm:gap-8 sm:py-12"
              >
                <span className="font-serif text-[2.5rem] font-light leading-none text-primary sm:text-[3.25rem]">
                  {table.numeral}
                </span>
                <div className="pt-1 sm:pt-2">
                  <h2 className="mb-2 font-serif text-[1.35rem] font-normal text-primary sm:text-[1.65rem]">
                    {table.name}
                  </h2>
                  <p className="font-serif text-[0.875rem] font-light italic leading-6 text-muted-foreground sm:text-[0.95rem] sm:leading-7">
                    {table.roles}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 text-center sm:px-6 sm:py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow mb-5 sm:mb-6">The Exchange</p>
            <h2 className="mb-4 font-serif text-[clamp(1.85rem,5vw,2.75rem)] font-normal leading-[1.15] text-foreground">
              Five Tables. One Centre.
            </h2>
            <p className="mx-auto mb-6 max-w-lg font-serif text-base italic leading-relaxed text-foreground/90 sm:text-lg">
              Your Table is where you begin. The Exchange is where everyone
              meets.
            </p>
            <p className="mx-auto mb-8 max-w-xl text-[0.875rem] font-light leading-7 text-muted-foreground sm:text-[0.9375rem] sm:leading-8">
              The Exchange is the shared centre of Five Tables — a space for
              cross-sector relationships, conversation and connection beyond
              your professional home.
            </p>
            <p className="mx-auto mb-10 max-w-md text-[0.65rem] font-light tracking-[0.18em] text-foreground uppercase sm:text-[0.7rem] sm:tracking-[0.22em]">
              Your table is your professional home.
              <br />
              Five Tables is your wider community.
            </p>
            <Link
              href="/founding-table-hosts"
              className="inline-flex items-center gap-2 text-[0.7rem] font-light tracking-[0.2em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.75rem]"
            >
              Meet Our Founding Table Hosts
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section className="border-t border-border/40 px-4 py-12 text-center sm:px-6 sm:py-14 md:px-10">
          <Link href="/#early-access" className="btn-gold">
            Apply for Membership
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
