import { NextRequest, NextResponse } from "next/server";

// This route receives the contact form submission.
// By default it just validates and logs it — wire it up to an email
// provider (Resend, SendGrid, Postmark, etc.) or a CRM webhook before
// going live. See README.md → "Connecting the contact form".
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

    // TODO: send this payload with your email/CRM provider of choice.
    // Example (Resend): await resend.emails.send({ ... })
    console.log("New contact submission:", { name, email, company, service, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
