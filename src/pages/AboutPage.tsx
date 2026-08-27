import Footer from "../components/Footer";

const imgPortrait = "/assets/046d0.png";
const imgPortrait1 = "/assets/e7e5f.png";
const imgPortrait2 = "/assets/0b754.png";
const imgPortrait3 = "/assets/953b6.png";
const imgStory = "/assets/c1786.png";
const imgPortrait4 = "/assets/e9332.png";
const imgCampus = "/assets/612da.png";
const imgTeam1 = "/assets/e9332.png";
const imgTeam2 = "/assets/862fc.png";
const imgTeam3 = "/assets/ab04d.png";
const imgTeam4 = "/assets/ba963.png";
const iconMarker = "/assets/8caea.svg";
const iconArrow = "/assets/95d21.svg";
const iconArrowWhite = "/assets/b863c.svg";

const leaders = [
  { img: imgPortrait, name: "Aisha Umuhoza", role: "Headmistress, GS Gacuba II A", featured: true },
  { img: imgPortrait1, name: "Jean-Claude Uwimbabazi", role: "Deputy Headmaster", featured: false },
  { img: imgPortrait2, name: "Seraphine Mukamana", role: "School Manager", featured: false },
  { img: imgPortrait3, name: "Dr. Samuel Nshuti", role: "Dean of Academic Affairs", featured: false },
];

const staff = [
  { img: imgTeam1, name: "HABUMUGISHA Ernest", role: "Headmaster" },
  { img: imgTeam2, name: "MUKANYIRIGIRA Clarisse", role: "Dean of Studies" },
  { img: imgTeam3, name: "NIYONZIMA Haruna", role: "Dean of Discipline" },
  { img: imgTeam4, name: "Keira Battye", role: "Accountant" },
];

