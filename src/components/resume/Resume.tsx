import React from "react";
import {
  UserRound, GraduationCap, Code2, BriefcaseBusiness, ExternalLink,
  Github, Linkedin, Mail, Phone, MapPin, BrainCircuit, Eye,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

const projects = [
  {
    name: "DriveGuard",
    subtitle: "AI-Powered Drowsiness & Attention Monitoring",
    description:
      "A privacy-focused browser application for monitoring drowsiness during computer use. Uses facial landmarks and eye-openness analysis to detect prolonged eye closure and provide visual and audio alerts.",
    technologies: ["React", "TypeScript", "MediaPipe", "WebAssembly", "Tailwind CSS"],
    href: "https://github.com/dravid-py/DriveGuard-Drowsiness",
    icon: Eye,
  },
  {
    name: "CodeHealth-AI",
    subtitle: "Multi-Language Code Quality & Bug Prediction Dashboard",
    description:
      "A code analysis dashboard designed to inspect Python and C/C++ source code, combine static analysis with machine-learning-based bug-risk prediction, and present quality scores and improvement suggestions.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "Machine Learning"],
    href: "https://github.com/dravid-py",
    icon: BrainCircuit,
  },
];

export function Resume() {
  const skills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => skill.name)
  );

  return (
    <section id="resume" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Professional Profile"
          title="My Profile"
          description="My education, technical skills, and selected projects in one place."
        />

        <div className="flex flex-col gap-6">
          <BentoCard className="p-6 sm:p-8 flex flex-col gap-5" glow>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <UserRound className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  {personalData.fullName}
                </h3>
                <p className="text-sm text-[var(--text-accent)] font-semibold">
                  {personalData.degreeTrack}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-4xl">
              {personalData.summary}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.linkedin.com/in/dravid-raja-0623b7293/" target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5 px-4 text-sm">
                <Linkedin className="w-4 h-4 text-purple-400" /> LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://github.com/dravid-py" target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5 px-4 text-sm">
                <Github className="w-4 h-4 text-purple-400" /> GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a href={`mailto:${personalData.email}`} className="btn-secondary py-2.5 px-4 text-sm">
                <Mail className="w-4 h-4 text-purple-400" /> Email
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 text-purple-400" /> {personalData.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Phone className="w-4 h-4 text-purple-400" /> {personalData.phone}
              </div>
            </div>
          </BentoCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BentoCard className="p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Education</h3>
              </div>
              <div className="flex flex-col gap-5">
                {educationData.map((education) => (
                  <div key={education.degree} className="border-l-2 border-purple-500/40 pl-4">
                    <h4 className="font-bold text-[var(--text-primary)]">{education.degree}</h4>
                    <p className="text-sm text-[var(--text-accent)] font-semibold">{education.field}</p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{education.institution}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{education.duration} · {education.status}</p>
                    {education.grade && <p className="text-xs text-[var(--text-secondary)] mt-1">{education.grade}</p>}
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="tag-chip">{skill}</span>)}
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Relevant Coursework</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Python Programming, Database Management Systems (RDBMS), Data Analytics, Data Mining, and Web Technologies.
                </p>
              </div>
            </BentoCard>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <BriefcaseBusiness className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Selected Projects</h3>
              <p className="text-xs text-[var(--text-muted)]">Practical work and development experience</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <BentoCard key={project.name} className="p-6 sm:p-7 flex flex-col gap-4" glow>
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <ProjectIcon className="w-6 h-6" />
                    </div>
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-3 text-xs">
                      <Github className="w-3.5 h-3.5" /> View on GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">{project.name}</h4>
                    <p className="text-xs font-semibold text-[var(--text-accent)] mt-1">{project.subtitle}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => <span key={technology} className="tag-chip">{technology}</span>)}
                  </div>
                </BentoCard>
              );
            })}
          </div>

          <p className="text-center text-xs text-[var(--text-muted)]">
            This professional profile is available to view on this website. No resume file download is provided.
          </p>
        </div>
      </Container>
    </section>
  );
}
