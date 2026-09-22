import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  external = false,
  download,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : variant === "outline"
      ? "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-glow)] hover:bg-[var(--surface-glass)] transition-all"
      : "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all";

  const content = (
    <>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
          className={cn(baseClasses, className)}
        >
          {content}
        </a>
      );
    }

    if (download) {
      return (
        <a href={href} download={download} className={cn(baseClasses, className)}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cn(baseClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, className)} {...props}>
      {content}
    </button>
  );
}
