import React from "react";
import Link from "next/link";
import { Shield, Mail, Cpu, Server } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#05070B] overflow-hidden">
      {/* Decorative Technical Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#27E0FF]/30 to-transparent" />

      {/* Grid background */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Dossier info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-mono font-bold text-sm tracking-widest text-[#27E0FF]">
              <Shield className="w-5 h-5" />
              <span>[ HAMMAD MATT ]</span>
            </Link>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Enterprise Cyber Security Professional, Systems Architect, and Independent Security Researcher. 
              Delivering secure development implementations and structured vulnerability discovery automation.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SYSTEM DIAGNOSTIC: ONLINE // SECURE</span>
            </div>
          </div>

          {/* Quick Nodes Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase">Directory Nodes</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#27E0FF] transition-colors">Home Core</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#27E0FF] transition-colors">Security Dossier</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#27E0FF] transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#27E0FF] transition-colors">Career Timeline</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#27E0FF] transition-colors">Consulting Matrix</Link>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase">Communication Channels</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <a href="mailto:admin@hammad.biz.id" className="hover:text-[#27E0FF] transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>admin@hammad.biz.id</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/hmad28" target="_blank" rel="noreferrer" className="hover:text-[#27E0FF] transition-colors flex items-center gap-2">
                  <span className="font-bold text-[10px] w-3.5">GH</span>
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/hmatt28" target="_blank" rel="noreferrer" className="hover:text-[#27E0FF] transition-colors flex items-center gap-2">
                  <span className="font-bold text-[10px] w-3.5">LN</span>
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright and security labels */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-[10px] font-mono text-gray-500 gap-4">
          <div className="flex items-center gap-4">
            <span>© {currentYear} HAMMAD MATT. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="hidden sm:inline">LOC: JAKARTA, ID</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-[#0A6CFF]" />
              <span>TLS_1.3_ENCRYPTED</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Server className="w-3 h-3 text-[#A855F7]" />
              <span>EDGE_SECURED</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
