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
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
        {intro ? <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
