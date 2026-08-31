import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

interface ComingSoonPageProps {
  pageName: string;
  pageKey: string;
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
}

export default function ComingSoonPage({
  pageName,
  pageKey: _pageKey,
  onNavigate,
  onOpenAdmission,
}: ComingSoonPageProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Main Center Area */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 flex-1 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto text-center">
          {/* Card */}
          <div className="bg-white border border-gray-200/90 rounded-2xl p-8 sm:p-12 shadow-xs flex flex-col items-center">
            {/* Status Pill */}
            <div className="inline-block bg-[#fff3eb] border border-[#ffe0cc] px-4 py-1 rounded-full text-xs font-bold text-[#ff8c00] mb-5">
              Coming Soon
            </div>

            {/* Header */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1e244b] tracking-tight mb-3">
              {pageName}
            </h1>

            {/* Text */}
            <p className="text-xs sm:text-sm text-[#6d758f] leading-relaxed max-w-md mb-8">
              We are currently updating content and media for the{" "}
              <strong className="text-[#1e244b] font-semibold">{pageName}</strong> section. Please explore our available pages or apply for admission below.
            </p>

            {/* 2 Buttons: Back Home and Apply */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate("home")}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-[#1e244b] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>

              {onOpenAdmission && (
                <button
                  onClick={onOpenAdmission}
                  className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  Apply for Admission
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
