import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import AcademicsPage from "./pages/AcademicsPage";
import SportsPage from "./pages/SportsPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ContactModal from "./components/ContactModal";
import AdmissionModal from "./components/AdmissionModal";
import UserProfileModal from "./components/UserProfileModal";
import SearchModal from "./components/SearchModal";

const pageMetaMap: Record<string, { title: string; desc: string }> = {
  home: {
    title: "GS Gacuba II A | Excellence in Academics, Discipline & Character",
    desc: "Official website for GS Gacuba II A in Rubavu District, Rwanda — featuring academic programs, admissions, campus gallery, news, and school information.",
  },
  about: {
    title: "About Us | GS Gacuba II A",
    desc: "Learn about the heritage, mission, vision, leadership, and foundation pillars of GS Gacuba II A in Rubavu, Rwanda.",
  },
  gallery: {
    title: "Campus Gallery | GS Gacuba II A",
    desc: "Explore visual moments, student activities, sports, cultural events, and academic life at GS Gacuba II A.",
  },
  news: {
    title: "News & Announcements | GS Gacuba II A",
    desc: "Latest news, academic achievements, national exam performance, and event announcements from GS Gacuba II A.",
  },
  academics: {
    title: "Academics & Pathways | GS Gacuba II A",
    desc: "Explore academic streams at GS Gacuba II A including Advanced Level (MS2, Arts & Humanities) and Ordinary Level CBC foundations.",
  },
  sports: {
    title: "Sports & Entertainment | GS Gacuba II A",
    desc: "Build strength, discipline, and champions. Explore basketball, football, athletics, and cultural troupes at GS Gacuba II A in Rubavu.",
  },
  admissions: {
    title: "Admissions | GS Gacuba II A",
    desc: "Admission criteria, application requirements, and enrollment details for secondary education at GS Gacuba II A.",
  },
  "student-life": {
    title: "Student Life | GS Gacuba II A",
    desc: "Clubs, athletics, cultural troupes, guided self-study, and student community life at GS Gacuba II A.",
  },
  facilities: {
    title: "Campus Facilities | GS Gacuba II A",
    desc: "Tour the modern ICT laboratories, science experimental labs, library, and sports facilities at GS Gacuba II A.",
  },
  leadership: {
    title: "School Leadership | GS Gacuba II A",
    desc: "Meet the headmaster, administrative board, and dedicated teaching faculty of GS Gacuba II A.",
  },
  careers: {
    title: "Careers & Opportunities | GS Gacuba II A",
    desc: "Teaching opportunities and career openings at GS Gacuba II A in Rubavu District, Rwanda.",
  },
  faq: {
    title: "Frequently Asked Questions | GS Gacuba II A",
    desc: "Find answers to frequently asked questions about admissions, academic streams, school fees, and campus life.",
  },
  contact: {
    title: "Contact Us | GS Gacuba II A",
    desc: "Get in touch with GS Gacuba II A administration, admissions office, and faculty in Rubavu District, Western Province, Rwanda.",
  },
};

const routeAliases: Record<string, string> = {
  "": "home",
  home: "home",
  about: "about",
  "about-us": "about",
  gallery: "gallery",
  "campus-gallery": "gallery",
  photos: "gallery",
  news: "news",
  "news-and-events": "news",
  events: "news",
  announcements: "news",
  academics: "academics",
  "academic-programs": "academics",
  programs: "academics",
  curriculum: "academics",
  sports: "sports",
  "sports-and-entertainment": "sports",
  "sports-entertainment": "sports",
  athletics: "sports",
  entertainment: "sports",
  games: "sports",
  admissions: "admissions",
  admission: "admissions",
  apply: "admissions",
  "student-life": "student-life",
  studentlife: "student-life",
  life: "student-life",
  facilities: "facilities",
  "campus-facilities": "facilities",
  leadership: "leadership",
  staff: "leadership",
  administration: "leadership",
  careers: "careers",
  jobs: "careers",
  faq: "faq",
  faqs: "faq",
  help: "faq",
  contact: "contact",
  "contact-us": "contact",
};

function getPageFromUrl(): string {
  if (typeof window === "undefined") return "home";

  // 1. Check pathname first
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (pathname && routeAliases[pathname]) {
    return routeAliases[pathname];
  }

  // 2. Check hash fallback (e.g. #/academics or #academics)
  const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase().split("?")[0];
  if (hash && routeAliases[hash]) {
    return routeAliases[hash];
  }

  // 3. Check query param fallback (?page=academics)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const queryPage = urlParams.get("page")?.toLowerCase();
    if (queryPage && routeAliases[queryPage]) {
      return routeAliases[queryPage];
    }
  } catch {
    // Ignore URL parse error in restricted environments
  }

  return "home";
}

