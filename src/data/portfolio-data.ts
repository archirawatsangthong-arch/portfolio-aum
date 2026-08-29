/**
 * ============================================================
 *  PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  ทุกข้อความบนเว็บไซต์อยู่ในไฟล์นี้ที่เดียว
 *  แก้ไขข้อความที่นี่ ไม่ต้องแตะไฟล์ component
 *
 *  ค้นหาคำว่า  EDIT THIS  เพื่อดูจุดที่ต้องใส่ข้อมูลจริง
 *  ค้นหาวงเล็บ [YOUR ...] เพื่อดู placeholder ที่ต้องแทนที่
 * ============================================================
 */

/* ------------------------------------------------------------
 * 01 — PROFILE / ตัวตน
 * EDIT THIS: ใส่ชื่อจริง เป้าหมายอาชีพ และรูปของคุณ
 * ---------------------------------------------------------- */
export const profile = {
  greeting: "HELLO, I'M",
  /** EDIT THIS: ชื่อที่จะแสดงตัวใหญ่ในหน้าแรก */
  name: "Aum",
  /** EDIT THIS: ชื่อภาษาไทย */
  nameTh: "อั้ม",
  /** EDIT THIS: เป้าหมายอาชีพหลัก 1 อย่าง — ต้องชัดเจน อย่าใส่หลายอย่าง */
  careerGoal: "Software Developer",
  /** เป้าหมายรองที่เกี่ยวข้อง — ไม่เกิน 2 อย่าง */
  careerGoalSecondary: ["Data Analyst", "Digital Project Manager"],
  /** ประโยคเดียวที่อธิบายว่าคุณกำลังจะไปทางไหน */
  positioning:
    "นักเรียนสายวิศวกรรมที่กำลังข้ามมาทางซอฟต์แวร์ การวิเคราะห์ข้อมูล และการบริหารโปรเจกต์ดิจิทัล เพราะอยากสร้างสิ่งที่คนได้ใช้จริง",
  heroLines: ["STILL", "BECOMING."],
  tagline: "A journey of curiosity, creation, and continuous learning.",
  /** 4 บรรทัดใต้หัวเรื่องหน้าแรก */
  heroSubTh: [
    "กำลังเรียนรู้",
    "กำลังทดลอง",
    "และกำลังเติบโต",
    "เพื่อก้าวไปสู่อนาคตในโลกดิจิทัล",
  ],
  /** EDIT THIS: วางรูปไว้ที่ public/profile.jpg แล้วเปลี่ยนเป็น "/profile.jpg" */
  photo: "/profile.svg",
  /** EDIT THIS: โรงเรียน / แผนการเรียน / จังหวัด */
  meta: ["[YOUR SCHOOL]", "สายวิศวกรรม", "[จังหวัด], Thailand"],
  /** คำที่ลอยอยู่ในหน้าแรก — สะท้อนความสนใจของคุณ */
  keywords: [
    "Software",
    "Data Analysis",
    "Web Development",
    "Digital Project",
    "PC Hardware",
    "E-sports",
    "Problem Solving",
    "UX",
  ],
  cta: "Explore My Journey",
} as const;

/* Compact homepage model. Keep presentation components free of copy. */
export const portfolioNav = [
  { id: "mindset", label: "MINDSET" },
  { id: "projects", label: "WORK" },
  { id: "skills", label: "PROGRESSION" },
  { id: "contact", label: "CONTACT" },
] as const;

export const heroIdentity = {
  discipline: "WEB DEVELOPMENT → DIGITAL SOLUTIONS",
  status: "LOGIC TO CODE // 2026",
  intro: "ผมอั้ม Digital Solution Builder และ Web Developer ที่ใช้การคิดเชิงระบบ การเข้าใจผู้ใช้ และการลงมือทำอย่างรวดเร็วเพื่อสร้างผลงานที่แก้โจทย์จริง",
  labels: ["Mining Eng to Software Dev", "Community Tech Builder", "DII Candidate"],
  footer: "ก้าวต่อไปของผมคือการผสานวิธีคิดแบบวิศวกรรม ซอฟต์แวร์ และข้อมูล เพื่อสร้างเทคโนโลยีที่ตอบโจทย์ผู้คนและชุมชน",
} as const;

export const mindsetCards = [
  { title: "Curious", thai: "เริ่มจากคำถาม", body: "ผมชอบแกะระบบให้เห็นเหตุผลเบื้องหลัง ตั้งแต่ frame time ของจอ 240Hz ไปจนถึงโครงสร้างของผลิตภัณฑ์ดิจิทัล" },
  { title: "Open to learn", thai: "เรียนรู้ข้ามศาสตร์", body: "พื้นฐานวิศวกรรมทำให้ผมไม่กลัวเรื่องที่ยังไม่รู้ ผมเรียนจากเอกสาร ทดลอง และใช้ feedback เพื่อปรับงานรอบถัดไป" },
  { title: "Growth mindset", thai: "วัดผลแล้วพัฒนาต่อ", body: "ผมมองข้อผิดพลาดเป็นข้อมูลหนึ่งชุด แยกปัญหา วัดผล และปรับปรุงจนสิ่งที่สร้างใช้งานได้ดีขึ้นจริง" },
] as const;

export const refreshQuestion = "Why 240Hz feels different from 60Hz → How optimization and latency define digital experiences.";

export const projectShowcases = [
  { title: "Virtual Library — อ่านเปลี่ยนชีวิต", role: "Web Developer & Designer", year: "2026", summary: "เว็บไซต์ห้องสมุดเสมือนที่ออกแบบให้การค้นพบหนังสือเป็นประสบการณ์ที่เข้าถึงง่าย ผมดูแลตั้งแต่แนวคิด โครงสร้างข้อมูล ส่วนติดต่อ ไปจนถึงการ deploy ให้ใช้งานได้จริง", tools: ["HTML", "CSS", "JavaScript", "Vercel"], url: "https://libary-thc2026.vercel.app/" },
  { title: "BDI Regional AI Hackathon", role: "Data & Environmental Challenge", year: "2026", summary: "เข้าร่วมโจทย์ Big Data Institute เพื่อสำรวจปัญหาสิ่งแวดล้อมของเชียงใหม่ ใช้ข้อมูลและแบบจำลองทางสถิติเพื่อเปลี่ยนปัญหาระดับพื้นที่ให้เป็นสมมติฐานที่ทดสอบและสื่อสารได้", tools: ["Python", "R", "Statistics", "Data Modeling"], url: "" },
] as const;

