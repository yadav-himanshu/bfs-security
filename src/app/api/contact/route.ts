import { NextRequest, NextResponse } from "next/server";
import { sendDualMail } from "@/lib/sendMail";
import { contactAdminTemplate, contactUserTemplate } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    await sendDualMail({
      // Admin gets the full submission details
      adminSubject: `📩 New Contact Enquiry — ${name}`,
      adminHtml: contactAdminTemplate({ name, email, phone, message }),

      // User gets a warm confirmation
      userEmail: email,
      userSubject: "We received your message — BFS",
      userHtml: contactUserTemplate(name),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
