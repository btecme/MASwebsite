import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { company, servicePages } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map((service) => ({ serviceSlug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = servicePages.find((item) => item.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Hero
        eyebrow={service.title}
        title={service.hero}
        description={service.intro}
        primaryHref="/request-form"
        primaryLabel="Request Service"
        secondaryHref={company.phoneHref}
        secondaryLabel={`Call ${company.phoneDisplay}`}
      />
      <Section title={service.title} intro="This URL is preserved from the live site and now has a cleaner structure for final content migration.">
        <div className="grid gap-6 md:grid-cols-3">
          {service.bullets.map((bullet) => (
            <div key={bullet} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">{bullet}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
