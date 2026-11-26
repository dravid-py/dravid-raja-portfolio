import React from "react";
import Image from "next/image";
import { UserRound, Mail, Sparkles, ArrowDown } from "lucide-react";
import { personalData } from "@/data/personal";
import { Container } from "@/ui/Container";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 pulse-ambient" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 pulse-ambient" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-[var(--text-accent)] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{personalData.degreeTrack}</span>
            </div>
            <div className="w-full">
              <h1 className="hero-title gradient-text brand-name">{personalData.name}</h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-[var(--text-accent)]">{personalData.role}</p>
            </div>
            <div className="flex flex-col gap-2 max-w-xl">
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                MSc Artificial Intelligence & Data Science student and BCA graduate, building practical software with Python, SQL, Flask, and modern web technologies.
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                <span className="text-[var(--text-primary)] font-semibold">Technical focus:</span> Python, SQL, Flask, React, Git, GitHub.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {personalData.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]" />{tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#resume" className="btn-primary">
                <UserRound className="w-4 h-4" /><span>View Profile</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail className="w-4 h-4 text-purple-400" /><span>Contact Me</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/50 via-violet-500/40 to-indigo-600/50 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative p-3 rounded-full bg-gradient-to-b from-purple-500/30 via-purple-900/20 to-indigo-900/40 backdrop-blur-xl border-2 border-purple-500/40 shadow-[0_12px_45px_rgba(139,92,246,0.35)] transition-all duration-500 group-hover:border-purple-400/60 group-hover:shadow-[0_16px_55px_rgba(168,85,247,0.5)]">
                <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 rounded-full overflow-hidden bg-gradient-to-b from-purple-950/60 to-[#080412]">
                  <Image src="/images/profile.png" alt={personalData.fullName} fill sizes="(max-width: 768px) 280px, 360px" priority className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080412]/50 via-transparent to-purple-500/10 pointer-events-none" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[var(--surface-glass)]/95 backdrop-blur-xl border border-purple-500/40 shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs font-bold text-[var(--text-primary)]">Rathinam Global University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-12">
          <a href="#about" aria-label="Scroll to About section" className="p-2 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-glow)] transition-all animate-bounce">
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
