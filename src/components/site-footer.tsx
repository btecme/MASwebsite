import Link from "next/link";
import { company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{company.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Portable storage, self storage, refrigerated options, and vehicle storage for {company.serviceArea}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <a href={company.phoneHref} className="hover:text-sky-700">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-700">
                Contact page
              </Link>
            </li>
            <li>
              <Link href="/request-form" className="hover:text-sky-700">
                Request service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Payments</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Online payments are currently routed to a hosted external checkout for a simpler and safer v1 launch.
          </p>
          <a
            href={company.paymentUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Pay Online
          </a>
        </div>
      </div>
    </footer>
  );
}
