import { Clock, MapPin } from 'lucide-react';
import { SchoolEventItem } from '../../types/index.js';
import { Card } from '../ui/Card.js';
import { Badge } from '../ui/Badge.js';

export interface EventCardProps {
  event: SchoolEventItem;
}

export function EventCard({ event }: EventCardProps) {
  // Parse date into Month & Day badge
  const dateParts = event.date.split(' ');
  const month = dateParts[0] || 'Term';
  const day = dateParts[1] ? dateParts[1].replace(',', '') : '15';

  return (
    <Card className="flex flex-col sm:flex-row items-start p-5 sm:p-6 gap-4 sm:gap-6 border-l-4 border-l-[#ff8c00]">
      <div className="flex sm:flex-col items-center justify-center bg-[#211f54] text-white px-4 py-3 sm:w-20 sm:h-20 rounded-xl shrink-0 shadow-xs text-center">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#ff8c00]">{month}</span>
        <span className="text-xl sm:text-2xl font-black">{day}</span>
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant={event.highlight ? 'primary' : 'navy'}>{event.category}</Badge>
          {event.highlight && (
            <span className="text-xs font-semibold text-[#ff8c00]">★ Highlight</span>
          )}
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#211f54] mb-2 leading-snug">
          {event.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed mb-3">
          {event.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#353e5c]">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#ff8c00]" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
