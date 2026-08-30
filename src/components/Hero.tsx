// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Sparkles, 
  HeartHandshake,
  Code2
} from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-[#030712] font-sans">
      
      {/* 1. ฉากหลัง 3D โครงข่ายอนุภาค */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <HeroScene reduceMotion={false} />
      </div>

      {/* Ambient Glow แสงพื้นหลัง */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/[0.07] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-600/[0.06] blur-[150px] pointer-events-none rounded-full" />

      {/* ป้ายมุมซ้ายบน */}
      <div className="absolute top-6 left-6 sm:left-12 z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 uppercase select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>APPLICANT PROFILE // DII 2026</span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">
        
        {/* ฝั่งซ้าย: ข้อมูลส่วนตัว + ประวัติการศึกษา */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge ระบุสถานะผู้สมัคร */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              CANDIDATE // AGE 21
            </span>
          </div>

          {/* Heading ชื่อ-นามสกุล */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              อชิรวัฒน์ แสงทอง{" "}
              <span className="text-cyan-400 font-extrabold">(อั้ม)</span>
            </h1>
            <p className="mt-1 font-mono text-lg sm:text-xl text-slate-300 font-medium">
              Web Development &amp; Data Integration
            </p>
          </div>

          {/* สรุปเป้าหมายและความตั้งใจ */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            มีพื้นฐานความคิดเชิงตรรกะและการวิเคราะห์จากการเคยศึกษาในสายวิศวกรรมศาสตร์ มุ่งมั่นพัฒนาเทคโนโลยีดิจิทัล เน้นสร้างระบบเว็บและการจัดการข้อมูลที่ประยุกต์ใช้งานได้จริง
          </p>

          {/* กล่องข้อมูลส่วนตัว & ประวัติการศึกษา (Structured Data Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            
            {/* ข้อมูลการศึกษา */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                <GraduationCap className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">ประวัติการศึกษา</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug">
                • มัธยม: รร.เสริมงามวิทยาคม จ.ลำปาง <span className="text-cyan-300">(วิทย์–คณิต)</span>
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                • ประถม: รร.อนุบาลเสริมงาม จ.ลำปาง
              </p>
            </div>

            {/* ข้อมูลวันเกิด & ภูมิลำเนา */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 text-sky-400 mb-1.5">
                <Calendar className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">ข้อมูลทั่วไป</span>
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                • เกิด: 5 เม.ย. 2548 (อายุ 21 ปี)
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                • สัญชาติไทย · พุทธ · กรุ๊ปเลือด AB
              </p>
            </div>

            {/* ความสนใจพิเศษ */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                <Code2 className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">ความสนใจพิเศษ</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Web Development, การคิดเชิงระบบ, การจัดการข้อมูล, กีฬาฟุตบอล
              </p>
            </div>

            {/* ข้อมูลครอบครัว & ที่อยู่ */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">ที่อยู่ &amp; ครอบครัว</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug truncate">
                130 ม.3 ต.เสริมซ้าย อ.เสริมงาม จ.ลำปาง
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                บิดา: นายสุริยา (ธุรกิจส่วนตัว) · มารดา: น.ส.อรทัย (รับราชการ)
              </p>
            </div>

          </div>
        </motion.div>

        {/* ฝั่งขวา: กรอบรูปภาพโปรไฟล์ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <div className="relative w-full max-w-[360px] group">
            
            {/* Ambient Shadow Glow */}
            <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* กรอบรูปภาพ */}
            <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/30 bg-slate-950/80 backdrop-blur-2xl shadow-2xl p-2.5">
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
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}