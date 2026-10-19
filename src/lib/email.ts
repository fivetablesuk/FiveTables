import { Resend } from "resend";
import { SECTORS } from "@/lib/sectors";

export type WaitlistEmailPayload = {
  name: string;
  email: string;
  phone: string;
  sector: string;
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }
  return new Resend(apiKey);
}

function getFromAddress() {
  return (
    process.env.EMAIL_FROM ?? "Five Tables <onboarding@resend.dev>"
  );
}

function getAdminInbox() {
  return process.env.WAITLIST_NOTIFY_EMAIL ?? "fivetablesuk@gmail.com";
}

function sectorLabel(sector: string) {
  return SECTORS.find((item) => item.value === sector)?.label ?? sector;
}

export async function sendWaitlistEmails(payload: WaitlistEmailPayload) {
  const resend = getResend();
  const from = getFromAddress();
  const adminTo = getAdminInbox();
  const sector = sectorLabel(payload.sector);

  const adminResult = await resend.emails.send({
    from,
    to: adminTo,
    replyTo: payload.email,
    subject: `New waitlist request — ${payload.name}`,
    text: [
      "A new early access request has been received.",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Sector: ${sector}`,
      "",
      "— Five Tables",
    ].join("\n"),
    html: `
      <div style="font-family: Georgia, 'Times New Roman', serif; color: #111; line-height: 1.6;">
        <p style="letter-spacing: 0.2em; text-transform: uppercase; font-size: 12px; color: #C5A059;">Five Tables</p>
        <h1 style="font-weight: 400; font-size: 24px;">New waitlist request</h1>
        <p>A new early access request has been received.</p>
        <table style="border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 6px 16px 6px 0; color: #666;">Name</td><td>${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; color: #666;">Email</td><td>${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; color: #666;">Phone</td><td>${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; color: #666;">Sector</td><td>${escapeHtml(sector)}</td></tr>
        </table>
      </div>
    `,
  });

  const applicantResult = await resend.emails.send({
    from,
    to: payload.email,
    subject: "Your Five Tables early access request",
    text: [
      `Dear ${payload.name},`,
      "",
      "Thank you for your interest in Five Tables.",
      "",
      "Your early access request has been received and will be reviewed.",
      "We will be in touch if a place becomes available.",
      "",
      "Five Tables",
      "London",
    ].join("\n"),
    html: `
      <div style="font-family: Georgia, 'Times New Roman', serif; color: #111; line-height: 1.7; max-width: 560px;">
        <p style="letter-spacing: 0.28em; text-transform: uppercase; font-size: 12px; color: #C5A059;">Five Tables</p>
        <h1 style="font-weight: 400; font-size: 26px; margin: 12px 0 20px;">Thank you for your interest</h1>
        <p>Dear ${escapeHtml(payload.name)},</p>
        <p>Your early access request has been received and will be reviewed. We will be in touch if a place becomes available.</p>
        <p style="margin-top: 28px; color: #666; font-size: 14px;">Five Tables · London</p>
      </div>
    `,
  });

  return { adminResult, applicantResult };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
