"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ============================================================
   BlueprintBackdrop — ชั้นฉากหลังของทุกบท
   วงกลมขนาดใหญ่ เส้นเรขาคณิต และพิกัด ทั้งหมดความจางต่ำมาก
   ============================================================ */
export function BlueprintBackdrop({
  variant = "left",
  showCircle = true,
}: {
  /** ตำแหน่งของวงกลมใหญ่ — สลับด้านเพื่อให้แต่ละบทไม่ซ้ำกัน */
  variant?: "left" | "right" | "center";
  showCircle?: boolean;
}) {
  const circlePos =
    variant === "left"
      ? "-left-[18rem] top-[8%]"
      : variant === "right"
        ? "-right-[20rem] top-[22%]"
        : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ตารางละเอียดซ้อนใต้ตารางหลัก */}
      <div className="grid-fine absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,#000,transparent_65%)]" />
      <div className="grid-veil absolute inset-0 opacity-[0.5]" />

      {/* วงกลมใหญ่แบบเส้น — ให้ความลึกโดยไม่เพิ่มน้ำหนักสี */}
      {showCircle && (
        <>
          <span
            className={`absolute ${circlePos} h-[38rem] w-[38rem] rounded-full border border-line-strong/45`}
          />
          <span
            className={`absolute ${circlePos} h-[26rem] w-[26rem] translate-x-[6rem] translate-y-[6rem] rounded-full border border-accent/[0.13]`}
          />
        </>
      )}

      {/* เส้นเรขาคณิตบาง ๆ พาดผ่านบท */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 700 L 1200 240"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeDasharray="3 9"
        />
        <path
          d="M0 120 L 520 120 L 620 20"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}

/* ============================================================
   Coordinates — ป้ายพิกัดมุมบท
   ============================================================ */
export function Coordinates({ value, className = "" }: { value: string; className?: string }) {
  return (
    <p className={`micro text-muted/55 ${className}`} aria-hidden>
      {value}
    </p>
  );
}

/* ============================================================
   ChapterSpine — เส้นสีส้มที่วิ่งต่อเนื่องทุกบท
   ทำให้ผู้อ่านรู้สึกว่ากำลังเดินอยู่บนเส้นทางเดียวกันทั้งเว็บ
   ============================================================ */
export function ChapterSpine({ node = true }: { node?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-2 hidden w-3 lg:block"
    >
      {/* เส้นแกนที่ค่อย ๆ วาดตัวเองเมื่อเลื่อนถึง */}
      <motion.span
        initial={{ scaleY: reduce ? 1 : 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-accent/45 via-accent/25 to-accent/45"
      />
      {node && (
        <span className="absolute left-1/2 top-[7.5rem] flex h-2 w-2 -translate-x-1/2 items-center justify-center">
          <span className="absolute h-full w-full rounded-full bg-accent/30 [animation:pulse-node_3.4s_ease-in-out_infinite]" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
    </div>
  );
}

/* ============================================================
   RunningHead — แถบข้อมูลบาง ๆ ที่ขอบบน/ขอบล่างของบท
   ============================================================ */
export function RunningHead({
  left,
  right,
  className = "",
}: {
  left: string;
  right: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 text-muted/60 ${className}`}
      aria-hidden
    >
      <span className="micro shrink-0">{left}</span>
      <span className="tick-rule h-px flex-1 opacity-40" />
      <span className="micro shrink-0">{right}</span>
    </div>
  );
}

/* ============================================================
   FigCaption — คำบรรยายใต้หัวบท แบบนิตยสาร
   ============================================================ */
export function FigCaption({ fig, children }: { fig: string; children: string }) {
  return (
    <p className="flex max-w-md gap-3 border-l border-line-strong pl-4 text-xs leading-relaxed text-muted">
      <span className="micro shrink-0 pt-0.5 text-accent-ink">{fig}</span>
      <span>{children}</span>
    </p>
  );
}
