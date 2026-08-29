"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { curveMilestones } from "@/data/portfolio-data";

/** ตำแหน่งหมุดบนเส้นโค้ง (พิกัดใน viewBox 600x700) */
const nodePoints = [
  { x: 40, y: 620 },
  { x: 172, y: 545 },
  { x: 300, y: 440 },
  { x: 438, y: 355 },
  { x: 540, y: 190 },
] as const;

/**
 * เส้นโค้งการเติบโต — หมุดห้าจุดที่ hover ดูรายละเอียดได้
 * เส้นนี้คือแกนของเรื่องทั้งหมด ไม่ใช่แค่กราฟิกประกอบ
 */
export default function GrowthCurve() {
  const [hover, setHover] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div 
     aria-hidden="true"
         className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg
         className="pointer-events-none absolute right-[4%] top-[8%] z-0 h-[82%] w-[88%] md:w-[58%]"
         viewBox="0 0 600 700"
         fill="none"
         preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="เส้นแสดงเส้นทางการเติบโต หัวข้อ: START, EXPLORE, LEARN, BUILD, NEXT"
>
        {/* เส้นเงาด้านหลัง — ให้ความลึกแบบเขียนแบบ */}
        <path
          d="M40 660 C 200 660, 260 560, 380 520 S 520 430, 580 260"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.6"
        />

        {/* เส้นทางหลัก วาดตัวเองจากล่างซ้ายขึ้นขวา */}
        <motion.path
          d="M40 640 C 120 600, 150 590, 172 560 C 220 500, 250 470, 300 430 C 360 382, 400 370, 438 316 C 500 228, 520 210, 560 130"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength={1}
          initial={{ strokeDasharray: 1, strokeDashoffset: reduce ? 0 : 1 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />

        {/* หมุดแต่ละช่วง — กดเพื่อไปยังบทที่เกี่ยวข้อง */}
        {curveMilestones.map((m, i) => {
          const p = nodePoints[i];
          const isOn = hover === i;
          return (
            <g key={m.key} className="pointer-events-auto">
              {/* เส้นชี้ออกจากหมุดไปยังป้ายชื่อ */}
              <line
                x1={p.x}
                y1={p.y}
                x2={p.x + 26}
                y2={p.y - 20}
                stroke="var(--color-accent)"
                strokeWidth="0.75"
                opacity={isOn ? 0.75 : 0.3}
              />
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={isOn ? 7 : 4.5}
                fill={isOn ? "var(--color-accent)" : "var(--color-canvas)"}
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.9 + i * 0.28 }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              />
              <a
                href={`#${m.target}`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                aria-label={`${m.label} — ${m.note}`}
              >
                {/* พื้นที่กดที่ใหญ่พอสำหรับนิ้วและเมาส์ */}
                <circle cx={p.x} cy={p.y} r="22" fill="transparent" />
                <text
                  x={p.x + 32}
                  y={p.y - 22}
                  fill={isOn ? "var(--color-accent-ink)" : "var(--color-muted)"}
                  className="micro"
                  style={{ fontSize: "13px", letterSpacing: "0.18em" }}
                >
                  {m.label}
                </text>
              </a>
            </g>
          );
        })}
      </svg>

      {/* รายละเอียดของหมุดที่ชี้อยู่ — อยู่มุมล่างเพื่อไม่ทับตัวอักษรใหญ่ */}
      <div className="absolute bottom-4 right-4 hidden max-w-[16rem] md:block">
        <motion.div
          animate={{ opacity: hover === null ? 0 : 1, y: hover === null ? 6 : 0 }}
          transition={{ duration: 0.25 }}
          className="panel px-4 py-3"
          aria-live="polite"
        >
          <p className="micro mb-1 text-accent-ink">
            {hover === null ? "" : `0${hover + 1} / ${curveMilestones[hover].label}`}
          </p>
          <p className="text-xs leading-relaxed text-muted">
            {hover === null ? "" : curveMilestones[hover].note}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
