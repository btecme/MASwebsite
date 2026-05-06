import Image from "next/image";

export type HeroStat = {
  value: string;
  label: string;
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  stats?: HeroStat[];
  highlights?: string[];
  mediaSrc?: string;
  mediaAlt?: string;
  mediaType?: "image" | "video";
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  stats,
  highlights,
  mediaSrc,
  mediaAlt = "Michigan Avenue Storage",
  mediaType = "image",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          {eyebrow ? (
            <p className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{description}</p>

          {highlights?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-4">
            {primaryHref && primaryLabel ? (
              <a
                href={primaryHref}
                className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                {primaryLabel}
              </a>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <a
                href={secondaryHref}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>

          {stats?.length ? (
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-6 hidden h-24 w-24 rounded-full bg-sky-400/20 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_100px_rgba(15,23,42,0.55)]">
            <div className="aspect-[4/3] overflow-hidden">
              {mediaSrc ? (
                mediaType === "video" ? (
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  >
                    <source src={mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={mediaSrc} alt={mediaAlt} width={1200} height={900} className="h-full w-full object-cover" priority />
                )
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-10 text-center text-slate-300">
                  <p className="max-w-sm text-lg leading-8">Secure, local storage solutions for Bradley and the surrounding area.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
