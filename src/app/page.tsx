"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./components/SpotlightCard";
import { RefractiveArtifact } from "./components/RefractiveArtifact";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeader } from "./components/SectionHeader";
import { CountUp } from "./components/CountUp";
import { portfolioProjects, roles, securityRecognitions } from "./data";
import { motion } from "framer-motion";

export default function HomePage() {
  const marqueeItems = [
    "APPLICATION SECURITY",
    "PENETRATION TESTING",
    "SECURITY RESEARCH",
    "OSINT RECONNAISSANCE",
    "VULNERABILITY DISCLOSURE",
    "INFRASTRUCTURE AUDITS"
  ];

  return (
    <main className="max-w-[1480px] mx-auto px-6 md:px-16 py-6 space-y-36">
      
      {/* 1. HERO SECTION — Asymmetric 100svh Editorial Layout */}
      <section className="min-h-[85vh] flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Left Headline (Takes 7 columns) */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-03-panel border border-white/10 text-[10px] font-mono text-[#8AE8FF] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AE8FF] animate-ping"></span>
            <span>SEC.01 // OBSIDIAN INTELLIGENCE INTERFACE</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-display-xl text-white uppercase font-extrabold tracking-tighter">
              BUILDING <br />
              <span className="text-[#8AE8FF]">RESILIENT</span> <br />
              SYSTEMS.
            </h1>
          </div>

          <p className="text-base text-gray-400 max-w-xl leading-relaxed font-sans font-light">
            I am Hammad Matt, Tech Lead & Security Researcher. I build high-throughput microservice backends, perform application penetration audits, and develop OSINT reconnaissance scanners.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Link
              href="/portfolio"
              data-cursor="EXPLORE"
              className="px-6 py-4 rounded-xl bg-[#8AE8FF] text-[#07090D] font-mono text-xs font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(138,232,255,0.25)] flex items-center gap-3 group cursor-pointer"
            >
              <span>SELECTED OPERATIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              data-cursor="CONNECT"
              className="px-6 py-4 rounded-xl glass-02-card hover:bg-white/10 text-white font-mono text-xs font-bold tracking-wider transition-all border border-white/10 flex items-center gap-2 cursor-pointer"
            >
              <span>ESTABLISH TUNNEL</span>
            </Link>
          </div>
        </div>

        {/* Right 3D Refractive Artifact & Intelligence Card (Takes 5 columns) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
          <RefractiveArtifact />

          {/* Floating Intelligence Panel */}
          <div className="glass-02-card rounded-xl p-4 border border-white/10 font-mono text-[10px] text-[#8AE8FF] space-y-2 w-full max-w-[280px] shadow-2xl">
            <div className="flex items-center justify-between text-white/50 border-b border-white/5 pb-1.5">
              <span>SYSTEM DIAGNOSTIC</span>
              <span className="text-[#77E6A1]">● ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>DOMAIN:</span>
              <span className="text-white">APPSEC / RECON</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-[#8AE8FF]">AUDITOR_CONFIRMED</span>
            </div>
          </div>
        </div>

      </section>

      {/* 2. EXPERTISE MARQUEE RIBBON */}
      <section className="relative overflow-hidden w-full py-5 border-y border-white/5 bg-[#0A0D12]/60 font-mono text-xs text-gray-400 marquee-container">
        <div className="marquee-track flex gap-16">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 shrink-0 tracking-widest text-xs">
              <span className="text-[#8AE8FF]">✦</span>
              <span className="text-white font-semibold">{item}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. QUANTITATIVE METRICS GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <SpotlightCard className="glass-02-card rounded-2xl p-8 border border-white/5 text-center space-y-2">
          <div className="text-display-lg text-white font-mono">
            <CountUp end={20} />+
          </div>
          <div className="mono-label text-gray-500">OPERATIONS DELIVERED</div>
        </SpotlightCard>

        <SpotlightCard className="glass-02-card rounded-2xl p-8 border border-white/5 text-center space-y-2">
          <div className="text-display-lg text-white font-mono">
            <CountUp end={12} />+
          </div>
          <div className="mono-label text-gray-500">CSIRT DISCLOSURES</div>
        </SpotlightCard>

        <SpotlightCard className="glass-02-card rounded-2xl p-8 border border-white/5 text-center space-y-2">
          <div className="text-display-lg text-white font-mono">
            <CountUp end={4} />Y+
          </div>
          <div className="mono-label text-gray-500">FIELD EXPERIENCE</div>
        </SpotlightCard>

        <SpotlightCard className="glass-02-card rounded-2xl p-8 border border-white/5 text-center space-y-2">
          <div className="text-display-lg text-[#8AE8FF] font-mono">
            100%
          </div>
          <div className="mono-label text-gray-500">RESPONSIBLE AUDIT</div>
        </SpotlightCard>
      </section>

      {/* 4. SELECTED OPERATIONS — Asymmetric Editorial Showcase */}
      <section className="space-y-12">
        <SectionHeader
          label="SEC.02 // SELECTED OPERATIONS"
          title="Engineered Systems & Recon Scanners"
          subtitle="Case studies mapping real architectural problems, security tools, and deployment results."
          action={{ label: "ALL OPERATIONS", href: "/portfolio" }}
        />

        <div className="space-y-12">
          {portfolioProjects.map((project, idx) => (
            <SpotlightCard
              key={project.id}
              className="glass-02-card rounded-3xl p-8 md:p-12 border border-white/10 hover:border-[#8AE8FF]/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`space-y-6 ${idx % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="mono-label text-[10px] text-[#8AE8FF] bg-[#8AE8FF]/10 border border-[#8AE8FF]/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      {project.projectDate.split("-")[0]}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    <Link href={`/portfolio/${project.slug}`} className="hover:text-[#8AE8FF] transition-colors inline-flex items-center gap-3">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-7 h-7 text-gray-500" />
                    </Link>
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Manifest Box */}
                <div className={`glass-03-panel rounded-2xl p-6 border border-white/5 font-mono text-xs space-y-4 ${
                  idx % 2 === 0 ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                }`}>
                  <div className="border-b border-white/5 pb-3 text-gray-500 flex justify-between">
                    <span>CASE_MANIFEST.LOG</span>
                    <span className="text-[#8AE8FF]">VERIFIED</span>
                  </div>
                  <div className="space-y-2 text-gray-400">
                    <div>CLIENT: {project.company}</div>
                    <div>STATUS: PRODUCTION_READY</div>
                    <div>SECURITY_AUDIT: COMPLIANT</div>
                  </div>
                  <div className="pt-2">
                    <Link href={`/portfolio/${project.slug}`} className="text-[#8AE8FF] hover:underline">
                      Read Technical Case Study &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 5. CAREER LEDGER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <SectionHeader
            label="SEC.03 // FIELD EXPERIENCE"
            title="Production Ownership Timeline"
            subtitle="Leading architectural choices, maintaining databases, and automating security reconnaissance."
          />
        </div>

        <div className="lg:col-span-8 space-y-6">
          {roles.map((role, idx) => (
            <SpotlightCard key={idx} className="glass-02-card rounded-2xl p-8 border border-white/5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                  <span className="font-mono text-xs text-gray-500">{role.company}</span>
                </div>
                <span className="font-mono text-xs text-[#8AE8FF] bg-[#8AE8FF]/10 border border-[#8AE8FF]/20 px-3 py-1 rounded-full">
                  {role.period}
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
                {role.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 leading-relaxed">
                    <span className="text-[#8AE8FF] font-mono select-none">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED CREDENTIAL ACKNOWLEDGEMENT */}
      <section className="glass-02-card rounded-3xl p-8 md:p-16 relative overflow-hidden border border-white/10">
        <div className="relative z-10 max-w-4xl space-y-8">
          <span className="mono-label text-[#77E6A1] bg-[#77E6A1]/10 border border-[#77E6A1]/20 px-3 py-1 rounded-full">
            ✓ INSTITUTIONAL ACKNOWLEDGEMENTS
          </span>

          <h2 className="text-display-lg text-white font-extrabold tracking-tight">
            Responsible Security Disclosures
          </h2>

          <p className="text-base text-gray-400 leading-relaxed font-light max-w-2xl">
            Vulnerabilities identified through tools like <b>BLH Hunter</b> have been formally acknowledged by NASA and multiple Indonesian regional ministries and public CSIRTs.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {securityRecognitions.map((org) => (
              <span key={org} className="font-mono text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA — DRAMATIC FULLSCREEN CLOSING */}
      <section className="text-center py-20 relative glass-02-card rounded-3xl border border-white/10 p-12">
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-display-lg text-white font-extrabold tracking-tight uppercase">
            HAVE A SYSTEM <br />
            <span className="text-[#8AE8FF]">WORTH PROTECTING?</span>
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
            Need an application penetration audit, secure backend architecture, or a technical consultation?
          </p>
          <div>
            <Link
              href="/contact"
              data-cursor="TRANSMIT"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-[#8AE8FF] text-[#07090D] font-mono text-xs font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_35px_rgba(138,232,255,0.3)] cursor-pointer"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
