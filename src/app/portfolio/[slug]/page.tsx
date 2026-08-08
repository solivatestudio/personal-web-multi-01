"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { allProjects } from "../../data";
import { SectionHeader } from "../../components/SectionHeader";
import { ArrowLeft, Terminal, ShieldAlert, CheckCircle, ExternalLink, Cpu } from "lucide-react";
import { SpotlightCard } from "../../components/SpotlightCard";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-20 text-center space-y-6">
        <ShieldAlert className="w-16 h-16 text-red-500 mx-auto animate-pulse" />
        <h2 className="text-2xl font-bold text-white font-mono">NODE_NOT_FOUND // 404</h2>
        <p className="text-gray-400 max-w-sm mx-auto text-sm">
          Requested secure coordinate is offline or lacks authorization.
        </p>
        <Link href="/portfolio" className="inline-block text-[#27E0FF] hover:underline font-mono text-xs">
          &lt; Return to Portfolio Index
        </Link>
      </main>
    );
  }

  // Fallback details if they are missing
  const details = project.details || {
    overview: `${project.title} was built to provide customized utility, addressing real world deployment constraints.`,
    challenge: "Developing a highly performant interface while maintaining low-memory foot print and ensuring input safety.",
    approach: "Designed modular layers separating concerns and utilizing static types to intercept common memory bugs.",
    technicalOverview: "Engineered logic with modern build tools ensuring low latency and structural dependency safety.",
    outcome: "Successfully packaged software, lowering code maintenance overhead and proving robustness under stress testing."
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-6 space-y-12">
      
      {/* Return button */}
      <div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO DOSSIER DIRECTORY</span>
        </Link>
      </div>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mono-tag text-[9px] text-[#27E0FF] bg-[#27E0FF]/5 border border-[#27E0FF]/25 px-2.5 py-0.5 rounded">
            {project.category}
          </span>
          <span className="text-[10px] font-mono text-gray-500">
            RECORDED: {project.projectDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>

        <div className="flex items-center justify-between border-y border-white/5 py-4 mt-6">
          <div className="space-y-1">
            <span className="block text-[10px] font-mono text-gray-500 uppercase">CLIENT/COMPANY</span>
            <span className="text-xs font-semibold text-white">{project.company}</span>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#27E0FF] hover:underline"
            >
              <span>SOURCE NODE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </section>

      {/* Analysis Grid Details */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Core Case Study Texts */}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-[#27E0FF] uppercase flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>01 / System Overview</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {details.overview}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono text-[#27E0FF] uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>02 / Security Challenge</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {details.challenge}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono text-[#27E0FF] uppercase flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>03 / Core Approach</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {details.approach}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono text-[#27E0FF] uppercase flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>04 / Technical Implementation Details</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed bg-[#05070B] p-4 rounded-xl border border-white/5 font-mono text-[11px] whitespace-pre-wrap">
              {details.technicalOverview}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono text-[#27E0FF] uppercase flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>05 / Verified Outcome</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {details.outcome}
            </p>
          </div>
        </div>

        {/* Sidebar Specifications */}
        <div className="space-y-6">
          <SpotlightCard className="glass-panel-2 rounded-xl p-5 border border-white/5 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white border-b border-white/5 pb-2">
              SYSTEM TARGET MATRIX
            </h4>
            
            <div className="space-y-3 text-[11px] font-mono">
              <div className="space-y-1">
                <span className="block text-gray-500 uppercase text-[9px]">ENCRYPTION LAYER</span>
                <span className="text-[#27E0FF]">AES_256_GCM_SECURED</span>
              </div>

              <div className="space-y-1">
                <span className="block text-gray-500 uppercase text-[9px]">AUDIT LEVEL</span>
                <span className="text-white">FULL STRUCTURAL RECON</span>
              </div>

              <div className="space-y-1">
                <span className="block text-gray-500 uppercase text-[9px]">TECH PAYLOAD</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

      </section>

    </main>
  );
}
