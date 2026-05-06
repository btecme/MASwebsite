import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function ContactThankYouPage() {
  return (
    <main>
      <Hero
        eyebrow="Thank you"
        title="Your message has been received"
        description="Thank you for reaching out. A member of our team will be in touch as soon as possible."
      />
      <Section title="We will be in touch soon">
        <Link href="/" className="inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white hover:bg-sky-800">
          Return home
        </Link>
      </Section>
    </main>
  );
}
