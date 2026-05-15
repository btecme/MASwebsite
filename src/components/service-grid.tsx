import Image from "next/image";
import Link from "next/link";
import { servicePages } from "@/lib/site";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {servicePages.map((service) => (
        <article
          key={service.slug}
          className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
        >
          <div className="relative h-60 overflow-hidden">
            {service.image.endsWith(".mp4") ? (
              <video className="h-full w-full object-cover transition duration-500 group-hover:scale-105" autoPlay muted loop playsInline>
                <source src={service.image} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">{service.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{service.title}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Service overview</p>
            <p className="mt-3 text-base leading-7 text-slate-600">{service.intro}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/${service.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-sky-700"
            >
              Explore this service
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
