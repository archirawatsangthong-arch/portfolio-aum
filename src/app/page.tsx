// @ts-nocheck
import CinematicIntro from "@/components/CinematicIntro";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Mindset from "@/components/Mindset";
import Skills from "@/components/Skills";
import DIIStatement from "@/components/DIIStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="portfolio-fluid relative min-h-screen bg-[#030712]">
      {/* 1. ไตเติลเปิดตัวสไตล์หนังฟอร์มยักษ์ */}
      <CinematicIntro />

      <main id="main" className="relative z-10">
        <Hero />
        <div className="flex w-full flex-col gap-32 px-6 py-28 sm:px-12 lg:px-20">
          <Projects />
          <Mindset />
          <Skills />
          <DIIStatement />
        </div>
      </main>

      <Footer />
    </div>
  );
}