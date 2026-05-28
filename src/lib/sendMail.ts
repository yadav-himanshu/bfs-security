import nodemailer from "nodemailer";

interface SendMailProps {
  to: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: Buffer }[];
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export async function sendMail({ to, subject, html, attachments }: SendMailProps) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Bombay Facility Services" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    attachments,
  });
}

/** Send both: admin notification + user confirmation in parallel */
export async function sendDualMail({
  userEmail,
  userSubject,
  userHtml,
  adminSubject,
  adminHtml,
  attachments,
}: {
  userEmail: string;
  userSubject: string;
  userHtml: string;
  adminSubject: string;
  adminHtml: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  const transporter = createTransporter();

  await Promise.all([
    // → BFS Admin notification
    transporter.sendMail({
      from: `"BFS Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: adminSubject,
      html: adminHtml,
      attachments,
    }),
    // → User confirmation
    transporter.sendMail({
      from: `"Bombay Facility Services" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: userSubject,
      html: userHtml,
    }),
  ]);
}
