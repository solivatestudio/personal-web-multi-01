"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Command, X, ArrowRight, Sun, Moon } from "lucide-react";

export function WorkstationShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [paletteInput, setPaletteInput] = useState("");

  const navLinks = [
    { href: "/", label: "_HOME", num: "01" },
    { href: "/about", label: "_ABOUT", num: "02" },
    { href: "/portfolio", label: "_PROJECTS", num: "03" },
    { href: "/experience", label: "_FIELD LOG", num: "04" },
    { href: "/services", label: "_SERVICES", num: "05" },
    { href: "/contact", label: "_CONTACT", num: "06" },
  ];

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1E8] dark:bg-[#090909] text-[#0A0A0A] dark:text-[#ECE9DF] brutalist-grid font-sans relative">
      
      {/* 1. STICKY NEO-BRUTALIST NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#FAF8F1] dark:bg-[#111111] border-b-2 border-black dark:border-[#ECE9DF] px-6 md:px-12 py-3 flex items-center justify-between font-mono text-xs shadow-[0_4px_0_#000] dark:shadow-[0_4px_0_#ECE9DF]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-black text-sm tracking-tight hover:text-[#B7F000] transition-colors">
          <span className="px-2 py-0.5 bg-black text-[#B7F000] font-mono font-bold">HM</span>
          <span>HAMMAD MATT</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  active ? "text-black dark:text-[#B7F000]" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#B7F000]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-1.5 border-2 border-black dark:border-[#ECE9DF] bg-[#B7F000] text-black font-mono text-[10px] font-bold brutalist-btn cursor-pointer flex items-center gap-1.5"
            title="Toggle Light/Dark Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isDarkMode ? "LIGHT" : "DARK"}</span>
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF552D] text-white font-mono text-xs font-bold brutalist-btn cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* 2. MAIN PAGE CONTENT */}
      <main className="flex-1 w-full max-w-[1560px] mx-auto">
        {children}
      </main>

      {/* 3. NEO-BRUTALIST FOOTER */}
      <footer className="border-t-3 border-black dark:border-[#ECE9DF] bg-[#0A0A0A] text-[#FAF8F1] p-8 md:p-16 space-y-12 font-mono">
        <div className="flex flex-col md:flex-row justify-between gap-8 border-b-2 border-white/20 pb-12">
          <div className="space-y-4 max-w-md">
            <div className="text-xl font-black text-[#B7F000] tracking-tight">HAMMAD MATT</div>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Ethical Hacker & Systems Lead based in Jakarta. Specializing in web penetration testing, source code audits, and OSINT vulnerability reconnaissance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-xs">
            <div className="space-y-2">
              <span className="text-[#FF552D] font-bold block">_DIRECTORY</span>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/" className="hover:text-[#B7F000]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#B7F000]">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#B7F000]">Projects</Link></li>
                <li><Link href="/experience" className="hover:text-[#B7F000]">Field Log</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[#B7F000] font-bold block">_CONNECT</span>
              <ul className="space-y-1 text-gray-300">
                <li><a href="mailto:admin@hammad.biz.id" className="hover:text-[#B7F000]">Email</a></li>
                <li><a href="https://github.com/hmad28" target="_blank" rel="noreferrer" className="hover:text-[#B7F000]">GitHub</a></li>
                <li><a href="https://linkedin.com/in/hmatt28" target="_blank" rel="noreferrer" className="hover:text-[#B7F000]">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 gap-4">
          <div>© {new Date().getFullYear()} HAMMAD MATT. ALL RIGHTS RESERVED.</div>
          <div className="text-[#B7F000] font-bold font-mono">&gt; EOF_</div>
        </div>
      </footer>

      {/* 4. COMMAND PALETTE GLASS MODAL (5-10% Glass usage) */}
      <AnimatePresence>
        {commandPaletteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-xl brutalist-glass p-6 space-y-4 font-mono text-xs text-black dark:text-white brutalist-shadow-lg"
            >
              <div className="flex justify-between items-center border-b-2 border-black dark:border-white pb-3">
                <span className="bg-[#B7F000] text-black px-2 py-0.5 font-bold">[ COMMAND PALETTE ]</span>
                <button onClick={() => setCommandPaletteOpen(false)} className="hover:text-[#FF552D]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center bg-white dark:bg-black border-2 border-black dark:border-white px-3 py-2">
                <span className="text-[#FF552D] font-bold mr-2">&gt;</span>
                <input
                  type="text"
                  value={paletteInput}
                  onChange={(e) => setPaletteInput(e.target.value)}
                  placeholder="Type route (home, work, about...) or command..."
                  className="bg-transparent border-none outline-none flex-1 text-xs font-mono font-bold"
                  autoFocus
                />
              </div>

              <div className="space-y-1 max-h-64 overflow-y-auto pt-2">
                {navLinks
                  .filter((l) => l.label.toLowerCase().includes(paletteInput.toLowerCase()))
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setCommandPaletteOpen(false)}
                      className="flex items-center justify-between p-2.5 hover:bg-[#B7F000] hover:text-black transition-colors border-2 border-transparent hover:border-black font-bold"
                    >
                      <span>{link.num} // {link.label}</span>
                      <ArrowRight className="w-4 h-4" />
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
