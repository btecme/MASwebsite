import { reviewHighlights } from "@/lib/site";

export function TestimonialGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {reviewHighlights.map((item) => (
        <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Customer priority</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
