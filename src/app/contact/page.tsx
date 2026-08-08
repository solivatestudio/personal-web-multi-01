"use client";

import React, { useState } from "react";
import { SpotlightCard } from "../components/SpotlightCard";
import { SectionHeader } from "../components/SectionHeader";
import { ShieldAlert, CheckCircle, Mail, Send, Key } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "RECON_REQUEST",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [pgpOpen, setPgpOpen] = useState(false);

  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.2
Comment: https://openpgpjs.org

xsFNBF4z3N0BEADL7L+J2tQZfHw...
[ Encrypted Contact Tunnel Key: hmad28 ]
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#0A6CFF", "#27E0FF", "#655CFF"]
      });
    }, 1500);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-6 space-y-12">
      {/* Page Header */}
      <section>
        <SectionHeader
          label="ESTABLISH TUNNEL CONNECTION"
          title="Start a secure conversation."
          subtitle="Submit technical RFPs, source code audits, or system consultation requests below."
        />
      </section>

      {/* Grid Layout */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start">
        {/* Connection Coordinates */}
        <div className="space-y-6">
          <SpotlightCard className="glass-panel-2 rounded-xl p-5 border border-white/5 space-y-4 font-mono text-xs">
            <h4 className="text-[10px] font-bold text-white border-b border-white/5 pb-2 uppercase tracking-widest">
              CONNECTION COORDINATES
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:admin@hammad.biz.id"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#27E0FF] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>admin@hammad.biz.id</span>
              </a>

              <a
                href="https://github.com/hmad28"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#27E0FF] transition-colors"
              >
                <span className="w-4 text-center font-bold">GH</span>
                <span>github.com/hmad28</span>
              </a>

              <a
                href="https://linkedin.com/in/hmatt28"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#27E0FF] transition-colors"
              >
                <span className="w-4 text-center font-bold">LN</span>
                <span>linkedin.com/in/hmatt28</span>
              </a>
            </div>
          </SpotlightCard>

          {/* PGP Security Key Dropdown */}
          <SpotlightCard className="glass-panel-2 rounded-xl p-5 border border-white/5 space-y-3">
            <button
              onClick={() => setPgpOpen(!pgpOpen)}
              className="w-full flex items-center justify-between text-[10px] font-mono text-[#27E0FF] uppercase cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                <span>PGP PUBLIC KEY</span>
              </div>
              <span>{pgpOpen ? "[ HIDE ]" : "[ SHOW ]"}</span>
            </button>
            
            {pgpOpen && (
              <pre className="text-[9px] font-mono text-gray-500 bg-[#05070B] p-2.5 rounded border border-white/5 overflow-x-auto whitespace-pre-wrap select-all">
                {pgpKey}
              </pre>
            )}
          </SpotlightCard>

          {/* Node Availability Widget */}
          <div className="glass-panel-2 rounded-xl p-5 border border-white/5 font-mono text-[10px] text-gray-500 space-y-2">
            <div className="flex items-center gap-2 text-[#27E0FF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>NODE STATE: READY</span>
            </div>
            <p className="leading-relaxed">
              Accepting selected project audits and architecture roles. Estimated response latency: &lt; 24 hours.
            </p>
          </div>
        </div>

        {/* Secure Form */}
        <div>
          <SpotlightCard className="glass-panel-1 rounded-2xl p-6 md:p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">SENDER IDENTIFICATION</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Director of Infrastructure"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#05070B] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#27E0FF] transition-colors font-mono"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">COMMUNICATION NODE (EMAIL)</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. security@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#05070B] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#27E0FF] transition-colors font-mono"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">SUBJECT HEADER</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#05070B] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#27E0FF] transition-colors font-mono"
                >
                  <option value="RECON_REQUEST">SYSTEM_RECON_REQUEST</option>
                  <option value="CODE_AUDIT">IMPLEMENTATION_CODE_AUDIT</option>
                  <option value="FREELANCE_RFP">FREELANCE_RFP_OUTLINE</option>
                  <option value="GENERAL_CONNECT">SECURE_GENERAL_CONNECTION</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">ENCRYPTED PAYLOAD (MESSAGE)</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide scope parameters, tech stacks, or contact briefs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#05070B] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#27E0FF] transition-colors font-mono leading-relaxed"
                />
              </div>

              {/* Button & Feedback Status */}
              <div>
                {status === "success" ? (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>PAYLOAD TUNNELED SUCCESSFULLY. SECURE CONNECTION LOGGED.</span>
                  </div>
                ) : status === "error" ? (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>TUNNEL INITIALIZATION ERROR. RETRY IN 5 SECONDS.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-lg bg-[#0A6CFF] hover:bg-[#0052cc] text-white font-mono text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(10,108,255,0.2)] disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === "sending" ? "TUNNELING DATA..." : "TRANSMIT DATA PAYLOAD"}</span>
                  </button>
                )}
              </div>
            </form>
          </SpotlightCard>
        </div>
      </section>
    </main>
  );
}
