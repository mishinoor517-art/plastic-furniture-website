import { CmsCompany, CmsProduct, CmsSlide, CmsVideo } from "./types";

/**
 * Local fallback content.
 *
 * This is what renders whenever `NEXT_PUBLIC_SUPABASE_URL` /
 * `NEXT_PUBLIC_SUPABASE_ANON_KEY` aren't set (e.g. local dev without a
 * cloud project yet). Shape-for-shape it matches the Supabase tables in
 * `lib/cms/service.ts`, so swapping to live data doesn't touch the UI.
 */

export const MOCK_PRODUCTS: CmsProduct[] = [
  {
    id: "p1",
    name: "Aria Stack Chair",
    description:
      "A featherweight stacking chair molded from UV-stable polypropylene, built for daily indoor-outdoor use.",
    category: "Outdoor Furniture",
    image: "/images/product-1/product-1-blue.png",
    thumbnail: "/images/product-1/product-1-blue.png",
    price: 89,
    ctaText: "View Product",
    ctaUrl: "/products/aria-stack-chair",
    sortOrder: 1,
    active: true,
  },
  {
    id: "p2",
    name: "Nova Lounge Armchair",
    description:
      "Sculpted ergonomic curves and a wide seat base make Nova the centerpiece of any modern living room.",
    category: "Indoor Furniture",
    image: "/images/product-2/product-2-olive.png",
    thumbnail: "/images/product-2/product-2-olive.png",
    price: 149,
    ctaText: "View Product",
    ctaUrl: "/products/nova-lounge-armchair",
    sortOrder: 2,
    active: true,
  },
  {
    id: "p3",
    name: "Terra Garden Chair",
    description:
      "Weatherproof and stackable, Terra is engineered for patios, gardens, and long seasons outdoors.",
    category: "Outdoor Furniture",
    image: "/images/product-3/product-3-seagreen.jpeg",
    thumbnail: "/images/product-3/product-3-seagreen.jpeg",
    price: 79,
    ctaText: "View Product",
    ctaUrl: "/products/terra-garden-chair",
    sortOrder: 3,
    active: true,
  },
  {
    id: "p4",
    name: "Flux Task Chair",
    description:
      "A flexible-back office chair with breathable shell construction for long, focused work sessions.",
    category: "Office Furniture",
    image: "/images/product-4/product-4-orange.png",
    thumbnail: "/images/product-4/product-4-orange.png",
    price: 129,
    ctaText: "View Product",
    ctaUrl: "/products/flux-task-chair",
    sortOrder: 4,
    active: true,
  },
  {
    id: "p5",
    name: "Bloom Kids Chair",
    description:
      "Rounded edges, playful color and a low center of gravity — built specifically for small explorers.",
    category: "Kids Furniture",
    image: "/images/product-5/product-5-skyblue.png",
    thumbnail: "/images/product-5/product-5-skyblue.png",
    price: 45,
    ctaText: "View Product",
    ctaUrl: "/products/bloom-kids-chair",
    sortOrder: 5,
    active: true,
  },
  {
    id: "p6",
    name: "Drift Dining Chair",
    description:
      "Clean, minimal lines and a contoured seat pan pair naturally with any modern dining table.",
    category: "Indoor Furniture",
    image: "/images/product-2/product-2-brown.png",
    thumbnail: "/images/product-2/product-2-brown.png",
    price: 109,
    ctaText: "View Product",
    ctaUrl: "/products/drift-dining-chair",
    sortOrder: 6,
    active: true,
  },
  {
    id: "p7",
    name: "Solace Lounger",
    description:
      "A reclining outdoor lounger with a smooth adjustable backrest for all-day poolside comfort.",
    category: "Outdoor Furniture",
    image: "/images/product-3/product-3-white.jpeg",
    thumbnail: "/images/product-3/product-3-white.jpeg",
    price: 189,
    ctaText: "View Product",
    ctaUrl: "/products/solace-lounger",
    sortOrder: 7,
    active: true,
  },
];

