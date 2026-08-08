"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Menu, X, Command, ArrowRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "HammSec Core OS v2.0.26 [Secure Connection Established]",
    "Type 'help' to view available operations.",
    ""
  ]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Implement Sticky + Hide-on-scroll logic
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down -> hide navbar
        setNavVisible(false);
      } else {
        // Scrolling up -> show navbar
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
        "  help      - Show this reference menu",
        "  about     - Navigate/Info on security dossier",
        "  projects  - Show portfolio items list",
        "  contact   - Get contact nodes",
        "  clear     - Clean up terminal trace",
        "  sysinfo   - Fetch current diagnostic payload"
      );
    } else if (cleaned === "about") {
      newOutput.push("Hammad Matt - Tech Lead & Security Researcher in Jakarta. Specialized in audits & reconnaissance automation.");
    } else if (cleaned === "projects") {
      newOutput.push("1. ShellMate (Multi-SSH Client)", "2. BLH Hunter (Recon & Hijack Scan)", "3. Proxymon (Multi-interface Proxy)");
    } else if (cleaned === "contact") {
      newOutput.push("Email: admin@hammad.biz.id", "GitHub: github.com/hmad28", "LinkedIn: linkedin.com/in/hmatt28");
    } else if (cleaned === "clear") {
      setTerminalOutput([]);
      setTerminalInput("");
      return;
    } else if (cleaned === "sysinfo") {
      newOutput.push(
        `TIME: ${new Date().toISOString()}`,
        "STATUS: AVAILABLE_FOR_PROJECTS",
        "SECURITY_LEVEL: AUDITOR_CONFIRMED"
      );
    } else if (cleaned) {
      newOutput.push(`Command not recognized: '${cmd}'. Type 'help' for instructions.`);
    } else {
      newOutput.push("");
    }
    
    setTerminalOutput(newOutput);
    setTerminalInput("");
  };

  return (
    <>
      {/* Hide navbar on scroll down, slide in on scroll up */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-500 pt-6 ${
          navVisible ? "translate-y-0" : "-translate-y-full pt-0"
        }`}
      >
        <motion.div
          animate={{
            width: scrolled ? "90%" : "95%",
            maxWidth: scrolled ? "1000px" : "1200px",
            y: scrolled ? -8 : 0
          }}
          className={`glass-panel-1 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "bg-opacity-80 shadow-2xl" : "bg-opacity-50"
          }`}
        >
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 font-mono font-bold text-sm tracking-widest text-[#27E0FF]">
            <Shield className="w-5 h-5 animate-pulse" />
            <span>[ H//SEC ]</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1 transition-colors duration-300 ${
                    active ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#27E0FF] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions Menu */}
          <div className="flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setTerminalOpen(true)}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono flex items-center gap-2 cursor-pointer"
              title="Open secure console shortcut: Ctrl+K"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px] text-[#27E0FF]">[CTRL+K]</span>
            </button>

            {/* Availability Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A6CFF]/10 border border-[#0A6CFF]/20 text-[10px] font-mono text-[#27E0FF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-white/80 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Fullscreen Overlay Mobile Menu with Staggered luxury animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#060912]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden"
          >
            {/* Close Header */}
            <div className="flex justify-between items-center w-full mt-4">
              <span className="font-mono text-xs text-gray-500">NAVIGATION NODES</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links with Staggered Luxury entry */}
            <nav className="flex flex-col gap-4 text-left my-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl sm:text-4xl font-extrabold text-white hover:text-[#27E0FF] transition-colors flex items-center gap-4 py-2 group"
                  >
                    <span className="text-[#27E0FF]/30 font-mono text-sm tracking-widest">0{idx + 1}</span>
                    <span>{link.label}</span>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#27E0FF]" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col items-start gap-4 text-xs font-mono border-t border-white/10 pt-6 w-full">
              <span className="text-gray-500">CONNECTION: admin@hammad.biz.id</span>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>SYSTEM SECURE & ONLINE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive Console Terminal Modal */}
      <AnimatePresence>
        {terminalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg glass-panel-1 rounded-xl overflow-hidden border border-white/15"
            >
              {/* Header */}
              <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#27E0FF]" />
                  <span className="font-mono text-xs font-semibold text-gray-300">INTELLIGENCE_TERMINAL.EXE</span>
                </div>
                <button
                  onClick={() => setTerminalOpen(false)}
                  className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Outputs */}
              <div className="p-4 h-64 overflow-y-auto font-mono text-xs text-[#27E0FF] bg-[#05070B]/90 space-y-1">
                {terminalOutput.map((out, index) => (
                  <div key={index} className="whitespace-pre-wrap leading-relaxed">
                    {out}
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeCommand(terminalInput);
                }}
                className="flex border-t border-white/10 bg-[#05070B]/95 px-3 py-2 items-center"
              >
                <span className="text-[#27E0FF] font-mono text-sm mr-2">&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white font-mono text-xs"
                  placeholder="Type command ('help', 'sysinfo', 'about'...) and hit Enter"
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
