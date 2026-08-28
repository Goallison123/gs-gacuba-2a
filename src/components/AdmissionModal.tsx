import { useState } from "react";
import { X, CheckCircle2, Send, GraduationCap } from "lucide-react";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export default function AdmissionModal({ isOpen, onClose, onNavigate }: AdmissionModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    gender: "Male",
    dateOfBirth: "",
    levelApplied: "MS2",
    previousSchool: "",
    previousAggregate: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    residenceDistrict: "Rubavu",
    specialNotes: ""
  });

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const randomRef = "GSG-" + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(randomRef);
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setStep(1);
    setFormData({
      studentFirstName: "",
      studentLastName: "",
      gender: "Male",
      dateOfBirth: "",
      levelApplied: "MS2",
      previousSchool: "",
      previousAggregate: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      residenceDistrict: "Rubavu",
      specialNotes: ""
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-100">
        {/* Header */}
        <div className="bg-[#211f54] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff8c00] flex items-center justify-center text-white font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Student Admission Application</h3>
              <p className="text-xs text-gray-300">2026/2027 Academic Year — GS Gacuba II A</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#211f54]">Application Submitted Successfully!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you for applying to GS Gacuba II A. Your application has been logged into our admissions system.
              </p>

              <div className="bg-[#fff9ef] border border-[#ffe8c0] rounded-xl p-4 max-w-sm mx-auto my-4 text-center">
                <p className="text-xs text-[#6d758f] font-medium uppercase tracking-wider">Your Reference Code</p>
                <p className="text-2xl font-black text-[#ff8c00] tracking-widest mt-1">{refNumber}</p>
                <p className="text-[11px] text-[#6d758f] mt-1">Please save this reference code for verification.</p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="bg-[#211f54] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2d2a70] transition-colors"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    handleReset();
                    onNavigate("admissions");
                  }}
                  className="bg-gray-100 text-[#353e5c] px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                  Admissions Guide
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center gap-2 pb-1 border-b-2 transition-all ${
                    step === 1 ? "border-[#ff8c00] text-[#ff8c00]" : "border-transparent text-gray-400"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Student Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center gap-2 pb-1 border-b-2 transition-all ${
                    step === 2 ? "border-[#ff8c00] text-[#ff8c00]" : "border-transparent text-gray-400"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Stream &amp; School</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={`flex items-center gap-2 pb-1 border-b-2 transition-all ${
                    step === 3 ? "border-[#ff8c00] text-[#ff8c00]" : "border-transparent text-gray-400"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#ff8c00] text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Parent / Guardian</span>
                </button>
              </div>

              {/* Step 1: Student Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h5 className="font-bold text-[#211f54] text-sm">Step 1: Student Information</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.studentFirstName}
                        onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
                        placeholder="e.g. Patrick"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Last / Family Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.studentLastName}
                        onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
                        placeholder="e.g. Mugisha"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Gender *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#211f54] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#ff8c00] transition-colors"
                    >
                      Next: Stream Selection →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Stream & Academic Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h5 className="font-bold text-[#211f54] text-sm">Step 2: Stream &amp; Prior Academic Background</h5>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Target Stream / Class Level *</label>
                    <select
                      value={formData.levelApplied}
                      onChange={(e) => setFormData({ ...formData, levelApplied: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                    >
                      <option value="MS2">MS2 — Mathematics, Economics, Geography &amp; Physics (A-Level)</option>
                      <option value="Arts and Humanities">Arts and Humanities — History, Literature, Geography &amp; Psychology (A-Level)</option>
                      <option value="Senior 1">Ordinary Level — Senior 1 (S1)</option>
                      <option value="Senior 2">Ordinary Level — Senior 2 (S2)</option>
                      <option value="Senior 3">Ordinary Level — Senior 3 (S3)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Previous School Attended *</label>
                      <input
                        type="text"
                        required
                        value={formData.previousSchool}
                        onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                        placeholder="e.g. GS Gisenyi"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">National Exam / Term Score (Aggregate/%)</label>
                      <input
                        type="text"
                        value={formData.previousAggregate}
                        onChange={(e) => setFormData({ ...formData, previousAggregate: e.target.value })}
                        placeholder="e.g. Aggregate 18 or 82%"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-gray-500 hover:text-gray-800 text-xs font-semibold"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#211f54] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#ff8c00] transition-colors"
                    >
                      Next: Parent Details →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Parent / Guardian Information */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h5 className="font-bold text-[#211f54] text-sm">Step 3: Parent / Guardian Contact Details</h5>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Parent / Guardian Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Emmanuel Habimana"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (MTN / Airtel) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                        placeholder="+250 788 123 456"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Residential District / Sector</label>
                    <input
                      type="text"
                      value={formData.residenceDistrict}
                      onChange={(e) => setFormData({ ...formData, residenceDistrict: e.target.value })}
                      placeholder="Rubavu, Gisenyi Sector"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-gray-500 hover:text-gray-800 text-xs font-semibold"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#ff8c00] hover:bg-[#e07b00] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md transition-colors"
                    >
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
