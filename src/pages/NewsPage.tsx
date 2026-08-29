import { useState } from "react";
import Footer from "../components/Footer";
import { Heart, Share2 } from "lucide-react";

interface NewsPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const imgFeaturedAward = "/assets/1c7aa.png";
const imgLaptopsClassroom = "/assets/b5865.png";
const imgScienceLab = "/assets/046d0.png";
const imgSportsField = "/assets/720a5.png";
const imgLibrary = "/assets/c1786.png";

interface NewsCardItem {
  id: number;
  category: "School life" | "Events" | "Academics" | "Sports";
  image: string;
  title: string;
  description: string;
  timeAgo: string;
  likes: number;
  shares: number;
}

const initialCardsData: NewsCardItem[] = [
  {
    id: 1,
    category: "School life",
    image: imgLaptopsClassroom,
    title: "The goverment of Rwanda through REB supplied us with 200 Lenovo laptops.",
    description:
      "As Gacuba stay committed to contributing to the future of the community and world by nurturing talents through teaching methodologies focused on the fture, we have finally got additional ICT tools including laptops to help reach one mission.",
    timeAgo: "2 hours ago",
    likes: 2,
    shares: 6,
  },
  {
    id: 2,
    category: "Academics",
    image: imgLaptopsClassroom,
    title: "The goverment of Rwanda through REB supplied us with 200 Lenovo laptops.",
    description:
      "As Gacuba stay committed to contributing to the future of the community and world by nurturing talents through teaching methodologies focused on the fture, we have finally got additional ICT tools including laptops to help reach one mission.",
    timeAgo: "2 hours ago",
    likes: 2,
    shares: 6,
  },
  {
    id: 3,
    category: "School life",
    image: imgLaptopsClassroom,
    title: "The goverment of Rwanda through REB supplied us with 200 Lenovo laptops.",
    description:
      "As Gacuba stay committed to contributing to the future of the community and world by nurturing talents through teaching methodologies focused on the fture, we have finally got additional ICT tools including laptops to help reach one mission.",
    timeAgo: "2 hours ago",
    likes: 2,
    shares: 6,
  },
  {
    id: 4,
    category: "Events",
    image: imgScienceLab,
    title: "Annual Rubavu District Science & Robotics Exhibition Showcase 2026",
    description:
      "Our student STEM innovators presented automated agricultural sensors, earning distinction and awards from national education officials and regional university partners.",
    timeAgo: "1 day ago",
    likes: 14,
    shares: 8,
  },
  {
    id: 5,
    category: "Sports",
    image: imgSportsField,
    title: "GS Gacuba II A Inter-School Volleyball Championship Victory",
    description:
      "Our senior boys and girls volleyball teams triumphed in the Western Province inter-school tournament finals held in Rubavu stadium.",
    timeAgo: "3 days ago",
    likes: 29,
    shares: 11,
  },
  {
    id: 6,
    category: "Academics",
    image: imgLibrary,
    title: "New Digital Library and Research Archives Commissioned for MS2 & Arts Streams",
    description:
      "Expanded access to over 10,000 academic journals, digital curriculum resources, and quiet revision pods for all students preparing for national exams.",
    timeAgo: "5 days ago",
    likes: 19,
    shares: 7,
  },
];

const categories = ["All", "School life", "Events", "Academics", "Sports"] as const;

