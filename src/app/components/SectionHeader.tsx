"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function SectionHeader({
  label,
  title,
  subtitle,
  action,
}: {
  label: string;
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#27E0FF] uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>[ {label} ]</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-sm text-gray-400 leading-relaxed pt-1">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#27E0FF] hover:text-white transition-colors group cursor-pointer"
        >
          <span>{action.label}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
