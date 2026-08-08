"use client";

import React, { useState } from "react";
import { Mail, Key, Send, CheckCircle, ShieldAlert } from "lucide-react";
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
[ Encrypted Transmission Key: hmad28 ]
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#D7A94B", "#D8D6CC", "#8D8B82"]
      });
    }, 600);
  };

  return (
    <div className="p-6 md:p-12 space-y-12 font-mono text-xs workstation-grid">
      
      <div className="flex items-center justify-between border-b border-[#8D8B82]/20 pb-3">
        <span className="text-[#D7A94B] font-bold">COM.05 // SECURE COMMUNICATION CHANNEL</span>
        <span className="text-[#8D8B82]">ENCRYPTED TRANSMISSION NODE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Telemetry Coordinates (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="border border-[#8D8B82]/15 bg-[#11110F] p-6 space-y-4">
            <div className="text-[#55544E] text-[9px] uppercase border-b border-[#8D8B82]/15 pb-2 font-bold">
              DIRECT TRANSMISSION NODES
            </div>

            <div className="space-y-3">
              <a href="mailto:admin@hammad.biz.id" className="flex items-center gap-2.5 text-[#8D8B82] hover:text-[#D7A94B]">
                <Mail className="w-4 h-4 text-[#D7A94B]" />
                <span>admin@hammad.biz.id</span>
              </a>

              <a href="https://github.com/hmad28" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[#8D8B82] hover:text-[#D7A94B]">
                <span className="font-bold w-4 text-[#D7A94B]">GH</span>
                <span>github.com/hmad28</span>
              </a>

              <a href="https://linkedin.com/in/hmatt28" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[#8D8B82] hover:text-[#D7A94B]">
                <span className="font-bold w-4 text-[#D7A94B]">LN</span>
                <span>linkedin.com/in/hmatt28</span>
              </a>
            </div>
          </div>

          <div className="border border-[#8D8B82]/15 bg-[#11110F] p-6 space-y-3">
            <button
              onClick={() => setPgpOpen(!pgpOpen)}
              className="w-full flex items-center justify-between text-[#D7A94B] text-[10px] uppercase font-bold cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                <span>PGP PUBLIC KEY</span>
              </div>
              <span>{pgpOpen ? "[ HIDE ]" : "[ SHOW ]"}</span>
            </button>

            {pgpOpen && (
              <pre className="p-3 bg-[#080808] border border-[#8D8B82]/15 text-[9px] text-[#8D8B82] overflow-x-auto whitespace-pre-wrap select-all">
                {pgpKey}
              </pre>
            )}
          </div>
        </div>

        {/* Right Transmission Form (8 Cols) */}
        <div className="lg:col-span-8 border border-[#8D8B82]/20 bg-[#11110F] p-6 md:p-8 space-y-6">
          <div className="text-[#D7A94B] font-bold text-sm border-b border-[#8D8B82]/15 pb-2">
            ┌─ COMMUNICATION CHANNEL ─────────────────┐
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-[9px] text-[#55544E] uppercase">SENDER IDENTIFICATION (RECIPIENT)</label>
              <input
                type="text"
                required
                placeholder="Name / Organization..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#080808] border border-[#8D8B82]/20 p-2.5 text-xs text-[#D8D6CC] focus:outline-none focus:border-[#D7A94B] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[9px] text-[#55544E] uppercase">COMMUNICATION NODE (EMAIL)</label>
              <input
                type="email"
                required
                placeholder="security@target.com..."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#080808] border border-[#8D8B82]/20 p-2.5 text-xs text-[#D8D6CC] focus:outline-none focus:border-[#D7A94B] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[9px] text-[#55544E] uppercase">SUBJECT HEADER</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#080808] border border-[#8D8B82]/20 p-2.5 text-xs text-[#D8D6CC] focus:outline-none focus:border-[#D7A94B] font-mono"
              >
                <option value="RECON_REQUEST">SYSTEM_RECON_REQUEST</option>
                <option value="CODE_AUDIT">IMPLEMENTATION_CODE_AUDIT</option>
                <option value="FREELANCE_RFP">FREELANCE_RFP_OUTLINE</option>
                <option value="GENERAL_CONNECT">SECURE_GENERAL_CONNECTION</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-[9px] text-[#55544E] uppercase">ENCRYPTED PAYLOAD (MESSAGE)</label>
              <textarea
                required
                rows={4}
                placeholder="Scope parameters, target brief..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#080808] border border-[#8D8B82]/20 p-2.5 text-xs text-[#D8D6CC] focus:outline-none focus:border-[#D7A94B] font-mono leading-relaxed"
              />
            </div>

            <div className="pt-2">
              {status === "success" ? (
                <div className="p-3 bg-[#77E6A1]/10 border border-[#77E6A1]/30 text-[#77E6A1] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>TRANSMITTED SUCCESSFULLY // LOGGED</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 bg-[#D7A94B] text-[#080808] font-bold text-xs hover:bg-[#D8D6CC] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === "sending" ? "ENCRYPTING..." : "TRANSMIT ↵"}</span>
                </button>
              )}
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}
