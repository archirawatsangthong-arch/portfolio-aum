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
  Heart, 
  Code2, 
  Compass,
  UserCheck
} from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#030712] font-sans">
      
      {/* 1. ฉากหลัง 3D โครงข่ายอนุภาคมิติลึก */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-35">
        <HeroScene reduceMotion={false} />
      </div>

      {/* แสง Ambient Glow รอบฉาก */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.06] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.05] blur-[160px] pointer-events-none rounded-full" />

      {/* ป้ายสถานะมุมซ้ายบน */}
      <div className="absolute top-8 left-6 sm:left-12 z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 uppercase select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>PERSONAL IDENTITY // 2026</span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* ฝั่งซ้าย: ข้อมูลตัวตน เรื่องราว และประวัติ (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-7 text-left"
        >
          {/* Badge ระบุตัวตน */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              APPLICANT DOSSIER // BATCH 9
            </span>
          </div>

          {/* ชื่อและฉายา */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              อชิรวัฒน์ แสงทอง{" "}
              <span className="text-cyan-400 font-extrabold">(อั้ม)</span>
            </h1>
            <p className="mt-2 font-mono text-lg sm:text-xl text-slate-300 font-medium tracking-wide flex items-center gap-2">
              <span className="text-cyan-400">#</span> Software • Data • Creative Problem Solver
            </p>
          </div>

          {/* เรื่องราวและตัวตน (Personal Story) */}
          <div className="relative p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
            <div className="absolute -left-1 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-2">
              สวัสดีครับ ผมอั้ม อายุ 21 ปี เป็นคนที่หลงใหลในการสร้างสรรค์เทคโนโลยีและการทำความเข้าใจระบบจากรากฐาน มีจุดเริ่มต้นจากกระบวนการคิดเชิงตรรกะและการวิเคราะห์ ก่อนมุ่งมั่นพัฒนาทักษะด้านการเขียนโปรแกรมและการจัดการข้อมูลอย่างจริงจัง เพื่อสร้างสรรค์นวัตกรรมดิจิทัลที่แก้ปัญหาได้ตรงจุดและสร้างประโยชน์แก่ผู้คน
            </p>
          </div>

          {/* Bento Grid: การ์ดข้อมูลประวัติส่วนตัว 4 หมวดหมู่ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            
            {/* 1. การศึกษาและผลการเรียน */}
            <div className="group p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs font-mono uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>การศึกษา &amp; ผลการเรียน</span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                  GPAX 3.97
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                รร.เสริมงามวิทยาคม จ.ลำปาง
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                แผนการเรียนวิทยาศาสตร์–คณิตศาสตร์
              </p>
            </div>

            {/* 2. บทบาทและความเป็นผู้นำ */}
            <div className="group p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs font-mono uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>บทบาท &amp; กิจกรรม</span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20 font-bold">
                  LEADER
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                อดีตคณะกรรมการนักเรียน
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                รางวัลและเกียรติบัตรวิชาการ 10+ รายการ
              </p>
            </div>

            {/* 3. สิ่งที่ชอบ & ไลฟ์สไตล์ */}
            <div className="group p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs font-mono uppercase tracking-wider mb-2">
                <Heart className="w-4 h-4" />
                <span>ความสนใจ &amp; กิจกรรมโปรด</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                Web Development • UX/UI • ฟุตบอล
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                การศึกษาโมเดลระบบข้อมูลและเทคโนโลยีใหม่
              </p>
            </div>

            {/* 4. ข้อมูลพื้นฐาน & ภูมิลำเนา */}
            <div className="group p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs font-mono uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>ข้อมูลพื้นฐาน</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                เกิด 5 เม.ย. 2548 • กรุ๊ปเลือด AB
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                ภูมิลำเนา: อ.เสริมงาม จ.ลำปาง ➔ เชียงใหม่
              </p>
            </div>

          </div>
        </motion.div>

        {/* ฝั่งขวา: กรอบรูปภาพ Cyber-Portrait Card (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <div className="relative w-full max-w-[380px] group">
            
            {/* Ambient Shadow Glow */}
            <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* กรอบรูปภาพหลัก */}
            <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/30 bg-slate-950/90 backdrop-blur-2xl shadow-2xl p-2.5">
              
              {/* รูปภาพโปรไฟล์ */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-slate-900 shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="อชิรวัฒน์ แสงทอง"
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