export default function App() {
  const [activePage, setActivePage] = useState<string>(() => getPageFromUrl());
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState("");
  const [initialInquiryTopic, setInitialInquiryTopic] = useState("");

  // Update browser URL and title
  const syncUrlAndMeta = useCallback((page: string, replace = false) => {
    if (typeof window === "undefined") return;

    const targetPath = page === "home" ? "/" : `/${page}`;
    const currentPath = window.location.pathname;

    if (currentPath !== targetPath) {
      if (replace) {
        window.history.replaceState({ page }, "", targetPath);
      } else {
        window.history.pushState({ page }, "", targetPath);
      }
    }

    // Update document title and description meta tag
    const defaultMeta = pageMetaMap["home"] ?? {
      title: "GS Gacuba II A | Excellence in Academics, Discipline & Character",
      desc: "Official website for GS Gacuba II A in Rubavu District, Rwanda — featuring academic programs, admissions, campus gallery, news, and school information.",
    };
    const meta = pageMetaMap[page] ?? defaultMeta;
    document.title = meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", meta.desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", meta.desc);
    }
  }, []);

  // Listen for browser Back/Forward navigation (popstate)
  useEffect(() => {
    function handlePopState() {
      const page = getPageFromUrl();
      setActivePage(page);
      const defaultMeta = pageMetaMap["home"] ?? {
        title: "GS Gacuba II A | Excellence in Academics, Discipline & Character",
        desc: "Official website for GS Gacuba II A in Rubavu District, Rwanda — featuring academic programs, admissions, campus gallery, news, and school information.",
      };
      const meta = pageMetaMap[page] ?? defaultMeta;
      document.title = meta.title;
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Initialize query actions (e.g., ?apply=true or ?ask=...)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("apply") === "true" || urlParams.get("admission") === "true") {
        setAdmissionModalOpen(true);
      }
      const askQuery = urlParams.get("ask") || urlParams.get("inquiry");
      if (askQuery) {
        setInitialInquiryTopic(askQuery);
        setContactModalOpen(true);
      }
      const searchParam = urlParams.get("search") || urlParams.get("q");
      if (searchParam) {
        setInitialSearchQuery(searchParam);
        setSearchModalOpen(true);
      }
      if (urlParams.get("portal") === "true" || urlParams.get("profile") === "true") {
        setProfileModalOpen(true);
      }
    } catch {
      // Ignore URLSearchParams error in restricted sandboxes
    }
  }, []);

  // Synchronize on activePage state change
  useEffect(() => {
    syncUrlAndMeta(activePage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage, syncUrlAndMeta]);

  function handleNavigate(page: string) {
    const targetPage = routeAliases[page.toLowerCase()] || page;
    setActivePage(targetPage);
  }

  function handleOpenSearch(query?: string) {
    setInitialSearchQuery(query || "");
    setSearchModalOpen(true);
  }

  function handleOpenAsk(query?: string) {
    if (query) {
      setInitialInquiryTopic(query);
    } else {
      setInitialInquiryTopic("");
    }
    setContactModalOpen(true);
  }

  function handleOpenAdmission() {
    setAdmissionModalOpen(true);
  }

  function handleOpenProfile() {
    setProfileModalOpen(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#211f54] antialiased selection:bg-[#ff8c00] selection:text-white">
      {/* Top Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenAsk={handleOpenAsk}
        onOpenAdmission={handleOpenAdmission}
        onOpenProfile={handleOpenProfile}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Page Routing */}
      <main className="flex-1 flex flex-col">
        {activePage === "home" && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "about" && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "gallery" && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "news" && (
          <NewsPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "academics" && (
          <AcademicsPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "sports" && (
          <SportsPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage !== "home" &&
          activePage !== "about" &&
          activePage !== "gallery" &&
          activePage !== "news" &&
          activePage !== "academics" &&
          activePage !== "sports" && (
            <ComingSoonPage
              pageKey={activePage}
              pageName={pageMetaMap[activePage]?.title?.split("|")[0]?.trim() || "Page"}
              onNavigate={handleNavigate}
              onOpenAdmission={handleOpenAdmission}
            />
          )}
      </main>

      {/* Instant Spotlight / Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        initialQuery={initialSearchQuery}
        onNavigate={handleNavigate}
        onOpenAdmission={handleOpenAdmission}
        onOpenContact={handleOpenAsk}
        onOpenProfile={handleOpenProfile}
      />

      {/* Direct Contact / Inquiry Modal for the Ask button */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialTopic={initialInquiryTopic}
        onNavigate={handleNavigate}
      />

      {/* Interactive Admission Application Modal */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Interactive User / Parent / Student Portal Modal */}
      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onNavigate={handleNavigate}
        onOpenAdmission={handleOpenAdmission}
      />
    </div>
  );
}
