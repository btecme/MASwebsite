import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { company } from "@/lib/site";

export default function PayOnlinePage() {
  return (
    <main>
      <Hero
        eyebrow="Payments"
        title="Online pay is temporarily unavailable"
        description="Please call 815-935-8383 and press option 1. We apologize for any inconvenience."
      />
      <Section title="Need to make a payment?">
        <a
          href={company.phoneHref}
          className="inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white hover:bg-sky-800"
        >
          Call {company.phoneDisplay}
        </a>
      </Section>
    </main>
  );
}
