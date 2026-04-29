import Link from "next/link";
import { servicePages } from "@/lib/site";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {servicePages.map((service) => (
        <article key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Service</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-slate-600">{service.intro}</p>
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            {service.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
          <Link href={`/${service.slug}`} className="mt-6 inline-flex text-sm font-medium text-sky-700 hover:text-sky-800">
            Explore this service →
          </Link>
        </article>
      ))}
    </div>
  );
}
