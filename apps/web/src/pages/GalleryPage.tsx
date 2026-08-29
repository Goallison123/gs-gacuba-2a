import { useState } from "react";
import Footer from "../components/Footer";

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
      <section className="relative bg-white overflow-hidden border-b border-gray-100/70">
        {/* Right side large orange curved backdrop on desktop */}
        <div
          className="hidden md:block absolute right-0 top-0 bottom-0 md:w-[46%] lg:w-[48%] bg-[#ff8c00] rounded-bl-[140px] lg:rounded-bl-[200px] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-18 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column: Evenly spaced and cleanly aligned */}
            <div className="md:col-span-7 flex flex-col items-start gap-4 sm:gap-5 text-left max-w-2xl">
              <div className="space-y-1">
                <h1 className="font-black text-[#1e244b] text-4xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.08]">
                  See it.<br />
                  Feel it.<br />
                  Live it.
                </h1>
              </div>

              {/* Floating Quote Card with Soft Shadow */}
              <div className="bg-white border border-gray-100/80 rounded-xl px-4 sm:px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-sm">
                <p className="text-[12.5px] sm:text-[13px] font-medium text-[#4b5563] leading-snug">
                  At Gacuba, success isn&apos;t optional, it&apos;s the routine.
                </p>
              </div>

              {/* Subtitle in energetic Coral/Reddish-Orange */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#ff5747] tracking-tight">
                Get what you used to miss.
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={handleAdmission}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] min-h-[42px] px-6 py-2.5 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for Admission &rarr;</span>
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-white hover:bg-gray-50 text-[#ff8c00] border border-gray-200 font-bold text-xs sm:text-[13px] min-h-[42px] px-6 py-2.5 rounded-lg shadow-sm flex items-center justify-center transition-colors cursor-pointer"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Column: Visual Campus Tour Badge */}
            <div className="md:col-span-5 flex justify-center items-center w-full py-4 md:py-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border-2 border-[#ff8c00]/30 md:border-white/40 bg-[#fff5eb] md:bg-white/10 md:backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-[#1e244b] md:text-white shadow-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-2 flex items-center justify-center">
                  <img
                    src={schoolLogo}
                    alt="GS Gacuba Logo"
                    className="w-full h-full object-contain md:brightness-0 md:invert"
                  />
                </div>
                <p className="font-extrabold text-lg sm:text-xl lg:text-2xl leading-tight">
                  Visual Campus<br />Tour
                </p>
                <p className="text-[11px] sm:text-xs text-[#6d758f] md:text-white/90 font-medium mt-1.5 tracking-wide">
                  Rubavu, Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-10 sm:py-12 lg:py-16 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Gallery Heading */}
          <div className="mb-5">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1e244b] tracking-tight">
              Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer min-h-[38px] flex items-center justify-center ${
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

          {/* 3-Column Gallery Grid: Responsive 1-col mobile, 2-col tablet, 3-col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.slice(0, 3).map((item) => {
              const currentLike = likesState[item.id] || { liked: false, disliked: false };
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  {/* Photo Frame */}
                  <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                        className={`px-3.5 py-1.5 rounded-md text-[11px] font-medium transition-colors cursor-pointer min-h-[32px] ${
                          currentLike.disliked
                            ? "bg-gray-200 text-gray-800 border border-gray-400"
                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        Dislike
                      </button>

                      <button
                        onClick={() => handleLike(item.id)}
                        className={`px-4 py-1.5 rounded-md text-[11px] font-semibold transition-colors cursor-pointer text-white min-h-[32px] ${
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
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 sm:mt-12">
            {[1, 2, 3, 4, 5, 6].map((pg) => {
              const isCurrent = currentPage === pg;
              return (
                <button
                  key={pg}
                  onClick={() => setCurrentPage(pg)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center transition-colors cursor-pointer ${
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

