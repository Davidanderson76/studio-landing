"use server";

import { Resend } from "resend";
import { canSubmit } from "../server/utils/rateLimiter";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData, ip: string) {
  // Honeypot field (bots often fill this)
  const honeypot = formData.get("website") as string;
  if (honeypot) return; // silently ignore spam

  // Rate limiting per IP
  if (!canSubmit(ip)) {
    throw new Error("Too many submissions, please try again later.");
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  await resend.emails.send({
    from: "Studio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New Studio Inquiry from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
}
