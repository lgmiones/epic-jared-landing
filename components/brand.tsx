import Image from "next/image";
import { cn } from "@/lib/utils";
import { bolder } from "@/lib/offer";

export function EpicJaredMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display text-lg leading-none tracking-tight",
        className,
      )}
    >
      <span className="font-medium">epic</span>
      <span className="font-black">jared</span>
      <span aria-hidden className="ml-0.5 inline-block size-[0.32em] rounded-full bg-pink" />
    </span>
  );
}

export function BolderLogo({ className }: { className?: string }) {
  return (
    <Image
      src={bolder.logo}
      alt="Bolder Adventure Park"
      width={160}
      height={100}
      unoptimized
      className={cn("h-9 w-auto", className)}
    />
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-4", className)} fill="currentColor">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
  );
}

export function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-4", className)}>
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.8" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.1A12 12 0 0 0 12 24" />
      <path fill="#FBBC05" d="M5.27 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.59 1.8l3.43-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.27 6.6l4 3.1C6.22 6.86 8.87 4.75 12 4.75" />
    </svg>
  );
}

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const pct = Math.round(Math.max(0, Math.min(1, rating - i)) * 100);
        return (
          <svg key={i} viewBox="0 0 20 20" aria-hidden className="size-4">
            <defs>
              <linearGradient id={`star-fill-${pct}`}>
                <stop offset={`${pct}%`} stopColor="#fbbc04" />
                <stop offset={`${pct}%`} stopColor="#d8dee9" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-fill-${pct})`}
              d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z"
            />
          </svg>
        );
      })}
    </span>
  );
}
