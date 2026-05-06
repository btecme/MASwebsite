import { ContactFormPlaceholder } from "@/components/contact-form-placeholder";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function RequestFormPage() {
  return (
    <main>
      <Hero
        eyebrow="Request Service"
        title="Tell us what kind of storage you need"
        description="Tell us what you need and we can help you find the right storage option for your timeline, space needs, and budget."
        highlights={["Portable storage", "Self storage", "Vehicle storage", "Refrigerated rentals"]}
        mediaSrc="/media/facility-row.png"
      />
      <Section
        title="Request service"
        intro="Use this page to start the conversation about portable storage, self storage, refrigerated rentals, or vehicle storage availability."
      >
        <ContactFormPlaceholder formName="request-service" submitLabel="Request service" />
      </Section>
    </main>
  );
}
