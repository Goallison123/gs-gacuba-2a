import Footer from "../components/Footer";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";

interface NewsPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const articles = [
  {
    id: 1,
    title: "NESA National Examinations 2026: GS Gacuba Achieves 98% Pass Rate",
    category: "Academic Excellence",
    date: "August 15, 2026",
    summary:
      "Our MS2 and Ordinary Level candidates have recorded outstanding performance in the national exams, with top distinctions in Mathematics and Physics across Western Province.",
    image: "/assets/ef51e.png",
  },
  {
    id: 2,
    title: "Admissions Open for 2026/2027 Academic Year",
    category: "Admissions",
    date: "August 10, 2026",
    summary:
      "Prospective students for Senior 1 (O-Level) and Senior 4 (MS2 & Arts and Humanities) are invited to submit their applications online or at the Rubavu campus registry.",
    image: "/assets/3421d.png",
  },
  {
    id: 3,
    title: "Inter-School Science Fair: Gacuba Robotics & Physics Club Wins 1st Prize",
    category: "Student Life",
    date: "July 28, 2026",
    summary:
      "Our student STEM innovators designed an automated solar-powered irrigation monitor, earning first place in the Rubavu Regional Technology & Innovation Showcase.",
    image: "/assets/1c7aa.png",
  },
  {
    id: 4,
    title: "New High-Speed ICT Computer Hub Commissioned at Campus",
    category: "Campus News",
    date: "July 12, 2026",
    summary:
      "With 50+ modern computing workstations and fiber internet connectivity, the new ICT center will bolster digital literacy and coding education for all students.",
    image: "/assets/b5865.png",
  },
];

export default function NewsPage({ onNavigate }: NewsPageProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <Newspaper className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Campus News &amp; Announcements</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              School News &amp; Updates
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Stay up to date with events, exam milestones, student awards, and developments from GS Gacuba II A.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200 flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff8c00] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#211f54] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => alert(`Full article: "${item.title}" will open.`)}
                    className="text-[#ff8c00] hover:text-[#e07b00] text-xs font-bold flex items-center gap-1.5 self-start cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
