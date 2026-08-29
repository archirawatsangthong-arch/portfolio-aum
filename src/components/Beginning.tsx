"use client";

import { motion, useReducedMotion } from "framer-motion";
import { beginningQuestions, profile, sectionMeta, siteCoordinates } from "@/data/portfolio-data";
import { Coordinates } from "./blueprint";
import { Reveal, Section, SplitLines } from "./primitives";

/** ภาพเดียวของบทนี้ — วางแบบภาพประกอบนิตยสาร พร้อม metadata กำกับ */
function EditorialPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* กรอบเส้นเยื้องด้านหลัง — รายละเอียดแบบเขียนแบบ */}
      <span
        aria-hidden
        className="absolute -bottom-3 -right-3 h-full w-full border border-accent/30"
      />

      <div className="relative overflow-hidden border border-line-strong bg-elevated">
        <div className="aspect-[4/5] w-full">
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={`รูปของ ${profile.name}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label="ยังไม่มีรูปโปรไฟล์ — วางไฟล์ไว้ที่ public/profile.jpg"
              className="flex h-full w-full items-center justify-center"
            >
              <span aria-hidden className="font-display text-6xl text-accent/30">
                {profile.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* เส้นเล็ง crosshair มุมภาพ */}
        <span aria-hidden className="absolute left-4 top-4 h-4 w-px bg-canvas/70" />
        <span aria-hidden className="absolute left-4 top-4 h-px w-4 bg-canvas/70" />
      </div>

      {/* metadata ของภาพ */}
      <figcaption className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-3">
        <p className="text-xs leading-relaxed text-muted">
          {profile.name} — จุดเริ่มต้นของคำถามทั้งหมดในบทนี้
        </p>
        <div className="shrink-0 text-right">
          <p className="micro text-muted/60">IMG 01</p>
          <Coordinates value={siteCoordinates} className="mt-1" />
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function Beginning() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="beginning"
      index="02"
      label="THE SPARK"
      tone="canvas"
      backdrop="right"
      caption={sectionMeta.beginning.caption}
      fig={sectionMeta.beginning.fig}
    >
      {/* หัวบท: ตัวอักษรใหญ่คู่กับภาพเดียว */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SplitLines
            lines={["ทุกอย่างเริ่มต้น", "จากความสงสัย"]}
            accentIndex={1}
            className="font-thai-display text-[clamp(2.25rem,6.5vw,5rem)] font-semibold leading-[1.1] tracking-tight"
          />
          <Reveal delay={0.15}>
            <p className="measure mt-8 text-base leading-relaxed text-muted">
              ผมไม่ได้เริ่มจากการรู้ว่าตัวเองอยากทำอะไร ผมเริ่มจากคำถามห้าข้อ
              ที่ค่อย ๆ พาผมเดินมาไกลกว่าที่คิด
            </p>
          </Reveal>

          {/* คำที่สะท้อนความสนใจ — เรียงเป็นดัชนีท้ายบทนำ */}
          <Reveal delay={0.25}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
              {profile.keywords.map((word, i) => (
                <li key={word} className="flex items-baseline gap-2">
                  <span className="micro text-accent-ink/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted">{word}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <EditorialPortrait />
        </div>
      </div>

      {/* เส้นเวลาของคำถาม — แต่ละข้อคือหมุดหนึ่งจุดบนเส้นเดียวกับ hero */}
      <div className="mt-20 md:mt-28 lg:pl-[8%]">
        <p className="micro mb-8 flex items-center gap-3 text-muted/70">
          FIVE QUESTIONS
          <span aria-hidden className="tick-rule h-px w-24 opacity-40" />
        </p>

        <ol className="relative">
          <motion.span
            aria-hidden
            initial={{ scaleY: reduce ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-accent/35"
          />

          {beginningQuestions.map((item, i) => (
            <li key={item.qEn} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
              <Reveal delay={i * 0.08}>
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent/50 bg-canvas"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                </span>

                <div className="mb-3 flex items-center gap-3">
                  <span className="micro text-accent-ink">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-line-strong" />
                  <span className="micro text-muted/60">I STARTED ASKING</span>
                </div>

                <h3 className="font-thai-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-[2.1rem]">
                  {item.q}
                </h3>
                <p className="mt-2 font-display text-sm italic text-accent-ink">{item.qEn}</p>
                <p className="measure-wide mt-4 text-[0.95rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
