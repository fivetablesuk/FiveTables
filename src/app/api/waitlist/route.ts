import { NextResponse } from "next/server";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { sendWaitlistEmails } from "@/lib/email";
import { SECTORS } from "@/lib/sectors";

const sectorValues = SECTORS.map((sector) => sector.value) as [
  (typeof SECTORS)[number]["value"],
  ...(typeof SECTORS)[number]["value"][],
];

const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email is too long.")
    .transform((value) => value.toLowerCase()),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long.")
    .regex(/^[+\d][\d\s().-]{6,}$/, "Please enter a valid phone number."),
  sector: z.enum(sectorValues, {
    error: "Please select your sector.",
  }),
  referredBy: z
    .string()
    .trim()
    .min(2, "Please enter who referred you.")
    .max(120, "Referral name is too long."),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }

    return NextResponse.json(
      { ok: false, errors: fieldErrors },
      { status: 400 },
    );
  }

  try {
    const existing = await db
      .select({ id: waitlistEntries.id })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.email, parsed.data.email))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          errors: {
            email: "This email is already on the waitlist.",
          },
        },
        { status: 409 },
      );
    }

    await db.insert(waitlistEntries).values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      sector: parsed.data.sector,
      referredBy: parsed.data.referredBy,
    });

    try {
      await sendWaitlistEmails({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        sector: parsed.data.sector,
        referredBy: parsed.data.referredBy,
      });
    } catch (emailError) {
      // Application is already saved — do not fail the request if email fails.
      console.error("[waitlist] email error", emailError);
    }

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for your interest in Five Tables. Your early access request has been received.",
    });
  } catch (error) {
    console.error("[waitlist] database error", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to save your request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
