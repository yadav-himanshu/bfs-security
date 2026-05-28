import { NextRequest, NextResponse } from "next/server";
import { sendDualMail } from "@/lib/sendMail";
import { quoteAdminTemplate, quoteUserTemplate } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    await sendDualMail({
      // Admin gets the full quote request details
      adminSubject: `📋 Quote Request — ${service} (${name})`,
      adminHtml: quoteAdminTemplate({ name, email, phone, service, message }),

      // User gets a styled confirmation with next steps
      userEmail: email,
      userSubject: `Your Quote Request for ${service} — BFS`,
      userHtml: quoteUserTemplate(name, service),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[quote/route] Email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit your quote request. Please try again." },
      { status: 500 }
    );
  }
}
