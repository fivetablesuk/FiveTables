import type { WaitlistEmailPayload } from "@/lib/email";

const GOLD = "#C5A059";
const IVORY = "#F5F0E8";
const MUTED = "#C8C2B6";
const BLACK = "#000000";
const CARD = "#0A0A0A";
const BORDER = "rgba(197, 160, 89, 0.28)";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function emailShell(options: {
  preheader: string;
  eyebrow: string;
  title: string;
  bodyHtml: string;
}) {
  const { preheader, eyebrow, title, bodyHtml } = options;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BLACK};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BLACK};margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:${CARD};border:1px solid ${BORDER};">
          <tr>
            <td style="padding:36px 32px 28px 32px;text-align:center;">
              <p style="margin:0 0 18px 0;font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;font-weight:400;letter-spacing:0.38em;text-transform:uppercase;color:${GOLD};">
                Five Tables
              </p>
              <div style="width:40px;height:1px;background-color:${GOLD};margin:0 auto 22px auto;"></div>
              <p style="margin:0 0 10px 0;font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${GOLD};">
                ${escapeHtml(eyebrow)}
              </p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',Times,serif;font-size:28px;font-weight:400;line-height:1.2;letter-spacing:0.02em;color:${IVORY};">
                ${escapeHtml(title)}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 36px 32px;font-family:Jost,Helvetica,Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.75;color:${MUTED};">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;border-top:1px solid ${BORDER};text-align:center;">
              <p style="margin:0 0 6px 0;font-family:Georgia,'Times New Roman',Times,serif;font-size:15px;letter-spacing:0.28em;text-transform:uppercase;color:${IVORY};">
                Five Tables
              </p>
              <p style="margin:0;font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${MUTED};">
                London · Est. 2026
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function applicantConfirmationHtml(
  name: string,
): string {
  return emailShell({
    preheader:
      "Your early access request has been received and will be reviewed.",
    eyebrow: "Early Access",
    title: "Thank you for your interest",
    bodyHtml: `
      <p style="margin:0 0 16px 0;color:${IVORY};">Dear ${escapeHtml(name)},</p>
      <p style="margin:0 0 16px 0;">
        Thank you for your interest in Five Tables — an invitation-led private
        community for Black professionals in London.
      </p>
      <p style="margin:0 0 16px 0;">
        Your early access request has been received and will be reviewed.
        We will be in touch if a place becomes available.
      </p>
      <p style="margin:28px 0 0 0;font-style:italic;font-family:Georgia,'Times New Roman',Times,serif;color:${IVORY};">
        A seat is curated, not simply purchased.
      </p>
    `,
  });
}

export function adminNotificationHtml(
  payload: WaitlistEmailPayload & { sectorLabel: string },
): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-family:Jost,Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${GOLD};width:120px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-family:Jost,Helvetica,Arial,sans-serif;font-size:14px;font-weight:300;color:${IVORY};">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;

  return emailShell({
    preheader: `New waitlist request from ${payload.name}`,
    eyebrow: "Private notice",
    title: "New waitlist request",
    bodyHtml: `
      <p style="margin:0 0 20px 0;">
        A new early access request has been received for Five Tables.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${BORDER};">
        ${row("Name", payload.name)}
        ${row("Email", payload.email)}
        ${row("Phone", payload.phone)}
        ${row("Sector", payload.sectorLabel)}
        ${row("Referred by", payload.referredBy?.trim() || "—")}
      </table>
    `,
  });
}

export function applicantConfirmationText(name: string) {
  return [
    `Dear ${name},`,
    "",
    "Thank you for your interest in Five Tables — an invitation-led private community for Black professionals in London.",
    "",
    "Your early access request has been received and will be reviewed.",
    "We will be in touch if a place becomes available.",
    "",
    "A seat is curated, not simply purchased.",
    "",
    "Five Tables",
    "London · Est. 2026",
  ].join("\n");
}

export function adminNotificationText(
  payload: WaitlistEmailPayload & { sectorLabel: string },
) {
  return [
    "A new early access request has been received.",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Sector: ${payload.sectorLabel}`,
    `Referred by: ${payload.referredBy?.trim() || "—"}`,
    "",
    "— Five Tables",
  ].join("\n");
}
