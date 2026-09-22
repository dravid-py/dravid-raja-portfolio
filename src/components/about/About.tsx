import React from "react";
import { User, Sparkles, GraduationCap, Code2, MapPin, Mail } from "lucide-react";
import { personalData } from "@/data/personal";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function About() {
  return (
    <section id="about" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Profile Overview"
          title="About Me"
          description="A summary of my background, academic trajectory, and development focus."
        />

        <div className="bento-grid-12">
          {/* Main Editorial Biography Card */}
          <BentoCard className="col-span-8 p-8 flex flex-col justify-between gap-6" glow>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Academic & Technical Background
                </h3>
                <span className="text-xs text-[var(--text-secondary)]">
                  MSc Artificial Intelligence & Data Science
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {personalData.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Location: <strong className="text-[var(--text-primary)]">{personalData.location}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Email: <strong className="text-[var(--text-primary)]">{personalData.email}</strong>
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Side Bento Card: Core Focus */}
          <BentoCard className="col-span-4 p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Core Focus
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] mb-1">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  Academic Studies
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Artificial intelligence, data analytics, machine learning, and computer applications coursework.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] mb-1">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  Development
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Python development, Flask web applications, SQL databases, and code quality tooling.
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
