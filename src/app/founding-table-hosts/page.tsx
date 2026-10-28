import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "The Founding Table Hosts",
  description:
    "Building the first five tables — founding hosts across medicine, law, finance, technology and business.",
};

const VALUES = [
  {
    title: "Curated",
    body: "Every seat is considered with care, intention and calibre.",
  },
  {
    title: "Inclusive",
    body: "A private community built for belonging, not exclusion for its own sake.",
  },
  {
    title: "Community",
    body: "Relationships that deepen through conversation and shared experience.",
  },
  {
    title: "Empowering",
    body: "Space for professionals to grow, contribute and lead with purpose.",
  },
  {
    title: "Engaging",
    body: "Evenings and gatherings designed for genuine exchange, not networking theatre.",
  },
  {
    title: "Trust",
    body: "Discretion, respect and reliability at the heart of every table.",
  },
] as const;

type Host = {
  name: string;
  role: string;
  image?: string;
};

type TableSection = {
  numeral: string;
  name: string;
  hosts: Host[];
};

const TABLE_SECTIONS: TableSection[] = [
  {
    numeral: "I",
    name: "Medicine & Dentistry",
    hosts: [
      {
        name: "Dr Kevin Dapaah",
        role: "Dentist",
        image: "/images/hosts/kevin-dapaah.jpg",
      },
    ],
  },
  {
    numeral: "II",
    name: "Law & Legal Services",
    hosts: [
      {
        name: "Dr Tunde Okewale OBE",
        role: "Barrister",
        image: "/images/hosts/karl-williams.png",
      },
      {
        name: "Karl Williams",
        role: "Senior Associate Solicitor",
        image: "/images/hosts/tunde-okewale.jpg",
      },
    ],
  },
  {
    numeral: "III",
    name: "Banking, Finance & FinTech",
    hosts: [
      {
        name: "Emmanuel Asuquo",
        role: "Financial Adviser",
        image: "/images/hosts/emmanuel-asuquo.jpg",
      },
      {
        name: "Akin Laditan",
        role: "Senior Business Analyst in FinTech",
        image: "/images/hosts/akin-laditan.jpg",
      },
    ],
  },
  {
    numeral: "IV",
    name: "Technology & Engineering",
    hosts: [],
  },
  {
    numeral: "V",
    name: "Business & Leadership",
    hosts: [
      {
        name: "Samson Akanbi",
        role: "CEO / Coach",
        image: "/images/hosts/samson-akanbi.jpg",
      },
    ],
  },
];

function HostRow({ host }: { host: Host }) {
  return (
    <article className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8 md:gap-10">
      <div className="relative aspect-[4/5] w-full max-w-[220px] shrink-0 border border-primary bg-black p-[3px] sm:max-w-[240px] md:max-w-[260px]">
        <div className="relative h-full w-full overflow-hidden border border-primary bg-black">
          {host.image ? (
            <Image
              src={host.image}
              alt={host.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 80vw, 260px"
            />
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center px-6 text-center">
              <p className="text-[0.65rem] font-light tracking-[0.22em] text-primary uppercase">
                Portrait to be added
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center text-center sm:text-left">
        <h3 className="font-serif text-[1.65rem] font-normal leading-tight text-foreground sm:text-[1.85rem]">
          {host.name}
        </h3>
        <div className="mx-auto my-3 h-px w-10 bg-primary sm:mx-0" aria-hidden />
        <p className="text-[0.72rem] font-light tracking-[0.16em] text-primary uppercase sm:text-[0.75rem]">
          {host.role}
        </p>
      </div>
    </article>
  );
}

export default function FoundingTableHostsPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border/60 px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-10 md:pb-16 md:pt-32">
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

          <div className="relative mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:grid-cols-3 sm:gap-8 lg:mt-16 lg:grid-cols-6 lg:gap-4">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center lg:text-left">
                <p className="mb-2 text-[0.62rem] font-light tracking-[0.18em] text-primary uppercase sm:tracking-[0.22em]">
                  {value.title}
                </p>
                <p className="text-[0.7rem] font-light leading-5 text-muted-foreground sm:text-[0.75rem] sm:leading-5">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {TABLE_SECTIONS.map((table) => (
          <section
            key={table.numeral}
            className="border-b border-border/60 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16"
          >
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center sm:mb-10 sm:text-left">
                <p className="eyebrow mb-2">
                  Table {table.numeral}
                </p>
                <h2 className="font-serif text-[clamp(1.5rem,4vw,2.15rem)] font-normal text-foreground">
                  {table.name}
                </h2>
              </div>

              {table.hosts.length > 0 ? (
                <div className="space-y-12 sm:space-y-14">
                  {table.hosts.map((host) => (
                    <HostRow key={host.name} host={host} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-sm font-light text-muted-foreground sm:text-left">
                  Host to be announced.
                </p>
              )}
            </div>
          </section>
        ))}

        <section className="px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Join Five Tables</p>
            <h2 className="mb-4 font-serif text-[clamp(1.65rem,5vw,2.5rem)] font-normal text-foreground">
              For you. For our community.
            </h2>
            <div className="mx-auto mb-6 h-px w-10 bg-primary" aria-hidden />
            <p className="mx-auto mb-8 max-w-md text-[0.8125rem] font-light leading-6 text-muted-foreground sm:text-[0.875rem] sm:leading-7">
              Early access is invitation-led. Share your details to be considered.
            </p>
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
