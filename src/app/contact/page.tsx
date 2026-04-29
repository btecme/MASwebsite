import { ContactFormPlaceholder } from "@/components/contact-form-placeholder";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { company } from "@/lib/site";

export default function ContactPage() {
  return (
    <main>
      <Hero
        eyebrow="Contact"
        title="Talk to a real local team"
        description="Keep contact simple: call, request service, or send a message through a protected hosted form flow."
        primaryHref={company.phoneHref}
        primaryLabel={`Call ${company.phoneDisplay}`}
        secondaryHref="/request-form"
        secondaryLabel="Request service"
      />
      <Section title="Leave us a message" intro="This route will replace the WordPress contact form with Resend + Turnstile.">
        <ContactFormPlaceholder formName="contact" submitLabel="Send message" />
      </Section>
    </main>
  );
}
