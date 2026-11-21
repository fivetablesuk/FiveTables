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
        {/* Hero */}
        <section className="px-6 pb-16 pt-32 text-center sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-[42rem]">
            <p className="mb-6 text-[0.68rem] font-light tracking-[0.38em] text-primary uppercase">
              The Five Tables
            </p>
            <h1 className="mb-6 font-serif text-[clamp(2.25rem,6.5vw,3.5rem)] font-normal leading-[1.15] text-foreground">
              Five Sectors. One Community.
            </h1>
            <div className="mx-auto mb-6 h-px w-10 bg-primary" aria-hidden />
            <p className="mx-auto max-w-[32rem] text-[0.9375rem] font-light leading-7 text-muted-foreground">
              Every member has a professional home within Five Tables and access
              to a wider cross-sector community.
            </p>
          </div>
        </section>

        {/* Sector list — shared column grid so every title lines up */}
        <section className="px-6 md:px-10">
          <div className="mx-auto max-w-[40rem]">
            <div className="border-t border-primary/20">
              {TABLES.map((table) => (
                <article
                  key={table.numeral}
                  className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-start gap-x-6 border-b border-primary/20 py-11 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-8 sm:py-12"
                >
                  <span className="pt-0.5 text-left font-serif text-[2.75rem] font-light leading-none text-primary sm:text-[3.25rem]">
                    {table.numeral}
                  </span>
                  <div className="min-w-0 pt-2 text-left sm:pt-3">
                    <h2 className="mb-2.5 font-serif text-[1.35rem] font-normal leading-snug text-primary sm:text-[1.5rem]">
                      {table.name}
                    </h2>
                    <p className="font-serif text-[0.9rem] font-light italic leading-7 text-muted-foreground">
                      {table.roles}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The Exchange */}
        <section className="px-6 py-20 text-center sm:py-24 md:py-28">
          <div className="mx-auto max-w-[36rem]">
            <p className="mb-6 text-[0.68rem] font-light tracking-[0.38em] text-primary uppercase">
              The Exchange
            </p>
            <h2 className="mb-5 font-serif text-[clamp(2rem,5vw,2.75rem)] font-normal leading-[1.15] text-foreground">
              Five Tables. One Centre.
            </h2>
            <p className="mx-auto mb-6 max-w-[30rem] font-serif text-[1.05rem] italic leading-relaxed text-foreground/90">
              Your Table is where you begin. The Exchange is where everyone
              meets.
            </p>
            <p className="mx-auto mb-10 max-w-[32rem] text-[0.9375rem] font-light leading-7 text-muted-foreground">
              The Exchange is the shared centre of Five Tables — where members
              from every sector meet, connect and build relationships beyond
              their professional home.
            </p>
            <p className="mx-auto mb-10 text-[0.68rem] font-light tracking-[0.22em] text-foreground uppercase">
              Your table is your professional home.
              <br className="hidden sm:block" />{" "}
              Five Tables is your wider community.
            </p>
            <Link
              href="/founding-table-hosts"
              className="inline-flex items-center gap-2 text-[0.7rem] font-light tracking-[0.22em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Meet Our Founding Table Hosts
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* Apply */}
        <section className="px-6 pb-20 text-center sm:pb-24">
          <Link href="/#early-access" className="btn-gold min-w-[240px]">
            Apply for Membership
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
