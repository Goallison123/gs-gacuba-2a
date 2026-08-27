import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';

export function TopBar() {
  return (
    <div className="bg-[#19213d] text-gray-300 text-xs border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>Rubavu, Gisenyi, Western Province, Rwanda</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Clock className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>Mon–Fri: 07:30 AM – 05:00 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-[#ff8c00] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-[#ff8c00] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
