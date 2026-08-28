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
  "Regular, morning and evening guided self-study.",
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#ff8c00] via-[#ff9416] to-[#ffa32b] relative overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center">
        {/* Subtle architectural overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url(${imgHeroBg})` }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Text & Callout */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h1 className="font-extrabold text-[#211f54] text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight">
                Shaping the leaders<br />
                and thinkers of<br />
                <span className="text-white">tomorrow</span>
              </h1>

              <p className="text-[#211f54] text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
                Welcome to GS Gacuba II A, providing a foundation of academic excellence in Rubavu across Ordinary Level and advanced MPC &amp; HGL streams (Now MS2 and Arts and Humanities).
              </p>

              {/* Call Us Anytime Badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xs rounded-full px-4 py-2 self-start shadow-sm border border-white/40">
                <div className="w-10 h-10 rounded-full bg-[#ff8c00] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#6d758f] font-semibold uppercase tracking-wider">
                    Call us anytime
                  </span>
                  <a
                    href="tel:+250788000000"
                    className="text-sm sm:text-base font-bold text-[#211f54] hover:text-[#ff8c00] transition-colors"
                  >
                    +250 788 000 000
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={handleAdmission}
                  className="bg-white text-[#ff8c00] hover:bg-[#fff7ed] font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Apply for admission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-[#211f54] hover:bg-[#2d2a70] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Column: Student Cutout Photo */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
                {/* Schoolgirl photo framed */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#211f54]/10 border-4 border-white/30 max-h-[500px]">
                  <img
                    src={imgHeroStudent}
                    alt="GS Gacuba II A Student"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                    <p className="text-[#ffe082]">Excellence in Secondary Education</p>
                    <p className="text-white/90 text-[11px]">Rubavu District, Western Province</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar (Dark Navy #211f54) */}
      <section className="bg-[#211f54] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 py-6 sm:py-8 sm:px-6 first:pl-0">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <img src={iconUsers} alt="" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">800+</p>
                <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Students Enrolled</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 py-6 sm:py-8 sm:px-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <img src={iconHelp} alt="" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">NESA</p>
                <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Accreditation</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 py-6 sm:py-8 sm:px-6 last:pr-0">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <img src={iconStatWrap} alt="" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">23</p>
                <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Staff Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff8c00] font-bold">—</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                  Explore Our School
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#211f54]">Streams</h2>
            </div>
            <button
              onClick={() => onNavigate("academics")}
              className="text-[#ff8c00] hover:text-[#e07b00] text-sm font-bold flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <span>view levels and streams details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Stream Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streams.map((stream) => (
              <div
                key={stream.title}
                className="bg-white border border-[#e1e4ed] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                    style={{ backgroundColor: stream.iconBg }}
                  >
                    <img src={stream.icon} alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-[#211f54] mb-2">{stream.title}</h3>
                  <p className="text-sm text-[#6d758f] leading-relaxed mb-6">{stream.desc}</p>
                </div>
                <button
                  onClick={() => onNavigate(stream.linkId)}
                  className="text-[#ff8c00] group-hover:text-[#e07b00] text-sm font-bold flex items-center gap-1.5 self-start transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f8faff] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image with Students working on laptop */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] max-h-[460px]">
                <img
                  src={imgWhyPhoto}
                  alt="GS Gacuba II A Students collaborating with laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Why Choose Us Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#ff8c00] font-bold">—</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#211f54] leading-tight">
                  We Don&apos;t Just Teach,<br />We Build Futures
                </h2>
              </div>

              <p className="text-[#6d758f] text-base leading-relaxed">
                At GS Gacuba II A, we believe every student is unique. Our school environment, methodologies and result-oriented approach help students achieve their dreams in Rubavu and beyond.
              </p>

              {/* 4 Bullet Points */}
              <div className="space-y-3.5 pt-2">
                {checks.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff8c00] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-[#211f54]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="bg-[#5a6278] hover:bg-[#211f54] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-md transition-colors cursor-pointer"
                >
                  Know More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner: "You were never late, you just hesitated!" */}
      <section className="bg-gradient-to-r from-[#ff8c00] via-[#ff9416] to-[#404c70] relative overflow-hidden py-14 lg:py-18">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black leading-tight">
                You were never late, you just hesitated!
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Tired of boarding stresses? Expensive schools, academically unstable schools? Need a school that cares about your vision?
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={handleAdmission}
                  className="bg-white text-[#ff8c00] hover:bg-gray-50 font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply for admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleAsk}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-sm px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-video">
                <img
                  src={imgCtaRightImg}
                  alt="GS Gacuba Classroom Study"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Performing Students Section */}
      <section className="bg-[#ff8c00] py-16 lg:py-20 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#211f54] font-bold">—</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#211f54]">
                Success Should Be Recognized
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#211f54]">
              Best performing students
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: 2 Student Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {/* Card 1 */}
              <div className="bg-white text-[#211f54] rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-lg">
                <img
                  src={imgStudentPhoto1}
                  alt="Amina Uwase"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#ff8c00] shrink-0"
                />
                <div>
                  <h4 className="font-bold text-base text-[#211f54]">Amina Uwase</h4>
                  <p className="text-xs font-semibold text-[#6d758f]">MPC Stream, GS Gacuba II A</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-[#211f54] rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-lg">
                <img
                  src={imgStudentPhoto2}
                  alt="Grace Mukamana"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#ff8c00] shrink-0"
                />
                <div>
                  <h4 className="font-bold text-base text-[#211f54]">Grace Mukamana</h4>
                  <p className="text-xs font-semibold text-[#6d758f]">Ordinary Level, GS Gacuba II A</p>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Big Orange Quote Card */}
            <div className="lg:col-span-7 bg-[#211f54] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff8c00]/20 rounded-full blur-2xl pointer-events-none" />

              <blockquote className="text-xl sm:text-2xl font-medium text-white/95 leading-relaxed mb-8">
                &ldquo;With big dreams and daily effort, even the smallest steps can lead to the highest success.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={imgStudentPhoto3}
                  alt="Jean Paul Habimana"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#ff8c00] shrink-0"
                />
                <div>
                  <h4 className="font-bold text-lg text-white">Jean Paul Habimana</h4>
                  <p className="text-xs text-gray-300 font-medium">MS2, GS Gacuba II A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to join us? Section */}
      <section className="bg-[#211f54] text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to join us?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
            Grow your potential, excel in national examinations, and learn to lead.
          </p>
          <div className="pt-2">
            <button
              onClick={handleAdmission}
              className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              Register Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
