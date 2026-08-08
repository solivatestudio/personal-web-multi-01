import React from "react";
import type { Metadata } from "next";
import { capabilities } from "../data";

export const metadata: Metadata = {
  title: "Engagement Index // Capabilities",
  description: "Capabilities matrix and security engagement index.",
};

export default function ServicesPage() {
  return (
    <div className="p-6 md:p-12 space-y-12 font-mono text-xs workstation-grid">
      
      <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3">
        <span className="text-[#D7A94B] font-bold">CAP.04 // ENGAGEMENT INDEX</span>
        <span className="text-[#8D8B82]">OPERATIONAL CAPABILITIES</span>
      </div>

      <div className="space-y-6">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="border border-[#8D8B82]/15 bg-[#11110F] p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-[#8D8B82]/15 pb-3">
              <span className="text-[#D7A94B] font-bold">{cap.id} // {cap.title}</span>
              <span className="text-[10px] text-[#77E6A1]">MODE ACTIVE</span>
            </div>

            <p className="text-xs text-[#8D8B82] font-sans leading-relaxed">
              {cap.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {cap.matrix.map((m, mIdx) => (
                <div key={mIdx} className="p-3 bg-[#080808] border border-[#8D8B82]/15 space-y-1">
                  <div className="flex justify-between text-[10px] text-[#8D8B82]">
                    <span>{m.name}</span>
                    <span className="text-[#D7A94B] font-bold">{m.rating}/5</span>
                  </div>
                  <div className="h-1 w-full bg-[#171713] overflow-hidden">
                    <div className="h-full bg-[#D7A94B]" style={{ width: `${(m.rating / 5) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
