import { Resend } from "resend";

const GOLD = "#C5A059";
const IVORY = "#F5F0E8";
const MUTED = "#C8C2B6";
const BLACK = "#000000";
const CARD = "#0A0A0A";
const BORDER = "rgba(197, 160, 89, 0.28)";

export type PoolhouseBookingPayload = {
  name: string;
  email: string;
  amountLabel?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set.");
  return new Resend(apiKey);
}

function getFromAddress() {
  return process.env.EMAIL_FROM ?? "Five Tables <hello@fivetables.co.uk>";
}

function getAdminInbox() {
  return process.env.WAITLIST_NOTIFY_EMAIL ?? "fivetablesuk@gmail.com";
}

function shell(title: string, eyebrow: string, bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:${BLACK};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BLACK};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="100%" style="max-width:560px;background:${CARD};border:1px solid ${BORDER};">
          <tr>
            <td style="padding:36px 32px 24px;text-align:center;">
              <p style="margin:0 0 16px;font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.38em;text-transform:uppercase;color:${GOLD};">Five Tables</p>
              <div style="width:40px;height:1px;background:${GOLD};margin:0 auto 20px;"></div>
              <p style="margin:0 0 10px;font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${GOLD};">${escapeHtml(eyebrow)}</p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;color:${IVORY};">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 36px;font-family:Jost,Helvetica,Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.75;color:${MUTED};">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;border-top:1px solid ${BORDER};text-align:center;">
              <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:15px;letter-spacing:0.28em;text-transform:uppercase;color:${IVORY};">Five Tables</p>
              <p style="margin:0;font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${MUTED};">London · Est. 2026</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendPoolhouseBookingEmails(payload: PoolhouseBookingPayload) {
  const resend = getResend();
  const from = getFromAddress();
  const adminTo = getAdminInbox();
  const amount = payload.amountLabel ?? "£89";

  await resend.emails.send({
    from,
    to: adminTo,
    replyTo: payload.email,
    subject: `Poolhouse booking confirmed — ${payload.name}`,
    text: [
      "A Poolhouse booking has been paid.",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Amount: ${amount}`,
      `Event: Saturday 5 December · 8:00 PM · Liverpool Street`,
    ].join("\n"),
    html: shell(
      "Poolhouse booking paid",
      "Private Event",
      `<p style="margin:0 0 16px;color:${IVORY};">A new Poolhouse booking has been confirmed.</p>
       <p style="margin:0;">Name: ${escapeHtml(payload.name)}<br/>Email: ${escapeHtml(payload.email)}<br/>Amount: ${escapeHtml(amount)}<br/>Saturday 5 December · 8:00 PM · Liverpool Street</p>`,
    ),
  });

  await resend.emails.send({
    from,
    to: payload.email,
    subject: "Your Poolhouse booking with Five Tables",
    text: [
      `Dear ${payload.name},`,
      "",
      "Thank you for booking Poolhouse with Five Tables.",
      "",
      "Saturday 5 December",
      "8:00 PM",
      "Liverpool Street",
      `Amount paid: ${amount}`,
      "",
      "Your place includes private suite access, an AI-powered pool experience, an events games host, and small nibbles with a welcome drink.",
      "",
      "We look forward to welcoming you.",
      "",
      "Five Tables · London",
    ].join("\n"),
    html: shell(
      "Your place is confirmed",
      "Poolhouse",
      `<p style="margin:0 0 16px;color:${IVORY};">Dear ${escapeHtml(payload.name)},</p>
       <p style="margin:0 0 16px;">Thank you for booking Poolhouse with Five Tables.</p>
       <p style="margin:0 0 16px;color:${IVORY};">Saturday 5 December<br/>8:00 PM<br/>Liverpool Street<br/>Amount paid: ${escapeHtml(amount)}</p>
       <p style="margin:0 0 16px;">Your place includes private suite access, an AI-powered pool experience, an events games host, and small nibbles with a welcome drink.</p>
       <p style="margin:0;font-style:italic;font-family:Georgia,'Times New Roman',serif;color:${IVORY};">We look forward to welcoming you.</p>`,
    ),
  });
}