export const progression = [
  { label: "Now", note: "ฐานที่กำลังใช้สร้างและทดลองงานจริง", items: ["Web foundations: HTML, CSS, JavaScript", "Data exploration with Python and R", "Logical problem decomposition"] },
  { label: "Building", note: "ความสามารถที่กำลังต่อยอดผ่านโปรเจกต์", items: ["Responsive interfaces with Next.js and Tailwind CSS", "Deploying and iterating with Git and Vercel", "Connecting user needs to measurable outcomes"] },
  { label: "Next in DII", note: "เป้าหมายการเรียนรู้ที่ต้องการเร่งให้ลึกขึ้นใน DII", items: ["Full-stack software architecture", "Applied analytics and responsible AI", "Digital product strategy for real communities"] },
] as const;

export const toolTicker = ["Python", "R", "HTML5", "Tailwind CSS", "JavaScript", "Vercel", "Git"] as const;

export const diiPortfolio = {
  nav: [
    { id: "mindset", label: "Mindset" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Readiness" },
  ],
  hero: {
    name: "AUM ACHIRAWAT",
    badge: "APPLYING FOR DIGITAL INDUSTRY INTEGRATION (DII) 2026",
    title: ["ENGINEERING LOGIC.", "DIGITAL INTEGRATION."],
    statement: "Digital Solution Builder และ Web Developer ที่ผสานการคิดเชิงระบบเข้ากับ Web Development และ Data เพื่อสร้างผลลัพธ์ที่จับต้องได้จากโจทย์จริง",
    profile: ["Digital Solution Builder", "Web + Data", "DII Candidate 2026"],
    portrait: "/aum-hero-cutout.png",
  },
  mindset: [
    { title: "Logical Architecture", thai: "การคิดเชิงระบบ", body: "วางโครงสร้างระบบและการเขียนโค้ดอย่างเป็นเหตุเป็นผล เพื่อให้แอปพลิเคชันทำงานได้เสถียรและต่อยอดได้ง่าย" },
    { title: "User Experience & Optimization", thai: "ประสบการณ์ที่รวดเร็วและลื่นไหล", body: "ให้ความสำคัญกับความเร็ว Latency และความลื่นไหลของการใช้งาน เพื่อให้ผู้ใช้ได้รับประสบการณ์ที่ดีที่สุด" },
    { title: "Demand-Driven Mindset", thai: "สร้างจากโจทย์จริง", body: "มุ่งเน้นการสร้างผลงานจากโจทย์จริงของผู้ใช้งาน ไม่ใช่เพียงแค่การเขียนโค้ดตามทฤษฎี" },
  ],
  projects: [
    { number: "01", title: "Virtual Library Platform", thai: "โครงการ ‘อ่านเปลี่ยนชีวิต’ (สกร.)", tag: "Frontend Developer & UI Designer", description: "ระบบห้องสมุดดิจิทัลเพื่อแก้ปัญหาการเข้าถึงแหล่งเรียนรู้ในพื้นที่อำเภอทุ่งหัวช้าง ออกแบบ UI เพื่อลดความซับซ้อนและให้ผู้ใช้ทุกช่วงวัยเข้าถึงเนื้อหาได้ง่าย", tools: ["HTML5", "CSS3", "JavaScript", "Tailwind", "Vercel"], url: "https://libary-thc2026.vercel.app/" },
    { number: "02", title: "Regional Environmental Data Exploration", thai: "BDI Hackathon", tag: "Data Exploration / Industry Workshop", description: "เข้าร่วมเวิร์กช็อปวิเคราะห์ชุดข้อมูลปัญหาสิ่งแวดล้อมเชียงใหม่ด้วย Python และสถิติ", tools: ["Python", "R", "Statistics", "Environmental Data"], url: null },
  ],
  skills: [
    { title: "Foundations", thai: "พื้นฐานที่ลงมือทำจริง", items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vercel", "Git"] },
    { title: "Analytical Tools", thai: "เครื่องมือการวิเคราะห์", items: ["Python", "R — Statistical Modeling", "Data Visualization"] },
    { title: "DII Trajectory", thai: "เป้าหมายการต่อยอดในหลักสูตร", items: ["Big Data Systems", "Full-Stack Architecture", "Industry Project Collaboration"] },
  ],
  whyDii: {
    title: "Why DII?",
    body: "DII คือคำตอบที่ตรงกับเป้าหมายที่สุด เพราะผมต้องการเรียนรู้ผ่านการปฏิบัติจริงร่วมกับภาคธุรกิจ (Outcome-based) เพื่อเปลี่ยนทักษะพื้นฐานที่มี ให้กลายเป็นความเชี่ยวชาญระดับมืออาชีพ",
    pillars: ["Demand-driven Learning", "Industry Collaboration", "Measurable Outcomes"],
  },
} as const;

export const learningStages = [
  {
    stage: "Stage 1",
    title: "Working Fundamentals",
    thai: "พื้นฐานที่ลงมือทำจริงแล้ว",
    status: "Practical foundation",
    skills: [
      { name: "HTML5 & CSS3", level: "Fundamentals / Practical Application", detail: "โครงสร้างเว็บพื้นฐานและการจัดสไตล์" },
      { name: "JavaScript (ES6+)", level: "Core Basics / Functional Web", detail: "DOM manipulation และ logic การทำงานบนหน้าเว็บ" },
      { name: "Tailwind CSS", level: "Daily Driver", detail: "ออกแบบ UI แบบ responsive และคุม design system" },
      { name: "Vercel & Git", level: "Workflow / Deployment", detail: "การ deploy โปรเจกต์จริงและการจัดการ source code เบื้องต้น" },
    ],
  },
  {
    stage: "Stage 2",
    title: "Actively Practicing & Building",
    thai: "กำลังศึกษาและฝึกฝนต่อเนื่อง",
    status: "Learning in progress",
    skills: [
      { name: "Python", level: "Learning in Progress (Data & Logic)", detail: "การเขียนสคริปต์คำนวณและประมวลผลข้อมูล" },
      { name: "R Language", level: "Academic Practice", detail: "สถิติเบื้องต้นและการวิเคราะห์ชุดข้อมูล" },
      { name: "Next.js & React", level: "Actively Learning", detail: "การสร้าง Component และเรียนรู้ App Router" },
    ],
  },
  {
    stage: "Stage 3",
    title: "DII Trajectory",
    thai: "เป้าหมายการต่อยอดร่วมกับภาคอุตสาหกรรม",
    status: "Next trajectory",
    skills: [
      { name: "Full-Stack Architecture", level: "Next in DII", detail: "ออกแบบระบบที่เชื่อม Front-end, Back-end และฐานข้อมูล" },
      { name: "Big Data Pipelines", level: "Next in DII", detail: "เรียนรู้การจัดการกระแสข้อมูลในระดับที่ใช้งานจริง" },
      { name: "Industry-Level APIs", level: "Next in DII", detail: "ออกแบบและเชื่อมต่อบริการตามมาตรฐานอุตสาหกรรม" },
    ],
  },
] as const;

/* ------------------------------------------------------------
 * 01.5 — EDITORIAL METADATA / ข้อมูลประกอบรอบชื่อ
 * ป้ายเล็ก ๆ ที่ทำให้หน้าแรกเป็นงานออกแบบ ไม่ใช่หน้าเปล่า
 * ---------------------------------------------------------- */
export const identityMeta = [
  "STUDENT",
  "DIGITAL EXPLORER",
  "THAILAND",
  "2026",
] as const;

/** พิกัดจริงของจังหวัด — EDIT THIS ให้ตรงกับที่อยู่ของคุณ */
export const siteCoordinates = "13.7563° N / 100.5018° E";

/** สถานะปัจจุบัน — จุดกลมเล็ก ๆ สามจุดในหน้าแรก */
export const currentStatus = ["LEARNING", "BUILDING", "EXPLORING"] as const;

/** ความสนใจตอนนี้ เรียงเป็นรายการมีเลขกำกับ */
export const currentInterests = [
  { no: "01", label: "WEB" },
  { no: "02", label: "AI" },
  { no: "03", label: "DESIGN" },
  { no: "04", label: "TECHNOLOGY" },
] as const;

/** แผง CURRENTLY BECOMING ในหน้าแรก */
export const becomingPanel = {
  title: "CURRENTLY BECOMING",
  rows: [
    { label: "Exploring", value: "Web Development" },
    { label: "Learning", value: "Digital Experiences" },
    { label: "Interested In", value: "AI + Technology" },
  ],
} as const;

/** หมุดบนเส้นโค้งสีส้ม — เล่าการเดินทางด้วยกราฟิกเส้นเดียว */
export const curveMilestones = [
  { key: "start", label: "START", note: "คำถามแรกที่ยังไม่มีคำตอบ", target: "beginning" },
  { key: "explore", label: "EXPLORE", note: "ลองผิดลองถูกเพื่อหาทางของตัวเอง", target: "journey" },
  { key: "learn", label: "LEARN", note: "เปลี่ยนความสงสัยเป็นทักษะ", target: "growth" },
  { key: "build", label: "BUILD", note: "จากไอเดียสู่สิ่งที่ใช้งานได้จริง", target: "work" },
  { key: "next", label: "NEXT", note: "ก้าวถัดไปคือ DII", target: "future" },
] as const;

/** ตัวอย่างบทถัดไป ที่อยู่ท้ายหน้าแรก */
export const nextChapter = {
  eyebrow: "NEXT CHAPTER",
  no: "01",
  title: "THE SPARK",
  quote: "ทุกอย่างเริ่มต้นจากความสงสัย",
  target: "beginning",
} as const;

/** ข้อความเล็ก ๆ ที่ขอบจอ ใช้ซ้ำได้ทุกบท */
export const runningHead = {
  publication: "PORTFOLIO / 2026",
  range: "01 — 07",
  scrollHint: "SCROLL TO EXPLORE",
  place: "THAILAND",
  status: "STATUS: LEARNING",
} as const;

/** คำบรรยายกำกับแต่ละบท — ทำให้ทุกบทมี metadata ของตัวเอง */
export const sectionMeta = {
  about: { caption: "ตัวตนและวิธีคิดที่อยู่เบื้องหลังทุกโปรเจกต์", fig: "FIG. 01" },
  beginning: { caption: "ห้าคำถามที่กลายเป็นจุดเริ่มต้นของเส้นทางนี้", fig: "FIG. 02" },
  journey: { caption: "ห้าขั้นของการเติบโต เรียงตามเวลาจริง", fig: "FIG. 03" },
  work: { caption: "งานที่ลงมือทำจริง เล่าครบตั้งแต่ปัญหาถึงบทเรียน", fig: "FIG. 04" },
  growth: { caption: "แผนที่การเรียนรู้ แบ่งตามระยะที่กำลังอยู่", fig: "FIG. 05" },
  whyDii: { caption: "ไดอะแกรมความสนใจ ประสบการณ์ และสิ่งที่อยากเรียน", fig: "FIG. 06" },
  future: { caption: "เส้นทางจากวันนี้ไปถึงเป้าหมายอาชีพ", fig: "FIG. 07" },
} as const;

/* ------------------------------------------------------------
 * 02 — NAVIGATION
 * ---------------------------------------------------------- */
export const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "journey", label: "JOURNEY" },
  { id: "work", label: "WORK" },
  { id: "growth", label: "GROWTH" },
  { id: "why-dii", label: "WHY DII" },
  { id: "future", label: "FUTURE" },
] as const;

