import React from "react";
import type { Metadata } from "next";
import { SpotlightCard } from "../components/SpotlightCard";
import { SectionHeader } from "../components/SectionHeader";
import { roles } from "../data";
import { Terminal, Shield, Award, Users, BookOpen, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Dossier",
  description: "About Hammad Matt - Tech Lead, Systems Architect, and Cybersecurity Professional biography.",
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-6 space-y-20">
      
      {/* Overview Section */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
        
        {/* Biography text */}
        <div className="space-y-6">
          <SectionHeader
            label="SECURITY DOSSIER"
            title="Dossier: Hammad Matt"
            subtitle="Operational record, current focus coordinates, and technical philosophies."
          />
          
          <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
            <p>
              I am a Jakarta-based fullstack developer and independent security researcher. I build highly-scalable systems that handle production loads, and then write automated tools to test their security boundaries from line one.
            </p>
            <p>
              Currently, as the core systems developer for a national Travel & Logistics business group, I architect and own a monorepo digital ecosystem. This infrastructure centralizes Umrah pilgrim records, airport operations, and finance pipelines, migrating legacy spreadsheet workflows into transactional PostgreSQL.
            </p>
            <p>
              Simultaneously, I serve as Tech Lead at Solivate Studio, guiding architecture decisions, orchestrating delivery pipelines, and conducting strict code security audits for retail POS systems, SaaS frameworks, and high-performance APIs.
            </p>
            <p>
              In cybersecurity, I develop automated reconnaissance scanners that focus on OSINT mapping, exposed configuration vectors, and Broken Link Hijacking (BLH) threats. Responsible disclosures driven by these systems have led to formal recognitions by NASA VDP and multiple regional and state institutions across Indonesia.
            </p>
          </div>

          {/* Identity Grid metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">ROLE</div>
              <div className="text-xs font-bold text-white">TECH LEAD / AUDITOR</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">LOCATION</div>
              <div className="text-xs font-bold text-white">JAKARTA, INDONESIA</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">STATUS</div>
              <div className="text-xs font-bold text-white text-emerald-400">● AVAILABLE</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">FOCUS</div>
              <div className="text-xs font-bold text-white text-[#27E0FF]">SYSTEMS & SEC</div>
            </div>
          </div>
        </div>

        {/* Profile Image card layout */}
        <div className="flex justify-center lg:justify-end">
          <SpotlightCard className="glass-panel-1 rounded-2xl p-4 border border-white/10 w-full max-w-[360px] space-y-4 scanline-effect">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
              {/* Fallback geometric profile representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#060912] via-[#0A6CFF]/20 to-[#A855F7]/20 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <Shield className="w-16 h-16 text-[#27E0FF] animate-pulse" />
                <span className="font-mono text-xs text-white tracking-widest">[ IDENT_VERIFIED ]</span>
                <span className="font-mono text-[9px] text-gray-500">HAMMAD MATT // MATT28</span>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-3 space-y-1.5 font-mono text-[10px] text-gray-500">
              <div className="flex justify-between">
                <span>ENCRYPTION KEYS</span>
                <span className="text-[#27E0FF]">AES_256_GCM</span>
              </div>
              <div className="flex justify-between">
                <span>AUTHORIZED LEVEL</span>
                <span className="text-white">SENIOR AUDITOR</span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Philosophy Coordinates */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 space-y-3">
          <Award className="w-6 h-6 text-[#27E0FF]" />
          <h3 className="text-base font-bold text-white">Responsible Disclosure</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Committed to collaborative vulnerability disclosure to protect target infrastructures and users from unpatched entry points.
          </p>
        </SpotlightCard>

        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 space-y-3">
          <Cpu className="w-6 h-6 text-[#A855F7]" />
          <h3 className="text-base font-bold text-white">Clean & Secure Code</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Writing testable, modular, and optimized systems components, ensuring authorization gates are built into the design from day one.
          </p>
        </SpotlightCard>

        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 space-y-3">
          <Users className="w-6 h-6 text-emerald-400" />
          <h3 className="text-base font-bold text-white">Pragmatic Tech Lead</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Migrating complex processes from legacy models into maintainable databases, ensuring engineering velocity matches product goals.
          </p>
        </SpotlightCard>
      </section>

      {/* Non-traditional Education statement */}
      <section className="glass-panel-2 rounded-2xl p-8 border border-white/5 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#27E0FF]">
          <BookOpen className="w-4 h-4" />
          <span>EDUCATION COORDINATES</span>
        </div>
        <h3 className="text-lg font-bold text-white">Self-Directed Curriculum & Kesetaraan Paket C</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          I opted for Indonesia's Paket C equivalency pathway to bypass standard schooling timelines. This structural choice allowed me to construct an intensive, self-directed systems programming and cybersecurity syllabus, aligning my skills directly with production requirements while starting professional contract work.
        </p>
      </section>
    </main>
  );
}
