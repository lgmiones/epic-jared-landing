import Image from "next/image";
import { BadgeCheck, Globe, MessageCircle, Share2, Ticket } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { jared } from "@/lib/offer";

// Jared's own words, styled like the Facebook post they came from.
export function JaredPost() {
  const [reactions, comments, shares] = jared.engagement;

  return (
    <section id="jared" className="scroll-mt-16 py-16 sm:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-pink-ink uppercase">In Jared’s own words</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight text-balance sm:text-4xl">
            Jared Guynes went to bat for Bolder. His followers showed up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">
            Jared is a Nerf champion and 4× Guinness World Record holder who runs his own blaster battles. When he heard
            Grand Prairie’s indoor adventure park was struggling, he posted about it on Facebook, and DFW families
            flooded the comments.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Bolder is saying thank you with an exclusive price you can only get through Jared.
          </p>

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {jared.engagement.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-line">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-black text-ink">{stat.value}</dd>
                <dd className="mt-1 text-xs font-bold tracking-wider text-ink-3 uppercase">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <CtaLink href="#tickets" className="mt-8">
            <Ticket aria-hidden />
            See the EPICJARED Deals
          </CtaLink>
        </div>

        <article
          aria-label={`Facebook post by ${jared.name}`}
          className="relative rounded-3xl bg-white p-5 shadow-[0_30px_60px_-34px_rgba(28,31,38,0.45)] ring-1 ring-line sm:p-7"
        >
          <div aria-hidden className="absolute -top-4 -right-3 rotate-6 rounded-full bg-yellow px-4 py-1.5 font-display text-xs font-black tracking-wider text-ink uppercase shadow-md">
            Real post
          </div>
          <header className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-full bg-hot ring-2 ring-pink/30">
              <Image src={jared.images.portrait.src} alt="" fill sizes="48px" className="object-cover object-top" />
            </span>
            <div>
              <p className="flex items-center gap-1.5 font-bold text-ink">
                {jared.name}
                <BadgeCheck aria-label="Verified" className="size-4 fill-facebook text-white" />
              </p>
              <p className="flex items-center gap-1 text-sm text-ink-3">
                {jared.postDate} · <Globe aria-hidden className="size-3.5" />
              </p>
            </div>
          </header>

          <blockquote className="mt-5 space-y-3 text-[1.05rem] leading-relaxed text-ink sm:text-lg">
            <p className="font-display text-xl leading-snug font-extrabold sm:text-2xl">{jared.quotes.headline}</p>
            <p>{jared.quotes.pitch}</p>
          </blockquote>

          <footer className="mt-6 border-t border-line pt-4 text-sm text-ink-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-1.5">
                <span aria-hidden>👍❤️😮</span>
                <span className="font-semibold text-ink-2">{reactions.value}</span>
              </span>
              <span className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <MessageCircle aria-hidden className="size-4" />
                  {comments.value} comments
                </span>
                <span className="flex items-center gap-1.5">
                  <Share2 aria-hidden className="size-4" />
                  {shares.value} shares
                </span>
              </span>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}
