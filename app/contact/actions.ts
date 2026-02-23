"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const firstName = formData.get("first_name") as string;
  const lastName = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const interest = formData.get("interest") as string;
  const message = formData.get("message") as string;

  if (!firstName || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "110 Solutions Website <no-reply@110solutions.com.au>",
      to: ["info@110solutions.com.au"],
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName} — ${interest || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#54c7c2;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#060a0e;margin:0;font-size:20px;font-weight:800;">New Website Enquiry</h1>
            <p style="color:#060a0e;opacity:0.7;margin:4px 0 0;font-size:13px;">110 Solutions — Contact Form</p>
          </div>
          <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eee;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:140px;">Name</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;font-weight:600;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#54c7c2;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Phone</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;">${phone}</td></tr>` : ""}
              ${company ? `<tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Company</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;">${company}</td></tr>` : ""}
              ${interest ? `<tr><td style="padding:8px 0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Interested In</td><td style="padding:8px 0;font-size:14px;color:#1a1a1a;">${interest}</td></tr>` : ""}
            </table>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e5e5;">
              <p style="font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px;">Message</p>
              <p style="font-size:14px;color:#1a1a1a;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: "110 Solutions <no-reply@110solutions.com.au>",
      to: [email],
      subject: "We've received your enquiry — 110 Solutions",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#060a0e;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:white;margin:0;font-size:20px;font-weight:800;">110<span style="color:#54c7c2">Solutions</span></h1>
          </div>
          <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eee;border-top:none;">
            <h2 style="font-size:18px;margin:0 0 16px;">Hi ${firstName}, thanks for reaching out!</h2>
            <p style="font-size:14px;color:#444;line-height:1.7;margin:0 0 16px;">We've received your message and a member of our team will be in touch within <strong>1 business day</strong>.</p>
            <p style="font-size:14px;color:#444;line-height:1.7;margin:0 0 24px;">In the meantime, feel free to explore our <a href="https://110solutions.com.au/services" style="color:#54c7c2;">services</a> or <a href="https://110solutions.com.au/products" style="color:#54c7c2;">products</a>.</p>
            <a href="https://110solutions.com.au/contact" style="display:inline-block;background:#54c7c2;color:#060a0e;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Book a Demo Instead →</a>
            <p style="font-size:12px;color:#999;margin:32px 0 0;line-height:1.6;">110 Solutions · Unit 4.15, 29-31 Lexington Drive, Bella Vista, Australia · <a href="mailto:info@110solutions.com.au" style="color:#54c7c2;">info@110solutions.com.au</a></p>
          </div>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Message sent! We'll be in touch within 1 business day.",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please email us directly at info@110solutions.com.au",
    };
  }
}