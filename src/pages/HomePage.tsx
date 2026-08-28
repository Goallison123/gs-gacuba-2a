import Footer from "../components/Footer";
import { ArrowRight, Phone, Check } from "lucide-react";

const imgHeroStudent = "/assets/3421d.png";
const imgHeroBg = "/assets/e0d1a.png";
const imgWhyPhoto = "/assets/1c7aa.png";
const imgCtaRightImg = "/assets/b5865.png";
const imgStudentPhoto1 = "/assets/ef51e.png";
const imgStudentPhoto2 = "/assets/07117.png";
const imgStudentPhoto3 = "/assets/017b1.png";

const iconCalculator = "/assets/afb13.svg";
const iconBook = "/assets/c4a68.svg";
const iconLayers = "/assets/db130.svg";
const iconUsers = "/assets/c9358.svg";
const iconHelp = "/assets/e3d67.svg";
const iconStatWrap = "/assets/ac42c.svg";

const streams = [
  {
    icon: iconCalculator,
    iconBg: "#fff3e0",
    title: "MS2",
    desc: "A level learning pathway focusing on Mathematics, Economics, Geography, and Physics.",
    linkId: "academics",
  },
  {
    icon: iconBook,
    iconBg: "#e8f4fd",
    title: "Arts and humanities",
    desc: "Upper secondary (A-Level) learning pathway focusing on core social subjects like History, Literature in English, Geography, and Psychology.",
    linkId: "academics",
  },
  {
    icon: iconLayers,
    iconBg: "#f0fdf4",
    title: "Ordinary Level",
    desc: "Three-year lower secondary education cycle (Senior 1 to Senior 3) that provides a competence-based core curriculum concluding with national examinations.",
    linkId: "academics",
  },
];

const checks = [
  "Regular, morning and  evening guided self-study.",
  "Quizzing beyond books so students learn outside pages.",
  "Clear attendance control and parent communication.",
  "Modern ICT tools and lab facilitating modern education.",
];

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

