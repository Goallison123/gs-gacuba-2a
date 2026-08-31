const logo = "/assets/22de8.png";
const iconFacebook = "/assets/0e500.svg";
const iconTwitter = "/assets/865ca.svg";
const iconYoutube = "/assets/b5998.svg";
const iconInstagram = "/assets/1bab9.svg";
const iconMapPin = "/assets/a44bd.svg";
const iconPhone = "/assets/8bd7f.svg";
const iconMail = "/assets/21725.svg";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const quickLinks = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Academics", page: "academics" },
  { label: "Sports & Entertainment", page: "sports" },
  { label: "Admissions", page: "admissions" },
  { label: "Gallery", page: "gallery" },
  { label: "News & Events", page: "news" },
  { label: "Contact Us", page: "contact" },
];

const usefulLinks = [
  { label: "NESA Portal", href: "https://www.nesa.gov.rw" },
  { label: "SDMS National Exams Portal", href: "https://smis.nesa.gov.rw" },
  { label: "MINEDUC Rwanda", href: "https://www.mineduc.gov.rw" },
  { label: "ADEPR Rwanda", href: "#" },
  { label: "REB Learning Portal", href: "https://lms.reb.gov.rw" },
  { label: "Past Examination Papers", href: "#" },
  { label: "Sybella Systems", href: "#" },
];

const socials = [
  { icon: iconFacebook, label: "Facebook", href: "#" },
  { icon: iconTwitter, label: "Twitter / X", href: "#" },
  { icon: iconYoutube, label: "YouTube", href: "#" },
  { icon: iconInstagram, label: "Instagram", href: "#" },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#19213d] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-5">
            <button
              onClick={() => onNavigate("home")}
              className="self-start cursor-pointer text-left"
              aria-label="GS Gacuba Home"
            >
              <img
                src={logo}
                alt="GS Gacuba II A"
                className="h-14 sm:h-16 w-auto object-contain rounded-lg"
              />
            </button>
            <p className="text-[#b4b9c9] text-sm leading-relaxed max-w-[260px]">
              Providing a foundation of academic excellence in Rubavu since 2000.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white/10 hover:bg-[#ff8c00] rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                >
                  <img src={icon} alt="" className="w-4 h-4 object-contain brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className="text-[#b4b9c9] hover:text-[#ff8c00] text-sm transition-colors text-left cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Useful Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {usefulLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b4b9c9] hover:text-[#ff8c00] text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-[#b4b9c9]">
              <div className="flex items-start gap-2.5">
                <img src={iconMapPin} alt="" className="w-4 h-4 mt-0.5 shrink-0 opacity-80" />
                <span>Rubavu District, Western Province, Rwanda</span>
              </div>
              <div className="flex items-center gap-2.5">
                <img src={iconPhone} alt="" className="w-4 h-4 shrink-0 opacity-80" />
                <a href="tel:+250788000000" className="hover:text-white transition-colors">
                  +250 788 000 000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <img src={iconMail} alt="" className="w-4 h-4 shrink-0 opacity-80" />
                <a href="mailto:info@gacuba2a.rw" className="hover:text-white transition-colors">
                  info@gacuba2a.rw
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Badge */}
        <div className="py-4 border-t border-white/10 flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            Proudly developed by <strong className="text-[#ff8c00]">SYBELLA SYSTEMS</strong>
          </span>
        </div>

        {/* Bottom Row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6d758f]">
          <p>© 2024 GS Gacuba II A. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
