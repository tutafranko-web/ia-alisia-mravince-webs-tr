export const VILLA = {
  name: "Villa Alissa",
  subtitle: "Split-Mravince",
  tagline: "Stunning Sea View",
  description:
    "We are in Mravince, a small and quiet village on the hill, only 6 km from Split. Breathtaking views, natural materials, dominated by stone — windows, doors, furniture are all handmade in pure wood.",
  longDescription:
    "Nestled atop the ancient village of Mravince, Villa Alissa is a sanctuary where centuries-old Dalmatian stone architecture meets the warmth of handcrafted wooden interiors. Every detail — from the windows to the doors to the furniture — has been lovingly made by local artisans in pure wood. The 400 m² plot is embraced by ancient stone walls, sheltering an organic vegetable garden and expansive terraces that command sweeping views of the Adriatic Sea and the islands beyond.",
  airbnbUrl: "https://www.airbnb.com/rooms/26220523",
  rating: 4.88,
  reviewCount: 43,
  capacity: 4,
  bedrooms: 4,
  bathrooms: 2,
  plotSize: "400 m²",
  distanceSplit: "6 km",
  distanceAirport: "20 km",
  distanceDiocletian: "10 km",
  coordinates: { lat: 43.53115, lng: 16.51953 },
} as const;

export const PHOTOS: { src: string; alt: string }[] = [
  {
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjYyMjA1MjM%3D/original/1c460314-c05b-4125-a764-8482ffac104a.jpeg",
    alt: "Villa Alissa exterior with stone walls and sea view",
  },
  {
    src: "https://a0.muscache.com/im/pictures/5d9a541a-ca1f-43fa-bc4c-156c2b18de02.jpg",
    alt: "Spacious terrace overlooking the Adriatic",
  },
  {
    src: "https://a0.muscache.com/im/pictures/048a6df9-8158-4197-af78-fe0f04eb7884.jpg",
    alt: "Hand-crafted wooden interior",
  },
  {
    src: "https://a0.muscache.com/im/pictures/9f1e9ccd-110c-4d3f-8b48-12726c88a122.jpg",
    alt: "Living room with traditional stone details",
  },
  {
    src: "https://a0.muscache.com/im/pictures/628ccb0f-e51e-46bf-ac33-449809587299.jpg",
    alt: "Whirlpool hot tub with panoramic views",
  },
  {
    src: "https://a0.muscache.com/im/pictures/6dd1b9f7-7f11-4c67-a913-28bd1d95d58a.jpg",
    alt: "Organic vegetable garden with ancient stone walls",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-26220523/original/eff8d107-818d-4aac-8eb2-62c45b963cb6.jpeg",
    alt: "Bedroom with wooden furniture and natural light",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-26220523/original/e444ef08-665a-4ce8-928b-6808ae16375b.jpeg",
    alt: "Kitchen with modern appliances and stone accents",
  },
];

export const AMENITIES = [
  { icon: "Wifi", label: "High-Speed WiFi" },
  { icon: "Bath", label: "Hot Tub / Whirlpool" },
  { icon: "ChefHat", label: "Fully Equipped Kitchen" },
  { icon: "Tv", label: "Living Room & Entertainment" },
  { icon: "Car", label: "Free Parking (4 vehicles)" },
  { icon: "UtensilsCrossed", label: "Dishwasher & Oven" },
  { icon: "Baby", label: "Child-Friendly" },
  { icon: "Leaf", label: "Eco-Friendly Materials" },
  { icon: "Plane", label: "Airport Shuttle Available" },
  { icon: "Flower2", label: "Organic Garden" },
  { icon: "Mountain", label: "Panoramic Terraces" },
  { icon: "Users", label: "Up to 4 Guests" },
] as const;

export const EXPERIENCE_FEATURES = [
  {
    title: "Ancient Stone Heritage",
    description:
      "400 m² of grounds enclosed by ancient stone walls dating back centuries. The villa honours Dalmatian vernacular architecture with every carefully placed stone.",
    icon: "Mountain",
  },
  {
    title: "Handcrafted in Pure Wood",
    description:
      "Every window, door, and piece of furniture is handmade in pure wood by local artisans — a testament to Croatian craft tradition passed down through generations.",
    icon: "TreePine",
  },
  {
    title: "Organic Vegetable Garden",
    description:
      "Guests enjoy fresh herbs and vegetables from our private organic garden. Farm-to-table starts at your doorstep in the heart of Dalmatia.",
    icon: "Sprout",
  },
  {
    title: "Breathtaking Sea Views",
    description:
      "Perched on a hilltop village, the villa commands sweeping views of the Adriatic Sea and surrounding islands from every terrace.",
    icon: "Eye",
  },
] as const;

export const REVIEWS = [
  {
    author: "Sarah M.",
    country: "United Kingdom",
    date: "September 2024",
    rating: 5,
    text: "Absolutely stunning villa. The stone walls, the view, the hot tub at sunset — we never wanted to leave. Split is only 10 minutes away but this place feels like a private paradise.",
  },
  {
    author: "Marco T.",
    country: "Italy",
    date: "August 2024",
    rating: 5,
    text: "Perfetto. The organic garden, the wooden details, everything is authentic. Our host was wonderful and attentive. We will definitely return next summer.",
  },
  {
    author: "Anna K.",
    country: "Germany",
    date: "July 2024",
    rating: 5,
    text: "The sea view from the terrace is exactly as shown in photos. Very quiet, very peaceful. Diocletian's Palace is a short drive. Perfect base for exploring Dalmatia.",
  },
] as const;

export const DISTANCES = [
  { place: "Split City Centre", distance: "6 km", time: "10 min", icon: "Building2" },
  { place: "Diocletian's Palace", distance: "10 km", time: "15 min", icon: "Landmark" },
  { place: "Split Airport", distance: "20 km", time: "25 min", icon: "Plane" },
  { place: "Nearest Beach", distance: "3 km", time: "7 min", icon: "Waves" },
  { place: "Krka National Park", distance: "65 km", time: "55 min", icon: "TreePine" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve", href: "#reserve" },
] as const;

export const HERO_SLIDES = [
  PHOTOS[0], // Exterior with stone walls and sea view
  PHOTOS[1], // Spacious terrace overlooking the Adriatic
  PHOTOS[2], // Hand-crafted wooden interior
  PHOTOS[4], // Whirlpool hot tub with panoramic views
  PHOTOS[6], // Bedroom with wooden furniture
  PHOTOS[3], // Living room with traditional stone details
];
