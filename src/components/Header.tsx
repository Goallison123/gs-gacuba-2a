import { useState } from "react";

const logo = "/assets/22de8.png";

const navLinks = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Academics", page: "academics" },
  { label: "Admissions", page: "admissions" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px] py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="shrink-0 cursor-pointer"
          aria-label="Go to home"
        >
          <img src={logo} alt="GS Gacuba II A" className="h-16 w-auto object-contain" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activePage === link.page
                  ? "text-[#ff8c00]"
                  : "text-[#6d758f] hover:text-[#211f54]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate("admissions")}
          className="hidden lg:flex items-center gap-2 bg-[#211f54] text-white text-sm font-semibold px-5 py-3 rounded-md hover:bg-[#2d2a70] transition-colors cursor-pointer"
        >
          Apply Now
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#211f54] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#211f54] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#211f54] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 sm:px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => { onNavigate(link.page); setMenuOpen(false); }}
              className={`text-sm font-semibold text-left transition-colors cursor-pointer ${
                activePage === link.page ? "text-[#ff8c00]" : "text-[#6d758f]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate("admissions"); setMenuOpen(false); }}
            className="mt-2 bg-[#211f54] text-white text-sm font-semibold px-5 py-3 rounded-md cursor-pointer text-left"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}
