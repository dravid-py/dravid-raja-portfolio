"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // safe fallback if storage restricted
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="p-2.5 rounded-xl bg-[var(--surface-glass)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-glow)] hover:text-[var(--text-accent)] transition-all cursor-pointer flex items-center justify-center"
    >
      {mounted && theme === "light" ? (
        <Moon className="w-4 h-4 text-purple-600" />
      ) : (
        <Sun className="w-4 h-4 text-purple-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
