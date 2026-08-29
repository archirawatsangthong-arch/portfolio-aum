"use client";

import { motion, useReducedMotion } from "framer-motion";
import { future, profile, sectionMeta } from "@/data/portfolio-data";
import { Reveal, Section, SplitLines } from "./primitives";

/** ขั้นหนึ่งบนโรดแมป — หมุดบนเส้นแนวนอนบนจอกว้าง, แนวตั้งบนมือถือ */
function RoadmapStep({
  step,
  index,
  total,
}: {
  step: (typeof future.roadmap)[number];
  index: number;
  total: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative pl-10 md:pl-0 md:pt-12"
    >
      {/* หมุดบนเส้น */}
      <span
        aria-hidden
        className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-canvas transition-colors duration-300 group-hover:border-accent md:top-[-8px]"
      >
        <span className="h-[6px] w-[6px] rounded-full bg-accent" />
      </span>

      <p className="micro mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-accent-ink">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        <span aria-hidden className="h-px w-6 bg-accent/40" />
        <span className="text-muted/70">{step.time}</span>
      </p>

      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink md:text-xl">
        {step.label}
      </h3>
      <p className="font-thai-display mt-1 text-xs text-muted">{step.labelTh}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{step.body}</p>
    </motion.li>
  );
}

export default function FutureGoal() {
  const reduce = useReducedMotion();
  const total = future.roadmap.length;

  return (
    <Section
      id="future"
      index="07"
      label="WHERE I'M GOING"
      tone="canvas"
      backdrop="center"
      caption={sectionMeta.future.caption}
      fig={sectionMeta.future.fig}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SplitLines
            lines={["ผมยังไม่ถึงที่หมาย", "แต่ผมรู้ว่ากำลังเดินไปทางไหน"]}
            accentIndex={1}
            className="font-thai-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.15] tracking-tight text-ink"
          />
        </div>

        {/* เป้าหมายหลัก — ข้อมูลสำคัญที่กรรมการมองหา */}
        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
          <div className="border-l border-accent pl-6">
            <p className="micro mb-3 text-accent-ink">PRIMARY GOAL</p>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">
              {future.primaryGoal.title}
            </p>
            <p className="font-thai-display mt-1 text-sm text-muted">
              {future.primaryGoal.titleTh}
            </p>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
              {future.primaryGoal.why}
            </p>
          </div>

          <div className="mt-8">
            <p className="micro mb-3 text-muted/60">RELATED PATHS</p>
            <ul className="border-t border-line">
              {future.relatedPaths.map((path) => (
                <li key={path.title} className="border-b border-line py-3">
                  <p className="font-display text-sm font-medium tracking-tight text-ink">
                    {path.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{path.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      {/* โรดแมป — เส้นแนวนอนบนจอใหญ่ ต่อเนื่องจากเส้นสีส้มของ path */}
      <div className="mt-20 md:mt-28">
        <p className="micro mb-8 flex items-center gap-3 text-muted/70">
          ROADMAP
          <span aria-hidden className="tick-rule h-px flex-1 opacity-40" />
          01 — {String(total).padStart(2, "0")}
        </p>

        <div className="relative">
          <motion.span
            aria-hidden
            initial={{ scaleY: reduce ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-accent/35 md:hidden"
          />
          <motion.span
            aria-hidden
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 hidden h-px w-full origin-left bg-accent/35 md:block"
          />

          <ol className="grid gap-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-5">
            {future.roadmap.map((step, i) => (
              <RoadmapStep key={step.key} step={step} index={i} total={total} />
            ))}
          </ol>
        </div>
      </div>

      {/* ปลายทาง — ตัวอักษรใหญ่ปิดท้ายบท */}
      <Reveal>
        <div className="mt-24 border-t border-line-strong pt-10 md:mt-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="micro mb-5 text-muted/70">DESTINATION</p>
              <SplitLines
                lines={future.headline}
                accentIndex={future.headline.length - 1}
                className="display-tight text-[clamp(1.6rem,4.2vw,3.25rem)] text-ink"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="micro mb-3 text-muted/60">BASED IN</p>
              <p className="text-sm leading-relaxed text-muted">{profile.meta.join(" · ")}</p>
              <p className="micro mt-6 border-t border-line pt-4 text-muted/55">
                STATUS: STILL BECOMING
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
