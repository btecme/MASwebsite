import Link from "next/link";
import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white">MAS</div>
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
              {company.name}
            </Link>
            <p className="text-sm text-slate-500">Portable, self, refrigerated, and vehicle storage</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-sky-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap gap-3">
          <a
            href={company.phoneHref}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-sky-600 hover:text-sky-700"
          >
            {company.phoneDisplay}
          </a>
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
    </header>
  );
}
