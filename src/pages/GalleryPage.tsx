import { useState } from "react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const imgKidsPeeking = "/assets/peeping-student.png";
const imgStudentsBlue = "/assets/720a5.png";
const imgLabStudents = "/assets/046d0.png";
const imgClassroom = "/assets/c1786.png";
const imgStudyStudents = "/assets/b5865.png";
const imgCampus = "/assets/612da.png";
const schoolLogo = "/assets/22de8.png";

interface GalleryCardData {
  id: string;
  category: "School life" | "Events" | "Academics" | "Sports";
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  initialLikes: number;
}

const GALLERY_ITEMS: GalleryCardData[] = [
  {
    id: "gal-1",
    category: "School life",
    imageUrl: imgStudentsBlue,
    title: "They were once bored!",
    subtitle: "Have you ever been to Gacuba?",
    description: "Smile isn't about play only, the learning environment we create at Gacuba proves it.",
    initialLikes: 142
  },
  {
    id: "gal-2",
    category: "School life",
    imageUrl: imgStudentsBlue,
    title: "They were once bored!",
    subtitle: "Have you ever been to Gacuba?",
    description: "Smile isn't about play only, the learning environment we create at Gacuba proves it.",
    initialLikes: 115
  },
  {
    id: "gal-3",
    category: "School life",
    imageUrl: imgStudentsBlue,
    title: "They were once bored!",
    subtitle: "Have you ever been to Gacuba?",
    description: "Smile isn't about play only, the learning environment we create at Gacuba proves it.",
    initialLikes: 98
  },
  {
    id: "gal-4",
    category: "Academics",
    imageUrl: imgLabStudents,
    title: "Hands-on Science Hub",
    subtitle: "Have you ever been to Gacuba?",
    description: "Practical physics, chemistry, and biology labs empowering Rwanda's future scientists.",
    initialLikes: 98
  },
  {
    id: "gal-5",
    category: "Academics",
    imageUrl: imgClassroom,
    title: "Focused Classroom Culture",
    subtitle: "Have you ever been to Gacuba?",
    description: "Collaborative peer learning and dedicated teacher mentorship in every stream.",
    initialLikes: 115
  },
  {
    id: "gal-6",
    category: "Events",
    imageUrl: imgStudyStudents,
    title: "National Exam Celebration",
    subtitle: "Have you ever been to Gacuba?",
    description: "Recognizing high achievers in NESA examinations with awards and distinctions.",
    initialLikes: 204
  },
  {
    id: "gal-7",
    category: "Sports",
    imageUrl: imgCampus,
    title: "Athletics & Sports Day",
    subtitle: "Have you ever been to Gacuba?",
    description: "Inter-school football, volleyball, and basketball tournaments promoting teamwork.",
    initialLikes: 130
  }
];

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

