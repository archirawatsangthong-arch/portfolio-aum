"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { caseStudySteps, type Project } from "@/data/portfolio-data";

/** ภาพตัวอย่างโปรเจกต์ */
function Thumb({ project }: { project: Project }) {
  if (project.thumbnail) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.thumbnail}
        alt={`ภาพผลงานโปรเจกต์ ${project.title}`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="relative flex h-full w-full items-end bg-slate-950/80 p-8"
      role="img"
      aria-label={`ภาพตัวอย่างสำหรับโปรเจกต์ ${project.title} — แทนที่ได้ใน portfolio-data.ts`}
    >
      <svg viewBox="0 0 320 200" className="h-full w-full" fill="none" aria-hidden>
        <rect x="24" y="28" width="150" height="8" rx="4" fill="var(--color-ink)" opacity="0.15" />
        <rect x="24" y="48" width="96" height="8" rx="4" fill="var(--color-ink)" opacity="0.1" />
        <rect
          x="24"
          y="80"
          width="272"
          height="90"
          rx="6"
          stroke="var(--color-line-strong)"
          strokeDasharray="4 6"
        />
        <circle
          cx="272"
          cy="40"
          r="10"
          stroke="var(--color-accent)"
          strokeWidth="1.25"
          opacity="0.8"
        />
        <path
          d="M40 160 C 90 150, 130 120, 180 108 S 250 96, 286 92"
          stroke="var(--color-accent)"
          strokeWidth="1.25"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function ProjectCard({
  project,
  no,
  flip = false,
}: {
  project: Project;
  no: string;
  flip?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Logic สำหรับ Liquid Light คำนวณแสงตามตำแหน่งเมาส์
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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-[32px] p-[1px] transition-all duration-300 overflow-hidden"
      style={{
        background: isHovered
          ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.6), rgba(255, 255, 255, 0.12) 40%, transparent 80%)`
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 70%)",
      }}
    >
      {/* Liquid Glass Inner Box */}
      <article className="relative rounded-[31px] bg-[#07090e]/85 backdrop-blur-3xl p-7 sm:p-12 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_1px_0_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* แสงของเหลว Fluid Aura ใต้ผิวกระจก */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-sky-500/25 to-transparent rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-orange-600/20 to-transparent rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />

        {/* แสง Refraction วิ่งตามเมาส์ */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.12), transparent 75%)`,
          }}
        />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ภาพ case study ในกรอบกระจกมน */}
          <div className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                <motion.div
                  className="aspect-[16/10] w-full"
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Thumb project={project} />
                </motion.div>
              </div>
            </div>

            {/* metadata ใต้ภาพ */}
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-3">
              <p className="micro font-mono text-slate-400">
                IMG {no} — {project.category}
              </p>
              <p className="micro font-mono text-slate-400">{project.year}</p>
            </div>
          </div>

          {/* รายละเอียดข้อความ */}
          <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : ""}`}>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-cyan-400">{no}</span>
              <span aria-hidden className="h-px w-8 bg-sky-500/40" />
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                {project.url ? "LIVE SYSTEM" : "CONCEPT MODEL"}
              </span>
            </div>

            <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold leading-[1.2] tracking-tight text-slate-100">
              {project.title}
            </h3>

            <p className="measure mt-4 text-[0.95rem] leading-relaxed text-slate-300">
              {project.oneLiner}
            </p>

            {/* รายการบทบาทและเครื่องมือ */}
            <dl className="mt-6 border-t border-white/[0.08]">
              {[
                ["ROLE", project.role],
                ["TOOLS", project.tools.join(" · ")],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4 border-b border-white/[0.06] py-2.5">
                  <dt className="micro font-mono w-16 shrink-0 text-slate-400 text-xs">{k}</dt>
                  <dd className="font-mono text-xs leading-relaxed text-slate-200">{v}</dd>
                </div>
              ))}
            </dl>

            {/* ปุ่ม Case Study & ลิงก์ */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={`case-${project.id}`}
                className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-sky-500/40 transition-all"
              >
                <span className="eyebrow font-mono text-xs text-slate-300 group-hover:text-white transition-colors">
                  {open ? "CLOSE CASE" : "READ CASE STUDY"}
                </span>
                <span
                  aria-hidden
                  className={`font-display text-base text-cyan-400 transition-transform duration-500 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-xs font-medium text-cyan-400 hover:text-orange-300 transition-colors"
                >
                  <span>Visit Website</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Accordion 5 ขั้นตอน */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`case-${project.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden"
            >
              <ol className="mt-10 border-t border-white/[0.08]">
                {caseStudySteps.map((step) => {
                  const value = project[step.field as keyof Project];
                  return (
                    <li
                      key={step.no}
                      className="grid gap-4 border-b border-white/[0.06] py-6 md:grid-cols-12 md:gap-8"
                    >
                      <div className="md:col-span-3">
                        <p className="micro font-mono mb-1.5 flex items-center gap-2.5 text-cyan-400">
                          <span>{step.no}</span>
                          <span aria-hidden className="h-px w-5 bg-sky-500/40" />
                        </p>
                        <p className="font-display text-sm font-semibold tracking-tight text-slate-100">
                          {step.label}
                        </p>
                        <p className="font-thai-display mt-0.5 text-xs text-slate-400">
                          {step.labelTh}
                        </p>
                      </div>

                      <div className="md:col-span-8 md:col-start-5">
                        {Array.isArray(value) ? (
                          <ul className="space-y-2.5">
                            {value.map((v) => (
                              <li
                                key={v}
                                className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-300"
                              >
                                <span
                                  aria-hidden
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                                />
                                <span>{v}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[0.95rem] leading-relaxed text-slate-300">
                            {String(value)}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </div>
  );
}