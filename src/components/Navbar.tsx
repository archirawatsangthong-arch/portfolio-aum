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

    // ตรวจสอบค่าธีมเดิมจาก localStorage หรือค่าเริ่มต้น
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    }

    // ฟังก์ชันเดินเวลา Real-time
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

  // ฟังก์ชันสลับธีม สว่าง / มืด
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
    <header className="fixed top-4 sm:top-6 right-4 sm:right-8 z-[9999] pointer-events-none isolate">
      <motion.nav
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center gap-2 sm:gap-3.5 p-1.5 px-3 sm:px-4 rounded-full backdrop-blur-xl border transition-all duration-300 ${
          isDark
            ? "bg-[#050914]/95 border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-white"
            : "bg-white/95 border-slate-300 shadow-[0_15px_35px_rgba(0,0,0,0.12)] text-slate-900"
        }`}
      >
        {/* จุดสถานะสีฟ้า */}
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] ml-1" />

        {/* แถบเมนูคลิกเลื่อนหน้าจอ (ตัวหนังสือหนา ชัดเจน) */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-full font-mono text-xs sm:text-sm font-bold transition-all duration-200 ${
                isDark
                  ? "text-slate-100 hover:text-cyan-300 hover:bg-white/10"
                  : "text-slate-800 hover:text-cyan-600 hover:bg-slate-100"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* เส้นคั่น */}
        <span
          className={`h-4 w-px ${isDark ? "bg-white/20" : "bg-slate-300"}`}
        />

        {/* นาฬิกา Real-time */}
        <div className="flex items-center gap-1.5 font-mono">
          <Clock
            className={`w-3.5 h-3.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
          />
          <span
            className={`text-xs sm:text-sm font-bold tracking-wider ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {time || "00:00:00"}
          </span>
          <span
            className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
              isDark
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-cyan-100 text-cyan-700 font-extrabold"
            }`}
          >
            TH
          </span>
        </div>

        {/* ปุ่มสลับโหมด Light / Dark */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 active:scale-90 ${
            isDark
              ? "bg-white/10 border-white/15 text-amber-400 hover:bg-amber-400/20"
              : "bg-slate-100 border-slate-300 text-cyan-600 hover:bg-cyan-50"
          }`}
        >
          {isDark ? (
            <Moon size={15} className="fill-amber-400 text-amber-400" />
          ) : (
            <Sun size={16} className="text-amber-500 font-bold" />
          )}
        </button>
      </motion.nav>
    </header>
  );
}