import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/sendMail";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 },
      );
    }

    const htmlContent = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Requested Service:</strong> ${service}</p>
      <p><strong>Additional Details:</strong><br/> ${message || "N/A"}</p>
    `;

    await sendMail({
      subject: "BFS Quote Request",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 },
    );
  }
}
