import React from "react";
import type { Metadata } from "next";
import { SectionHeader } from "../components/SectionHeader";
import { SpotlightCard } from "../components/SpotlightCard";
import { roles, securityRecognitions } from "../data";
import { Terminal, Shield, Award, Calendar, Circle } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience & Credentials",
  description: "Explore the secure system engineering timeline and verified vulnerability disclosure acknowledgements for Hammad Matt.",
};

export default function ExperiencePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-6 space-y-16">
      
      {/* Page Header */}
      <section>
        <SectionHeader
          label="CAREER COORDINATES"
          title="Security Career Timeline & Credentials"
          subtitle="A history of systems engineering, team management, and responsible disclosure logs."
        />
      </section>

      {/* Vertical Interactive Timeline */}
      <section className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
        {roles.map((role, index) => (
          <div key={index} className="relative space-y-3">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#060912] border border-[#27E0FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27E0FF]" />
            </span>

            {/* Time Stamp */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#27E0FF]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{role.period}</span>
            </div>

            {/* Card Content */}
            <SpotlightCard className="glass-panel-2 rounded-xl p-6 border border-white/5 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {role.title}
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  {role.company}
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 list-none pl-0">
                {role.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-2 items-start leading-relaxed">
                    <span className="text-[#27E0FF] font-mono mt-1 select-none">&gt;&gt;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
        ))}
      </section>

      {/* Verified Credentials Vault */}
      <section id="awards" className="space-y-6 pt-8">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <Award className="w-4 h-4" />
          <span>[ VERIFIED CREDENTIALS VAULT ]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityRecognitions.map((recognition, idx) => (
            <SpotlightCard
              key={idx}
              className="glass-panel-2 rounded-xl p-5 border border-white/5 flex items-start gap-3 hover:border-emerald-500/20 transition-colors"
            >
              <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="block text-[10px] font-mono text-gray-500 uppercase">
                  ACKNOWLEDGEMENT RECORD 0{idx + 1}
                </span>
                <span className="block text-xs font-bold text-white leading-relaxed">
                  {recognition}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

    </main>
  );
}
