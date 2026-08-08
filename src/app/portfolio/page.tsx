import React from "react";
import type { Metadata } from "next";
import { allProjects } from "../data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Files & Active Operations",
  description: "Browse case files and active security operations engineered by Hammad Matt.",
};

export default function PortfolioPage() {
  return (
    <div className="p-6 md:p-12 space-y-12 font-mono text-xs workstation-grid">
      
      <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3">
        <span className="text-[#D7A94B] font-bold">OPS.02 // CASE FILES ARCHIVE</span>
        <span className="text-[#8D8B82]">TOTAL RECORDS: 0{allProjects.length}</span>
      </div>

      {/* Case Files Table List */}
      <div className="border border-[#8D8B82]/15 bg-[#11110F] divide-y divide-[#8D8B82]/15">
        <div className="grid grid-cols-12 p-3.5 text-[9px] text-[#55544E] uppercase tracking-wider font-bold bg-[#171713]">
          <span className="col-span-2">FILE ID</span>
          <span className="col-span-4">SUBJECT / OPERATION</span>
          <span className="col-span-3">CATEGORY</span>
          <span className="col-span-2">YEAR</span>
          <span className="col-span-1 text-right">ACTION</span>
        </div>

        {allProjects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-12 p-4 items-center hover:bg-[#171713] transition-colors group text-[#8D8B82] hover:text-[#D8D6CC]"
          >
            <span className="col-span-2 text-[#D7A94B] font-bold">CASE-00{project.id}</span>
            <span className="col-span-4 text-[#D8D6CC] font-bold text-sm font-sans">{project.title}</span>
            <span className="col-span-3 text-[10px]">{project.category}</span>
            <span className="col-span-2 text-[10px]">{project.projectDate.split("-")[0]}</span>
            <div className="col-span-1 text-right">
              <Link
                href={`/portfolio/${project.slug}`}
                data-cursor="OPEN"
                className="inline-flex items-center text-[#D7A94B] hover:text-[#D8D6CC]"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
