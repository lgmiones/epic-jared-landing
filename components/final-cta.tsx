import Image from "next/image";
import { Ticket } from "lucide-react";
import { FacebookIcon } from "@/components/brand";
import { CtaLink } from "@/components/cta-link";
import { ShareButton } from "@/components/share-button";
import { jared, offer, passes, site } from "@/lib/offer";

export function FinalCta() {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(site.url)}`;

  return (
    <section aria-labelledby="final-cta" className="relative isolate overflow-hidden bg-hot text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_85%_100%,rgba(255,210,63,0.3),transparent_70%),linear-gradient(rgba(28,31,38,0.18),rgba(28,31,38,0.18))]" />
      <div className="wrap grid items-end gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="py-16 sm:py-24">
          <blockquote>
            <p
              id="final-cta"
              className="font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-6xl"
            >
              “{jared.quotes.closer}”
            </p>
            <footer className="mt-4 text-lg font-bold text-white/90">— {jared.name}</footer>
          </blockquote>

          <p className="mt-8 max-w-xl text-lg font-medium text-white/90">
            Jared did his part. Now grab your EPICJARED tickets before today’s batch is gone.{" "}
            <span className="font-bold text-white">{offer.scarcity}.</span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {passes.map((pass) => (
              <CtaLink key={pass.id} href={pass.ticketUrl} variant={pass.featured ? "dark" : "light"}>
                <Ticket aria-hidden />
                {pass.name.replace("Epic Jared – ", "")} · ${pass.price}
              </CtaLink>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/25 pt-8 sm:flex-row sm:items-center">
            <p className="font-display text-lg font-extrabold">“{jared.quotes.wordOut}”</p>
            <div className="flex flex-wrap gap-3">
              <ShareButton text="Jared Guynes says Bolder Adventure Park needs help. Here’s the EPICJARED exclusive price:" />
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-facebook transition-colors hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                <FacebookIcon className="size-5" />
                Share on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[520px] lg:block">
          <Image
            src={jared.images.portrait.src}
            alt=""
            fill
            sizes="420px"
            className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
