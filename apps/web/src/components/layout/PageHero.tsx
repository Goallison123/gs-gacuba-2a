import { PageId } from '../../types/index.js';
import { Container } from './Container.js';
import { Breadcrumbs } from '../ui/Breadcrumbs.js';
import { Badge } from '../ui/Badge.js';

export interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; page?: PageId }[];
  onNavigate: (page: PageId) => void;
  backgroundImage?: string;
}

export function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  onNavigate,
  backgroundImage = '/assets/e0d1a.png',
}: PageHeroProps) {
  return (
    <div className="relative bg-[#211f54] text-white py-16 sm:py-20 overflow-hidden border-b border-white/10">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#211f54] via-[#211f54]/90 to-[#211f54]/70" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="bg-white/10 backdrop-blur-xs rounded-lg px-3 py-1 inline-block mb-4">
            <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
          </div>

          {badge && (
            <div className="mb-3">
              <Badge variant="sand">{badge}</Badge>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
