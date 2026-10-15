"use client";

import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

const nowInSeconds = () => Math.floor(Date.now() / 1000);
// Server render and first client paint show placeholders; the live value takes over after hydration.
const serverSnapshot = () => null;

export function Countdown({ endsAt, label }: { endsAt: string; label: string }) {
  const now = useSyncExternalStore(subscribe, nowInSeconds, serverSnapshot);
  const end = Math.floor(new Date(endsAt).getTime() / 1000);
  const remaining = now === null ? null : Math.max(0, end - now);

  if (remaining === 0) {
    return <p className="font-display text-sm font-extrabold tracking-wider uppercase">This offer has ended</p>;
  }

  const parts =
    remaining === null
      ? null
      : [
          { unit: "days", value: Math.floor(remaining / 86400) },
          { unit: "hrs", value: Math.floor((remaining % 86400) / 3600) },
          { unit: "min", value: Math.floor((remaining % 3600) / 60) },
          { unit: "sec", value: remaining % 60 },
        ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <p className="text-sm font-bold tracking-wider uppercase">Offer ends {label}</p>
      <div role="timer" aria-live="off" className="flex gap-1.5 font-display tabular-nums">
        {(parts ?? ["days", "hrs", "min", "sec"].map((unit) => ({ unit, value: null }))).map((p) => (
          <span key={p.unit} className="flex min-w-14 flex-col items-center rounded-lg bg-ink px-2 py-1.5 text-white">
            <span className="text-xl leading-none font-black">
              {p.value === null ? "--" : String(p.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[0.6rem] font-bold tracking-widest text-white/70 uppercase">{p.unit}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
