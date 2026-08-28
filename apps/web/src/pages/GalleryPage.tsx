import { useState } from "react";
import Footer from "../components/Footer";
import { ArrowRight, Heart, ThumbsDown, Sparkles } from "lucide-react";

const imgKidsPeeking = "/assets/862fc.png";
const imgStudentsBlue = "/assets/720a5.png";
const imgLabStudents = "/assets/046d0.png";
const imgClassroom = "/assets/c1786.png";
const imgStudyStudents = "/assets/b5865.png";
const imgCampus = "/assets/612da.png";

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
    category: "Academics",
    imageUrl: imgLabStudents,
    title: "Hands-on Science Hub",
    subtitle: "Have you ever been to Gacuba?",
    description: "Practical physics, chemistry, and biology labs empowering Rwanda's future scientists.",
    initialLikes: 98
  },
  {
    id: "gal-3",
    category: "School life",
    imageUrl: imgClassroom,
    title: "Focused Classroom Culture",
    subtitle: "Have you ever been to Gacuba?",
    description: "Collaborative peer learning and dedicated teacher mentorship in every stream.",
    initialLikes: 115
  },
  {
    id: "gal-4",
    category: "Events",
    imageUrl: imgStudyStudents,
    title: "National Exam Celebration",
    subtitle: "Have you ever been to Gacuba?",
    description: "Recognizing high achievers in NESA examinations with awards and distinctions.",
    initialLikes: 204
  },
  {
    id: "gal-5",
    category: "Sports",
    imageUrl: imgCampus,
    title: "Athletics & Play Fields",
    subtitle: "Have you ever been to Gacuba?",
    description: "Inter-school football, volleyball, and basketball tournaments promoting teamwork.",
    initialLikes: 87
  },
  {
    id: "gal-6",
    category: "Academics",
    imageUrl: imgStudentsBlue,
    title: "ICT & Digital Innovation",
    subtitle: "Have you ever been to Gacuba?",
    description: "Modern computer laboratories connecting students with global digital knowledge.",
    initialLikes: 163
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
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean; disliked: boolean }>>({
    "gal-1": { count: 142, liked: false, disliked: false },
    "gal-2": { count: 98, liked: false, disliked: false },
    "gal-3": { count: 115, liked: false, disliked: false },
    "gal-4": { count: 204, liked: false, disliked: false },
    "gal-5": { count: 87, liked: false, disliked: false },
    "gal-6": { count: 163, liked: false, disliked: false },
  });

  const categories = ["All", "School life", "Events", "Academics", "Sports"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  function handleLike(id: string) {
    setLikesState(prev => {
      const current = prev[id] || { count: 100, liked: false, disliked: false };
      if (current.liked) {
        return { ...prev, [id]: { ...current, count: current.count - 1, liked: false } };
      }
      return {
        ...prev,
        [id]: { count: current.count + (current.disliked ? 2 : 1), liked: true, disliked: false }
      };
    });
  }

  function handleDislike(id: string) {
    setLikesState(prev => {
      const current = prev[id] || { count: 100, liked: false, disliked: false };
      if (current.disliked) {
        return { ...prev, [id]: { ...current, disliked: false } };
      }
      return {
        ...prev,
        [id]: { count: current.liked ? current.count - 1 : current.count, liked: false, disliked: true }
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
      {/* Hero Section: "See it. Feel it. Live it." */}
      <section className="bg-white relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center border-b border-gray-100">
        {/* Right side large orange curved backdrop */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-br from-[#ff8c00] to-[#ffa32b] rounded-bl-[120px] lg:rounded-bl-[200px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              {/* Kids peeking on far left container */}
              <div className="flex items-center gap-6">
                <div className="w-24 sm:w-32 md:w-36 shrink-0">
                  <img
                    src={imgKidsPeeking}
                    alt="GS Gacuba curious smiling students"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <h1 className="font-extrabold text-[#211f54] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                    See it.<br />
                    Feel it.<br />
                    Live it.
                  </h1>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-lg max-w-lg">
                <p className="text-sm sm:text-base font-semibold text-[#211f54] leading-snug">
                  At Gacuba, success isn&apos;t optional, it&apos;s the routine.
                </p>
              </div>

              {/* Highlight Subtitle */}
              <p className="text-2xl sm:text-3xl font-extrabold text-[#ff8c00]">
                Get what you used to miss.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={handleAdmission}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleAsk}
                  className="bg-white hover:bg-gray-50 text-[#211f54] border border-gray-300 font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all cursor-pointer"
                >
                  Ask about us
                </button>
              </div>
            </div>

            {/* Right Graphic Space */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
              <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-xs border-4 border-white/40 flex items-center justify-center p-8 text-center text-white shadow-2xl">
                <div>
                  <Sparkles className="w-10 h-10 mx-auto mb-2 text-white" />
                  <p className="font-extrabold text-2xl leading-tight">Visual Campus Tour</p>
                  <p className="text-xs text-white/90 mt-1">Rubavu, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Cards & Filter Section */}
      <section className="bg-white py-16 lg:py-20 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-[#211f54] tracking-tight">
              Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#ff8c00] text-white shadow-sm"
                      : "bg-white text-[#ff8c00] border-2 border-[#ff8c00] hover:bg-[#fff9ef]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3-Column Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => {
              const currentLike = likesState[item.id] || { count: item.initialLikes, liked: false, disliked: false };
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-300"
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    {/* Pink / Light-orange Header Banner */}
                    <div className="bg-[#fff1e6] border border-[#ffe0cc] rounded-2xl p-4 space-y-0.5">
                      <h4 className="font-extrabold text-[#211f54] text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#ff8c00]">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description Text */}
                    <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bottom Actions: Dislike & Like Buttons */}
                    <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                      <button
                        onClick={() => handleDislike(item.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                          currentLike.disliked
                            ? "bg-gray-200 text-gray-800 border border-gray-400"
                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                        <span>Dislike</span>
                      </button>

                      <button
                        onClick={() => handleLike(item.id)}
                        className={`px-5 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs ${
                          currentLike.liked
                            ? "bg-[#48339f] text-white"
                            : "bg-[#5e48b8] hover:bg-[#4e3a9f] text-white"
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${currentLike.liked ? "fill-white" : ""}`} />
                        <span>Like ({currentLike.count})</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2.5 mt-14">
            {[1, 2, 3, 4, 5, 6].map((pg) => {
              const isCurrent = currentPage === pg;
              return (
                <button
                  key={pg}
                  onClick={() => setCurrentPage(pg)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#211f54] text-white shadow-md"
                      : "bg-white text-[#ff8c00] border-2 border-[#ff8c00] hover:bg-[#fff9ef]"
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
