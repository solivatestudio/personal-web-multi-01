import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WorkstationShell } from "./components/WorkstationShell";
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
    default: "Hammad Matt // Security Researcher & Tech Lead",
    template: "%s | SECOPS WORKSTATION",
  },
  description: "Field Terminal Workstation for Hammad Matt - Ethical Hacker, Tech Lead, and Security Researcher specialized in vulnerability assessment and application audits.",
  metadataBase: new URL("https://hammad.biz.id"),
  keywords: ["Cybersecurity", "Red Team", "Ethical Hacker", "Security Researcher", "Hammad Matt", "NASA VDP", "Tauri", "Rust", "Web Security"],
  openGraph: {
    title: "Hammad Matt // Security Researcher Workstation",
    description: "Field Terminal Workstation for Hammad Matt - Security Researcher specialized in vulnerability assessment and application audits.",
    url: "https://hammad.biz.id",
    siteName: "SECOPS Workstation",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#080808] text-[#D8D6CC] selection:bg-[#D7A94B]/30 selection:text-white`}
      >
        {/* Tactical Crosshair Cursor system */}
        <CustomCursor />

        {/* Global Workstation Application Shell */}
        <WorkstationShell>
          {children}
        </WorkstationShell>
      </body>
    </html>
  );
}
