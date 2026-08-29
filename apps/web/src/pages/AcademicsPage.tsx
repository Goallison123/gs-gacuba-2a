import { useState } from "react";
import Footer from "../components/Footer";
import { Calculator, BookOpen } from "lucide-react";

interface AcademicsPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const imgClassroomHero = "/assets/c1786.png";

export default function AcademicsPage({
  onNavigate,
  onOpenAdmission,
  onOpenAsk,
}: AcademicsPageProps) {
  const [activeTab, setActiveTab] = useState<"advanced" | "ordinary">("advanced");

  function handleAdmission() {
    if (onOpenAdmission) onOpenAdmission();
    else onNavigate("admissions");
  }

  function handleAsk() {
    if (onOpenAsk) onOpenAsk();
    else onNavigate("contact");
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. Hero Section: Split Diagonal Orange & Classroom Photography */}
      <section className="relative bg-[#ff8c00] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
          {/* Left Hero Content Area */}
          <div className="lg:col-span-6 xl:col-span-6 bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#f57c00] px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16 flex flex-col justify-center relative z-10 text-left">
            <div className="max-w-xl space-y-4 sm:space-y-5">
              {/* Category Eyebrow */}
              <span className="text-white/90 font-extrabold text-[11px] sm:text-xs tracking-[0.18em] uppercase">
                ACADEMICS
              </span>

              {/* Main Headline */}
              <h1 className="tracking-tight leading-[1.06]">
                <span className="block font-black text-white text-4xl sm:text-5xl lg:text-[54px]">
                  Excellence in
                </span>
                <span className="block font-black text-[#1e244b] text-4xl sm:text-5xl lg:text-[54px]">
                  every discipline
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/95 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-lg font-normal">
                Our academic programs are designed to challenge, inspire and prepare students to excel in a fast changing world.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("pathways-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white hover:bg-orange-50 text-[#ff8c00] font-bold text-xs sm:text-[13px] min-h-[42px] px-5 sm:px-6 py-2.5 rounded-[4px] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Explore programs</span>
                  <span className="text-base leading-none">&rarr;</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById("pathways-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/80 font-bold text-xs sm:text-[13px] min-h-[42px] px-5 sm:px-6 py-2.5 rounded-[4px] shadow-sm flex items-center justify-center cursor-pointer transition-colors"
                >
                  Curriculum overview
                </button>
              </div>
            </div>
          </div>

          {/* Right Hero Image Area with Diagonal Slice Divider */}
          <div className="lg:col-span-6 xl:col-span-6 relative overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-full">
            {/* Background classroom photo */}
            <img
              src={imgClassroomHero}
              alt="GS Gacuba II A students engaged in classroom learning"
              className="w-full h-full object-cover object-center absolute inset-0"
            />

            {/* Diagonal Orange Wedge Overlay for seamless geometric angular cut on desktop */}
            <div
              className="hidden lg:block absolute inset-y-0 -left-1 w-24 bg-[#f57c00] pointer-events-none z-10"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Pathways Section */}
      <section id="pathways-section" className="bg-white py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Eyebrow and Section Heading */}
          <div className="text-center space-y-2 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 text-[#ff8c00] font-bold text-xs sm:text-[13px] tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#ff8c00] inline-block" />
              <span>OUR ACADEMIC PATHWAYS</span>
            </div>
            <h2 className="font-black text-[#1e244b] text-2xl sm:text-3xl lg:text-[38px] tracking-tight">
              Find the right path for your future
            </h2>
          </div>

          {/* Segmented Control / Tab Switcher */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex bg-white rounded-[6px] border border-gray-200/90 p-1 shadow-2xs">
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-4 sm:px-6 py-2 rounded-[4px] text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                  activeTab === "advanced"
                    ? "bg-[#1e244b] text-white shadow-xs"
                    : "text-[#ff8c00] hover:bg-orange-50/50"
                }`}
              >
                Advanced level (A' Level)
              </button>

              <button
                onClick={() => setActiveTab("ordinary")}
                className={`px-4 sm:px-6 py-2 rounded-[4px] text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                  activeTab === "ordinary"
                    ? "bg-[#1e244b] text-white shadow-xs"
                    : "text-[#ff8c00] hover:bg-orange-50/50"
                }`}
              >
                Ordinary level (O' Level)
              </button>
            </div>
          </div>

          {/* Academic Pathway Cards */}
          {activeTab === "advanced" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Card 1: MS2 */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#fff3eb] border border-[#ffe0cc] flex items-center justify-center text-[#ff8c00]">
                    <Calculator className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-[#1e244b] text-2xl sm:text-3xl tracking-tight">
                    MS2
                  </h3>

                  <p className="text-[#ff8c00] font-bold text-[11px] sm:text-xs tracking-wider uppercase">
                    MATHEMATICS, SCIENCES AND TECHNOLOGY
                  </p>

                  <p className="text-[#4b5563] text-xs sm:text-[13px] leading-relaxed pt-1">
                    A rigrous pathway for students passionate about Mathematics, Physics,, Chemistry and Computer science. Ideal for future engineers, data scientists, doctors and innovators.
                  </p>
                </div>
              </div>

              {/* Card 2: ARTS AND HUMANITIES */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center text-[#2563eb]">
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-[#1e244b] text-2xl sm:text-3xl tracking-tight">
                    ARTS AND HUMANITIES
                  </h3>

                  <p className="text-[#ff8c00] font-bold text-[11px] sm:text-xs tracking-wider uppercase">
                    HUMANITIES, LANGUAGES AND SOCIAL SCIENCES
                  </p>

                  <p className="text-[#4b5563] text-xs sm:text-[13px] leading-relaxed pt-1">
                    Explore human behavior, societies and cultures. Develop critical thinking and communication skills for careers in law, education, media, diplomacy and more.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* O-Level Card 1 */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#fff3eb] border border-[#ffe0cc] flex items-center justify-center text-[#ff8c00]">
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-[#1e244b] text-2xl sm:text-3xl tracking-tight">
                    CBC CORE FOUNDATIONS
                  </h3>

                  <p className="text-[#ff8c00] font-bold text-[11px] sm:text-xs tracking-wider uppercase">
                    LOWER SECONDARY (SENIOR 1 TO SENIOR 3)
                  </p>

                  <p className="text-[#4b5563] text-xs sm:text-[13px] leading-relaxed pt-1">
                    Comprehensive Competence-Based Curriculum covering Mathematics, Integrated Sciences, Social Studies, Kinyarwanda, English, French, and National Ethics for NESA examinations.
                  </p>
                </div>
              </div>

              {/* O-Level Card 2 */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow text-left">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center text-[#2563eb]">
                    <Calculator className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-[#1e244b] text-2xl sm:text-3xl tracking-tight">
                    STEM &amp; DIGITAL LITERACY
                  </h3>

                  <p className="text-[#ff8c00] font-bold text-[11px] sm:text-xs tracking-wider uppercase">
                    EXPERIMENTAL LABS &amp; COMPUTING
                  </p>

                  <p className="text-[#4b5563] text-xs sm:text-[13px] leading-relaxed pt-1">
                    Hands-on digital skills with school laptops, active science laboratory experimentation in biology and chemistry, and creative problem solving preparing learners for advanced combinations.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Golden Orange Call to Action Banner */}
      <section className="bg-[#f58220] py-10 sm:py-12 lg:py-14 w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Text */}
          <div className="text-left space-y-1.5">
            <h2 className="font-black text-white text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight">
              Your future starts with<br />the right foundation
            </h2>
            <p className="text-white/95 text-xs sm:text-sm font-medium">
              Appy today and take the first step towards your dreams.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleAdmission}
              className="bg-white hover:bg-orange-50 text-[#ff8c00] font-bold text-xs sm:text-[13px] min-h-[42px] px-6 py-2.5 rounded-[4px] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Apply for admissions</span>
              <span className="text-base leading-none">&rarr;</span>
            </button>

            <button
              onClick={handleAsk}
              className="bg-transparent hover:bg-white/10 text-white border border-white font-bold text-xs sm:text-[13px] min-h-[42px] px-6 py-2.5 rounded-[4px] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Talk to admissions</span>
              <span className="text-base leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
