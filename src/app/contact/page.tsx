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
        description="Call, request service, or send a message. We keep it simple so you can get answers quickly from a real local team."
        primaryHref={company.phoneHref}
        primaryLabel={`Call ${company.phoneDisplay}`}
        secondaryHref="/request-form"
        secondaryLabel="Request service"
        highlights={[company.address, "Portable, self, refrigerated, and vehicle storage"]}
        mediaSrc="/media/portable-storage.jpg"
      />
      <Section title="Leave us a message" intro="If you have questions about availability, pricing, or service options, reach out and we will point you in the right direction.">
        <ContactFormPlaceholder formName="contact" submitLabel="Send message" />
      </Section>
    </main>
  );
}
