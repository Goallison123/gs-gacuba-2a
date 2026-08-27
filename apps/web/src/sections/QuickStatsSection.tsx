import { Users, GraduationCap, Award, Calendar } from 'lucide-react';
import { Container } from '../components/layout/Container.js';
import { siteConfig } from '../config/siteConfig.js';

export function QuickStatsSection() {
  const statIcons = [
    <Users className="w-7 h-7 text-[#ff8c00]" />,
    <GraduationCap className="w-7 h-7 text-[#ff8c00]" />,
    <Award className="w-7 h-7 text-[#ff8c00]" />,
    <Calendar className="w-7 h-7 text-[#ff8c00]" />,
  ];

  return (
    <div className="relative -mt-10 z-20">
      <Container>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-2 pt-4 lg:pt-2 first:pt-2"
            >
              <div className="p-3 rounded-xl bg-orange-50 mb-3">{statIcons[idx]}</div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#211f54] font-display mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#6d758f]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
