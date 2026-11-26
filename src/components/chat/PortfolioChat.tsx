"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { codeHealthProject } from "@/data/projects";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const FAQ_SUGGESTIONS = [
  "Who is Dravid?",
  "What are your skills?",
  "Tell me about CodeHealth-AI.",
  "Tell me about DriveGuard.",
  "What are you studying?",
  "How can I contact you?",
  "Can I view your resume?",
];

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: `Hello! I am Dravid Raja N's portfolio assistant. Ask me about his academic background, technical skills, or featured projects.`,
      timestamp: "Just now",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const getFactualAnswer = (query: string): string => {
    const q = query.toLowerCase().trim();

    if (q.includes("who is") || q.includes("about") || q.includes("who are you") || q.includes("dravid")) {
      return `${personalData.fullName} is a student currently pursuing an ${personalData.degreeTrack} at Rathinam Global University, Coimbatore, with a prior BCA degree from The American College, Madurai (CGPA 7.6 / 10).`;
    }

    if (q.includes("skill") || q.includes("stack") || q.includes("technolog")) {
      const allSkills = skillCategories
        .map((cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(", ")}`)
        .join(" | ");
      return `Dravid's verified technical skills include — ${allSkills}.`;
    }

    if (q.includes("driveguard")) {
      return "DriveGuard is a privacy-focused browser application for drowsiness and attention awareness during computer sessions. It uses MediaPipe for local facial landmark and eye analysis, with visual and audio alerts.";
    }

    if (q.includes("codehealth") || q.includes("project")) {
      return `${codeHealthProject.title} is a ${codeHealthProject.tagline} built with Python, Flask, HTML, CSS, SQL, and Machine Learning. It analyses Python and C/C++ code, identifies risky patterns, predicts bug risk, and suggests improvements.`;
    }

    if (q.includes("study") || q.includes("education") || q.includes("college") || q.includes("degree")) {
      return `Dravid is pursuing an MSc in Artificial Intelligence & Data Science (2026–2028) at Rathinam Global University, Coimbatore. He previously completed his BCA (2023–2026) at The American College, Madurai (CGPA: 7.6 / 10).`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) {
      return `You can reach Dravid via email at ${personalData.email} or by phone at ${personalData.phone}. You can also use the contact form in the Contact section!`;
    }

    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return `You can view Dravid's resume in the embedded Resume Preview section on this page.`;
    }

    return `I only provide confirmed information directly from Dravid's official portfolio. Feel free to click any of the suggested questions below or check the specific sections on the page!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const replyText = getFactualAnswer(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 300);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Trigger button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open portfolio assistant chat"
          className="p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_4px_25px_rgba(124,58,237,0.5)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-bold pr-1">Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-96 max-w-[400px] h-[520px] max-h-[80vh] rounded-2xl glass-panel border border-[var(--border-glow)] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">
                  Portfolio Assistant
                </h4>
                <span className="text-[10px] text-[var(--text-accent)] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Deterministic Local Guide
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-glass)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages body */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[var(--bg-base)]/80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Bot className="w-3.5 h-3.5" />
                  )}
                </div>

                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white rounded-tr-none"
                      : "bg-[var(--surface-input)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-tl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[9px] opacity-60 mt-1 block text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Chips */}
          <div className="p-2 border-t border-[var(--border-subtle)] bg-[var(--surface-card)] flex gap-1.5 overflow-x-auto no-scrollbar">
            {FAQ_SUGGESTIONS.map((faq) => (
              <button
                key={faq}
                type="button"
                onClick={() => handleSend(faq)}
                className="whitespace-nowrap px-2.5 py-1 text-[10px] rounded-lg bg-[var(--surface-input)] hover:bg-purple-600 hover:text-white border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all shrink-0 cursor-pointer"
              >
                {faq}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about Dravid..."
              aria-label="Message to portfolio assistant"
              className="flex-1 px-3 py-2 text-xs bg-[var(--surface-input)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] outline-none focus:border-[var(--border-glow)]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2 rounded-xl bg-purple-600 text-white disabled:opacity-40 hover:brightness-110 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
