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

    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    }

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", targetId: "about" },
    { name: "Projects", targetId: "projects" },
    { name: "Skills", targetId: "skills" },
    { name: "Contact", targetId: "contact" },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed top-3 sm:top-6 right-3 sm:right-8 z-[9999] pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`pointer-events-auto flex items-center gap-1.5 sm:gap-3 p-1.5 px-2.5 sm:px-4 rounded-2xl backdrop-blur-2xl border transition-all duration-300 shadow-2xl ${
          isDark
            ? "bg-[#030712]/90 border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-white/95 border-slate-300/80 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />

        {/* ปุ่มหมวดหมู่ */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.targetId}`}
              onClick={(e) => handleScrollTo(e, link.targetId)}
              className={`px-2 sm:px-3 py-1.5 rounded-xl font-mono text-[11px] sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isDark
                  ? "text-slate-200 hover:text-cyan-300 hover:bg-white/10"
                  : "text-slate-800 hover:text-cyan-600 hover:bg-slate-100"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* เส้นคั่น + HUD นาฬิกา (แสดงเฉพาะจอแท็บเล็ต/คอมพิวเตอร์ขึ้นไป เพื่อไม่ให้จอมือถือล้น) */}
        <div className="hidden sm:flex items-center gap-3">
          <span className={`h-4 w-px ${isDark ? "bg-white/15" : "bg-slate-300"}`} />
          <div className="flex items-center gap-1.5 font-mono">
            <Clock className={`w-3.5 h-3.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
            <span className={`text-xs sm:text-sm font-bold tracking-wider ${isDark ? "text-white" : "text-slate-900"}`}>
              {time || "00:00:00"}
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                isDark
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "bg-cyan-100 text-cyan-800 border border-cyan-200"
              }`}
            >
              TH
            </span>
          </div>
        </div>

        <span className={`hidden sm:block h-4 w-px ${isDark ? "bg-white/15" : "bg-slate-300"}`} />

        {/* ปุ่มสลับโหมด */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl border transition-all duration-200 active:scale-90 shrink-0 ${
            isDark
              ? "bg-white/5 border-white/10 text-amber-400 hover:bg-amber-400/20 hover:border-amber-400/40"
              : "bg-slate-100 border-slate-300 text-amber-600 hover:bg-amber-50 hover:border-amber-300"
          }`}
        >
          {isDark ? (
            <Moon size={14} className="fill-amber-400 text-amber-400" />
          ) : (
            <Sun size={15} className="text-amber-600 font-bold" />
          )}
        </button>
      </motion.nav>
    </header>
  );
}