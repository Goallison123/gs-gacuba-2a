import Footer from "../components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AdmissionsPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

export default function AdmissionsPage({ onNavigate, onOpenAdmission }: AdmissionsPageProps) {
  function handleAdmission() {
    if (onOpenAdmission) onOpenAdmission();
    else onNavigate("admissions");
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>2026/2027 Academic Year Admissions Now Open</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Join Our Community of Achievers
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Experience transformative secondary education at GS Gacuba II A in Rubavu District. Follow our simple application process below.
            </p>
            <div className="pt-2">
              <button
                onClick={handleAdmission}
                className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Start Online Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#211f54]">Application Process in 4 Steps</h2>
            <p className="text-[#6d758f] text-sm mt-2">Transparent, streamlined, and guided by our admissions desk.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Complete Application Form",
                desc: "Fill out student personal data, prior school aggregates, and chosen stream (MS2, Arts, O-Level)."
              },
              {
                step: "02",
                title: "Submit Academic Records",
                desc: "Provide Primary Leaving (PLE) or S3 National Examination slips and school report cards."
              },
              {
                step: "03",
                title: "Admissions Review",
                desc: "The Academic Board verifies eligibility against national merit standards and classroom quotas."
              },
              {
                step: "04",
                title: "Orientation & Enrollment",
                desc: "Receive your official admission letter, student ID number, and join our welcome assembly in Rubavu."
              },
            ].map((st) => (
              <div key={st.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative">
                <span className="text-3xl font-black text-[#ff8c00]/30 absolute top-4 right-4">{st.step}</span>
                <h3 className="font-bold text-[#211f54] text-base mb-2">{st.title}</h3>
                <p className="text-xs text-[#6d758f] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Fee Info */}
      <section className="py-16 bg-[#fff9ef] border-y border-[#ffe8c0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#211f54]">Required Documentation</h3>
              <p className="text-xs sm:text-sm text-gray-600">Please prepare digital copies or physical documents:</p>
              <div className="space-y-2.5">
                {[
                  "Official NESA / REB National Examination Result Slip (S3 or Primary Leaving)",
                  "Two recent passport-sized photographs in standard school attire",
                  "Original School Report Cards / Academic Transcripts for previous 2 terms",
                  "Copy of Student Birth Certificate / National ID (if 16+)",
                  "Parent or Legal Guardian National Identification Copy",
                  "Medical Clearance / Health Insurance card (Mutuelle de Santé / RAMA)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#ff8c00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-200 space-y-4">
              <h3 className="text-xl font-bold text-[#211f54]">Subsidized Fee Structure &amp; Grants</h3>
              <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed">
                As a premier government-subsidized public-partnership institution, GS Gacuba II A offers highly accessible fee tiers adhering to MINEDUC / REB official guidelines.
              </p>
              <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-700">
                <div className="flex justify-between py-1">
                  <span>Tuition &amp; Educational Core:</span>
                  <span className="font-bold text-emerald-600">Subsidized / Free</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Science Laboratory &amp; ICT Hub Fee:</span>
                  <span className="font-bold text-[#211f54]">Modest Term Contribution</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>School Uniform &amp; Sports Kit:</span>
                  <span className="font-bold text-[#211f54]">One-off Enrollment Package</span>
                </div>
              </div>
              <button
                onClick={handleAdmission}
                className="w-full bg-[#211f54] hover:bg-[#ff8c00] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors text-center"
              >
                Apply Online Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
