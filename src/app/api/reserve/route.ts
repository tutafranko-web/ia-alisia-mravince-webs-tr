import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const RECIPIENT = process.env.RESERVATION_EMAIL || "placeholder@example.com";

    const body = await request.json();
    const { name, email, phone, checkIn, checkOut, guests, message } = body;

    // Server-side validation
    if (!name || !email || !checkIn || !checkOut || !guests) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (checkOut <= checkIn) {
      return NextResponse.json(
        { error: "Check-out date must be after check-in date." },
        { status: 400 }
      );
    }

    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    await resend.emails.send({
      from: "Villa Alissa <reservations@resend.dev>",
      to: [RECIPIENT],
      replyTo: email,
      subject: `New Reservation Request - ${name} (${checkIn} to ${checkOut})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2d2418;">
          <div style="background: linear-gradient(135deg, #c4a351, #9a7b2d); padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Villa Alissa</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">New Reservation Request</p>
          </div>
          <div style="background: #faf8f4; padding: 32px; border: 1px solid #e8e0d0; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #2d2418; margin-top: 0;">Guest Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #8a7d6b; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #8a7d6b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #9a7b2d;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #8a7d6b;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            </table>

            <hr style="border: none; border-top: 1px solid #e8e0d0; margin: 20px 0;">

            <h2 style="color: #2d2418;">Stay Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #8a7d6b; width: 140px;">Check-in</td><td style="padding: 8px 0; font-weight: bold;">${checkIn}</td></tr>
              <tr><td style="padding: 8px 0; color: #8a7d6b;">Check-out</td><td style="padding: 8px 0; font-weight: bold;">${checkOut}</td></tr>
              <tr><td style="padding: 8px 0; color: #8a7d6b;">Nights</td><td style="padding: 8px 0;">${nights}</td></tr>
              <tr><td style="padding: 8px 0; color: #8a7d6b;">Guests</td><td style="padding: 8px 0;">${guests}</td></tr>
            </table>

            ${message ? `
              <hr style="border: none; border-top: 1px solid #e8e0d0; margin: 20px 0;">
              <h2 style="color: #2d2418;">Special Requests</h2>
              <p style="color: #4a4230; line-height: 1.6;">${message}</p>
            ` : ""}

            <hr style="border: none; border-top: 1px solid #e8e0d0; margin: 20px 0;">
            <p style="color: #8a7d6b; font-size: 13px; text-align: center;">
              Reply directly to this email to respond to the guest.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reservation email error:", error);
    return NextResponse.json(
      { error: "Failed to send reservation. Please try again later." },
      { status: 500 }
    );
  }
}
