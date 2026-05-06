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
        description="Call, request service, or send a message. The goal here is to make contacting MAS feel direct and friction-free instead of dropping people into a generic form wall."
        primaryHref={company.phoneHref}
        primaryLabel={`Call ${company.phoneDisplay}`}
        secondaryHref="/request-form"
        secondaryLabel="Request service"
        highlights={[company.address, "Portable, self, refrigerated, and vehicle storage"]}
        mediaSrc="/media/portable-storage.jpg"
      />
      <Section title="Leave us a message" intro="This protected form flow is the next step, replacing the older WordPress form experience with something cleaner and easier to trust.">
        <ContactFormPlaceholder formName="contact" submitLabel="Send message" />
      </Section>
    </main>
  );
}
