import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-md text-center">
        <div className="glass-panel p-8 sm:p-10 flex flex-col items-center gap-6 border-purple-500/30">
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <span className="text-4xl font-extrabold font-mono text-[var(--text-accent)]">
              404
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Page Not Found
            </h1>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              The requested page could not be located on this portfolio.
            </p>
          </div>

          <Link
            href="/"
            className="btn-primary w-full justify-center py-3 text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
