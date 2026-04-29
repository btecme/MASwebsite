import { ContactFormPlaceholder } from "@/components/contact-form-placeholder";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function RequestFormPage() {
  return (
    <main>
      <Hero
        eyebrow="Request Service"
        title="Tell us what kind of storage you need"
        description="This route preserves the current request form URL and will become the main lead intake flow for the rebuilt site."
      />
      <Section
        title="Request service"
        intro="The final version will send structured submissions through Resend with Turnstile protection and a proper thank-you flow."
      >
        <ContactFormPlaceholder formName="request-service" submitLabel="Request service" />
      </Section>
    </main>
  );
}
