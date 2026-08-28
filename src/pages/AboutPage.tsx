import { useState } from "react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const imgHeroStory = "/assets/c1786.png";
const imgHeadmaster = "/assets/e9332.png";
const imgCampus = "/assets/612da.png";

const highlights = [
  "Science lab",
  "ICT Labs",
  "Library",
  "Play fields",
];

const leaders = [
  { name: "HABUMUGISHA Ernest", role: "Headmaster" },
  { name: "HABUMUGISHA Ernest", role: "Headmaster" },
  { name: "HABUMUGISHA Ernest", role: "Headmaster" },
  { name: "HABUMUGISHA Ernest", role: "Headmaster" },
];

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

export default function AboutPage({ onNavigate, onOpenAdmission, onOpenAsk }: AboutPageProps) {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(1);
  function handleAdmission() {
    if (onOpenAdmission) {
      onOpenAdmission();
    } else {
      onNavigate("admissions");
    }
  }

  function handleAsk() {
    if (onOpenAsk) {
      onOpenAsk();
    } else {
      onNavigate("contact");
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. Hero Section: Diagonal Split (Orange Left + Classroom Photo Right + Headmaster Overlay Card) */}
      <section className="relative bg-[#ff8c00] overflow-hidden min-h-[460px] lg:min-h-[500px] flex items-center">
        {/* Right Classroom Photo Background with clean diagonal clip */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgHeroStory})`,
            clipPath: "polygon(42% 0, 100% 0, 100% 100%, 54% 100%)",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-4 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                OUR SCHOOL
              </span>

              <h1 className="font-extrabold text-[#111827] text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight">
                Shaping futures<br />
                at <span className="text-white">GS Gacuba II A</span>
              </h1>

              <p className="text-white text-xs sm:text-[13px] lg:text-[14px] leading-relaxed max-w-md font-normal opacity-95">
                Welcome to the official GS Gacuba 2A website! Here, our community can explore school news, academic resources, and upcoming events as we work together to nurture academic excellence, strong values, and future leaders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={handleAdmission}
                  className="bg-white text-[#ff8c00] hover:bg-orange-50 font-bold text-xs sm:text-[13px] min-h-[44px] px-4 sm:px-5 py-2.5 rounded-md shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Apply for admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] min-h-[44px] px-4 sm:px-5 py-2.5 rounded-md shadow-xs border border-white/60 flex items-center justify-center cursor-pointer transition-colors"
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* Right Column: Classroom Photo on Mobile, and Headmaster Overlay Card */}
            <div className="md:col-span-5 lg:col-span-6 relative flex flex-col sm:flex-row md:flex-col justify-center md:justify-end items-center md:items-end gap-4">
              {/* On mobile only: show classroom photo */}
              <div className="md:hidden w-full rounded-2xl overflow-hidden shadow-lg max-h-52">
                <img
                  src={imgHeroStory}
                  alt="Classroom Study"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlaid Orange Staff/Headmaster Card */}
              <div className="bg-[#ff8c00] text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/30 w-full max-w-[260px] sm:max-w-[280px]">
                <div className="rounded-xl overflow-hidden bg-white/10 aspect-square mb-2.5 max-h-[170px] flex items-center justify-center">
                  <img
                    src={imgHeadmaster}
                    alt="HABUMUGISHA Ernest"
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
                <h4 className="font-bold text-xs sm:text-sm leading-tight text-white">
                  HABUMUGISHA Ernest
                </h4>
                <p className="text-[11px] text-white/90 font-normal mt-0.5">
                  Headmistress, GS Gacuba II A
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. School Foundation Section: Aerial Photo (Left) + General School Content (Right) */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: Large Aerial Photo with Rounded Corners */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-md bg-gray-100 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[420px]">
                <img
                  src={imgCampus}
                  alt="GS Gacuba II A Campus Overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: General School Text */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                  GENERAL SCHOOL
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#111827] leading-tight">
                  A foundation built for the future
                </h2>
              </div>

              <p className="text-[#656777] text-xs sm:text-sm leading-relaxed max-w-lg">
                GS Gacuba II A grew from a clear promise: give young people the knowledge, character, and confidence to shape Rwanda&apos;s next chapter. Our school brings rigorous academics and a caring community together.
              </p>

              <div className="pt-1">
                <h4 className="font-bold text-[#111827] text-xs sm:text-sm mb-2.5">
                  School highlights
                </h4>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#111827]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("gallery")}
                  className="bg-[#1e244b] hover:bg-[#161a38] text-white text-xs sm:text-sm font-semibold min-h-[44px] px-5 py-2.5 rounded-md shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Explore our school</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. School Leadership Section: Decorative Graphic Background + 4 Cards */}
      <section className="relative py-12 sm:py-14 lg:py-18 bg-gradient-to-r from-[#e87500] via-[#f58220] to-[#e67500] overflow-hidden">
        {/* Decorative Wave/Curved Contour Lines in Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,50 C300,10 700,120 1100,30 C1300,-15 1500,80 1600,150"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
          <path
            d="M-100,120 C320,80 720,180 1120,90 C1320,45 1520,140 1600,210"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
          <path
            d="M-100,200 C350,160 750,260 1150,170 C1350,120 1550,220 1600,300"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
          <path
            d="M-100,300 C400,250 800,350 1200,250 C1400,200 1600,300 1600,380"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
        </svg>

        {/* Translucent Decorative Circles/Ellipses in Background */}
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-yellow-300/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-yellow-400/15 blur-2xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Centered Heading */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827]">
              The school leadership
            </h2>
            <p className="text-[#6b3300] text-xs sm:text-sm leading-relaxed">
              Welcome to the heart of Groupe Scolaire Gacuba II A. Our dedicated staff works hard every day to guide, inspire, and support every student.
            </p>
          </div>

          {/* 4 Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLeaderIndex(idx)}
                className={`bg-white rounded-xl overflow-hidden shadow-md border transition-all duration-200 cursor-pointer flex flex-col group ${
                  activeLeaderIndex === idx
                    ? "ring-2 ring-[#ff8c00] shadow-lg scale-[1.02]"
                    : "border-white/20 hover:shadow-lg hover:border-[#ff8c00]/40"
                }`}
              >
                {/* Gray/Slate Portrait Area with monochrome photo */}
                <div className="bg-[#4b5563] h-[200px] sm:h-[220px] md:h-[240px] relative overflow-hidden flex items-end justify-center">
                  <img
                    src={imgHeadmaster}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top grayscale contrast-110"
                  />
                </div>

                {/* Bottom White Info Box */}
                <div className="p-3.5 bg-white">
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#111827]">
                    {leader.name}
                  </h4>
                  <p className="text-[11px] text-[#2563eb] font-medium mt-0.5">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Image Indicator Dots below the cards with accessible touch padding */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {leaders.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveLeaderIndex(dotIdx)}
                aria-label={`Show leader ${dotIdx + 1}`}
                className="p-2 -m-2 cursor-pointer flex items-center justify-center focus:outline-none"
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-300 block ${
                    activeLeaderIndex === dotIdx
                      ? "w-7 bg-[#ff8c00]"
                      : "w-2.5 bg-[#111827]/25 hover:bg-[#111827]/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-8 sm:mt-10">
            <button
              onClick={handleAdmission}
              className="bg-white text-[#ff8c00] hover:bg-orange-50 font-bold text-xs sm:text-[13px] min-h-[44px] px-5 py-2.5 rounded-md shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Apply for admission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleAsk}
              className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] min-h-[44px] px-5 py-2.5 rounded-md shadow-xs border border-white/30 flex items-center justify-center cursor-pointer transition-colors"
            >
              Ask about us
            </button>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
