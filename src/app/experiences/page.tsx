import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EXPERIENCES } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "A year of exceptional experiences — from refined tastings and competitive pursuits to outdoor adventures with Five Tables.",
};

export default function ExperiencesPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[52svh] items-end overflow-hidden sm:min-h-[58svh] md:min-h-[64svh]">
          <Image
            src="/images/poolhouse.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/92"
            aria-hidden
          />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-12 pt-28 sm:px-6 sm:pb-14 sm:pt-32 md:px-10 md:pb-16">
            <p className="eyebrow mb-4 sm:mb-5">Experiences Calendar</p>
            <h1 className="mb-4 max-w-3xl font-serif text-[clamp(2rem,7vw,3.75rem)] font-normal leading-[1.08] tracking-[0.04em] text-foreground uppercase">
              A Year of Exceptional Experiences
            </h1>
            <div className="mb-5 h-px w-12 bg-primary sm:mb-6" aria-hidden />
            <p className="max-w-xl text-[0.8125rem] font-light leading-6 text-muted-foreground sm:text-[0.875rem] sm:leading-7">
              From refined tastings and competitive pursuits to outdoor
              adventures, our curated calendar brings members together through
              unforgettable experiences.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {EXPERIENCES.map((experience) => (
              <article key={experience.slug} className="group flex flex-col">
                <Link
                  href={`/experiences/${experience.slug}`}
                  className="relative mb-5 block aspect-[16/11] overflow-hidden border border-primary/70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <Image
                    src={experience.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <p className="mb-2 text-[0.62rem] font-light tracking-[0.22em] text-primary uppercase">
                  {experience.monthLabel}
                </p>
                <h2 className="mb-3 font-serif text-[1.15rem] font-normal leading-snug tracking-[0.04em] text-foreground uppercase sm:text-[1.25rem]">
                  <Link
                    href={`/experiences/${experience.slug}`}
                    className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {experience.title}
                  </Link>
                </h2>
                <p className="mb-5 flex-1 text-[0.8125rem] font-light leading-6 text-muted-foreground">
                  {experience.summary}
                </p>
                <div>
                  <Link
                    href={`/experiences/${experience.slug}`}
                    className="btn-outline-gold px-4 py-2"
                  >
                    View Experience
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-border/60">
          <Image
            src="/images/hero-dining.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
            <p className="eyebrow mb-4 sm:mb-5">An Invitation to Belong</p>
            <h2 className="mb-4 font-serif text-[clamp(1.75rem,5vw,2.75rem)] font-normal leading-[1.15] tracking-[0.03em] text-foreground uppercase">
              More Than Events.
              <br />
              A Remarkable Community.
            </h2>
            <div className="mx-auto mb-5 h-px w-12 bg-primary sm:mb-6" aria-hidden />
            <p className="mx-auto mb-8 max-w-lg text-[0.8125rem] font-light leading-6 text-muted-foreground sm:mb-10 sm:text-[0.875rem] sm:leading-7">
              Discover a private community built around exceptional people,
              meaningful connections and unforgettable experiences.
            </p>
            <Link href="/#early-access" className="btn-outline-gold">
              Join the Waitlist
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
