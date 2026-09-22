import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { educationData } from "@/data/education";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Education() {
  return (
    <section id="education" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Academic Qualifications"
          title="Education"
          description="Verified academic trajectory in Artificial Intelligence, Data Science, and Computer Applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <BentoCard key={idx} glow={idx === 0} className="p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/30 text-[var(--text-accent)]">
                    {edu.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-[var(--text-accent)] mt-0.5">
                    {edu.field}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-secondary)] mt-1">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{edu.location}</span>
                </div>
                {edu.grade && (
                  <div className="flex items-center gap-1.5 text-purple-300 font-semibold">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.grade}</span>
                  </div>
                )}
              </div>
            </BentoCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
