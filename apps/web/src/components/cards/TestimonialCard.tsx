import { Quote } from 'lucide-react';
import { TestimonialItem } from '../../types/index.js';
import { Card } from '../ui/Card.js';

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 sm:p-8 flex flex-col justify-between h-full bg-slate-50/70 border-slate-200/80">
      <div>
        <Quote className="w-8 h-8 text-[#ff8c00]/60 mb-4" />
        <p className="text-sm sm:text-base text-[#353e5c] italic leading-relaxed mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
        <div className="w-10 h-10 rounded-full bg-[#211f54] text-white flex items-center justify-center font-bold text-sm">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#211f54]">{testimonial.author}</h4>
          <p className="text-xs text-[#6d758f]">{testimonial.relation}</p>
        </div>
      </div>
    </Card>
  );
}
