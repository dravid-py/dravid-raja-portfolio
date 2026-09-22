import React from "react";
import { Terminal, Globe, Database, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming":
        return <Terminal className="w-5 h-5 text-purple-400" />;
      case "Web":
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-fuchsia-400" />;
      case "Tools":
        return <Wrench className="w-5 h-5 text-violet-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Technical Competencies"
          title="Skills & Technologies"
          description="A curated matrix of programming languages, web frameworks, databases, and development tooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column: Programming & Database */}
          <div className="flex flex-col gap-5">
            {skillCategories
              .filter((c) => c.title === "Programming" || c.title === "Database")
              .map((category) => (
                <BentoCard key={category.title} className="p-5 sm:p-6 flex flex-col gap-3.5">
                  <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-2.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                        {category.title}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">
                        {category.skills.length} {category.skills.length === 1 ? "Technology" : "Technologies"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] hover:border-[var(--border-glow)] transition-all flex flex-col gap-0.5 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </BentoCard>
              ))}
          </div>

          {/* Right Column: Web & Tools */}
          <div className="flex flex-col gap-5">
            {skillCategories
              .filter((c) => c.title === "Web" || c.title === "Tools")
              .map((category) => (
                <BentoCard key={category.title} className="p-5 sm:p-6 flex flex-col gap-3.5">
                  <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-2.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                        {category.title}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">
                        {category.skills.length} {category.skills.length === 1 ? "Technology" : "Technologies"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] hover:border-[var(--border-glow)] transition-all flex flex-col gap-0.5 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </BentoCard>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
