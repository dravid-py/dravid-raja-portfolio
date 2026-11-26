import React from "react";
import Link from "next/link";
import { FileText, ArrowUp, Mail, Phone } from "lucide-react";
import { personalData } from "@/data/personal";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/ui/Container";
import { ShareButton } from "@/components/share/ShareButton";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[var(--border-subtle)] bg-[var(--surface-card)]/70 backdrop-blur-xl relative z-10">
      <Container className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start justify-between">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-2.5">
            <Link
              href="#hero"
              className="font-extrabold text-lg sm:text-xl tracking-tight gradient-text brand-name select-none"
            >
              {personalData.name}
            </Link>
            <p className="text-xs text-[var(--text-accent)] font-semibold">
              {personalData.role}
            </p>
            <p className="text-xs text-[var(--text-secondary)] max-w-sm leading-relaxed">
              MSc Artificial Intelligence & Data Science student at Rathinam Global University focusing on Python development, Flask, SQL, and code quality tools.
            </p>

            <div className="pt-1">
              <ShareButton />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors no-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Contact Info & Actions */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-purple-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">{personalData.email}</span>
              </a>
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-purple-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{personalData.phone}</span>
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-purple-300 transition-colors pt-1"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>

          <a
            href="#hero"
            aria-label="Back to top"
            className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

