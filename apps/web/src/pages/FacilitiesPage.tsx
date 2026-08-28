import Footer from "../components/Footer";
import { Building2, Laptop, FlaskConical, BookOpen, Trophy, Wifi } from "lucide-react";

interface FacilitiesPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const facilities = [
  {
    icon: Laptop,
    title: "High-Speed ICT Computer Hub",
    description: "Modern computer lab with 50+ connected workstations, high-speed fiber internet, and dedicated software for programming, robotics, and digital research.",
    highlights: ["Fiber Internet Connectivity", "Individual Workstations", "Software Development Tools"]
  },
  {
    icon: FlaskConical,
    title: "Physics & Science Laboratory",
    description: "Equipped with state-of-the-art apparatus for chemistry, physics, and biology experiments aligned with the NESA practical science curriculum.",
    highlights: ["Safety Compliant", "Precision Optical & Mechanical Instruments", "Hands-on Practical Sessions"]
  },
  {
    icon: BookOpen,
    title: "Academic Resource Library",
    description: "A peaceful, spacious learning sanctuary housing extensive curriculum textbooks, international literature, reference encyclopedias, and quiet study carrels.",
    highlights: ["5,000+ Physical Textbooks", "Digital Research Catalog", "Quiet Reading Zones"]
  },
  {
    icon: Trophy,
    title: "Multi-Sport Complex & Grounds",
    description: "Regulation-sized football pitch, volleyball, and basketball courts that host inter-school championships and daily physical education programs.",
    highlights: ["Football Pitch", "Volleyball & Basketball Courts", "Athletics Track"]
  },
  {
    icon: Wifi,
    title: "Smart Classrooms & Audio-Visual Hall",
    description: "Digital projection classrooms supporting multimedia lectures, presentations, educational film screenings, and inter-school academic debates.",
    highlights: ["Digital Projectors & Audio", "Flexible Seating Layouts", "Debate & Seminar Hall"]
  },
  {
    icon: Building2,
    title: "Administration & Guidance Suite",
    description: "Offices for school leadership, student counseling, career advice, and parent-teacher conference consultation rooms.",
    highlights: ["Student Counseling Desk", "Parent Consultation Rooms", "Admissions Support Office"]
  }
];

export default function FacilitiesPage({ onNavigate }: FacilitiesPageProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Modern Learning Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Campus Facilities
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Explore the laboratories, learning spaces, technology hubs, and athletic grounds that empower students at GS Gacuba II A.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, i) => {
              const Icon = fac.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#fff3e0] text-[#ff8c00] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#211f54] mb-2">{fac.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed mb-4">{fac.description}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-1.5">
                    {fac.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
