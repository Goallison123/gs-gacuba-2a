import { useState } from "react";
import Footer from "../components/Footer";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

const FAQS = [
  {
    q: "Where is GS Gacuba II A located?",
    a: "Groupe Scolaire Gacuba II A is situated in Rubavu District, Western Province, Rwanda, conveniently accessible from the Gisenyi town center and surrounding residential sectors."
  },
  {
    q: "What academic streams are available at Upper Secondary (A-Level)?",
    a: "We offer two premier A-Level combinations accredited by NESA: MS2 (Mathematics, Economics, Geography, and Physics) for science & economics aspirants, and Arts and Humanities (History, Literature in English, Geography, and Psychology)."
  },
  {
    q: "What are the entry requirements for Ordinary Level (S1) and Advanced Level (S4)?",
    a: "For Senior 1, candidates must present a pass slip from the Primary Leaving Examination (PLE). For Senior 4, students need their S3 National Examination transcript and passing aggregates in core prerequisite subjects (Mathematics and Sciences for MS2, Languages and Social Studies for Arts)."
  },
  {
    q: "How can parents track student attendance and academic performance?",
    a: "Parents receive regular SMS attendance notifications, termly comprehensive grade reports, and can access the Student/Parent Portal via our website using their registered phone number."
  },
  {
    q: "What extra-curricular activities and sports are available?",
    a: "We offer competitive football, volleyball, basketball, traditional Rwandan cultural dance (Itorero), robotics/coding club, debate and Model UN, Red Cross first aid, and environmental conservation clubs."
  },
  {
    q: "How do I apply for the 2026/2027 academic intake?",
    a: "You can click 'Apply for Admission' on this website to complete our quick online registration form, or visit our campus admissions office in Rubavu during weekday working hours."
  }
];

export default function FAQPage({ onNavigate, onOpenAsk }: FAQPageProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span>Answers to Common Questions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Find quick answers regarding admissions, streams, schedules, facilities, and parent communication at GS Gacuba II A.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#211f54] text-base hover:text-[#ff8c00] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#ff8c00] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#6d758f] leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-8 text-center space-y-3">
            <p className="text-xs text-gray-500">Have a specific question not answered here?</p>
            <button
              onClick={() => onOpenAsk ? onOpenAsk() : onNavigate("contact")}
              className="bg-[#211f54] hover:bg-[#ff8c00] text-white px-6 py-3 rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask Gacuba AI Assistant</span>
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
