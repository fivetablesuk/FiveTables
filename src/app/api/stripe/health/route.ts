import { NextResponse } from "next/server";

/** Safe diagnostics — shows which env vars exist (not their values). */
export async function GET() {
  return NextResponse.json({
    ok: true,
    stripeSecretKey: Boolean(process.env.STRIPE_SECRET_KEY),
    stripeWebhookSecret: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
    resendApiKey: Boolean(process.env.RESEND_API_KEY),
    emailFrom: process.env.EMAIL_FROM ?? null,
    notifyEmail: process.env.WAITLIST_NOTIFY_EMAIL ?? null,
    stripeKeyPrefix: process.env.STRIPE_SECRET_KEY?.slice(0, 8) ?? null,
  });
}
