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

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden sm:min-h-[78svh] md:min-h-[85svh]">
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
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black"
            aria-hidden
          />
          <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-10 pt-24 text-center fade-up sm:px-6 sm:pb-12 sm:pt-28 md:px-10">
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

        <section className="-mt-px bg-background px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 md:px-10 md:pb-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mx-auto mb-12 max-w-xl text-[0.875rem] font-light leading-7 text-muted-foreground sm:mb-14 sm:text-[0.9375rem] sm:leading-8">
              An invitation-led community across five sectors, with a
              professional home for every member and access to a wider
              cross-sector community.
            </p>
            <Link
              href="/founding-table-hosts"
              className="inline-flex flex-col items-center text-[0.65rem] font-light tracking-[0.22em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.7rem] sm:tracking-[0.28em]"
            >
              Meet the Founding Table Hosts
              <span className="mt-2 h-px w-full bg-primary" aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
