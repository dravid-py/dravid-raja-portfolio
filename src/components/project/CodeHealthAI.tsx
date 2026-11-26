import React from "react";
import Image from "next/image";
import { BrainCircuit, ShieldCheck, ExternalLink, Code2, Eye } from "lucide-react";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

const projects = [
  {
    name: "CodeHealth-AI",
    category: "Code Quality · Static Analysis · Machine Learning",
    description:
      "A code analysis dashboard that reviews Python and C/C++ source code, identifies risky patterns, predicts bug risk, and provides quality scores and improvement suggestions.",
    technologies: ["Python", "Flask", "SQLite", "Machine Learning"],
    href: "https://github.com/dravid-py",
    icon: BrainCircuit,
    image: true,
  },
  {
    name: "DriveGuard",
    category: "Computer Vision · Privacy-first Monitoring",
    description:
      "A browser-based drowsiness and attention awareness tool for students and professionals. It analyses webcam frames locally and provides visual and audio alerts during long computer sessions.",
    technologies: ["React", "TypeScript", "MediaPipe", "WebAssembly", "Tailwind CSS"],
    href: "https://github.com/dravid-py/DriveGuard-Drowsiness",
    demo: "https://drive-guard-drowsiness.vercel.app",
    icon: ShieldCheck,
    image: false,
  },
];

export function CodeHealthAI() {
  return (
    <section id="project" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Selected Work"
          title="Featured Projects"
          description="A few things I've built with code, curiosity, and a focus on solving practical problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <BentoCard key={project.name} className="p-5 sm:p-6 flex flex-col gap-5 h-full" glow>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-gradient-to-br from-purple-950/80 via-[#15102a] to-indigo-950/80">
                  {project.image ? (
                    <Image
                      src="/images/codehealth-ai.png"
                      alt="CodeHealth-AI dashboard preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-3xl border border-indigo-300/30 bg-indigo-400/10 flex items-center justify-center shadow-2xl">
                        <Eye className="w-12 h-12 text-indigo-200" />
                      </div>
                      <span className="absolute bottom-4 text-xs tracking-[0.2em] uppercase text-indigo-200/70">Local computer vision</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 shrink-0">
                    <ProjectIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-accent)]">{project.category}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">{project.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-chip">{tech}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-3 border-t border-[var(--border-subtle)]">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-4 text-xs">
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5 px-4 text-xs">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" /> GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
