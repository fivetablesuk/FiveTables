import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  EXPERIENCES,
  getExperience,
  getExperienceSlugs,
} from "@/lib/experiences";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return { title: "Experience" };

  return {
    title: experience.title,
    description: experience.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) notFound();

  const index = EXPERIENCES.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? EXPERIENCES[index - 1] : null;
  const next =
    index >= 0 && index < EXPERIENCES.length - 1
      ? EXPERIENCES[index + 1]
      : null;

  const hero = experience.heroImage ?? experience.image;
  const ctaHref = experience.ctaHref ?? "/#early-access";
  const ctaLabel = experience.ctaLabel ?? "Join the Waitlist";

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[48svh] items-end overflow-hidden sm:min-h-[54svh]">
          <Image
            src={hero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black/92"
            aria-hidden
          />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 md:px-10">
            <p className="eyebrow mb-4">{experience.monthLabel}</p>
            <h1 className="max-w-3xl font-serif text-[clamp(1.85rem,6vw,3.25rem)] font-normal leading-[1.1] tracking-[0.04em] text-foreground uppercase">
              {experience.title}
            </h1>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
            <div>
              <div className="mb-6 h-px w-12 bg-primary" aria-hidden />
              <p className="mb-6 text-[0.9375rem] font-light leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {experience.description}
              </p>
              <p className="text-[0.8125rem] font-light leading-6 text-muted-foreground sm:text-[0.875rem] sm:leading-7">
                {experience.summary}
              </p>
            </div>

            <aside className="border border-primary/60 px-5 py-6 sm:px-6 sm:py-7">
              <p className="eyebrow mb-5">Details</p>
              {experience.details?.length ? (
                <ul className="mb-8 space-y-3">
                  {experience.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-[0.875rem] font-light tracking-[0.02em] text-foreground"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link href={ctaHref} className="btn-gold w-full">
                {ctaLabel}
              </Link>
              <Link
                href="/experiences"
                className="mt-4 block text-center text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                Back to Experiences
              </Link>
            </aside>
          </div>
        </section>

        <section className="border-t border-border/60 px-4 py-10 sm:px-6 sm:py-12 md:px-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <Link
                href={`/experiences/${previous.slug}`}
                className="text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                ← {previous.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/experiences/${next.slug}`}
                className="text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-primary sm:text-right"
              >
                {next.title} →
              </Link>
            ) : null}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
