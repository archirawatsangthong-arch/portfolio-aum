"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  const projects = [
    {
      num: "01",
      badge: "LIVE WEB APPLICATION",
      title: "Virtual Library Platform",
      subtitle: "สกร. โครงการ ‘อ่านเปลี่ยนชีวิต’",
      role: "FRONT-END DEVELOPER & UI DESIGNER",
      desc: "ระบบห้องสมุดเสมือนเพื่อให้คนในพื้นที่เข้าถึง e-book ได้สะดวกรวดเร็วบนอุปกรณ์ดิจิทัล",
      tags: ["HTML5", "CSS3", "JAVASCRIPT", "TAILWIND", "VERCEL"],
      url: "https://example.com",
    },
    {
      num: "02",
      badge: "DATA EXPLORATION",
      title: "Regional Environmental Data Exploration",
      subtitle: "การสำรวจและวิเคราะห์ข้อมูลสภาพแวดล้อม",
      role: "DATA ANALYST & VISUALIZATION",
      desc: "การรวบรวมและประมวลผลข้อมูลเชิงพื้นที่เพื่อวิเคราะห์แนวโน้มและการเปลี่ยนแปลงสภาพแวดล้อม",
      tags: ["PYTHON", "PANDAS", "MATPLOTLIB", "STATISTICS"],
      url: "#",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 bg-[#030712] overflow-hidden">
      <div className="relative max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
       
        {/* Project Cards List */}
        <div className="space-y-10">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-3xl bg-slate-950/40 backdrop-blur-2xl border border-white/[0.08] p-8 sm:p-12 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.7)] hover:border-cyan-500/40 transition-all duration-300 group overflow-hidden"
            >
              {/* แสง Ambient Glow สีฟ้าคราวด้านหลัง */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                {/* หมวดหมู่ & หมายเลข */}
                <div className="flex items-center gap-2.5 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
                  <span>{item.num} //</span>
                  <span>{item.badge}</span>
                </div>

                {/* ชื่อโปรเจกต์ */}
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
                  {item.title}
                </h3>

                {/* ซับไตเติลภาษาไทย */}
                <p className="text-base sm:text-lg font-semibold text-cyan-400/90 mb-4 font-sans">
                  {item.subtitle}
                </p>

                {/* บทบาท (Role) */}
                <p className="font-mono text-[11px] text-slate-400 tracking-wider uppercase mb-5">
                  ROLE // {item.role}
                </p>

                {/* คำอธิบาย */}
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl">
                  {item.desc}
                </p>

                {/* Tags เครื่องมือ */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] sm:text-xs text-slate-300 bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ปุ่ม Launch Live Application สไตล์ Cosmic Cyan */}
                {item.url && item.url !== "#" && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm font-mono shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 active:scale-95"
                  >
                    <span>Launch Live Application</span>
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}