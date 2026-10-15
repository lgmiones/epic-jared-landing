"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href.split("#")[0];
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, text, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Share sheet dismissed or clipboard blocked; nothing to do.
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/50 px-6 py-3 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:outline-none"
    >
      {copied ? <Check aria-hidden className="size-5" /> : <Share2 aria-hidden className="size-5" />}
      <span aria-live="polite">{copied ? "Link copied" : "Share this deal"}</span>
    </button>
  );
}
