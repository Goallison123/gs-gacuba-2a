import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  Phone,
  Users,
  BookOpen,
  GraduationCap,
  Building2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { searchDatabase, searchSchool, SearchItem } from "../data/searchDatabase";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenContact?: (topic?: string) => void;
  onOpenProfile?: () => void;
}

const quickCategories = [
  { id: "all", label: "All Items" },
  { id: "contact", label: "Contacts & Location" },
  { id: "team", label: "Leadership & Team" },
  { id: "academic", label: "Academic Streams" },
  { id: "admission", label: "Admissions & Fees" },
  { id: "facility", label: "Campus Facilities" },
  { id: "student-life", label: "Clubs & Life" },
  { id: "faq", label: "FAQs" },
];

const popularSearches = [
  "Phone number",
  "Headmaster",
  "Location",
  "MPC / MS2 stream",
  "Admission requirements",
  "School fees",
  "ICT computer lab",
  "Email",
];

export default function SearchModal({
  isOpen,
  onClose,
  initialQuery = "",
  onNavigate,
  onOpenAdmission,
  onOpenContact,
  onOpenProfile,
}: SearchModalProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, initialQuery]);

  // Global keydown listeners
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter items
  let results: SearchItem[] = [];
  if (query.trim()) {
    results = searchSchool(query);
  } else {
    // If empty query, show items filtered by selected category or top curated items
    if (activeCategory === "all") {
      results = searchDatabase.slice(0, 8);
    } else {
      results = searchDatabase.filter((i) => i.category === activeCategory);
    }
  }

  if (activeCategory !== "all" && query.trim()) {
    results = results.filter((i) => i.category === activeCategory);
  }

  function handleItemClick(item: SearchItem) {
    if (item.actionType === "openAdmission") {
      onClose();
      onOpenAdmission?.();
    } else if (item.actionType === "openContact") {
      onClose();
      onOpenContact?.(item.title);
    } else if (item.actionType === "openProfile") {
      onClose();
      onOpenProfile?.();
    } else if (item.actionType === "tel" && item.actionPayload) {
      window.location.href = `tel:${item.actionPayload}`;
    } else if (item.actionType === "mailto" && item.actionPayload) {
      window.location.href = `mailto:${item.actionPayload}`;
    } else if (item.page) {
      onClose();
      onNavigate(item.page);
    } else {
      onClose();
      onNavigate("about");
    }
  }

  function handleCopy(e: React.MouseEvent, text: string, id: string) {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function getCategoryIcon(cat: string) {
    switch (cat) {
      case "contact":
        return <Phone className="w-3.5 h-3.5 text-[#ff8c00]" />;
      case "team":
        return <Users className="w-3.5 h-3.5 text-[#3b82f6]" />;
      case "academic":
        return <BookOpen className="w-3.5 h-3.5 text-[#10b981]" />;
      case "admission":
        return <GraduationCap className="w-3.5 h-3.5 text-[#f59e0b]" />;
      case "facility":
        return <Building2 className="w-3.5 h-3.5 text-[#8b5cf6]" />;
      case "student-life":
        return <Sparkles className="w-3.5 h-3.5 text-[#ec4899]" />;
      case "faq":
        return <HelpCircle className="w-3.5 h-3.5 text-[#6b7280]" />;
      default:
        return <ArrowRight className="w-3.5 h-3.5 text-[#ff8c00]" />;
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 bg-[#1e244b]/50 backdrop-blur-xs animate-fadeIn">
      {/* Search Modal Card */}
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] mt-4 sm:mt-0 animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-label="Search GS Gacuba II A"
      >
        {/* Search Header Bar */}
        <div className="p-3 sm:p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/70">
          <Search className="w-5 h-5 text-[#ff8c00] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search contacts, headmaster, location, MPC, fees, admission..."
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-[#1e244b] placeholder:text-gray-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200/50 cursor-pointer transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-[#1e244b] hover:bg-gray-200/60 rounded-lg cursor-pointer transition-colors text-xs font-semibold flex items-center gap-1"
            title="Close (Esc)"
          >
            <span className="hidden sm:inline text-[11px] text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded-sm">ESC</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Filter Categories */}
        <div className="px-3 sm:px-4 py-2 border-b border-gray-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {quickCategories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                  active
                    ? "bg-[#1e244b] text-white shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 divide-y divide-gray-50">
          {/* If no results found */}
          {results.length === 0 ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <HelpCircle className="w-10 h-10 text-gray-300 mb-3" />
              <p className="text-sm font-bold text-[#1e244b]">No direct results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-gray-500 max-w-sm mt-1">
                Try searching for phone number, headmaster, location, MPC, fees, or contact our administration directly.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact?.(query);
                  }}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer transition-colors flex items-center gap-1.5"
                >
                  <span>Ask Administration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="group pt-2 first:pt-0 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors cursor-pointer flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-white flex items-center justify-center shrink-0 mt-0.5 border border-gray-200/60 shadow-2xs">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-[#1e244b] group-hover:text-[#ff8c00] transition-colors line-clamp-1">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-[#ff8c00] shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <p className="text-[11px] font-medium text-gray-500 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right Action / Copy Button */}
                <div className="flex items-center gap-1.5 shrink-0 self-center">
                  {item.actionType === "tel" && item.actionPayload && (
                    <button
                      onClick={(e) => handleCopy(e, item.actionPayload!, item.id)}
                      className="p-1.5 text-gray-400 hover:text-[#ff8c00] rounded-md hover:bg-white border border-transparent hover:border-gray-200 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedId === item.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                  {item.actionType === "mailto" && item.actionPayload && (
                    <button
                      onClick={(e) => handleCopy(e, item.actionPayload!, item.id)}
                      className="p-1.5 text-gray-400 hover:text-[#ff8c00] rounded-md hover:bg-white border border-transparent hover:border-gray-200 transition-colors"
                      title="Copy email address"
                    >
                      {copiedId === item.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-gray-300 group-hover:text-[#ff8c00] group-hover:translate-x-0.5 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Suggestions & Help */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-gray-600">Quick suggestions:</span>
            {popularSearches.slice(0, 4).map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2 py-0.5 bg-white border border-gray-200 rounded-md text-[11px] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[11px] text-gray-400">
            <span>Press <kbd className="font-mono bg-white px-1 py-0.5 rounded border border-gray-200 text-gray-600">ESC</kbd> to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
