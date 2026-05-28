import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTopButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ThemeProvider } from "@/components/utilities/providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bombay Facility Services | Security & Facility Management",
    template: "%s | BFS Security",
  },
  description:
    "BFS provides professional security guards, caretakers, bouncers, bodyguards, and more across Mumbai and beyond.",
  keywords: [
    "security guards Mumbai",
    "facility management Mumbai",
    "bouncers",
    "bodyguards",
    "caretakers Mumbai",
    "BFS Security",
    "Bombay Facility Services",
  ],
  authors: [{ name: "Bombay Facility Services" }],
  metadataBase: new URL("https://bombayfacilityservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bombay Facility Services",
    title: "Bombay Facility Services | Security & Facility Management",
    description:
      "BFS provides professional security guards, caretakers, bouncers, bodyguards, and more across Mumbai and beyond.",
    url: "https://bombayfacilityservices.com",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Facility Services | Security & Facility Management",
    description:
      "BFS provides professional security guards, caretakers, bouncers, bodyguards, and more across Mumbai and beyond.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>

          {/* Floating Utility Components */}
          <WhatsAppButton />
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
