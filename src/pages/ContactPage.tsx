import { useState } from "react";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
  onOpenAsk?: () => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Admissions",
    subject: "",
    message: ""
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-[#211f54] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Contact GS Gacuba II A
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We welcome parents, alumni, and prospective applicants to visit our campus in Rubavu District or contact our administration directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-24 bg-gray-50 flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold text-[#211f54]">Campus Coordinates</h3>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#fff3e0] text-[#ff8c00] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#211f54]">Campus Location</p>
                      <p className="text-gray-600 text-xs mt-0.5">Rubavu District, Western Province, Rwanda</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Near Lake Kivu &amp; Gisenyi Urban Center</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f4fd] text-[#0c3f69] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#211f54]">Direct Phone Lines</p>
                      <a href="tel:+250788000000" className="text-xs text-[#ff8c00] font-semibold hover:underline block mt-0.5">
                        +250 788 000 000 (Admissions)
                      </a>
                      <a href="tel:+250788000001" className="text-xs text-gray-600 hover:underline block mt-0.5">
                        +250 788 000 001 (Administration)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#211f54]">Official Email</p>
                      <a href="mailto:info@gacuba2a.rw" className="text-xs text-[#ff8c00] font-semibold hover:underline block mt-0.5">
                        info@gacuba2a.rw
                      </a>
                      <a href="mailto:admissions@gacuba2a.rw" className="text-xs text-gray-600 hover:underline block mt-0.5">
                        admissions@gacuba2a.rw
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#211f54]">Office Working Hours</p>
                      <p className="text-xs text-gray-600 mt-0.5">Monday – Friday: 7:30 AM – 5:00 PM CAT</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Saturday: 8:00 AM – 1:00 PM (Admissions Only)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sybella Support Badge */}
              <div className="bg-[#211f54] text-white rounded-3xl p-6 shadow-md">
                <p className="text-xs text-orange-200 font-bold uppercase tracking-wider">IT &amp; Technical Support</p>
                <p className="text-sm font-semibold mt-1">Sybella Systems Portal Helpdesk</p>
                <p className="text-xs text-gray-300 mt-1">For online admissions portal assistance, contact support@sybella.rw</p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-black text-[#211f54] mb-2">Send an Inquiry</h3>
                <p className="text-xs sm:text-sm text-[#6d758f] mb-6">
                  Fill out the form below and our administrative office will respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="py-10 text-center space-y-3 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-[#211f54]">Inquiry Received!</h4>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                      Thank you for contacting GS Gacuba II A. We have dispatched your query to the selected department.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", department: "General Admissions", subject: "", message: "" });
                      }}
                      className="mt-4 bg-[#211f54] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#ff8c00] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Marie Uwase"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#ff8c00] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (MTN/Airtel) *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+250 788 123 456"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#ff8c00] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="marie@example.com"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#ff8c00] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Target Department *</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#ff8c00] outline-none"
                        >
                          <option value="General Admissions">Admissions &amp; Registration</option>
                          <option value="Dean of Studies">Dean of Studies (Academics / Streams)</option>
                          <option value="Headmaster Office">Headmaster Office</option>
                          <option value="Discipline &amp; Welfare">Discipline &amp; Student Welfare</option>
                          <option value="Finance &amp; Bursar">Finance &amp; Bursar</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Question regarding MS2 combination entrance"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#ff8c00] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message or inquiry here..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#ff8c00] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#ff8c00] hover:bg-[#e07b00] text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
