import React from "react";
import type { Metadata } from "next";
import { allProjects } from "../data";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";
import { SpotlightCard } from "../components/SpotlightCard";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Work",
  description: "Explore cybersecurity reconnaissance scanners, local-first encrypted clients, and multi-tenant SaaS dashboards developed by Hammad Matt.",
};

export default function PortfolioPage() {
  const featured = allProjects.filter((p) => p.details);
  const regular = allProjects.filter((p) => !p.details);

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-6 space-y-16">
      
      {/* Page Header */}
      <section>
        <SectionHeader
          label="PORTFOLIO RECORDS"
          title="Engineered Systems & Reconnaissance Scanners"
          subtitle="Explore security client applications, asynchronous network diagnostic nodes, and custom SaaS platforms."
        />
      </section>

      {/* Featured Projects Large Horiz Cards */}
      <section className="space-y-6">
        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
          [ 01 / FEATURED ARCHITECTURES ]
        </h3>
        
        <div className="space-y-6">
          {featured.map((project) => (
            <SpotlightCard
              key={project.id}
              className="glass-panel-1 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#0A6CFF]/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono-tag text-[9px] text-[#27E0FF] bg-[#27E0FF]/5 border border-[#27E0FF]/20 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      {project.projectDate.split("-")[0]}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white group">
                    <a
                      href={`/portfolio/${project.slug}`}
                      className="hover:text-[#27E0FF] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                    </a>
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono text-gray-500 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Technical ASCII Diagram Box */}
                <div className="glass-panel-3 rounded-xl p-5 border border-white/5 font-mono text-[9px] text-[#27E0FF] space-y-3">
                  <div className="border-b border-white/5 pb-2 text-white/50 flex justify-between">
                    <span>SECURITY_MANIFEST.MD</span>
                    <span>MD5: E8F92...</span>
                  </div>
                  <div className="space-y-1 text-gray-500">
                    <div>// CORE PLATFORM ATTRIBUTES</div>
                    <div>LOCAL_FIRST: true</div>
                    <div>AUDITED_STATUS: VERIFIED_SUCCESS</div>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`/portfolio/${project.slug}`}
                      className="text-[#27E0FF] hover:underline"
                    >
                      Read full security analysis &gt;
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Bento Grid layout for other projects */}
      <section className="space-y-6">
        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
          [ 02 / ADDITIONAL UTILITIES ]
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
