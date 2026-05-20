"use server";

import { Resend } from "resend";
import { siteProfile } from "@/content/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const RECIPIENT = process.env.CONTACT_TO ?? siteProfile.email;
const FROM =
  process.env.RESEND_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Server-side validation
  if (!name || name.length < 2) {
    return { status: "error", message: "Please enter your name." };
  }
  if (!email || !validateEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return { status: "error", message: "Message must be at least 10 characters." };
  }
  if (message.length > 2000) {
    return { status: "error", message: "Message is too long (max 2000 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      status: "error",
      message: "Email service is not configured. Please reach out directly at " + RECIPIENT,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:monospace;max-width:600px;padding:24px;background:#0a0a0a;color:#e4e4e7;border:1px solid #10b981;">
          <p style="color:#10b981;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 20px">New portfolio enquiry</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#71717a;width:80px">From</td><td style="padding:6px 0">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#71717a">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#34d399">${email}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #10b98133;margin:16px 0"/>
          <p style="white-space:pre-wrap;line-height:1.7;margin:0">${message.replace(/</g, "&lt;")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        status: "error",
        message: "Could not send right now. Email me directly at " + RECIPIENT,
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      status: "error",
      message: "Failed to send message. Please try emailing directly at " + RECIPIENT,
    };
  }
}