/* ------------------------------------------------------------
 * 03 — WHO I AM / นิสัยหลัก 3 ข้อ
 * ---------------------------------------------------------- */
export const traits = [
  {
    index: "A",
    title: "CURIOUS",
    titleTh: "ชอบตั้งคำถาม",
    body: "ชอบตั้งคำถามและค้นหาสิ่งใหม่ เวลาเจออะไรที่ไม่เข้าใจ ผมมักจะอยากรู้ว่ามันทำงานอย่างไรและทำไมถึงถูกออกแบบมาแบบนั้น",
    /** EDIT THIS: ตัวอย่างจริงที่แสดงว่าคุณเป็นคนแบบนี้ */
    proof: "[YOUR STORY: ยกตัวอย่างสั้น ๆ ว่าความสงสัยพาคุณไปทำอะไร]",
  },
  {
    index: "B",
    title: "OPEN TO LEARN",
    titleTh: "เปิดรับการเรียนรู้",
    body: "เปิดรับความคิดเห็นและพร้อมเรียนรู้จากประสบการณ์ ผมเชื่อว่าคำติที่ตรงไปตรงมามีค่ามากกว่าคำชม เพราะมันบอกว่าผมควรพัฒนาอะไรต่อ",
    proof: "[YOUR STORY: เล่าครั้งที่ได้รับ feedback แล้วนำไปแก้จริง]",
  },
  {
    index: "C",
    title: "GROWTH MINDSET",
    titleTh: "มองความท้าทายเป็นโอกาส",
    body: "มองทุกความท้าทายเป็นโอกาสในการพัฒนาตัวเอง งานที่ยังทำไม่ได้ในวันนี้ คือทักษะที่ผมกำลังจะได้ในเดือนหน้า",
    proof: "[YOUR STORY: เล่าเรื่องที่เคยทำไม่ได้ แล้วฝึกจนทำได้]",
  },
] as const;