const highlights = ["Science lab", "ICT Labs", "Library", "Play fields"];

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[580px] lg:min-h-[680px] overflow-hidden bg-[#0c3f69]">
        {/* Background campus photo */}
        <img src={imgStory} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />

        {/* Orange motif bar */}
        <div
          className="absolute left-[-60px] top-[10%] w-[180px] h-[560px] bg-[#f7951d] opacity-90 rounded-lg"
          style={{ transform: "rotate(8deg)" }}
        />

        {/* Content overlay */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px] py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center min-h-[580px]">
          <div className="flex flex-col gap-6 pt-10 lg:pt-0">
            <p className="font-bold text-[#f7951d] text-[13px] uppercase tracking-widest">Our School</p>
            <h1 className="font-bold text-[#daad1a] text-4xl sm:text-5xl lg:text-[60px] leading-[1.05]">
              Shaping futures at GS Gacuba II A
            </h1>
            <p className="text-[#0c3f69] text-base lg:text-[17px] leading-[28px] max-w-[520px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-semibold bg-white/80 rounded-xl px-4 py-3">
              Welcome to the official GS Gacuba 2A website! Here, our community can explore school news, academic resources, and upcoming events as we work together to nurture academic excellence, strong values, and future leaders.
            </p>
          </div>

          {/* Headmistress card */}
          <div className="flex justify-end">
            <div className="bg-[#f7951d] rounded-2xl p-4 shadow-[0px_10px_28px_rgba(21,22,45,0.1)] w-full max-w-[380px]">
              <div className="h-[200px] sm:h-[240px] rounded-xl overflow-hidden mb-4">
                <img src={imgPortrait4} alt="HABUMUGISHA Ernest" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-2xl font-normal">HABUMUGISHA Ernest</p>
                <p className="text-[#fff2de] text-sm">Headmistress, GS Gacuba II A</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation & Campus */}
      <section className="bg-[#fff9ef]">
        <div className="grid lg:grid-cols-[820px_1fr] min-h-[540px]">
          {/* Campus image */}
          <div className="relative overflow-hidden min-h-[300px]">
            <img src={imgCampus} alt="GS Gacuba II A campus" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,20,47,0.67)] to-transparent h-44" />
            <div className="absolute top-10 left-8 lg:left-[128px]">
              <h2 className="text-white text-3xl lg:text-[42px] font-normal leading-tight">Our foundation. Our campus.</h2>
              <p className="text-white text-base lg:text-[18px] mt-1">A place designed for curiosity and belonging</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 px-6 sm:px-10 lg:px-16 py-14">
            <p className="font-bold text-[#f7951d] text-[13px] uppercase tracking-widest">General School</p>
            <h3 className="font-normal text-[#11142f] text-2xl lg:text-[34px] leading-tight">A foundation built for the future</h3>
            <p className="text-[#656777] text-base lg:text-[17px] leading-[1.55]">
              GS Gacuba II A grew from a clear promise: give young people the knowledge, character, and confidence to shape Rwanda&apos;s next chapter. Our school brings rigorous academics and a caring community together.
            </p>
            <p className="font-bold text-[#11142f] text-[18px]">School highlights</p>
            <div className="flex flex-col gap-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5">
                  <img src={iconMarker} alt="" className="size-2 shrink-0" />
                  <p className="text-[#11142f] text-base">{h}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate("gallery")}
              className="self-start bg-[#20224f] text-white text-sm px-6 py-3.5 rounded-lg hover:bg-[#2d3065] transition-colors cursor-pointer"
            >
              Explore our school →
            </button>
          </div>
        </div>
      </section>

      {/* Meet our visionary leaders */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-8 lg:px-[128px]">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-[#11142f] text-3xl lg:text-[42px] font-normal">Meet our visionary leaders</h2>
            <p className="text-[#656777] text-base mt-1.5">The team nurturing every learner&apos;s potential</p>
          </div>
          <div className="flex gap-2.5">
            <button className="border border-[#e8e5df] size-[42px] rounded-lg flex items-center justify-center text-[#656777] text-xl hover:bg-gray-50 cursor-pointer">
              ‹
            </button>
            <button className="bg-[#fff2de] size-[42px] rounded-lg flex items-center justify-center text-[#f7951d] text-xl hover:bg-[#ffe8c0] cursor-pointer">
              ›
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map(({ img, name, role, featured }) => (
            <div
              key={name}
              className={`rounded-2xl overflow-hidden shadow-[0px_10px_28px_rgba(21,22,45,0.1)] flex flex-col gap-2.5 p-2.5 border ${
                featured ? "bg-[#f7951d] border-[#f7951d]" : "bg-white border-[#e8e5df]"
              }`}
            >
              <div className="h-[180px] rounded-xl overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="px-1 pb-1">
                <p className={`text-xl font-normal ${featured ? "text-white" : "text-[#11142f]"}`}>{name}</p>
                <p className={`text-[13px] mt-0.5 ${featured ? "text-[#fff2de]" : "text-[#656777]"}`}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The school leadership */}
      <section className="bg-white py-10 px-4 sm:px-8">
        <div className="text-center mb-12 max-w-[754px] mx-auto">
          <h2 className="font-bold text-[#19191b] text-4xl lg:text-5xl leading-[72px]">The school leadership</h2>
          <p className="text-[#5a5c62] text-lg leading-7 mt-2">
            Welcome to the heart of Groupe Scolaire Gacuba II A. Our dedicated staff works hard every day to guide, inspire, and support every student.
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={() => onNavigate("admissions")}
              className="bg-[#f8f8f8] flex items-center gap-2 h-10 px-4 rounded-xl text-[#19191b] font-medium text-sm hover:bg-gray-100 cursor-pointer"
            >
              Apply Now
              <img src={iconArrow} alt="" className="size-4" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-[#6236f5] flex items-center gap-2 h-10 px-4 rounded-xl text-white font-medium text-sm w-[140px] justify-center hover:bg-[#5220e8] cursor-pointer"
            >
              Contact Us
              <img src={iconArrowWhite} alt="" className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {staff.map(({ img, name, role }) => (
            <div key={name} className="relative rounded-xl overflow-hidden bg-[#656777] h-[380px] sm:h-[440px]">
              <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#f8f8f8] rounded-xl px-6 py-4">
                <p className="font-bold text-[#19191b] text-lg leading-7">{name}</p>
                <p className="font-medium text-[#6236f5] text-sm leading-[25px]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA before footer */}
      <section className="py-10 px-4 sm:px-8 flex justify-center gap-4">
        <button
          onClick={() => onNavigate("admissions")}
          className="bg-[#ff8c00] text-white font-semibold text-sm px-[18px] py-3.5 rounded-md hover:bg-[#e67c00] transition-colors shadow-sm cursor-pointer"
        >
          Apply for Admission
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-white/10 border border-[#ff8c00]/40 text-[#ff8c00] font-semibold text-sm px-5 py-3.5 rounded-md hover:bg-[#ff8c00]/10 transition-colors cursor-pointer"
        >
          Ask About Us
        </button>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
