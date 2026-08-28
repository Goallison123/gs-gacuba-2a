import { useState } from "react";
import { X, User, FileText, CheckCircle2, Download, LogIn } from "lucide-react";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onOpenAdmission: () => void;
}

export default function UserProfileModal({ isOpen, onClose, onOpenAdmission }: UserProfileModalProps) {
  const [activeTab, setActiveTab] = useState<"portal" | "status" | "resources">("portal");
  const [refCode, setRefCode] = useState("");
  const [statusResult, setStatusResult] = useState<null | { found: boolean; name?: string; level?: string; status?: string }>(null);

  if (!isOpen) return null;

  function handleCheckStatus(e: React.FormEvent) {
    e.preventDefault();
    if (!refCode.trim()) return;
    setStatusResult({
      found: true,
      name: "Sample Applicant",
      level: "MS2 (A-Level)",
      status: "Application Under Review (Documents Verified by NESA/REB Desk)"
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] border border-gray-100">
        {/* Header */}
        <div className="bg-[#211f54] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#ff8c00]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">GS Gacuba II A Portal</h3>
              <p className="text-xs text-gray-300">Student, Parent &amp; Applicant Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 bg-gray-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("portal")}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === "portal" ? "border-[#ff8c00] text-[#ff8c00] bg-white" : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Portal Login
          </button>
          <button
            onClick={() => setActiveTab("status")}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === "status" ? "border-[#ff8c00] text-[#ff8c00] bg-white" : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Check Application Status
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === "resources" ? "border-[#ff8c00] text-[#ff8c00] bg-white" : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Resources
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          {activeTab === "portal" && (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-xs text-gray-600">
                Log in using your official GS Gacuba II A Student ID / Parent Phone or SMIS national credential.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert("Welcome back! Redirecting to student dashboard."); onClose(); }} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Student ID or Parent Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. GAC-2026-089 or +250 788..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">PIN / Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] outline-none"
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-1.5 text-gray-600">
                    <input type="checkbox" className="rounded text-[#ff8c00]" />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact the Director of Studies at the administration office."); }} className="text-[#ff8c00] hover:underline">
                    Forgot PIN?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#211f54] hover:bg-[#ff8c00] text-white py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Access Portal</span>
                </button>
              </form>

              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">Not yet enrolled for 2026/27?</p>
                <button
                  onClick={() => { onClose(); onOpenAdmission(); }}
                  className="text-xs font-bold text-[#ff8c00] hover:underline mt-1 inline-block"
                >
                  Start a New Admission Application →
                </button>
              </div>
            </div>
          )}

          {activeTab === "status" && (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-xs text-gray-600">
                Track your admission or transfer application using your 6-digit reference code.
              </p>

              <form onSubmit={handleCheckStatus} className="flex gap-2">
                <input
                  type="text"
                  value={refCode}
                  onChange={(e) => setRefCode(e.target.value)}
                  placeholder="e.g. GSG-548192"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:border-[#ff8c00] outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#ff8c00] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#e07b00] transition-colors"
                >
                  Track
                </button>
              </form>

              {statusResult && (
                <div className="bg-[#fff9ef] border border-[#ffe8c0] rounded-xl p-4 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Application Found in SMIS System</span>
                  </div>
                  <div className="text-xs space-y-1 text-[#211f54]">
                    <p><strong>Applicant:</strong> {statusResult.name}</p>
                    <p><strong>Stream:</strong> {statusResult.level}</p>
                    <p><strong>Current Status:</strong> <span className="text-orange-600 font-semibold">{statusResult.status}</span></p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="space-y-3 animate-fadeIn text-xs">
              <p className="text-gray-600">Download official academic files, timetables, and guidelines:</p>
              {[
                { title: "2026/2027 School Prospectus & Stream Guide", size: "2.4 MB", type: "PDF" },
                { title: "MS2 Science & Mathematics Curriculum Breakdown", size: "1.8 MB", type: "PDF" },
                { title: "Arts & Humanities Reading List & Syllabus", size: "1.2 MB", type: "PDF" },
                { title: "Ordinary Level (S1–S3) National Exam Preparation Booklet", size: "3.5 MB", type: "PDF" },
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#ff8c00]/50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#ff8c00]" />
                    <div>
                      <p className="font-semibold text-[#211f54]">{res.title}</p>
                      <p className="text-[11px] text-gray-500">{res.type} • {res.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading "${res.title}"...`)}
                    className="p-1.5 text-gray-500 hover:text-[#ff8c00] hover:bg-white rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