/* ------------------------------------------------------------
 * 04 — THE BEGINNING / จุดเริ่มต้นจากคำถาม
 * EDIT THIS: เปลี่ยนคำถามให้เป็นคำถามที่คุณเคยถามตัวเองจริง ๆ
 * ---------------------------------------------------------- */
export const beginningQuestions = [
  {
    q: "ทำไม 240Hz ถึงรู้สึกต่างจาก 60Hz?",
    qEn: "Why does 240Hz feel different from 60Hz?",
    a: "ความสงสัยของผมเริ่มจากคอมพิวเตอร์และ E-sports ผมไล่อ่านสเปกฮาร์ดแวร์ เทียบ frame time เทียบ input lag จนเข้าใจว่า “ความรู้สึกลื่น” วัดเป็นตัวเลขได้ และนั่นคือครั้งแรกที่ผมรู้ว่าผมสนใจเรื่องประสิทธิภาพของระบบจริง ๆ",
  },
  {
    q: "เทคโนโลยีทำอะไรได้บ้าง?",
    qEn: "What can technology do?",
    a: "จากฮาร์ดแวร์ ผมเริ่มสนใจซอฟต์แวร์ที่รันอยู่บนมัน สังเกตว่าแอปที่ใช้ทุกวันถูกสร้างขึ้นมาได้อย่างไร ใครเป็นคนตัดสินใจว่าปุ่มควรอยู่ตรงไหน แล้วเบื้องหลังมันคิดอะไรอยู่",
  },
  {
    q: "เครื่องมือดิจิทัลช่วยแก้ปัญหาได้จริงไหม?",
    qEn: "How can digital tools solve real problems?",
    a: "ผมเริ่มมองปัญหารอบตัวในโรงเรียนและที่บ้าน แล้วลองคิดว่าถ้ามีระบบหรือแอปเข้ามาช่วย มันจะเปลี่ยนอะไรได้บ้าง",
  },
  {
    q: "ทำไมบางประสบการณ์ดิจิทัลรู้สึกดีกว่า?",
    qEn: "Why do some digital experiences feel better?",
    a: "คำถามนี้พาผมเข้าสู่โลกของ UX/UI ทำให้รู้ว่าความรู้สึก “ใช้ง่าย” ไม่ใช่เรื่องบังเอิญ แต่มาจากการออกแบบที่คิดถึงคนใช้",
  },
  {
    q: "ความคิดสร้างสรรค์กับเทคโนโลยีทำงานร่วมกันได้อย่างไร?",
    qEn: "How can creativity and technology work together?",
    a: "ยิ่งเรียนรู้ ผมยิ่งเห็นว่างานดิจิทัลที่ดีต้องใช้ทั้งตรรกะและความคิดสร้างสรรค์ และนั่นคือจุดที่ผมอยากยืนอยู่",
  },
] as const;

/* ------------------------------------------------------------
 * 05 — MY JOURNEY / 5 ขั้นของการเติบโต
 * แต่ละขั้นกดดูรายละเอียดได้
 * ---------------------------------------------------------- */
