import { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  User,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Users,
  Phone,
  Building2,
  HelpCircle,
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { searchSchool, searchDatabase, SearchItem } from "../data/searchDatabase";

const logo = "/assets/22de8.png";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenAsk?: (initialQuery?: string) => void;
  onOpenAdmission?: () => void;
  onOpenProfile?: () => void;
  onOpenSearch?: (initialQuery?: string) => void;
}

export default function Header({
  activePage,
  onNavigate,
  onOpenAsk,
  onOpenAdmission,
  onOpenProfile,
  onOpenSearch,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Global hotkey: Ctrl+K, Cmd+K, or / to open search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenSearch?.(searchQuery);
      } else if (e.key === "/") {
        e.preventDefault();
        onOpenSearch?.(searchQuery);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenSearch, searchQuery]);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onOpenSearch) {
        onOpenSearch(searchQuery.trim());
      } else if (onOpenAsk) {
        onOpenAsk(searchQuery.trim());
      }
      setIsSearchFocused(false);
    } else {
      onOpenSearch?.("");
    }
  }

  function handleResultClick(item: SearchItem) {
    setIsSearchFocused(false);
    setSearchQuery("");
    setMenuOpen(false);

    if (item.actionType === "openAdmission") {
      onOpenAdmission?.();
    } else if (item.actionType === "openContact") {
      onOpenAsk?.(item.title);
    } else if (item.actionType === "openProfile") {
      onOpenProfile?.();
    } else if (item.actionType === "tel" && item.actionPayload) {
      window.location.href = `tel:${item.actionPayload}`;
    } else if (item.actionType === "mailto" && item.actionPayload) {
      window.location.href = `mailto:${item.actionPayload}`;
    } else if (item.page) {
      onNavigate(item.page);
    } else {
      onNavigate("about");
    }
  }

  function getCategoryIcon(cat: string) {
    switch (cat) {
      case "contact":
        return <Phone className="w-3 h-3 text-[#ff8c00]" />;
      case "team":
        return <Users className="w-3 h-3 text-[#3b82f6]" />;
      case "academic":
        return <BookOpen className="w-3 h-3 text-[#10b981]" />;
      case "admission":
        return <GraduationCap className="w-3 h-3 text-[#f59e0b]" />;
      case "facility":
        return <Building2 className="w-3 h-3 text-[#8b5cf6]" />;
      case "student-life":
        return <Sparkles className="w-3 h-3 text-[#ec4899]" />;
      case "faq":
        return <HelpCircle className="w-3 h-3 text-[#6b7280]" />;
      default:
        return <ArrowRight className="w-3 h-3 text-[#ff8c00]" />;
    }
  }

  // Compute live search matches
  const liveResults = searchQuery.trim()
    ? searchSchool(searchQuery).slice(0, 5)
    : searchDatabase.slice(0, 5);

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
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-1 max-w-xl">
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

          {/* Search Bar Container with Live Results Dropdown */}
          <div ref={searchContainerRef} className="hidden md:block relative w-full max-w-[280px] lg:max-w-[340px]">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                placeholder="Search anything (contacts, team, MPC...)"
                className="w-full bg-white border border-[#d1d5db] text-[#211f54] text-xs rounded-md pl-3 pr-14 py-2 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none transition-all placeholder:text-[#9ca3af]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-gray-400 hover:text-gray-600 p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="submit"
                  className="text-[#9ca3af] hover:text-[#ff8c00] transition-colors p-1 cursor-pointer"
                  title="Search (Press Enter or click)"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Live Search Quick Results Dropdown */}
            {isSearchFocused && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                <div className="p-2 border-b border-gray-100 bg-gray-50/80 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                  <span>{searchQuery.trim() ? "Search Results" : "Quick Search Suggestions"}</span>
                  <button
                    onClick={() => {
                      setIsSearchFocused(false);
                      onOpenSearch?.(searchQuery);
                    }}
                    className="text-[#ff8c00] hover:underline cursor-pointer flex items-center gap-0.5"
                  >
                    <span>Full Spotlight</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="max-h-[300px] overflow-y-auto divide-y divide-gray-50 p-1">
                  {liveResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-gray-500">
                      No results for &ldquo;{searchQuery}&rdquo;
                      <button
                        onClick={() => {
                          setIsSearchFocused(false);
                          onOpenAsk?.(searchQuery);
                        }}
                        className="block mx-auto mt-2 text-[#ff8c00] font-semibold hover:underline"
                      >
                        Ask Administration &rarr;
                      </button>
                    </div>
                  ) : (
                    liveResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleResultClick(item)}
                        className="p-2 hover:bg-orange-50/60 rounded-lg cursor-pointer transition-colors flex items-center justify-between gap-2 group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-6 h-6 rounded-md bg-gray-100 group-hover:bg-white flex items-center justify-center shrink-0 border border-gray-200/50">
                            {getCategoryIcon(item.category)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-[#1e244b] group-hover:text-[#ff8c00] truncate">
                              {item.title}
                            </p>
                            <p className="text-[10px] text-gray-500 truncate">
                              {item.subtitle || item.description}
                            </p>
                          </div>
                        </div>

                        {item.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-orange-100 text-[#ff8c00] shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {/* Dropdown Footer */}
                <div className="p-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                  <span>Tip: Press <kbd className="font-mono bg-white px-1 border rounded">Ctrl+K</kbd> anywhere</span>
                  <button
                    onClick={() => {
                      setIsSearchFocused(false);
                      onOpenSearch?.(searchQuery);
                    }}
                    className="font-medium text-gray-600 hover:text-[#ff8c00]"
                  >
                    View all matching results
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Navigation Links & Actions */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
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

          {/* Account Profile Box, Quick Search Trigger & Ask Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile/Quick Search Icon Button */}
            <button
              onClick={() => onOpenSearch?.(searchQuery)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-[#c7ccd6] bg-[#f8fafc] flex items-center justify-center text-[#4b5563] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-colors cursor-pointer"
              title="Search website (Ctrl+K or /)"
              aria-label="Search website"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* User Profile Button */}
            <button
              onClick={onOpenProfile}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-[#c7ccd6] bg-[#f8fafc] flex items-center justify-center text-[#4b5563] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-colors cursor-pointer"
              title="Account / Student Portal"
              aria-label="Account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Ask Button */}
            <button
              onClick={() => onOpenAsk ? onOpenAsk() : null}
              className="bg-[#5a6278] hover:bg-[#43495a] text-white text-xs font-medium px-3 sm:px-4 py-2 rounded-md transition-colors cursor-pointer min-h-[36px]"
            >
              Ask
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-1.5 text-gray-600 hover:text-gray-900 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 sm:px-6 py-4 space-y-4 shadow-xl animate-fadeIn max-h-[calc(100dvh-64px)] overflow-y-auto">
          {/* Search bar mobile */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search contacts, team, location, MPC..."
              className="w-full bg-white border border-[#d1d5db] text-xs sm:text-sm rounded-lg pl-3.5 pr-16 py-2.5 outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00]"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <button
                type="submit"
                className="bg-[#ff8c00] text-white p-1.5 rounded-md cursor-pointer hover:bg-[#e07b00]"
                aria-label="Submit search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Quick Filter Tags on Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {["Contacts", "Headmaster", "Location", "MS2", "Fees", "Admissions"].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setMenuOpen(false);
                  onOpenSearch?.(tag);
                }}
                className="px-2.5 py-1 bg-gray-100 hover:bg-orange-100 hover:text-[#ff8c00] text-[11px] font-semibold text-gray-700 rounded-full shrink-0 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Nav links mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-[13px] font-semibold">
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
                className={`p-2.5 sm:p-3 min-h-[44px] flex items-center rounded-lg text-left transition-colors cursor-pointer ${
                  activePage === link.page
                    ? "bg-[#fff9ef] text-[#ff8c00] font-bold"
                    : "text-[#6d758f] hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                if (onOpenAdmission) onOpenAdmission();
                setMenuOpen(false);
              }}
              className="w-full sm:flex-1 bg-[#ff8c00] hover:bg-[#e07b00] text-white text-xs sm:text-sm font-bold min-h-[44px] py-2.5 rounded-lg text-center transition-colors cursor-pointer"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => {
                if (onOpenProfile) onOpenProfile();
                setMenuOpen(false);
              }}
              className="w-full sm:w-auto px-4 bg-gray-100 hover:bg-gray-200 text-[#211f54] text-xs sm:text-sm font-semibold min-h-[44px] py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Portal Access</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

