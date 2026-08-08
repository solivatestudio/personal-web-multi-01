import React from "react";
import type { Metadata } from "next";
import { roles, securityRecognitions } from "../data";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Personnel Profile // Hammad Matt",
  description: "Personnel Profile for Hammad Matt - Tech Lead, Systems Architect, and Ethical Hacker.",
};

export default function AboutPage() {
  return (
    <div className="p-6 md:p-12 space-y-16 font-mono text-xs">
      
      <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
        <span className="bg-[#B7F000] text-black px-2 py-0.5 font-bold">_PROFILE</span>
        <span className="font-bold">PERSONNEL FILE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left ID Card (4 Cols) */}
        <div className="lg:col-span-4 border-2 border-black dark:border-white bg-[#FAF8F1] dark:bg-[#111111] p-6 space-y-6 brutalist-shadow">
          <div className="aspect-square bg-black text-[#B7F000] border-2 border-black flex flex-col items-center justify-center p-6 text-center space-y-3">
            <Shield className="w-16 h-16 text-[#B7F000]" />
            <span className="text-xs font-bold">[ TARGET_FRAME // PORTRAIT ]</span>
            <span className="text-[10px] text-gray-400">ID: HM-2026-ID</span>
          </div>

          <div className="space-y-2 text-xs border-t-2 border-black dark:border-white pt-4 text-black dark:text-white font-bold">
            <div className="flex justify-between">
              <span>NAME:</span>
              <span>HAMMAD MATT</span>
            </div>
            <div className="flex justify-between">
              <span>ROLE:</span>
              <span className="text-[#FF552D]">ETHICAL HACKER</span>
            </div>
            <div className="flex justify-between">
              <span>LOCATION:</span>
              <span>JAKARTA, ID</span>
            </div>
          </div>
        </div>

        {/* Right Bio & Matrix (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="border-2 border-black dark:border-white bg-[#FAF8F1] dark:bg-[#111111] p-6 space-y-4 brutalist-shadow font-sans">
            <h2 className="text-lg font-black text-black dark:text-white font-mono border-b-2 border-black pb-2">
              BIOGRAPHICAL RECORD
            </h2>
            <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
              Fullstack developer and independent security researcher based in Jakarta. I construct production backends that handle transactional loads, and build automated scanning utilities to audit their security boundaries.
            </p>
            <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
              Currently, as Systems Owner for a national Travel & Logistics business group, I architect a monorepo digital ecosystem that centralizes Umrah pilgrim records, airport handling, and finance pipelines into transactional PostgreSQL.
            </p>
          </div>

          <div className="border-2 border-black dark:border-white bg-[#FAF8F1] dark:bg-[#111111] p-6 space-y-4 brutalist-shadow font-mono">
            <h2 className="text-sm font-bold text-black dark:text-white border-b-2 border-black pb-2">
              CAPABILITY MATRIX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
              <div className="p-3 bg-white dark:bg-black border-2 border-black dark:border-white flex justify-between">
                <span>WEB APPSEC</span>
                <span className="text-[#B7F000] bg-black px-1.5">[ACTIVE]</span>
              </div>
              <div className="p-3 bg-white dark:bg-black border-2 border-black dark:border-white flex justify-between">
                <span>API PENTESTING</span>
                <span className="text-[#B7F000] bg-black px-1.5">[ACTIVE]</span>
              </div>
              <div className="p-3 bg-white dark:bg-black border-2 border-black dark:border-white flex justify-between">
                <span>OSINT RECON</span>
                <span className="text-[#B7F000] bg-black px-1.5">[ACTIVE]</span>
              </div>
              <div className="p-3 bg-white dark:bg-black border-2 border-black dark:border-white flex justify-between">
                <span>SYSTEM UTILITIES (RUST)</span>
                <span className="text-[#B7F000] bg-black px-1.5">[ACTIVE]</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
