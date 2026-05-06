import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { TestimonialGrid } from "@/components/testimonial-grid";

export default function ReviewsPage() {
  return (
    <main>
      <Hero
        eyebrow="Reviews & Trust"
        title="Trust signals should feel earned, not pasted in"
        description="See the qualities that matter most when choosing a storage company: local service, secure options, fair pricing, and clear communication."
        mediaSrc="/media/self-storage.jpg"
      />
      <Section
        title="What the site should already be communicating"
        intro="Trust starts with a company looking established, local, and specific about what it offers. These are the signals MAS should keep leading with."
      >
        <TestimonialGrid />
      </Section>
    </main>
  );
}
