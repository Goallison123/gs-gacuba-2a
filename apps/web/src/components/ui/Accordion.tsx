import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : [items[0]?.id || '']
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-[#211f54] hover:text-[#ff8c00] transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4">{item.title}</span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-[#ff8c00]'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-[#6d758f] leading-relaxed border-t border-gray-50">
                <div className="pt-3">{item.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
