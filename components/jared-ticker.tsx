import { Sparkles } from "lucide-react";
import { jared } from "@/lib/offer";

export function JaredTicker() {
  const items = [...jared.ticker, ...jared.ticker];

  return (
    <div className="overflow-hidden bg-hot py-3 text-white">
      <p className="sr-only">{jared.ticker.join(" · ")}</p>
      <div aria-hidden className="flex w-max animate-marquee gap-8 font-display text-sm font-extrabold tracking-wider whitespace-nowrap uppercase">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <Sparkles className="size-4 text-yellow" />
          </span>
        ))}
      </div>
    </div>
  );
}
