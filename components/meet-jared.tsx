import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { EpicJaredMark } from "@/components/brand";
import { jared } from "@/lib/offer";

export function MeetJared() {
  const { stadium } = jared.images;

  return (
    <section aria-labelledby="meet-jared" className="relative isolate overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div aria-hidden className="absolute -top-40 -left-40 -z-10 size-[480px] rounded-full bg-pink/25 blur-3xl" />
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-4 ring-white/10">
            <Image src={stadium.src} alt={stadium.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-yellow px-4 py-3 text-ink shadow-xl sm:left-auto sm:-right-4">
            <p className="font-display text-2xl font-black">2,289</p>
            <p className="text-xs font-bold tracking-wider uppercase">at his first blaster battle</p>
          </div>
        </div>

        <div>
          <EpicJaredMark className="text-2xl" />
          <h2 id="meet-jared" className="mt-4 font-display text-3xl leading-tight font-black tracking-tight text-balance sm:text-4xl">
            Who’s Jared, and why do people show up when he asks?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Jared Guynes turned a 2016 tornado fundraiser in Rowlett, Texas into Jared’s Epic Blaster Battle, a foam-dart
            fight that has filled four NFL stadiums. He won the Nerf Ultra Championship in 2019, holds four Guinness World
            Records and is competing on Season 6 of <em>The Floor</em> on FOX.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            When Jared says a place is worth your weekend, his community listens.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {jared.credentials.map((c) => (
              <div key={c.label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="sr-only">{c.label}</dt>
                <dd className="font-display text-xl font-black whitespace-nowrap text-hot sm:text-2xl">{c.value}</dd>
                <dd className="mt-1 text-xs font-semibold text-white/70">{c.label}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-xs font-bold tracking-[0.2em] text-white/50 uppercase">As covered by</p>
          <p className="mt-2 text-sm font-semibold text-white/80">{jared.press.join(" · ")}</p>

          <a
            href={jared.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-yellow underline-offset-4 hover:underline"
          >
            More about Jared at epicjared.com
            <ExternalLink aria-hidden className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
