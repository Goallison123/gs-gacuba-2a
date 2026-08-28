import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, User, Sparkles, Menu, X, BookOpen, GraduationCap, Users, Phone, Building2, HelpCircle, Briefcase } from "lucide-react";

const logo = "/assets/22de8.png";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenAsk?: (initialQuery?: string) => void;
  onOpenAdmission?: () => void;
  onOpenProfile?: () => void;
}

export default function Header({
  activePage,
  onNavigate,
  onOpenAsk,
  onOpenAdmission,
  onOpenProfile,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onOpenAsk) {
        onOpenAsk(searchQuery.trim());
      }
      setSearchQuery("");
    }
  }

  const moreLinks = [
    { label: "Academics", page: "academics", icon: BookOpen, desc: "MS2, Arts & Humanities, O-Level" },
    { label: "Admissions", page: "admissions", icon: GraduationCap, desc: "Requirements, 2026 intake & fees" },
    { label: "Student Life", page: "student-life", icon: Users, desc: "Clubs, athletics & cultural troupe" },
    { label: "Campus Facilities", page: "facilities", icon: Building2, desc: "ICT Hub, Science Labs & Library" },
    { label: "Leadership & Staff", page: "leadership", icon: Users, desc: "Administrative board & teachers" },
    { label: "Careers", page: "careers", icon: Briefcase, desc: "Join our teaching & support staff" },
    { label: "FAQ & Help", page: "faq", icon: HelpCircle, desc: "Frequently asked questions" },
    { label: "Contact Us", page: "contact", icon: Phone, desc: "Location in Rubavu & phone" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="shrink-0 flex items-center gap-2 cursor-pointer text-left focus:outline-none"
          aria-label="GS Gacuba II A Home"
        >
          <img
            src={logo}
            alt="GS Gacuba II A / Sybella Systems"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </button>

        {/* Middle Left: Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center relative max-w-xs lg:max-w-sm w-full"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything about Gacuba"
            className="w-full bg-[#f8f9fc] border border-[#e2e8f0] text-[#211f54] text-xs sm:text-sm rounded-full pl-4 pr-10 py-2 focus:bg-white focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none transition-all placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ff8c00] transition-colors p-1"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Middle Right: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          <button
            onClick={() => onNavigate("home")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              activePage === "home"
                ? "text-[#ff8c00]"
                : "text-[#6d758f] hover:text-[#211f54]"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate("about")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              activePage === "about"
                ? "text-[#ff8c00]"
                : "text-[#6d758f] hover:text-[#211f54]"
            }`}
          >
            About
          </button>

          <button
            onClick={() => onNavigate("gallery")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              activePage === "gallery"
                ? "text-[#ff8c00]"
                : "text-[#6d758f] hover:text-[#211f54]"
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => onNavigate("news")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              activePage === "news"
                ? "text-[#ff8c00]"
                : "text-[#6d758f] hover:text-[#211f54]"
            }`}
          >
            News
          </button>

          {/* More Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer ${
                ["academics", "admissions", "student-life", "facilities", "leadership", "careers", "faq", "contact"].includes(activePage)
                  ? "text-[#ff8c00]"
                  : "text-[#6d758f] hover:text-[#211f54]"
              }`}
            >
              <span>More</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${moreDropdownOpen ? "rotate-180 text-[#ff8c00]" : ""}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-fadeIn">
                <div className="grid grid-cols-1 gap-1">
                  {moreLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activePage === link.page;
                    return (
                      <button
                        key={link.page}
                        onClick={() => {
                          onNavigate(link.page);
                          setMoreDropdownOpen(false);
                        }}
                        className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                          isActive
                            ? "bg-[#fff9ef] text-[#ff8c00]"
                            : "hover:bg-gray-50 text-[#211f54]"
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 ${isActive ? "bg-[#ff8c00] text-white" : "bg-gray-100 text-gray-600"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className={`text-xs font-bold ${isActive ? "text-[#ff8c00]" : "text-[#211f54]"}`}>
                            {link.label}
                          </p>
                          <p className="text-[11px] text-gray-500 line-clamp-1">{link.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions: User Profile & Ask Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* User Profile Button */}
          <button
            onClick={onOpenProfile}
            className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-[#211f54] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-colors cursor-pointer shadow-xs"
            title="Student / Parent Portal"
            aria-label="Student / Parent Portal"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Ask Button */}
          <button
            onClick={() => onOpenAsk ? onOpenAsk() : null}
            className="bg-[#5a607f] hover:bg-[#ff8c00] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4 shadow-lg animate-fadeIn">
          {/* Search bar mobile */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything about Gacuba"
              className="w-full bg-[#f8f9fc] border border-[#e2e8f0] text-xs rounded-full pl-4 pr-10 py-2.5 outline-none focus:border-[#ff8c00]"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Nav links mobile */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {[
              { label: "Home", page: "home" },
              { label: "About", page: "about" },
              { label: "Gallery", page: "gallery" },
              { label: "News", page: "news" },
              { label: "Academics", page: "academics" },
              { label: "Admissions", page: "admissions" },
              { label: "Student Life", page: "student-life" },
              { label: "Facilities", page: "facilities" },
              { label: "Leadership", page: "leadership" },
              { label: "Careers", page: "careers" },
              { label: "FAQ", page: "faq" },
              { label: "Contact", page: "contact" },
            ].map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMenuOpen(false);
                }}
                className={`p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                  activePage === link.page
                    ? "bg-[#fff9ef] text-[#ff8c00]"
                    : "text-[#6d758f] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex gap-2">
            <button
              onClick={() => {
                if (onOpenAdmission) onOpenAdmission();
                setMenuOpen(false);
              }}
              className="flex-1 bg-[#ff8c00] text-white text-xs font-bold py-2.5 rounded-xl text-center shadow-xs"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => {
                if (onOpenProfile) onOpenProfile();
                setMenuOpen(false);
              }}
              className="px-4 bg-gray-100 text-[#211f54] text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1"
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
