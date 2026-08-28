import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import StudentLifePage from "./pages/StudentLifePage";
import FacilitiesPage from "./pages/FacilitiesPage";
import LeadershipPage from "./pages/LeadershipPage";
import CareersPage from "./pages/CareersPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import AskModal from "./components/AskModal";
import AdmissionModal from "./components/AdmissionModal";
import UserProfileModal from "./components/UserProfileModal";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [initialAskQuery, setInitialAskQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  function handleNavigate(page: string) {
    setActivePage(page);
  }

  function handleOpenAsk(query?: string) {
    if (query) {
      setInitialAskQuery(query);
    } else {
      setInitialAskQuery("");
    }
    setAskModalOpen(true);
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

        {activePage === "admissions" && (
          <AdmissionsPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "student-life" && (
          <StudentLifePage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "facilities" && (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "leadership" && (
          <LeadershipPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "careers" && (
          <CareersPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "faq" && (
          <FAQPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}

        {activePage === "contact" && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenAdmission={handleOpenAdmission}
            onOpenAsk={handleOpenAsk}
          />
        )}
      </main>

      {/* Interactive AI Assistant Modal */}
      <AskModal
        isOpen={askModalOpen}
        onClose={() => setAskModalOpen(false)}
        initialQuery={initialAskQuery}
        onNavigate={handleNavigate}
        onOpenAdmission={handleOpenAdmission}
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
