import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlaceholderPage from "./pages/PlaceholderPage";

const placeholderPages: Record<string, { title: string; description: string }> = {
  academics: {
    title: "Academics",
    description:
      "Explore our academic programs including Ordinary Level, MS2, and Arts & Humanities streams designed to nurture the next generation of leaders and innovators.",
  },
  admissions: {
    title: "Admissions",
    description:
      "Start your journey at GS Gacuba II A. Learn about our admission process, requirements, and how to apply for the upcoming academic year.",
  },
  gallery: {
    title: "Gallery",
    description:
      "Browse photos from our campus, school events, student life, and academic programs at GS Gacuba II A in Rubavu District.",
  },
  news: {
    title: "News & Events",
    description:
      "Stay up to date with the latest news, announcements, and upcoming events at GS Gacuba II A.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with the GS Gacuba II A administration team. We are located in Rubavu District, Western Province, Rwanda.",
  },
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  function navigate(page: string) {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col min-h-full">
      <Header activePage={activePage} onNavigate={navigate} />

      <main className="flex-1">
        {activePage === "home" && <HomePage onNavigate={navigate} />}
        {activePage === "about" && <AboutPage onNavigate={navigate} />}
        {Object.keys(placeholderPages).includes(activePage) && (
          <PlaceholderPage
            title={placeholderPages[activePage].title}
            description={placeholderPages[activePage].description}
            onNavigate={navigate}
          />
        )}
      </main>
    </div>
  );
}
