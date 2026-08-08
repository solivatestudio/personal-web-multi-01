import React from "react";
import type { Metadata } from "next";
import { capabilities } from "../data";
import { SpotlightCard } from "../components/SpotlightCard";
import { SectionHeader } from "../components/SectionHeader";
import { Terminal, Shield, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Review security consulting capabilities, implementation audits, and penetration testing matrices offered by Hammad Matt.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-6 space-y-16">
      
      {/* Page Header */}
      <section>
        <SectionHeader
          label="CAPABILITY MATRIX"
          title="Security Consulting Capabilities"
          subtitle="Explore technical services offered, spanning full-stack implementation audits to OSINT reconnaissance pipelines."
        />
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((service, idx) => (
          <SpotlightCard
            key={idx}
            className="glass-panel-1 rounded-2xl p-6 border border-white/10 flex flex-col justify-between h-full space-y-6 hover:border-[#0A6CFF]/30 transition-all duration-300 group"
          >
            <div className="space-y-4">
              {/* Header Number */}
              <div className="flex justify-between items-center">
                <span className="font-mono text-[#27E0FF] text-sm">
                  {service.id}
                </span>
                <Shield className="w-5 h-5 text-gray-500 group-hover:text-[#27E0FF] transition-colors" />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-xs text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Diagnostic Matrix Stats */}
            <div className="pt-4 border-t border-white/5 space-y-2.5 font-mono text-[10px]">
              <div className="text-gray-500 uppercase tracking-wider mb-2">TARGET METRICS</div>
              {service.matrix.map((stat, statIdx) => (
                <div key={statIdx} className="space-y-1">
                  <div className="flex justify-between text-gray-400">
                    <span>{stat.name}</span>
                    <span>{stat.rating}/5</span>
                  </div>
                  {/* Skill indicators */}
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#27E0FF]"
                      style={{ width: `${(stat.rating / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </section>

    </main>
  );
}
