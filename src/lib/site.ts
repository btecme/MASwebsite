export const company = {
  name: "Michigan Avenue Storage",
  phoneDisplay: "(815) 935-8383",
  phoneHref: "tel:+18159358383",
  serviceArea: "Kankakee, Bradley, Bourbonnais, and the surrounding areas",
  address: "368 South Michigan Avenue, Bradley, IL 60915",
  founded: "1996",
  paymentUrl:
    process.env.NEXT_PUBLIC_PAYMENT_URL ||
    "https://simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=5c4d1d89-3d4c-4907-b2c9-6c766846191e",
};

export type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  hero: string;
  intro: string;
  detail: string;
  bullets: string[];
  image: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "portable-storage-bradley",
    title: "Portable Storage",
    eyebrow: "Storage delivered where you need it",
    hero: "Portable storage that works on your schedule",
    intro:
      "Delivery and pickup are available for mobile storage units, giving homeowners, contractors, and businesses a cleaner way to store without rushing the job.",
    detail:
      "Use portable storage at your place or keep it at the MAS facility. It is a practical fit for moves, renovations, jobsite overflow, and seasonal storage when you need flexibility without a lot of friction.",
    bullets: [
      "Portable units ranging from 5×8 to 8×20",
      "Delivery and pickup available",
      "Useful for moving, remodeling, and commercial overflow",
    ],
    image: "/media/portable-storage.jpg",
  },
  {
    slug: "self-storage-bradley",
    title: "Self Storage",
    eyebrow: "Fast access to everyday storage",
    hero: "Affordable self storage with room to scale",
    intro:
      "Michigan Avenue Storage offers over 800 units for general self storage and mobile container storage, giving local customers plenty of options instead of a one-size-fits-all pitch.",
    detail:
      "From seasonal items to business inventory, the facility is positioned for real local demand. The live site highlights unit sizes from 8×16 to 10×30 along with secure access and low prices.",
    bullets: [
      "Over 800 storage options available",
      "Unit sizes from 8×16 to 10×30",
      "Great for decluttering, moving, and business storage",
    ],
    image: "/media/self-storage.jpg",
  },
  {
    slug: "rv-boat-vehicle-storage-bradley",
    title: "RV, Boat, & Vehicle Storage",
    eyebrow: "Protected space for bigger investments",
    hero: "Heated, secure vehicle storage for boats, autos, and RVs",
    intro:
      "The live site positions MAS as a safe place for vehicles, trailers, and recreational equipment, with heated indoor options and monitoring built into the message.",
    detail:
      "Customers can store boats, jet skis, motorcycles, commercial vehicles, autos, RVs, and campers in one location instead of juggling multiple off-season parking solutions.",
    bullets: [
      "Heated indoor storage options",
      "Fits boats, RVs, campers, trailers, and commercial vehicles",
      "24-hour monitored facility messaging on the live site",
    ],
    image: "/media/facility-row.png",
  },
  {
    slug: "refrigerated-storage-bradley",
    title: "Refrigerated Storage",
    eyebrow: "Specialty cold storage when timing matters",
    hero: "Portable cooler and freezer rentals for events and emergencies",
    intro:
      "MAS already has a more specialized offer than most local storage competitors. The refrigerated line gives the brand something distinctive and useful to lead with.",
    detail:
      "The live site calls out adjustable refrigerated and freezer temperatures, pallet-width access, and use cases ranging from catering and racing events to hospitals and emergency response needs.",
    bullets: [
      "Adjustable freezer or refrigerated temperatures",
      "Useful for events, catering, florists, hospitals, and truck stops",
      "Portable cold storage with straightforward access",
    ],
    image: "/media/home-tour.mp4",
  },
  {
    slug: "commercial-containers-bradley",
    title: "Commercial Containers",
    eyebrow: "Utility-first storage for business use",
    hero: "Commercial container solutions for jobsites and operations",
    intro:
      "This page can speak directly to contractors, property teams, and commercial customers who need dependable container access without a lot of sales fluff.",
    detail:
      "The opportunity here is simple: position MAS as a practical local partner for secure onsite storage, jobsite staging, equipment overflow, and operational flexibility.",
    bullets: [
      "Container options for commercial workflows",
      "Straightforward local scheduling and support",
      "Good fit for property teams, contractors, and facilities",
    ],
    image: "/media/portable-storage.jpg",
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

export const trustStats = [
  { value: "1996", label: "serving Bradley area customers" },
  { value: "800+", label: "storage unit options called out on the live site" },
  { value: "5×8 to 10×30", label: "portable and self-storage size range" },
  { value: "Local", label: "real phone support and on-site service" },
];

export const trustPoints = [
  {
    title: "Security that feels visible",
    description: "The current MAS messaging emphasizes security cameras, gated access, and monitored storage so the site should look trustworthy from the first screen.",
  },
  {
    title: "More than one kind of storage",
    description: "Portable, self, refrigerated, and vehicle storage give MAS a broader offer than a typical generic storage property site.",
  },
  {
    title: "Built for actual local use cases",
    description: "Moving, remodeling, jobsite overflow, event cold storage, and off-season vehicle parking are concrete reasons people call a storage company.",
  },
];

export const reviewHighlights = [
  {
    title: "Local and established",
    description: "Michigan Avenue Storage has been serving the area since 1996 and should feel grounded, not like a disposable lead-gen brand.",
  },
  {
    title: "Practical pricing message",
    description: "The live site repeatedly leads with low prices and straightforward service, which matters in a competitive storage market.",
  },
  {
    title: "Wide service mix",
    description: "Portable storage, self storage, refrigerated rentals, and RV or boat storage create stronger differentiation than a plain unit-rental pitch.",
  },
  {
    title: "Real facility positioning",
    description: "This brand works best when it feels like a real place with real equipment, not a generic marketing template with stock copy pasted over it.",
  },
];
