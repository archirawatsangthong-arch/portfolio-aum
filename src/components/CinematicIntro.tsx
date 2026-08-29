// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // แสดงผลไตเติลประมาณ 2.4 วินาทีก่อนเฟดออกอย่างนุ่มนวล
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(24px) brightness(1.3)",
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#02050c] overflow-hidden select-none"
        >
          {/* แสง Nebula & ตาราง Grid มิติลึก */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(6,182,212,0.3),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_65%,transparent_100%)]" />

          {/* ป้ายสถานะด้านบน */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-[0.3em] text-cyan-400 uppercase font-semibold"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>PORTFOLIO INITIALIZATION // 2026</span>
          </motion.div>

          {/* กล่องข้อความ WELCOME TO PORTFOLIO */}
          <div className="relative text-center px-4 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.75, scale: 1.25 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/40 via-sky-300/30 to-blue-600/40 blur-[110px] rounded-full pointer-events-none"
            />

            <motion.h1
              initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.15em" }}
              animate={{
                opacity: 1,
                scale: 1,
                letterSpacing: "0.05em",
              }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-[950] text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] uppercase leading-[0.9] tracking-tight text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] [filter:drop-shadow(0_0_35px_rgba(6,182,212,0.8))]"
            >
              WELCOME TO
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-cyan-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 font-mono text-xs sm:text-sm md:text-base text-cyan-300 font-bold uppercase tracking-[0.25em]"
            >
              ACHIRAWAT SANGTHONG // 2026
            </motion.p>
          </div>

          {/* ปุ่มข้ามมุมล่างขวา */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={() => setShowIntro(false)}
            className="absolute bottom-8 right-8 font-mono text-xs tracking-widest text-slate-400 hover:text-cyan-400 uppercase transition-all px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5"
          >
            [ SKIP INTRO → ]
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}