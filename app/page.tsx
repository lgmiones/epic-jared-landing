import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { InsideBolder } from "@/components/inside-bolder";
import { JaredPost } from "@/components/jared-post";
import { JaredTicker } from "@/components/jared-ticker";
import { MeetJared } from "@/components/meet-jared";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { Offers } from "@/components/offers";
import { Proof } from "@/components/proof";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bolder, passes, site } from "@/lib/offer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AmusementPark",
  name: bolder.name,
  url: bolder.websiteUrl,
  telephone: bolder.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: bolder.address,
    addressLocality: "Grand Prairie",
    addressRegion: "TX",
    postalCode: "75052",
    addressCountry: "US",
  },
  makesOffer: passes.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price,
    priceCurrency: "USD",
    url: `${site.url}/#tickets`,
    availability: "https://schema.org/LimitedAvailability",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <JaredTicker />
        <JaredPost />
        <Offers />
        <InsideBolder />
        <Proof />
        <MeetJared />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
