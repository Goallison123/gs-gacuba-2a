import { ArrowRight, BookOpen, Atom, Compass, Award } from 'lucide-react';
import { AcademicProgram, PageId } from '../../types/index.js';
import { Card } from '../ui/Card.js';
import { Badge } from '../ui/Badge.js';
import { Button } from '../ui/Button.js';

export interface ProgramCardProps {
  program: AcademicProgram;
  onExplore: (page: PageId) => void;
}

export function ProgramCard({ program, onExplore }: ProgramCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-[#ff8c00]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#ff8c00]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#ff8c00]" />;
    }
  };

  return (
    <Card className="flex flex-col h-full p-6 sm:p-8 justify-between border-t-4 border-t-[#211f54] hover:border-t-[#ff8c00]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
            {getIcon(program.iconName)}
          </div>
          <Badge variant="navy">{program.duration}</Badge>
        </div>

        <div className="mb-2">
          <Badge variant="sand" className="mb-2">{program.badge}</Badge>
          <h3 className="text-xl font-bold text-[#211f54] leading-snug">{program.title}</h3>
        </div>

        <p className="text-sm text-[#6d758f] leading-relaxed mb-6">
          {program.description}
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-bold text-[#211f54] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#ff8c00]" /> Core Subject Areas:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#353e5c]">
              {program.curriculum.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#ff8c00] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
        <span className="text-xs font-semibold text-[#6d758f]">{program.level}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onExplore('academics')}
          className="text-[#ff8c00] hover:text-[#e07b00] p-0 font-bold flex items-center gap-1"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
