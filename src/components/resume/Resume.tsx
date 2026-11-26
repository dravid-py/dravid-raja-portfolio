import React from "react";
import { Eye } from "lucide-react";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Resume() {
  return (
    <section id="resume" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Resume"
          title="A closer look"
          description="View my current resume directly below."
        />
        <BentoCard className="p-4 sm:p-6" glow>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Resume Preview</h3>
              <p className="text-xs text-[var(--text-muted)]">Embedded PDF · Updated resume</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-white">
            <iframe
              src="/dravid_raja_resume%20(1).pdf#page=1&zoom=page-width&toolbar=0&navpanes=0"
              title="Dravid Raja resume preview"
              className="w-full h-[70vh] min-h-[520px] max-h-[900px] block"
              loading="lazy"
            />
          </div>
        </BentoCard>
      </Container>
    </section>
  );
}