export const journeyStages = [
  {
    key: "curious",
    label: "CURIOUS",
    labelTh: "สงสัย",
    year: "[ปี]",
    summary: "จุดเริ่มต้นของทุกอย่าง คือคำถามที่ยังไม่มีคำตอบ",
    items: [
      "ตามข้อมูลสเปก PC และจอ high refresh rate อย่างจริงจัง จนอ่านกราฟ frame time และ input lag ได้",
      "ดู E-sports (Valorant, MLBB) แล้วเริ่มสนใจว่าเบื้องหลังการแข่งใช้ข้อมูลและระบบอะไรบ้าง",
      "สังเกตว่าแอปและเว็บไซต์ที่ใช้ทุกวันถูกออกแบบมาอย่างไร",
      "[YOUR STORY: สิ่งที่จุดประกายความสนใจของคุณ]",
    ],
  },
  {
    key: "learn",
    label: "LEARN",
    labelTh: "เรียนรู้",
    year: "[ปี]",
    summary: "เปลี่ยนความสงสัยให้เป็นการเรียนรู้อย่างมีระบบ",
    items: [
      "เรียนคอร์สออนไลน์ด้าน UI/UX และพื้นฐานการพัฒนาเว็บ",
      "ดูวิดีโอ อ่านบทความ และศึกษา case study ของงานดิจิทัล",
      "[YOUR STORY: คอร์ส / หนังสือ / workshop ที่คุณเรียนจริง]",
    ],
  },
  {
    key: "explore",
    label: "EXPLORE",
    labelTh: "ทดลอง",
    year: "[ปี]",
    summary: "ลองทำเพื่อรู้ว่าอะไรเวิร์ก และอะไรไม่เวิร์ก",
    items: [
      "ทดลองออกแบบหน้าจอแอปจากปัญหาที่เจอในชีวิตจริง",
      "ลองใช้เครื่องมือ AI และ no-code เพื่อทดสอบไอเดียให้เร็วขึ้น",
      "[YOUR STORY: การทดลอง กิจกรรม หรือการแข่งขันที่เข้าร่วม]",
    ],
  },
  {
    key: "build",
    label: "BUILD",
    labelTh: "ลงมือสร้าง",
    year: "[ปี]",
    summary: "จากไอเดียบนกระดาษ สู่สิ่งที่ใช้งานได้จริง",
    items: [
      "สร้างเว็บไซต์ portfolio นี้ด้วย Next.js และ TypeScript",
      "ทำโปรเจกต์ที่แก้ปัญหาให้คนใช้จริง ไม่ใช่แค่ส่งงาน",
      "[YOUR STORY: โปรเจกต์ที่คุณทำเสร็จ]",
    ],
  },
  {
    key: "improve",
    label: "IMPROVE",
    labelTh: "พัฒนาต่อ",
    year: "NOW",
    summary: "ทุกงานที่จบ คือบทเรียนสำหรับงานถัดไป",
    items: [
      "กลับไปดูงานเก่าแล้วเห็นจุดที่ควรทำให้ดีขึ้น",
      "ขอความเห็นจากคนอื่นและนำไปแก้จริง",
      "[YOUR STORY: สิ่งที่คุณปรับปรุงจากบทเรียนที่ได้]",
    ],
  },
] as const;

/* ------------------------------------------------------------
 * 06 — PROJECTS / โปรเจกต์แบบ mini case study
 * EDIT THIS: แทนที่ทั้ง 3 โปรเจกต์ด้วยงานจริงของคุณ
 * เพิ่มโปรเจกต์ได้โดย copy object ทั้งก้อน
 * ---------------------------------------------------------- */
export type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  role: string;
  /** สีพื้นหลังของภาพ mockup — ใช้ตอนยังไม่มีรูปจริง */
  accent: string;
  /** EDIT THIS: ใส่รูปที่ public/ แล้วเปลี่ยน path เช่น "/project-1.jpg" */
  thumbnail: string | null;
  /** ลิงก์เว็บที่ deploy แล้ว — ถ้ามี จะขึ้นปุ่ม Visit Website ให้อัตโนมัติ */
  url?: string;
  /** true = โปรเจกต์ชูโรง แสดงการ์ดใหญ่พร้อม browser mockup */
  featured?: boolean;
  oneLiner: string;
  problem: string;
  idea: string;
  process: string[];
  tools: string[];
  learned: string;
  improve: string;
};

