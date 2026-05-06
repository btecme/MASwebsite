type ContactFormPlaceholderProps = {
  formName: string;
  submitLabel?: string;
};

export function ContactFormPlaceholder({
  formName,
  submitLabel = "Send request",
}: ContactFormPlaceholderProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="mb-8 rounded-[1.5rem] border border-sky-100 bg-sky-50 px-5 py-4 text-sm text-sky-950">
        <strong>Next step:</strong> this form is ready to be wired to Resend + Turnstile so inquiries feel more trustworthy and more reliable than the old WordPress plugin flow.
      </div>
      <form className="grid gap-5 md:grid-cols-2">
        <input type="hidden" name="formName" value={formName} />
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Phone
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="phone" type="tel" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Service needed
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="service" />
        </label>
        <label className="md:col-span-2 grid gap-2 text-sm font-semibold text-slate-700">
          Message
          <textarea className="min-h-36 rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="message" />
        </label>
        <div className="md:col-span-2 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Turnstile protection, server-side validation, and delivery routing will be added before launch.
          </p>
          <button
            type="button"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
