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
    roles: "Solicitors · Barristers · In-House Counsel · Legal Professionals",
  },
  {
    numeral: "III",
    name: "Banking, Finance & FinTech",
    roles: "Bankers · Analysts · Advisers · FinTech Leaders",
  },
  {
    numeral: "IV",
    name: "Technology & Engineering",
    roles: "Engineers · Founders · Product Leaders · Technologists",
  },
  {
    numeral: "V",
    name: "Business & Leadership",
    roles: "Founders · Executives · Entrepreneurs · Business Leaders",
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

        <section className="border-t border-border/60 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl space-y-12 sm:space-y-14">
            {TABLES.map((table) => (
              <article
                key={table.numeral}
                className="grid grid-cols-[auto_1fr] items-start gap-5 sm:gap-8"
              >
                <span className="font-serif text-[2.5rem] font-light leading-none text-primary sm:text-[3.25rem]">
                  {table.numeral}
                </span>
                <div className="pt-1 sm:pt-2">
                  <h2 className="mb-2 font-serif text-[1.35rem] font-normal text-foreground sm:text-[1.65rem]">
                    {table.name}
                  </h2>
                  <p className="text-[0.8125rem] font-light leading-6 text-muted-foreground sm:text-[0.875rem] sm:leading-7">
                    {table.roles}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Founding Table Hosts</p>
            <h2 className="mb-4 font-serif text-[clamp(1.5rem,4vw,2.25rem)] font-normal text-foreground">
              Stewards of leadership across five sectors.
            </h2>
            <div className="mx-auto mb-8 h-px w-10 bg-primary" aria-hidden />
            <Link href="/founding-table-hosts" className="btn-outline-gold">
              Meet the Hosts
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
