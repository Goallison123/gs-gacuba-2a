import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, User, Menu, X, BookOpen, GraduationCap, Users, Phone, Building2, HelpCircle, Briefcase } from "lucide-react";

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
    <header className="bg-white border-b border-gray-200/80 sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">
        {/* Left Section: Logo & Search Bar */}
        <div className="flex items-center gap-6 lg:gap-8 flex-1 max-w-xl">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="shrink-0 flex items-center cursor-pointer text-left focus:outline-none"
            aria-label="GS Gacuba II A Home"
          >
            <img
              src={logo}
              alt="GS Gacuba II A / Sybella Systems"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>

          {/* Search Bar - Rectangular with subtle rounded corners as in Screenshot 1 */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center relative w-full max-w-[280px] lg:max-w-[320px]"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything about Gacuba"
              className="w-full bg-white border border-[#d1d5db] text-[#211f54] text-xs rounded-sm pl-3.5 pr-8 py-2 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none transition-all placeholder:text-[#9ca3af]"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#ff8c00] transition-colors p-0.5"
              title="Search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Right Section: Navigation Links & Actions */}
        <div className="flex items-center gap-5 lg:gap-7">
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs sm:text-[13px]" aria-label="Main navigation">
            <button
              onClick={() => onNavigate("home")}
              className={`font-medium transition-colors cursor-pointer ${
                activePage === "home"
                  ? "text-[#111827] font-bold"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate("about")}
              className={`font-medium transition-colors cursor-pointer ${
                activePage === "about"
                  ? "text-[#111827] font-bold"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              About
            </button>

            <button
              onClick={() => onNavigate("gallery")}
              className={`font-medium transition-colors cursor-pointer ${
                activePage === "gallery"
                  ? "text-[#111827] font-bold"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => onNavigate("news")}
              className={`font-medium transition-colors cursor-pointer ${
                activePage === "news"
                  ? "text-[#111827] font-bold"
                  : "text-[#4b5563] hover:text-[#111827]"
              }`}
            >
              News
            </button>

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                  ["academics", "admissions", "student-life", "facilities", "leadership", "careers", "faq", "contact"].includes(activePage)
                    ? "text-[#111827] font-bold"
                    : "text-[#4b5563] hover:text-[#111827]"
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? "rotate-180 text-[#111827]" : "text-[#6b7280]"}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-2 z-50 animate-fadeIn">
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
                          className={`flex items-start gap-2.5 p-2 rounded-lg text-left transition-colors cursor-pointer ${
                            isActive
                              ? "bg-[#fff9ef] text-[#ff8c00]"
                              : "hover:bg-gray-50 text-[#211f54]"
                          }`}
                        >
                          <div className={`p-1.5 rounded-md shrink-0 ${isActive ? "bg-[#ff8c00] text-white" : "bg-gray-100 text-gray-600"}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className={`text-xs font-semibold ${isActive ? "text-[#ff8c00]" : "text-[#211f54]"}`}>
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

          {/* Account Profile Box & Ask Button */}
          <div className="flex items-center gap-3">
            {/* User Profile Button - Boxed with border and square badge style as in Screenshot 1 */}
            <button
              onClick={onOpenProfile}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-[#c7ccd6] bg-[#f8fafc] flex items-center justify-center text-[#4b5563] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-colors cursor-pointer"
              title="Account"
              aria-label="Account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Ask Button - Slate gray rounded button matching Screenshot 1 */}
            <button
              onClick={() => onOpenAsk ? onOpenAsk() : null}
              className="bg-[#5a6278] hover:bg-[#43495a] text-white text-xs font-medium px-4 py-2 rounded-md transition-colors cursor-pointer"
            >
              Ask
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-1.5 text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
              className="w-full bg-white border border-[#d1d5db] text-xs rounded-md pl-3.5 pr-8 py-2 outline-none focus:border-[#ff8c00]"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <Search className="w-3.5 h-3.5" />
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
                className={`p-2.5 rounded-lg text-left transition-colors cursor-pointer ${
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
              className="flex-1 bg-[#ff8c00] text-white text-xs font-bold py-2 rounded-md text-center"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => {
                if (onOpenProfile) onOpenProfile();
                setMenuOpen(false);
              }}
              className="px-4 bg-gray-100 text-[#211f54] text-xs font-semibold py-2 rounded-md flex items-center justify-center gap-1"
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
