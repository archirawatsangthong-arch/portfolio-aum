// @ts-nocheck
"use client";
"use client";

import { projects, sectionMeta } from "@/data/portfolio-data";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { Reveal, Section, SplitLines } from "./primitives";

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      index="04"
      label="WHAT I'VE BUILT"
      tone="canvas"
      backdrop="right"
      caption={sectionMeta.work.caption}
      fig={sectionMeta.work.fig}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SplitLines
            lines={["ผมไม่ได้แค่สนใจ", "ผมเริ่มลงมือสร้าง"]}
            accentIndex={1}
            className="font-thai-display text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.15] tracking-tight text-ink"
          />
        </div>

        <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
          <p className="text-base leading-relaxed text-muted">
            ทุกโปรเจกต์ที่นี่เล่าครบห้าขั้น ตั้งแต่ปัญหาที่เจอ ไปจนถึงสิ่งที่ผมจะทำให้ดีขึ้นในครั้งหน้า
            เพราะผมคิดว่าสิ่งที่ได้เรียนรู้จากงานหนึ่ง สำคัญไม่แพ้ตัวงานเอง
          </p>
          <dl className="mt-6 flex gap-8 border-t border-line pt-4">
            <div>
              <dt className="micro text-muted/60">PROJECTS</dt>
              <dd className="font-display text-2xl font-semibold tracking-tight text-ink">
                {String(projects.length).padStart(2, "0")}
              </dd>
            </div>
            <div>
              <dt className="micro text-muted/60">LIVE</dt>
              <dd className="font-display text-2xl font-semibold tracking-tight text-accent-ink">
                {String(projects.filter((p) => p.url).length).padStart(2, "0")}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>

      {/* โปรเจกต์ชูโรง — ภาพใหญ่ */}
      {featured.map((project) => (
        <Reveal key={project.id} className="mt-20 md:mt-28">
          <FeaturedProject project={project} />
        </Reveal>
      ))}

      {/* โปรเจกต์อื่น ๆ — สลับซ้าย/ขวาเพื่อไม่ให้จังหวะซ้ำ */}
      {rest.length > 0 && (
        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="micro mb-10 flex items-center gap-3 text-muted/70">
              MORE WORK
              <span aria-hidden className="tick-rule h-px flex-1 opacity-40" />
              {String(rest.length).padStart(2, "0")} ITEMS
            </p>
          </Reveal>
          <div className="space-y-20 md:space-y-28">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={0.05}>
                <ProjectCard
                  project={project}
                  no={String(i + 2).padStart(2, "0")}
                  flip={i % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
