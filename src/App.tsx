import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ContactModal from "./components/ContactModal";
import AdmissionModal from "./components/AdmissionModal";
import UserProfileModal from "./components/UserProfileModal";

const pageTitleMap: Record<string, string> = {
  news: "News & Events",
  academics: "Academics",
  admissions: "Admissions",
  "student-life": "Student Life",
  facilities: "Campus Facilities",
  leadership: "School Leadership",
  careers: "Careers & Opportunities",
  faq: "Frequently Asked Questions",
  contact: "Contact Us",
};

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [initialInquiryTopic, setInitialInquiryTopic] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  function handleNavigate(page: string) {
    setActivePage(page);
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

        {activePage !== "home" && activePage !== "about" && activePage !== "gallery" && (
          <ComingSoonPage
            pageKey={activePage}
            pageName={pageTitleMap[activePage] || "Page"}
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
          />
        )}
      </main>

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
