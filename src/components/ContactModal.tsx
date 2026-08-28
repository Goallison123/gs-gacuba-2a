import { useState } from "react";
import { X, Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  onNavigate?: (page: string) => void;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialTopic = ""
}: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: initialTopic || "General Inquiry",
    message: ""
  });

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "General Inquiry",
      message: ""
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 animate-scaleUp">
        {/* Header */}
        <div className="bg-[#1e244b] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Ask GS Gacuba II A</h2>
            <p className="text-xs text-gray-300 mt-0.5">
              Send an inquiry directly to school administration &amp; admissions
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1e244b]">Inquiry Received!</h3>
            <p className="text-sm text-[#6d758f] max-w-sm mx-auto">
              Thank you for reaching out, <span className="font-semibold text-[#1e244b]">{formData.name || "friend"}</span>. Our administrative team will review your message and reply via email or phone promptly.
            </p>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="bg-[#1e244b] hover:bg-[#151936] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Quick school contact pill */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#6d758f]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff8c00]" />
                <span>Rubavu, Western Rwanda</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ff8c00]" />
                <span>+250 788 000 000</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff8c00]" />
                <span>info@gacuba2a.rw</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1e244b] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1e244b] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1e244b] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+250 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1e244b] mb-1">
                  Subject / Department
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none bg-white"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Admissions & Registration">Admissions &amp; Registration</option>
                  <option value="Academic Programs (MS2 / Arts)">Academic Programs</option>
                  <option value="School Fees & Subsidies">School Fees &amp; Subsidies</option>
                  <option value="Headmaster / Leadership">Headmaster &amp; Administration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1e244b] mb-1">
                Your Message *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Write your question or request here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold text-[#6d758f] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-[#ff8c00] hover:bg-[#e07b00] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
