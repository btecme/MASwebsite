import Link from "next/link";
import { company, navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 bg-white p-2 rounded-xl">
              <img 
                src="/media/MAS-LogoLarge.png" 
                alt="Michigan Avenue Storage" 
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{company.name}</h2>
              <p className="text-sm text-slate-400">Storage that feels local, secure, and easy to reach.</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Portable storage, self storage, refrigerated rentals, and vehicle storage for {company.serviceArea}.
          </p>
          <p className="mt-4 text-sm text-slate-300">{company.address}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Contact & Payments</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href={company.phoneHref} className="transition hover:text-white">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact page
              </Link>
            </li>
            <li>
              <Link href="/request-form" className="transition hover:text-white">
                Request service
              </Link>
            </li>
          </ul>
          <a
            href={company.paymentUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Pay Online
          </a>
        </div>
      </div>
    </footer>
  );
}
