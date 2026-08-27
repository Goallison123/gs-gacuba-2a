import { Mail, GraduationCap } from 'lucide-react';
import { StaffMember } from '../../types/index.js';
import { Card } from '../ui/Card.js';
import { Badge } from '../ui/Badge.js';

export interface StaffCardProps {
  staff: StaffMember;
}

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden text-center items-center p-6 border-t-2 border-t-[#211f54]/20 hover:border-t-[#ff8c00]">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-orange-100 shadow-xs bg-gray-100">
        <img
          src={staff.imageUrl}
          alt={staff.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <Badge variant="navy" className="mb-2 text-[10px]">
        {staff.department}
      </Badge>

      <h3 className="text-lg font-bold text-[#211f54] leading-snug mb-1">{staff.name}</h3>
      <p className="text-xs font-semibold text-[#ff8c00] mb-3">{staff.role}</p>

      <div className="flex items-center gap-1.5 text-xs text-[#353e5c] bg-slate-50 px-3 py-1.5 rounded-lg mb-3 w-full justify-center">
        <GraduationCap className="w-3.5 h-3.5 text-[#ff8c00] shrink-0" />
        <span className="truncate">{staff.qualification}</span>
      </div>

      <p className="text-xs text-[#6d758f] leading-relaxed mb-4 line-clamp-3">
        {staff.bio}
      </p>

      {staff.email && (
        <a
          href={`mailto:${staff.email}`}
          className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#211f54] hover:text-[#ff8c00] transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>{staff.email}</span>
        </a>
      )}
    </Card>
  );
}
