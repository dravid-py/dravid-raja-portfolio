import React from "react";
import { GitBranch, GitPullRequest, Code2, ExternalLink } from "lucide-react";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function GitHubActivity() {
  return (
    <section id="github" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Version Control & Code"
          title="GitHub & Open Source"
          description="Repository tracking and version control workflows via Git and GitHub."
        />

        <div className="max-w-4xl mx-auto">
          <BentoCard className="p-8 flex flex-col gap-6" glow>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Git & GitHub Integration
                  </h3>
                  <span className="text-xs text-[var(--text-secondary)]">
                    Version control workflow for developer repositories
                  </span>
                </div>
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2.5 px-4 text-xs self-start sm:self-auto"
              >
                <GitPullRequest className="w-4 h-4 text-purple-400" />
                <span>Visit GitHub</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
              </a>
            </div>

            {/* Clean, authentic configuration state without fake numbers */}
            <div className="p-6 rounded-xl bg-[var(--surface-input)] border border-dashed border-[var(--border-subtle)] flex flex-col items-center text-center gap-3">
              <div className="p-2.5 rounded-full bg-purple-500/10 text-purple-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">
                  Public Activity Ready
                </h4>
                <p className="text-xs text-[var(--text-muted)] max-w-md mt-1">
                  Source code repositories and collaborative commits are managed via Git and GitHub. Live activity widgets are kept transparent without simulated stats.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="tag-chip text-[11px]">
                  <Code2 className="w-3 h-3 text-purple-400" /> Git Flow
                </span>
                <span className="tag-chip text-[11px]">
                  <GitPullRequest className="w-3 h-3 text-purple-400" /> GitHub Repositories
                </span>
              </div>
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
