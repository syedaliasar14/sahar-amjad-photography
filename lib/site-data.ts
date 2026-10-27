const samplePhotos = [
  "/sample1.png",
  "/sample2.png",
  "/sample3.png",
  "/sample4.png",
  "/sample5.png",
  "/sample6.png",
];

export const img = (seed: string) => {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  return samplePhotos[hash % samplePhotos.length];
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const categories = [
  "Portraits",
  "Fashion",
  "Elopements",
  "Couples",
  "Products",
  "Weddings",
] as const;

export type Category = (typeof categories)[number];

export const categoryPhotos: Record<Category, string[]> = Object.fromEntries(
  categories.map((c) => [
    c,
    Array.from({ length: 9 }, (_, i) => `${c.toLowerCase()}-${i + 1}`),
  ]),
) as Record<Category, string[]>;

export const heroImages = ["hero-1", "hero-2", "hero-3", "hero-4"];

export const portfolioPreviewImages = [
  "preview-1",
  "preview-2",
  "preview-3",
  "preview-4",
  "preview-5",
];

export const testimonials = [
  {
    name: "Emily & James",
    text: "Sahar captured our wedding day so beautifully. Every photo feels like a memory we can step back into.",
  },
  {
    name: "Aisha K.",
    text: "She made me feel completely at ease during my portrait session. The results were stunning.",
  },
  {
    name: "Studio Bloom",
    text: "Our product photos have never looked better. Professional, creative, and a joy to work with.",
  },
  {
    name: "Maya & Daniel",
    text: "Our elopement was intimate and magical, and Sahar documented every moment perfectly.",
  },
];

export const services = [
  { title: "Weddings", price: "$2,500", image: "service-weddings", description: "Full-day coverage of your celebration, told with warmth and artistry." },
  { title: "Portraits", price: "$350", image: "service-portraits", description: "Personal, natural portraits that reflect who you really are." },
  { title: "Products", price: "$400", image: "service-products", description: "Clean, compelling imagery that makes your products stand out." },
  { title: "Fashion", price: "$600", image: "service-fashion", description: "Editorial and lookbook shoots with a bold creative eye." },
  { title: "Couples", price: "$450", image: "service-couples", description: "Relaxed engagement and couples sessions full of connection." },
  { title: "Elopements", price: "$1,200", image: "service-elopements", description: "Intimate adventures documented from start to finish." },
];

export const serviceOptions = services.map((s) => s.title);