export default function HomePage({ onNavigate, onOpenAdmission, onOpenAsk }: HomePageProps) {
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
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-[#e87500] via-[#f58220] to-[#e67500] overflow-hidden min-h-[480px] lg:min-h-[530px] flex items-end">
        {/* School Building Photo Background with warm color overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url(${imgHeroBg})` }}
        />

        {/* Decorative Wave/Curved Contour Lines in Background matching Screenshot 1 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
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
            d="M-100,190 C340,150 740,240 1140,150 C1340,105 1540,200 1600,270"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
          <path
            d="M-100,260 C360,220 760,300 1160,210 C1360,165 1560,260 1600,330"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
          <path
            d="M-100,330 C380,290 780,360 1180,270 C1380,225 1580,320 1600,390"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
          <path
            d="M-100,400 C400,360 800,420 1200,330 C1400,285 1600,380 1600,450"
            fill="none"
            stroke="#ffd599"
            strokeWidth="1.5"
          />
        </svg>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-16 pb-0 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            {/* Left Column: Hero Text & Callouts */}
            <div className="lg:col-span-7 flex flex-col gap-5 pb-8 sm:pb-12">
              <h1 className="font-extrabold text-[#1e244b] text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-tight">
                Shaping the leaders<br />
                and thinkers of<br />
                <span className="text-white">tomorrow</span>
              </h1>

              <p className="text-white text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-lg font-normal opacity-95">
                Welcome to GS Gacuba II A, providing a foundation of academic excellence in Rubavu across Ordinary Level and advanced MPC &amp; HGL streams (Now MS2 and Arts and Humanities).
              </p>

              {/* Phone CTA Component - Clean circle icon with white text on hero background */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-10 h-10 rounded-full bg-[#ff8c00] border border-white/30 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/90 font-medium">
                    Call us anytime
                  </span>
                  <a
                    href="tel:+250788000000"
                    className="text-sm sm:text-base font-bold text-white tracking-wide hover:underline"
                  >
                    +250 788 000 000
                  </a>
                </div>
              </div>

              {/* Action Buttons: Apply for admission & Ask about us */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleAdmission}
                  className="bg-white text-[#ff8c00] hover:bg-orange-50 font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-md shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Apply for admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-md shadow-xs border border-white/25 cursor-pointer transition-colors"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Column: Student Cutout Photo (Integrated directly into Hero, NO glass card) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end">
              <img
                src={imgHeroStudent}
                alt="GS Gacuba II A Student"
                className="max-h-[380px] sm:max-h-[440px] lg:max-h-[490px] w-auto object-contain object-bottom block z-10 select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar (Dark Navy #1e244b) */}
      <section className="bg-[#1e244b] text-white py-4 sm:py-5 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 py-3 sm:py-2 sm:px-6 first:pl-0">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <img src={iconUsers} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-none">800+</p>
                <p className="text-xs text-gray-300 font-medium mt-1">Students Enrolled</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 py-3 sm:py-2 sm:px-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <img src={iconHelp} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-none">NESA</p>
                <p className="text-xs text-gray-300 font-medium mt-1">Accreditation</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 py-3 sm:py-2 sm:px-6 last:pr-0">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <img src={iconStatWrap} alt="" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-none">23</p>
                <p className="text-xs text-gray-300 font-medium mt-1">Staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Streams Section */}
      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#ff8c00] font-bold">—</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                  EXLORE OUR SCHOOL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1e244b]">Streams</h2>
            </div>
            <button
              onClick={() => onNavigate("academics")}
              className="text-[#ff8c00] hover:text-[#e07b00] text-xs sm:text-sm font-bold flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>view levels and streams details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Stream Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streams.map((stream) => (
              <div
                key={stream.title}
                className="bg-white border border-[#e5e7eb] rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0"
                    style={{ backgroundColor: stream.iconBg }}
                  >
                    <img src={stream.icon} alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <h3 className="text-base font-bold text-[#1e244b] mb-2">{stream.title}</h3>
                  <p className="text-xs text-[#6d758f] leading-relaxed mb-6">{stream.desc}</p>
                </div>
                <button
                  onClick={() => onNavigate(stream.linkId)}
                  className="text-[#ff8c00] group-hover:text-[#e07b00] text-xs font-bold flex items-center gap-1 self-start transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-white py-14 lg:py-16 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Image with Students working on laptop */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-md bg-gray-100 aspect-[4/3] max-h-[400px]">
                <img
                  src={imgWhyPhoto}
                  alt="GS Gacuba II A Students collaborating with laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Why Choose Us Content */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#ff8c00] font-bold">—</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#1e244b] leading-tight">
                  We Don&apos;t Just Teach, We<br />Build Futures
                </h2>
              </div>

              <p className="text-[#6d758f] text-xs sm:text-sm leading-relaxed max-w-lg">
                At GS Gacuba II A, we believe every student is unique. Our school environment, methodologies and result-oriented approach help students achieve their dreams in Rubavu and beyond.
              </p>

              {/* 4 Bullet Points */}
              <div className="space-y-3 pt-1">
                {checks.map((text) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-[#1e244b]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="bg-[#5a6278] hover:bg-[#1e244b] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  Know More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Orange CTA Banner Section: "You were never late, you just hesitated!" */}
      <section className="bg-[#ff8c00] relative overflow-hidden py-10 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black leading-tight">
                You were never late,<br />you just hesitated!
              </h2>
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                Tired of boarding stresses? Expensive schools, academically unstable schools? Need a school that  cares about your vision?
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleAdmission}
                  className="bg-white text-[#ff8c00] hover:bg-orange-50 font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleAsk}
                  className="bg-[#e67500] hover:bg-[#cc6600] text-white font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-md shadow-xs border border-white/20 transition-colors cursor-pointer"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/10] relative">
                <img
                  src={imgCtaRightImg}
                  alt="GS Gacuba Classroom Study"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-[#ff8c00]/20 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Best Performing Students Section */}
      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#ff8c00] font-bold">—</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                  SUCCESS SHOULD BE RECOGNIZED
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1e244b]">
                Best performing students
              </h2>
            </div>

            {/* Middle Column: 2 Student Cards Stacked Vertically */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-3.5 flex items-center gap-3.5 shadow-xs">
                <img
                  src={imgStudentPhoto1}
                  alt="Amina Uwase"
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1e244b]">Amina Uwase</h4>
                  <p className="text-[11px] text-[#6d758f]">MPC Stream, GS Gacuba II A</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-3.5 flex items-center gap-3.5 shadow-xs">
                <img
                  src={imgStudentPhoto2}
                  alt="Grace Mukamana"
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1e244b]">Grace Mukamana</h4>
                  <p className="text-[11px] text-[#6d758f]">Ordinary Level, GS Gacuba II A</p>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Big Orange Quote Card */}
            <div className="lg:col-span-4 bg-[#ff8c00] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
              <blockquote className="text-xs sm:text-sm font-medium text-white leading-relaxed mb-6">
                &ldquo;With big dreams and daily effort, even the smallest steps can lead to the highest success.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <img
                  src={imgStudentPhoto3}
                  alt="Jean Paul Habimana"
                  className="w-10 h-10 rounded-full object-cover border border-white/50 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Jean Paul Habimana</h4>
                  <p className="text-[11px] text-white/85">MS2, GS Gacuba II A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
