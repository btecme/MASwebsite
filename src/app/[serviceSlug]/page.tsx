import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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

  const mediaType = service.image.endsWith(".mp4") ? "video" : "image";

  return (
    <main>
      <Hero
        eyebrow={service.eyebrow}
        title={service.hero}
        description={service.intro}
        primaryHref="/request-form"
        primaryLabel="Request Service"
        secondaryHref={company.phoneHref}
        secondaryLabel={`Call ${company.phoneDisplay}`}
        highlights={["Local service", "Straightforward pricing conversation", "Fast path to availability"]}
        mediaSrc={service.image}
        mediaType={mediaType}
      />
      <Section title={service.title} intro={service.detail}>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            {mediaType === "video" ? (
              <video className="h-full min-h-80 w-full object-cover" autoPlay muted loop playsInline>
                <source src={service.image} type="video/mp4" />
              </video>
            ) : (
              <Image src={service.image} alt={service.title} width={1400} height={900} className="h-full min-h-80 w-full object-cover" />
            )}
          </div>

          <div className="grid gap-4">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Service highlight</p>
                <p className="mt-3 text-lg leading-7 text-slate-700">{bullet}</p>
              </div>
            ))}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">Need availability?</p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Call the office or use the request form to check availability, pricing, and the best fit for your storage needs.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={company.phoneHref} className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950">
                  {company.phoneDisplay}
                </a>
                <Link href="/request-form" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
