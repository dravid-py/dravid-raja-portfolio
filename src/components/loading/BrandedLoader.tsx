"use client";

import React, { useEffect, useState } from "react";

export function BrandedLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Very fast, elegant entrance fade-out (300ms) to ensure 0 performance impact
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 280);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 550);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#080412] flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.5)] animate-pulse">
          <span className="w-3.5 h-3.5 rounded-full bg-purple-400" />
        </div>
        <span className="text-sm font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-300">
          DRAVID RAJA N
        </span>
      </div>
    </div>
  );
}
