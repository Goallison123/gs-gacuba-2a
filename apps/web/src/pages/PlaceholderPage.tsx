import Footer from "../components/Footer";

interface PlaceholderPageProps {
  title: string;
  description: string;
  onNavigate: (page: string) => void;
}

export default function PlaceholderPage({ title, description, onNavigate }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page hero */}
      <section className="bg-[#ff8c00] py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto lg:px-[167px]">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => onNavigate("home")} className="text-white/70 text-sm hover:text-white cursor-pointer">Home</button>
            <span className="text-white/50 text-sm">/</span>
            <span className="text-white text-sm">{title}</span>
          </div>
          <h1 className="font-extrabold text-[#211f54] text-4xl lg:text-[56px] leading-tight">{title}</h1>
          <p className="text-[#353e5c] text-lg mt-4 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="flex-1 bg-white py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto lg:px-[167px] text-center">
          <div className="bg-[#f8faff] rounded-2xl p-16 border border-[#e1e4ed]">
            <div className="size-16 bg-[#ff8c00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="size-8 rounded bg-[#ff8c00]/30" />
            </div>
            <h2 className="font-bold text-[#211f54] text-2xl mb-3">Coming Soon</h2>
            <p className="text-[#6d758f] text-base max-w-md mx-auto leading-relaxed">
              This section is being prepared with comprehensive information. Please check back soon or contact us for more details.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => onNavigate("home")}
                className="bg-[#ff8c00] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#e67c00] transition-colors cursor-pointer"
              >
                Back to Home
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="border border-[#e1e4ed] text-[#6d758f] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#f8faff] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
