import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import {
  Trophy,
  Users,
  Medal,
  CheckCircle2,
  Play,
  X,
  ArrowRight,
} from "lucide-react";

interface SportsPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

// Sports Imagery Assets (Transparent Cutouts matching exact reference design)
const imgBasketballCutout = "/assets/sports-basketball-cutout.png";
const imgRwandanDancerCutout = "/assets/sports-rwandan-dancer-cutout.png";
const imgGoalkeeperCutout = "/assets/sports-goalkeeper-cutout.png";
const imgHeroBgOverlay = "/assets/hero-image-overlay.jpeg";
const imgCheeringCrowd = "/assets/sports-cheering-crowd.jpg";

// Discipline Card Top Images (Exact match to Reference Screenshot 3)
const imgDisciplineBasketball = "/assets/07117.png";
const imgDisciplineFootball = "/assets/046d0.png";
const imgDisciplineAthletics = "/assets/017b1.png";

export default function SportsPage({
  onNavigate,
  onOpenAdmission,
  onOpenAsk,
}: SportsPageProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setVideoModalOpen(false);
      }
    }
    if (videoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoModalOpen]);

  function handleAdmission() {
    if (onOpenAdmission) onOpenAdmission();
    else onNavigate("admissions");
  }

  function handleAsk() {
    if (onOpenAsk) onOpenAsk();
    else onNavigate("contact");
  }

  const disciplines = [
    {
      id: "basketball",
      title: "Basketball",
      desc: "Building strategy, agility and team spirit.",
      details:
        "Our basketball program features active boys and girls squads training on dedicated outdoor courts, developing agility, tactical strategy, and sportsmanship for regional secondary championships.",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      image: imgDisciplineBasketball,
      tag: "Boys & Girls Squads",
    },
    {
      id: "football",
      title: "Football",
      desc: "Strength, endurance and team work.",
      details:
        "GS Gacuba's varsity football team fosters high tactical coordination, physical endurance, and teamwork, competing regularly in the Rubavu inter-school cup finals.",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="12 7 15.5 10 14 14 10 14 8.5 10" fill="currentColor" />
          <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="21" y1="9" x2="15.5" y2="10" stroke="currentColor" strokeWidth="1.5" />
          <line x1="18" y1="19" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="19" x2="10" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="3" y1="9" x2="8.5" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      image: imgDisciplineFootball,
      tag: "Regional Finalists",
    },
    {
      id: "athletics",
      title: "Athletics",
      desc: "Speed, endurance and determination.",
      details:
        "Track and field sprint disciplines, middle-distance racing, long jump, and relay events nurturing individual discipline, explosive speed, and personal excellence.",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
        </svg>
      ),
      image: imgDisciplineAthletics,
      tag: "Track & Field",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col text-[#1e244b]">
      {/* 1. Large Orange Sports Hero Section (Exact match to Reference Screenshot 1) */}
      <section className="w-full pt-0 pb-6 overflow-hidden bg-white">
        <div className="w-full relative">
          {/* Main Orange Background Capsule with 360-degree round semicircle cap on the right */}
          <div className="w-[98%] lg:w-[97%] xl:w-[96%] bg-[#f58220] rounded-r-[180px] sm:rounded-r-[260px] md:rounded-r-[320px] lg:rounded-r-[380px] xl:rounded-r-[440px] relative overflow-visible shadow-lg">
            
            {/* Background Building Watermark Overlay */}
            <div className="absolute inset-0 rounded-r-[180px] sm:rounded-r-[260px] md:rounded-r-[320px] lg:rounded-r-[380px] xl:rounded-r-[440px] overflow-hidden pointer-events-none">
              <img
                src={imgHeroBgOverlay}
                alt=""
                className="w-full h-full object-cover opacity-15 mix-blend-multiply"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] xl:min-h-[660px] relative z-10 items-center">
              
              {/* Left Column: Text & Stats */}
              <div className="lg:col-span-6 xl:col-span-5 px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-14 flex flex-col justify-between text-left h-full z-20">
                <div className="space-y-3 sm:space-y-4">
                  {/* Category Eyebrow */}
                  <span className="inline-block text-white font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase">
                    OUR SPORTS
                  </span>

                  {/* 3-Line Large High-Contrast Headline - each line strictly unbroken */}
                  <h1 className="tracking-tight leading-[1.06]">
                    <span className="block font-black text-[#161c38] text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[64px] whitespace-nowrap">
                      Build strength.
                    </span>
                    <span className="block font-black text-[#161c38] text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[64px] whitespace-nowrap">
                      Build discipline.
                    </span>
                    <span className="block font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[64px] whitespace-nowrap">
                      Build champions.
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-normal pt-1">
                    Sports at Gacuba inspires teamwork,<br className="hidden sm:inline" />
                    discipline and excellnce on and off the field.
                  </p>
                </div>

                {/* Inline Stats Row - Strict Single Unbroken Horizontal Line */}
                <div className="pt-6 sm:pt-10 flex flex-nowrap items-center gap-3 sm:gap-5 md:gap-6 overflow-visible">
                  {/* Stat 1: 15+ Sports and Games */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <Trophy className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2] shrink-0" />
                    <div className="text-left">
                      <div className="text-white font-black text-xl sm:text-2xl md:text-3xl leading-none">15+</div>
                      <div className="text-white text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5 whitespace-nowrap">
                        Sports and Games
                      </div>
                    </div>
                  </div>

                  {/* Divider 1 */}
                  <div className="w-[1.5px] h-8 sm:h-9 bg-white/40 shrink-0" />

                  {/* Stat 2: 3 Teams */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2] shrink-0" />
                    <div className="text-left">
                      <div className="text-white font-black text-xl sm:text-2xl md:text-3xl leading-none">3</div>
                      <div className="text-white text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5 whitespace-nowrap">
                        Teams
                      </div>
                    </div>
                  </div>

                  {/* Divider 2 */}
                  <div className="w-[1.5px] h-8 sm:h-9 bg-white/40 shrink-0" />

                  {/* Stat 3: 20 Awards */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <Medal className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2] shrink-0" />
                    <div className="text-left">
                      <div className="text-white font-black text-xl sm:text-2xl md:text-3xl leading-none">20</div>
                      <div className="text-white text-[11px] sm:text-xs md:text-sm font-semibold mt-0.5 whitespace-nowrap">
                        Awards
                      </div>
                    </div>
                  </div>

                  {/* Divider 3 */}
                  <div className="w-[1.5px] h-8 sm:h-9 bg-white/40 shrink-0" />
                </div>
              </div>

              {/* Right Column: Seamless Cutout Athletes (NO cards, NO white frames) */}
              <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] xl:min-h-[640px] px-4 sm:px-8">
                
                {/* 1. Basketball Player Cutout (Carolina #44 reaching high with ball) */}
                <div className="absolute left-[2%] sm:left-[6%] lg:left-[4%] xl:left-[6%] bottom-0 lg:-top-6 z-20 pointer-events-none flex items-end">
                  <img
                    src={imgBasketballCutout}
                    alt="GS Gacuba basketball player soaring towards the basket"
                    className="h-[320px] sm:h-[420px] md:h-[480px] lg:h-[570px] xl:h-[630px] w-auto object-contain drop-shadow-xl select-none"
                  />
                </div>

                {/* 2. Traditional Rwandan Cultural Troupe Dancer Cutout (Center) */}
                <div className="absolute left-[36%] sm:left-[38%] lg:left-[36%] xl:left-[38%] bottom-0 z-30 pointer-events-none flex items-end">
                  <img
                    src={imgRwandanDancerCutout}
                    alt="Traditional Rwandan dancer in Umushanana attire"
                    className="h-[270px] sm:h-[350px] md:h-[400px] lg:h-[480px] xl:h-[530px] w-auto object-contain drop-shadow-xl select-none"
                  />
                </div>

                {/* 3. Goalkeeper Cutout (Diving horizontally to the right catching ball) */}
                <div className="absolute right-[0%] sm:right-[2%] lg:right-[1%] xl:right-[3%] bottom-[8%] sm:bottom-[10%] lg:bottom-[14%] z-20 pointer-events-none flex items-end">
                  <img
                    src={imgGoalkeeperCutout}
                    alt="GS Gacuba goalkeeper leaping horizontally catching the ball"
                    className="h-[240px] sm:h-[310px] md:h-[370px] lg:h-[450px] xl:h-[500px] w-auto object-contain drop-shadow-xl select-none"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections Container */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* 2. Section: Our Sport Disciplines (Exact match to Reference Screenshot 3) */}
        <section className="py-12 sm:py-16">
          {/* Eyebrow & Main Heading */}
          <div className="space-y-1.5 mb-8 sm:mb-12 text-left">
            <span className="text-[#ff8c00] font-extrabold text-xs sm:text-[13px] tracking-wider uppercase inline-block">
              OUR SPORT DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1e244b] tracking-tight">
              Excel in your favorite sport
            </h2>
          </div>

          {/* 3 Disciplines Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {disciplines.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveDiscipline(activeDiscipline === item.id ? null : item.id)}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.04)] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between text-left"
              >
                {/* Top Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Circular Orange Floating Icon Badge */}
                  <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-full bg-[#ff8c00] text-white flex items-center justify-center shadow-lg border-2 border-white">
                    {item.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-8 space-y-2.5 flex-1">
                  <h3 className="font-extrabold text-[#1e244b] text-2xl tracking-tight group-hover:text-[#ff8c00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {activeDiscipline === item.id && (
                    <div className="pt-3 border-t border-gray-100 text-xs text-gray-700 bg-orange-50/70 p-3.5 rounded-xl mt-2 animate-fadeIn">
                      {item.details}
                    </div>
                  )}
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between text-sm font-bold text-[#ff8c00]">
                  <span>{activeDiscipline === item.id ? "Show less" : "Learn more"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Section: Beyond the Game / Growing Champions for Life (Exact match to Reference Screenshot 4) */}
        <section className="py-12 sm:py-16 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow */}
              <span className="text-[#ff8c00] font-extrabold text-xs sm:text-[13px] tracking-wider uppercase inline-block">
                BEYOND THE GAME
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#1e244b] tracking-tight leading-tight">
                Growing champions<br />for life
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We believe sports shape character. Our students learn leadership, respect, resilience and how to achieve more together.
              </p>

              {/* Checklist items with orange circular checkmarks */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-[#1e244b]">
                    Modern sports materials
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-[#1e244b]">
                    Inter-school competitions
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-bold text-[#1e244b]">
                    Health, wellness and safety first
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleAdmission}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-sm min-h-[44px] px-6 py-3 rounded-lg shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Apply for Admission</span>
                  <span className="text-base leading-none">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Right Video / Media Card with Cheering Crowd Photo */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group cursor-pointer aspect-16/10 bg-gray-900"
              >
                <img
                  src={imgCheeringCrowd}
                  alt="GS Gacuba fans and students celebrating sports championship with confetti"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Center Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-white/20 animate-ping" />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#ff8c00] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-[#ff8c00] text-[#ff8c00] ml-1" />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#ff8c00] uppercase block">
                      SPORTS HIGHLIGHTS
                    </span>
                    <span className="text-base sm:text-lg font-black text-white">
                      SEE OUR CHAMPIONS IN ACTION
                    </span>
                  </div>
                  <span className="bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20">
                    Watch Reel &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Full-Width Golden Orange Call to Action Banner */}
      <section className="bg-[#f58220] py-12 sm:py-14 lg:py-16 w-full mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Trophy Icon & Text */}
          <div className="flex items-center gap-5 sm:gap-6 text-left">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center text-white shrink-0">
              <Trophy className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>

            <div className="space-y-1">
              <h2 className="font-black text-white text-2xl sm:text-3xl lg:text-[36px] leading-tight tracking-tight">
                Be part of the spirit.<br />Be part of the team.
              </h2>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <button
              onClick={handleAdmission}
              className="bg-white hover:bg-orange-50 text-[#f58220] font-bold text-sm min-h-[44px] px-6 sm:px-7 py-3 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Apply for admissions</span>
              <span className="text-base leading-none">&rarr;</span>
            </button>

            <button
              onClick={handleAsk}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold text-sm min-h-[44px] px-6 sm:px-7 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Talk to admissions</span>
              <span className="text-base leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clean Video Reel Modal */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Close Button Floating in Top Right */}
            <button
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white/90 hover:text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Clean HTML5 Video Player */}
            <div className="relative aspect-16/9 w-full bg-black flex items-center justify-center">
              <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                poster={imgCheeringCrowd}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
