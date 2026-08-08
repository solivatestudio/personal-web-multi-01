import React from "react";
import type { Metadata } from "next";
import { roles, securityRecognitions } from "../data";
import { Terminal, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Personnel File // Hammad Matt",
  description: "Personnel File for Hammad Matt - Tech Lead, Systems Architect, and Ethical Hacker.",
};

export default function AboutPage() {
  return (
    <div className="p-6 md:p-12 space-y-16 font-mono text-xs workstation-grid">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3 text-xs">
        <span className="text-[#D7A94B] font-bold">ID.01 // PERSONNEL FILE</span>
        <span className="text-[#8D8B82]">CLASSIFICATION: UNRESTRICTED</span>
      </div>

      {/* Grid Personnel File Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Dossier Card (4 Cols) */}
        <div className="lg:col-span-4 border border-[#8D8B82]/20 bg-[#11110F] p-6 space-y-6">
          
          <div className="relative aspect-square w-full bg-[#080808] border border-[#8D8B82]/20 flex flex-col items-center justify-center p-6 text-center space-y-3">
            <Shield className="w-12 h-12 text-[#D7A94B]" />
            <span className="text-[10px] text-[#D8D6CC] tracking-widest">[ TARGET_FRAME // PORTRAIT ]</span>
            <span className="text-[9px] text-[#55544E]">ID: HM-2026-ID</span>
          </div>

          <div className="space-y-2 text-[10px] border-t border-[#8D8B82]/15 pt-4 text-[#8D8B82]">
            <div className="flex justify-between">
              <span>SUBJECT:</span>
              <span className="text-[#D8D6CC] font-bold">HAMMAD MATT</span>
            </div>
            <div className="flex justify-between">
              <span>PRIMARY ROLE:</span>
              <span className="text-[#D7A94B]">ETHICAL HACKER / TECH LEAD</span>
            </div>
            <div className="flex justify-between">
              <span>STATION:</span>
              <span className="text-[#D8D6CC]">JAKARTA, ID</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-[#77E6A1]">ACTIVE / AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* Right Biographical Record & Capabilities (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Bio Text */}
          <div className="space-y-4 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <div className="text-[#D7A94B] font-bold text-sm border-b border-[#8D8B82]/15 pb-2">
              BIOGRAPHICAL RECORD
            </div>
            <div className="space-y-3 text-xs text-[#8D8B82] leading-relaxed font-sans">
              <p>
                Fullstack developer and independent security researcher based in Jakarta. I construct production backends that handle transactional loads, and build automated scanning utilities to audit their security boundaries.
              </p>
              <p>
                Currently, as Systems Owner for a national Travel & Logistics business group, I architect a monorepo digital ecosystem that centralizes Umrah pilgrim records, airport handling, and finance pipelines into transactional PostgreSQL.
              </p>
              <p>
                Simultaneously, I serve as Tech Lead at Solivate Studio, directing tech stack selection, code reviews, and penetration testing for SaaS applications and APIs.
              </p>
            </div>
          </div>

          {/* Capability Index Matrix */}
          <div className="space-y-4 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <div className="text-[#D7A94B] font-bold text-sm border-b border-[#8D8B82]/15 pb-2">
              CORE CAPABILITY INDEX
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#080808] border border-[#8D8B82]/15 flex justify-between items-center">
                <span>WEB APPLICATION SECURITY</span>
                <span className="text-[#77E6A1] font-bold">[ACTIVE]</span>
              </div>
              <div className="p-3 bg-[#080808] border border-[#8D8B82]/15 flex justify-between items-center">
                <span>API PENETRATION TESTING</span>
                <span className="text-[#77E6A1] font-bold">[ACTIVE]</span>
              </div>
              <div className="p-3 bg-[#080808] border border-[#8D8B82]/15 flex justify-between items-center">
                <span>OSINT RECONNAISSANCE</span>
                <span className="text-[#77E6A1] font-bold">[ACTIVE]</span>
              </div>
              <div className="p-3 bg-[#080808] border border-[#8D8B82]/15 flex justify-between items-center">
                <span>SYSTEM UTILITIES (RUST/GO)</span>
                <span className="text-[#77E6A1] font-bold">[ACTIVE]</span>
              </div>
            </div>
          </div>

          {/* Educational Background */}
          <div className="space-y-3 border border-[#8D8B82]/15 bg-[#11110F] p-6">
            <div className="text-[#D7A94B] font-bold text-sm border-b border-[#8D8B82]/15 pb-2">
              INDEPENDENT CURRICULUM // PAKET C
            </div>
            <p className="text-xs text-[#8D8B82] leading-relaxed font-sans">
              Selected Indonesia's Paket C equivalency pathway to focus directly on an intensive self-directed syllabus covering systems programming, backend engineering, and web vulnerability analysis while taking professional client projects.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
