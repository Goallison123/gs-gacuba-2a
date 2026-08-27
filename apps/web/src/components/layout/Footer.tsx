import { Phone, Mail, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { PageId } from '../../types/index.js';
import { siteConfig } from '../../config/siteConfig.js';
import { Container } from './Container.js';
import { NewsletterForm } from '../forms/NewsletterForm.js';

export interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks: { label: string; page: PageId }[] = [
    { label: 'About GS Gacuba', page: 'about' },
    { label: 'Academic Curriculum', page: 'academics' },
    { label: 'Admissions & Requirements', page: 'admissions' },
    { label: 'Student Life & Clubs', page: 'student-life' },
    { label: 'Campus Facilities', page: 'facilities' },
    { label: 'Leadership & Faculty', page: 'leadership' },
  ];

  const exploreLinks: { label: string; page: PageId }[] = [
    { label: 'Latest News & Stories', page: 'news' },
    { label: 'Events Calendar', page: 'events' },
    { label: 'Photo Gallery', page: 'gallery' },
    { label: 'Career Opportunities', page: 'careers' },
    { label: 'Frequently Asked Questions', page: 'faq' },
    { label: 'Contact Administration', page: 'contact' },
  ];

  return (
    <footer className="bg-[#19213d] text-gray-300 pt-16 pb-8 border-t-4 border-[#ff8c00]">
      <Container>
        {/* Top Newsletter Grid */}
        <div className="bg-[#211f54] rounded-2xl p-6 sm:p-10 mb-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2">
              Stay Connected With GS Gacuba II A
            </h3>
            <p className="text-sm text-gray-300">
              Receive official school announcements, academic schedules, term circulars, and celebration recaps directly in your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <NewsletterForm />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={siteConfig.logo}
                  alt="GS Gacuba Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base leading-tight">
                  {siteConfig.name}
                </h4>
                <p className="text-xs text-[#ff8c00] font-medium">{siteConfig.tagline}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Empowering Rwandan youth through quality secondary education, scientific inquiry, disciplined leadership, and Rwandan cultural values (Indangagaciro).
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                School Motto
              </span>
              <p className="text-xs text-orange-200 font-serif italic">"{siteConfig.motto}"</p>
            </div>
          </div>

          {/* Col 2: Academic & Admissions */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff8c00]" />
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="hover:text-[#ff8c00] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Community & Resources */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff8c00]" />
              Explore & Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {exploreLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="hover:text-[#ff8c00] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff8c00]" />
              Contact Information
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#ff8c00] shrink-0 mt-0.5" />
              <span>{siteConfig.location} ({siteConfig.address})</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-300">
              <Phone className="w-4 h-4 text-[#ff8c00] shrink-0" />
              <span>{siteConfig.phone} / {siteConfig.secondaryPhone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-300">
              <Mail className="w-4 h-4 text-[#ff8c00] shrink-0" />
              <span>{siteConfig.email}</span>
            </div>

            <div className="pt-3">
              <a
                href="https://reb.rw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-orange-300 hover:text-white transition-colors"
              >
                <span>Accredited by Rwanda Basic Education Board</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
              Help Center & FAQs
            </button>
            <button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">
              Employment
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact School Office
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
