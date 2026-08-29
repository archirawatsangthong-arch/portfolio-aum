// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero3DCore from "./Hero3DCore";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6 sm:px-12 lg:px-20 bg-[#030712]">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.07] blur-[150px] pointer-events-none rounded-full" />

      {/* ป้ายด้านบนซ้าย PORTFOLIO // 2026 */}
      <div className="absolute top-8 left-6 sm:left-12 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 uppercase select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <span>PORTFOLIO // 2026</span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
        
        {/* Left Column: ข้อมูลแนะนำตัว (แสดงทันที) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge ระบุข้อมูล */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
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

        {/* Right Column: วัตถุ 3D Wireframe ฝั่งขวา */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative select-none"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
            {/* โหลดคอมโพเนนต์ 3D ทรงกลม */}
            <Hero3DCore />
          </div>
        </motion.div>

      </div>
    </section>
  );
}