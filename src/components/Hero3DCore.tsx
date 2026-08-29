// @ts-nocheck
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import heroAnimation from "../../public/hero-animation.json";

// ฟังก์ชันเปลี่ยนสี Stroke ในข้อมูล Lottie JSON ให้เป็นสีฟ้า Cosmic Cyan ([R, G, B, A] ค่า 0-1)
function customizeLottieTheme(data: any) {
  const cloned = JSON.parse(JSON.stringify(data));

  function traverse(obj: any) {
    if (!obj || typeof obj !== "object") return;

    // ty: 'st' คือ Stroke (เส้นโครงตาข่ายลูกบอล 3D)
    if (obj.ty === "st" && obj.c && Array.isArray(obj.c.k)) {
      obj.c.k = [0.22, 0.74, 0.97, 1]; // สี #38bdf8
    }

    for (const key of Object.keys(obj)) {
      traverse(obj[key]);
    }
  }

  traverse(cloned);
  return cloned;
}

export default function Hero3DCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const themedData = customizeLottieTheme(heroAnimation);

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: themedData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
      }}
      className="relative flex items-center justify-center w-full max-w-[560px] md:max-w-[680px] aspect-square mx-auto pointer-events-none select-none"
    >
      {/* CSS บังคับสีเส้นโครงตาข่ายลูกบอลด้านใน SVG ให้เป็นสีฟ้าเรืองแสง */}
      <style>{`
        .lottie-hero-box svg path[stroke],
        .lottie-hero-box svg line,
        .lottie-hero-box svg polygon,
        .lottie-hero-box svg polyline {
          stroke: #38bdf8 !important;
          stroke-opacity: 0.55 !important;
        }
      `}</style>

      {/* รัศมีแสงสีฟ้า Cosmic Blue Glow ด้านหลัง */}
      <div className="absolute inset-10 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-500/20 to-blue-600/10 filter blur-[90px] scale-125" />

      {/* แอนิเมชัน */}
      <div
        ref={containerRef}
        className="lottie-hero-box w-full h-full flex items-center justify-center [filter:drop-shadow(0_12px_40px_rgba(14,165,233,0.35))]"
      />
    </motion.div>
  );
}