// ============================================================
// BFS Email Templates — Premium HTML email designs
// Used by all three API routes: contact, quote, apply
// ============================================================

const BFS_GOLD = "#c5a880";
const BFS_DARK = "#07090e";
const BFS_DARK_CARD = "#0f1220";
const BFS_BORDER = "#1e2535";

// Shared wrapper
function emailWrapper(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bombay Facility Services</title>
</head>
<body style="margin:0;padding:0;background-color:${BFS_DARK};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${BFS_DARK};padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:${BFS_DARK_CARD};border-radius:16px 16px 0 0;border:1px solid ${BFS_BORDER};border-bottom:none;padding:32px 40px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:900;color:${BFS_GOLD};letter-spacing:0.05em;">BFS</span>
                    <span style="display:block;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#6b7280;margin-top:2px;">Bombay Facility Services</span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:${BFS_GOLD}18;border:1px solid ${BFS_GOLD}40;color:${BFS_GOLD};font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:4px 12px;border-radius:999px;">Verified Force</span>
                  </td>
                </tr>
              </table>
              <div style="height:1px;background:linear-gradient(to right,transparent,${BFS_GOLD}60,transparent);margin-top:20px;"></div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background:${BFS_DARK_CARD};border-left:1px solid ${BFS_BORDER};border-right:1px solid ${BFS_BORDER};padding:32px 40px;">
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#090d16;border-radius:0 0 16px 16px;border:1px solid ${BFS_BORDER};border-top:none;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;color:#4b5563;">Jai Ambe Soc. MG Cross Road No 3, Kandivali West, Mumbai 400067</p>
              <p style="margin:0;font-size:11px;color:#4b5563;">
                <a href="tel:+919819758831" style="color:${BFS_GOLD};text-decoration:none;">+91 9819758831</a>
                &nbsp;·&nbsp;
                <a href="mailto:info.bombayfacilityservice@gmail.com" style="color:${BFS_GOLD};text-decoration:none;">info.bombayfacilityservice@gmail.com</a>
              </p>
              <p style="margin:12px 0 0;font-size:10px;color:#374151;">© ${new Date().getFullYear()} Bombay Facility Services. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Row helper
function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${BFS_BORDER};">
      <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6b7280;">${label}</span>
      <p style="margin:4px 0 0;font-size:14px;color:#e2e8f0;font-weight:600;">${value}</p>
    </td>
  </tr>`;
}

function badge(text: string): string {
  return `<span style="display:inline-block;background:${BFS_GOLD}18;border:1px solid ${BFS_GOLD}40;color:${BFS_GOLD};font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:3px 10px;border-radius:999px;margin-bottom:20px;">${text}</span>`;
}

// ─────────────────────────────────────────────
// ADMIN TEMPLATES (sent to BFS team)
// ─────────────────────────────────────────────

export function contactAdminTemplate(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return emailWrapper(`
    ${badge("New Contact Enquiry")}
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;">New Contact Form Submission</h2>
    <p style="margin:0 0 28px;font-size:14px;color:#94a3b8;">Someone has reached out through the BFS website contact form.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Full Name", data.name)}
      ${row("Email Address", `<a href="mailto:${data.email}" style="color:${BFS_GOLD};text-decoration:none;">${data.email}</a>`)}
      ${row("Phone Number", `<a href="tel:${data.phone}" style="color:${BFS_GOLD};text-decoration:none;">${data.phone}</a>`)}
      <tr>
        <td style="padding:10px 0;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6b7280;">Message</span>
          <div style="margin:8px 0 0;background:#0f172a;border-left:3px solid ${BFS_GOLD};padding:14px 16px;border-radius:0 8px 8px 0;">
            <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.6;">${data.message.replace(/\n/g, "<br/>")}</p>
          </div>
        </td>
      </tr>
    </table>
    <div style="margin-top:28px;padding:16px;background:#0f172a;border-radius:10px;border:1px solid ${BFS_BORDER};">
      <p style="margin:0;font-size:12px;color:#6b7280;">⏱ Reply within <strong style="color:${BFS_GOLD};">4 business hours</strong> to maintain our service standard.</p>
    </div>
  `);
}

export function quoteAdminTemplate(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}): string {
  return emailWrapper(`
    ${badge("Quote Request Received")}
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;">New Quote Request</h2>
    <p style="margin:0 0 28px;font-size:14px;color:#94a3b8;">A client has requested a service quote through the BFS website.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Full Name", data.name)}
      ${row("Email Address", `<a href="mailto:${data.email}" style="color:${BFS_GOLD};text-decoration:none;">${data.email}</a>`)}
      ${row("Phone Number", `<a href="tel:${data.phone}" style="color:${BFS_GOLD};text-decoration:none;">${data.phone}</a>`)}
      ${row("Requested Service", `<span style="color:${BFS_GOLD};font-weight:700;">${data.service}</span>`)}
      ${data.message ? row("Additional Details", data.message.replace(/\n/g, "<br/>")) : ""}
    </table>
    <div style="margin-top:28px;padding:16px;background:#0f172a;border-radius:10px;border:1px solid ${BFS_BORDER};">
      <p style="margin:0;font-size:12px;color:#6b7280;">📋 Prepare a tailored quote and respond within <strong style="color:${BFS_GOLD};">24 hours</strong>.</p>
    </div>
  `);
}

export function applyAdminTemplate(data: {
  name: string;
  email: string;
  phone: string;
  position: string;
  message?: string;
}): string {
  return emailWrapper(`
    ${badge("Job Application Received")}
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;">New Career Application</h2>
    <p style="margin:0 0 28px;font-size:14px;color:#94a3b8;">A candidate has applied through the BFS Careers portal. Resume attached.</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Applicant Name", data.name)}
      ${row("Email Address", `<a href="mailto:${data.email}" style="color:${BFS_GOLD};text-decoration:none;">${data.email}</a>`)}
      ${row("Phone Number", `<a href="tel:${data.phone}" style="color:${BFS_GOLD};text-decoration:none;">${data.phone}</a>`)}
      ${row("Position Applied", `<span style="color:${BFS_GOLD};font-weight:700;">${data.position}</span>`)}
      ${data.message ? row("Cover Letter", data.message.replace(/\n/g, "<br/>")) : ""}
    </table>
    <div style="margin-top:28px;padding:16px;background:#0f172a;border-radius:10px;border:1px solid ${BFS_BORDER};">
      <p style="margin:0;font-size:12px;color:#6b7280;">📎 The candidate's resume has been attached to this email for your review.</p>
    </div>
  `);
}

// ─────────────────────────────────────────────
// USER CONFIRMATION TEMPLATES (sent to the person who submitted)
// ─────────────────────────────────────────────

export function contactUserTemplate(name: string): string {
  return emailWrapper(`
    ${badge("Message Received")}
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;">Thank You, ${name}!</h2>
    <p style="margin:0 0 24px;font-size:15px;color:#94a3b8;line-height:1.7;">
      We've received your message and a member of our team will get back to you within <strong style="color:${BFS_GOLD};">4 business hours</strong>.
    </p>
    <div style="background:#0f172a;border-left:3px solid ${BFS_GOLD};padding:20px 24px;border-radius:0 10px 10px 0;margin-bottom:28px;">
      <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.6;">
        In the meantime, you can reach our duty officers directly:
      </p>
      <p style="margin:10px 0 0;font-size:14px;">
        📞 <a href="tel:+919819758831" style="color:${BFS_GOLD};text-decoration:none;font-weight:700;">+91 9819758831</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        💬 <a href="https://wa.me/919819758831" style="color:${BFS_GOLD};text-decoration:none;font-weight:700;">WhatsApp</a>
      </p>
    </div>
    <p style="margin:0;font-size:13px;color:#6b7280;">— The BFS Operations Team</p>
  `);
}

export function quoteUserTemplate(name: string, service: string): string {
  return emailWrapper(`
    ${badge("Quote Request Confirmed")}
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;">Your Quote is On Its Way, ${name}!</h2>
    <p style="margin:0 0 24px;font-size:15px;color:#94a3b8;line-height:1.7;">
      We've received your request for <strong style="color:${BFS_GOLD};">${service}</strong> and our operations team is preparing a customised quote for you.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="background:#0f172a;border:1px solid ${BFS_BORDER};border-radius:12px;padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6b7280;">What Happens Next</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#cbd5e1;"><span style="color:${BFS_GOLD};font-weight:700;margin-right:10px;">01</span> Our team reviews your requirements</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#cbd5e1;border-top:1px solid ${BFS_BORDER};"><span style="color:${BFS_GOLD};font-weight:700;margin-right:10px;">02</span> A dedicated officer prepares your quote</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#cbd5e1;border-top:1px solid ${BFS_BORDER};"><span style="color:${BFS_GOLD};font-weight:700;margin-right:10px;">03</span> We contact you within <strong style="color:${BFS_GOLD};">24 hours</strong></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">Need it faster? Call us directly:</p>
    <p style="margin:0;font-size:14px;">
      📞 <a href="tel:+919819758831" style="color:${BFS_GOLD};text-decoration:none;font-weight:700;">+91 9819758831</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      💬 <a href="https://wa.me/919819758831" style="color:${BFS_GOLD};text-decoration:none;font-weight:700;">WhatsApp</a>
    </p>
    <p style="margin:20px 0 0;font-size:13px;color:#6b7280;">— The BFS Operations Team</p>
  `);
}

export function applyUserTemplate(name: string, position: string): string {
  return emailWrapper(`
    ${badge("Application Submitted")}
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;">Application Received, ${name}!</h2>
    <p style="margin:0 0 24px;font-size:15px;color:#94a3b8;line-height:1.7;">
      Thank you for applying for the <strong style="color:${BFS_GOLD};">${position}</strong> position at Bombay Facility Services. We've received your application and resume.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="background:#0f172a;border:1px solid ${BFS_BORDER};border-radius:12px;padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6b7280;">Application Process</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#cbd5e1;"><span style="color:${BFS_GOLD};font-weight:700;margin-right:10px;">01</span> HR team reviews your resume &amp; cover letter</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#cbd5e1;border-top:1px solid ${BFS_BORDER};"><span style="color:${BFS_GOLD};font-weight:700;margin-right:10px;">02</span> Shortlisted candidates are contacted for interview</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-size:13px;color:#cbd5e1;border-top:1px solid ${BFS_BORDER};"><span style="color:${BFS_GOLD};font-weight:700;margin-right:10px;">03</span> We typically respond within <strong style="color:${BFS_GOLD};">3–5 business days</strong></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <div style="background:#0f172a;border-left:3px solid ${BFS_GOLD};padding:16px 20px;border-radius:0 10px 10px 0;margin-bottom:20px;">
      <p style="margin:0;font-size:13px;color:#94a3b8;">
        🌟 <strong style="color:#f8fafc;">Pro tip:</strong> Stay active on your phone. Our HR team often calls directly for quick screening.
      </p>
    </div>
    <p style="margin:0;font-size:13px;color:#6b7280;">— The BFS HR Team</p>
  `);
}
