"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Dravid Raja N | MSc AI & Data Science Portfolio",
      text: "Explore the developer portfolio and CodeHealth-AI project by Dravid Raja N",
      url: window.location.href,
    };

    if (navigator.share && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
      }
    }

    // Fallback: Copy link
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // safe fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="btn-secondary py-2 px-3.5 text-xs flex items-center gap-1.5 cursor-pointer"
      aria-label="Share or copy portfolio link"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 font-semibold">Link copied</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-purple-400" />
          <span>Share Portfolio</span>
        </>
      )}
    </button>
  );
}
