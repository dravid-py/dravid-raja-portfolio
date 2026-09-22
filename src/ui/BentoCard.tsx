import React from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function BentoCard({ children, className, glow = false, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "glass-card-elevated relative overflow-hidden",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-600/10 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
