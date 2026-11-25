"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, UserRound, Mail, Terminal } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommand: () => void;
  activeSection?: string;
}

export function MobileMenu({ isOpen, onClose, onOpenCommand, activeSection = "hero" }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] lg:hidden flex flex-col bg-[var(--bg-base)]/95 backdrop-blur-2xl transition-all duration-300">
      <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)]">
        <span className="font-extrabold text-xl tracking-tight gradient-text brand-name select-none">DRAVID RAJA N</span>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button type="button" onClick={onClose} aria-label="Close menu" className="p-2.5 rounded-xl bg-[var(--surface-glass)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link key={link.name} href={link.href} onClick={onClose} className={`px-4 py-3 text-lg font-medium rounded-xl transition-all ${isActive ? "bg-purple-600/25 text-white border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)] font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-glass)]"}`}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 pt-6 border-t border-[var(--border-subtle)]">
          <button type="button" onClick={() => { onClose(); onOpenCommand(); }} className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--surface-glass)] border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-2"><Terminal className="w-4 h-4 text-purple-400" />Quick Command Palette</span>
            <kbd className="px-2 py-0.5 text-xs bg-[var(--surface-card)] rounded border border-[var(--border-subtle)]">Ctrl+K</kbd>
          </button>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a href="#resume" onClick={onClose} className="btn-secondary py-3 text-xs justify-center">
              <UserRound className="w-4 h-4 text-purple-400" />View Profile
            </a>
            <a href="#contact" onClick={onClose} className="btn-primary py-3 text-xs justify-center">
              <Mail className="w-4 h-4" />Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
