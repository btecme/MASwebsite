import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServiceGrid } from "@/components/service-grid";
import { TestimonialGrid } from "@/components/testimonial-grid";
import { company } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Michigan Avenue Storage"
        title="Portable and self storage solutions without the WordPress baggage"
        description={`Serving ${company.serviceArea} with a cleaner, faster foundation for service requests, payments, and future growth.`}
        primaryHref="/request-form"
        primaryLabel="Request Service"
        secondaryHref={company.phoneHref}
        secondaryLabel={`Call ${company.phoneDisplay}`}
      />

      <Section
        title="Safe and secure storage options at low prices"
        intro="This first scaffold preserves the live site's service structure while moving the rebuild onto a simpler, safer stack."
      >
        <ServiceGrid />
      </Section>

      <Section
        title="Built to keep what works"
        intro="The replacement architecture keeps customer-facing routes stable, pushes forms into hosted services, and leaves payment handling on a dedicated external checkout for v1."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Preserve SEO-critical public URLs",
            "Use Resend + Turnstile instead of WordPress form plugins",
            "Keep payments external instead of rebuilding billing logic",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-medium text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Reviews" intro="Customer testimonials will be migrated into structured content next.">
        <TestimonialGrid />
      </Section>
    </main>
  );
}
