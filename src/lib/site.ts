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
      "Keep a storage unit at your home, business, or jobsite and load it on your timeline. Delivery and pickup are available for portable storage throughout the Bradley area.",
    detail:
      "Portable storage is a practical option for moving, remodeling, seasonal cleanup, and commercial overflow. Keep the unit on your property or ask about storage at the MAS facility.",
    bullets: [
      "Portable units ranging from 5×8 to 8×20",
      "Delivery and pickup available",
      "Helpful for moves, remodeling, and jobsite storage",
    ],
    image: "/media/portable-storage.jpg",
  },
  {
    slug: "self-storage-bradley",
    title: "Self Storage",
    eyebrow: "Fast access to everyday storage",
    hero: "Affordable self storage with room to scale",
    intro:
      "Michigan Avenue Storage offers a wide range of unit sizes so you can rent the space you need without paying for more than you will use.",
    detail:
      "Whether you are clearing out a garage, storing for a move, or making room for business inventory, MAS offers convenient access, straightforward pricing, and unit options that fit everyday storage needs.",
    bullets: [
      "Over 800 storage options available",
      "Unit sizes from 8×16 to 10×30",
      "Good fit for household, moving, and business storage",
    ],
    image: "/media/self-storage.jpg",
  },
  {
    slug: "rv-boat-vehicle-storage-bradley",
    title: "RV, Boat, & Vehicle Storage",
    eyebrow: "Protected space for bigger investments",
    hero: "Secure vehicle storage for boats, autos, and RVs",
    intro:
      "Store your RV, boat, trailer, car, or commercial vehicle in a secure local facility with room for the equipment that does not fit at home.",
    detail:
      "We offer indoor options for select vehicle storage needs along with space for trailers, campers, motorcycles, and other seasonal equipment.",
    bullets: [
      "Indoor storage options",
      "Fits boats, RVs, campers, trailers, and commercial vehicles",
      "A secure local facility with monitored access",
    ],
    image: "/media/facility-row.png",
  },
  {
    slug: "refrigerated-storage-bradley",
    title: "Refrigerated Storage",
    eyebrow: "Specialty cold storage when timing matters",
    hero: "Portable cooler and freezer rentals for events and emergencies",
    intro:
      "When products need to stay cold, MAS offers portable refrigerated and freezer storage for events, seasonal demand, and urgent overflow situations.",
    detail:
      "These units are useful for catering, florists, medical needs, race weekends, truck traffic, and emergency response. Adjustable cold and freezer settings make the service flexible for a range of situations.",
    bullets: [
      "Adjustable freezer or refrigerated temperatures",
      "Useful for events, catering, florists, hospitals, and truck stops",
      "Portable cold storage with easy access",
    ],
    image: "/media/home-tour.mp4",
  },
  {
    slug: "commercial-containers-bradley",
    title: "Commercial Containers",
    eyebrow: "Utility-first storage for business use",
    hero: "Commercial container solutions for jobsites and operations",
    intro:
      "Businesses and contractors can use commercial containers for tools, materials, records, equipment, and overflow that needs to stay organized and close at hand.",
    detail:
      "Commercial container service is a strong fit for property teams, facilities, and construction work that needs secure onsite storage and dependable local scheduling.",
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
  { value: "800+", label: "storage options available" },
  { value: "5×8 to 10×30", label: "portable and self-storage size range" },
  { value: "Local", label: "real phone support and on-site service" },
];

export const trustPoints = [
  {
    title: "Security that feels visible",
    description: "Security cameras, gated access, and monitored storage help customers feel confident about leaving their belongings here.",
  },
  {
    title: "More than one kind of storage",
    description: "Portable, self, refrigerated, and vehicle storage give MAS more flexibility than a typical single-service storage location.",
  },
  {
    title: "Built for actual local use cases",
    description: "From moving and remodeling to event cold storage and off-season vehicle parking, the service mix matches real local needs.",
  },
];

export const reviewHighlights = [
  {
    title: "Local and established",
    description: "Michigan Avenue Storage has served the area since 1996 with a strong local presence and an easy-to-reach team.",
  },
  {
    title: "Straightforward service",
    description: "Customers want clear answers on availability, pricing, and access. Simple communication matters in a storage decision.",
  },
  {
    title: "Wide service mix",
    description: "Portable storage, self storage, refrigerated rentals, and RV or boat storage cover more needs than a basic unit-rental facility.",
  },
  {
    title: "A real local facility",
    description: "Customers should be able to see the facility, understand the services, and feel like they are dealing with a real local business.",
  },
];
