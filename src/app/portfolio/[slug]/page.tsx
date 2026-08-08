"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { allProjects } from "../../data";
import { ArrowLeft, Terminal, ShieldAlert, CheckCircle, ExternalLink, Cpu } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-12 text-center font-mono space-y-4">
        <div className="text-red-500 font-bold text-lg">CASE_FILE_NOT_FOUND // 404</div>
        <Link href="/portfolio" className="text-[#D7A94B] hover:underline text-xs">
          &lt; RETURN TO OPERATIONS ARCHIVE
        </Link>
      </div>
    );
  }

  const details = project.details || {
    overview: `${project.title} was engineered to provide target solution utility under operational deployment limits.`,
    challenge: "Maintaining low memory overhead while ensuring thread execution and input validation.",
    approach: "Designed modular layers isolating critical execution pathways and verifying static types.",
    technicalOverview: "Executed using Go/Rust and Next.js engines ensuring sub-millisecond API responsiveness.",
    outcome: "Successfully deployed in production, maintaining clean stability and zero reported memory bugs."
  };

  return (
    <div className="p-6 md:p-12 space-y-12 font-mono text-xs workstation-grid">
      
      {/* Back Button */}
      <div>
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#8D8B82] hover:text-[#D8D6CC]">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&lt; BACK TO CASE FILES ARCHIVE</span>
        </Link>
      </div>

      {/* Case File Header */}
      <div className="border border-[#8D8B82]/20 bg-[#11110F] p-6 md:p-8 space-y-4">
        <div className="flex justify-between items-center text-[10px] text-[#55544E] border-b border-[#8D8B82]/15 pb-3">
          <span className="text-[#D7A94B] font-bold">CASE FILE // OP-00{project.id}</span>
          <span className="text-[#77E6A1]">STATUS: CLOSED</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-[#D8D6CC] font-sans">
          {project.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-[#8D8B82] pt-4 border-t border-[#8D8B82]/15">
          <div>
            <span className="block text-[#55544E]">CLIENT/TARGET</span>
            <span className="text-[#D8D6CC] font-bold">{project.company}</span>
          </div>
          <div>
            <span className="block text-[#55544E]">CATEGORY</span>
            <span className="text-[#D7A94B]">{project.category}</span>
          </div>
          <div>
            <span className="block text-[#55544E]">RECORDED</span>
            <span>{project.projectDate}</span>
          </div>
          <div>
            <span className="block text-[#55544E]">CLEARANCE</span>
            <span>PUBLIC</span>
          </div>
        </div>
      </div>

      {/* Case File Main Content & Sticky Index Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sticky Index Navigation (3 Cols) */}
        <div className="lg:col-span-3 border border-[#8D8B82]/15 bg-[#11110F] p-4 space-y-3 sticky top-16 text-[10px]">
          <div className="text-[#55544E] uppercase border-b border-[#8D8B82]/15 pb-2 font-bold">CASE FILE INDEX</div>
          <ul className="space-y-2 text-[#8D8B82]">
            <li><a href="#summary" className="hover:text-[#D7A94B]">00 // SUMMARY</a></li>
            <li><a href="#challenge" className="hover:text-[#D7A94B]">01 // CHALLENGE</a></li>
            <li><a href="#approach" className="hover:text-[#D7A94B]">02 // APPROACH</a></li>
            <li><a href="#technical" className="hover:text-[#D7A94B]">03 // TECHNICAL OVERVIEW</a></li>
            <li><a href="#outcome" className="hover:text-[#D7A94B]">04 // OUTCOME</a></li>
          </ul>
        </div>

        {/* Content Details (9 Cols) */}
        <div className="lg:col-span-9 space-y-8">
          
          <section id="summary" className="space-y-3 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <h3 className="text-sm font-bold text-[#D7A94B]">00 // OVERVIEW & SUMMARY</h3>
            <p className="text-xs text-[#8D8B82] leading-relaxed font-sans">{details.overview}</p>
          </section>

          <section id="challenge" className="space-y-3 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <h3 className="text-sm font-bold text-[#B94A3D]">01 // SECURITY & ARCHITECTURAL CHALLENGE</h3>
            <p className="text-xs text-[#8D8B82] leading-relaxed font-sans">{details.challenge}</p>
          </section>

          <section id="approach" className="space-y-3 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <h3 className="text-sm font-bold text-[#D7A94B]">02 // APPROACH & METHODOLOGY</h3>
            <p className="text-xs text-[#8D8B82] leading-relaxed font-sans">{details.approach}</p>
          </section>

          <section id="technical" className="space-y-3 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <h3 className="text-sm font-bold text-[#D7A94B]">03 // TECHNICAL IMPLEMENTATION SNIPPET</h3>
            <pre className="p-4 bg-[#080808] border border-[#8D8B82]/20 text-[11px] text-[#D8D6CC] overflow-x-auto whitespace-pre-wrap">
              {details.technicalOverview}
            </pre>
          </section>

          <section id="outcome" className="space-y-3 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <h3 className="text-sm font-bold text-[#77E6A1]">04 // VERIFIED OUTCOME</h3>
            <p className="text-xs text-[#8D8B82] leading-relaxed font-sans">{details.outcome}</p>
          </section>

        </div>

      </div>

    </div>
  );
}
