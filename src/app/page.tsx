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
        title="Local storage solutions for homes, businesses, vehicles, and cold storage needs"
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
        title="Storage options built around real local needs"
        intro="Michigan Avenue Storage serves homeowners, renters, contractors, businesses, and seasonal vehicle owners with practical storage options and local support."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Why customers call MAS</p>
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
                <h3 className="mt-3 text-3xl font-semibold">One local company, multiple storage solutions</h3>
              </div>
              <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Self storage</p>
                  <p className="mt-2 leading-6">Choose from a wide range of unit sizes for household items, moves, and business storage.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Portable units</p>
                  <p className="mt-2 leading-6">Have a unit delivered to your property and load it on your own schedule.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Vehicle protection</p>
                  <p className="mt-2 leading-6">Store RVs, boats, trailers, and vehicles in a secure local facility.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Specialty cold storage</p>
                  <p className="mt-2 leading-6">Portable cooler and freezer rentals help with events, overflow, and time-sensitive storage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Find the storage service that fits your situation"
        intro="Whether you need everyday storage, a portable unit, vehicle space, or refrigerated capacity, MAS offers options that are easy to understand and easy to access."
      >
        <ServiceGrid />
      </Section>

      <Section
        title="A real local facility you can actually see"
        intro="Michigan Avenue Storage is not a call center or a generic listing. It is a local facility with real units, real equipment, and a real team behind it."
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
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Storage that feels established</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Customers should be able to quickly see the scale of the property, the condition of the units, and the kind of place they are trusting with their belongings.
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
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Portable storage made simple</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Delivery and pickup make portable storage a practical choice for moves, remodels, and projects that need extra space without extra hassle.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Refrigerated storage when timing matters"
        intro="Portable cooler and freezer rentals give MAS a specialty service that helps customers with events, business demand, and emergency situations."
      >
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)]">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Cold storage advantage</p>
              <h3 className="mt-3 text-3xl font-semibold">Useful for events, catering, florists, hospitals, racing weekends, and emergency overflow</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                When you need cold storage quickly, it helps to work with a local company that already has the equipment and can talk through what fits your situation.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100">Common uses</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                <li>Catering and event support</li>
                <li>Floral and food overflow</li>
                <li>Hospital and commercial backup needs</li>
                <li>Emergency response and temporary cold storage</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
