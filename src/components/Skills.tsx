"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Layers, 
  Rocket, 
  BarChart3, 
  GitBranch, 
  Zap, 
  Code2, 
  Cpu, 
  Workflow, 
  Globe 
} from "lucide-react";

export default function Skills() {
  const stages = [
    {
      title: "Data & Tools ที่ใช้จริง",
      desc: "เครื่องมือหลักที่ใช้จัดการข้อมูลและทำโปรเจกต์จริง",
      accent: "from-emerald-500/10 via-cyan-500/5 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      iconBg: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        {
          name: "Python",
          level: "จัดการและดึงข้อมูล",
          type: "tech",
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path className="fill-[#38bdf8]" d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.4S2 6.1 2 10.6c0 4.5 3 4.4 3 4.4h1.8v-2.5s-.1-3 2.9-3h5v-5s.4-2.5-2.8-2.5zm-2.4 1.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"/>
              <path className="fill-[#fbbf24]" d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.6s3.4.4 3.4-4.1c0-4.5-3-4.4-3-4.4h-1.8v2.5s.1 3-2.9 3h-5v5s-.4 2.5 2.8 2.5zm2.4-1.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"/>
            </svg>
          ),
        },
        {
          name: "R Language",
          level: "วิเคราะห์สถิติ & กราฟ",
          type: "tech",
          icon: <BarChart3 className="w-4 h-4 text-sky-400" />,
        },
        {
          name: "Git & Vercel",
          level: "คุมเวอร์ชัน & ขึ้นเว็บ",
          type: "tech",
          icon: <GitBranch className="w-4 h-4 text-violet-400" />,
        },
      ],
    },
    {
      title: "Web & UI ที่กำลังลุย",
      desc: "เน้นฝึกเขียนเว็บ ทำหน้าตาให้สวยและตอบสนองลื่นไหล",
      accent: "from-sky-500/10 via-blue-500/5 to-transparent",
      borderColor: "hover:border-sky-400/50",
      iconBg: "text-sky-400 bg-sky-500/10 border-sky-500/25",
      icon: <Layers className="w-5 h-5" />,
      skills: [
        {
          name: "HTML5 & CSS3",
          level: "โครงสร้าง & ลูกเล่น",
          type: "tech",
          icon: <Code2 className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "JavaScript (ES6+)",
          level: "ระบบทำงานเบื้องหลัง",
          type: "tech",
          icon: <Zap className="w-4 h-4 text-amber-400" />,
        },
        {
          name: "Tailwind CSS",
          level: "แต่งหน้าตา & Responsive",
          type: "tech",
          icon: (
            <svg className="w-4 h-4 fill-cyan-400" viewBox="0 0 24 24">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z"/>
            </svg>
          ),
        },
        {
          name: "Next.js & React",
          level: "พัฒนาเว็บแอปเต็มตัว",
          type: "tech",
          icon: (
            <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.632 18.016l-4.736-6.852v6.852H11.5V6.784h1.496l4.636 6.708V6.784h1.396v11.232h-1.396z"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "เป้าหมายถัดไปกับ DII",
      desc: "สิ่งที่พร้อมลุยต่อเมื่อได้ทำโปรเจกต์จริงกับภาคธุรกิจ",
      accent: "from-indigo-500/10 via-purple-500/5 to-transparent",
      borderColor: "hover:border-indigo-400/50",
      iconBg: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
      icon: <Rocket className="w-5 h-5" />,
      skills: [
        {
          name: "Full-Stack Web Dev",
          level: "เป้าหมายหลัก",
          type: "target",
          icon: <Globe className="w-4 h-4 text-emerald-400" />,
        },
        {
          name: "Big Data & AI Pipelines",
          level: "เป้าหมายหลัก",
          type: "target",
          icon: <Cpu className="w-4 h-4 text-emerald-400" />,
        },
        {
          name: "Production APIs",
          level: "เป้าหมายหลัก",
          type: "target",
          icon: <Workflow className="w-4 h-4 text-emerald-400" />,
        },
      ],
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 bg-[var(--bg-canvas)] overflow-hidden font-sans transition-colors duration-300">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[11px] text-cyan-500 dark:text-cyan-300 tracking-widest uppercase">
              SKILLS & ROADMAP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight leading-snug">
            ทักษะที่ทำได้จริง & สิ่งที่พร้อมไปต่อ
          </h2>
        </div>

        {/* 3 Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`theme-card group relative rounded-3xl p-6 sm:p-7 shadow-lg ${stage.borderColor} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${stage.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                {/* Top: Icon Box */}
                <div className={`w-12 h-12 rounded-2xl border ${stage.iconBg} flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  {stage.icon}
                </div>

                {/* Card Titles */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-6 leading-relaxed min-h-[34px]">
                  {stage.desc}
                </p>

                {/* Skill List */}
                <div className="space-y-2.5">
                  {stage.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-900/10 dark:bg-slate-950/60 border border-[var(--border-card)] hover:border-cyan-500/40 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/[0.04] border border-[var(--border-card)] flex items-center justify-center flex-shrink-0">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-xs text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                      </div>

                      {skill.type === "target" ? (
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-300 font-medium">
                            {skill.level}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] text-[var(--text-muted)] bg-black/5 dark:bg-white/[0.03] border border-[var(--border-card)] px-2 py-0.5 rounded-md">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}