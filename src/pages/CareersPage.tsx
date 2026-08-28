import Footer from "../components/Footer";
import { Briefcase, CheckCircle2, MapPin, Clock } from "lucide-react";

interface CareersPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const openings = [
  {
    title: "Senior Mathematics & Physics Teacher (MS2 A-Level)",
    department: "Sciences / MS2 Stream",
    type: "Full-Time",
    location: "Rubavu Campus",
    deadline: "September 15, 2026",
    requirements: [
      "Bachelor's Degree in Education with Mathematics/Physics or equivalent (REB Certified)",
      "Minimum 3 years proven secondary teaching experience with high NESA national exam pass records",
      "Proficiency in English instruction and interactive laboratory experiment facilitation"
    ]
  },
  {
    title: "Literature in English & History Instructor (Arts Stream)",
    department: "Humanities & Languages",
    type: "Full-Time",
    location: "Rubavu Campus",
    deadline: "September 20, 2026",
    requirements: [
      "Bachelor's Degree in Education (English & History) or relevant discipline",
      "Demonstrated passion for debate, essay writing coaching, and creative arts clubs",
      "Strong pedagogical skills adhering to Rwanda Competence-Based Curriculum (CBC)"
    ]
  },
  {
    title: "ICT Hub & Computer Lab Technician",
    department: "Technology & Campus Operations",
    type: "Full-Time",
    location: "Rubavu Campus",
    deadline: "September 30, 2026",
    requirements: [
      "Diploma or Degree in Computer Science, Information Technology, or Network Systems",
      "Experience maintaining Linux/Windows client workstations, local networks, and educational software",
      "Supportive attitude in mentoring student robotics and coding clubs"
    ]
  }
];

export default function CareersPage({ onNavigate }: CareersPageProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <Briefcase className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Join Our Academic Community</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Careers &amp; Opportunities
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Shape Rwanda&apos;s next generation of scientists, economists, and leaders. We offer a supportive, high-performing environment for passionate educators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#211f54]">Current Vacancies (2026/27)</h2>
            <p className="text-sm text-gray-600 mt-1">Review criteria and submit your cover letter and curriculum vitae.</p>
          </div>

          <div className="space-y-6">
            {openings.map((job, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#ff8c00] font-bold mb-1">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#211f54]">{job.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Deadline: {job.deadline}</span>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert(`Application instructions for "${job.title}": Please email your CV and academic degrees to careers@gacuba2a.rw.`);
                    }}
                    className="bg-[#211f54] hover:bg-[#ff8c00] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
                  >
                    Apply for Position
                  </button>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Key Requirements:</p>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-gray-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8c00] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
