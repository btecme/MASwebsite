import { ReactNode } from "react";

export function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
        {intro ? <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
