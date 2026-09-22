"use client";

import React, { useState } from "react";
import { Play, RotateCcw, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import { codeHealthProject } from "@/data/projects";

interface AnalysisResult {
  score: number;
  riskLevel: "Low" | "Moderate" | "High";
  riskColor: string;
  issues: {
    rule: string;
    severity: "Critical" | "High" | "Medium" | "Low";
    message: string;
    suggestion: string;
  }[];
  metrics: {
    loc: number;
    functions: number;
    complexityEstimate: string;
  };
}

export function CodeHealthDemo() {
  const [language, setLanguage] = useState<"python" | "c" | "cpp">("python");
  const [code, setCode] = useState(codeHealthProject.sampleSnippets[0].code);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const loadSample = (lang: "python" | "c" | "cpp") => {
    setLanguage(lang);
    const sample = codeHealthProject.sampleSnippets.find((s) => s.language === lang);
    if (sample) {
      setCode(sample.code);
      setResult(null);
    }
  };

  const runLocalAnalysis = () => {
    setAnalyzing(true);

    setTimeout(() => {
      const trimmed = code.trim();
      const lines = trimmed.split("\n");
      const loc = lines.filter((l) => l.trim().length > 0).length;

      const issues: AnalysisResult["issues"] = [];
      let baseScore = 100;

      if (language === "python") {
        // Check bare except
        if (/except\s*:/.test(code)) {
          issues.push({
            rule: "AST-PY-01: Bare Except Clause",
            severity: "High",
            message: "Catching bare Exception can hide unexpected syntax errors or system exits.",
            suggestion: "Catch specific exceptions like `except (IOError, ValueError):` instead.",
          });
          baseScore -= 18;
        }

        // Check mutable default arguments
        if (/def\s+\w+\(.*=\s*(\[\]|\{\})\)/.test(code)) {
          issues.push({
            rule: "AST-PY-02: Mutable Default Argument",
            severity: "Medium",
            message: "Default argument values are evaluated once at function definition time.",
            suggestion: "Use `None` as default and initialize within function body (`items = items or []`).",
          });
          baseScore -= 14;
        }

        // Check unclosed file
        if (/open\(/.test(code) && !/with\s+open\(/.test(code)) {
          issues.push({
            rule: "AST-PY-03: Resource Leak Risk",
            severity: "High",
            message: "File opened without a context manager (`with` statement).",
            suggestion: "Use `with open(filepath) as f:` to ensure automatic descriptor cleanup.",
          });
          baseScore -= 16;
        }
      } else if (language === "c" || language === "cpp") {
        // Check strcpy
        if (/strcpy\(/.test(code)) {
          issues.push({
            rule: "STATIC-C-01: Unbounded Buffer Copy",
            severity: "Critical",
            message: "`strcpy` does not perform buffer boundary validation and may cause overflow.",
            suggestion: "Replace with `strncpy` or bounded buffer functions (`snprintf`).",
          });
          baseScore -= 25;
        }

        // Check uninitialized pointer
        if (/\bint\s*\*\s*\w+\s*;/.test(code) || /\bchar\s*\*\s*\w+\s*;/.test(code)) {
          issues.push({
            rule: "STATIC-C-02: Uninitialized Pointer",
            severity: "High",
            message: "Pointer declared without initialization can cause segmentation faults.",
            suggestion: "Initialize pointer explicitly to `NULL` or valid memory address.",
          });
          baseScore -= 18;
        }

        // Check raw new without delete
        if (/new\s+/.test(code) && !/delete/.test(code)) {
          issues.push({
            rule: "STATIC-CPP-01: Memory Leak (Missing delete)",
            severity: "Critical",
            message: "Dynamically allocated memory with `new` has no corresponding `delete` invocation.",
            suggestion: "Use smart pointers (`std::unique_ptr`) or ensure explicit deallocation.",
          });
          baseScore -= 22;
        }
      }

      // If clean code
      if (issues.length === 0) {
        if (loc === 0) {
          baseScore = 0;
        } else {
          baseScore = 95;
        }
      }

      const finalScore = Math.max(10, Math.min(100, baseScore));
      let riskLevel: "Low" | "Moderate" | "High" = "Low";
      let riskColor = "text-emerald-400";

      if (finalScore < 60) {
        riskLevel = "High";
        riskColor = "text-rose-400";
      } else if (finalScore < 85) {
        riskLevel = "Moderate";
        riskColor = "text-amber-400";
      }

      setResult({
        score: finalScore,
        riskLevel,
        riskColor,
        issues,
        metrics: {
          loc,
          functions: (code.match(/\b(def|void|int|class)\b/g) || []).length,
          complexityEstimate: loc > 25 ? "Moderate (McCabe ~6)" : "Low (McCabe ~2)",
        },
      });

      setAnalyzing(false);
    }, 450);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[var(--border-subtle)] bg-[var(--surface-glass)] backdrop-blur-xl shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Interactive Code Analysis Demo
            </h4>
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded bg-purple-500/20 text-[var(--text-accent)] border border-purple-500/30">
              Live Simulator
            </span>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Safe deterministic frontend simulator of the CodeHealth-AI inspection pipeline.
          </p>
        </div>

        {/* Language switcher tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--surface-glass)] border border-[var(--border-subtle)]">
          {(["python", "c", "cpp"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => loadSample(lang)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                language === lang
                  ? "bg-[var(--accent-purple)] text-white shadow"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Control */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Code Editor */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <span className="font-mono">Input Source Editor</span>
            <button
              type="button"
              onClick={() => loadSample(language)}
              className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] text-purple-400"
            >
              <RotateCcw className="w-3 h-3" /> Reset Sample
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[#0a0517]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={11}
              aria-label="Code Input for Analysis"
              className="w-full p-4 font-mono text-xs sm:text-sm text-purple-100 bg-transparent resize-y outline-none leading-relaxed"
              placeholder="Paste Python, C, or C++ code here to inspect..."
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
              <HelpCircle className="w-3 h-3" /> Runs local lexical parsing rules
            </span>

            <button
              type="button"
              onClick={runLocalAnalysis}
              disabled={analyzing || !code.trim()}
              className="btn-primary py-2.5 px-5 text-xs"
            >
              {analyzing ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Analyze Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          {result ? (
            <div className="flex flex-col gap-4">
              {/* Score & Risk header */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)]">
                <div>
                  <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                    Quality Score
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-extrabold text-[var(--text-primary)]">
                      {result.score}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">/100</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                    ML Bug Risk
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    {result.riskLevel === "High" ? (
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                    ) : result.riskLevel === "Moderate" ? (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    <span className={`text-base font-bold ${result.riskColor}`}>
                      {result.riskLevel} Risk
                    </span>
                  </div>
                </div>
              </div>

              {/* Detected Issues List */}
              <div>
                <span className="text-xs font-semibold text-[var(--text-primary)] block mb-2">
                  Detected Findings ({result.issues.length})
                </span>

                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                  {result.issues.length === 0 ? (
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                      Clean syntax structure! No critical antipatterns detected.
                    </div>
                  ) : (
                    result.issues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[var(--surface-input)] border border-[var(--border-subtle)] text-xs"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-purple-300">
                            {issue.rule}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 text-[9px] font-bold uppercase rounded ${
                              issue.severity === "Critical"
                                ? "bg-rose-500/20 text-rose-300"
                                : issue.severity === "High"
                                ? "bg-amber-500/20 text-amber-300"
                                : "bg-purple-500/20 text-purple-300"
                            }`}
                          >
                            {issue.severity}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)]">
                          {issue.message}
                        </p>
                        <p className="text-[11px] text-purple-300 mt-1 font-mono">
                          → {issue.suggestion}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[220px] flex flex-col items-center justify-center text-center p-6 border border-dashed border-[var(--border-subtle)] rounded-xl">
              <Sparkles className="w-8 h-8 text-purple-400 mb-2 opacity-60" />
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                Ready to Analyze
              </p>
              <p className="text-[11px] text-[var(--text-muted)] max-w-xs mt-1">
                Click &quot;Analyze Code&quot; above to inspect the snippet using deterministic local pattern checks.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
