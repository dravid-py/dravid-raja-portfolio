import React from "react";
import {
  UserRound, GraduationCap, Code2, BriefcaseBusiness, ExternalLink,
  Mail, Phone, MapPin, BrainCircuit, Eye, Languages,
  Users,
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
    subtitle: "AI-Powered Drowsiness and Attention Monitoring System",
    description: "Developed a privacy-focused web application to monitor drowsiness during computer usage. Integrated MediaPipe facial landmark detection and eye-openness analysis, visual and audio alerts, and local session tracking without uploading webcam footage to external servers.",
    technologies: ["React", "TypeScript", "MediaPipe", "WebAssembly", "Tailwind CSS"],
    href: "https://github.com/dravid-py/DriveGuard-Drowsiness",
    icon: Eye,
  },
  {
    name: "CodeHealth-AI",
    subtitle: "Multi-Language Code Quality and Bug Prediction Dashboard",
    description: "Developed a web-based application to analyze Python and C/C++ source code. Implemented static code analysis and machine-learning-based bug prediction, generated code quality scores, risk levels and improvement suggestions, and added analysis history with downloadable PDF reports.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "Machine Learning"],
    href: "https://github.com/dravid-py",
    icon: BrainCircuit,
  },
];

const softSkills = [
  "Problem Solving", "Teamwork", "Communication",
  "Time Management", "Adaptability", "Self-Motivation",
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
          description="Education, skills, coursework, and selected projects."
        />

        <div className="flex flex-col gap-6">
          <BentoCard className="p-6 sm:p-8 flex flex-col gap-5" glow>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <UserRound className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{personalData.fullName}</h3>
                <p className="text-sm text-[var(--text-accent)] font-semibold">{personalData.degreeTrack}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Career Objective</h4>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-4xl">
                Motivated BCA graduate currently pursuing M.Sc. Artificial Intelligence and Data Science, with knowledge of Python, SQL, web technologies and database management. Interested in an entry-level IT opportunity to apply technical skills, gain practical experience and contribute to real-world software development projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.linkedin.com/in/dravid-raja-0623b7293/" target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5 px-4 text-sm">
                <ExternalLink className="w-4 h-4 text-purple-400" /> LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://github.com/dravid-py" target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5 px-4 text-sm">
                <Code2 className="w-4 h-4 text-purple-400" /> GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a href={`mailto:${personalData.email}`} className="btn-secondary py-2.5 px-4 text-sm">
                <Mail className="w-4 h-4 text-purple-400" /> Email
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"><MapPin className="w-4 h-4 text-purple-400" /> {personalData.location}</div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"><Phone className="w-4 h-4 text-purple-400" /> {personalData.phone}</div>
            </div>
          </BentoCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BentoCard className="p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400"><GraduationCap className="w-5 h-5" /></div>
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
                <div className="border-l-2 border-purple-500/40 pl-4">
                  <h4 className="font-bold text-[var(--text-primary)]">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">St. Britto Higher Secondary School, Madurai · 2022–2023</p>
                </div>
                <div className="border-l-2 border-purple-500/40 pl-4">
                  <h4 className="font-bold text-[var(--text-primary)]">Secondary School Leaving Certificate (SSLC)</h4>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">St. Britto Higher Secondary School, Madurai · 2020–2021</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"><Code2 className="w-5 h-5" /></div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="tag-chip">{skill}</span>)}</div>
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Relevant Coursework</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Python Programming, Database Management Systems (RDBMS), Data Analytics, Data Mining, and Web Technologies.</p>
              </div>
            </BentoCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BentoCard className="p-6 sm:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3"><div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400"><Users className="w-5 h-5" /></div><h3 className="text-xl font-bold text-[var(--text-primary)]">Soft Skills</h3></div>
              <div className="flex flex-wrap gap-2">{softSkills.map((skill) => <span key={skill} className="tag-chip">{skill}</span>)}</div>
            </BentoCard>
            <BentoCard className="p-6 sm:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3"><div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400"><Languages className="w-5 h-5" /></div><h3 className="text-xl font-bold text-[var(--text-primary)]">Languages</h3></div>
              <p className="text-sm text-[var(--text-secondary)]">Tamil · English</p>
            </BentoCard>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400"><BriefcaseBusiness className="w-5 h-5" /></div>
            <div><h3 className="text-xl font-bold text-[var(--text-primary)]">Selected Projects</h3><p className="text-xs text-[var(--text-muted)]">Project work and practical development experience</p></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <BentoCard key={project.name} className="p-6 sm:p-7 flex flex-col gap-4" glow>
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400"><ProjectIcon className="w-6 h-6" /></div>
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-3 text-xs"><Code2 className="w-3.5 h-3.5" /> View on GitHub <ExternalLink className="w-3 h-3" /></a>
                  </div>
                  <div><h4 className="text-lg font-bold text-[var(--text-primary)]">{project.name}</h4><p className="text-xs font-semibold text-[var(--text-accent)] mt-1">{project.subtitle}</p></div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="tag-chip">{technology}</span>)}</div>
                </BentoCard>
              );
            })}
          </div>
          <BentoCard className="p-4 sm:p-6 flex flex-col gap-4" glow>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400"><Eye className="w-5 h-5" /></div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Resume Preview</h3>
                <p className="text-xs text-[var(--text-muted)]">View my latest resume directly on this page.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-white">
              <iframe
                src="/dravid_raja_resume%20(1).pdf#page=1&zoom=page-width&toolbar=0&navpanes=0"
                title="Dravid Raja resume preview"
                className="w-full"
                style={{ height: "900px", minHeight: "900px", display: "block" }}
                loading="lazy"
              />
            </div>
          </BentoCard>
          <p className="text-center text-xs text-[var(--text-muted)]">Resume preview is provided on this website. Browser controls may vary.</p>
        </div>
      </Container>
    </section>
  );
}
