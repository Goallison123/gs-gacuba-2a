import { ArrowRight, ShieldCheck, Award, Sparkles, BookOpen } from 'lucide-react';
import { PageId } from '../types/index.js';
import { Container } from '../components/layout/Container.js';
import { Button } from '../components/ui/Button.js';
import { Badge } from '../components/ui/Badge.js';

export interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmissionModal: () => void;
}

export function HeroSection({ onNavigate, onOpenAdmissionModal }: HeroSectionProps) {
  return (
    <div className="relative bg-[#211f54] text-white min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden">
      {/* Background Graphic / Campus Imagery with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/e0d1a.png')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#19213d] via-[#211f54]/95 to-[#211f54]/80" />

      {/* Decorative subtle backdrop elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#ff8c00]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#c3b091]/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="sand">Rubavu, Rwanda</Badge>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-orange-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#ff8c00]" />
                <span>40+ Years of Secondary Educational Excellence</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
              Nurturing <span className="text-[#ff8c00]">Excellence</span>, Character & Innovation
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-light">
              Welcome to <strong>Groupe Scolaire Gacuba II A</strong>. We empower ambitious young scholars through rigorous science combinations, humanities, competitive sports, and traditional Rwandan cultural values.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAdmissionModal}
                className="shadow-lg shadow-orange-950/20 text-base font-bold flex items-center justify-center gap-2 group"
              >
                <span>Apply for 2026/27 Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="white"
                size="lg"
                onClick={() => onNavigate('academics')}
                className="text-base font-bold flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#ff8c00]" />
                <span>Explore Academic Streams</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#ff8c00] shrink-0" />
                <span className="text-xs font-medium text-gray-300">REB & NESA Accredited</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#ff8c00] shrink-0" />
                <span className="text-xs font-medium text-gray-300">98.6% Exam Distinction</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-gray-300">2026 Admissions Open</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composite Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gray-900 aspect-4/3">
                <img
                  src="/assets/046d0.png"
                  alt="GS Gacuba Science Students in Laboratory"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff8c00] block mb-1">
                    Science & ICT Focus
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Practical physics, chemistry & biology laboratories fostering the next generation of innovators.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-[#211f54] p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-[#ff8c00] font-black text-xl">
                  98%
                </div>
                <div>
                  <h4 className="text-sm font-black leading-tight">National Exam Success</h4>
                  <p className="text-xs text-[#6d758f]">Top ranking school in Rubavu</p>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-4 -right-4 bg-[#ff8c00] text-white px-3.5 py-2 rounded-xl shadow-lg font-bold text-xs flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Modern 50-Seat ICT Hub</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
