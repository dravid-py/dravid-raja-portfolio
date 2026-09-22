import React from "react";
import { Languages as LanguagesIcon } from "lucide-react";
import { languagesData } from "@/data/languages";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Languages() {
  return (
    <section id="languages" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Communication"
          title="Languages"
          description="Languages for collaboration and technical communication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {languagesData.map((lang) => (
            <BentoCard key={lang.language} className="p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <LanguagesIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {lang.language}
                </h3>
              </div>
              <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)] shadow-[0_0_8px_var(--accent-purple)]" />
            </BentoCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
