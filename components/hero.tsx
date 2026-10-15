import Image from "next/image";
import { ArrowDown, BadgeCheck, Ticket, Trophy } from "lucide-react";
import { GoogleIcon, Stars } from "@/components/brand";
import { CtaLink } from "@/components/cta-link";
import { bolder, jared, offer, passes } from "@/lib/offer";

export function Hero() {
  const { portrait, stadium } = jared.images;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={stadium.src}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="-z-20 object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_80%_30%,rgba(255,61,143,0.35),transparent_70%),linear-gradient(180deg,rgba(28,31,38,0.55),#1c1f26_92%)]"
      />

      <div className="wrap grid items-end lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Jared photo: shown first on mobile so the headline sits on top of it */}
        <div className="relative order-1 h-[340px] sm:h-[460px] lg:order-2 lg:h-[620px]">
          <div aria-hidden className="absolute bottom-0 left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full bg-hot opacity-90 blur-[2px] lg:w-[92%]" />
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            loading="eager"
            fetchPriority="high"
            className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
          />
          <div aria-hidden className="absolute -inset-x-4 bottom-0 h-40 bg-gradient-to-t from-ink via-ink/75 to-transparent sm:-inset-x-6 lg:hidden" />

          <div className="absolute top-8 right-0 hidden rotate-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-xl sm:block lg:top-24 lg:-right-2">
            <p className="font-display text-3xl font-black text-hot">4×</p>
            <p className="text-xs font-bold tracking-wider uppercase">Guinness World Records</p>
          </div>
          <div className="absolute top-40 left-0 hidden -rotate-3 items-center gap-2 rounded-2xl bg-yellow px-4 py-3 text-ink shadow-xl sm:flex lg:top-64 lg:-left-6">
            <Trophy aria-hidden className="size-5" />
            <p className="text-xs font-bold tracking-wider uppercase">Nerf Ultra Champion</p>
          </div>
        </div>

        <div className="relative z-10 order-2 -mt-24 pb-14 sm:-mt-28 lg:order-1 lg:mt-0 lg:pt-12 lg:pb-16">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pr-4 pl-1.5 text-sm font-semibold ring-1 ring-white/15 backdrop-blur">
            <span className="relative size-7 overflow-hidden rounded-full bg-hot">
              <Image src={portrait.src} alt="" fill sizes="28px" className="object-cover object-top" />
            </span>
            {jared.name}
            <BadgeCheck aria-label="Verified" className="size-4 fill-facebook text-white" />
            <span className="text-white/60">on Facebook</span>
          </p>

          <blockquote className="mt-5">
            <p className="font-display text-[2.15rem] leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]">
              “Bolder Adventure Park in Grand Prairie <span className="text-hot">needs help.</span>”
            </p>
            <footer className="mt-3 text-sm font-semibold text-white/70">— {jared.name}</footer>
          </blockquote>

          <h1 className="mt-6 font-display text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
            <span className="text-yellow">EPICJARED</span> Exclusive Offer
            <span className="sr-only"> on Bolder Adventure Park tickets</span>
          </h1>

          <ul className="mt-5 flex flex-wrap gap-3" aria-label="Exclusive prices">
            {passes.map((pass) => (
              <li key={pass.id} className="flex items-baseline gap-2 rounded-xl border border-dashed border-white/30 bg-white/5 px-4 py-2.5">
                <span className="text-sm font-semibold text-white/75">{pass.name.replace("Epic Jared – ", "")}</span>
                <span className="font-display text-2xl font-black">${pass.price}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 flex items-center gap-2 text-sm font-bold tracking-wide text-yellow uppercase">
            <span aria-hidden className="size-2.5 animate-pulse-dot rounded-full bg-pink" />
            {offer.scarcity}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href="#tickets">
              <Ticket aria-hidden />
              Claim My EPICJARED Price
            </CtaLink>
            <CtaLink href="#jared" variant="outline-light">
              Why Jared Says Go
              <ArrowDown aria-hidden />
            </CtaLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <a href={bolder.google.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <GoogleIcon />
              <span className="font-bold text-white">{bolder.google.rating}</span>
              <Stars rating={Number(bolder.google.rating)} />
              <span>{bolder.google.reviews} Google reviews</span>
            </a>
            <span className="flex items-center gap-2">
              <span aria-hidden className="text-base">👍❤️</span>
              <span>
                <span className="font-bold text-white">{jared.engagement[0].value}</span> reactions ·{" "}
                <span className="font-bold text-white">{jared.engagement[1].value}</span> comments on Jared’s post
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
