"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Command, X, ArrowRight, Terminal } from "lucide-react";

export function WorkstationShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [timeString, setTimeString] = useState("");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [paletteInput, setPaletteInput] = useState("");
  const [easterTerminalOpen, setEasterTerminalOpen] = useState(false);

  const navRailLinks = [
    { href: "/", sysId: "SYS.00", label: "HOME", num: "01" },
    { href: "/about", sysId: "ID.01", label: "PROFILE", num: "02" },
    { href: "/portfolio", sysId: "OPS.02", label: "WORK", num: "03" },
    { href: "/experience", sysId: "LOG.03", label: "FIELD LOG", num: "04" },
    { href: "/services", sysId: "CAP.04", label: "SERVICES", num: "05" },
    { href: "/contact", sysId: "COM.05", label: "CONTACT", num: "06" },
  ];

  // Update workstation UTC+7 time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-GB", { hour12: false }) + " WIB"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Shortcut key listeners (CMD+K or '/' for command palette, '~' for easter terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      } else if (e.key === "`" || e.key === "~") {
        if (document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
          e.preventDefault();
          setEasterTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#080808] text-[#D8D6CC] scanline-hud font-sans relative">
      
      {/* 1. TOP SYSTEM STATUS STRIP */}
      <header className="fixed top-0 left-0 right-0 z-40 h-10 bg-[#0D0D0C] border-b border-[#8D8B82]/15 px-4 md:px-8 flex items-center justify-between font-mono text-[10px] text-[#8D8B82]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-[#D8D6CC] hover:text-[#D7A94B] transition-colors font-bold">
            <Shield className="w-3.5 h-3.5 text-[#D7A94B]" />
            <span>SECOPS // HAMMAD_MATT</span>
          </Link>
          <span className="hidden sm:inline text-[#55544E]">|</span>
          <span className="hidden sm:inline">MODE: RED_TEAM_AUDITOR</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#77E6A1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#77E6A1] animate-pulse" />
            <span className="hidden sm:inline">STATUS: OPERATIONAL</span>
          </div>
          
          <div className="text-[#D8D6CC] font-semibold">{timeString}</div>

          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="px-2 py-0.5 border border-[#8D8B82]/25 hover:border-[#D7A94B] text-[#D7A94B] transition-colors cursor-pointer flex items-center gap-1.5"
            title="Command Palette (/ or Ctrl+K)"
          >
            <Command className="w-3 h-3" />
            <span className="hidden sm:inline">MENU [/]</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN WORKSTATION ENVIRONMENT SHELL */}
      <div className="flex-1 flex pt-10 pb-8">
        
        {/* LEFT VERTICAL NAVIGATION RAIL */}
        <aside className="hidden lg:flex flex-col w-56 fixed top-10 bottom-8 left-0 z-30 bg-[#0D0D0C] border-r border-[#8D8B82]/15 p-6 justify-between font-mono text-xs">
          <div className="space-y-6">
            <div className="text-[9px] text-[#55544E] tracking-widest border-b border-[#8D8B82]/10 pb-2">
              SYSTEM_NAVIGATION
            </div>

            <nav className="space-y-4">
              {navRailLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-cursor="GOTO"
                    className={`group flex items-center justify-between py-1 transition-colors ${
                      active ? "text-[#D7A94B] font-bold" : "text-[#8D8B82] hover:text-[#D8D6CC]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-[#55544E]">{link.num}</span>
                      <span>{link.label}</span>
                    </div>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#D7A94B]" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-2 border-t border-[#8D8B82]/10 pt-4 text-[9px] text-[#55544E]">
            <div>OPERATING SYS: UNIX</div>
            <div>CLEARANCE: PUBLIC</div>
            <div>STATION: JK-01</div>
          </div>
        </aside>

        {/* CENTER CONTENT AREA */}
        <main className="flex-1 lg:pl-56 w-full max-w-[1600px] mx-auto min-h-screen">
          {children}
        </main>
      </div>

      {/* 3. BOTTOM HUD TELEMETRY RAIL */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 h-8 bg-[#0D0D0C] border-t border-[#8D8B82]/15 px-4 md:px-8 flex items-center justify-between font-mono text-[9px] text-[#55544E]">
        <div className="flex items-center gap-6">
          <span>LAT: -6.2088 / LON: 106.8456</span>
          <span className="hidden sm:inline">BUILD: 2026.08.08</span>
        </div>
        <div className="flex items-center gap-6">
          <span>TLS 1.3 / ENCRYPTED</span>
          <span className="text-[#8D8B82]">PRESS [~] FOR TERMINAL</span>
        </div>
      </footer>

      {/* 4. COMMAND PALETTE MODAL */}
      <AnimatePresence>
        {commandPaletteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-full max-w-xl bg-[#11110F] border border-[#D7A94B]/40 rounded-sm p-4 font-mono text-xs space-y-4 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-[#8D8B82]/20 pb-2">
                <span className="text-[#D7A94B] font-bold">[ COMMAND PALETTE ]</span>
                <button onClick={() => setCommandPaletteOpen(false)} className="text-[#8D8B82] hover:text-[#D8D6CC]">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center bg-[#080808] px-3 py-2 border border-[#8D8B82]/20">
                <span className="text-[#D7A94B] mr-2">&gt;</span>
                <input
                  type="text"
                  value={paletteInput}
                  onChange={(e) => setPaletteInput(e.target.value)}
                  placeholder="Type route (home, work, about...) or filter..."
                  className="bg-transparent border-none outline-none flex-1 text-[#D8D6CC] text-xs font-mono"
                  autoFocus
                />
              </div>

              <div className="space-y-1 max-h-64 overflow-y-auto">
                <div className="text-[9px] text-[#55544E] uppercase tracking-widest py-1">NAVIGATION INDEX</div>
                {navRailLinks
                  .filter((l) => l.label.toLowerCase().includes(paletteInput.toLowerCase()) || l.sysId.toLowerCase().includes(paletteInput.toLowerCase()))
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setCommandPaletteOpen(false)}
                      className="flex items-center justify-between p-2 hover:bg-[#171713] text-[#8D8B82] hover:text-[#D7A94B] transition-colors border border-transparent hover:border-[#D7A94B]/30"
                    >
                      <span>{link.sysId} // {link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
