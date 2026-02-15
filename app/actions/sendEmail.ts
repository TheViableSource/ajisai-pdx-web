"use server";

import nodemailer from "nodemailer";

interface FormData {
    name: string;
    email: string;
    phone?: string;
    position: string;
    message?: string;
    confirm_email?: string; // Honeypot field
    formType?: "job" | "contact";
}

interface ActionResult {
    success: boolean;
    error?: string;
}

export async function sendEmail(data: FormData): Promise<ActionResult> {
    // Honeypot check — if filled, silently succeed without sending
    if (data.confirm_email) {
        return { success: true };
    }

    // Validate required fields
    if (!data.name || !data.email || !data.position) {
        return { success: false, error: "Please fill in all required fields." };
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } =
        process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
        console.error("Missing SMTP environment variables");
        return {
            success: false,
            error: "Email service is not configured. Please try again later.",
        };
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: parseInt(SMTP_PORT, 10) === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const formLabel =
        data.formType === "contact" ? "Contact Inquiry" : "Job Application";

    const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #481029; padding: 24px; text-align: center;">
        <h1 style="color: #C5A059; margin: 0; font-size: 24px;">Ajisai — New ${formLabel}</h1>
      </div>
      <div style="padding: 24px; background: #F9F4E8; border: 1px solid #e0d5c0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 8px; font-weight: bold; color: #481029; width: 140px; vertical-align: top;">Name:</td>
            <td style="padding: 12px 8px; color: #333;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 8px; font-weight: bold; color: #481029; vertical-align: top;">Email:</td>
            <td style="padding: 12px 8px; color: #333;"><a href="mailto:${data.email}" style="color: #5D182E;">${data.email}</a></td>
          </tr>
          ${data.phone
            ? `<tr>
            <td style="padding: 12px 8px; font-weight: bold; color: #481029; vertical-align: top;">Phone:</td>
            <td style="padding: 12px 8px; color: #333;">${data.phone}</td>
          </tr>`
            : ""
        }
          <tr>
            <td style="padding: 12px 8px; font-weight: bold; color: #481029; vertical-align: top;">Position:</td>
            <td style="padding: 12px 8px; color: #333;">${data.position}</td>
          </tr>
          ${data.message
            ? `<tr>
            <td style="padding: 12px 8px; font-weight: bold; color: #481029; vertical-align: top;">Message:</td>
            <td style="padding: 12px 8px; color: #333; white-space: pre-wrap;">${data.message}</td>
          </tr>`
            : ""
        }
        </table>
      </div>
      <div style="padding: 16px; text-align: center; font-size: 12px; color: #999;">
        This email was sent from the Ajisai website contact form.
      </div>
    </div>
  `;

    try {
        await transporter.sendMail({
            from: `"Ajisai Website" <${SMTP_USER}>`,
            to: CONTACT_EMAIL,
            replyTo: data.email,
            subject: `[Ajisai] New ${formLabel} from ${data.name}`,
            html: htmlBody,
        });

        return { success: true };
    } catch (error) {
        console.error("Email send error:", error);
        return {
            success: false,
            error: "Failed to send your message. Please try again later.",
        };
    }
}
