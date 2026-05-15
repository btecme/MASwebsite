import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { company, trustStats } from "@/lib/site";

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="About Michigan Avenue Storage"
        title="A local storage company with real depth behind the name"
        description="Michigan Avenue Storage has been serving the Bradley area since 1996 with a broader service mix than most local competitors, from self storage to refrigerated rentals and heated vehicle storage."
        stats={trustStats}
        mediaSrc="/media/facility-row.png"
      />
      <Section
        title="Storage service with local roots"
        intro="Michigan Avenue Storage has served the Bradley area for decades with practical options, straightforward help, and a wide mix of storage services."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Established roots",
              copy: `Michigan Avenue Storage has been serving local customers since ${company.founded}, giving the business a long-standing presence in the community.`,
            },
            {
              title: "Broader services",
              copy: "Portable storage, self storage, refrigerated rentals, and vehicle storage make MAS a strong fit for both everyday and specialty storage needs.",
            },
            {
              title: "Local clarity",
              copy: `Customers can find MAS at ${company.address}, with service for Bradley, Bourbonnais, Kankakee, and the surrounding area.`,
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
