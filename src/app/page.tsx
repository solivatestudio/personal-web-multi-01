"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { NetworkTopologyVisual } from "./components/NetworkTopologyVisual";
import { allProjects, roles } from "./data";

export default function HomePage() {
  const [selectedOpIndex, setSelectedOpIndex] = useState(0);
  const activeOp = allProjects[selectedOpIndex] || allProjects[0];

  return (
    <div className="p-6 md:p-12 space-y-24 workstation-grid">
      
      {/* 1. HERO — System Initialization Screen & Brutal Background Typo */}
      <section className="relative min-h-[80vh] flex flex-col justify-between py-6">
        
        {/* Giant Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.035]">
          <span className="text-display-giant font-extrabold text-[#D8D6CC] tracking-tighter whitespace-nowrap">
            OFFENSIVE SECURITY
          </span>
        </div>

        {/* System Initialization Header */}
        <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-4 font-mono text-[10px] text-[#8D8B82] relative z-10">
          <div className="flex items-center gap-2 text-[#D7A94B]">
            <Terminal className="w-3.5 h-3.5" />
            <span>SYS::INIT // SUBJECT_IDENTIFIED</span>
          </div>
          <div>REF: 001_SECOPS</div>
        </div>

        {/* Asymmetric System Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10 pt-8">
          
          {/* Left Metadata & Role Description (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#8D8B82] uppercase tracking-widest">[ SUBJECT NAME ]</div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-[#D8D6CC] tracking-tight">
                HAMMAD MATT
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs border-y border-[#8D8B82]/15 py-4">
              <div>
                <span className="text-[#55544E] block text-[9px]">PRIMARY ROLE</span>
                <span className="text-[#D7A94B] font-bold">ETHICAL HACKER / TECH LEAD</span>
              </div>
              <div>
                <span className="text-[#55544E] block text-[9px]">SPECIALTY</span>
                <span className="text-[#D8D6CC]">APPSEC & OSINT RECON</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#8D8B82] leading-relaxed max-w-xl font-mono">
              Operating workstation for security research, production system architecture, and vulnerability discovery automation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/portfolio"
                data-cursor="INSPECT"
                className="px-6 py-3 bg-[#D7A94B] text-[#080808] font-mono text-xs font-bold hover:bg-[#D8D6CC] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>ENTER OPERATIONS INDEX</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Network Topology Recon Visual (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <NetworkTopologyVisual />
          </div>

        </div>

        {/* Module Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#8D8B82]/20 pt-6 font-mono text-xs relative z-10">
          <div className="p-3 bg-[#11110F] border border-[#8D8B82]/15">
            <span className="text-[9px] text-[#55544E] block">[01] MODULE</span>
            <span className="text-[#D8D6CC] font-bold">RESEARCH</span>
          </div>
          <div className="p-3 bg-[#11110F] border border-[#8D8B82]/15">
            <span className="text-[9px] text-[#55544E] block">[02] MODULE</span>
            <span className="text-[#D7A94B] font-bold">OFFENSIVE SEC</span>
          </div>
          <div className="p-3 bg-[#11110F] border border-[#8D8B82]/15">
            <span className="text-[9px] text-[#55544E] block">[03] MODULE</span>
            <span className="text-[#D8D6CC] font-bold">APPSEC AUDIT</span>
          </div>
          <div className="p-3 bg-[#11110F] border border-[#8D8B82]/15">
            <span className="text-[9px] text-[#55544E] block">[04] MODULE</span>
            <span className="text-[#D8D6CC] font-bold">ENGINEERING</span>
          </div>
        </div>

      </section>

      {/* 2. ACTIVE OPERATIONS — Tactical Data Table + Live Preview Pane */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3 font-mono text-xs">
          <span className="text-[#D7A94B] font-bold">SYS.02 // ACTIVE OPERATIONS</span>
          <span className="text-[#8D8B82]">TOTAL RECORDS: 0{allProjects.length}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Operations List Table (7 Cols) */}
          <div className="lg:col-span-7 border border-[#8D8B82]/15 bg-[#11110F] divide-y divide-[#8D8B82]/15 font-mono text-xs">
            <div className="grid grid-cols-12 p-3 text-[9px] text-[#55544E] uppercase tracking-wider font-bold bg-[#171713]">
              <span className="col-span-3">ID</span>
              <span className="col-span-5">SUBJECT</span>
              <span className="col-span-4">CLASS</span>
            </div>

            {allProjects.map((project, idx) => {
              const isSelected = selectedOpIndex === idx;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setSelectedOpIndex(idx)}
                  className={`grid grid-cols-12 p-3.5 cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#171713] text-[#D7A94B] font-bold border-l-2 border-[#D7A94B]"
                      : "text-[#8D8B82] hover:text-[#D8D6CC]"
                  }`}
                >
                  <span className="col-span-3">OP-00{project.id}</span>
                  <span className="col-span-5 truncate">{project.title}</span>
                  <span className="col-span-4 text-[10px] truncate">{project.category}</span>
                </div>
              );
            })}
          </div>

          {/* Operational Preview Pane (5 Cols) */}
          <div className="lg:col-span-5 border border-[#D7A94B]/30 bg-[#11110F] p-6 space-y-4 font-mono text-xs sticky top-16">
            <div className="flex justify-between items-center border-b border-[#8D8B82]/20 pb-2 text-[10px]">
              <span className="text-[#D7A94B]">OP-00{activeOp.id} // DETAILED PREVIEW</span>
              <span className="text-[#77E6A1]">STATUS: COMPLETED</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#D8D6CC]">{activeOp.title}</h3>
              <p className="text-xs text-[#8D8B82] leading-relaxed font-sans">{activeOp.excerpt}</p>
            </div>

            <div className="space-y-1 text-[10px] text-[#55544E] border-t border-[#8D8B82]/15 pt-3">
              <div>CLIENT / CONTEXT: {activeOp.company}</div>
              <div>CLASSIFICATION: PUBLIC RECORD</div>
            </div>

            <div className="pt-2">
              <Link
                href={`/portfolio/${activeOp.slug}`}
                data-cursor="OPEN"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D7A94B] hover:text-[#D8D6CC]"
              >
                <span>OPEN FULL CASE FILE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PERSONNEL FIELD LOG */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3 font-mono text-xs">
          <span className="text-[#D7A94B] font-bold">LOG.03 // CHRONOLOGICAL FIELD LOG</span>
          <span className="text-[#8D8B82]">SECURITY RECON RECORDS</span>
        </div>

        <div className="space-y-4">
          {roles.map((role, idx) => (
            <div key={idx} className="border border-[#8D8B82]/15 bg-[#11110F] p-6 font-mono text-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8D8B82]/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#D7A94B] font-bold">[{role.period}]</span>
                  <span className="text-[#D8D6CC] font-bold text-sm">{role.title}</span>
                </div>
                <span className="text-[#8D8B82] text-[10px]">{role.company}</span>
              </div>

              <ul className="space-y-2 text-xs text-[#8D8B82] font-sans pl-2">
                {role.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-2">
                    <span className="text-[#D7A94B] font-mono select-none">&gt;&gt;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECURE TRANSMISSION CHANNEL CTA */}
      <section className="border border-[#8D8B82]/20 bg-[#11110F] p-8 md:p-12 text-center space-y-6 font-mono">
        <div className="text-[10px] text-[#D7A94B] tracking-widest">[ TRANSMISSION CHANNEL ]</div>
        
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#D8D6CC]">
          HAVE A SYSTEM WORTH PROTECTING?
        </h2>

        <p className="text-xs text-[#8D8B82] max-w-md mx-auto leading-relaxed font-sans">
          Initiate encrypted communication for penetration testing, source code audits, or system architecture review.
        </p>

        <div>
          <Link
            href="/contact"
            data-cursor="TRANSMIT"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D7A94B] text-[#080808] text-xs font-bold hover:bg-[#D8D6CC] transition-colors"
          >
            <span>OPEN SECURE CHANNEL</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
