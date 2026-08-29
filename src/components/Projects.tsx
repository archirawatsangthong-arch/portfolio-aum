// @ts-nocheck
"use client";

import React, { type PointerEvent, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { 
  ArrowUpRight, 
  BookOpen, 
  Smartphone, 
  Zap, 
  RotateCw, 
  Lock, 
  ExternalLink,
  Database,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { diiPortfolio } from "@/data/portfolio-data";

function LiveBrowser() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 20 });
  const sy = useSpring(my, { stiffness: 180, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-3, 3]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const [key, setKey] = useState(0);

  function move(event: PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - box.left) / box.width - 0.5);
    my.set((event.clientY - box.top) / box.height - 0.5);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  const reloadIframe = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <motion.div
      onPointerMove={move}
      onPointerLeave={reset}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      className="project-tilt relative w-full overflow-hidden rounded-3xl border border-white/[0.12] bg-[#050914]/90 p-3 sm:p-4 shadow-2xl backdrop-blur-xl transition-all duration-300"
    >
      <div className="relative z-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#030712] shadow-inner">
        {/* Top bar */}
        <div className="flex h-11 items-center justify-between border-b border-white/[0.08] bg-slate-950/80 px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-black/40 px-4 py-1 font-mono text-[11px] text-slate-300">
            <Lock className="h-3 w-3 text-cyan-400" />
            <span className="truncate max-w-[200px] sm:max-w-none">
              libary-thc2026.vercel.app
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={reloadIframe}
              title="Reload Frame"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
            >
              <RotateCw className="h-3.5 w-3.5" />
            </button>
            <a
              href="https://libary-thc2026.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Open External"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Live App Frame */}
        <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full bg-[#030712]">
          <iframe
            key={key}
            src="https://libary-thc2026.vercel.app/"
            title="Live preview of Virtual Library Platform"
            loading="lazy"
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  const [library, hackathon] = diiPortfolio?.projects || [];

  // ตั้งค่าพาธหลักเป็น /bdi-hackathon.jpg ลำดับแรก
  const bdiImages = [
    "/bdi-hackathon.jpg",
    "/bdi-hackathon.png",
    "/bdi-hackathon.jpg.png",
    "/bdi-hackathon.jpg.jpg",
    "/bdi-hackathon.jpeg",
  ];
  const [bdiImgIdx, setBdiImgIdx] = useState(0);

  const libraryFeatures = [
    {
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      title: "เปิดอ่าน e-Book ทันที",
      desc: "อ่านผ่านเบราว์เซอร์ได้โดยตรง ไม่ต้องติดตั้งแอปพลิเคชัน",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      title: "Mobile-First Design",
      desc: "จัดวางหน้าตาให้พอดีกับทั้งสมาร์ตโฟนและแท็บเล็ต",
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      title: "UI สำหรับทุกวัย",
      desc: "โครงสร้างเรียบง่าย ลดขั้นตอนซับซ้อนในการค้นหา",
    },
  ];

  return (
    <section id="projects" className="mx-auto w-full max-w-[1600px] py-20 px-6 sm:px-12 space-y-16">
      
      {/* Project 01: Live Web Application */}
      <motion.article
        initial={{ opacity: 0, y: reduce ? 0 : 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#070b14]/80 p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/[0.05] blur-[160px] pointer-events-none rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-4">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  01 / LIVE WEB APPLICATION
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Virtual Library Platform
              </h3>
              
              <p className="mt-2 text-lg sm:text-xl font-bold text-cyan-400">
                สกร. โครงการ ‘อ่านเปลี่ยนชีวิต’
              </p>

              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-slate-400">
                ROLE // FRONT-END DEVELOPER & UI DESIGNER
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-sans">
              {library?.oneLiner || library?.description ||
                "ระบบห้องสมุดเสมือนเพื่อให้คนในพื้นที่เข้าถึง e-book ได้สะดวกรวดเร็วบนอุปกรณ์ดิจิทัล"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {libraryFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-sm"
                >
                  <div className="mb-2">{feat.icon}</div>
                  <p className="text-sm font-bold text-white leading-snug">
                    {feat.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 leading-normal">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["HTML5", "CSS3", "JAVASCRIPT", "TAILWIND", "VERCEL"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-slate-200 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://libary-thc2026.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 px-7 py-4 font-mono text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all active:scale-95"
              >
                <span>Launch Live Application</span>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>

              <a
                href="https://github.com/archirawatsangthong-arch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-cyan-500/40 px-6 py-4 font-mono text-sm text-white transition-all active:scale-95"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Source Code</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7">
            <LiveBrowser />
          </div>

        </div>
      </motion.article>

      {/* Project 02: Data Exploration (BDI Hackathon) */}
      <motion.article
        initial={{ opacity: 0, y: reduce ? 0 : 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#070b14]/80 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.04] blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                <Database className="h-3.5 w-3.5 text-cyan-400" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  02 / DATA EXPLORATION
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {hackathon?.title || "Regional Environmental Data Exploration"}
              </h3>
              
              <p className="text-base sm:text-lg font-semibold text-cyan-400 mt-1 font-sans">
                BDI Hackathon • การสำรวจและวิเคราะห์ข้อมูลสภาพแวดล้อม
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
              {hackathon?.description || 
                "เข้าร่วมเวิร์กช็อปวิเคราะห์ชุดข้อมูลปัญหาสิ่งแวดล้อมเชียงใหม่ด้วย Python และสถิติเชิงพื้นที่ เพื่อหา Insight และจัดทำ Data Visualization"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3.5">
                <BarChart3 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs text-slate-200">ประมวลผลและคลีนข้อมูลเชิงพื้นที่ด้วย Pandas</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-200">สร้างแผนภาพแนวโน้มสถิติเพื่อสรุปผล Insight</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "Pandas", "Matplotlib", "Statistics", "Data Viz"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Event Photo */}
          <div className="lg:col-span-5 w-full">
            <div className="group relative rounded-2xl overflow-hidden border border-white/[0.12] bg-slate-950 shadow-2xl">
              
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[11px] text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>EVENT PARTICIPATION</span>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={bdiImages[bdiImgIdx]}
                  alt="BDI Hackathon Participation"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95 contrast-105"
                  onError={() => {
                    if (bdiImgIdx < bdiImages.length - 1) {
                      setBdiImgIdx((prev) => prev + 1);
                    }
                  }}
                />
              </div>

              <div className="p-3.5 bg-black/60 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  Chiang Mai University x BDI
                </span>
                <span className="font-mono text-xs text-cyan-400">
                  // WORKSHOP
                </span>
              </div>

            </div>
          </div>

        </div>
      </motion.article>

    </section>
  );
}