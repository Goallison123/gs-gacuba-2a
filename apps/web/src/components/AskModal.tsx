import { useState, useEffect, useRef } from "react";
import { X, Send, Bot } from "lucide-react";

interface AskModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onNavigate: (page: string) => void;
  onOpenAdmission?: () => void;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: () => void }[];
}

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ["ms2", "combination", "math", "economics", "physics", "stem"],
    title: "MS2 Combination (A-Level)",
    answer:
      "MS2 is our premier Upper Secondary (A-Level) combination focusing on Mathematics, Economics, Geography, and Physics. It is designed to prepare students for engineering, economics, data science, and technology careers.",
    targetPage: "academics"
  },
  {
    keywords: ["arts", "humanities", "history", "literature", "psychology", "hgl"],
    title: "Arts and Humanities Stream",
    answer:
      "Our Arts and Humanities combination focuses on History, Literature in English, Geography, and Psychology, preparing future leaders in law, diplomacy, communication, and education.",
    targetPage: "academics"
  },
  {
    keywords: ["admission", "apply", "register", "enroll", "intake", "fees", "cost", "requirement"],
    title: "2026/2027 Admissions",
    answer:
      "Admissions for the 2026/2027 Academic Year are currently open! Requirements include prior school academic transcripts, PLE or S3 national exam slips, and passport photos. Tuition is highly subsidized.",
    targetPage: "admissions"
  },
  {
    keywords: ["location", "where", "contact", "address", "phone", "email", "rubavu", "gisenyi"],
    title: "Location & Contacts",
    answer:
      "GS Gacuba II A is situated in Rubavu District, Western Province, Rwanda. Phone: +250 788 000 000 | Email: info@gacuba2a.rw.",
    targetPage: "contact"
  },
  {
    keywords: ["headmaster", "leadership", "habumugisha", "principal", "director", "staff"],
    title: "School Leadership",
    answer:
      "GS Gacuba II A is led by Headmaster HABUMUGISHA Ernest alongside the Director of Studies, Dean of Discipline, and our 23 experienced pedagogical faculty members.",
    targetPage: "leadership"
  },
  {
    keywords: ["facilities", "lab", "computer", "ict", "library", "sport", "pitch"],
    title: "Campus Facilities",
    answer:
      "Our campus boasts dedicated Science & Physics Laboratories, a 50-workstation high-speed ICT Hub, an Academic Resource Library, and regulation play fields for football, volleyball, and basketball.",
    targetPage: "facilities"
  }
];

export default function AskModal({
  isOpen,
  onClose,
  initialQuery = "",
  onNavigate,
  onOpenAdmission
}: AskModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (messages.length === 0) {
        const welcomeMsg: ChatMessage = {
          id: "welcome",
          sender: "bot",
          text:
            "Muraho! Welcome to GS Gacuba II A Assistant. Ask me anything about our academic streams (MS2, Arts, O-Level), admissions, campus facilities, or leadership in Rubavu.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickActions: [
            {
              label: "Explore MS2 Stream",
              action: () => {
                onNavigate("academics");
                onClose();
              }
            },
            {
              label: "Apply for Admission",
              action: () => {
                if (onOpenAdmission) onOpenAdmission();
                else onNavigate("admissions");
                onClose();
              }
            },
            {
              label: "Campus Gallery",
              action: () => {
                onNavigate("gallery");
                onClose();
              }
            }
          ]
        };
        setMessages([welcomeMsg]);
      }

      if (initialQuery) {
        handleUserQuery(initialQuery);
      }
    }
  }, [isOpen, initialQuery]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  function findBestAnswer(query: string): { text: string; page?: string } {
    const qLower = query.toLowerCase();

    for (const item of FAQ_KNOWLEDGE_BASE) {
      if (item.keywords.some((k) => qLower.includes(k))) {
        return { text: item.answer, page: item.targetPage };
      }
    }

    return {
      text:
        `GS Gacuba II A is dedicated to excellence across MS2, Arts & Humanities, and Ordinary Level in Rubavu District. For personalized details regarding "${query}", you can contact our administration office at +250 788 000 000 or visit our campus.`,
      page: "contact"
    };
  }

  function handleUserQuery(queryText: string) {
    if (!queryText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const match = findBestAnswer(queryText);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: match.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickActions: match.page
          ? [
              {
                label: `Open ${match.page.toUpperCase()} Page →`,
                action: () => {
                  onNavigate(match.page!);
                  onClose();
                }
              }
            ]
          : undefined
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleUserQuery(inputText);
  }

  const suggestedPills = [
    "What subjects are taught in MS2?",
    "How to apply for 2026/27 intake?",
    "What are the school fees?",
    "Tell me about science labs",
    "Where is the school located?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col h-[600px] max-h-[90vh] border border-gray-100">
        {/* Header */}
        <div className="bg-[#211f54] text-white px-5 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff8c00] flex items-center justify-center text-white shadow-xs">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Gacuba AI Assistant</h3>
              <p className="text-[11px] text-gray-300">Instant answers about GS Gacuba II A</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gray-50/70">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === "user"
                    ? "bg-[#ff8c00] text-white rounded-tr-xs"
                    : "bg-white text-[#211f54] border border-gray-200/80 rounded-tl-xs"
                }`}
              >
                <p>{msg.text}</p>

                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {msg.quickActions.map((qa, i) => (
                      <button
                        key={i}
                        onClick={qa.action}
                        className="bg-[#fff3e0] hover:bg-[#ffe0b2] text-[#ff8c00] text-[11px] font-bold px-3 py-1 rounded-full border border-[#ffb74d]/40 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{qa.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-gray-400 text-xs pl-2">
              <Bot className="w-3.5 h-3.5 text-[#ff8c00]" />
              <span className="animate-pulse">Gacuba Assistant is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-3 py-2 bg-white border-t border-gray-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider shrink-0 pl-1">
            Suggestions:
          </span>
          {suggestedPills.map((q) => (
            <button
              key={q}
              onClick={() => handleUserQuery(q)}
              className="text-[11px] bg-gray-100 hover:bg-[#fff3e0] hover:text-[#ff8c00] text-gray-700 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleFormSubmit} className="p-3 bg-white border-t border-gray-200 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your question about Gacuba..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:bg-white focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="bg-[#211f54] hover:bg-[#ff8c00] disabled:opacity-40 disabled:hover:bg-[#211f54] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Ask</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
