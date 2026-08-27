import { ArrowRight, Quote, Award } from 'lucide-react';
import { PageId } from '../types/index.js';
import { Container } from '../components/layout/Container.js';
import { Section } from '../components/layout/Section.js';
import { Button } from '../components/ui/Button.js';
import { Badge } from '../components/ui/Badge.js';

export function WelcomePrincipalSection({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <Section variant="slate" padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Principal Portrait & Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/5 bg-gray-200">
                <img
                  src="/assets/07117.png"
                  alt="Murenzi Emmanuel - Headteacher of GS Gacuba II A"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211f54]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg leading-snug">Murenzi Emmanuel</h3>
                  <p className="text-xs text-[#ff8c00] font-medium">
                    Headteacher / Principal, GS Gacuba II A
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#211f54] text-white p-3.5 rounded-xl shadow-lg border border-white/10 hidden sm:flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#ff8c00]" />
                <span className="text-xs font-bold">18+ Years Leadership</span>
              </div>
            </div>
          </div>

          {/* Welcome Text & Message */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <Badge variant="navy">Principal's Address</Badge>
              <span className="text-xs font-bold text-[#6d758f] uppercase tracking-wider">
                Leadership Welcome
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#211f54] font-display leading-tight">
              "Building disciplined leaders equipped for science, innovation, and global citizenship."
            </h2>

            <div className="relative pl-6 border-l-2 border-[#ff8c00] space-y-3 text-sm sm:text-base text-[#353e5c] leading-relaxed">
              <Quote className="w-6 h-6 text-[#ff8c00]/40 -ml-10 inline-block mb-1" />
              <p>
                At <strong>Groupe Scolaire Gacuba II A</strong>, we believe every child possesses the innate potential to excel when guided by exceptional educators, world-class laboratory resources, and strong ethical foundations.
              </p>
              <p>
                Located in the scenic district of Rubavu, our institution combines the rigorous national competency-based curriculum with hands-on STEM experiments, linguistic mastery, and Rwandan cultural values (Indangagaciro). We invite parents and guardians to partner with us as we shape bright futures.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="secondary"
                size="md"
                onClick={() => onNavigate('about')}
                className="flex items-center gap-2"
              >
                <span>Read Full School History</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => onNavigate('leadership')}
              >
                Meet Our Leadership Team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
