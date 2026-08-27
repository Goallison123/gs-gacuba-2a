import { CheckCircle, Users } from 'lucide-react';
import { Facility } from '../../types/index.js';
import { Card } from '../ui/Card.js';
import { Badge } from '../ui/Badge.js';

export interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        <img
          src={facility.imageUrl}
          alt={facility.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="navy">{facility.category}</Badge>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#ff8c00] font-semibold mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>{facility.capacity}</span>
          </div>

          <h3 className="text-xl font-bold text-[#211f54] leading-snug mb-3">
            {facility.title}
          </h3>

          <p className="text-sm text-[#6d758f] leading-relaxed mb-4">
            {facility.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-bold text-[#211f54] uppercase tracking-wider mb-2">
              Facility Features:
            </h4>
            <ul className="space-y-1.5">
              {facility.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#353e5c]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
