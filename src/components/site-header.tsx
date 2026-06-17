import Link from "next/link";
import { company, navLinks } from "@/lib/site";

const primaryLinks = navLinks.filter((link) => ["Home", "About", "Reviews", "Contact"].includes(link.label));
const serviceLinks = navLinks.filter((link) => !["Home", "About", "Reviews", "Contact"].includes(link.label));

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/96 shadow-sm backdrop-blur-xl">
      <div className="bg-slate-950 text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Serving Bradley, Bourbonnais, Kankakee, and nearby communities</span>
            <span className="hidden h-1 w-1 rounded-full bg-sky-300 sm:block" />
            <span>Established 1996</span>
          </div>
          <a href={company.phoneHref} className="font-semibold text-white transition hover:text-sky-300">
            Call {company.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center">
          <Link href="/">
            <img 
              src="/media/Michigan_Avenue_Storage_Final_logo_2.jpg" 
              alt="Michigan Avenue Storage" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/request-form"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Request Service
          </Link>
          <a
            href={company.paymentUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Make Payment
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-white/92">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2 rounded-[1.5rem] border border-slate-200 bg-slate-100/90 p-2">
            <span className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Services</span>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
