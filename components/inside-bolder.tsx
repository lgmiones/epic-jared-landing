import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { CircleParking, Gamepad2, Mountain, Thermometer, TreePine, Umbrella } from "lucide-react";
import { gallery, jared } from "@/lib/offer";

const q = jared.quotes;

// Titles are Bolder's voice; the quoted line under each is Jared's exact wording.
const features: { icon: LucideIcon; title: string; quote: string; tint: string }[] = [
  { icon: Thermometer, title: "Indoors & climate-controlled", quote: q.climate, tint: "bg-cyan/15 text-[#0a7ea3]" },
  { icon: Mountain, title: "Climb, zip, slide & bump", quote: q.rides, tint: "bg-pink/15 text-pink-ink" },
  { icon: TreePine, title: "A treehouse village", quote: q.treehouses, tint: "bg-[#2fb36d]/15 text-[#16794a]" },
  { icon: Gamepad2, title: "Arcade & blaster arena", quote: q.arcade, tint: "bg-violet/15 text-violet" },
  { icon: CircleParking, title: "Free parking", quote: q.parking, tint: "bg-yellow/30 text-[#8a6500]" },
  { icon: Umbrella, title: "Rain or shine", quote: q.weather, tint: "bg-orange/15 text-orange-ink" },
];

export function InsideBolder() {
  return (
    <section id="inside" className="scroll-mt-16 py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-pink-ink uppercase">What’s inside</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight text-balance sm:text-5xl">
            66,000 sq ft of indoor adventure in Grand Prairie
          </h2>
          <p className="mt-4 text-lg text-ink-2">
            Don’t take our word for it. Here’s how Jared describes the place.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, quote, tint }) => (
            <li key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line">
              <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${tint}`}>
                <Icon aria-hidden className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight">{title}</h3>
              <blockquote className="mt-2 text-ink-2">
                <p className="text-[1.05rem] leading-relaxed">“{quote}”</p>
                <footer className="mt-2 text-sm font-semibold text-pink-ink">— Jared</footer>
              </blockquote>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3" aria-label="Photos from Bolder Adventure Park">
          {gallery.map((photo, i) => (
            <li
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl bg-ink ${i === 0 ? "col-span-2 row-span-2 aspect-square lg:col-span-1 lg:row-span-2 lg:aspect-auto" : "aspect-[4/3]"}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 380px, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur">
                {photo.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
