export interface SubItem {
  name: string;
  description: string;
  href: string;
}

export interface NavCategory {
  name: string;
  slug: string;
  items: SubItem[];
}

export interface HeroSlide {
  id: number;
  image: string;
  tagline: string;
  title: string;
  description: string;
  exploreHref: string;
  shopHref: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
}

// 5 Main navbar category items, each with custom dropdown sub-items/products
export const navCategories: NavCategory[] = [
  {
    name: "Outdoor Furniture",
    slug: "outdoor-furniture",
    items: [
      { name: "Ocean Chair Set", description: "Premium weather-resistant seaside seating", href: "#products" },
      { name: "Royal Dining Set", description: "All-weather dining tables and chairs", href: "#products" },
      { name: "Elegance Garden Chair", description: "Tough stackable patio armchairs", href: "#products" },
      { name: "Patio Sun Loungers", description: "Reclining deck chairs for absolute comfort", href: "#products" },
    ],
  },
  {
    name: "Indoor Furniture",
    slug: "indoor-furniture",
    items: [
      { name: "Modern Living Lounge", description: "Sophisticated styling for modern spaces", href: "#products" },
      { name: "Contemporary Dining", description: "Chic tables and armchairs for family gatherings", href: "#products" },
      { name: "Premium Loungers", description: "Plush cushions and comfortable armrests", href: "#products" },
      { name: "Minimalist Accent Tables", description: "Wooden finish low-rise central coffee tables", href: "#products" },
    ],
  },
  {
    name: "Kids Furniture",
    slug: "kids-furniture",
    items: [
      { name: "Activity Study Desks", description: "Ergonomic tables for early learning", href: "#products" },
      { name: "Safety First Chairs", description: "Rounded edges, lightweight & durable build", href: "#products" },
      { name: "Playroom Storage Chests", description: "Charming cabinets to organize toys and books", href: "#products" },
      { name: "Theme Bedroom Sets", description: "Comfortable kids beds and wardrobes", href: "#products" },
    ],
  },
  {
    name: "Office Furniture",
    slug: "office-furniture",
    items: [
      { name: "Adjustable Swivel Chair", description: "Ergonomic office seat with full-height adjustment", href: "#products" },
      { name: "Professional Bar Stools", description: "Modern seating for counters, bars & cafes", href: "#products" },
      { name: "Modern Workstation Desks", description: "Sleek office desks with built-in cable paths", href: "#products" },
      { name: "Ergonomic Footrests", description: "Comfortable support accessories for workspaces", href: "#products" },
    ],
  },
  {
    name: "Moulded Range",
    slug: "moulded-range",
    items: [
      { name: "Modern Lounge Chairs", description: "Glossy contemporary moulded seating", href: "#products" },
      { name: "Elegance Heavy Armchairs", description: "Sturdy, built-to-last moulded chairs", href: "#products" },
      { name: "Royal Premium Armchairs", description: "Virgin plastic seat with high-load capacity", href: "#products" },
      { name: "Stackable Space Savers", description: "Easy-to-store stools and utility chairs", href: "#products" },
    ],
  },
];

// Exactly 5 Hero slides using uploaded images
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    tagline: "Relax in Style",
    title: "MODERN LOUNGE CHAIR",
    description: "Designed for modern spaces, the Modern Lounge Chair combines elegant design with everyday comfort. Perfect for homes, cafés, lounges, and waiting areas.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    tagline: "Royal Comfort",
    title: "PREMIUM MOULDED ARM CHAIR",
    description: "Royal Comfort Chair is designed for durability, style, and everyday comfort. Made from high-quality moulded plastic, it is perfect for indoor and outdoor use in homes, cafes, and commercial spaces.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    tagline: "Ocean Theme",
    title: "OUTDOOR CHAIR SET",
    description: "Weather resistant, rustproof frame, comfortable cushions, and UV protected. Bring seaside freshness right to your patio with the Ocean Outdoor collection.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
  {
    id: 4,
    image: "/images/hero-6.jpg",
    tagline: "Modern Comfort. Everyday Style.",
    title: "NEXORA DINING CHAIR",
    description: "Crafted from premium virgin plastic for superior strength, weather-shielded and rust-free, with a smart stackable design that saves space and keeps every area clutter-free.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
  {
    id: 5,
    image: "/images/hero-5.jpg",
    tagline: "Elegance Arm Chair",
    title: "MOULDED FOR COMFORT",
    description: "Stylish, strong, and comfortable - perfect for any space, inside or out. Built to last with reinforced legs and back support.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
  {
    id: 6,
    image: "/images/hero-7.jpg",
    tagline: "Learn. Play. Grow.",
    title: "KIDS STUDY TABLE & CHAIR",
    description: "Safe, durable, and made from child-friendly non-toxic material with smooth edges. Easy to assemble and easy to clean - the perfect size for kids aged 1 to 6 years.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
];

// Exactly 5 Category Cards (Wider landscape ratio layout)
export const categories: Category[] = [
  {
    id: 1,
    name: "Moulded Range",
    image: "/images/categories/moulded-range.jpg",
    slug: "moulded-range",
  },
  {
    id: 2,
    name: "Indoor Furniture",
    image: "/images/categories/indoor-furniture.jpg",
    slug: "indoor-furniture",
  },
  {
    id: 3,
    name: "Outdoor Furniture",
    image: "/images/categories/outdoor-furniture.jpg",
    slug: "outdoor-furniture",
  },
  {
    id: 4,
    name: "Office Furniture",
    image: "/images/categories/office-furniture.jpg",
    slug: "office-furniture",
  },
  {
    id: 5,
    name: "Kids Furniture",
    image: "/images/categories/kids-furniture.jpg",
    slug: "kids-furniture",
  },
];

// Exactly 3 Featured Products using uploaded images
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    description: "Stylish, comfortable, and durable for everyday use.",
    category: "Moulded Range",
    image: "/images/products/modern-lounge-chair.jpg",
    features: [
      "Premium Moulded Plastic",
      "Comfortable Arm Support",
      "Strong Chrome Legs",
      "Stylish & Modern Design",
    ],
  },
  {
    id: 2,
    name: "Premium Outdoor Chair",
    description: "Strong and practical seating for outdoor spaces.",
    category: "Outdoor Furniture",
    image: "/images/products/premium-outdoor-chair.jpg",
    features: [
      "Weather Resistant",
      "Rustproof Frame",
      "Comfortable Cushions",
      "UV Protected",
    ],
  },
  {
    id: 3,
    name: "Modern Office Chair",
    description: "Comfortable and functional seating for modern workspaces.",
    category: "Office Furniture",
    image: "/images/products/modern-office-chair.jpg",
    features: [
      "Adjustable Height",
      "Integrated Footrest",
      "Steel / Chrome Base",
      "Modern Counter Seat",
    ],
  },
];
