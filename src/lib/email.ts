import { Resend } from "resend";
import {
  adminNotificationHtml,
  adminNotificationText,
  applicantConfirmationHtml,
  applicantConfirmationText,
} from "@/lib/email-templates";
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
  return process.env.EMAIL_FROM ?? "Five Tables <hello@fivetables.co.uk>";
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
  const withSector = { ...payload, sectorLabel: sector };

  const adminResult = await resend.emails.send({
    from,
    to: adminTo,
    replyTo: payload.email,
    subject: `New waitlist request — ${payload.name}`,
    text: adminNotificationText(withSector),
    html: adminNotificationHtml(withSector),
  });

  const applicantResult = await resend.emails.send({
    from,
    to: payload.email,
    subject: "Your Five Tables early access request",
    text: applicantConfirmationText(payload.name),
    html: applicantConfirmationHtml(payload.name),
  });

  return { adminResult, applicantResult };
}
