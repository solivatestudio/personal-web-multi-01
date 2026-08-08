"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowUpRight, Cpu } from "lucide-react";
import { Project } from "../data";
import { SpotlightCard } from "./SpotlightCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <SpotlightCard className="glass-panel-2 rounded-2xl p-6 hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col h-full justify-between group cursor-pointer">
        <div>
          {/* Metadata Tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="mono-tag text-[9px] text-[#27E0FF] bg-[#27E0FF]/5 border border-[#27E0FF]/15 px-2 py-0.5 rounded">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-gray-500">
              {project.projectDate.split("-")[0]}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-[#27E0FF] transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            {project.excerpt}
          </p>
        </div>

        {/* Dynamic Tag list */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[9px] font-mono text-gray-500 px-2 py-0.5 rounded bg-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </Link>
  );
}
