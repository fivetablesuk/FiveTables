import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Poolhouse | Private Event",
  description:
    "Poolhouse — an evening of good company, friendly competition and exceptional games. Saturday 5th December 2026, Liverpool Street. £89.",
};

const STRIPE_PAYMENT_URL =
  process.env.NEXT_PUBLIC_POOLHOUSE_PAYMENT_LINK ??
  "https://buy.stripe.com/4gM4gy0sFgTrgjK9Jqes00G";

const DETAILS = [
  {
    label: "Saturday 5th December 2026",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3.5 9.5h17M8 3.5v3M16 3.5v3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "8:00 PM",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M12 8v4.25L15 15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Liverpool Street",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="10.8" r="2.1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "Price: £89",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M5.5 6.5v3.8c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4V6.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5.5 10.3v3.8c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4v-3.8"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5.5 14.1v3.4c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4v-3.4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
] as const;

const INCLUSIONS = [
  {
    label: "Private suite access",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M12 3.5 14.1 8l4.9.5-3.7 3.3 1.1 4.8L12 14.4 7.6 16.6l1.1-4.8L5 8.5 9.9 8 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "AI-powered pool experience",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M5 18.5 12 5.5l7 13H5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="14.2" r="1.15" fill="currentColor" />
        <circle cx="9.2" cy="16.3" r="1.05" fill="currentColor" />
        <circle cx="14.8" cy="16.3" r="1.05" fill="currentColor" />
        <circle cx="7.2" cy="18.1" r="0.95" fill="currentColor" />
        <circle cx="12" cy="18.1" r="0.95" fill="currentColor" />
        <circle cx="16.8" cy="18.1" r="0.95" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Events games host",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="9" cy="8.2" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15.4" cy="8.6" r="1.9" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M4.8 18.5c.4-3 2.3-4.6 4.2-4.6s3.8 1.6 4.2 4.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M13.2 14.2c1.2-.5 2.6-.3 3.8.8.9.9 1.4 2.1 1.6 3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Small nibbles and welcome drink included",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M7.5 4.5h9L12 12.8 7.5 4.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.8V19M9.2 19.5h5.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8.2 7.8h7.6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export default function PoolhouseEventPage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-black text-foreground">
      <Image
        src="/images/poolhouse.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/72 to-black/88"
        aria-hidden
      />

      <main className="relative z-10 mx-auto flex min-h-svh w-full max-w-md flex-col px-6 pb-10 pt-10 sm:max-w-lg sm:px-8 sm:pt-12">
        <header className="mb-10 text-center sm:mb-12">
          <p className="font-serif text-[0.95rem] tracking-[0.42em] text-foreground uppercase sm:text-[1.05rem]">
            Five Tables
          </p>
          <div className="mx-auto mt-4 h-px w-10 bg-primary" aria-hidden />
        </header>

        <section className="mb-9 text-center sm:mb-10">
          <p className="eyebrow mb-4">Private Event</p>
          <h1 className="font-serif text-[clamp(2.6rem,12vw,3.75rem)] font-normal leading-none tracking-[0.08em] text-foreground uppercase">
            Poolhouse
          </h1>
          <p className="mx-auto mt-5 max-w-xs font-serif text-[0.95rem] italic leading-relaxed text-foreground/90 sm:max-w-sm sm:text-base">
            An evening of good company, friendly competition and exceptional
            games.
          </p>
        </section>

        <ul className="mb-9 space-y-4 sm:mb-10 sm:space-y-5">
          {DETAILS.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-4 text-[0.92rem] font-light tracking-[0.02em] text-foreground sm:text-[0.98rem]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center text-primary">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <section className="mb-10 border border-primary/55 px-5 py-6 sm:mb-12 sm:px-6 sm:py-7">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-primary/70" aria-hidden />
            <p className="shrink-0 font-sans text-[0.62rem] tracking-[0.28em] text-primary uppercase sm:text-[0.68rem] sm:tracking-[0.32em]">
              Your Place Includes
            </p>
            <div className="h-px flex-1 bg-primary/70" aria-hidden />
          </div>

          <ul className="space-y-4 sm:space-y-5">
            {INCLUSIONS.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-4 text-[0.9rem] font-light leading-snug text-foreground sm:text-[0.95rem]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-primary">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-auto pt-2">
          <a
            href={STRIPE_PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full"
          >
            Proceed to Payment
          </a>
        </div>
      </main>
    </div>
  );
}
