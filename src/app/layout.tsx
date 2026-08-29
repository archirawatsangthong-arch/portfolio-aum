import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ฟอนต์ภาษาอังกฤษสำหรับหัวข้อและตัวเลขสไตล์ Tech
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// ฟอนต์ภาษาไทยและอังกฤษตัวเนื้อหา คลีน เรียบง่าย สบายตา
const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aum | Web & Data Portfolio",
  description: "รวบรวมโปรเจกต์ Web Development, Data และทักษะที่กำลังพัฒนา",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${spaceGrotesk.variable} ${ibmPlexThai.variable}`}>
      <body className="bg-[#030712] font-sans text-slate-100 antialiased selection:bg-cyan-500/25 selection:text-cyan-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}