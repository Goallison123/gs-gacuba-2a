import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../../types/index.js';
import { siteConfig } from '../../config/siteConfig.js';
import { navigationLinks } from '../../data/navigation.js';
import { Button } from '../ui/Button.js';
import { cn } from '../../utils/cn.js';

export interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal?: () => void;
}

export function Header({ currentPage, onNavigate, onOpenAdmissionModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50/50 p-1 border border-orange-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
              <img
                src={siteConfig.logo}
                alt="GS Gacuba II A"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <span className="block font-black text-lg sm:text-xl text-[#211f54] leading-tight font-display tracking-tight group-hover:text-[#ff8c00] transition-colors">
                GS GACUBA II A
              </span>
              <span className="block text-[11px] font-semibold text-[#6d758f] uppercase tracking-wider">
                Excellence & Discipline
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap',
                    isActive
                      ? 'text-[#ff8c00] bg-orange-50/80 font-bold'
                      : 'text-[#211f54] hover:text-[#ff8c00] hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                if (onOpenAdmissionModal) {
                  onOpenAdmissionModal();
                } else {
                  handleNavClick('admissions');
                }
              }}
              className="hidden sm:inline-flex shadow-sm hover:shadow"
            >
              Apply for Admission
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#211f54] hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navigationLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-[#211f54] text-white font-bold'
                      : 'text-[#211f54] hover:bg-gray-50 hover:text-[#ff8c00]'
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAdmissionModal) {
                  onOpenAdmissionModal();
                } else {
                  handleNavClick('admissions');
                }
              }}
              className="w-full justify-center"
            >
              Apply for Admission
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleNavClick('contact')}
              className="w-full justify-center"
            >
              Contact School Office
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
