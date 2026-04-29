import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="About"
        title="A local storage company with a cleaner web foundation"
        description="This page preserves the existing About route while giving the rebuild room for stronger company history, trust signals, and service positioning."
      />
      <Section
        title="Michigan Avenue Storage"
        intro="The live site references roots going back to 1996. This scaffold keeps that history in place and sets up a better structure for final copy migration."
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
          <p>
            Final About content, facility details, photos, and differentiators can drop in here without changing the public URL.
          </p>
        </div>
      </Section>
    </main>
  );
}
