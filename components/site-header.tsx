import { Ticket } from "lucide-react";
import { BolderLogo, EpicJaredMark } from "@/components/brand";
import { CtaLink } from "@/components/cta-link";

const nav = [
  { href: "#tickets", label: "Deals" },
  { href: "#inside", label: "Inside Bolder" },
  { href: "#proof", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label="EPICJARED × Bolder Adventure Park, back to top">
          <EpicJaredMark className="text-base sm:text-lg" />
          <span aria-hidden className="text-sm font-bold text-white/50">
            ×
          </span>
          <BolderLogo className="h-7 sm:h-8" />
        </a>
        <nav aria-label="Page sections" className="hidden items-center gap-7 text-sm font-semibold text-white/80 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <CtaLink href="#tickets" className="min-h-10 px-4 py-2 text-sm sm:text-sm">
          <Ticket aria-hidden />
          Get Tickets
        </CtaLink>
      </div>
    </header>
  );
}
