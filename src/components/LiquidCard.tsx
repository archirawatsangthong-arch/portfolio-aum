"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function LiquidCard({ children, className = "" }: LiquidCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-[28px] overflow-hidden p-[1px] ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.45), rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.02) 80%)`
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 60%)",
      }}
    >
      {/* 1. เนื้อแก้ว Liquid Glass ชั้นใน */}
      <div className="relative h-full w-full rounded-[27px] bg-[#080b12]/80 backdrop-blur-3xl p-7 sm:p-9 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_1px_0_rgba(0,0,0,0.8),0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* 2. Fluid Liquid Light (แสงของเหลวไหลวนอยู่ใต้เนื้อแก้ว) */}
        <div className="absolute -top-20 -left-20 w-52 h-52 bg-gradient-to-br from-sky-500/25 to-amber-500/0 rounded-full blur-[50px] pointer-events-none group-hover:scale-150 transition-transform duration-700 ease-out" />
        <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-gradient-to-tl from-orange-600/20 to-transparent rounded-full blur-[60px] pointer-events-none group-hover:scale-150 transition-transform duration-700 ease-out" />

        {/* 3. Mouse Spotlight Refraction (แสงไฮไลต์ผิวกระจกที่เลื่อนตามเมาส์) */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.18), transparent 70%)`,
          }}
        />

        {/* 4. เนื้อหาภายใน Card */}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
}