export default function NewsPage({
  onNavigate,
  onOpenAdmission,
  onOpenAsk,
}: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [heroLiked, setHeroLiked] = useState<boolean>(false);
  const [heroLikeCount, setHeroLikeCount] = useState<number>(48);
  const [shareToast, setShareToast] = useState<string | null>(null);

  const [cardsData, setCardsData] = useState<NewsCardItem[]>(initialCardsData);
  const [userCardLikes, setUserCardLikes] = useState<Record<number, boolean>>({});

  function handleHeroLike() {
    if (heroLiked) {
      setHeroLiked(false);
      setHeroLikeCount((prev) => prev - 1);
    } else {
      setHeroLiked(true);
      setHeroLikeCount((prev) => prev + 1);
    }
  }

  function handleShare(title: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setShareToast(`Link to "${title}" copied to clipboard!`);
    setTimeout(() => {
      setShareToast(null);
    }, 3000);
  }

  function handleCardLike(cardId: number) {
    const isLiked = userCardLikes[cardId];
    setUserCardLikes((prev) => ({
      ...prev,
      [cardId]: !isLiked,
    }));
    setCardsData((prev) =>
      prev.map((c) => {
        if (c.id === cardId) {
          return {
            ...c,
            likes: isLiked ? c.likes - 1 : c.likes + 1,
          };
        }
        return c;
      })
    );
  }

  function handleCardShare(cardId: number, title: string) {
    handleShare(title);
    setCardsData((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, shares: c.shares + 1 } : c))
    );
  }

  const filteredCards =
    selectedCategory === "All"
      ? cardsData
      : cardsData.filter((c) => c.category === selectedCategory);

  // Cards to display (first 3 matching screenshot pagination view)
  const displayCards = filteredCards.slice(0, 3);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. Top Orange Ticker / Breaking Announcement Banner */}
      <section className="bg-[#f58220] py-2.5 px-4 sm:px-8 lg:px-12 w-full shadow-xs">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap">
          <span className="bg-white text-[#f58220] font-bold text-xs sm:text-[13px] px-5 py-1.5 rounded-[4px] shadow-xs cursor-pointer hover:bg-orange-50 transition-colors select-none">
            Latest
          </span>
          <p className="text-white font-medium text-xs sm:text-[14.5px] tracking-wide text-center sm:text-left">
            Our student awarded a 1st position in National exams 2026
          </p>
        </div>
      </section>

      {/* Share Toast Notification */}
      {shareToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#1e244b] text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-xl animate-fade-in flex items-center gap-2">
          <span>✓</span>
          <span>{shareToast}</span>
        </div>
      )}

      {/* 2. Hero Featured News Story Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Featured Award Ceremony Image with CTA Button Overlay */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg aspect-[16/11] sm:aspect-[16/10] bg-gray-100 group">
            <img
              src={imgFeaturedAward}
              alt="Kayla Elyse National Examination Results Award Ceremony"
              className="w-full h-full object-cover object-center"
            />

            {/* Bottom-left interactive CTA button overlay matching screenshot */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center gap-2.5 z-10">
              <button
                onClick={onOpenAdmission}
                className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-[13px] min-h-[40px] px-4 sm:px-5 py-2 rounded-[4px] shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Apply for Admission &rarr;</span>
              </button>

              <button
                onClick={onOpenAsk}
                className="bg-white hover:bg-gray-50 text-[#ff8c00] font-bold text-xs sm:text-[13px] min-h-[40px] px-4 sm:px-5 py-2 rounded-[4px] shadow-md flex items-center justify-center cursor-pointer transition-colors"
              >
                Ask about us
              </button>
            </div>
          </div>

          {/* Right Column: Featured Article Typography & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 text-left">
            {/* Top Row: Most liked & Action Icons */}
            <div className="flex items-center justify-between">
              <span className="text-[#ff8c00] font-bold text-xs sm:text-sm tracking-wide">
                Most liked
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleHeroLike}
                  aria-label="Like featured article"
                  className={`p-1.5 rounded-full transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold ${
                    heroLiked
                      ? "text-red-500 bg-red-50"
                      : "text-gray-400 hover:text-red-500 hover:bg-gray-100"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      heroLiked ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  {heroLiked && <span>{heroLikeCount}</span>}
                </button>

                <button
                  onClick={() =>
                    handleShare(
                      "Kayla Elyse awarded the first position as the best performer in A' level 2026"
                    )
                  }
                  aria-label="Share featured article"
                  className="p-1.5 rounded-full text-gray-400 hover:text-[#ff8c00] hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-extrabold text-[#111827] text-2xl sm:text-3xl lg:text-[36px] leading-[1.18] tracking-tight">
              Kayla Elyse awarded the first position as the best performer in A’ level 2026
            </h1>

            {/* Paragraph Body */}
            <p className="text-[#4b5563] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              Kayla elyse, a student on S6 MPC, following the 3 years of hardworking, loneliness and big vision, has finally made it to the first position on the national level. any unforgetable monet for her.
            </p>

            {/* Timestamp */}
            <p className="text-gray-400 text-xs sm:text-[13px] font-medium pt-1">
              2 hours ago
            </p>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Pills */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full pt-4 pb-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 sm:px-6 py-2 rounded-[4px] text-xs sm:text-[13px] font-bold transition-all cursor-pointer min-h-[38px] flex items-center justify-center ${
                  isActive
                    ? "bg-[#ff8c00] text-white shadow-xs"
                    : "bg-white text-[#ff8c00] border border-[#ff8c00] hover:bg-orange-50/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. 3-Card News Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full pb-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayCards.map((card) => {
            const isLiked = !!userCardLikes[card.id];
            return (
              <div
                key={card.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
              >
                {/* Card Top Image */}
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Card Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-extrabold text-[#111827] text-sm sm:text-[15px] leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#4b5563] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta Bar */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500">
                    <span className="font-medium">{card.timeAgo}</span>

                    <div className="flex items-center gap-3.5">
                      {/* Like Action */}
                      <button
                        onClick={() => handleCardLike(card.id)}
                        className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors"
                        aria-label="Like story"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isLiked
                              ? "fill-red-500 text-red-500"
                              : "text-red-500 fill-red-500"
                          }`}
                        />
                        <span className="font-semibold text-[11px] text-gray-700">
                          {card.likes}
                        </span>
                      </button>

                      {/* Share Action */}
                      <button
                        onClick={() => handleCardShare(card.id, card.title)}
                        className="flex items-center gap-1 hover:text-[#ff8c00] cursor-pointer transition-colors"
                        aria-label="Share story"
                      >
                        <Share2 className="w-3.5 h-3.5 text-gray-500" />
                        <span className="font-semibold text-[11px] text-gray-700">
                          {card.shares}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Pagination */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10 sm:mt-14">
          {[1, 2, 3, 4, 5, 6].map((pageNum) => {
            const isCurrent = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-[#1e244b] text-white shadow-xs"
                    : "bg-white text-[#ff8c00] border border-[#ff8c00] hover:bg-orange-50/60"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
