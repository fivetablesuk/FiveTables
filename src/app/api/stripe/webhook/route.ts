import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendPoolhouseBookingEmails } from "@/lib/event-email";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set.");
  return new Stripe(key);
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { ok: false, message: "STRIPE_WEBHOOK_SECRET is not set." },
      { status: 500 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ ok: false, message: "Missing signature." }, { status: 400 });
  }

  const body = await request.text();
  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("[stripe.webhook] signature error", error);
    return NextResponse.json({ ok: false, message: "Invalid signature." }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    const email =
      session.customer_details?.email ??
      session.customer_email ??
      undefined;
    const name = session.customer_details?.name ?? "Guest";

    if (email) {
      const amount =
        typeof session.amount_total === "number"
          ? `£${(session.amount_total / 100).toFixed(0)}`
          : "£89";

      try {
        await sendPoolhouseBookingEmails({
          name,
          email,
          amountLabel: amount,
        });
      } catch (error) {
        console.error("[stripe.webhook] email error", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
