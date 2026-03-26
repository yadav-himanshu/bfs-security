import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTopButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/components/utilities/providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bombay Facility Services | Security & Facility Management",
  description:
    "BFS provides professional security guards, caretakers, bouncers, bodyguards, and more across Mumbai and beyond.",
};

// ✅ Use Readonly and React.ReactNode explicitly
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans`}>
        {/* Theme provider must wrap everything inside body */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>

          {/* Utility Components */}
          <ThemeToggle />
          <WhatsAppButton />
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
