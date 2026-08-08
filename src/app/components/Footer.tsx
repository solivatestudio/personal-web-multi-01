import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/5 bg-[#07090D] overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-6 md:px-16 py-16 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Identity */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-mono font-bold text-xs tracking-widest text-white">
              <Shield className="w-4 h-4 text-[#8AE8FF]" />
              <span>[ HAMMAD MATT ]</span>
            </Link>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed font-mono">
              Enterprise Security Professional & Systems Lead. Focused on source code audits, secure backend design, and OSINT vulnerability reconnaissance.
            </p>
          </div>

          {/* Directory */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-gray-500 uppercase block text-[10px] tracking-widest">DIRECTORY</span>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-[#8AE8FF]">01 / Home</Link></li>
              <li><Link href="/about" className="hover:text-[#8AE8FF]">02 / Dossier</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#8AE8FF]">03 / Operations</Link></li>
              <li><Link href="/experience" className="hover:text-[#8AE8FF]">04 / Timeline</Link></li>
              <li><Link href="/services" className="hover:text-[#8AE8FF]">05 / Capabilities</Link></li>
            </ul>
          </div>

          {/* Direct Nodes */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-gray-500 uppercase block text-[10px] tracking-widest">COMMUNICATION</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:admin@hammad.biz.id" className="hover:text-[#8AE8FF]">admin@hammad.biz.id</a></li>
              <li><a href="https://github.com/hmad28" target="_blank" rel="noreferrer" className="hover:text-[#8AE8FF]">github.com/hmad28</a></li>
              <li><a href="https://linkedin.com/in/hmatt28" target="_blank" rel="noreferrer" className="hover:text-[#8AE8FF]">linkedin.com/in/hmatt28</a></li>
            </ul>
          </div>
        </div>

        {/* Editorial Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-[10px] font-mono text-gray-500 gap-4">
          <div>© {currentYear} HAMMAD MATT. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <span>LOC: JAKARTA, ID // 23:18 WIB</span>
            <span className="text-[#8AE8FF]">STATUS // SECURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
