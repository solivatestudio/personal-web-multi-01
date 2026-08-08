import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MouseSpotlight } from "./components/MouseSpotlight";
import { PageTransition } from "./components/PageTransition";
import { CustomCursor } from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hammad Matt — Fullstack Developer & Security Researcher",
    template: "%s | HammSec Core",
  },
  description: "Enterprise Cybersecurity professional and Systems Lead specialized in application audits, secure architecture design, and vulnerability discovery automation.",
  metadataBase: new URL("https://hammad.biz.id"),
  keywords: ["Cybersecurity", "Security Researcher", "Hammad Matt", "Indonesia CSIRT", "NASA VDP", "Tauri", "Rust", "Web Security"],
  openGraph: {
    title: "Hammad Matt — Fullstack Developer & Security Researcher",
    description: "Enterprise Cybersecurity professional and Systems Lead specialized in application audits and vulnerability discovery automation.",
    url: "https://hammad.biz.id",
    siteName: "HammSec Core",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#060912] selection:bg-[#0A6CFF]/30 selection:text-white`}
      >
        {/* Ambient glow backgrounds */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-bubble-blue opacity-40 pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[50%] rounded-full glow-bubble-purple opacity-30 pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full glow-bubble-cyan opacity-20 pointer-events-none -z-10" />

        {/* Global Technical Grid Overlay */}
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none -z-10" />

        {/* Custom branded pointer system */}
        <CustomCursor />

        {/* Global Mouse Tracker light emitter */}
        <MouseSpotlight />

        {/* Core Site Header Navigation */}
        <Navbar />

        {/* Smooth multi-page transition controller wrapper */}
        <div className="flex-1 flex flex-col pt-28">
          <PageTransition>
            {children}
          </PageTransition>
        </div>

        {/* Core Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
