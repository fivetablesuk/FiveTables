import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Received | Poolhouse",
  description: "Thank you for booking Poolhouse with Five Tables.",
};

export default function PoolhouseSuccessPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16 text-center text-foreground">
      <p className="eyebrow mb-5">Poolhouse</p>
      <h1 className="mb-4 font-serif text-[clamp(2rem,6vw,3rem)] font-normal leading-tight text-foreground">
        Thank you
      </h1>
      <div className="mx-auto mb-6 h-px w-12 bg-primary" aria-hidden />
      <p className="mx-auto mb-10 max-w-md text-sm font-light leading-7 text-muted-foreground">
        Your payment has been received. We look forward to welcoming you on
        Saturday 5th December 2026 at Liverpool Street.
      </p>
      <Link href="/" className="btn-outline-gold">
        Return Home
      </Link>
    </div>
  );
}
