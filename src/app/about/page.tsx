import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { company, trustStats } from "@/lib/site";

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="About Michigan Avenue Storage"
        title="A local storage company with real depth behind the name"
        description="Michigan Avenue Storage has been serving the Bradley area since 1996 with a broader service mix than most local competitors, from self-storage to refrigerated rentals and heated vehicle storage."
        stats={trustStats}
        mediaSrc="/media/facility-row.png"
      />
      <Section
        title="What the brand should communicate"
        intro="The strongest version of MAS feels established, practical, and easy to work with. Not flashy for the sake of it, just credible and clearly capable."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Established roots",
              copy: `The live site references ${company.founded} as the start of the business. That history should work harder across the rebuild.`
            },
            {
              title: "Broader services",
              copy: "Portable storage, self storage, refrigerated rentals, and vehicle storage give MAS more range than a basic self-storage location."
            },
            {
              title: "Local clarity",
              copy: `The address, phone number, and service area should stay visible so the site feels anchored to ${company.address}.`
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
