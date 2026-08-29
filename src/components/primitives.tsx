"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { runningHead } from "@/data/portfolio-data";
import {
  BlueprintBackdrop,
  ChapterSpine,
  FigCaption,
  RunningHead,
} from "./blueprint";

/* ============================================================
   Reveal — ค่อย ๆ ปรากฏเมื่อเลื่อนถึง ใช้ซ้ำทั้งเว็บ
   ============================================================ */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   Section — โครงของทุกบท
   tone เปลี่ยนพื้นหลังเพื่อให้แต่ละบทไม่ซ้ำกัน
   width ให้บางบทแคบลงเพื่อเปลี่ยนจังหวะการอ่าน
   ============================================================ */
/** ทุก tone อยู่บนพื้น off-white ต่างกันที่ระดับความอุ่น */
const tones = {
  canvas: "bg-canvas border-line",
  elevated: "bg-elevated border-line",
  /** จุดพีคของหน้า — พื้นอุ่นขึ้นหนึ่งขั้น */
  raised: "bg-raised border-line-strong",
} as const;

export function Section({
  id,
  index,
  label,
  children,
  tone = "canvas",
  width = "wide",
  className = "",
  caption,
  fig,
  /** สลับด้านของกราฟิกฉากหลัง เพื่อไม่ให้ทุกบทมีองค์ประกอบเดียวกัน */
  backdrop = "left",
  spine = true,
}: {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  width?: "wide" | "narrow";
  className?: string;
  caption?: string;
  fig?: string;
  backdrop?: "left" | "right" | "center";
  spine?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={`relative overflow-hidden border-t px-6 py-24 sm:px-10 md:py-32 lg:px-16 ${tones[tone]} ${className}`}
    >
      <BlueprintBackdrop variant={backdrop} />
      {spine && <ChapterSpine />}

      {/* ป้ายแนวตั้งที่ขอบซ้าย — รายละเอียดแบบนิตยสาร */}
      <span
        aria-hidden
        className="side-label absolute left-4 top-1/2 hidden -translate-y-1/2 text-muted/45 xl:block"
      >
        {runningHead.publication}
      </span>

      {/* เลขบทตัวใหญ่เป็นฉากหลัง */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-2 select-none font-display text-[26vw] font-semibold leading-none tracking-tighter text-ink/[0.04] md:text-[16vw]"
      >
        {index}
      </span>

      <div className={`relative mx-auto ${width === "narrow" ? "max-w-5xl" : "max-w-7xl"}`}>
        <Reveal>
          <RunningHead
            left={`CHAPTER ${index}`}
            right={runningHead.range}
            className="mb-8"
          />
        </Reveal>

        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <p
              id={`${id}-label`}
              className="eyebrow flex items-center gap-3 text-muted"
            >
              <span className="text-accent-ink">{index}</span>
              <span aria-hidden className="h-px w-8 bg-line-strong" />
              <span>{label}</span>
            </p>
            {caption && fig && <FigCaption fig={fig}>{caption}</FigCaption>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ============================================================
   Statement — แถบเต็มความกว้างคั่นระหว่างบท
   เป็นจุดพักตาและสร้างจังหวะให้หน้าเว็บ
   ============================================================ */
export function Statement({
  lines,
  attribution,
  tone = "accent",
}: {
  lines: readonly string[];
  attribution?: string;
  tone?: "accent" | "ink";
}) {
  const onAccent = tone === "accent";

  return (
    <aside className="relative overflow-hidden border-y border-line bg-elevated px-6 py-20 sm:px-10 md:py-28 lg:px-16">
      {/* เส้นตารางจาง ๆ ให้แถบคั่นดูเป็นระบบ ไม่ใช่พื้นเปล่า */}
      <span
        aria-hidden
        className="grid-veil pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_72%)]"
      />
      {/* วงกลมเส้นขนาดใหญ่หลังข้อความ */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line-strong/40"
      />

      <div className="relative mx-auto max-w-5xl">
        <span
          aria-hidden
          className="mb-8 block h-8 w-px bg-gradient-to-b from-transparent to-accent/60"
        />
        <SplitLines
          as="p"
          lines={lines}
          accentIndex={onAccent ? lines.length - 1 : undefined}
          className="display-tight font-thai-display text-[clamp(1.85rem,5.5vw,4rem)] leading-[1.1] text-ink"
        />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {attribution && (
            <Reveal delay={0.2}>
              <p className="eyebrow flex items-center gap-3 text-muted">
                <span aria-hidden className="h-px w-10 bg-accent" />
                {attribution}
              </p>
            </Reveal>
          )}
          <p className="micro text-muted/50" aria-hidden>
            {runningHead.place}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-8 block h-8 w-px bg-gradient-to-b from-accent/60 to-transparent"
        />
      </div>
    </aside>
  );
}

/* ============================================================
   MetaRow — แถวข้อมูลย่อยแบบตาราง ใช้ในหลายบท
   ============================================================ */
export function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-line py-3">
      <span className="micro w-28 shrink-0 text-muted/70">{label}</span>
      <span className="text-sm leading-snug text-ink">{value}</span>
    </div>
  );
}

/* ============================================================
   SplitLines — เผยข้อความทีละบรรทัด สำหรับหัวเรื่องใหญ่
   ============================================================ */
const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function SplitLines({
  lines,
  className = "",
  accentIndex,
  as: Tag = "h2",
}: {
  lines: readonly string[];
  className?: string;
  /** บรรทัดที่ต้องการเน้นด้วยสีส้ม */
  accentIndex?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${i === accentIndex ? "text-accent" : ""}`}
            custom={i}
            variants={lineVariants}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ============================================================
   Marker — ตัวเลขกำกับหัวข้อย่อย
   ============================================================ */
export function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center text-accent" aria-hidden>
      {children}
    </span>
  );
}