export default function GalleryPage({ onNavigate, onOpenAdmission, onOpenAsk }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [likesState, setLikesState] = useState<Record<string, { liked: boolean; disliked: boolean }>>({
    "gal-1": { liked: false, disliked: false },
    "gal-2": { liked: false, disliked: false },
    "gal-3": { liked: false, disliked: false },
    "gal-4": { liked: false, disliked: false },
    "gal-5": { liked: false, disliked: false },
    "gal-6": { liked: false, disliked: false },
  });

  const categories = ["All", "School life", "Events", "Academics", "Sports"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  function handleLike(id: string) {
    setLikesState(prev => {
      const current = prev[id] || { liked: false, disliked: false };
      return {
        ...prev,
        [id]: { liked: !current.liked, disliked: false }
      };
    });
  }

  function handleDislike(id: string) {
    setLikesState(prev => {
      const current = prev[id] || { liked: false, disliked: false };
      return {
        ...prev,
        [id]: { liked: false, disliked: !current.disliked }
      };
    });
  }

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
      <section className="relative bg-white overflow-hidden min-h-[480px] lg:min-h-[520px] flex items-center border-b border-gray-100/60">
        {/* Right side large orange curved backdrop */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] lg:w-[48%] bg-[#ff8c00] rounded-bl-[140px] lg:rounded-bl-[200px] pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Decorative Peeping Student Cutout entering from the far-left edge */}
        <div 
          className="absolute left-0 bottom-0 sm:bottom-0 md:bottom-0 w-[170px] sm:w-[220px] md:w-[270px] lg:w-[320px] xl:w-[360px] pointer-events-none z-10 select-none -translate-x-[20%] sm:-translate-x-[15%] md:-translate-x-[10%] lg:-translate-x-[8%]"
          aria-hidden="true"
        >
          <img
            src={imgKidsPeeking}
            alt="GS Gacuba student peeking in"
            className="w-full h-auto object-contain object-left-bottom"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14 relative z-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content Column with comfortable left padding for the peeping student */}
            <div className="md:col-span-7 lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5 pl-24 sm:pl-32 md:pl-44 lg:pl-56 xl:pl-60">
              <div className="space-y-0.5">
                <h1 className="font-extrabold text-[#1e244b] text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1]">
                  See it.<br />
                  Feel it.<br />
                  Live it.
                </h1>
              </div>

              {/* Pill / Floating Quote Card */}
              <div className="bg-white border border-gray-200/90 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xs max-w-md">
                <p className="text-xs sm:text-sm font-semibold text-[#1e244b]">
                  At Gacuba, success isn&apos;t optional, it&apos;s the routine.
                </p>
              </div>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#ff8c00] tracking-tight">
                Get what you used to miss.
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={handleAdmission}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-full shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-white hover:bg-gray-50 text-[#1e244b] border border-gray-300 font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Column: Visual Campus Tour Circle with School Logo */}
            <div className="md:col-span-5 lg:col-span-5 flex justify-center items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-white shadow-lg">
                {/* School Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center">
                  <img
                    src={schoolLogo}
                    alt="GS Gacuba Logo"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>

                <p className="font-extrabold text-xl sm:text-2xl leading-tight">
                  Visual Campus<br />Tour
                </p>
                <p className="text-xs text-white/90 font-medium mt-1.5 tracking-wide">
                  Rubavu, Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12 lg:py-16 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Gallery Heading */}
          <div className="mb-5">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1e244b] tracking-tight">
              Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#ff8c00] text-white shadow-xs"
                      : "bg-white text-[#ff8c00] border border-[#ff8c00] hover:bg-orange-50/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3-Column Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.slice(0, 3).map((item) => {
              const currentLike = likesState[item.id] || { liked: false, disliked: false };
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs flex flex-col justify-between"
                >
                  {/* Photo Frame */}
                  <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content Area */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    {/* Pinkish/Light-orange Tint Box */}
                    <div className="bg-[#fff3eb] border border-[#ffe0cc] rounded-lg p-3 space-y-0.5">
                      <h4 className="font-bold text-[#1e244b] text-xs sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#6d758f]">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description Text */}
                    <p className="text-xs text-[#6d758f] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bottom Actions: Dislike & Like Buttons */}
                    <div className="pt-2 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDislike(item.id)}
                        className={`px-3.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                          currentLike.disliked
                            ? "bg-gray-200 text-gray-800 border border-gray-400"
                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        Dislike
                      </button>

                      <button
                        onClick={() => handleLike(item.id)}
                        className={`px-4 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer text-white ${
                          currentLike.liked
                            ? "bg-[#3e2e85]"
                            : "bg-[#554694] hover:bg-[#46387d]"
                        }`}
                      >
                        Like
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
            {[1, 2, 3, 4, 5, 6].map((pg) => {
              const isCurrent = currentPage === pg;
              return (
                <button
                  key={pg}
                  onClick={() => setCurrentPage(pg)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    isCurrent
                      ? "bg-[#1e244b] text-white shadow-xs"
                      : "bg-white text-[#ff8c00] border border-[#ff8c00] hover:bg-orange-50"
                  }`}
                >
                  {pg}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

