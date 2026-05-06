import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function RequestFormThankYouPage() {
  return (
    <main>
      <Hero
        eyebrow="Thank you"
        title="Your service request has been received"
        description="Thank you for your request. We will contact you shortly to discuss availability and next steps."
      />
      <Section title="We will contact you shortly">
        <Link href="/request-form" className="inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white hover:bg-sky-800">
          Back to request form
        </Link>
      </Section>
    </main>
  );
}
