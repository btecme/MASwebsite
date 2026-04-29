type ContactFormPlaceholderProps = {
  formName: string;
  submitLabel?: string;
};

export function ContactFormPlaceholder({
  formName,
  submitLabel = "Send request",
}: ContactFormPlaceholderProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Scaffold note:</strong> this placeholder form is ready to be wired to Resend + Turnstile in the next pass.
      </div>
      <form className="grid gap-4 md:grid-cols-2">
        <input type="hidden" name="formName" value={formName} />
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="phone" type="tel" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Service needed
          <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="service" />
        </label>
        <label className="md:col-span-2 grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea className="min-h-36 rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-600" name="message" />
        </label>
        <div className="md:col-span-2 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">Turnstile widget and server-side validation will be added before launch.</p>
          <button
            type="button"
            className="rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-800"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
