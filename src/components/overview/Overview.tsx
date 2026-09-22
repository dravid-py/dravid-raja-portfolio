import React from "react";
import { GraduationCap, Award, Cpu, Code } from "lucide-react";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Overview() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: "MSc AI & DS",
      subtitle: "Currently Pursuing",
      detail: "Rathinam Global University (2026 – 2028)",
      glow: true,
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-400" />,
      title: "BCA Graduate",
      subtitle: "CGPA: 7.6 / 10 (70.8%)",
      detail: "The American College, Madurai (2023 – 2026)",
      glow: false,
    },
    {
      icon: <Cpu className="w-6 h-6 text-fuchsia-400" />,
      title: "CodeHealth-AI",
      subtitle: "Main Project",
      detail: "Multi-Language Code Quality & Bug Prediction Dashboard",
      glow: true,
    },
    {
      icon: <Code className="w-6 h-6 text-violet-400" />,
      title: "Core Stack",
      subtitle: "Python / Web / SQL",
      detail: "Python, HTML, CSS, Flask, SQL, Git",
      glow: false,
    },
  ];

  return (
    <section id="overview" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Quick Highlights"
          title="At a Glance"
          description="An overview of my academic background, technical skills, and main project."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <BentoCard key={index} glow={card.glow} className="p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  {card.icon}
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">0{index + 1}</span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                  {card.title}
                </h3>
                <p className="text-sm font-semibold text-[var(--text-accent)] mt-0.5">
                  {card.subtitle}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  {card.detail}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
