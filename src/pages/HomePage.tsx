import Footer from "../components/Footer";

const imgHeroStudent = "/assets/3421d.png";
const imgAv1 = "/assets/4b47b.png";
const imgAv2 = "/assets/ee951.png";
const imgAv3 = "/assets/e6662.png";
const imgAv4 = "/assets/a5c21.png";
const imgCtaRightImg = "/assets/b5865.png";
const imgWhyPhoto = "/assets/1c7aa.png";
const imgStudentPhoto = "/assets/07117.png";
const imgStudentPhoto1 = "/assets/017b1.png";
const imgStudentPhoto2 = "/assets/ef51e.png";
const iconCalculator = "/assets/afb13.svg";
const iconBook = "/assets/c4a68.svg";
const iconLayers = "/assets/db130.svg";
const iconArrowRight = "/assets/6c830.svg";
const iconUsers = "/assets/c9358.svg";
const iconHelp = "/assets/e3d67.svg";
const iconStatWrap = "/assets/ac42c.svg";
const iconCtaDeco1 = "/assets/89f2a.svg";
const iconCtaDeco2 = "/assets/ce5f6.svg";
const iconCheck = "/assets/f6f5a.svg";
const iconArrowOrange = "/assets/035ba.svg";

const streams = [
  {
    icon: iconCalculator,
    iconBg: "#fff3e0",
    title: "MS2",
    desc: "A level learning pathway focusing on Mathematics, Economics, Geography, and Physics.",
  },
  {
    icon: iconBook,
    iconBg: "#e8f4fd",
    title: "Arts and Humanities",
    desc: "Upper secondary (A-Level) learning pathway focusing on History, Literature in English, Geography, and Psychology.",
  },
  {
    icon: iconLayers,
    iconBg: "#f0fdf4",
    title: "Ordinary Level",
    desc: "Three-year lower secondary education cycle (Senior 1–3) with a competence-based core curriculum concluding with national examinations.",
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
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#ff8c00] relative overflow-hidden min-h-[580px] lg:min-h-[720px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px] py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold text-[#211f54] text-4xl sm:text-5xl lg:text-[56px] leading-[1.14] uppercase">
                  Shaping the Leaders and Thinkers of Tomorrow
                </h1>
              </div>
              <p className="text-[#353e5c] text-base lg:text-[17px] leading-[28px] max-w-[480px]">
                Welcome to GS Gacuba II A, providing a foundation of academic excellence in Rubavu across Ordinary Level and advanced MS2 and Arts and Humanities streams.
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[imgAv1, imgAv2, imgAv3, imgAv4].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="size-10 rounded-full border-2 border-[#ff8c00] object-cover"
                      style={{ marginLeft: i > 0 ? "-10px" : "0" }}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-bold text-[#211f54] text-[15px]">800+ Students</p>
                  <p className="text-[#353e5c] text-[13px]">Currently enrolled</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate("admissions")}
                  className="bg-[#c3b091] text-white font-semibold text-sm px-[18px] py-3.5 rounded-md hover:bg-[#b09d7e] transition-colors shadow-sm cursor-pointer"
                >
                  Apply for Admission
                </button>
                <button
                  onClick={() => onNavigate("academics")}
                  className="bg-[#f8faff] border border-[#e1e4ed] text-[#6d758f] font-semibold text-sm px-[18px] py-3.5 rounded-md hover:bg-white transition-colors cursor-pointer"
                >
                  Explore our Streams
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-square lg:aspect-auto lg:h-[560px]">
                <img
                  src={imgHeroStudent}
                  alt="Student at GS Gacuba II A"
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute top-10 right-0 bg-white rounded-2xl px-5 py-4 shadow-[0px_8px_12px_rgba(25,33,61,0.19)] flex flex-col gap-1">
                  <p className="font-extrabold text-[#ff8c00] text-2xl leading-none">95%+</p>
                  <p className="font-medium text-[#6d758f] text-xs">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#211f54]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {[
              { icon: iconUsers, value: "800+", label: "Students Enrolled" },
              { icon: iconHelp, value: "NESA", label: "Accreditation" },
              { icon: iconStatWrap, value: "23", label: "Staff" },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex gap-4 items-center px-0 sm:px-10 py-8 first:pl-0 last:pr-0 w-full sm:w-auto">
                <div className="bg-white/10 rounded-xl size-12 flex items-center justify-center shrink-0">
                  <img src={icon} alt="" className="size-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-extrabold text-white text-2xl leading-none">{value}</p>
                  <p className="text-[#b4b9c9] text-[13px]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px]">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-[#ff8c00] h-[3px] w-5 rounded-full" />
                <p className="text-[#ff8c00] text-[13px] font-bold uppercase tracking-[1.04px]">Explore Our School</p>
              </div>
              <h2 className="font-extrabold text-[#211f54] text-3xl lg:text-[36px] leading-[44px]">Streams</h2>
            </div>
            <button
              onClick={() => onNavigate("academics")}
              className="flex items-center gap-1.5 text-[#ff8c00] text-sm font-semibold hover:underline cursor-pointer"
            >
              View levels and streams details
              <img src={iconArrowOrange} alt="" className="size-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {streams.map(({ icon, iconBg, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#e1e4ed] rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="rounded-xl size-12 flex items-center justify-center shrink-0" style={{ backgroundColor: iconBg }}>
                  <img src={icon} alt="" className="size-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[#211f54] text-[15px]">{title}</p>
                  <p className="text-[#6d758f] text-[13px] leading-5">{desc}</p>
                </div>
                <button className="flex items-center gap-1 text-[#ff8c00] text-[13px] font-semibold mt-auto hover:underline cursor-pointer">
                  Learn More
                  <img src={iconArrowRight} alt="" className="size-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f8faff] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[445px]">
              <img src={imgWhyPhoto} alt="Students learning" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-2">
                <div className="bg-[#ff8c00] h-[3px] w-5 rounded-full" />
                <p className="text-[#ff8c00] text-[13px] font-bold uppercase tracking-[1.04px]">Why Choose Us</p>
              </div>
              <h2 className="font-extrabold text-[#211f54] text-3xl lg:text-[36px] leading-[44px]">
                We Don&apos;t Just Teach,<br />We Build Futures
              </h2>
              <p className="text-[#6d758f] text-base leading-[26px]">
                At GS Gacuba II A, we believe every student is unique. Our school environment, methodologies and result-oriented approach help students achieve their dreams in Rubavu and beyond.
              </p>

              <div className="flex flex-col gap-4">
                {checks.map((text) => (
                  <div key={text} className="flex gap-3 items-center">
                    <div className="bg-[#ff8c00] rounded-xl size-6 flex items-center justify-center shrink-0">
                      <img src={iconCheck} alt="" className="size-3" />
                    </div>
                    <p className="text-[#353e5c] text-[15px] font-semibold">{text}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate("about")}
                className="self-start bg-[#6d758f] text-white font-semibold text-sm px-[18px] py-3.5 rounded-md hover:bg-[#5a6278] transition-colors shadow-sm cursor-pointer"
              >
                Know More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#353e5c]" />
        <div className="absolute -left-20 -top-20 size-80 opacity-20">
          <img src={iconCtaDeco1} alt="" className="w-full h-full" />
        </div>
        <div className="absolute right-40 top-10 size-60 opacity-20">
          <img src={iconCtaDeco2} alt="" className="w-full h-full" />
        </div>
        <div className="absolute right-0 inset-y-0 w-[440px] opacity-25 hidden lg:block">
          <img src={imgCtaRightImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px] py-16 lg:py-20">
          <div className="max-w-[700px] flex flex-col gap-6">
            <h2 className="font-extrabold text-white text-3xl lg:text-[40px] leading-[50px]">
              You were never late, you just hesitated!
            </h2>
            <p className="text-white/80 text-base lg:text-[17px] leading-[28px]">
              Tired of boarding stresses? Expensive schools, academically unstable schools? Need a school that cares about your vision?
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("admissions")}
                className="bg-white text-[#ff8c00] font-semibold text-sm px-[18px] py-3.5 rounded-md hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              >
                Apply for Admission
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="bg-white/10 border border-white/30 text-white font-semibold text-sm px-5 py-3.5 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
              >
                Ask About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Performing Students / Testimonials */}
      <section className="bg-[#ff8c00] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-white h-[3px] w-5 rounded-full" />
                <p className="text-white text-[13px] font-bold uppercase tracking-[1.04px]">Success Should Be Recognized</p>
                <div className="bg-white h-[3px] w-5 rounded-full" />
              </div>
              <h2 className="font-extrabold text-[#211f54] text-3xl lg:text-[36px] leading-[44px]">
                Best Performing Students
              </h2>

              <div className="flex flex-col gap-4 mt-4">
                {/* Testimonial card 1 */}
                <div className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4">
                  <img src={imgStudentPhoto2} alt="Amina Uwase" className="size-12 rounded-full object-cover shrink-0" />
                  <div>
                    <p className="font-bold text-[#211f54] text-[14px]">Amina Uwase</p>
                    <p className="text-[#6d758f] text-[12px]">MS2 Stream, GS Gacuba II A</p>
                  </div>
                </div>
                {/* Testimonial card 2 */}
                <div className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4">
                  <img src={imgStudentPhoto} alt="Grace Mukamana" className="size-12 rounded-full object-cover shrink-0" />
                  <div>
                    <p className="font-bold text-[#211f54] text-[14px]">Grace Mukamana</p>
                    <p className="text-[#6d758f] text-[12px]">Ordinary Level, GS Gacuba II A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured testimonial */}
            <div className="bg-[#ff8c00] border border-white/30 rounded-2xl p-8 shadow-[0px_8px_24px_rgba(255,140,0,0.19)] relative overflow-hidden">
              <div className="absolute top-0 right-0 size-24 bg-white/10 rounded-bl-[80px]" />
              <p className="text-white text-base lg:text-[17px] leading-[28px] mb-8 relative z-10">
                &ldquo;With big dreams and daily effort, even the smallest steps can lead to the highest success.&rdquo;
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <img src={imgStudentPhoto1} alt="Jean Paul Habimana" className="size-12 rounded-full object-cover border-2 border-white/50" />
                <div>
                  <p className="font-bold text-white text-[14px]">Jean Paul Habimana</p>
                  <p className="text-white/60 text-[12px]">MS2, GS Gacuba II A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join CTA */}
      <section className="bg-[#ff8c00] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#211f54]/80" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px] py-20 text-center">
          <h2 className="font-extrabold text-[#6d758f] text-4xl lg:text-5xl leading-[1.2] mb-4">
            Ready to join us?
          </h2>
          <p className="text-white text-base lg:text-[16px] leading-[24px] mb-8 max-w-md mx-auto">
            Grow your potential and learn to lead.
          </p>
          <button
            onClick={() => onNavigate("admissions")}
            className="bg-[#c3b091] text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-[#b09d7e] transition-colors cursor-pointer"
          >
            Register today
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
