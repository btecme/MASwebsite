import { testimonials } from "@/lib/site";

export function TestimonialGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
          <footer className="mt-4 text-sm font-medium text-slate-500">{testimonial.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}
