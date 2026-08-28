import Footer from "../components/Footer";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";

interface AcademicsPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const programs = [
  {
    id: "ms2",
    title: "MS2 — Mathematics, Economics, Geography & Physics",
    level: "Advanced Upper Secondary (A-Level / Senior 4 – Senior 6)",
    badge: "Sciences & Economics",
    description:
      "A rigorous, STEM-focused combination empowering students with mathematical mastery, analytical economic thinking, geospatial inquiry, and applied physics. Prepares candidates for engineering, data analytics, economics, and architectural higher education.",
    subjects: [
      "Advanced Mathematics (Pure & Applied)",
      "Physics & Practical Laboratory Experiments",
      "Economics & Rwandan National Financial Frameworks",
      "Geography & Spatial Cartography",
      "General Studies & Communication Skills (GSCS)",
      "Subsidiary ICT & Computing"
    ],
    careers: ["Civil / Electrical Engineering", "Actuarial Science & Finance", "Data Science & Software", "Urban Planning & Architecture"]
  },
  {
    id: "arts",
    title: "Arts and Humanities — History, Literature, Geography & Psychology",
    level: "Upper Secondary (A-Level / Senior 4 – Senior 6)",
    badge: "Social Sciences & Languages",
    description:
      "Nurturing critical thinkers, eloquent writers, cultural custodians, and diplomatic leaders through in-depth analysis of world history, African socio-political developments, literary appreciation, and human psychology.",
    subjects: [
      "History of Rwanda & Pan-African Integration",
      "Literature in English (Drama, Poetry, Prose)",
      "Geography & Human Development",
      "Psychology & Behavioral Ethics",
      "General Studies & Communication Skills",
      "Subsidiary French & ICT"
    ],
    careers: ["Law & Constitutional Advocacy", "Diplomacy & International Relations", "Journalism & Media Communications", "Education & Public Administration"]
  },
  {
    id: "olevel",
    title: "Ordinary Level (O-Level) — Senior 1 to Senior 3",
    level: "Lower Secondary Education (3-Year Competence-Based Cycle)",
    badge: "Core Foundations",
    description:
      "Comprehensive, competence-based curriculum (CBC) designed to instill robust literacy, scientific curiosity, computational thinking, and civic values, leading to the NESA National Ordinary Level Certificate.",
    subjects: [
      "Mathematics & Quantitative Logic",
      "Physics, Chemistry & Biology",
      "English, Kinyarwanda & French",
      "History & Citizenship",
      "Geography & Environment",
      "Information & Communication Technology (ICT)",
      "Physical Education & Sports"
    ],
    careers: ["Progression to Advanced A-Level Streams (MS2, Arts, Sciences)", "TVET Specialized Pathways"]
  }
];

export default function AcademicsPage({ onNavigate, onOpenAdmission }: AcademicsPageProps) {
  function handleAdmission() {
    if (onOpenAdmission) onOpenAdmission();
    else onNavigate("admissions");
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Banner */}
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#ff8c00]/15 blur-3xl pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Competence-Based Rwandan National Curriculum (REB / NESA)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Academic Streams &amp; Programs
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              At GS Gacuba II A, we deliver rigorous academic instruction grounded in STEM, economics, humanities, and practical laboratory mastery for young scholars in Rubavu.
            </p>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#fff3e0] text-[#ff8c00] text-xs font-bold">
                    {prog.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{prog.level}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#211f54] leading-tight">
                  {prog.title}
                </h2>
                <p className="text-[#6d758f] text-sm sm:text-base leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#211f54] mb-3">
                    Key Subject Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {prog.subjects.map((subj) => (
                      <div key={subj} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#ff8c00] shrink-0" />
                        <span>{subj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#fff9ef] border border-[#ffe8c0] rounded-2xl p-6 space-y-5">
                <div>
                  <h4 className="font-bold text-[#211f54] text-sm mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#ff8c00]" />
                    <span>Target Career Outcomes</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {prog.careers.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#ffe8c0] space-y-3">
                  <p className="text-xs text-gray-500">
                    Admission is open for 2026/27 academic year intake.
                  </p>
                  <button
                    onClick={handleAdmission}
                    className="w-full bg-[#ff8c00] hover:bg-[#e07b00] text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Apply for this Stream</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
