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
    <div className="flex min-h-full flex-1 flex-col bg-black text-foreground">
      <SiteHeader />

      <main>
        <section className="px-6 pb-[4.5rem] pt-[8.5rem] text-center sm:pb-24 sm:pt-40">
          <div className="mx-auto max-w-[44rem]">
            <p className="mb-7 text-[0.65rem] font-normal tracking-[0.42em] text-primary uppercase">
              The Five Tables
            </p>
            <h1 className="mb-7 font-serif text-[clamp(2.35rem,6vw,3.6rem)] font-normal leading-[1.12] text-[#F5F0E8]">
              Five Sectors. One Community.
            </h1>
            <div className="mx-auto mb-7 h-px w-11 bg-primary" aria-hidden />
            <p className="mx-auto max-w-[34rem] text-[0.95rem] font-light leading-[1.75] text-[#C8C2B6]">
              Every member has a professional home within Five Tables and access
              to a wider cross-sector community.
            </p>
          </div>
        </section>

        <section className="px-6">
          <div className="mx-auto w-full max-w-[38rem]">
            {TABLES.map((table) => (
              <article
                key={table.numeral}
                className="flex items-start gap-7 border-t border-white/[0.08] py-12 first:border-t sm:gap-10 sm:py-14"
              >
                <span className="w-10 shrink-0 font-serif text-[2.85rem] font-light leading-none text-primary sm:w-12 sm:text-[3.35rem]">
                  {table.numeral}
                </span>
                <div className="min-w-0 flex-1 pt-1.5 sm:pt-2.5">
                  <h2 className="mb-3 font-serif text-[1.4rem] font-normal leading-none tracking-[0.01em] text-primary sm:text-[1.55rem]">
                    {table.name}
                  </h2>
                  <p className="font-serif text-[0.92rem] font-light italic leading-[1.7] text-[#9A948A]">
                    {table.roles}
                  </p>
                </div>
              </article>
            ))}
            <div className="border-t border-white/[0.08]" aria-hidden />
          </div>
        </section>

        <section className="px-6 py-24 text-center sm:py-28">
          <div className="mx-auto max-w-[38rem]">
            <p className="mb-7 text-[0.65rem] font-normal tracking-[0.42em] text-primary uppercase">
              The Exchange
            </p>
            <h2 className="mb-6 font-serif text-[clamp(2.1rem,5vw,2.85rem)] font-normal leading-[1.12] text-[#F5F0E8]">
              Five Tables. One Centre.
            </h2>
            <p className="mx-auto mb-6 max-w-[30rem] font-serif text-[1.05rem] italic leading-relaxed text-[#F5F0E8]/90">
              Your Table is where you begin. The Exchange is where everyone
              meets.
            </p>
            <p className="mx-auto mb-10 max-w-[34rem] text-[0.95rem] font-light leading-[1.75] text-[#C8C2B6]">
              The Exchange is the shared centre of Five Tables — where members
              from every sector meet, connect and build relationships beyond
              their professional home.
            </p>
            <p className="mx-auto mb-10 text-[0.65rem] font-normal tracking-[0.28em] text-[#F5F0E8] uppercase">
              Your table is your professional home.
              <br />
              Five Tables is your wider community.
            </p>
            <Link
              href="/founding-table-hosts"
              className="inline-flex items-center gap-2 text-[0.7rem] font-normal tracking-[0.24em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Meet Our Founding Table Hosts →
            </Link>
          </div>
        </section>

        <section className="px-6 pb-24 text-center sm:pb-28">
          <Link
            href="/#early-access"
            className="inline-flex min-w-[260px] items-center justify-center bg-primary px-8 py-3.5 text-[0.68rem] font-normal tracking-[0.28em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-primary hover:outline hover:outline-1 hover:outline-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Apply for Membership
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
