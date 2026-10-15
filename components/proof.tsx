import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FacebookIcon, GoogleIcon, Stars } from "@/components/brand";
import { bolder, jared, testimonials, type Testimonial } from "@/lib/offer";
import { cn } from "@/lib/utils";

const avatarTints = ["bg-pink text-white", "bg-cyan text-ink", "bg-yellow text-ink", "bg-violet text-white", "bg-orange text-ink", "bg-ink text-white"];

export function Proof() {
  const stats = [
    { value: `${bolder.google.rating}★`, label: "Google rating" },
    { value: bolder.google.reviews, label: "Google reviews" },
    { value: jared.engagement[0].value, label: "Reactions to Jared’s post" },
    { value: jared.engagement[1].value, label: "Comments & counting" },
  ];

  return (
    <section id="proof" className="scroll-mt-16 bg-white py-16 sm:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-pink-ink uppercase">Proof, proof, proof</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight text-balance sm:text-5xl">
            Thousands of DFW families <span className="text-hot">already love Bolder</span>
          </h2>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-paper p-5 text-center sm:p-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-black tracking-tight text-hot sm:text-4xl">{s.value}</dd>
              <dd className="mt-2 text-xs font-bold tracking-wider text-ink-2 uppercase sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>

        <a
          href={bolder.google.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-3xl bg-ink p-6 text-white transition-transform hover:-translate-y-0.5 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-white">
              <GoogleIcon className="size-5" />
            </span>
            <p className="font-display text-lg font-extrabold">
              {bolder.google.rating} out of 5 on Google
            </p>
            <Stars rating={Number(bolder.google.rating)} />
            <span className="text-sm text-white/70">from {bolder.google.reviews} reviews</span>
          </div>
          <p className="mt-5 text-sm font-bold tracking-wider text-yellow uppercase">What reviewers mention most</p>
          <ul className="mt-3 grid gap-3 md:grid-cols-3">
            {bolder.google.highlights.map((h) => (
              <li key={h} className="rounded-2xl bg-white/10 p-4 text-[1.05rem] leading-relaxed">
                “{h}”
              </li>
            ))}
          </ul>
        </a>

        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <TestimonialCard t={t} tint={avatarTints[i % avatarTints.length]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCard({ t, tint }: { t: Testimonial; tint: string }) {
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <Card className="h-full rounded-3xl bg-paper py-6 text-base ring-0">
      <CardContent className="flex h-full flex-col px-6">
        <div className="flex items-center justify-between">
          <Quote aria-hidden className="size-8 fill-pink/20 text-pink" />
          <SourceBadge source={t.source} />
        </div>
        <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink">“{t.quote}”</blockquote>
        <div className="mt-5 flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback className={cn("font-display text-sm font-black", tint)}>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-ink">{t.name}</p>
            {t.detail && <p className="text-sm text-ink-3">{t.detail}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SourceBadge({ source }: { source: Testimonial["source"] }) {
  const icon =
    source === "Google review" ? (
      <GoogleIcon />
    ) : source === "Comment on Jared’s post" ? (
      <FacebookIcon className="text-facebook" />
    ) : null;

  return (
    <Badge variant="outline" className="h-7 gap-1.5 border-line bg-white px-2.5 text-xs font-semibold text-ink-2">
      {icon}
      {source}
    </Badge>
  );
}
