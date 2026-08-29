"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    // ดึงค่าธีมเดิมที่เคยบันทึกไว้ใน localStorage
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    }

    // ระบบเดินเวลา Real-time
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // ฟังก์ชันสลับโหมด พร้อมบันทึกสถานะ
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-5 right-5 sm:right-8 z-[9999] isolate pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto group relative flex items-center gap-3 p-1.5 pl-3.5 rounded-2xl bg-[#030712]/90 html-light:bg-white/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      >
        {/* แสง Ambient Glow */}
        <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

        {/* HUD นาฬิกา */}
        <div className="flex items-center gap-2 font-mono">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Clock size={13} />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-bold tracking-widest text-slate-100">
              {time || "00:00:00"}
            </span>
            <span className="text-[9px] font-semibold text-cyan-400 bg-cyan-500/10 px-1 rounded">
              TH
            </span>
          </div>
        </div>

        {/* เส้นคั่น */}
        <span className="h-4 w-px bg-white/15" />

        {/* ปุ่มสลับโหมดกลางวัน/กลางคืน */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 active:scale-95 transition-all duration-200"
        >
          {isDark ? (
            <Moon size={15} className="text-amber-400 transition-transform duration-500 hover:rotate-90" />
          ) : (
            <Sun size={15} className="text-cyan-400 transition-transform duration-500 hover:-rotate-12" />
          )}
        </button>
      </motion.div>
    </header>
  );
}