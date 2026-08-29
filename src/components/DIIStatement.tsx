"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, Zap } from "lucide-react";

export default function DIIStatement() {
  const pillars = [
    {
      icon: <Zap className="text-cyan-400" size={18} />,
      title: "Demand-Driven Learning",
      desc: "เรียนรู้จากการแก้โจทย์ที่มีความต้องการจริงในภาคอุตสาหกรรม",
    },
    {
      icon: <Users className="text-cyan-400" size={18} />,
      title: "Industry Collaboration",
      desc: "ทำงานร่วมกับผู้เชี่ยวชาญและทีมพัฒนาจริงในระบบนิเวศดิจิทัล",
    },
    {
      icon: <Target className="text-cyan-400" size={18} />,
      title: "Measurable Outcomes",
      desc: "วัดผลลัพธ์ผ่านชิ้นงาน เว็บแอปพลิเคชัน และระบบที่ใช้งานได้จริง",
    },
  ];

  return (
    <section className="relative w-full py-28 px-6 sm:px-12 overflow-hidden bg-[#07090e]">
      {/* แสง Ambient Glow สีส้มด้านหลัง */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Main Liquid Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-slate-950/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-14 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* ขอบเลเซอร์สะท้อนแสงด้านบน */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

          {/* Section Header */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={14} className="animate-pulse" />
              04 // STATEMENT FOR DII
            </span>
            <span className="font-mono text-[11px] text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full">
              CAMT // CMU CANDIDATE
            </span>
          </div>

          {/* Main Statement Quote */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 leading-snug tracking-tight mb-12">
            “ตั้งใจเข้าศึกษาที่{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent underline decoration-sky-500/40 decoration-wavy underline-offset-8">
              DII
            </span>{" "}
            เพราะต้องการเรียนรู้ผ่านการลงมือปฏิบัติจริงร่วมกับโจทย์ภาคธุรกิจ{" "}
            <span className="text-cyan-400 font-mono text-xl sm:text-2xl font-semibold">
              (Outcome-based)
            </span>{" "}
            เพื่อพัฒนาทักษะที่กำลังศึกษาอยู่ให้กลายเป็นความเชี่ยวชาญระดับมืออาชีพ”
          </blockquote>

          {/* 3 Pillars Liquid Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(14, 165, 233, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:bg-white/[0.05] transition-all cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-2xl font-bold text-cyan-300 neon-glow">
  Demand-Driven Learning
</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}