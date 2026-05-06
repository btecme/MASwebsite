import Image from "next/image";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServiceGrid } from "@/components/service-grid";
import { company, trustPoints, trustStats } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Michigan Avenue Storage"
        title="Storage that feels secure, local, and ready when customers need it"
        description={`Serving ${company.serviceArea} with portable storage, self storage, refrigerated rentals, and heated vehicle storage from one established Bradley location.`}
        primaryHref="/request-form"
        primaryLabel="Request Service"
        secondaryHref={company.phoneHref}
        secondaryLabel={`Call ${company.phoneDisplay}`}
        highlights={[
          "Established 1996",
          "Over 800 storage options",
          "Portable and refrigerated solutions",
        ]}
        stats={trustStats}
        mediaSrc="/media/home-tour.mp4"
        mediaType="video"
      />

      <Section
        title="A stronger first impression for a real storage business"
        intro="The old site had the raw ingredients. This rebuild starts turning them into something that feels more trustworthy, more current, and more competitive the second it loads."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">What stands out now</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="text-xl font-semibold text-slate-950">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
            <div className="grid gap-6 p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Facility snapshot</p>
                <h3 className="mt-3 text-3xl font-semibold">One local brand, multiple storage use cases</h3>
              </div>
              <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Self storage</p>
                  <p className="mt-2 leading-6">Unit sizes highlighted on the live site run from 8×16 to 10×30.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Portable units</p>
                  <p className="mt-2 leading-6">Delivery and pickup available for portable units from 5×8 to 8×20.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Vehicle protection</p>
                  <p className="mt-2 leading-6">Heated storage options help MAS compete for RV, boat, and seasonal vehicle demand.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Specialty cold storage</p>
                  <p className="mt-2 leading-6">Portable cooler and freezer rentals create a differentiator most storage sites do not have.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Storage services people can actually recognize at a glance"
        intro="Instead of generic template cards, each service now gets a visual presence and clearer positioning so customers can find the right fit fast."
      >
        <ServiceGrid />
      </Section>

      <Section
        title="Real visuals from the current business, not random stock filler"
        intro="I pulled in existing site media so the redesign starts from the actual facility and service mix instead of pretending MAS is a venture-backed app with some lockers."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <Image
              src="/media/self-storage.jpg"
              alt="Self storage units at Michigan Avenue Storage"
              width={1400}
              height={900}
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Self storage presence</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">The facility should feel tangible</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Competitive storage sites usually win trust by looking like a real place with real scale. MAS already has that, it just needed better framing.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <Image
              src="/media/portable-storage.jpg"
              alt="Portable storage unit"
              width={1400}
              height={900}
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Portable storage presence</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Show the service, not just the slogan</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Portable storage is one of MAS’s most inviting offers. Giving it stronger imagery and cleaner language helps the site feel more practical and more premium at the same time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="The refrigerated offering deserves to be a headline differentiator"
        intro="Most local storage companies are fighting over the same self-storage keywords. MAS also has portable freezer and cooler rentals, which gives the brand a very different lane to own."
      >
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)]">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Cold storage advantage</p>
              <h3 className="mt-3 text-3xl font-semibold">Useful for events, catering, florists, hospitals, racing weekends, and emergency overflow</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                That is exactly the kind of niche capability that makes a storage company feel more established and more capable than the average competitor.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100">Next smart moves</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                <li>Lead with stronger service photography across key pages</li>
                <li>Finish wiring the contact and request flows</li>
                <li>Bring over real review content once it is extracted cleanly</li>
                <li>Keep the payment route simple while making the sales path feel higher trust</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
