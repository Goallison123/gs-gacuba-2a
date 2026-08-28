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
  { name: "HABUMUGISHA Ernest", role: "Headmaster", featured: false },
  { name: "HABUMUGISHA Ernest", role: "Headmaster", featured: true },
  { name: "HABUMUGISHA Ernest", role: "Headmaster", featured: false },
  { name: "HABUMUGISHA Ernest", role: "Headmaster", featured: false },
];

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

export default function AboutPage({ onNavigate, onOpenAdmission, onOpenAsk }: AboutPageProps) {
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
      {/* Hero Section: "Shaping futures at GS Gacuba II A" */}
      <section className="bg-gradient-to-r from-[#0c3f69] via-[#124b7a] to-[#1c5f94] text-white relative overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Curved orange ribbon / motif */}
        <div
          className="absolute left-[-80px] top-[5%] w-[220px] h-[640px] bg-[#ff8c00] opacity-85 rounded-3xl pointer-events-none transform -rotate-12 blur-xs"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[#ff8c00] font-bold">—</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                  Our School
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black leading-[1.15] text-white">
                Shaping futures at <br className="hidden sm:inline" />
                <span className="text-[#ff8c00]">GS Gacuba II A</span>
              </h1>

              <p className="text-gray-200 text-base sm:text-[17px] leading-relaxed max-w-xl font-normal">
                Welcome to the official GS Gacuba 2A website! Here, our community can explore school news, academic resources, and upcoming events as we work together to nurture academic excellence, strong values, and future leaders.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={handleAdmission}
                  className="bg-white text-[#ff8c00] hover:bg-[#fff7ed] font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Apply for admission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* Right Card: Classroom Image + Headmaster Overlay */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Classroom Background Photo */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-4/3">
                  <img
                    src={imgHeroStory}
                    alt="Students in classroom at GS Gacuba II A"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlaid Orange Card with Headmaster */}
                <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-[#ff8c00] text-white p-3 sm:p-4 rounded-2xl shadow-2xl border-2 border-white/40 max-w-[240px] sm:max-w-[260px]">
                  <div className="rounded-xl overflow-hidden bg-[#211f54]/20 aspect-square mb-2.5 max-h-[140px]">
                    <img
                      src={imgHeadmaster}
                      alt="HABUMUGISHA Ernest"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h4 className="font-bold text-sm leading-tight">HABUMUGISHA Ernest</h4>
                  <p className="text-[11px] text-white/90 font-medium">Headmaster, GS Gacuba II A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "A foundation built for the future" Section */}
      <section className="bg-[#fff9ef] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Campus Aerial Photo */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] relative">
                <img
                  src={imgCampus}
                  alt="GS Gacuba II A Campus Buildings in Rubavu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-xl font-bold">Our Foundation. Our Campus.</h3>
                  <p className="text-xs text-white/80">A place designed for curiosity, discipline and belonging</p>
                </div>
              </div>
            </div>

            {/* Right Column: General School Content & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#ff8c00] font-bold">—</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c00]">
                    General School
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#211f54] leading-tight">
                  A foundation built for the future
                </h2>
              </div>

              <p className="text-[#656777] text-base leading-relaxed">
                GS Gacuba II A grew from a clear promise: give young people the knowledge, character, and confidence to shape Rwanda&apos;s next chapter. Our school brings rigorous academics and a caring community together.
              </p>

              <div>
                <h4 className="font-bold text-[#211f54] text-base mb-3">School highlights</h4>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff8c00] shrink-0" />
                      <span className="text-sm font-medium text-[#211f54]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("gallery")}
                  className="bg-[#211f54] hover:bg-[#2d2a70] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore our school</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "The school leadership" Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#ff8c00]/15 via-[#fff3e0] to-white overflow-hidden">
        {/* Halftone dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ff8c00 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px"
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Centered Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#211f54]">
              The school leadership
            </h2>
            <p className="text-[#5a5c62] text-sm sm:text-base leading-relaxed">
              Welcome to the heart of Groupe Scolaire Gacuba II A. Our dedicated staff works hard every day to guide, inspire, and support every student.
            </p>
          </div>

          {/* 4 Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-300"
              >
                {/* Arched Top Image Container */}
                <div className="bg-[#656777] h-[280px] sm:h-[300px] relative overflow-hidden flex items-end justify-center">
                  <img
                    src={imgHeadmaster}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {leader.featured && (
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#ff8c00] ring-4 ring-white/50" />
                  )}
                </div>

                {/* Bottom Info Card */}
                <div className="p-5 bg-white text-center flex flex-col items-center">
                  <h4 className="font-bold text-[#211f54] text-base leading-tight">
                    {leader.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#ff8c00] mt-1">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <button
              onClick={handleAdmission}
              className="bg-white hover:bg-gray-50 text-[#ff8c00] border-2 border-[#ff8c00] font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply for admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleAsk}
              className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              Ask about us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
