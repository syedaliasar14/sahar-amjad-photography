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
