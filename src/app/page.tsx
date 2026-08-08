"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Shield } from "lucide-react";
import { SpotlightCard } from "./components/SpotlightCard";
import { CyberOrb } from "./components/CyberOrb";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeader } from "./components/SectionHeader";
import { CountUp } from "./components/CountUp";
import { portfolioProjects, roles, securityRecognitions } from "./data";

export default function HomePage() {
  const marqueeItems = [
    "OSCP CERTIFIED",
    "NASA VDP APPRECIATION LOP",
    "ESDM-CSIRT RECOGNIZED",
    "KEMENTERIAN PU-CSIRT VALIDATED",
    "BMKG-CSIRT CONTRIBUTOR",
    "CRES VAULT COMPLIANT"
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-6 space-y-28">
      {/* 1. HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative">
        
        {/* Left Headline */}
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A6CFF]/10 border border-[#0A6CFF]/20 text-[10px] font-mono text-[#27E0FF] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27E0FF] animate-ping"></span>
            <span>SECURE INTELLIGENCE DOSSIER</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] md:max-w-xl">
            We build systems & test their <span className="text-[#27E0FF]">Security Limits</span>.
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
            I am Hammad Matt, a Tech Lead and Security Researcher. I construct secure enterprise microservice codebases, automate OSINT reconnaissance pipelines, and audit complex web integrations.
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/portfolio"
              className="px-5 py-3 rounded-lg bg-[#0A6CFF] hover:bg-[#0052cc] text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(10,108,255,0.3)] hover:shadow-[0_0_30px_rgba(10,108,255,0.5)] flex items-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-5 py-3 rounded-lg glass-panel-1 hover:bg-white/10 text-white font-mono text-xs font-semibold tracking-wider transition-all border border-white/10 flex items-center gap-2 cursor-pointer"
            >
              <span>ESTABLISH NODE CONNECTION</span>
            </Link>
          </div>
        </div>

        {/* Right Interactive Cyber Orb */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <CyberOrb />
        </div>
      </section>

      {/* 2. INFINITE CAROUSEL (MARQUEE) - PURE CSS CERTIFICATION VIBE */}
      <section className="relative overflow-hidden w-full py-4 border-y border-white/5 bg-[#05070B]/50 font-mono text-xs text-gray-400 marquee-container">
        <div className="marquee-track flex gap-12">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-2.5 shrink-0 text-[10px] tracking-widest text-[#27E0FF]">
              <Shield className="w-3.5 h-3.5" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. QUICK STATS COUNT-UP SECTION */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 text-center space-y-2">
          <div className="text-3xl font-extrabold text-white font-mono">
            <CountUp end={20} />+
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            PROJECTS DELIVERED
          </div>
        </SpotlightCard>

        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 text-center space-y-2">
          <div className="text-3xl font-extrabold text-white font-mono">
            <CountUp end={12} />+
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            CSIRT ACKNOWLEDGEMENTS
          </div>
        </SpotlightCard>

        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 text-center space-y-2">
          <div className="text-3xl font-extrabold text-white font-mono">
            <CountUp end={3} />+
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            YEARS RESEARCH EXPERIENCE
          </div>
        </SpotlightCard>

        <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 text-center space-y-2">
          <div className="text-3xl font-extrabold text-[#27E0FF] font-mono">
            100%
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            RESPONSIBLE DISCLOSURE
          </div>
        </SpotlightCard>
      </section>

      {/* 4. FEATURED WORK SECTION */}
      <section>
        <SectionHeader
          label="FEATURED CASE STUDIES"
          title="Security Utilities & Systems Built from Scratch"
          subtitle="Sanitized case studies mapping real architectural problems and security audits."
          action={{ label: "VIEW ALL WORK", href: "/portfolio" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE SNAPSHOT */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#27E0FF] uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ CAREER TIMELINE ]</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Production Ownership & Systems Delivery
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Maintaining high-throughput databases, leading core technology choices, and automating security audits in deployment.
          </p>
          <div className="pt-2">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#27E0FF] hover:text-white transition-colors group cursor-pointer"
            >
              <span>VIEW FULL SECURITY DOSSIER</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          {roles.slice(0, 2).map((role, idx) => (
            <SpotlightCard key={idx} className="glass-panel-2 rounded-xl p-6 border border-white/5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base font-bold text-white">{role.title}</h3>
                <span className="text-[10px] font-mono text-[#27E0FF] bg-[#27E0FF]/5 border border-[#27E0FF]/25 px-2.5 py-0.5 rounded-full">
                  {role.period}
                </span>
              </div>
              <div className="text-xs font-mono text-gray-400">{role.company}</div>
              <ul className="space-y-2 text-xs text-gray-400 list-disc list-inside">
                {role.details.slice(0, 2).map((detail, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED SECURITY RECOGNITION ACKNOWLEDGEMENT */}
      <section className="glass-panel-2 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/5">
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 tracking-wider">
            <span>✓ VERIFIED DISCLOSURES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Security Disclosures & Institutional Appreciations
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Responsible vulnerability disclosure is a core part of security hygiene. Reports filed through automated dorking reconnaissance engines like <b>BLH Hunter</b> have been acknowledged by NASA and multiple Indonesian ministries and governments.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {securityRecognitions.slice(0, 6).map((org) => (
              <span
                key={org}
                className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md hover:border-[#27E0FF]/30 transition-all duration-300"
              >
                {org}
              </span>
            ))}
            <Link
              href="/experience#awards"
              className="text-[10px] font-mono text-[#27E0FF] bg-[#27E0FF]/5 border border-[#27E0FF]/25 px-3 py-1.5 rounded-md hover:bg-[#27E0FF] hover:text-white transition-all cursor-pointer"
            >
              + view all acknowledgements
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA */}
      <section className="text-center py-12 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[300px] h-[300px] rounded-full glow-bubble-blue filter blur-[80px]" />
        </div>

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's build something secure.
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Need an implementation audit, a secure systems backend built, or a technical consultation? Start a node connection.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0A6CFF] hover:bg-[#0052cc] text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_25px_rgba(10,108,255,0.3)] cursor-pointer"
            >
              <span>CONNECT WITH HAMMAD MATT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
