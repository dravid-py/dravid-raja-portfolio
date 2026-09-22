"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { CommandPalette } from "@/components/command/CommandPalette";
import { PortfolioChat } from "@/components/chat/PortfolioChat";

interface AppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
      <PortfolioChat />
    </>
  );
}
