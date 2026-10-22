import { NextResponse } from "next/server";
import { sendPoolhouseBookingEmails } from "@/lib/event-email";

/**
 * Manual test: GET /api/test/poolhouse-email?to=you@email.com
 * Sends the same booking emails used after Stripe payment.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const to = searchParams.get("to")?.trim();

  if (!to) {
    return NextResponse.json(
      { ok: false, message: "Add ?to=your@email.com" },
      { status: 400 },
    );
  }

  try {
    await sendPoolhouseBookingEmails({
      name: "Test Guest",
      email: to,
      amountLabel: "£89",
    });
    return NextResponse.json({
      ok: true,
      message: `Booking emails sent to ${to} and admin inbox.`,
    });
  } catch (error) {
    console.error("[test.poolhouse-email]", error);
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Send failed",
      },
      { status: 500 },
    );
  }
}
