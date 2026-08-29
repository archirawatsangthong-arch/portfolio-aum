// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // ขยายเวลาแสดงไตเติลให้นานขึ้นเป็น 3.6 วินาที ก่อนเริ่มค่อยๆ สลายตัว
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.25,
            filter: "blur(36px) brightness(1.4)",
            transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] }, // Slow Motion Fade & Warp 1.8 วินาที
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#02050c] overflow-hidden select-none pointer-events-auto"
        >
          {/* ฉากหลัง: แสง Nebula และตารางมิติลึก */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(14,165,233,0.35),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_65%,transparent_100%)]" />

          {/* ป้ายสถานะระบบ Sci-Fi */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>PORTFOLIO INITIALIZATION // 2026</span>
          </motion.div>

          {/* กล่องข้อความยักษ์ระดับ Blockbuster Title */}
          <div className="relative text-center perspective-[1200px] px-4 max-w-7xl mx-auto">
            {/* ชั้นออร่าระเบิดแสงด้านหลังตัวอักษร */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.75, scale: 1.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/50 via-sky-300/40 to-blue-600/50 blur-[120px] rounded-full pointer-events-none"
            />

            {/* ตัวอักษรยักษ์ Extra Bold & Massive Scale */}
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.7,
                letterSpacing: "0.3em",
                z: -400,
              }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0.7, 1, 1.05],
                letterSpacing: ["0.3em", "0.08em", "0.12em"],
                z: 0,
              }}
              transition={{
                duration: 3.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-[950] text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[13.5rem] uppercase leading-[0.82] tracking-tight text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] [filter:drop-shadow(0_0_45px_rgba(56,189,248,0.9))_drop-shadow(0_0_90px_rgba(14,165,233,0.5))_drop-shadow(0_25px_50px_rgba(0,0,0,0.98))]"
            >
              DIGITAL
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-cyan-400 bg-clip-text text-transparent [-webkit-text-stroke:1px_rgba(56,189,248,0.6)]">
                ARCHITECT
              </span>
            </motion.h1>

            {/* คำบรรยายรองด้านล่าง */}
            <motion.p
              initial={{ opacity: 0, tracking: "0.6em" }}
              animate={{ opacity: 1, tracking: "0.3em" }}
              transition={{ duration: 1.6, delay: 0.8 }}
              className="mt-8 font-mono text-sm sm:text-base md:text-lg text-cyan-300 font-bold uppercase tracking-widest"
            >
              LOGIC • SYSTEMS • IMPACT
            </motion.p>
          </div>

          {/* ปุ่มข้ามมุมล่างขวา */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={() => setShowIntro(false)}
            className="absolute bottom-8 right-8 font-mono text-xs tracking-widest text-slate-400 hover:text-cyan-400 uppercase transition-all"
          >
            [ SKIP INTRO → ]
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}