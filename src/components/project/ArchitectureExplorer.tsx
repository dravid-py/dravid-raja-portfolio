"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDown, ChevronRight, Layers, CheckCircle } from "lucide-react";
import { codeHealthProject, ArchitectureNode } from "@/data/projects";

export function ArchitectureExplorer() {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(
    codeHealthProject.architecture[0]
  );

  return (
    <div className="flex flex-col gap-8 p-6 sm:p-8 rounded-2xl glass-panel">
      {/* Title / Description */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            Project Architecture Explorer
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
          Click any stage of the 8-step pipeline to inspect its processing mechanism, technology layer, and data transformations.
        </p>
      </div>

      {/* Interactive Step Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {codeHealthProject.architecture.map((node, index) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <div key={node.id} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelectedNode(node)}
                className={`w-full p-3 rounded-xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[var(--accent-purple)]/20 border-[var(--accent-purple)] shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                    : "bg-[var(--surface-input)] border-[var(--border-subtle)] hover:border-[var(--border-glow)] hover:bg-[var(--surface-card)]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      isSelected
                        ? "bg-[var(--accent-purple)] text-white"
                        : "bg-[var(--surface-elevated)] text-[var(--text-muted)]"
                    }`}
                  >
                    {node.step}
                  </span>
                  {index < codeHealthProject.architecture.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3 h-3 text-[var(--text-muted)] opacity-50" />
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] truncate">
                    {node.title}
                  </h4>
                  <span className="text-[10px] text-[var(--text-muted)] truncate block">
                    {node.tech}
                  </span>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <div className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-glow)] flex flex-col lg:flex-row gap-6 justify-between items-start">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-bold font-mono rounded-lg bg-[var(--accent-purple)] text-white">
              Step 0{selectedNode.step}
            </span>
            <h4 className="text-lg font-bold text-[var(--text-primary)]">
              {selectedNode.title} —{" "}
              <span className="text-[var(--text-accent)]">{selectedNode.subtitle}</span>
            </h4>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {selectedNode.description}
          </p>

          <div className="pt-2">
            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider block mb-2">
              Key Capabilities:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedNode.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-48 p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] flex flex-col gap-2 shrink-0">
          <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
            Technology Layer
          </span>
          <span className="text-sm font-bold text-[var(--text-primary)]">
            {selectedNode.tech}
          </span>
        </div>
      </div>
    </div>
  );
}
