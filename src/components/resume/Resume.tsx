import React from "react";
import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Resume() {
  const resumePath = "/DRAVID-RAJA-N-Resume.pdf";

  return (
    <section id="resume" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Curriculum Vitae"
          title="Resume & Downloads"
          description="View and download my official, approved resume in PDF format."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Download & Actions Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <BentoCard className="p-6 sm:p-8 flex flex-col gap-6" glow>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Official Resume
                  </h3>
                  <span className="text-xs text-[var(--text-accent)] font-semibold">
                    Verified Document (PDF)
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Contains complete academic background, technical competencies, CodeHealth-AI project details, and verified qualifications.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={resumePath}
                  download="DRAVID-RAJA-N-Resume.pdf"
                  className="btn-primary w-full justify-center py-3 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center py-3 text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                  <span>Open Full PDF in New Tab</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-secondary)] block">
                    Authentic Source
                  </span>
                  Matches the exact approved resume document without modifications.
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Actual PDF Embedded Viewer */}
          <div className="lg:col-span-8">
            <BentoCard className="p-4 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    DRAVID-RAJA-N-Resume.pdf — Live PDF Preview
                  </span>
                </div>

                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold"
                >
                  <span>Pop out</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-[650px] rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-input)]">
                <iframe
                  src={`${resumePath}#toolbar=0&navpanes=0`}
                  title="Dravid Raja N Resume PDF Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </BentoCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
