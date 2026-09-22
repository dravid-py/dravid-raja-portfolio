"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, CheckCircle2 } from "lucide-react";
import { codeHealthProject } from "@/data/projects";

export function ProjectCaseStudy() {
  const [expandedSection, setExpandedSection] = useState<string | null>("problem");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl glass-panel border border-[var(--border-subtle)] bg-[var(--surface-glass)] backdrop-blur-xl shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            Technical Case Study
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            System design, analysis methodology, and feature breakdown for CodeHealth-AI.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {codeHealthProject.caseStudy.map((section) => {
          const isExpanded = expandedSection === section.id;
          return (
            <div
              key={section.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? "bg-purple-950/25 border-purple-500/40 shadow-[0_0_16px_rgba(168,85,247,0.12)]"
                  : "bg-[var(--surface-card)] border-[var(--border-subtle)] hover:border-purple-500/30 hover:bg-[var(--surface-glass-hover)]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <span className={`text-sm sm:text-base font-bold transition-colors ${
                  isExpanded ? "text-purple-200" : "text-[var(--text-primary)]"
                }`}>
                  {section.title}
                </span>
                <span className={`p-1.5 rounded-lg border transition-all ${
                  isExpanded
                    ? "bg-purple-500/20 border-purple-500/40 text-purple-200"
                    : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                }`}>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              {isExpanded && (
                <div className="p-5 pt-0 border-t border-purple-500/20 bg-purple-950/15 flex flex-col gap-3">
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium pt-3.5 leading-relaxed">
                    {section.summary}
                  </p>

                  <ul className="flex flex-col gap-2 pt-1">
                    {section.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

