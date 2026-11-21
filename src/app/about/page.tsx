import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "The calibre of our community — an invitation-led private community for Black professionals in London.",
};

const CULTURE = [
  "Discretion",
  "Respect",
  "Warmth",
  "Authenticity",
  "Quality over quantity",
] as const;

const PRINCIPLES = [
  {
    title: "Time",
    body: "We honour presence. Evenings are unhurried, conversations are given room, and relationships are allowed to deepen with consistency.",
  },
  {
    title: "Access",
    body: "A carefully curated circle — across five sectors — where introduction, invitation and belonging are handled with care.",
  },
  {
    title: "Knowledge",
    body: "Insight travels through people. Shared experience and exceptional company open perspectives that cannot be found alone.",
  },
  {
    title: "Opportunity",
    body: "From quiet introductions to collective momentum — the community exists so members can grow, contribute and lead together.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden sm:min-h-[75svh] md:min-h-[80svh]">
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
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black"
            aria-hidden
          />
          <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-16 pt-24 text-center fade-up sm:px-6 sm:pb-20 sm:pt-28 md:px-10">
            <p className="eyebrow mb-5 sm:mb-6">Five Tables</p>
            <h1 className="mb-5 font-serif text-[clamp(2.1rem,7vw,3.75rem)] font-normal leading-[1.12] text-foreground sm:mb-6">
              The Calibre of Our Community.
            </h1>
            <p className="mx-auto max-w-xl text-[0.875rem] font-light leading-7 text-foreground/90 sm:text-base sm:leading-7">
              A private community for Black professionals — good company and
              exceptional conversation.
            </p>
          </div>
        </section>

        <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mx-auto mb-10 max-w-xl text-[0.875rem] font-light leading-7 text-muted-foreground sm:mb-12 sm:text-[0.9375rem] sm:leading-8">
              An invitation-led community across five sectors, with a
              professional home for every member and access to a wider
              cross-sector community.
            </p>
            <Link
              href="/founding-table-hosts"
              className="inline-block text-[0.65rem] font-light tracking-[0.22em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.7rem] sm:tracking-[0.28em]"
            >
              Meet the Founding Table Hosts
              <span
                className="mx-auto mt-2 block h-px w-full bg-primary"
                aria-hidden
              />
            </Link>
          </div>
        </section>

        <section className="border-t border-border/60 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center sm:mb-12">
              <p className="eyebrow mb-3 sm:mb-4">Our Culture</p>
              <h2 className="font-serif text-[clamp(1.65rem,5vw,2.5rem)] font-normal leading-[1.15] text-foreground">
                What we hold at the centre
              </h2>
              <div className="mx-auto mt-4 h-px w-10 bg-primary" aria-hidden />
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-4">
              {CULTURE.map((item) => (
                <li
                  key={item}
                  className="border border-border/70 px-4 py-7 text-center"
                >
                  <p className="text-[0.7rem] font-light tracking-[0.18em] text-primary uppercase sm:text-[0.72rem]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border/60 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center sm:mb-12">
              <p className="eyebrow mb-3 sm:mb-4">Our Principles</p>
              <h2 className="font-serif text-[clamp(1.65rem,5vw,2.5rem)] font-normal leading-[1.15] text-foreground">
                Four pillars
              </h2>
              <div className="mx-auto mt-4 h-px w-10 bg-primary" aria-hidden />
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6">
              {PRINCIPLES.map((principle, index) => (
                <article
                  key={principle.title}
                  className="text-center lg:text-left"
                >
                  <p className="mb-3 font-serif text-[1.75rem] font-light text-primary sm:text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div
                    className="mx-auto mb-4 h-px w-8 bg-primary lg:mx-0"
                    aria-hidden
                  />
                  <h3 className="mb-3 font-serif text-xl font-normal text-foreground sm:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="text-[0.8125rem] font-light leading-6 text-muted-foreground sm:text-[0.875rem] sm:leading-7">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Five Sectors. One Community.</p>
            <h2 className="mb-4 font-serif text-[clamp(1.65rem,5vw,2.5rem)] font-normal leading-[1.15] text-foreground">
              A seat is curated, not simply purchased.
            </h2>
            <div className="mx-auto mb-8 h-px w-10 bg-primary" aria-hidden />
            <Link href="/#early-access" className="btn-gold">
              Join the Waitlist
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
