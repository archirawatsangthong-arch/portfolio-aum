"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Hero3DCore from "./Hero3DCore";
import HeroScene from "./HeroScene";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });

  const portraitScale = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0.8]);
  const portraitY = useTransform(scrollYProgress, [0, 0.6], [0, reduce ? 0 : -80]);
  const portraitOpacity = useTransform(scrollYProgress, [0.15, 0.6], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.6], [0, reduce ? 0 : 16]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  const introOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.32, 0.62], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.32, 0.62], [reduce ? 0 : 50, 0]);

  return (
    <section ref={root} id="top" className="relative h-[200vh] w-full bg-[#030712]">
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden px-6 py-8 sm:px-12 sm:py-10">
        
        {/* ฉาก 3D Wireframe */}
        <HeroScene reduceMotion={Boolean(reduce)} />

        {/* ป้ายด้านบน */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="relative z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-slate-400 uppercase select-none"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>PORTFOLIO // 2026</span>
        </motion.div>

        {/* แอนิเมชันกลางจอ */}
        <motion.div
          style={{ scale: portraitScale, y: portraitY, opacity: portraitOpacity, filter }}
          className="relative z-10 flex flex-1 items-center justify-center"
        >
          <Hero3DCore />
        </motion.div>

        {/* ข้อความแนะนำตัวหลัก */}
        <motion.div
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 mx-auto max-w-6xl px-6 pointer-events-none"
        >
          {/* หมวดหมู่ & อายุ */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-semibold text-cyan-300 tracking-wider uppercase">
              ACHIRAWAT SANGTHONG // AGE 21
            </span>
          </div>

          {/* ชื่อ-นามสกุล */}
          <div className="relative mb-5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              อชิรวัฒน์ แสงทอง <span className="text-cyan-400 text-3xl sm:text-5xl font-medium">(อั้ม)</span> <br />
              <span className="text-slate-400 font-medium text-2xl sm:text-3xl lg:text-4xl font-mono">
                Web Development &amp; Data Integration
              </span>
            </h1>
          </div>

          {/* เนื้อหาแนะนำตัว */}
          <div className="max-w-2xl space-y-3">
            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed">
              สวัสดีครับ ผมอายุ 21 ปี มีพื้นฐานความคิดเชิงตรรกะและการวิเคราะห์จากการเคยศึกษาในสายวิศวกรรมศาสตร์ ก่อนตัดสินใจเบนสายเพื่อมุ่งมั่นและทุ่มเทให้กับการพัฒนาเทคโนโลยีดิจิทัลอย่างเต็มตัว
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
              ปัจจุบันเน้นศึกษาและพัฒนาทักษะด้าน Web Development การจัดการข้อมูล และการสร้างระบบที่นำไปใช้งานได้จริง เพื่อต่อยอดสู่การผสานนวัตกรรมดิจิทัลในภาคธุรกิจและอุตสาหกรรม
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}