export const VILLA = {
  name: "Vila Alissa - Mravince",
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
  // Main exterior
  { src: "/images/main_01.jpg", alt: "Villa Alissa exterior with stone walls" },
  { src: "/images/main_02.jpg", alt: "Villa Alissa exterior second angle" },
  // Outdoor / terrace / garden
  { src: "/images/outdoor_01.jpg", alt: "Outdoor terrace with sea view" },
  { src: "/images/outdoor_02.jpg", alt: "Nighttime jacuzzi with champagne" },
  { src: "/images/outdoor_03.jpg", alt: "Jacuzzi close-up with garden view" },
  { src: "/images/outdoor_04.jpg", alt: "Terrace with Adriatic view" },
  { src: "/images/outdoor_05.jpg", alt: "Villa garden with ancient stone walls" },
  { src: "/images/outdoor_06.jpg", alt: "Aerial view of terrace and garden" },
  { src: "/images/outdoor_07.jpg", alt: "Outdoor shower and lounger area" },
  { src: "/images/outdoor_08.jpg", alt: "Outdoor dining area with pergola" },
  { src: "/images/outdoor_09.jpg", alt: "Villa exterior grounds" },
  { src: "/images/outdoor_10.jpg", alt: "Terrace with panoramic views" },
  { src: "/images/outdoor_11.jpg", alt: "Garden fountain with sea view" },
  { src: "/images/outdoor_12.jpg", alt: "Villa outdoor surroundings" },
  { src: "/images/outdoor_13.jpg", alt: "Outdoor area with stone details" },
  { src: "/images/outdoor_14.jpg", alt: "Aerial view of villa and garden" },
  // Sea view
  { src: "/images/view_02.jpg", alt: "Panoramic Adriatic sea view from Villa Alissa" },
  // Living room
  { src: "/images/living_01.jpg", alt: "Living room with wooden furniture and stone details" },
  { src: "/images/living_02.jpg", alt: "Cosy living room interior" },
  { src: "/images/living_03.jpg", alt: "Living room with traditional Dalmatian décor" },
  { src: "/images/living_04.jpg", alt: "Handcrafted wooden interior living space" },
  { src: "/images/living_05.jpg", alt: "Living area with natural light" },
  // Bedrooms
  { src: "/images/bed_01.jpg", alt: "Master bedroom with wooden furniture" },
  { src: "/images/bed_02.jpg", alt: "Bedroom with natural light and stone walls" },
  { src: "/images/bed_03.jpg", alt: "Comfortable bedroom interior" },
  { src: "/images/bed_04.jpg", alt: "Bedroom with handcrafted wooden details" },
  { src: "/images/bed_05.jpg", alt: "Twin bedroom with traditional style" },
  { src: "/images/bed_06.jpg", alt: "Bedroom with Dalmatian décor" },
  { src: "/images/bed_07.jpg", alt: "Bright bedroom with wooden furniture" },
  { src: "/images/bed_08.jpg", alt: "Cosy bedroom with stone wall accent" },
  // Bathrooms
  { src: "/images/bath_01.jpg", alt: "Modern bathroom with stone finishes" },
  { src: "/images/bath_02.jpg", alt: "Bathroom with natural materials" },
  { src: "/images/bath_03.jpg", alt: "Elegant bathroom interior" },
  { src: "/images/bath_04.jpg", alt: "Spacious bathroom with modern fixtures" },
  // Kitchen
  { src: "/images/kitchen_01.jpg", alt: "Fully equipped kitchen with modern appliances" },
  // Associated / surroundings
  { src: "/images/associated_01.jpg", alt: "Mravince village surroundings" },
  { src: "/images/associated_02.jpg", alt: "Dalmatian coastal landscape near villa" },
  { src: "/images/associated_03.jpg", alt: "Local area attractions" },
  { src: "/images/associated_04.jpg", alt: "Split region scenery" },
  { src: "/images/associated_05.jpg", alt: "Nearby Adriatic coastline" },
  { src: "/images/associated_06.jpg", alt: "Local Dalmatian landscape" },
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
] as const;

export const HERO_SLIDES = [
  PHOTOS[3],  // outdoor_02 - nighttime jacuzzi with champagne
  PHOTOS[2],  // outdoor_01 - stone terrace with loungers and hot tub
  PHOTOS[4],  // outdoor_03 - jacuzzi close-up with garden view
  PHOTOS[16], // view_02    - pergola with fountain, geraniums and sea/mountain panorama
  PHOTOS[17], // living_01  - living room with wooden beams and fireplace
];
