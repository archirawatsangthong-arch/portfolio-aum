// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Code2, 
  Layers,
  Terminal,
  Activity,
  CheckCircle2
} from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-[#030712] font-sans">
      
      {/* 1. ฉากหลัง 3D โครงข่ายอนุภาค */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-35">
        <HeroScene reduceMotion={false} />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.06] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[160px] pointer-events-none rounded-full" />

      {/* ป้ายมุมซ้ายบน */}
      <div className="absolute top-8 left-6 sm:left-12 z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 uppercase select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>APPLICANT DOSSIER // DII 2026</span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ฝั่งซ้าย: ข้อมูลตัวตน + Bento Grid จุดเด่น (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge สถานะ */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              CANDIDATE PROFILE // AGE 21
            </span>
          </div>

          {/* Heading ชื่อ-นามสกุล และ Subtitle */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-sans">
              Achirawat Sangthong{" "}
              <span className="text-cyan-400 font-extrabold">(Aum)</span>
            </h1>
            <p className="mt-2 font-mono text-lg sm:text-xl text-slate-300 font-medium tracking-wide flex items-center gap-2">
              <span className="text-cyan-400">#</span> Software • Data • Creative Problem Solver
            </p>
          </div>

          {/* Bento Grid ชุดใหม่: เน้นตัวเลข ผลงานจริง และทักษะให้เด่นชัด */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            
            {/* 1. การศึกษา & เกรดเฉลี่ยสะสม (เน้นตัวเลข GPAX เด่น) */}
            <div className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-xl transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>การศึกษา &amp; ผลการเรียน</span>
                </div>
                <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                  3.97
                </span>
              </div>
              <p className="text-sm font-bold text-white leading-snug">
                รร.เสริมงามวิทยาคม จ.ลำปาง
              </p>
              <p className="text-xs text-slate-300 mt-1">
                แผนการเรียนวิทย์–คณิต • GPAX 3.97
              </p>
            </div>

            {/* 2. บทบาทผู้นำ & รางวัล */}
            <div className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-sky-500/30 hover:border-sky-400 backdrop-blur-xl transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>บทบาท &amp; กิจกรรม</span>
                </div>
                <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
                  10+
                </span>
              </div>
              <p className="text-sm font-bold text-white leading-snug">
                อดีตคณะกรรมการนักเรียน
              </p>
              <p className="text-xs text-slate-300 mt-1">
                เกียรติบัตรและรางวัลวิชาการ 10+ รายการ
              </p>
            </div>

            {/* 3. ผลงานระบบที่พัฒนาและใช้งานจริง */}
            <div className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-emerald-500/30 hover:border-emerald-400 backdrop-blur-xl transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>ระบบและผลงานเด่น</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Live Web App:</strong> ระบบห้องสมุดดิจิทัล สกร.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Data Exploration:</strong> วิเคราะห์ข้อมูลสิ่งแวดล้อม (BDI)</span>
                </li>
              </ul>
            </div>

            {/* 4. Tech Stack ที่ใช้งานจริง */}
            <div className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-indigo-500/30 hover:border-indigo-400 backdrop-blur-xl transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-2.5">
                <Code2 className="w-4 h-4" />
                <span>Tech Stack ที่ใช้จริง</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "React", "Python", "Tailwind", "Git & Vercel"].map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* แถบข้อมูลพื้นฐานและภูมิลำเนาด้านล่าง */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>เกิด 5 เม.ย. 2548 (อายุ 21 ปี) • กรุ๊ปเลือด AB</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>ลำปาง ➔ เชียงใหม่ (TH)</span>
            </div>
          </div>
        </motion.div>

        {/* ฝั่งขวา: การ์ดรูปภาพโปรไฟล์ (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <div className="relative w-full max-w-[380px] group">
            
            {/* Ambient Glow */}
            <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* กรอบรูปภาพ */}
            <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/30 bg-slate-950/90 backdrop-blur-2xl shadow-2xl p-2.5">
              
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-slate-900 shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="Achirawat Sangthong"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith(".jpg")) target.src = "/profile.png";
                    else if (target.src.endsWith(".png")) target.src = "/profile.jpeg";
                  }}
                />
              </div>

              {/* Status Bar ใต้รูป */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chiang Mai, Thailand</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>DII CANDIDATE</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}