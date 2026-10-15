"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function PromoCode({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the code stays visible to type by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "group inline-flex min-h-11 items-center gap-3 rounded-xl border-2 border-dashed border-pink bg-white px-4 py-2 text-ink transition-colors hover:bg-accent focus-visible:ring-4 focus-visible:ring-pink/40 focus-visible:outline-none",
        className,
      )}
      aria-label={`Copy promo code ${code}`}
    >
      <span className="text-xs font-bold tracking-wider text-ink-3 uppercase">Code</span>
      <span className="font-display text-lg font-black tracking-wider">{code}</span>
      <span className="flex items-center gap-1 text-xs font-bold text-pink-ink" aria-live="polite">
        {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
