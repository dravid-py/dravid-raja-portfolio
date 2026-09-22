import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
    >
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base sm:text-lg text-[var(--text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}
