"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { journeyStages, sectionMeta } from "@/data/portfolio-data";
import { Reveal, Section, SplitLines } from "./primitives";

/**
 * เส้นทางแนวนอนที่หมุดวางอยู่บนเส้นสีส้มจริง ๆ
 * ต่อเนื่องจากเส้นโค้งในหน้าแรก ไม่ใช่แถบแท็บธรรมดา
 */
function PathRail({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  const reduce = useReducedMotion();
  const total = journeyStages.length;

  return (
    <div className="relative">
      {/* เส้นทางโค้งเบา ๆ ที่หมุดเกาะอยู่ */}
      <svg
        aria-hidden
        viewBox="0 0 1000 90"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-[90px] w-full"
        fill="none"
      >
        <path
          d="M0 74 C 200 74, 260 34, 500 30 S 820 22, 1000 6"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <motion.path
          d="M0 74 C 200 74, 260 34, 500 30 S 820 22, 1000 6"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength={1}
          initial={{ strokeDasharray: 1, strokeDashoffset: reduce ? 0 : 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      <div
        role="tablist"
        aria-label="Journey stages"
        className="relative grid grid-cols-2 gap-x-4 gap-y-8 pt-[86px] sm:grid-cols-3 md:grid-cols-5"
      >
        {journeyStages.map((s, i) => {
          const isActive = active === i;
          const isPast = i < active;
          /** ยกหมุดให้ตรงกับความชันของเส้น */
          const lift = [0, 26, 38, 46, 60][i] ?? 0;

          return (
            <button
              key={s.key}
              role="tab"
              id={`stage-tab-${s.key}`}
              aria-selected={isActive}
              aria-controls={`stage-panel-${s.key}`}
              onClick={() => onSelect(i)}
              onMouseEnter={() => onSelect(i)}
              className="group relative flex flex-col items-start text-left"
              style={{ marginTop: `-${lift}px` }}
            >
              <span
                aria-hidden
                className={`mb-4 flex h-4 w-4 items-center justify-center rounded-full border bg-canvas transition-all duration-300 ${
                  isActive
                    ? "border-accent scale-110"
                    : isPast
                      ? "border-accent/60"
                      : "border-line-strong"
                }`}
              >
                <span
                  className={`h-[6px] w-[6px] rounded-full transition-colors duration-300 ${
                    isActive || isPast ? "bg-accent" : "bg-line-strong"
                  }`}
                />
              </span>

              <span
                className={`micro mb-1.5 transition-colors duration-300 ${
                  isActive ? "text-accent-ink" : "text-muted/70"
                }`}
              >
                {String(i + 1).padStart(2, "0")} / {s.year}
              </span>
              <span
                className={`font-display text-base font-semibold tracking-tight transition-colors duration-300 md:text-lg ${
                  isActive ? "text-ink" : "text-ink/45 group-hover:text-ink/75"
                }`}
              >
                {s.label}
              </span>
              <span className="font-thai-display mt-0.5 text-xs text-muted">{s.labelTh}</span>

              {/* เลข index ของทั้งเซ็ต */}
              <span className="micro mt-2 text-muted/40" aria-hidden>
                {String(i + 1).padStart(2, "0")} — {total}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Journey() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const stage = journeyStages[active];

  return (
    <Section
      id="journey"
      index="03"
      label="MY JOURNEY"
      tone="elevated"
      backdrop="center"
      caption={sectionMeta.journey.caption}
      fig={sectionMeta.journey.fig}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SplitLines
            lines={["จากความสนใจ", "สู่การลงมือทำ"]}
            className="font-thai-display text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.15] tracking-tight"
          />
        </div>
        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-8">
          <p className="text-base leading-relaxed text-muted">
            การเติบโตไม่ได้เกิดขึ้นเป็นเส้นตรง แต่มันมีลำดับของมัน
            กดแต่ละหมุดบนเส้นทางเพื่อดูว่าเกิดอะไรขึ้นในช่วงนั้น
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-20 md:mt-28">
          <PathRail active={active} onSelect={setActive} />
        </div>
      </Reveal>

      {/* รายละเอียดของขั้นที่เลือก */}
      <div className="mt-14 min-h-[22rem] border-t border-line-strong pt-10 md:min-h-[19rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.key}
            id={`stage-panel-${stage.key}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${stage.key}`}
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <p className="micro mb-4 flex items-center gap-3 text-accent-ink">
                STAGE {String(active + 1).padStart(2, "0")}
                <span aria-hidden className="h-px w-8 bg-accent/50" />
                {stage.year}
              </p>
              <h3 className="display-tight text-4xl sm:text-5xl md:text-6xl">{stage.label}</h3>
              <p className="font-thai-display measure mt-5 text-base leading-relaxed text-ink/85">
                {stage.summary}
              </p>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7">
              {stage.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: reduce ? 0 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex gap-4 border-t border-line py-4 text-[0.95rem] leading-relaxed text-muted last:border-b"
                >
                  <span className="micro shrink-0 pt-1 text-accent-ink/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
