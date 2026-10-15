import { Ticket } from "lucide-react";
import { passes } from "@/lib/offer";

// Always-visible buy bar on phones, where the header CTA scrolls out of thumb reach.
export function MobileCtaBar() {
  const lowest = passes.reduce((min, p) => (Number(p.price) < Number(min.price) ? p : min));

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-white backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-[0.7rem] font-bold tracking-wider text-yellow uppercase">EPICJARED price</p>
          <p className="font-display text-lg font-black">From ${lowest.price}</p>
        </div>
        <a
          href="#tickets"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-hot px-5 text-base font-bold text-white focus-visible:ring-4 focus-visible:ring-pink/50 focus-visible:outline-none"
        >
          <Ticket aria-hidden className="size-5" />
          Get Tickets
        </a>
      </div>
    </div>
  );
}
