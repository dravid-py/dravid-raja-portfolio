"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Home,
  User,
  Cpu,
  GraduationCap,
  Languages as LanguagesIcon,
  FileText,
  Mail,
  Sun,
  Moon,
  X,
  Layers,
  Wrench,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    onClose();
    const current = document.documentElement.dataset.theme;
    const next = current === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {}
  };

  const commands: CommandItem[] = [
    {
      id: "home",
      name: "Go Home",
      category: "Navigation",
      icon: <Home className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#hero"),
    },
    {
      id: "about",
      name: "Go About",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#about"),
    },
    {
      id: "overview",
      name: "Go Overview",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#overview"),
    },
    {
      id: "skills",
      name: "Go Skills",
      category: "Navigation",
      icon: <Wrench className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#skills"),
    },
    {
      id: "project",
      name: "Go CodeHealth-AI Project",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#project"),
    },
    {
      id: "education",
      name: "Go Education",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#education"),
    },
    {
      id: "languages",
      name: "Go Languages",
      category: "Navigation",
      icon: <LanguagesIcon className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#languages"),
    },
    {
      id: "resume",
      name: "View Resume PDF",
      category: "Documents",
      icon: <FileText className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose();
        window.open("/DRAVID-RAJA-N-Resume.pdf", "_blank");
      },
    },
    {
      id: "contact",
      name: "Go Contact Form",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo("#contact"),
    },
    {
      id: "theme",
      name: "Toggle Theme (Dark / Light)",
      category: "Preferences",
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      action: toggleTheme,
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-md flex items-start justify-center pt-24 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl glass-panel border border-[var(--border-glow)] overflow-hidden shadow-2xl bg-[var(--surface-elevated)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--surface-card)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            aria-label="Search portfolio commands"
            className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder-[var(--text-muted)]"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-input)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command list */}
        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-xs text-[var(--text-muted)]">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[var(--accent-purple)] text-white font-semibold"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-input)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? "text-white" : ""}>
                      {cmd.icon}
                    </span>
                    <span>{cmd.name}</span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[var(--surface-input)] text-[var(--text-muted)]"
                    }`}
                  >
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--surface-input)] border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Dravid Raja N Portfolio</span>
        </div>
      </div>
    </div>
  );
}
