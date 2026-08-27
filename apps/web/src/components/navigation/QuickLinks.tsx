import { FileText, Calendar, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { PageId } from '../../types/index.js';

export interface QuickLinksProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal?: () => void;
}

export function QuickLinks({ onNavigate, onOpenAdmissionModal }: QuickLinksProps) {
  const links = [
    {
      title: 'Online Admissions',
      desc: 'Submit student registration for 2026/2027',
      icon: <FileText className="w-5 h-5 text-[#ff8c00]" />,
      action: () => (onOpenAdmissionModal ? onOpenAdmissionModal() : onNavigate('admissions')),
    },
    {
      title: 'Events & Term Calendar',
      desc: 'View term dates and examinations schedule',
      icon: <Calendar className="w-5 h-5 text-[#ff8c00]" />,
      action: () => onNavigate('events'),
    },
    {
      title: 'Help Center & FAQs',
      desc: 'Common questions on curriculum and fees',
      icon: <HelpCircle className="w-5 h-5 text-[#ff8c00]" />,
      action: () => onNavigate('faq'),
    },
    {
      title: 'Contact Administration',
      desc: 'Inquire directly with our office staff',
      icon: <Phone className="w-5 h-5 text-[#ff8c00]" />,
      action: () => onNavigate('contact'),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {links.map((item, idx) => (
        <button
          key={idx}
          onClick={item.action}
          className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-md hover:border-orange-200 transition-all text-left group flex items-start justify-between cursor-pointer"
        >
          <div>
            <div className="p-2.5 bg-orange-50 rounded-lg inline-block mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="font-bold text-[#211f54] text-sm group-hover:text-[#ff8c00] transition-colors mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-[#6d758f]">{item.desc}</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#ff8c00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </button>
      ))}
    </div>
  );
}
