import { useState } from "react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const imgHeroStory = "/assets/c1786.png";
const imgHeadmaster = "/assets/e9332.png";
const imgCampus = "/assets/612da.png";
const imgTeamBg = "/assets/team-section-background.jpg";

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

      {/* 3. School Leadership Section: team-section-background.jpg + 4 Cards */}
      <section
        className="relative py-14 sm:py-16 lg:py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${imgTeamBg})` }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
              The school leadership
            </h2>
            <p className="text-[#4a2c00]/90 text-xs sm:text-[13.5px] leading-relaxed max-w-xl mx-auto font-medium">
              Welcome to the heart of Groupe Scolaire Gacuba II A. Our dedicated staff works hard every day to guide, inspire, and support every student.
            </p>
          </div>

          {/* 4 Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLeaderIndex(idx)}
                className="bg-[#5c647b] rounded-2xl overflow-hidden shadow-xl flex flex-col cursor-pointer transition-transform hover:-translate-y-1 duration-200"
              >
                {/* Gray/Slate Portrait Area with monochrome photo */}
                <div className="h-[220px] sm:h-[240px] md:h-[260px] relative overflow-hidden flex items-end justify-center">
                  <img
                    src={imgHeadmaster}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top grayscale contrast-110"
                  />
                </div>

                {/* Bottom White Info Box */}
                <div className="p-4 bg-white rounded-b-2xl">
                  <h4 className="font-extrabold text-xs sm:text-[13px] text-[#111827]">
                    {leader.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#5452a3] mt-0.5">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots below the cards */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {leaders.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveLeaderIndex(dotIdx)}
                aria-label={`Show leader ${dotIdx + 1}`}
                className="cursor-pointer focus:outline-none p-1"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 block ${
                    activeLeaderIndex === dotIdx
                      ? "bg-[#ff8c00] scale-110 shadow-xs"
                      : "bg-white shadow-xs hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-3.5 mt-8">
            <button
              onClick={handleAdmission}
              className="bg-white text-[#ff8c00] hover:bg-orange-50 font-bold text-xs sm:text-[13px] min-h-[42px] px-5 py-2.5 rounded-[4px] shadow-sm flex items-center justify-center cursor-pointer transition-colors"
            >
              Apply for admission —
            </button>

            <button
              onClick={handleAsk}
              className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] min-h-[42px] px-5 py-2.5 rounded-[4px] shadow-sm flex items-center justify-center cursor-pointer transition-colors"
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
