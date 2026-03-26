# Bombay Facility Services (BFS) - Professional Manpower & Security

A modern, high-performance web application for **Bombay Facility Services (BFS)**, a premium provider of professional manpower and security solutions. Built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**, this platform offers a seamless experience for clients to explore services, request quotes, and for job seekers to find career opportunities.

---

## 🚀 Key Features

- **Service Showcases**: Detailed pages for various security and facility management services.
- **Real-time Quote System**: Interactive form for clients to request personalized service quotes.
- **Career Portal**: Integrated careers section for job applications and manpower recruitment.
- **Premium UI/UX**: Professional design with smooth animations, interactive cards, and high-quality visuals.
- **Dark/Light Mode**: Full support for system-wide light and dark themes using `next-themes`.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Contact & Inquiry**: Robust contact management powered by `nodemailer`.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 16 (App Router)](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Components & Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Forms & Backend**: [Nodemailer](https://nodemailer.com/), [Formidable](https://github.com/node-formidable/formidable)
- **Theme Management**: `next-themes`

---

## 📂 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages & API Routes)
├── components/     # Reusable UI Components
│   ├── cards/      # Service, Gallery, and Career cards
│   ├── forms/      # Contact and Quote forms
│   ├── layout/     # Navbar, Footer, and Page headers
│   └── sections/   # Major landing page sections (Hero, About, etc.)
├── lib/            # Utility functions and shared data (servicesData.ts)
└── public/         # Static assets (logos, images)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 20 or higher
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd bfs-security
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your configuration (e.g., SMTP details for Nodemailer).

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 🚢 Deployment

The project is optimized for deployment on the **Vercel Platform**. 

1. Push your code to GitHub/GitLab/Bitbucket.
2. Connect your repository to Vercel.
3. Configure environment variables in the Vercel dashboard.
4. Deploy!

---

## 📄 License

This project is private and owned by **Bombay Facility Services (BFS)**.
