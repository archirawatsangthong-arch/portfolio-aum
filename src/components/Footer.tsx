// @ts-nocheck
"use client";

import React, { useState } from "react";
import { Mail, ArrowUp, ArrowUpRight, Sparkles, Check, Copy } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "archirawatsangthong@gmail.com";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "archirawatsangthong-arch",
      href: "https://github.com/archirawatsangthong-arch",
      badge: "Codebase",
      icon: (
        <svg className="w-5 h-5 fill-current text-[var(--text-primary)]" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      hoverBorder: "hover:border-cyan-500",
    },
    {
      name: "Facebook",
      handle: "aum.archirawat.9",
      href: "https://www.facebook.com/aum.archirawat.9",
      badge: "Messenger",
      icon: (
        <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      hoverBorder: "hover:border-blue-500",
    },
    {
      name: "Instagram",
      handle: "archi_aum",
      href: "https://www.instagram.com/archi_aum/",
      badge: "DM",
      icon: (
        <svg className="w-5 h-5 stroke-[#E4405F] fill-none stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      hoverBorder: "hover:border-pink-500",
    },
    {
      name: "LINE",
      handle: "archi.aum",
      href: "https://line.me/ti/p/AVPa8xLV8Y",
      badge: "Chat",
      icon: (
        <svg className="w-5 h-5 fill-[#06C755]" viewBox="0 0 24 24">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.019 9.572.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975 1.725-1.91 2.564-3.845 2.564-5.932zm-14.73 2.553h-1.637a.64.64 0 0 1-.637-.643v-3.79c0-.356.286-.643.637-.643.352 0 .637.287.637.643v3.147h1a.64.64 0 0 1 .637.643c0 .356-.285.643-.637.643zm2.597-.643c0 .356-.286.643-.637.643s-.637-.287-.637-.643v-3.79c0-.356.286-.643.637-.643s.637.287.637.643v3.79zm4.721 0a.64.64 0 0 1-.637.643.64.64 0 0 1-.502-.244l-2.072-2.835v2.436c0 .356-.286.643-.637.643a.64.64 0 0 1-.637-.643v-3.79c0-.356.286-.643.637-.643a.64.64 0 0 1 .502.244l2.072 2.835v-2.436c0-.356.286-.643.637-.643s.637.287.637.643v3.79zm3.565-2.505h-1.637v.862h1.637a.64.64 0 0 1 .637.643.64.64 0 0 1-.637.643h-2.274a.64.64 0 0 1-.637-.643v-3.79c0-.356.286-.643.637-.643h2.274a.64.64 0 0 1 .637.643.64.64 0 0 1-.637.643h-1.637v.862h1.637a.64.64 0 0 1 .637.643z"/>
        </svg>
      ),
      hoverBorder: "hover:border-emerald-500",
    },
  ];

  return (
    <footer className="relative w-full py-16 px-6 sm:px-12 bg-[var(--bg-canvas)] border-t border-[var(--border-card)] transition-colors duration-300">
      <div className="relative max-w-6xl mx-auto space-y-12">
        
        {/* ป้าย Promo / Banner */}
        <div className="theme-card relative rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden">
          
          {/* Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/[0.06] blur-[100px] pointer-events-none rounded-full" />

          {/* Header */}
          <div className="relative z-10 max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span className="font-mono text-[11px] font-semibold text-cyan-600 dark:text-cyan-300 tracking-wider uppercase">
                LET&apos;S CONNECT
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight leading-snug">
              Contact
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2.5 leading-relaxed">
              ช่องทางการติดต่อ ทักเข้ามาได้เลยตามช่องทางที่สะดวกครับ
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            
            {/* Social Media Links */}
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-[var(--border-card)] ${item.hoverBorder} hover:bg-cyan-500/[0.05] transition-all duration-200 hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[var(--border-card)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {item.name}
                      </p>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.08] text-[var(--text-muted)]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[var(--text-muted)] truncate mt-0.5">
                      {item.handle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] group-hover:text-cyan-500 transition-colors flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}

            {/* Email (Click to Copy) */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group flex items-center justify-between p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-[var(--border-card)] hover:border-cyan-500 hover:bg-cyan-500/[0.05] transition-all duration-200 hover:-translate-y-0.5 text-left w-full cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[var(--border-card)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-cyan-500" />
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Email
                    </p>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded transition-colors ${
                      copied 
                        ? "bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20" 
                        : "bg-black/[0.05] dark:bg-white/[0.08] text-[var(--text-muted)]"
                    }`}>
                      {copied ? "คัดลอกแล้ว!" : "Click to Copy"}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[var(--text-muted)] truncate mt-0.5 select-all">
                    {emailAddress}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] group-hover:text-cyan-500 transition-colors flex-shrink-0">
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                )}
              </div>
            </button>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between pt-2 text-[var(--text-muted)]">
          <p className="text-xs font-mono">
            © 2026 Achirawat Saengthong. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 font-mono text-xs hover:text-cyan-500 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}