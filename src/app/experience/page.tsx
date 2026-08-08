import React from "react";
import type { Metadata } from "next";
import { roles, securityRecognitions } from "../data";
import { Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Field Log & Credentials Archive",
  description: "Chronological operational experience log and institutional disclosures.",
};

export default function ExperiencePage() {
  return (
    <div className="p-6 md:p-12 space-y-16 font-mono text-xs workstation-grid">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3">
        <span className="text-[#D7A94B] font-bold">LOG.03 // CHRONOLOGICAL FIELD LOG</span>
        <span className="text-[#8D8B82]">SECURITY OPERATIONS TIMELINE</span>
      </div>

      {/* Chronological Log Entries */}
      <div className="space-y-6">
        {roles.map((role, idx) => (
          <div key={idx} className="border border-[#8D8B82]/15 bg-[#11110F] p-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8D8B82]/15 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-[#D7A94B] font-bold">[{role.period}]</span>
                <span className="text-[#D8D6CC] font-bold text-sm font-sans">{role.title}</span>
              </div>
              <span className="text-[#8D8B82] text-[10px]">{role.company}</span>
            </div>

            <ul className="space-y-2 text-xs text-[#8D8B82] font-sans">
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

      {/* Institutional Credentials Archive */}
      <div className="space-y-6 pt-8">
        <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3">
          <span className="text-[#77E6A1] font-bold">✓ INTEL // CREDENTIALS VAULT</span>
          <span className="text-[#8D8B82]">DISCLOSURE ACKNOWLEDGEMENTS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {securityRecognitions.map((rec, idx) => (
            <div key={idx} className="border border-[#8D8B82]/15 bg-[#11110F] p-4 space-y-2">
              <div className="text-[9px] text-[#55544E]">REC-0{idx + 1} // VERIFIED</div>
              <div className="text-xs font-bold text-[#D8D6CC]">{rec}</div>
              <div className="text-[9px] text-[#77E6A1]">STATUS: ACKNOWLEDGED</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
