import React from "react";
import Image from "next/image";
import { Cpu, CheckCircle2, Play, Layers, ShieldCheck, Code2 } from "lucide-react";
import { codeHealthProject } from "@/data/projects";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";
import { CodeHealthDemo } from "./CodeHealthDemo";
import { ArchitectureExplorer } from "./ArchitectureExplorer";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export function CodeHealthAI() {
  return (
    <section id="project" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Featured Main Project"
          title="CodeHealth-AI"
          description="Multi-Language Code Quality & Bug Prediction Dashboard powered by Python, Flask, and Machine Learning."
        />

        {/* Main Showcase Bento */}
        <div className="flex flex-col gap-10">
          <BentoCard className="p-6 sm:p-8 flex flex-col gap-8" glow>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Screenshot & Visual */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[#0d071d] shadow-2xl aspect-[16/10]">
                <Image
                  src={codeHealthProject.image}
                  alt={codeHealthProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080412]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-[var(--surface-glass)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-accent)]">
                  Active Dashboard Interface
                </div>
              </div>

              {/* Information & Capabilities */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Machine Learning & Static Analysis</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                    {codeHealthProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--text-accent)] mt-0.5">
                    {codeHealthProject.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {codeHealthProject.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {codeHealthProject.technologies.map((tech) => (
                    <span key={tech} className="tag-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="pt-2 border-t border-[var(--border-subtle)]">
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {codeHealthProject.features.slice(0, 6).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#demo" className="btn-primary py-2.5 px-5 text-xs">
                    <Play className="w-3.5 h-3.5" />
                    <span>Try Interactive Demo</span>
                  </a>
                  <a href="#architecture" className="btn-secondary py-2.5 px-5 text-xs">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Architecture</span>
                  </a>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Interactive Safe Demo */}
          <div id="demo">
            <CodeHealthDemo />
          </div>

          {/* Architecture Pipeline Explorer */}
          <div id="architecture">
            <ArchitectureExplorer />
          </div>

          {/* Expandable Technical Case Study */}
          <div>
            <ProjectCaseStudy />
          </div>

          {/* Second Featured Project: DriveGuard */}
          <BentoCard id="driveguard" className="p-6 sm:p-8 flex flex-col gap-6" glow>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-xs font-semibold text-indigo-300 mb-2">
                    Featured Project 02 · Privacy-first Computer Vision
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                    DriveGuard
                  </h3>
                  <p className="text-sm font-semibold text-[var(--text-accent)] mt-1">
                    Drowsiness & Attention Awareness for Computer Users
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://drive-guard-drowsiness.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-4 text-xs"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href="https://github.com/dravid-py/DriveGuard-Drowsiness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2.5 px-4 text-xs"
                >
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-4xl">
              DriveGuard is a browser-based awareness tool for students, developers, and working professionals during long laptop or desktop sessions. It processes webcam frames locally to identify prolonged eye closure and provide timely visual and audio alerts. It is designed for computer use—not vehicle driving—and does not upload webcam footage to a server.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "MediaPipe Tasks Vision", "WebAssembly", "Vite", "Tailwind CSS"] .map((tech) => (
                <span key={tech} className="tag-chip">{tech}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                "On-device facial landmark detection and eye-openness analysis",
                "Temporal detection distinguishes normal blinks from prolonged eye closure",
                "Configurable visual alerts and audio chimes",
                "Study and Work modes with locally stored session summaries",
              ].map((feature) => (
                <div key={feature} className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs text-[var(--text-muted)]">
                Privacy note: webcam frames and facial landmarks are processed in the browser; session preferences and summaries stay in local browser storage.
              </span>
              <a href="https://drive-guard-drowsiness.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[var(--text-accent)] hover:underline whitespace-nowrap">
                Explore DriveGuard ↗
              </a>
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
