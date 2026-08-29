// @ts-nocheck
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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-[9999] flex justify-center px-4 pointer-events-none isolate">
      <motion.nav
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pointer-events-auto group relative flex items-center justify-between gap-3 sm:gap-6 p-1.5 px-3 sm:px-5 rounded-2xl bg-[#030712]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      >
        {/* แสง Ambient Glow */}
        <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/25 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

        {/* โลโก้ / กลับขึ้นบนสุด */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-wider text-white hover:text-cyan-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="hidden xs:inline">PORTFOLIO</span>
        </a>

        {/* แถบเมนูคลิกเลื่อนไปตามหมวดหมู่ */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-xl font-mono text-xs text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ส่วนขวา: HUD นาฬิกา + ปุ่มสลับธีม */}
        <div className="flex items-center gap-2 sm:gap-3 pl-2 border-l border-white/15">
          {/* HUD นาฬิกา */}
          <div className="hidden sm:flex items-center gap-2 font-mono">
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
        </div>
      </motion.nav>
    </header>
  );
}