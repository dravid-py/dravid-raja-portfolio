"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Terminal, FileText } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/ui/Container";

interface NavbarProps {
  onOpenCommand?: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "overview",
      "skills",
      "project",
      "education",
      "languages",
      "resume",
      "contact",
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If near the top
      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // If near bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // Use vertical midpoint of viewport for accurate section tracking
      const scrollMid = window.scrollY + window.innerHeight * 0.35;
      let current = "hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollMid >= top && scrollMid < top + height) {
            current = id;
            break;
          } else if (scrollMid >= top) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[var(--surface-glass)] backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Brand - One single line on desktop and navbar with NO underline */}
            <Link
              href="#hero"
              className="font-extrabold text-lg sm:text-xl tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity brand-name flex items-center gap-2 no-underline select-none"
              style={{ textDecoration: "none", borderBottom: "none" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-purple)] shadow-[0_0_10px_var(--accent-purple)] shrink-0" />
              <span className="gradient-text">DRAVID RAJA N</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-[var(--surface-glass)] backdrop-blur-md border border-[var(--border-subtle)]">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 no-underline ${
                      isActive
                        ? "bg-purple-600/30 text-white border border-purple-500/50 shadow-[0_0_14px_rgba(168,85,247,0.35)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-card)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Resume CTA */}
              <a
                href="/DRAVID-RAJA-N-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:brightness-110 shadow-[0_2px_12px_rgba(124,58,237,0.3)] transition-all no-underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile menu"
                className="xl:hidden p-2.5 rounded-xl bg-[var(--surface-glass)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-glow)]"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenCommand={() => onOpenCommand && onOpenCommand()}
        activeSection={activeSection}
      />
    </>
  );
}