export const MOCK_SLIDES: CmsSlide[] = [
  {
    id: "s1",
    title: "Engineered for Everyday Living",
    description:
      "Every silhouette starts with a real-world problem — comfort, durability, and a design that lasts through seasons of use.",
    image: "/images/hero-1.jpg",
    category: "Design Philosophy",
    buttonText: "Explore Collection",
    buttonUrl: "/#products",
    sortOrder: 1,
    active: true,
  },
  {
    id: "s2",
    title: "Weather-Ready Outdoor Living",
    description:
      "UV-stable resins and reinforced joints mean these pieces hold their color and shape through sun, rain, and time.",
    image: "/images/hero-3.jpg",
    category: "Outdoor",
    buttonText: "Shop Outdoor",
    buttonUrl: "/#products",
    sortOrder: 2,
    active: true,
  },
  {
    id: "s3",
    title: "Comfort That Works as Hard as You Do",
    description:
      "From home offices to studios, our seating is built for long hours without sacrificing an ounce of style.",
    image: "/images/hero-5.jpg",
    category: "Office",
    buttonText: "Shop Office",
    buttonUrl: "/#products",
    sortOrder: 3,
    active: true,
  },
  {
    id: "s4",
    title: "Playful, Safe, Built to Last",
    description:
      "Rounded profiles and non-toxic finishes make our kids' range as safe as it is fun to look at.",
    image: "/images/hero-6.jpg",
    category: "Kids",
    buttonText: "Shop Kids",
    buttonUrl: "/#products",
    sortOrder: 4,
    active: true,
  },
];

export const MOCK_VIDEOS: CmsVideo[] = [
  {
    id: "v1",
    title: "Inside the Molding Process",
    description: "A look at how a single chair shell goes from raw resin to finished form.",
    thumbnail: "/images/categories/moulded-range.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Craftsmanship",
    sortOrder: 1,
    active: true,
  },
  {
    id: "v2",
    title: "Built for the Outdoors",
    description: "Stress-testing our outdoor range against sun, rain, and years of daily use.",
    thumbnail: "/images/categories/outdoor-furniture.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Durability",
    sortOrder: 2,
    active: true,
  },
  {
    id: "v3",
    title: "A Day in the Showroom",
    description: "Walk through our flagship showroom and see the full collection in one space.",
    thumbnail: "/images/categories/indoor-furniture.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Showroom",
    sortOrder: 3,
    active: true,
  },
];

/** Small inline SVG wordmarks so the logo strip has zero external dependencies. */
function wordmarkLogo(label: string, weight = 600): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 160 48">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="${weight}"
      letter-spacing="1" fill="#222222">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const MOCK_COMPANIES: CmsCompany[] = [
  { id: "c1", companyName: "Nordica Living", logoUrl: wordmarkLogo("NORDICA"), websiteUrl: "https://example.com/nordica", sortOrder: 1, active: true },
  { id: "c2", companyName: "Vantage Interiors", logoUrl: wordmarkLogo("VANTAGE"), websiteUrl: "https://example.com/vantage", sortOrder: 2, active: true },
  { id: "c3", companyName: "Solstice Homes", logoUrl: wordmarkLogo("SOLSTICE"), websiteUrl: "https://example.com/solstice", sortOrder: 3, active: true },
  { id: "c4", companyName: "Prairie & Pine", logoUrl: wordmarkLogo("PRAIRIE & PINE"), websiteUrl: "https://example.com/prairie-pine", sortOrder: 4, active: true },
  { id: "c5", companyName: "Meridian Décor", logoUrl: wordmarkLogo("MERIDIAN"), websiteUrl: "https://example.com/meridian", sortOrder: 5, active: true },
  { id: "c6", companyName: "Cascade Studio", logoUrl: wordmarkLogo("CASCADE"), websiteUrl: "https://example.com/cascade", sortOrder: 6, active: true },
  { id: "c7", companyName: "Alder & Co", logoUrl: wordmarkLogo("ALDER & CO"), websiteUrl: "https://example.com/alder", sortOrder: 7, active: true },
  { id: "c8", companyName: "Harborview Group", logoUrl: wordmarkLogo("HARBORVIEW"), websiteUrl: "https://example.com/harborview", sortOrder: 8, active: true },
];
