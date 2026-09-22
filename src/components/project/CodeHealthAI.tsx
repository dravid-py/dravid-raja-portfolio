import React from "react";
import Image from "next/image";
import { Cpu, CheckCircle2, Play, Layers } from "lucide-react";
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
        </div>
      </Container>
    </section>
  );
}
