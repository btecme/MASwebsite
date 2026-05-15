import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { TestimonialGrid } from "@/components/testimonial-grid";

export default function ReviewsPage() {
  return (
    <main>
      <Hero
        eyebrow="Reviews & Trust"
        title="Why customers choose Michigan Avenue Storage"
        description="Local service, secure storage, fair pricing, and clear communication all matter when you are choosing where to store your belongings."
        mediaSrc="/media/self-storage.jpg"
      />
      <Section
        title="What matters most in a storage company"
        intro="Customers want a facility that feels secure, easy to work with, and local enough to trust. These are the qualities MAS brings forward."
      >
        <TestimonialGrid />
      </Section>
    </main>
  );
}
