import { NextResponse } from "next/server";
import { sendDualMail } from "@/lib/sendMail";
import { applyAdminTemplate, applyUserTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name")?.toString() || "";
    const email = data.get("email")?.toString() || "";
    const phone = data.get("phone")?.toString() || "";
    const position = data.get("position")?.toString() || "";
    const message = data.get("message")?.toString() || "";
    const resumeFile = data.get("resume") as File;

    if (!name || !email || !phone || !position || !resumeFile) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Convert resume to buffer for email attachment
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await sendDualMail({
      // Admin gets full application + resume attachment
      adminSubject: `🧑‍💼 New Job Application — ${position} (${name})`,
      adminHtml: applyAdminTemplate({ name, email, phone, position, message }),
      attachments: [{ filename: resumeFile.name, content: buffer }],

      // Applicant gets a warm confirmation with process steps
      userEmail: email,
      userSubject: `Application Received — ${position} | BFS`,
      userHtml: applyUserTemplate(name, position),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[apply/route] Email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit your application. Please try again." },
      { status: 500 }
    );
  }
}
