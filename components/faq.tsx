import { Clock, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bolder, faqs } from "@/lib/offer";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-pink-ink uppercase">Before you go</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight sm:text-4xl">Questions? Answered.</h2>

          <div className="mt-8 space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line">
            <div className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-pink-ink" />
              <div>
                <p className="font-bold">{bolder.name}</p>
                <a href={bolder.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-ink-2 underline-offset-4 hover:underline">
                  {bolder.address}, {bolder.city}
                </a>
                <p className="text-sm font-semibold text-[#16794a]">Free parking</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-pink-ink" />
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                {bolder.hours.map((h) => (
                  <div key={h.day} className="contents">
                    <dt className="font-bold">{h.day}</dt>
                    <dd className="text-ink-2">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <Accordion className="rounded-3xl bg-white px-5 shadow-sm ring-1 ring-line sm:px-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-line">
              <AccordionTrigger className="py-5 text-base font-bold text-ink hover:no-underline sm:text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-ink-2">
                <p>{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
