import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BolderLogo, EpicJaredMark } from "@/components/brand";
import { bolder, jared } from "@/lib/offer";

const links = [
  { href: bolder.websiteUrl, label: "Bolder Adventure Park" },
  { href: bolder.waiverUrl, label: "Sign your waiver" },
  { href: bolder.faqUrl, label: "Full FAQ" },
  { href: bolder.facebookUrl, label: "Bolder on Facebook" },
  { href: jared.websiteUrl, label: "epicjared.com" },
  { href: bolder.privacyUrl, label: "Privacy Policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-24 text-white/80 md:pb-0">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-white">
            <EpicJaredMark />
            <span aria-hidden className="text-sm font-bold text-white/50">
              ×
            </span>
            <BolderLogo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            The EPICJARED Exclusive Offer is a limited promotion from Bolder Adventure Park for Jared Guynes’ community.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Visit</h2>
          <a href={bolder.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex gap-2 text-sm hover:text-white">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
            <span>
              {bolder.address}
              <br />
              {bolder.city}
            </span>
          </a>
          <dl className="mt-4 space-y-1 text-sm">
            {bolder.hours.map((h) => (
              <div key={h.day} className="flex gap-2">
                <dt className="w-20 font-semibold text-white">{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={bolder.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone aria-hidden className="size-4" />
                {bolder.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${bolder.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail aria-hidden className="size-4" />
                {bolder.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <div className="wrap flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:justify-between">
        <p>© 2026 Bolder Adventure Park. All rights reserved.</p>
        <p>EPICJARED pricing is per person, available while daily quantities last. Waiver required for every guest.</p>
      </div>
    </footer>
  );
}
