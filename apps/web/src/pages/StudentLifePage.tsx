import Footer from "../components/Footer";
import { Users, Music, Trophy, BookOpen, Compass, HeartHandshake, ArrowRight } from "lucide-react";

interface StudentLifePageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const clubs = [
  {
    icon: Music,
    title: "Itorero & Traditional Dance Troupe",
    desc: "Celebrating Rwandan culture, drumming, traditional poetry (Ibyivugo), and choral performance."
  },
  {
    icon: Trophy,
    title: "Athletics, Football & Volleyball",
    desc: "Inter-school tournaments, track & field events, and fitness training on our regulation sports fields."
  },
  {
    icon: Compass,
    title: "STEM, Coding & Robotics Club",
    desc: "Hands-on electronics, Python coding, and science project exhibitions in our ICT lab."
  },
  {
    icon: BookOpen,
    title: "Debate & Model United Nations",
    desc: "Developing public speaking eloquence, critical discourse, and international diplomacy skills."
  },
  {
    icon: HeartHandshake,
    title: "Red Cross & Community Service",
    desc: "First aid training, peer health mentorship, and local community outreach across Rubavu."
  },
  {
    icon: Users,
    title: "Environment & Conservation Club",
    desc: "Lake Kivu watershed protection, tree planting, and sustainable school garden initiatives."
  }
];

export default function StudentLifePage({ onNavigate, onOpenAdmission }: StudentLifePageProps) {
  function handleAdmission() {
    if (onOpenAdmission) onOpenAdmission();
    else onNavigate("admissions");
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Holistic Student Development</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Student Life &amp; Co-Curriculars
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Education at GS Gacuba II A extends far beyond textbooks. Discover our vibrant sports, arts, cultural, and innovation clubs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => {
              const Icon = club.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-200 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#fff3e0] text-[#ff8c00] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#211f54] mb-2">{club.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed">{club.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#211f54] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black">Experience the Vibrant Life at Gacuba</h3>
            <p className="text-gray-300 text-sm max-w-lg mx-auto">
              Join a caring school community where talent is nurtured and academic ambition is realized.
            </p>
            <div className="pt-2">
              <button
                onClick={handleAdmission}
                className="bg-[#ff8c00] hover:bg-[#e07b00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md inline-flex items-center gap-2"
              >
                <span>Enroll for 2026/2027</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
