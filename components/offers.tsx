import Image from "next/image";
import { Check, Flame, Plus, ShieldCheck, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Countdown } from "@/components/countdown";
import { CtaLink } from "@/components/cta-link";
import { PromoCode } from "@/components/promo-code";
import { bolder, offer, passes, type Pass } from "@/lib/offer";
import { cn } from "@/lib/utils";

export function Offers() {
  return (
    <section id="tickets" className="scroll-mt-16 bg-white py-16 sm:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-pink-ink uppercase">EPICJARED Exclusive Offer</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight text-balance sm:text-5xl">
            Pick your pass. <span className="text-hot">Lock in Jared’s price.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-2">
            These prices exist because of Jared. Once today’s tickets are gone, they’re gone.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl bg-yellow px-5 py-4 text-ink sm:flex-row sm:justify-between">
          <p className="flex items-center gap-2 font-display text-sm font-extrabold tracking-wide uppercase sm:text-base">
            <Flame aria-hidden className="size-5 text-pink-ink" />
            {offer.scarcity}
          </p>
          {offer.endsAt && <Countdown endsAt={offer.endsAt} label={offer.endsLabel} />}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          {passes.map((pass) => (
            <PassCard key={pass.id} pass={pass} />
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
          {offer.code && (
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <span className="text-sm font-semibold text-ink-2">Your Jared code:</span>
              <PromoCode code={offer.code} />
            </div>
          )}
          <a
            href={bolder.waiverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 underline-offset-4 hover:text-ink hover:underline"
          >
            <ShieldCheck aria-hidden className="size-4" />
            Sign your waiver online to skip the line
          </a>
        </div>
      </div>
    </section>
  );
}

function PassCard({ pass }: { pass: Pass }) {
  const short = pass.name.replace("Epic Jared – ", "");

  return (
    <Card
      className={cn(
        "gap-0 rounded-3xl pt-0 pb-0 text-base shadow-[0_30px_60px_-34px_rgba(28,31,38,0.4)]",
        pass.featured ? "bg-ink text-white ring-4 ring-pink" : "ring-line",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={pass.image.src}
          alt={pass.image.alt}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {pass.featured && (
            <Badge className="h-7 bg-hot px-3 font-display text-xs font-black tracking-wider text-white uppercase">
              Most Epic
            </Badge>
          )}
          <Badge className="h-7 bg-white/95 px-3 text-xs font-bold text-ink">
            <span aria-hidden className="size-2 animate-pulse-dot rounded-full bg-pink" />
            Limited daily quantity
          </Badge>
        </div>
      </div>

      <CardHeader className="gap-1 px-6 pt-6">
        <CardTitle className="font-display text-xl font-black tracking-tight sm:text-2xl">{pass.name}</CardTitle>
        <p className={cn("text-base", pass.featured ? "text-white/70" : "text-ink-2")}>{pass.tagline}</p>
      </CardHeader>

      <CardContent className="px-6 pt-5">
        <p className={cn("text-xs font-bold tracking-[0.2em] uppercase", pass.featured ? "text-yellow" : "text-pink-ink")}>
          Exclusive price
        </p>
        <p className="mt-1 flex items-end gap-2">
          <span className="font-display text-5xl leading-none font-black tracking-tight sm:text-6xl">${pass.price}</span>
          <span className={cn("pb-1 text-sm font-semibold", pass.featured ? "text-white/70" : "text-ink-3")}>per person</span>
          {pass.regularPrice && (
            <s className={cn("pb-1 text-lg font-semibold", pass.featured ? "text-white/50" : "text-ink-3")}>
              ${pass.regularPrice}
            </s>
          )}
        </p>

        <CtaLink href={pass.ticketUrl} className="mt-6 w-full" variant={pass.featured ? "hot" : "dark"}>
          <Ticket aria-hidden />
          Buy {short} Tickets
        </CtaLink>

        <div className="mt-7">
          <p className={cn("text-sm font-bold tracking-wider uppercase", pass.featured ? "text-white/80" : "text-ink-2")}>
            {pass.extras.length ? "Everything in Base Camp" : "Includes"}
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {pass.attractions.map((a) => (
              <li key={a} className="flex items-start gap-2 text-[0.95rem] leading-snug">
                <Check aria-hidden className={cn("mt-0.5 size-4 shrink-0", pass.featured ? "text-cyan" : "text-pink-ink")} />
                {a}
              </li>
            ))}
          </ul>
          {pass.extras.length > 0 && (
            <>
              <p className="mt-6 text-sm font-bold tracking-wider text-yellow uppercase">Plus the big stuff</p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {pass.extras.map((a) => (
                  <li key={a} className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 text-[0.95rem] leading-snug font-semibold">
                    <Plus aria-hidden className="mt-0.5 size-4 shrink-0 text-yellow" />
                    {a}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter
        className={cn(
          "mt-7 justify-center border-t px-6 py-4 text-center text-sm font-semibold",
          pass.featured ? "border-white/10 bg-white/5 text-white/70" : "border-line bg-paper text-ink-2",
        )}
      >
        Only available through Jared · {offer.scarcity.toLowerCase()}
      </CardFooter>
    </Card>
  );
}
