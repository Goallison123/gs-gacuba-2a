import Footer from "../components/Footer";
import { Users } from "lucide-react";

interface LeadershipPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const leaders = [
  {
    name: "HABUMUGISHA Ernest",
    role: "Headmaster / Principal",
    bio: "Over 18 years of dedicated pedagogical leadership in Western Province education. Steering GS Gacuba II A to top-tier national examination rankings.",
    image: "/assets/e9332.png"
  },
  {
    name: "Jean Paul Nkurunziza",
    role: "Director of Studies (DOS)",
    bio: "Coordinates academic curricula, termly assessments, and teacher pedagogical development across all O-Level and A-Level streams.",
    image: "/assets/017b1.png"
  },
  {
    name: "Claire Uwimana",
    role: "Dean of Discipline & Student Welfare",
    bio: "Oversees student character growth, attendance compliance, guidance counseling, and parent-school communications.",
    image: "/assets/ef51e.png"
  },
  {
    name: "Eric Hakizimana",
    role: "Head of Science & MS2 Stream",
    bio: "Directs laboratory research, mathematics competitions, physics Olympiad coaching, and STEM innovation initiatives.",
    image: "/assets/07117.png"
  }
];

export default function LeadershipPage({ onNavigate }: LeadershipPageProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>School Administration &amp; Faculty</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              School Leadership
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Meet the educational leaders, administrators, and mentors guiding GS Gacuba II A in Rubavu District.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200 flex flex-col">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-bold text-orange-300 uppercase tracking-wider">{leader.role}</p>
                    <p className="font-bold text-sm leading-tight text-white">{leader.name}</p>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#6d758f] leading-relaxed">{leader.bio}</p>
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
