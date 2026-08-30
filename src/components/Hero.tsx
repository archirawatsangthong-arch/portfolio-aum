// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  User, 
  MapPin, 
  HeartHandshake, 
  Code2, 
  Sparkles,
  Home,
  Trophy,
  TrendingUp,
  Gamepad2
} from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-[#030712] font-sans">
      
      {/* 1. ฉากหลัง 3D โครงข่ายอนุภาคมิติลึก */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-35">
        <HeroScene reduceMotion={false} />
      </div>

      {/* แสง Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.06] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[160px] pointer-events-none rounded-full" />

      {/* ป้ายมุมซ้ายบน */}
      <div className="absolute top-8 left-6 sm:left-12 z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 uppercase select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>APPLICANT DOSSIER // 2026</span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ฝั่งซ้าย: ข้อมูลตัวตน + Bento Grid ประวัติส่วนตัว (7 Columns) */}
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
              CANDIDATE // AGE 21
            </span>
          </div>

          {/* ชื่อภาษาไทย และ ชื่อภาษาอังกฤษตัวใหญ่ชัดเจน */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-sans">
              อชิรวัฒน์ แสงทอง{" "}
              <span className="text-cyan-400 font-extrabold">(อั้ม)</span>
            </h1>
            <p className="mt-2 font-mono text-xl sm:text-2xl text-cyan-300 font-bold tracking-widest uppercase">
              ACHIRAWAT SANGTHONG
            </p>
          </div>

          {/* Bento Grid: 4 กล่องข้อมูลประวัติส่วนตัวเด่นชัด อ่านง่าย */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* 1. ประวัติการศึกษา */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-5 h-5" />
                <span>ประวัติการศึกษา</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">มัธยมศึกษา:</span>
                  <span className="text-white font-semibold">รร.เสริมงามวิทยาคม จ.ลำปาง</span>
                  <span className="ml-1 text-cyan-300 text-xs">(วิทย์–คณิต)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">ประถมศึกษา:</span>
                  <span className="text-slate-200">รร.อนุบาลเสริมงาม จ.ลำปาง</span>
                </div>
              </div>
            </div>

            {/* 2. ข้อมูลส่วนบุคคล */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-sky-500/30 hover:border-sky-400 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-bold uppercase tracking-wider mb-3">
                <User className="w-5 h-5" />
                <span>ข้อมูลทั่วไป</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">วัน/เดือน/ปีเกิด:</span>
                  <span className="text-white font-semibold">5 เมษายน พ.ศ. 2548</span>
                  <span className="ml-1 text-sky-300 font-mono text-xs">(อายุ 21 ปี)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">ข้อมูลทั่วไป:</span>
                  <span className="text-slate-200">สัญชาติไทย • ศาสนาพุทธ • กรุ๊ปเลือด AB</span>
                </div>
              </div>
            </div>

            {/* 3. ความสนใจพิเศษ (อัปเดตใหม่) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold uppercase tracking-wider mb-3">
                <Code2 className="w-5 h-5" />
                <span>ความสนใจพิเศษ</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-medium">
                  Web Development
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium">
                  E-Sports
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
                  Business
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-medium">
                  การพัฒนาตนเอง
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium">
                  กีฬาฟุตบอล
                </span>
              </div>
            </div>

            {/* 4. ที่อยู่ปัจจุบัน & ข้อมูลครอบครัว */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold uppercase tracking-wider mb-2.5">
                <Home className="w-5 h-5" />
                <span>ที่อยู่ &amp; ครอบครัว</span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">ที่อยู่ปัจจุบัน:</span>
                  <span className="text-slate-200">130 หมู่ 3 ต.เสริมซ้าย อ.เสริมงาม จ.ลำปาง 52210</span>
                </div>
                <div className="pt-1 border-t border-white/10 text-xs text-slate-300 space-y-0.5">
                  <p>• <strong>บิดา:</strong> นายสุริยา แสงทอง <span className="text-slate-400">(ธุรกิจส่วนตัว)</span></p>
                  <p>• <strong>มารดา:</strong> น.ส.อรทัย กาอาสา <span className="text-slate-400">(รับราชการ)</span></p>
                </div>
              </div>
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

              {/* Status Bar ใต้รูปภาพ */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lampang ➔ Chiang Mai, TH</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>DII APPLICANT</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}