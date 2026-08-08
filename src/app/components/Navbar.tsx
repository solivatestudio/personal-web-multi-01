"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Command, ArrowRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [fullscreenMenuOpen, setFullscreenMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "OBSIDIAN INTELLIGENCE CORE v3.1",
    "Type 'help' for navigation parameters.",
    ""
  ]);

  const navLinks = [
    { href: "/", label: "Home", category: "OVERVIEW" },
    { href: "/about", label: "About", category: "PROFILE DOSSIER" },
    { href: "/portfolio", label: "Projects", category: "SELECTED OPERATIONS" },
    { href: "/experience", label: "Experience", category: "FIELD TIMELINE" },
    { href: "/services", label: "Services", category: "CAPABILITY MATRIX" },
    { href: "/contact", label: "Contact", category: "TUNNEL CONNECTION" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 180) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const executeCommand = (cmd: string) => {
    const cleaned = cmd.toLowerCase().trim();
    const newOutput = [...terminalOutput, `> ${cmd}`];
    
    if (cleaned === "help") {
      newOutput.push(
        "Available commands:",
        "  help      - Reference menu",
        "  about     - Security dossier summary",
        "  projects  - Portfolio operations list",
        "  contact   - Transmission nodes",
        "  clear     - Wipe console history"
      );
    } else if (cleaned === "about") {
      newOutput.push("Hammad Matt - Tech Lead & Security Researcher. Focus: AppSec & OSINT Automation.");
    } else if (cleaned === "projects") {
      newOutput.push("1. ShellMate (Multi-SSH Client)", "2. BLH Hunter (Recon Scan)", "3. Proxymon (Proxy Monitor)");
    } else if (cleaned === "clear") {
      setTerminalOutput([]);
      setTerminalInput("");
      return;
    } else if (cleaned) {
      newOutput.push(`Command unrecognized: '${cmd}'. Type 'help'.`);
    } else {
      newOutput.push("");
    }
    
    setTerminalOutput(newOutput);
    setTerminalInput("");
  };

  return (
    <>
      {/* Floating Glass Capsule Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-6 transition-all duration-500 pt-7 ${
          navVisible ? "translate-y-0" : "-translate-y-full pt-0"
        }`}
      >
        <motion.div
          animate={{
            width: scrolled ? "88%" : "94%",
            maxWidth: scrolled ? "1100px" : "1380px",
            y: scrolled ? -10 : 0
          }}
          className={`glass-01-nav rounded-full px-7 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "bg-opacity-90 shadow-2xl" : "bg-opacity-40"
          }`}
        >
          {/* Brand Monogram */}
          <Link href="/" className="flex items-center gap-2.5 font-mono font-bold text-xs tracking-widest text-white">
            <Shield className="w-4 h-4 text-[#8AE8FF]" />
            <span>[ HAMMAD MATT ]</span>
          </Link>

          {/* Desktop Direct Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    active ? "text-[#8AE8FF] font-bold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#8AE8FF]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-4">
            {/* CLI Modal Trigger */}
            <button
              onClick={() => setTerminalOpen(true)}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#8AE8FF]/30 transition-all text-xs font-mono flex items-center gap-2 cursor-pointer"
              title="Console shortcut: Ctrl+K"
            >
              <Command className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline text-[9px] text-[#8AE8FF]">[CTRL+K]</span>
            </button>

            {/* INDEX + Fullscreen Editorial Menu Trigger */}
            <button
              onClick={() => setFullscreenMenuOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#8AE8FF]/40 text-xs font-mono font-bold text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>INDEX</span>
              <span className="text-[#8AE8FF]">+</span>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Fullscreen Smoked Glass Editorial Menu */}
      <AnimatePresence>
        {fullscreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#07090D]/95 backdrop-blur-3xl flex flex-col justify-between p-8 md:p-16"
          >
            {/* Top Close Bar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto border-b border-white/5 pb-6">
              <span className="font-mono text-xs text-[#8AE8FF] tracking-widest">[ SYSTEM INDEX DIRECTORY ]</span>
              <button
                onClick={() => setFullscreenMenuOpen(false)}
                className="px-4 py-2 rounded-full glass-02-card text-xs font-mono text-white hover:border-[#8AE8FF] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 text-[#8AE8FF]" />
              </button>
            </div>

            {/* Main Editorial Menu Links */}
            <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setFullscreenMenuOpen(false)}
                      className="group flex items-baseline gap-6 text-display-lg text-gray-400 hover:text-white transition-colors py-1"
                    >
                      <span className="font-mono text-xs sm:text-base text-[#8AE8FF]/40 group-hover:text-[#8AE8FF] transition-colors">
                        0{idx + 1} /
                      </span>
                      <span>{link.label}</span>
                      <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all text-[#8AE8FF] hidden sm:inline" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Sidebar Metadata Preview */}
              <div className="hidden lg:block space-y-6 glass-02-card p-8 rounded-2xl border border-white/5">
                <div className="space-y-2 font-mono text-xs">
                  <span className="text-gray-500 uppercase block text-[10px]">CURRENT COORDINATES</span>
                  <div className="text-white font-bold">JAKARTA, ID // (UTC+7)</div>
                </div>

                <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-4">
                  <span className="text-gray-500 uppercase block text-[10px]">AVAILABILITY STATUS</span>
                  <div className="flex items-center gap-2 text-[#77E6A1]">
                    <span className="w-2 h-2 rounded-full bg-[#77E6A1] animate-pulse"></span>
                    <span>AVAILABLE FOR AUDITS & PROJECTS</span>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-4">
                  <span className="text-gray-500 uppercase block text-[10px]">PRIMARY ACCENT</span>
                  <div className="text-[#8AE8FF]">ICE CYAN #8AE8FF</div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] font-mono text-gray-500 border-t border-white/5 pt-6">
              <span>© {new Date().getFullYear()} HAMMAD MATT</span>
              <span>CLASSIFICATION // CONFIDENTIAL</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLI Modal Console */}
      <AnimatePresence>
        {terminalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg glass-01-nav rounded-2xl overflow-hidden border border-white/15"
            >
              <div className="flex items-center justify-between bg-white/5 px-5 py-3 border-b border-white/10">
                <span className="font-mono text-xs font-semibold text-gray-300">OBSIDIAN_TERMINAL.EXE</span>
                <button onClick={() => setTerminalOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 h-64 overflow-y-auto font-mono text-xs text-[#8AE8FF] bg-[#07090D]/90 space-y-1">
                {terminalOutput.map((out, index) => (
                  <div key={index} className="whitespace-pre-wrap leading-relaxed">
                    {out}
                  </div>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeCommand(terminalInput);
                }}
                className="flex border-t border-white/10 bg-[#07090D] px-4 py-2.5 items-center"
              >
                <span className="text-[#8AE8FF] font-mono text-sm mr-2">&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white font-mono text-xs"
                  placeholder="Type 'help' and press Enter..."
                  autoFocus
                />
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
