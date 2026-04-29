import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { TestimonialGrid } from "@/components/testimonial-grid";

export default function ReviewsPage() {
  return (
    <main>
      <Hero
        eyebrow="Reviews"
        title="Customer trust belongs on a page that is easy to maintain"
        description="This route preserves the existing reviews URL and gives us a clean place to migrate structured testimonials."
      />
      <Section title="Customer reviews" intro="Placeholder testimonials are in place until the real review content is migrated.">
        <TestimonialGrid />
      </Section>
    </main>
  );
}
