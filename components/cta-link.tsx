import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "hot" | "light" | "outline-light" | "dark";

const variants: Record<Variant, string> = {
  hot: "bg-hot text-white shadow-[0_14px_30px_-12px_rgba(255,61,143,0.7)] hover:brightness-110",
  light: "bg-white text-ink hover:bg-yellow",
  "outline-light": "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
  dark: "bg-ink text-white hover:bg-ink-2",
};

// Large, high-contrast call-to-action link. Uses an <a> so ticket links work
// without JavaScript.
export function CtaLink({
  variant = "hot",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold tracking-wide whitespace-nowrap transition-all outline-none focus-visible:ring-4 focus-visible:ring-pink/50 active:translate-y-px sm:text-lg [&_svg]:size-5 [&_svg]:shrink-0",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
