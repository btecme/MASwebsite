type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {primaryHref && primaryLabel ? (
            <a href={primaryHref} className="rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100">
              {primaryLabel}
            </a>
          ) : null}
          {secondaryHref && secondaryLabel ? (
            <a
              href={secondaryHref}
              className="rounded-full border border-white/30 px-5 py-3 font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
