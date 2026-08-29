// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6 sm:px-12 lg:px-20 bg-[#030712]">
      
      {/* 1. ฉากหลัง 3D โครงข่ายอนุภาคมิติลึก */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <HeroScene reduceMotion={false} />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/[0.07] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-blue-600/[0.06] blur-[150px] pointer-events-none rounded-full" />

      {/* ป้ายมุมซ้ายบน */}
      <div className="absolute top-8 left-6 sm:left-12 z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 uppercase select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>PORTFOLIO // 2026</span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center pt-8">
        
        {/* ฝั่งซ้าย: ข้อมูลแนะนำตัว */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge ระบุข้อมูล */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              ACHIRAWAT SANGTHONG // AGE 21
            </span>
          </div>

          {/* Heading ชื่อ-นามสกุล */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-sans">
            อชิรวัฒน์ แสงทอง{" "}
            <span className="text-cyan-400 font-extrabold">(อั้ม)</span>
          </h1>

          {/* Subtitle สายงาน */}
          <p className="font-mono text-xl sm:text-2xl text-slate-300 font-medium tracking-wide">
            Web Development &amp; Data Integration
          </p>

          {/* คำบรรยายประวัติ */}
          <div className="space-y-4 pt-2 text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
            <p>
              สวัสดีครับ ผมอายุ 21 ปี มีพื้นฐานความคิดเชิงตรรกะและการวิเคราะห์จากการเคยศึกษาในสายวิศวกรรมศาสตร์ ก่อนตัดสินใจเบนสายเพื่อมุ่งมั่นและทุ่มเทให้กับการพัฒนาเทคโนโลยีดิจิทัลอย่างเต็มตัว
            </p>
            <p>
              ปัจจุบันเน้นศึกษาและพัฒนาทักษะด้าน Web Development การจัดการข้อมูล และการสร้างระบบที่นำไปใช้งานได้จริง เพื่อต่อยอดสู่การผสานนวัตกรรมดิจิทัลในภาคธุรกิจและอุตสาหกรรม
            </p>
          </div>
        </motion.div>

        {/* ฝั่งขวา: กรอบรูปภาพเพียวๆ ไม่มีข้อความบัง */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <div className="relative w-full max-w-[360px] group">
            
            {/* Ambient Shadow Glow */}
            <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* กรอบรูปภาพหลัก */}
            <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/30 bg-slate-950/80 backdrop-blur-2xl shadow-2xl p-2.5">
              
              {/* คอนเทนเนอร์รูปภาพเต็มกรอบ */}
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