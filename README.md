# 🛡️ Bombay Facility Services (BFS) — Premium Manpower & Security

A state-of-the-art, high-performance web portal built for **Bombay Facility Services (BFS)**, a premier provider of professional, police-verified manpower and safeguarding solutions in Mumbai. 

This repository showcases an elite-level implementation of **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**, delivering an editorial-grade visual design and bulletproof production architecture.

---

## ✨ Key Features & Experience Portals

*   **Premium Visual Brand & Aesthetics**: Highly immersive UI using a curated premium dark-mode theme (*Obsidian & Champagne Gold*) and light-mode (*Soft Linen & Rich Gold Bronze*) with dynamic, zero-flicker theme toggle.
*   **Dynamic Services Portal**: High-speed dynamic routes (`services/[slug]`) mapping detail portals for security guards, bouncers, bodyguards, lady guards, caretakers, liftmen, and drivers.
*   **Resilient Quote Dispatch System**: Secure form parsing that concurrently sends dual, highly formatted HTML email notifications (immediate client confirmation + admin alert) using a failover SMTP transport layer.
*   **Recruitment / Career Center**: Careers portal showing open positions and dynamic applications (`/careers/apply`) with multi-part Form Data parsing to securely upload job applicant resumes (PDF/Word attachments).
*   **Complete Responsiveness & Smooth Physics**: Built with precise responsive grids, fluid flexboxes, and interactive micro-animations (Framer Motion springs and draggable float actions).

---

## ⚙️ Core Technical Architecture

*   **Core**: [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/) using full Server-Side Static Generation (SSG) for high-speed SEO load-times.
*   **Vigilant Type Safety**: Fully compiled with strict [TypeScript](https://www.typescriptlang.org/) for compile-time safety and self-documenting code.
*   **Modern Styling & Motion**: [Tailwind CSS 4](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/) for fluid glassmorphism and modern layouts.
*   **Mail Dispatcher**: [Nodemailer](https://nodemailer.com/) with asynchronous transport pools.
*   **SEO Optimization**: Clean, modular `sitemap.ts` dynamic generator and structured semantic HTML heading architectures.

---

## 🚀 Production-Readiness & Performance Optimizations

This project has been audited and fully optimized to meet **100/100 Lighthouse & Core Web Vitals** performance targets:

1.  **Strict Image Sizes Mapping**: Replaced standard `fill` layouts with responsive `sizes` parameters (e.g. `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`) to ensure the Next.js optimization engine only serves perfectly compressed WebP/AVIF assets based on screen dimensions, completely eliminating runtime layout shifts (CLS).
2.  **Clean Compile & Absolute Compliance**: Fully resolved ESLint constraints (unescaped entity compliance, forwardRef cast guards, and dead code pruning). Runs `npm run lint` with **0 errors and 0 warnings**.
3.  **Environment Variable Robustness**: Safe fallback parser in SMTP configuration (`Number(process.env.EMAIL_PORT) || 587`) preventing application crashes on launch when variables are omitted or incomplete in the cloud environment.
4.  **Flawless Theme Adaptability**: Refactored call-to-action systems to dynamically map styling coordinates to theme variables (e.g., swapping static text constraints for `var(--heading-color)`), maintaining beautiful legibility in both light and dark modes.

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Dynamic SSG, & API Endpoints)
│   ├── api/              # Secure Serverless mail dispatch endpoints (apply, contact, quote)
│   ├── services/         # Dynamic SSG service slug generator & details display
│   └── sitemap.ts        # Dynamic XML sitemap generator
├── components/           # Modular component architecture
│   ├── cards/            # Interactive ServiceCards and CareerCards
│   ├── forms/            # Contact, Quote Request, and Career submission forms
│   ├── layout/           # Sticky Header Navigation, Footers, and PageHeaders
│   ├── sections/         # Landing page view elements (Hero carousel, CTA, About grid)
│   └── ui/               # Reusable buttons, theme toggle, and draggable buttons
├── hooks/                # Dynamic custom React form hooks
├── lib/                  # Vetted mock data layer and Nodemailer SMTP dispatcher
└── public/               # Static high-res assets & logos
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 20 or higher
- npm / yarn / pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd bfs-security
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables (`.env`):**
    Create a `.env` file in the root workspace directory. Add your SMTP configurations (without comments or quotes):
    ```ini
    EMAIL_USER=your-smtp-username@gmail.com
    EMAIL_PASS=your-app-specific-password
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_TO=recipient-email@domain.com
    ```

4.  **Launch local dev environment:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🏗️ Production Build & Verification

To compile the codebase into an optimized production bundle:
```bash
# Verify ESLint & TypeScript clean compile (0 errors, 0 warnings)
npm run lint

# Compile production-ready static assets and serverless paths
npm run build

# Start the compiled production build locally
npm run start
```

---

## 🚢 Deployment

The repository is fully ready for single-click hosting on **Vercel** or **Netlify**:
1.  Connect your Git repository to Vercel/Netlify.
2.  Configure your variables (`EMAIL_USER`, `EMAIL_PASS`, etc.) in the dashboard settings.
3.  Deploy — Next.js will build, optimize static images, and pre-render all services dynamic pages automatically!
