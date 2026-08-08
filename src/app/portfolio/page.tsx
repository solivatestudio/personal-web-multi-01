import React from "react";
import type { Metadata } from "next";
import { allProjects } from "../data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Files & Project Archive",
  description: "Browse case files and active security operations engineered by Hammad Matt.",
};

export default function PortfolioPage() {
  return (
    <div className="p-6 md:p-12 space-y-12 font-mono text-xs">
      
      <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
        <span className="bg-[#B7F000] text-black px-2 py-0.5 font-bold">_PROJECTS</span>
        <span className="font-bold">OPERATIONS ARCHIVE</span>
      </div>

      <div className="border-2 border-black dark:border-white bg-[#FAF8F1] dark:bg-[#111111] divide-y-2 divide-black dark:divide-white brutalist-shadow">
        <div className="grid grid-cols-12 p-3.5 text-[10px] bg-black text-white font-bold uppercase tracking-wider">
          <span className="col-span-2">FILE ID</span>
          <span className="col-span-4">SUBJECT / OPERATION</span>
          <span className="col-span-3">CATEGORY</span>
          <span className="col-span-2">YEAR</span>
          <span className="col-span-1 text-right">ACTION</span>
        </div>

        {allProjects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-12 p-4 items-center hover:bg-[#B7F000] hover:text-black transition-colors group font-bold"
          >
            <span className="col-span-2">OP-00{project.id}</span>
            <span className="col-span-4 text-sm font-sans">{project.title}</span>
            <span className="col-span-3 text-[10px]">{project.category}</span>
            <span className="col-span-2 text-[10px]">{project.projectDate.split("-")[0]}</span>
            <div className="col-span-1 text-right">
              <Link
                href={`/portfolio/${project.slug}`}
                data-cursor="OPEN"
                className="inline-flex items-center text-black dark:text-white group-hover:text-black"
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
