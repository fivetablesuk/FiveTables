import type { Metadata } from "next";
import Image from "next/image";
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

const HOSTS = [
  {
    name: "Emmanuel Asuquo",
    role: "Financial Adviser",
    image: "/images/hosts/emmanuel-asuquo.png",
  },
  {
    name: "Tunde",
    role: null,
    image: "/images/hosts/tunde.jpg",
  },
  {
    name: "Karl Williams",
    role: null,
    image: "/images/hosts/karl-williams.jpg",
  },
  {
    name: "Akin Laditan",
    role: null,
    image: "/images/hosts/akin-laditan.jpg",
  },
  {
    name: "Samson Akanbi",
    role: null,
    image: "/images/hosts/samson-akanbi.jpg",
  },
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
                  <p className="mb-4 max-w-40 text-[0.62rem] font-light leading-4 tracking-[0.1em] text-muted-foreground uppercase">
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

        <section className="border-b border-border/60 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-3 text-center sm:mb-4">The Hosts</p>
            <h2 className="mb-3 text-center font-serif text-[clamp(1.5rem,5vw,2.25rem)] font-normal leading-[1.15] text-foreground">
              Founding Table Hosts
            </h2>
            <div className="mx-auto mb-10 h-px w-10 bg-primary sm:mb-12" aria-hidden />

            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
              {HOSTS.map((host) => (
                <li key={host.name} className="flex flex-col items-center text-center">
                  <div className="relative mb-5 aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-border/70 sm:mb-6">
                    <Image
                      src={host.image}
                      alt={host.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 280px"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">
                    {host.name}
                  </h3>
                  {host.role ? (
                    <>
                      <div className="mx-auto my-3 h-px w-8 bg-primary" aria-hidden />
                      <p className="text-[0.7rem] font-light tracking-[0.18em] text-primary uppercase">
                        {host.role}
                      </p>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mx-auto max-w-md font-serif text-[0.95rem] italic leading-relaxed text-foreground/90">
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