export const projects: Project[] = [
  /* ---- โปรเจกต์ชูโรง — แสดงเป็นการ์ดใหญ่พร้อม browser mockup ---- */
  {
    id: "virtual-library",
    title: "Virtual Library — ธีม 'อ่านเปลี่ยนชีวิต'",
    year: "2026",
    category: "Web Development / UX Design",
    role: "Web Developer & Designer",
    accent: "#F97316",
    /** EDIT THIS: วาง screenshot ไว้ที่ public/library-screenshot.jpg */
    thumbnail: "/library-screenshot.jpg",
    url: "https://libary-thc2026.vercel.app/",
    featured: true,
    oneLiner: "ระบบห้องสมุดเสมือนเพื่อให้คนในพื้นที่เข้าถึง e-book ได้สะดวกรวดเร็ว",
    problem:
      "การเข้าถึงสื่อการเรียนรู้และหนังสือในพื้นที่ยังมีข้อจำกัด ต้องการแพลตฟอร์มที่ใช้งานง่ายและเข้าถึงได้จากทุกที่",
    idea: "ออกแบบและพัฒนาเว็บไซต์ห้องสมุดเสมือนโดยเน้น UI/UX ที่สะอาดตา เพื่อให้กลุ่มเป้าหมายอ่าน e-book ได้ง่ายที่สุด",
    process: [
      "วางโครงสร้างเนื้อหาและออกแบบ UI/UX ภายใต้แนวคิด อ่านเปลี่ยนชีวิต",
      "พัฒนาเว็บไซต์ด้วย HTML, CSS และ JavaScript เบื้องต้น",
      "Deploy โปรเจกต์ผ่าน Vercel เพื่อให้ใช้งานได้จริง",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Vercel", "Canva"],
    learned:
      "ได้เรียนรู้ว่าการออกแบบเว็บไซต์ต้องคำนึงถึงผู้ใช้งานจริง (User-Centric) เป็นหลัก ไม่ใช่แค่ความสวยงาม",
    improve:
      "ต้องการต่อยอดระบบให้มีการเก็บ Data พฤติกรรมการอ่านเพื่อนำไปวิเคราะห์ต่อในอนาคต",
  },
  {
    id: "portfolio",
    title: "Still Becoming — Personal Portfolio",
    year: "[ปี]",
    category: "Web Development / UX Design",
    role: "Designer & Developer",
    accent: "#FFF1DC",
    thumbnail: null,
    oneLiner: "เว็บไซต์ที่เล่าเรื่องการเติบโตของตัวเอง แทนการลิสต์เกียรติบัตร",
    problem:
      "portfolio ของนักเรียนส่วนใหญ่เป็นการเรียงเกียรติบัตรและรางวัล ซึ่งบอกได้แค่ว่าเคยทำอะไร แต่ไม่ได้บอกว่าคนคนนั้นคิดอย่างไรและกำลังจะไปทางไหน ผมอยากแก้ปัญหานี้",
    idea: "ออกแบบเว็บไซต์ให้เป็นการเดินทางที่มีบทเรียงต่อกัน ตั้งแต่ความสงสัยไปจนถึงเป้าหมายในอนาคต ให้คนอ่านเข้าใจวิธีคิด ไม่ใช่แค่ผลลัพธ์",
    process: [
      "ร่างโครงเรื่องก่อนออกแบบ กำหนดว่าแต่ละส่วนต้องตอบคำถามอะไรของคนอ่าน",
      "ทำ wireframe และวางระบบสี ตัวอักษร ระยะห่าง ให้ใช้ซ้ำได้ทั้งเว็บ",
      "พัฒนาด้วย Next.js และ TypeScript แยกเนื้อหาออกจาก component เพื่อแก้ไขง่าย",
      "ทดสอบบนมือถือและปรับ animation ให้ไม่รบกวนการอ่าน",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    learned:
      "ได้เรียนรู้ว่าการออกแบบเริ่มที่โครงสร้างข้อมูล ไม่ใช่ที่สีหรือฟอนต์ และการแยกเนื้อหาออกจากโค้ดทำให้แก้ไขงานได้เร็วขึ้นมาก",
    improve:
      "ถ้าทำใหม่ ผมจะทดสอบกับผู้ใช้จริงตั้งแต่ช่วง wireframe แทนที่จะรอให้เว็บเสร็จก่อน และจะวัดผลด้วยข้อมูลว่าคนอ่านหยุดอ่านตรงไหน",
  },
  {
    id: "data-ai",
    title: "[YOUR PROJECT] — Data & AI Exploration",
    year: "[ปี]",
    category: "Data / AI / Technology",
    role: "[บทบาทของคุณ]",
    accent: "#EDE9F2",
    thumbnail: null,
    oneLiner: "การทดลองใช้ข้อมูลและ AI เพื่อตอบคำถามที่สงสัย",
    problem:
      "[YOUR STORY: คำถามที่อยากหาคำตอบด้วยข้อมูล] ตัวอย่าง: อยากรู้ว่าเวลาที่ใช้กับหน้าจอในแต่ละวันส่งผลต่อผลการเรียนอย่างไร",
    idea: "[YOUR STORY: วิธีที่คุณเลือกใช้ เช่น เก็บข้อมูลด้วยตัวเองแล้ววิเคราะห์หาแนวโน้ม หรือใช้เครื่องมือ AI ช่วยสรุปผล]",
    process: [
      "ตั้งคำถามให้ชัดว่าต้องการรู้อะไร และข้อมูลแบบไหนจะตอบได้",
      "เก็บและจัดระเบียบข้อมูลให้พร้อมใช้",
      "วิเคราะห์ หาแนวโน้ม แล้วสรุปเป็นภาพที่คนอื่นเข้าใจได้",
      "[YOUR STORY: ขั้นตอนที่คุณทำจริง]",
    ],
    tools: ["Google Sheets", "Data Visualization", "AI Tools", "[เครื่องมืออื่น]"],
    learned:
      "[YOUR STORY: บทเรียนที่ได้ เช่น ข้อมูลตอบได้แค่คำถามที่ตั้งไว้ดี และความสัมพันธ์ของข้อมูลไม่ได้แปลว่าเป็นสาเหตุกัน]",
    improve:
      "[YOUR STORY: สิ่งที่จะพัฒนาต่อ เช่น อยากเรียน Python เพื่อวิเคราะห์ข้อมูลชุดใหญ่ได้ด้วยตัวเอง]",
  },
];

/** ป้ายกำกับ 5 ขั้นของ case study */
export const caseStudySteps = [
  { no: "01", label: "THE PROBLEM", labelTh: "ปัญหาคืออะไร", field: "problem" },
  { no: "02", label: "MY IDEA", labelTh: "ไอเดียของผม", field: "idea" },
  { no: "03", label: "WHAT I DID", labelTh: "สิ่งที่ผมทำ", field: "process" },
  { no: "04", label: "WHAT I LEARNED", labelTh: "สิ่งที่ได้เรียนรู้", field: "learned" },
  {
    no: "05",
    label: "WHAT I WOULD IMPROVE",
    labelTh: "สิ่งที่จะทำให้ดีขึ้น",
    field: "improve",
  },
] as const;

/* ------------------------------------------------------------
 * 07 — SKILLS / แบ่งเป็น NOW · BUILDING · NEXT
 * ไม่ใช้เปอร์เซ็นต์ เพราะทักษะไม่ได้วัดกันแบบนั้น
 * ---------------------------------------------------------- */
export const skillGroups = [
  {
    key: "now",
    label: "NOW",
    labelTh: "กำลังเรียนรู้อยู่ตอนนี้",
    note: "สิ่งที่ผมใช้เวลากับมันอยู่ทุกสัปดาห์",
    items: [
      { name: "UI/UX Fundamentals", detail: "หลักการออกแบบที่คิดถึงคนใช้เป็นหลัก" },
      { name: "Digital Technology", detail: "พื้นฐานของระบบและเครื่องมือดิจิทัล" },
      { name: "Web Development", detail: "HTML, CSS, JavaScript และ React" },
      { name: "[YOUR SKILL]", detail: "[รายละเอียดสั้น ๆ]" },
    ],
  },
  {
    key: "building",
    label: "BUILDING",
    labelTh: "กำลังพัฒนาให้แข็งขึ้น",
    note: "ทำได้แล้วในระดับหนึ่ง แต่ยังต้องฝึกอีกมาก",
    items: [
      { name: "Problem Solving", detail: "แยกปัญหาใหญ่ให้เป็นส่วนที่จัดการได้" },
      { name: "Design Thinking", detail: "เริ่มจากคนใช้ ไม่ใช่จากเทคโนโลยี" },
      { name: "Communication", detail: "อธิบายความคิดให้คนอื่นเข้าใจและเห็นภาพ" },
      { name: "Project Collaboration", detail: "ทำงานเป็นทีมและรับผิดชอบส่วนของตัวเอง" },
    ],
  },
  {
    key: "next",
    label: "NEXT",
    labelTh: "สิ่งที่อยากเรียนรู้ต่อ",
    note: "เหตุผลหนึ่งที่ผมอยากเรียน DII",
    items: [
      { name: "Artificial Intelligence", detail: "เข้าใจว่า AI ทำงานอย่างไรและใช้ให้ถูกที่" },
      { name: "Data", detail: "ใช้ข้อมูลประกอบการตัดสินใจแทนการเดา" },
      { name: "Digital Product Development", detail: "กระบวนการสร้างสินค้าดิจิทัลตั้งแต่ต้นจนจบ" },
      { name: "Industry Technology", detail: "เทคโนโลยีที่ใช้จริงในภาคอุตสาหกรรม" },
    ],
  },
] as const;

/* ------------------------------------------------------------
 * 08 — CERTIFICATES & ACTIVITIES
 * EDIT THIS: ใส่เกียรติบัตรและกิจกรรมจริง ลบที่ไม่ใช้ออกได้
 * ---------------------------------------------------------- */
export const certificates = [
  { name: "[ชื่อคอร์ส / เกียรติบัตร]", issuer: "[ผู้จัด]", year: "[ปี]" },
  { name: "[ชื่อคอร์ส / เกียรติบัตร]", issuer: "[ผู้จัด]", year: "[ปี]" },
  { name: "[ชื่อคอร์ส / เกียรติบัตร]", issuer: "[ผู้จัด]", year: "[ปี]" },
] as const;

export const activities = [
  { name: "[ชื่อกิจกรรม / การแข่งขัน]", role: "[บทบาท]", year: "[ปี]" },
  { name: "[ชื่อกิจกรรม / การแข่งขัน]", role: "[บทบาท]", year: "[ปี]" },
] as const;

/* ------------------------------------------------------------
 * 09 — WHY DII
 * สามวงที่มาบรรจบกัน: ความสนใจ + ประสบการณ์ + สิ่งที่อยากเรียน
 * ---------------------------------------------------------- */
export const whyDii = {
  statement:
    "ความสนใจของผมไม่ได้จำกัดอยู่ที่ศาสตร์เดียว ผมสนใจว่าศาสตร์ต่าง ๆ จะทำงานร่วมกันเพื่อสร้างทางออกดิจิทัลที่มีความหมายได้อย่างไร",
  /** สามวงในไดอะแกรม */
  circles: [
    {
      key: "interest",
      label: "MY INTEREST",
      labelTh: "สิ่งที่ผมสนใจ",
      points: [
        "การออกแบบประสบการณ์ที่คนใช้แล้วรู้สึกดี",
        "เทคโนโลยีที่แก้ปัญหาได้จริง ไม่ใช่แค่ดูล้ำ",
        "ความเชื่อมโยงระหว่างธุรกิจกับงานดิจิทัล",
      ],
    },
    {
      key: "experience",
      label: "MY EXPERIENCE",
      labelTh: "สิ่งที่ผมเคยทำ",
      points: [
        "สร้างเว็บไซต์และออกแบบหน้าจอด้วยตัวเอง",
        "ทำโปรเจกต์ที่เริ่มจากปัญหาของคนจริง",
        "[YOUR STORY: ประสบการณ์อื่นของคุณ]",
      ],
    },
    {
      key: "learn",
      label: "WHAT I WANT TO LEARN",
      labelTh: "สิ่งที่ผมอยากเรียน",
      points: [
        "AI และ Data ในระดับที่นำไปใช้งานได้",
        "การพัฒนาสินค้าดิจิทัลอย่างเป็นระบบ",
        "การทำงานกับภาคอุตสาหกรรมจริง",
      ],
    },
  ],
  /** ศาสตร์ที่ DII เชื่อมเข้าด้วยกัน */
  disciplines: [
    "Technology",
    "Business",
    "Creativity",
    "AI",
    "Data",
    "Digital Industry",
    "Real-world Experience",
  ],
  /** เหตุผลที่ DII เป็นก้าวถัดไปที่สมเหตุสมผล */
  reasons: [
    {
      no: "01",
      title: "หลักสูตรที่เชื่อมหลายศาสตร์เข้าด้วยกัน",
      body: "งานดิจิทัลจริงไม่เคยใช้ความรู้ด้านเดียว DII รวมเทคโนโลยี ธุรกิจ และความคิดสร้างสรรค์ไว้ในที่เดียว ซึ่งตรงกับวิธีที่ผมสนใจปัญหาอยู่แล้ว",
    },
    {
      no: "02",
      title: "ได้เจอโลกอุตสาหกรรมจริง",
      body: "ผมอยากรู้ว่าสิ่งที่เรียนใช้งานได้จริงแค่ไหน การได้ทำงานกับภาคอุตสาหกรรมระหว่างเรียนจะบอกผมได้เร็วกว่าการเดาเอาเอง",
    },
    {
      no: "03",
      title: "เป็นก้าวถัดไปของเส้นทางที่เริ่มไว้แล้ว",
      body: "ผมเริ่มเรียนรู้และลงมือทำด้วยตัวเองมาก่อน แต่ไปได้ไกลเท่าที่คนคนเดียวจะไปได้ DII คือที่ที่จะพาผมไปต่อพร้อมกับคนที่สนใจเรื่องเดียวกัน",
    },
  ],
} as const;

/* ------------------------------------------------------------
 * 10 — FUTURE / เป้าหมายและ roadmap
 * สำคัญ: เป้าหมายหลักต้องมี 1 อย่าง เพื่อแสดงว่าคุณมีโฟกัส
 * ---------------------------------------------------------- */
export const future = {
  headline: ["I KNOW I'M NOT THERE YET.", "BUT I KNOW WHERE I WANT TO GO."],
  /** EDIT THIS: เป้าหมายหลัก — เลือกอย่างเดียว */
  primaryGoal: {
    title: "[YOUR CAREER GOAL]",
    titleTh: "[ชื่อตำแหน่งภาษาไทย]",
    why: "[YOUR STORY: ทำไมคุณอยากเป็นสิ่งนี้ อธิบายให้เห็นว่าคิดมาแล้วจริง ๆ ไม่ใช่เลือกเพราะฟังดูดี]",
  },
  /** ทิศทางที่เกี่ยวข้อง — ใส่ได้ 1–2 อย่างเท่านั้น */
  relatedPaths: [
    { title: "[RELATED PATH 1]", note: "[เกี่ยวข้องกับเป้าหมายหลักอย่างไร]" },
    { title: "[RELATED PATH 2]", note: "[เกี่ยวข้องกับเป้าหมายหลักอย่างไร]" },
  ],
  /** roadmap 5 จุด กดดูรายละเอียดได้ */
  roadmap: [
    {
      key: "today",
      label: "TODAY",
      labelTh: "วันนี้",
      time: "2026",
      body: "นักเรียนที่เรียนรู้ด้วยตัวเองและลงมือทำโปรเจกต์จริง เพื่อทดสอบว่าตัวเองชอบงานแบบนี้จริงไหม",
    },
    {
      key: "learning",
      label: "LEARNING",
      labelTh: "ช่วงเตรียมตัว",
      time: "ตอนนี้ – ก่อนเข้ามหาวิทยาลัย",
      body: "เก็บพื้นฐานด้านการออกแบบและการพัฒนาให้แน่น พร้อมเริ่มทำความเข้าใจ AI และข้อมูลในระดับเบื้องต้น",
    },
    {
      key: "university",
      label: "UNIVERSITY",
      labelTh: "ในรั้วมหาวิทยาลัย",
      time: "DII",
      body: "เรียนรู้อย่างเป็นระบบ ทำงานเป็นทีมกับคนที่เก่งกว่า และใช้โอกาสจากหลักสูตรที่เชื่อมหลายศาสตร์เข้าด้วยกัน",
    },
    {
      key: "experience",
      label: "EXPERIENCE",
      labelTh: "ประสบการณ์จริง",
      time: "ระหว่างเรียน",
      body: "ฝึกงานและร่วมโปรเจกต์กับภาคอุตสาหกรรม เพื่อเข้าใจว่างานดิจิทัลในระดับมืออาชีพทำงานกันอย่างไร",
    },
    {
      key: "career",
      label: "FUTURE CAREER",
      labelTh: "เป้าหมายอาชีพ",
      time: "หลังเรียนจบ",
      body: "ทำงานเป็น [YOUR CAREER GOAL] ที่สร้างสินค้าดิจิทัลซึ่งแก้ปัญหาให้คนได้จริง และยังเรียนรู้ต่อไปเรื่อย ๆ",
    },
  ],
} as const;

/* ------------------------------------------------------------
 * 10.5 — STATEMENTS / ประโยคคั่นบท
 * EDIT THIS: ประโยคเต็มความกว้างที่คั่นระหว่างบท
 * ทำหน้าที่เป็นจุดพักตาและย้ำใจความหลักของเรื่อง
 * ---------------------------------------------------------- */
export const statements = {
  afterBeginning: {
    lines: ["คำถามที่ยังไม่มีคำตอบ", "คือเหตุผลที่ผมยังเรียนรู้อยู่"],
    attribution: "ON CURIOSITY",
  },
  afterWork: {
    lines: ["ผมไม่ได้ภูมิใจกับงานที่เสร็จ", "เท่ากับสิ่งที่ได้รู้ตอนทำมันพลาด"],
    attribution: "ON BUILDING",
  },
} as const;

/* ------------------------------------------------------------
 * 11 — CLOSING / บทปิด
 * ---------------------------------------------------------- */
export const closing = {
  headline: ["I'M NOT", "THE FINISHED", "VERSION OF MYSELF."],
  headlineAccent: ["AND THAT'S", "THE POINT."],
  bodyTh: [
    "ยังมีอีกหลายสิ่งที่ผมต้องเรียนรู้",
    "ยังมีอีกหลายความท้าทายที่ผมอยากลอง",
    "แต่ผมพร้อมที่จะเปิดรับ เรียนรู้ ทดลอง",
    "และพัฒนาตัวเองต่อไป",
  ],
  /** เชื่อมกับเกณฑ์การคัดเลือกทั้งสามข้อโดยตรง */
  criteria: [
    {
      label: "CLEAR GOAL",
      labelTh: "มีเป้าหมายที่ชัดเจน",
      body: "ผมรู้ว่าอยากเดินไปทางไหน และรู้ว่าต้องเรียนรู้อะไรเพื่อไปถึงจุดนั้น",
    },
    {
      label: "ACTIVE SELF-DEVELOPMENT",
      labelTh: "พัฒนาตัวเองอย่างต่อเนื่อง",
      body: "ผมไม่รอให้มีคนสอน แต่เริ่มเรียนรู้และลงมือทำด้วยตัวเองก่อนแล้ว",
    },
    {
      label: "OPENNESS TO LEARN",
      labelTh: "เปิดรับการเรียนรู้",
      body: "ผมรู้ว่าตัวเองยังไม่เก่ง และนั่นคือเหตุผลที่ผมอยากเรียนรู้ต่อ",
    },
  ],
  signOff: "STILL BECOMING.",
} as const;

/* ------------------------------------------------------------
 * 12 — CONTACT
 * EDIT THIS: ใส่ช่องทางติดต่อจริง ลบอันที่ไม่มีออก
 * ---------------------------------------------------------- */
export const contact = {
  email: "[your.email@example.com]",
  links: [
    { label: "Email", href: "mailto:[your.email@example.com]" },
    { label: "Instagram", href: "https://instagram.com/[username]" },
    { label: "GitHub", href: "https://github.com/[username]" },
    { label: "LinkedIn", href: "https://linkedin.com/in/[username]" },
  ],
  footNote: "เว็บไซต์นี้ออกแบบและพัฒนาด้วยตัวเอง",
} as const;

/* ------------------------------------------------------------
 * 13 — SEO / METADATA
 * ---------------------------------------------------------- */
export const siteMeta = {
  title: "Still Becoming — [YOUR NAME]",
  description:
    "A journey of curiosity, creation, and continuous learning. Portfolio สำหรับสมัครเข้าศึกษาต่อ Digital Industry Integration (DII)",
} as const;
