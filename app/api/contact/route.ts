import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// This route receives the contact form submission and emails it to
// business.gdsolutions@gmail.com via Resend.
//
// SETUP REQUIRED — see README.md → "Connecting the contact form" for the
// full walkthrough. In short:
//   1. Create a free account at https://resend.com
//   2. Get an API key from the dashboard
//   3. In Vercel: Project → Settings → Environment Variables, add
//      RESEND_API_KEY = <your key>
//   4. Redeploy
// Until RESEND_API_KEY is set, submissions are still accepted and logged
// (visible in Vercel → your project → Logs) but no email is sent.
//
// IMPORTANT — Resend sandbox restriction: until you verify a domain on
// resend.com, Resend only allows sending TO the exact email address the
// Resend account itself was signed up with — sending to any other address
// (like NOTIFY_EMAIL below) will be silently rejected. Either:
//   (a) sign up for Resend using business.gdsolutions@gmail.com directly, or
//   (b) verify a real domain on resend.com, which lifts the restriction
//       entirely and lets you send to any address.

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const NOTIFY_EMAIL = "business.gdsolutions@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, company, service, message } = data ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    console.log("New contact submission:", { name, email, company, service, message });

    if (resend) {
      const { error } = await resend.emails.send({
        // Resend's shared test sender — works immediately with no domain
        // setup. Once you verify your own domain on resend.com, replace
        // this with e.g. "GD Solutions <enquiries@gdsolutions.com>".
        from: "GD Solutions Website <onboarding@resend.dev>",
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : null,
          service ? `Service: ${service}` : null,
          "",
          "Message:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      if (error) {
        // Resend accepted the request but rejected the send — most often
        // because, until a domain is verified, Resend's sandbox mode only
        // allows sending to the email address the Resend account itself
        // was signed up with. Log it clearly so it shows up in Vercel logs
        // instead of failing silently.
        console.error("Resend rejected the email:", error);
        return NextResponse.json(
          { error: "Email provider rejected the send. Check Vercel logs for details." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
