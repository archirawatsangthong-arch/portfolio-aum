// @ts-nocheck
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
  Globe,
  Sparkles,
  Activity
} from "lucide-react";
import Hero3DCore from "./Hero3DCore";

export default function Skills() {
  const stages = [
    {
      title: "Data & Tools ที่ใช้จริง",
      desc: "เครื่องมือหลักที่ใช้จัดการข้อมูลและทำโปรเจกต์จริง",
      accent: "from-cyan-500/15 via-blue-500/5 to-transparent",
      borderColor: "border-cyan-500/30 hover:border-cyan-400",
      iconBg: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
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
      accent: "from-sky-500/15 via-blue-500/5 to-transparent",
      borderColor: "border-sky-500/30 hover:border-sky-400",
      iconBg: "text-sky-400 bg-sky-500/10 border-sky-500/30",
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
            <svg className="w-4 h-4 fill-sky-300" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.632 18.016l-4.736-6.852v6.852H11.5V6.784h1.496l4.636 6.708V6.784h1.396v11.232h-1.396z"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "เป้าหมายถัดไปกับ DII",
      desc: "สิ่งที่พร้อมลุยต่อเมื่อได้ทำโปรเจกต์จริงกับภาคธุรกิจ",
      accent: "from-indigo-500/15 via-purple-500/5 to-transparent",
      borderColor: "border-indigo-500/30 hover:border-indigo-400",
      iconBg: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
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
    <section className="relative w-full py-16 sm:py-24 font-sans select-none">
      
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.05] blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 font-semibold tracking-widest uppercase">
              SKILLS &amp; ROADMAP
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            ทักษะที่ทำได้จริง <span className="text-cyan-400">&amp;</span> สิ่งที่พร้อมไปต่อ
          </h2>
          <p className="mt-2 text-slate-400 font-mono text-sm max-w-2xl">
            โครงสร้างทักษะทางเทคนิค เครื่องมือที่ใช้งาน และเป้าหมายการต่อยอดสู่นวัตกรรมดิจิทัล
          </p>
        </div>

        {/* Layout: ฝั่งซ้าย 3D Character Workspace | ฝั่งขวา Bento Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ฝั่งซ้าย: กล่องการ์ด 3D Workspace ของตัวการ์ตูน */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-6 sm:p-7 border border-white/10 bg-[#030712]/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Shadow ด้านหลัง */}
            <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* ส่วนหัวการ์ด 3D */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-wider text-slate-200 uppercase">
                  DEV WORKSPACE // 3D
                </span>
              </div>
              <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2 py-0.5 rounded-full font-semibold">
                ACTIVE
              </span>
            </div>

            {/* โมเดล 3D การ์ตูนโต๊ะคอม */}
            <div className="relative z-10 flex-1 my-6 min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
              <Hero3DCore />
            </div>

            {/* ส่วนล่างของการ์ด 3D */}
            <div className="relative z-10 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Focus: Web &amp; Data Pipeline</span>
              </div>
              <span className="text-[11px] text-cyan-400 font-bold">2026</span>
            </div>
          </motion.div>

          {/* ฝั่งขวา: 3 Bento Stage Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-5 sm:p-6 border ${stage.borderColor} bg-[#030712]/80 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stage.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* หัวข้อหมวด */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`w-10 h-10 rounded-xl border ${stage.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      {stage.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-snug">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  {/* รายการสกิล */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                    {stage.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-xs text-slate-100 truncate">
                            {skill.name}
                          </span>
                        </div>

                        {skill.type === "target" ? (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] text-emerald-300 font-semibold font-mono">
                              {skill.level}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-mono bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-md w-fit">
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

      </div>
    </section>
  );
}