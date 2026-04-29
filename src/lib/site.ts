export const company = {
  name: "Michigan Avenue Storage",
  phoneDisplay: "(815) 935-8383",
  phoneHref: "tel:+18159358383",
  serviceArea: "Kankakee, Bradley, Bourbonnais, and the surrounding areas",
  paymentUrl:
    process.env.NEXT_PUBLIC_PAYMENT_URL ||
    "https://simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=5c4d1d89-3d4c-4907-b2c9-6c766846191e",
};

export type ServicePage = {
  slug: string;
  title: string;
  hero: string;
  intro: string;
  bullets: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "portable-storage-bradley",
    title: "Portable Storage",
    hero: "Your Premier Portable Storage Solution in Bradley, IL",
    intro:
      "Portable storage delivered with straightforward scheduling, secure containers, and local service that stays easy to reach.",
    bullets: [
      "Portable container delivery and pickup",
      "Residential and commercial use cases",
      "Flexible scheduling and responsive local support",
    ],
  },
  {
    slug: "self-storage-bradley",
    title: "Self Storage",
    hero: "Your Trusted Self-Storage Solution in Bradley, IL",
    intro:
      "Traditional self-storage with clean presentation, strong calls to action, and a direct path to request availability.",
    bullets: [
      "Local self-storage options",
      "Simple inquiry and request flow",
      "SEO-preserved service landing page",
    ],
  },
  {
    slug: "rv-boat-vehicle-storage-bradley",
    title: "RV, Boat, & Vehicle Storage",
    hero: "Store Your Boats, Autos, or RVs Safely and Securely in Heated Storage",
    intro:
      "Vehicle storage needs clear trust signals, straightforward contact, and obvious payment access for current customers.",
    bullets: [
      "Boat, RV, and vehicle storage messaging",
      "Security-focused positioning",
      "Strong CTA to request service or call now",
    ],
  },
  {
    slug: "refrigerated-storage-bradley",
    title: "Refrigerated Storage",
    hero: "Portable Cooler and Freezer Rentals",
    intro:
      "A dedicated refrigerated-storage landing page gives MAS room to speak clearly to specialty storage customers.",
    bullets: [
      "Refrigerated and climate-controlled messaging",
      "Lead generation for rental inquiries",
      "Preserved dedicated search landing page",
    ],
  },
  {
    slug: "commercial-containers-bradley",
    title: "Commercial Containers",
    hero: "Commercial Container Solutions",
    intro:
      "This page can mature from placeholder content into a proper commercial-services page without changing the URL later.",
    bullets: [
      "Commercial container positioning",
      "Future-ready structure for expanded copy",
      "Easy inquiry path for business customers",
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portable-storage-bradley", label: "Portable Storage" },
  { href: "/self-storage-bradley", label: "Self Storage" },
  { href: "/rv-boat-vehicle-storage-bradley", label: "RV / Boat / Vehicle" },
  { href: "/refrigerated-storage-bradley", label: "Refrigerated Storage" },
  { href: "/commercial-containers-bradley", label: "Commercial Containers" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const testimonials = [
  {
    quote:
      "Friendly local service, fair pricing, and a much easier way to get the information customers actually need.",
    name: "Customer feedback migration placeholder",
  },
  {
    quote:
      "The new build is being structured to keep what works while removing the WordPress baggage that caused trouble.",
    name: "Project note",
  },
];
