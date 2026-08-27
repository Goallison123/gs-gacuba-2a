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
  { label: "Gallery", page: "gallery" },
  { label: "News & Events", page: "news" },
  { label: "Contact", page: "contact" },
];

const usefulLinks = [
  { label: "NESA", href: "https://www.nesa.gov.rw" },
  { label: "National Exams Portal", href: "https://smis.nesa.gov.rw" },
  { label: "Mineduc", href: "https://www.mineduc.gov.rw" },
  { label: "REB Learning Portal", href: "https://lms.reb.gov.rw" },
  { label: "Past Papers", href: "#" },
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
    <footer className="bg-[#19213d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[167px] pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <img src={logo} alt="GS Gacuba II A" className="h-16 w-auto object-contain self-start rounded-lg" />
            <p className="text-[#b4b9c9] text-sm leading-[22px] max-w-[240px]">
              Providing a foundation of academic excellence in Rubavu since 2000.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white/[0.08] rounded-full size-9 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <img src={icon} alt="" className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-xs font-bold tracking-[0.84px] uppercase">Quick Links</p>
            {quickLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="text-[#b4b9c9] text-sm hover:text-white transition-colors text-left cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-xs font-bold tracking-[0.84px] uppercase">Useful Links</p>
            {usefulLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b4b9c9] text-sm hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-xs font-bold tracking-[0.84px] uppercase">Contact Us</p>
            <div className="flex gap-2 items-start">
              <img src={iconMapPin} alt="" className="size-4 mt-0.5 shrink-0" />
              <p className="text-[#b4b9c9] text-[13px] leading-5">Rubavu District, Western Province, Rwanda</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={iconPhone} alt="" className="size-4 shrink-0" />
              <p className="text-[#b4b9c9] text-[13px]">+250 788 000 000</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={iconMail} alt="" className="size-4 shrink-0" />
              <p className="text-[#b4b9c9] text-[13px]">info@gacuba2a.rw</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6d758f] text-[13px]">© 2024 GS Gacuba II A. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6d758f] text-[13px] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#6d758f] text-[13px] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <p className="text-center text-[#6d758f] text-[12px] mt-4">Proudly developed by SYBELLA SYSTEMS</p>
      </div>
    </footer>
  );
}
