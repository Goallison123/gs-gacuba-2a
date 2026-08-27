import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../../types/index.js';

export interface BreadcrumbsProps {
  items: { label: string; page?: PageId }[];
  onNavigate: (page: PageId) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" className="flex items-center space-x-2 text-xs sm:text-sm text-[#6d758f] py-3">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 hover:text-[#ff8c00] transition-colors cursor-pointer"
        aria-label="Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {item.page && !isLast ? (
              <button
                onClick={() => item.page && onNavigate(item.page)}
                className="hover:text-[#ff8c00] transition-colors cursor-pointer font-medium"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-[#211f54] font-semibold">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
