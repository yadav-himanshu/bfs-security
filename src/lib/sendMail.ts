import nodemailer from "nodemailer";

interface SendMailProps {
  subject: string;
  html: string;
  text?: string;
  attachments?: { filename: string; content: Buffer }[];
}

export async function sendMail({
  subject,
  html,
  text,
  attachments,
}: SendMailProps) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BFS Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      text: text || "",
      html,
      attachments,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
