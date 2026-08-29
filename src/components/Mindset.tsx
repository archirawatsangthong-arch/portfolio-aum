// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Flame, 
  X, 
  Calendar, 
  Building2, 
  Maximize2,
  Users,
  HeartHandshake,
  Image as ImageIcon
} from "lucide-react";

export default function Mindset() {
  const [filter, setFilter] = useState("all");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [currentImgSrc, setCurrentImgSrc] = useState("");
  const [attemptIndex, setAttemptIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedRecord(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const records = [
    // --- หมวดการแข่งขัน ---
    {
      id: "01",
      category: "comp",
      badge: "เหรียญทอง อันดับ 1",
      badgeClass: "text-amber-300 bg-amber-400/10 border-amber-400/25",
      title: "รองชนะเลิศอันดับ 1 ระดับเหรียญทอง อัจฉริยภาพทางวิทยาศาสตร์ ม.ปลาย",
      desc: "งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษา ครั้งที่ 70 ประจำปีการศึกษา 2565",
      fullDesc: "การแข่งขันวัดทักษะและกระบวนการคิดทางวิทยาศาสตร์ขั้นสูงแบบบูรณาการ ผ่านการคัดเลือกระดับเหรียญทอง อันดับที่ 1 ของเขตพื้นที่การศึกษา ม.4-ม.6",
      org: "สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาลำปาง ลำพูน",
      year: "2565",
      baseName: "cert-science-gold",
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      skills: ["Scientific Thinking", "Problem Solving", "Analytical Logic"],
    },
    {
      id: "02",
      category: "comp",
      badge: "รางวัลชนะเลิศ",
      badgeClass: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
      title: "รางวัลชนะเลิศ การแข่งขัน E-Sports (ROV) ม.ปลาย",
      desc: "งานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2565 • มหาวิทยาลัยแม่โจ้",
      fullDesc: "ตัวแทนทีมโรงเรียนเสริมงามวิทยาคม ชนะเลิศการแข่งขันกีฬาอิเล็กทรอนิกส์เชิงกลยุทธ์ ROV ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ",
      org: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
      year: "2565",
      baseName: "cert-esports",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      skills: ["Strategic Planning", "Real-time Communication", "Team Collaboration"],
    },
    {
      id: "03",
      category: "comp",
      badge: "รางวัลชมเชย ระดับภูมิภาค",
      badgeClass: "text-cyan-300 bg-cyan-400/10 border-cyan-400/25",
      title: "รางวัลชมเชย ตอบปัญหาทางวิทยาศาสตร์และวิทยาศาสตร์สุขภาพ",
      desc: "งานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2565 • มหาวิทยาลัยราชภัฏลำปาง",
      fullDesc: "การแข่งขันทดสอบความรู้เชิงลึกทางวิทยาศาสตร์และสุขภาพระดับมัธยมศึกษาตอนปลาย ภาคเหนือ",
      org: "คณะวิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง",
      year: "2565",
      baseName: "cert-science-lpru",
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      skills: ["Health Science", "General Science", "Fast Retrieval"],
    },
    {
      id: "04",
      category: "comp",
      badge: "รองชนะเลิศอันดับ 1",
      badgeClass: "text-amber-300 bg-amber-400/10 border-amber-400/25",
      title: "รองชนะเลิศอันดับ 1 ตอบปัญหาวิทยาศาสตร์ ม.ปลาย",
      desc: "กิจกรรมสัปดาห์วิทยาศาสตร์และเทคโนโลยี ประจำปีการศึกษา 2564",
      fullDesc: "การแข่งขันทดสอบความรู้และกระบวนการคิดทางวิทยาศาสตร์และเทคโนโลยี ระดับมัธยมศึกษาตอนปลาย",
      org: "โรงเรียนเสริมงามวิทยาคม จังหวัดลำปาง",
      year: "2564",
      baseName: "cert-science-school",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      skills: ["Scientific Knowledge", "Competitive Drive"],
    },
    {
      id: "05",
      category: "comp",
      badge: "เข้าร่วมระดับภูมิภาค",
      badgeClass: "text-slate-300 bg-slate-400/10 border-slate-400/25",
      title: "เข้าร่วมการแข่งขันตอบปัญหาทางวิทยาศาสตร์ ม.ปลาย",
      desc: "งานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2565 • มหาวิทยาลัยแม่โจ้",
      fullDesc: "ตัวแทนเข้าร่วมการแข่งขันตอบปัญหาทางวิทยาศาสตร์ระดับภูมิภาค จัดโดยสมาคมวิทยาศาสตร์แห่งประเทศไทยฯ และ ม.แม่โจ้",
      org: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
      year: "2565",
      baseName: "cert-science-mju",
      icon: <Award className="w-5 h-5 text-slate-300" />,
      skills: ["Applied Science", "Academic Participation"],
    },

    // --- หมวดผลการเรียน ---
    {
      id: "06",
      category: "academic",
      badge: "GPA 3.97 (อันดับ 2)",
      badgeClass: "text-sky-300 bg-sky-400/10 border-sky-400/25",
      title: "ผลการเรียนยอดเยี่ยมอันดับ 2 ม.6 แผนการเรียนวิทย์-คณิต",
      desc: "ภาคเรียนที่ 1 ปีการศึกษา 2565 ด้วยผลการเรียนเฉลี่ย 3.97",
      fullDesc: "รางวัลผู้มีผลการเรียนดีเด่นอันดับที่ 2 ระดับชั้นมัธยมศึกษาปีที่ 6 แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ โรงเรียนเสริมงามวิทยาคม",
      org: "โรงเรียนเสริมงามวิทยาคม จังหวัดลำปาง",
      year: "2565",
      baseName: "cert-gpa-m6",
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
      skills: ["Academic Excellence", "STEM Competence", "Self-Discipline"],
    },
    {
      id: "07",
      category: "academic",
      badge: "GPA 3.95 (อันดับ 2)",
      badgeClass: "text-sky-300 bg-sky-400/10 border-sky-400/25",
      title: "ผลการเรียนยอดเยี่ยมอันดับ 2 ม.5 แผนการเรียนวิทย์-คณิต",
      desc: "ภาคเรียนที่ 2 ปีการศึกษา 2564 ด้วยผลการเรียนเฉลี่ย 3.95",
      fullDesc: "รางวัลผู้มีผลการเรียนดีเด่นอันดับที่ 2 ระดับชั้นมัธยมศึกษาปีที่ 5 แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ โรงเรียนเสริมงามวิทยาคม",
      org: "โรงเรียนเสริมงามวิทยาคม จังหวัดลำปาง",
      year: "2564",
      baseName: "cert-gpa-m5",
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
      skills: ["Consistency", "Mathematics", "Science Foundations"],
    },

    // --- หมวดกิจกรรม & จิตอาสา ---
    {
      id: "08",
      category: "activities",
      badge: "ตัวแทนนักเรียน",
      badgeClass: "text-rose-300 bg-rose-400/10 border-rose-400/25",
      title: "ตัวแทนห้องเรียนใน พิธีวันไหว้ครู ประจำปี 2565",
      desc: "ณ หอประชุมเมธีธาราดล โรงเรียนเสริมงามวิทยาคม",
      fullDesc: "ได้รับเลือกเป็นตัวแทนนักเรียนระดับชั้นมัธยมศึกษาในการทำหน้าที่ถือพานและนำกล่าวแสดงความกตัญญูกตเวทิตาต่อคณะครูอาจารย์ในพิธีไหว้ครูประจำปีการศึกษา 2565",
      org: "โรงเรียนเสริมงามวิทยาคม จังหวัดลำปาง",
      year: "2565",
      baseName: "act-waikru",
      icon: <Users className="w-5 h-5 text-rose-400" />,
      skills: ["Respect & Tradition", "Public Representation", "Social Etiquette"],
    },
    {
      id: "09",
      category: "activities",
      badge: "จิตอาสาพัฒนาชุมชน",
      badgeClass: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
      title: "โครงการแก้ไขปัญหาภัยแล้ง: กิจกรรมการสร้างฝายชะลอน้ำ",
      desc: "ณ บ้านดอนงาม ตำบลทุ่งงาม อำเภอเสริมงาม จังหวัดลำปาง",
      fullDesc: "เข้าร่วมโครงการจิตอาสาฟื้นฟูระบบนิเวศและอนุรักษ์แหล่งน้ำ โดยร่วมกับชุมชนและโรงเรียนสร้างฝายชะลอน้ำเพื่อกักเก็บน้ำและชะลอการไหลของน้ำในฤดูแล้ง",
      org: "อำเภอเสริมงาม ร่วมกับ โรงเรียนเสริมงามวิทยาคม",
      year: "2564",
      baseName: "act-dam",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      skills: ["Environmental Care", "Community Volunteer", "Teamwork"],
    },
    {
      id: "10",
      category: "activities",
      badge: "จิตอาสาอนุรักษ์ดินและน้ำ",
      badgeClass: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
      title: "โครงการแก้ไขปัญหาภัยแล้ง: กิจกรรมการปลูกหญ้าแฝก",
      desc: "ณ บ้านดอนงาม ตำบลทุ่งงาม อำเภอเสริมงาม จังหวัดลำปาง",
      fullDesc: "ร่วมกิจกรรมปลูกหญ้าแฝกเพื่อป้องกันการพังทลายของหน้าดิน รักษาความชุ่มชื้นในดิน และฟื้นฟูสภาพแวดล้อมตามแนวพระราชดำริ",
      org: "โครงการแก้ปัญหาภัยแล้ง อำเภอเสริมงาม",
      year: "2564",
      baseName: "act-vetiver",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      skills: ["Soil Conservation", "Practical Volunteering", "Community Service"],
    },
    {
      id: "11",
      category: "activities",
      badge: "คณะกรรมการจัดงาน",
      badgeClass: "text-purple-300 bg-purple-400/10 border-purple-400/25",
      title: "คณะกรรมการจัดงานเกียรติยศ ชมพู-ดำ (งานปัจฉิมนิเทศ)",
      desc: "ณ หอประชุมเมธีธาราดล โรงเรียนเสริมงามวิทยาคม",
      fullDesc: "ปฏิบัติหน้าที่คณะกรรมการดำเนินงานจัดพิธีปัจฉิมนิเทศและขบวนธงเกียรติยศ ชมพู-ดำ ประจำปีการศึกษา 2563 ดูแลลำดับพิธีการและการประสานงานภายในงาน",
      org: "โรงเรียนเสริมงามวิทยาคม จังหวัดลำปาง",
      year: "2563",
      baseName: "act-orientation",
      icon: <Users className="w-5 h-5 text-purple-400" />,
      skills: ["Event Organization", "Ceremony Coordination", "Leadership"],
    },
  ];

  const filteredRecords = filter === "all" ? records : records.filter((r) => r.category === filter);

  // ระบบดึงนามสกุลไฟล์อัตโนมัติ
  const getCandidateSources = (baseName: string) => [
    `/${baseName}.jpg.png`,
    `/${baseName}.png`,
    `/${baseName}.jpg`,
    `/${baseName}.jpeg`,
    `/certs/${baseName}.jpg.png`,
    `/certs/${baseName}.png`,
    `/certs/${baseName}.jpg`,
    `/certs/${baseName}.jpeg`,
  ];

  const openModal = (item) => {
    const candidates = getCandidateSources(item.baseName);
    setAttemptIndex(0);
    setCurrentImgSrc(candidates[0]);
    setImgError(false);
    setSelectedRecord(item);
  };

  const handleImageError = () => {
    if (!selectedRecord) return;
    const candidates = getCandidateSources(selectedRecord.baseName);
    const nextIndex = attemptIndex + 1;
    if (nextIndex < candidates.length) {
      setAttemptIndex(nextIndex);
      setCurrentImgSrc(candidates[nextIndex]);
    } else {
      setImgError(true);
    }
  };

  return (
    <section id="mindset" className="relative w-full py-8 font-sans">
      <div className="space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <Flame className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                02 // TRACK RECORD, AWARDS &amp; ACTIVITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              เกียรติประวัติ ผลงาน และกิจกรรม 
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "ทั้งหมด" },
              { id: "comp", label: "การแข่งขันวิชาการ & E-Sports" },
              { id: "academic", label: "ผลการเรียนยอดเยี่ยม" },
              { id: "activities", label: "กิจกรรม & จิตอาสา" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all ${
                  filter === tab.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredRecords.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => openModal(item)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer p-6 rounded-3xl border border-white/[0.08] bg-[#070b14]/70 hover:border-cyan-500/50 hover:bg-white/[0.03] transition-all flex flex-col justify-between space-y-4 shadow-lg hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    ปี {item.year}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {item.title} 
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 pl-7 leading-relaxed font-sans line-clamp-2">
                    {item.desc} 
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-slate-400 font-mono text-[11px]">
                <span className="flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" /> คลิกดูหลักฐานภาพ
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedRecord && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRecord(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.15] bg-[#090e1a] p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="space-y-2">
                  <span className={`inline-block font-mono text-xs font-bold px-3 py-1 rounded-full border ${selectedRecord.badgeClass}`}>
                    {selectedRecord.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {selectedRecord.title} 
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedRecord(null)}
                  className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ภาพเกียรติบัตร / รูปกิจกรรม */}
              <div className="relative w-full min-h-[240px] rounded-2xl border border-white/10 bg-slate-950/80 overflow-hidden flex items-center justify-center">
                {!imgError ? (
                  <img
                    key={currentImgSrc}
                    src={currentImgSrc}
                    alt={selectedRecord.title}
                    className="w-full max-h-[440px] object-contain mx-auto p-2"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="p-8 text-center space-y-2">
                    <ImageIcon className="w-10 h-10 text-slate-500 mx-auto" />
                    <p className="font-mono text-xs text-rose-400 font-semibold">
                      ไม่สามารถโหลดรูปภาพได้
                    </p>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      กรุณาตรวจดูว่าบันทึกรูปชื่อ <strong>{selectedRecord.baseName}</strong> ไว้ในโฟลเดอร์ public หรือไม่
                    </p>
                  </div>
                )}
              </div>

              {/* ข้อมูลองค์กรและปี */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 font-mono">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{selectedRecord.org} </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>ปีการศึกษา {selectedRecord.year} </span>
                </div>
              </div>

              {/* รายละเอียด */}
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  OVERVIEW &amp; CONTEXT
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans bg-white/[0.02] p-4 rounded-2xl border border-white/[0.05]">
                  {selectedRecord.fullDesc} 
                </p>
              </div>

              {/* ทักษะ */}
              <div className="space-y-2.5">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  KEY COMPETENCIES
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedRecord.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ปุ่มปิด */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-mono text-xs transition-all"
                >
                  ปิดหน้าต่าง (ESC)
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}