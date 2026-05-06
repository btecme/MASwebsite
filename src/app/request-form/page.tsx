import { ContactFormPlaceholder } from "@/components/contact-form-placeholder";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function RequestFormPage() {
  return (
    <main>
      <Hero
        eyebrow="Request Service"
        title="Tell us what kind of storage you need"
        description="This form is becoming the main intake path for new storage requests, so it should feel clear, fast, and reassuring from the first click."
        highlights={["Portable storage", "Self storage", "Vehicle storage", "Refrigerated rentals"]}
        mediaSrc="/media/facility-row.png"
      />
      <Section
        title="Request service"
        intro="The final version will send structured submissions through Resend with Turnstile protection and a proper thank-you flow, but the layout and tone can already feel more customer-ready now."
      >
        <ContactFormPlaceholder formName="request-service" submitLabel="Request service" />
      </Section>
    </main>
  );
}
