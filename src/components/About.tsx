"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, sectionMeta, traits } from "@/data/portfolio-data";
import { MetaRow, Reveal, Section, SplitLines } from "./primitives";

/** นิสัยหนึ่งข้อ — วางเป็นแถวเต็มความกว้าง ไม่ใช่การ์ดสามใบเท่ากัน */
function TraitCard({
  trait,
  index,
  focused,
  dimmed,
  onFocus,
  onBlur,
}: {
  trait: (typeof traits)[number];
  index: number;
  focused: boolean;
  dimmed: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: dimmed ? 0.5 : 1, scale: focused && !reduce ? 1.035 : 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.28, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
      onFocusCapture={onFocus}
      onBlurCapture={onBlur}
      tabIndex={0}
      className={`group flex min-w-0 flex-col gap-y-4 overflow-hidden border bg-canvas p-6 outline-none transition-[border-color,box-shadow] duration-200 sm:p-8 ${
        focused
          ? "border-accent/50 shadow-[0_0_0_1px_rgba(234,88,12,0.18)]"
          : "border-line"
      }`}
    >
      <div>
        <p className="micro mb-4 flex items-center gap-3 text-accent-ink">
          {trait.index}
          <span
            aria-hidden
            className="h-px w-6 bg-accent/50 transition-all duration-300 group-hover:w-12"
          />
        </p>
        <h3 className="display-tight text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink">
          {trait.title}
        </h3>
        <p className="font-thai-display mt-2 text-sm text-muted">{trait.titleTh}</p>
      </div>

      <p className="min-w-0 overflow-hidden text-[0.95rem] leading-relaxed text-muted [overflow-wrap:anywhere]">
        {trait.body}
      </p>

      <div className="mt-auto pt-2">
        <div className="border-l border-accent/40 pl-5">
          <p className="micro mb-2 text-accent-ink">IN PRACTICE</p>
          <p className="text-sm leading-relaxed text-ink/85">{trait.proof}</p>
        </div>
      </div>
    </motion.li>
  );
}

function TerminalCard() {
  const message = "> Initializing AUM_Profile.exe... [OK]";
  const [length, setLength] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      return;
    }

    const timeout = window.setTimeout(
      () => setLength((current) => (current >= message.length ? 0 : current + 1)),
      length >= message.length ? 1600 : 48,
    );
    return () => window.clearTimeout(timeout);
  }, [length, message.length, reduce]);

  const visibleLength = reduce ? message.length : length;

  return (
    <li className="flex min-h-44 min-w-0 flex-col justify-between overflow-hidden bg-black p-6 text-green-500 sm:p-8 md:col-span-2 lg:col-span-3">
      <div className="flex items-center justify-between gap-4 font-mono text-[0.65rem] uppercase text-green-500/60">
        <span>AUM_OS / PROFILE</span>
        <span>LIVE</span>
      </div>
      <p className="mt-10 min-h-12 max-w-full font-mono text-sm leading-relaxed [overflow-wrap:anywhere] sm:text-base">
        {message.slice(0, visibleLength)}
        <span aria-hidden className="ml-1 inline-block h-[1em] w-2 animate-pulse bg-green-500 align-middle" />
      </p>
    </li>
  );
}

export default function About() {
  const [focusedTrait, setFocusedTrait] = useState<number | null>(null);

  return (
    <Section
      id="about"
      index="01"
      label="WHO I AM"
      backdrop="left"
      caption={sectionMeta.about.caption}
      fig={sectionMeta.about.fig}
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SplitLines
            lines={["ไม่ได้รู้ทุกอย่าง", "แต่ไม่เคยหยุดที่จะเรียนรู้"]}
            accentIndex={1}
            className="font-thai-display text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.15] tracking-tight text-ink"
          />

          <Reveal delay={0.15}>
            <p className="measure-wide mt-8 text-base leading-relaxed text-muted sm:text-lg">
              {profile.positioning}
            </p>
          </Reveal>
        </div>

        {/* ตารางข้อมูลแทนการ์ด — อ่านเหมือน spec sheet */}
        <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
          <p className="micro mb-4 flex items-center gap-3 text-muted/70">
            PROFILE DATA
            <span aria-hidden className="tick-rule h-px flex-1 opacity-40" />
          </p>
          <dl>
            <MetaRow label="Primary Goal" value={profile.careerGoal} />
            <MetaRow label="Related" value={profile.careerGoalSecondary.join(" · ")} />
            {profile.meta.map((m, i) => (
              <MetaRow key={m} label={["School", "Program", "Based In"][i] ?? "Meta"} value={m} />
            ))}
          </dl>
          <p className="micro mt-4 border-t border-line pt-3 text-muted/55">
            UPDATED 08 / 2026
          </p>
        </Reveal>
      </div>

      <ul className="mt-20 grid auto-rows-fr gap-4 md:mt-28 md:grid-cols-2 lg:grid-cols-3">
        {traits.map((trait, i) => (
          <TraitCard
            key={trait.title}
            trait={trait}
            index={i}
            focused={focusedTrait === i}
            dimmed={focusedTrait !== null && focusedTrait !== i}
            onFocus={() => setFocusedTrait(i)}
            onBlur={() => setFocusedTrait(null)}
          />
        ))}
        <TerminalCard />
      </ul>
    </Section>
  );
}
