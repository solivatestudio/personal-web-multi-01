"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Terminal, Shield, Cpu, ExternalLink, CheckCircle } from "lucide-react";
import { allProjects, roles, capabilities, securityRecognitions } from "./data";

export default function HomePage() {
  const [selectedOpIndex, setSelectedOpIndex] = useState(0);
  const activeOp = allProjects[selectedOpIndex] || allProjects[0];

  return (
    <div className="p-6 md:p-12 space-y-24">
      
      {/* 1. HERO SECTION — Asymmetric 52/48 Split Collage */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative py-6">
        
        {/* Left Hero Headline (7 Cols) */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Terminal Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#B7F000] font-mono text-xs font-bold border-2 border-black brutalist-shadow">
            <Terminal className="w-4 h-4" />
            <span>user@hammad-portfolio:~$ ./initialize_secops.sh</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-display-hero uppercase tracking-tight text-black dark:text-white">
              SECURE SYSTEMS. <br />
              BREAK ASSUMPTIONS. <br />
              <span className="bg-[#B7F000] text-black px-3 py-1 border-2 border-black inline-block transform -rotate-1 brutalist-shadow">
                ETHICAL HACKER.
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-xl font-mono leading-relaxed">
            I am Hammad Matt, Tech Lead & Security Researcher. I architect high-throughput backends, perform penetration audits, and build OSINT reconnaissance scanners.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/portfolio"
              data-cursor="VIEW ↗"
              className="px-6 py-4 bg-[#B7F000] text-black font-mono text-xs font-black tracking-wider brutalist-btn flex items-center gap-3 cursor-pointer"
            >
              <span>VIEW WORK ↗</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              data-cursor="CONNECT"
              className="px-6 py-4 bg-white dark:bg-[#111111] text-black dark:text-white font-mono text-xs font-bold brutalist-btn flex items-center gap-2 cursor-pointer"
            >
              <span>OPEN CHANNEL</span>
            </Link>
          </div>

          {/* Sticker Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="brutalist-sticker bg-white dark:bg-[#111111] text-black dark:text-white px-3 py-1 transform rotate-1">
              [ ETHICAL BY CHOICE ]
            </span>
            <span className="brutalist-sticker bg-[#FF552D] text-white px-3 py-1 transform -rotate-1">
              [ RESPONSIBLE DISCLOSURE ]
            </span>
            <span className="brutalist-sticker bg-[#3458FF] text-white px-3 py-1">
              [ AUTHORIZED ACCESS ONLY ]
            </span>
          </div>

        </div>

        {/* Right Cyber Workstation Terminal Collage (5 Cols) */}
        <div className="lg:col-span-5 relative space-y-4">
          
          {/* Main Terminal Window */}
          <div className="bg-black text-[#B7F000] border-3 border-black brutalist-shadow-hero rounded-sm p-4 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center border-b border-white/20 pb-2 text-[10px] text-gray-400">
              <span className="text-[#B7F000] font-bold">TERMINAL // RECON_NODE_01</span>
              <span>_ □ ×</span>
            </div>

            <div className="space-y-1 text-[11px] leading-relaxed">
              <div className="text-white">&gt; target_host: 10.0.4.12</div>
              <div className="text-gray-400">&gt; checking_vulnerabilities... [OK]</div>
              <div className="text-[#B7F000]">&gt; payload_status: VERIFIED_SAFE</div>
              <div className="text-[#FF552D]">&gt; scan_res: 0 EXPLOITS / 12 AUDITED</div>
            </div>
          </div>

          {/* Secondary Code Card */}
          <div className="bg-[#FAF8F1] dark:bg-[#111111] border-2 border-black dark:border-white p-4 brutalist-shadow font-mono text-xs space-y-2 transform rotate-1">
            <div className="flex justify-between items-center text-[10px] text-gray-500 border-b border-black/10 pb-1">
              <span className="font-bold text-[#FF552D]">script.rs</span>
              <span>STATUS: COMPILED</span>
            </div>
            <pre className="text-[10px] text-black dark:text-white leading-tight">
              {`fn audit_target(scope: &Scope) -> AuditResult {
    let scanner = ReconScanner::new(scope);
    scanner.execute_pass()
}`}
            </pre>
          </div>

        </div>

      </section>

      {/* 2. INFINITE MARQUEE RIBBON */}
      <section className="relative overflow-hidden w-full py-4 border-y-3 border-black dark:border-[#ECE9DF] bg-black text-[#B7F000] font-mono text-xs font-bold marquee-container">
        <div className="marquee-track flex gap-12">
          {[
            "APPLICATION SECURITY",
            "PENETRATION TESTING",
            "SECURITY RESEARCH",
            "OSINT RECONNAISSANCE",
            "VULNERABILITY DISCLOSURE",
            "INFRASTRUCTURE AUDITS"
          ].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 shrink-0 tracking-widest">
              <span className="text-[#FF552D]">✦</span>
              <span className="text-[#B7F000]">{item}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. SELECTED OPERATIONS — Featured + Data Rows */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3 font-mono text-xs">
          <span className="bg-[#B7F000] text-black px-2 py-0.5 font-bold">_PROJECTS</span>
          <span className="font-bold">SELECTED OPERATIONS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Operations List (7 Cols) */}
          <div className="lg:col-span-7 border-2 border-black dark:border-white bg-[#FAF8F1] dark:bg-[#111111] divide-y-2 divide-black dark:divide-white font-mono text-xs brutalist-shadow">
            <div className="grid grid-cols-12 p-3 text-[10px] bg-black text-white font-bold uppercase tracking-wider">
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
                  className={`grid grid-cols-12 p-4 cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#B7F000] text-black font-bold"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="col-span-3">OP-00{project.id}</span>
                  <span className="col-span-5 truncate">{project.title}</span>
                  <span className="col-span-4 text-[10px] truncate">{project.category}</span>
                </div>
              );
            })}
          </div>

          {/* Active Preview Pane (5 Cols) */}
          <div className="lg:col-span-5 border-2 border-black dark:border-white bg-[#FAF8F1] dark:bg-[#111111] p-6 space-y-4 font-mono text-xs brutalist-shadow sticky top-20">
            <div className="flex justify-between items-center border-b-2 border-black dark:border-white pb-2 text-[10px]">
              <span className="bg-[#FF552D] text-white px-2 py-0.5 font-bold">OP-00{activeOp.id} // PREVIEW</span>
              <span className="text-[#B7F000] font-bold bg-black px-2 py-0.5">COMPLETED</span>
            </div>

            <h3 className="text-lg font-black text-black dark:text-white">{activeOp.title}</h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 font-sans leading-relaxed">{activeOp.excerpt}</p>

            <div className="pt-2">
              <Link
                href={`/portfolio/${activeOp.slug}`}
                data-cursor="OPEN"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-black dark:text-white hover:text-[#FF552D]"
              >
                <span>OPEN FULL CASE FILE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. EXPERTISE / WHAT I DO — 3-Column Neo-Brutalist Cards */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3 font-mono text-xs">
          <span className="bg-[#FF552D] text-white px-2 py-0.5 font-bold">_WHAT I DO</span>
          <span className="font-bold">SOLVING SECURITY DIFFERENTLY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const bgAccents = ["bg-[#B7F000]", "bg-[#FF552D]", "bg-[#3458FF]"];
            const textAccents = ["text-black", "text-white", "text-white"];
            return (
              <div key={idx} className="brutalist-card bg-[#FAF8F1] dark:bg-[#111111] p-6 space-y-4 font-mono text-xs">
                <div className={`inline-block px-3 py-1 font-bold ${bgAccents[idx % 3]} ${textAccents[idx % 3]} border-2 border-black`}>
                  {cap.id}
                </div>
                <h3 className="text-base font-black text-black dark:text-white font-sans">{cap.title}</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 font-sans leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FINAL CTA STATEMENT */}
      <section className="border-3 border-black dark:border-white bg-black text-white p-8 md:p-16 text-center space-y-6 font-mono brutalist-shadow-hero">
        <div className="inline-block bg-[#B7F000] text-black px-3 py-1 font-bold text-xs">[ OPEN CHANNEL ]</div>
        
        <h2 className="text-3xl md:text-5xl font-black uppercase text-[#FAF8F1]">
          HAVE A SYSTEM WORTH PROTECTING?
        </h2>

        <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed font-sans">
          Initiate encrypted communication for penetration testing, source code audits, or system architecture review.
        </p>

        <div>
          <Link
            href="/contact"
            data-cursor="TRANSMIT"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B7F000] text-black font-mono text-xs font-black brutalist-btn cursor-pointer"
          >
            <span>TRANSMIT MESSAGE ↵</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
