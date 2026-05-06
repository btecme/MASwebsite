import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { TestimonialGrid } from "@/components/testimonial-grid";

export default function ReviewsPage() {
  return (
    <main>
      <Hero
        eyebrow="Reviews & Trust"
        title="Trust signals should feel earned, not pasted in"
        description="This page is being reshaped to support cleaner, more persuasive review presentation once the current testimonial content is migrated over in a structured way."
        mediaSrc="/media/self-storage.jpg"
      />
      <Section
        title="What the site should already be communicating"
        intro="Even before formal review migration, the brand can feel more trustworthy by looking established, local, and specific about what it does well."
      >
        <TestimonialGrid />
      </Section>
    </main>
  );
}
