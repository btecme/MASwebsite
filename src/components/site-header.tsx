import Link from "next/link";
import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
            {company.name}
          </Link>
          <p className="text-sm text-slate-600">Portable and self storage solutions</p>
        </div>

        <nav className="flex flex-wrap gap-3 text-sm text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-sky-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/request-form"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-700 hover:text-sky-700"
          >
            Request Service
          </Link>
          <a
            href={company.paymentUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-800"
          >
            Make Payment
          </a>
        </div>
      </div>
    </header>
  );
}
