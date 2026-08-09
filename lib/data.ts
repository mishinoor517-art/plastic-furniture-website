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

<<<<<<< HEAD
export interface ColorOption {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
=======
export interface Product {
  id: number;
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  name: string;
  description: string;
  category: string;
  image: string;
<<<<<<< HEAD

  /*
   * Optional because only products with uploaded
   * color images need this for now.
   */
  colorImages?: Record<string, string>;

  features: string[];
  price: number;
  rating: number;
  code: string;
  stock: string;
  colors: ColorOption[];
}

export interface ProductDetailMeta {
  slug: string;
  material: string;
  chairType: string;
  dimensions: string;
  weight: string;
  maxWeightCapacity: string;
  suitableUsage: string;
  indoorOutdoor: string;
  careInstructions: string;
  longDescription: string;
  keyFeatures: string[];
}

/* =========================================================
   NAVIGATION CATEGORIES
========================================================= */

=======
  features: string[];
}

// 5 Main navbar category items, each with custom dropdown sub-items/products
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
export const navCategories: NavCategory[] = [
  {
    name: "Outdoor Furniture",
    slug: "outdoor-furniture",
    items: [
<<<<<<< HEAD
      {
        name: "Ocean Chair Set",
        description:
          "Premium weather-resistant seaside seating",
        href: "#products",
      },
      {
        name: "Royal Dining Set",
        description:
          "All-weather dining tables and chairs",
        href: "#products",
      },
      {
        name: "Elegance Garden Chair",
        description:
          "Tough stackable patio armchairs",
        href: "#products",
      },
      {
        name: "Patio Sun Loungers",
        description:
          "Reclining deck chairs for absolute comfort",
        href: "#products",
      },
    ],
  },

=======
      { name: "Ocean Chair Set", description: "Premium weather-resistant seaside seating", href: "#products" },
      { name: "Royal Dining Set", description: "All-weather dining tables and chairs", href: "#products" },
      { name: "Elegance Garden Chair", description: "Tough stackable patio armchairs", href: "#products" },
      { name: "Patio Sun Loungers", description: "Reclining deck chairs for absolute comfort", href: "#products" },
    ],
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    name: "Indoor Furniture",
    slug: "indoor-furniture",
    items: [
<<<<<<< HEAD
      {
        name: "Modern Living Lounge",
        description:
          "Sophisticated styling for modern spaces",
        href: "#products",
      },
      {
        name: "Contemporary Dining",
        description:
          "Chic tables and armchairs for family gatherings",
        href: "#products",
      },
      {
        name: "Premium Loungers",
        description:
          "Plush cushions and comfortable armrests",
        href: "#products",
      },
      {
        name: "Minimalist Accent Tables",
        description:
          "Wooden finish low-rise central coffee tables",
        href: "#products",
      },
    ],
  },

=======
      { name: "Modern Living Lounge", description: "Sophisticated styling for modern spaces", href: "#products" },
      { name: "Contemporary Dining", description: "Chic tables and armchairs for family gatherings", href: "#products" },
      { name: "Premium Loungers", description: "Plush cushions and comfortable armrests", href: "#products" },
      { name: "Minimalist Accent Tables", description: "Wooden finish low-rise central coffee tables", href: "#products" },
    ],
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    name: "Kids Furniture",
    slug: "kids-furniture",
    items: [
<<<<<<< HEAD
      {
        name: "Activity Study Desks",
        description:
          "Ergonomic tables for early learning",
        href: "#products",
      },
      {
        name: "Safety First Chairs",
        description:
          "Rounded edges, lightweight & durable build",
        href: "#products",
      },
      {
        name: "Playroom Storage Chests",
        description:
          "Charming cabinets to organize toys and books",
        href: "#products",
      },
      {
        name: "Theme Bedroom Sets",
        description:
          "Comfortable kids beds and wardrobes",
        href: "#products",
      },
    ],
  },

=======
      { name: "Activity Study Desks", description: "Ergonomic tables for early learning", href: "#products" },
      { name: "Safety First Chairs", description: "Rounded edges, lightweight & durable build", href: "#products" },
      { name: "Playroom Storage Chests", description: "Charming cabinets to organize toys and books", href: "#products" },
      { name: "Theme Bedroom Sets", description: "Comfortable kids beds and wardrobes", href: "#products" },
    ],
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    name: "Office Furniture",
    slug: "office-furniture",
    items: [
<<<<<<< HEAD
      {
        name: "Adjustable Swivel Chair",
        description:
          "Ergonomic office seat with full-height adjustment",
        href: "#products",
      },
      {
        name: "Professional Bar Stools",
        description:
          "Modern seating for counters, bars & cafes",
        href: "#products",
      },
      {
        name: "Modern Workstation Desks",
        description:
          "Sleek office desks with built-in cable paths",
        href: "#products",
      },
      {
        name: "Ergonomic Footrests",
        description:
          "Comfortable support accessories for workspaces",
        href: "#products",
      },
    ],
  },

=======
      { name: "Adjustable Swivel Chair", description: "Ergonomic office seat with full-height adjustment", href: "#products" },
      { name: "Professional Bar Stools", description: "Modern seating for counters, bars & cafes", href: "#products" },
      { name: "Modern Workstation Desks", description: "Sleek office desks with built-in cable paths", href: "#products" },
      { name: "Ergonomic Footrests", description: "Comfortable support accessories for workspaces", href: "#products" },
    ],
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    name: "Moulded Range",
    slug: "moulded-range",
    items: [
<<<<<<< HEAD
      {
        name: "Modern Lounge Chairs",
        description:
          "Glossy contemporary moulded seating",
        href: "#products",
      },
      {
        name: "Elegance Heavy Armchairs",
        description:
          "Sturdy, built-to-last moulded chairs",
        href: "#products",
      },
      {
        name: "Royal Premium Armchairs",
        description:
          "Virgin plastic seat with high-load capacity",
        href: "#products",
      },
      {
        name: "Stackable Space Savers",
        description:
          "Easy-to-store stools and utility chairs",
        href: "#products",
      },
=======
      { name: "Modern Lounge Chairs", description: "Glossy contemporary moulded seating", href: "#products" },
      { name: "Elegance Heavy Armchairs", description: "Sturdy, built-to-last moulded chairs", href: "#products" },
      { name: "Royal Premium Armchairs", description: "Virgin plastic seat with high-load capacity", href: "#products" },
      { name: "Stackable Space Savers", description: "Easy-to-store stools and utility chairs", href: "#products" },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
    ],
  },
];

<<<<<<< HEAD
/* =========================================================
   HERO SLIDES
========================================================= */

=======
// Exactly 5 Hero slides using uploaded images
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    tagline: "Relax in Style",
    title: "MODERN LOUNGE CHAIR",
<<<<<<< HEAD
    description:
      "Designed for modern spaces, the Modern Lounge Chair combines elegant design with everyday comfort. Perfect for homes, cafés, lounges, and waiting areas.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

=======
    description: "Designed for modern spaces, the Modern Lounge Chair combines elegant design with everyday comfort. Perfect for homes, cafés, lounges, and waiting areas.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 2,
    image: "/images/hero-2.jpg",
    tagline: "Royal Comfort",
    title: "PREMIUM MOULDED ARM CHAIR",
<<<<<<< HEAD
    description:
      "Royal Comfort Chair is designed for durability, style, and everyday comfort. Made from high-quality moulded plastic, it is perfect for indoor and outdoor use in homes, cafes, and commercial spaces.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

=======
    description: "Royal Comfort Chair is designed for durability, style, and everyday comfort. Made from high-quality moulded plastic, it is perfect for indoor and outdoor use in homes, cafes, and commercial spaces.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 3,
    image: "/images/hero-3.jpg",
    tagline: "Ocean Theme",
    title: "OUTDOOR CHAIR SET",
<<<<<<< HEAD
    description:
      "Weather resistant, rustproof frame, comfortable cushions, and UV protected. Bring seaside freshness right to your patio with the Ocean Outdoor collection.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

=======
    description: "Weather resistant, rustproof frame, comfortable cushions, and UV protected. Bring seaside freshness right to your patio with the Ocean Outdoor collection.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 4,
    image: "/images/hero-6.jpg",
    tagline: "Modern Comfort. Everyday Style.",
    title: "NEXORA DINING CHAIR",
<<<<<<< HEAD
    description:
      "Crafted from premium virgin plastic for superior strength, weather-shielded and rust-free, with a smart stackable design that saves space and keeps every area clutter-free.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

=======
    description: "Crafted from premium virgin plastic for superior strength, weather-shielded and rust-free, with a smart stackable design that saves space and keeps every area clutter-free.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 5,
    image: "/images/hero-5.jpg",
    tagline: "Elegance Arm Chair",
    title: "MOULDED FOR COMFORT",
<<<<<<< HEAD
    description:
      "Stylish, strong, and comfortable - perfect for any space, inside or out. Built to last with reinforced legs and back support.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

=======
    description: "Stylish, strong, and comfortable - perfect for any space, inside or out. Built to last with reinforced legs and back support.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 6,
    image: "/images/hero-7.jpg",
    tagline: "Learn. Play. Grow.",
    title: "KIDS STUDY TABLE & CHAIR",
<<<<<<< HEAD
    description:
      "Safe, durable, and made from child-friendly non-toxic material with smooth edges. Easy to assemble and easy to clean - the perfect size for kids aged 1 to 6 years.",
=======
    description: "Safe, durable, and made from child-friendly non-toxic material with smooth edges. Easy to assemble and easy to clean - the perfect size for kids aged 1 to 6 years.",
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
    exploreHref: "#categories",
    shopHref: "#products",
  },
];

<<<<<<< HEAD
/* =========================================================
   CATEGORIES
========================================================= */

=======
// Exactly 5 Category Cards (Wider landscape ratio layout)
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
export const categories: Category[] = [
  {
    id: 1,
    name: "Moulded Range",
    image: "/images/categories/moulded-range.jpg",
    slug: "moulded-range",
  },
<<<<<<< HEAD

=======
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 2,
    name: "Indoor Furniture",
    image: "/images/categories/indoor-furniture.jpg",
    slug: "indoor-furniture",
  },
<<<<<<< HEAD

=======
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 3,
    name: "Outdoor Furniture",
    image: "/images/categories/outdoor-furniture.jpg",
    slug: "outdoor-furniture",
  },
<<<<<<< HEAD

=======
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 4,
    name: "Office Furniture",
    image: "/images/categories/office-furniture.jpg",
    slug: "office-furniture",
  },
<<<<<<< HEAD

=======
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
  {
    id: 5,
    name: "Kids Furniture",
    image: "/images/categories/kids-furniture.jpg",
    slug: "kids-furniture",
  },
];

<<<<<<< HEAD
/* =========================================================
   PRODUCT DETAILS
========================================================= */

export const productDetails: ProductDetailMeta[] = [
  {
    slug: "sigma-classic-moulded-chair",
    material: "Premium moulded plastic",
    chairType: "Classic comfort chair",
    dimensions: "44 x 42 x 82 cm",
    weight: "5.2 kg",
    maxWeightCapacity: "120 kg",
    suitableUsage:
      "Living rooms, workspaces, reception areas",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Wipe clean with a soft cloth and mild detergent.",
    longDescription:
      "The SIGMA Classic Moulded Chair is crafted for elegant everyday comfort with a refined sculptural silhouette and durable moulded body. Its versatile styling makes it ideal for modern homes, offices, and hospitality settings.",
    keyFeatures: [
      "Premium moulded plastic shell",
      "Comfort-focused back support",
      "Rust-safe chrome-inspired legs",
      "Easy to clean and maintain",
    ],
  },

  {
    slug: "sigma-modern-plastic-chair",
    material: "Virgin plastic",
    chairType: "Modern plastic chair",
    dimensions: "46 x 43 x 83 cm",
    weight: "4.8 kg",
    maxWeightCapacity: "110 kg",
    suitableUsage:
      "Dining spaces, meeting rooms, compact interiors",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Use a non-abrasive cloth and gentle cleaning solution.",
    longDescription:
      "The SIGMA Modern Plastic Chair brings a crisp, contemporary look to everyday seating. Lightweight and practical, it is ideal for statement interiors requiring modern elegance and dependable durability.",
    keyFeatures: [
      "Smooth plastic shell finish",
      "Space-saving profile",
      "Stable and lightweight build",
      "Ideal for stylish compact spaces",
    ],
  },

  {
    slug: "sigma-premium-garden-chair",
    material:
      "Weather-resistant moulded plastic",
    chairType: "Garden chair",
    dimensions: "48 x 44 x 85 cm",
    weight: "5.7 kg",
    maxWeightCapacity: "125 kg",
    suitableUsage:
      "Patios, lawns, café lawns, garden corners",
    indoorOutdoor: "Covered outdoor use",
    careInstructions:
      "Clean with water and an occasional non-abrasive cleanser.",
    longDescription:
      "The SIGMA Premium Garden Chair is made to bring style and resilience outdoors. It balances smooth comfort with weather-ready construction for sunny patios, café courtyards, and garden lounges.",
    keyFeatures: [
      "UV-resistant finish",
      "Comfortable supporting seat curve",
      "Weather-ready durability",
      "Suitable for outdoor relaxation needs",
    ],
  },

  {
    slug: "sigma-comfort-arm-chair",
    material: "Comfort-grade moulded plastic",
    chairType: "Arm chair",
    dimensions: "50 x 46 x 88 cm",
    weight: "6.1 kg",
    maxWeightCapacity: "130 kg",
    suitableUsage:
      "Reading nooks, lounges, reception seating",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Wipe clean gently. Avoid harsh chemicals on polished surfaces.",
    longDescription:
      "This SIGMA Comfort Arm Chair introduces softness in design with a refined arm profile and supportive structure. It is perfect for relaxed seating without compromising on style or strength.",
    keyFeatures: [
      "Ergonomic arm support",
      "Soft curved silhouette",
      "Premium visual finish",
      "Comfort-first lounge profile",
    ],
  },

  {
    slug: "sigma-elegant-dining-chair",
    material: "Premium synthetic plastic",
    chairType: "Dining chair",
    dimensions: "42 x 40 x 78 cm",
    weight: "4.9 kg",
    maxWeightCapacity: "105 kg",
    suitableUsage:
      "Dining rooms, kitchens, family tables",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Use a clean damp cloth to remove stains and spills.",
    longDescription:
      "The SIGMA Elegant Dining Chair brings a polished dining aesthetic to modern homes. It pairs decorative elegance with balanced seating comfort, making every meal feel more welcoming.",
    keyFeatures: [
      "Smooth dining-style finish",
      "Balanced comfort for daily seating",
      "Easy-to-clean body",
      "Ideal for family and guest use",
    ],
  },

  {
    slug: "sigma-executive-office-chair",
    material: "Heavy-duty moulded plastic",
    chairType: "Executive office chair",
    dimensions: "53 x 48 x 92 cm",
    weight: "6.8 kg",
    maxWeightCapacity: "140 kg",
    suitableUsage:
      "Office setups, manager desks, conference areas",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Use a dry cloth and mild cleaning solution for surface care.",
    longDescription:
      "A professional standout for executive environments, the SIGMA Executive Office Chair pairs premium comfort with strong visual presence. Built for long durations and polished workspaces.",
    keyFeatures: [
      "Executive styling",
      "Comfort-promoting seating posture",
      "Strong and sturdy body",
      "Suitable for business-focused interiors",
    ],
  },

  {
    slug: "sigma-heavy-duty-chair",
    material: "Reinforced moulded plastic",
    chairType: "Heavy duty chair",
    dimensions: "52 x 47 x 90 cm",
    weight: "6.5 kg",
    maxWeightCapacity: "150 kg",
    suitableUsage:
      "Workspace, utility seating, commercial areas",
    indoorOutdoor:
      "Indoor and sheltered outdoor use",
    careInstructions:
      "Routine wipe-down is all that is required for daily upkeep.",
    longDescription:
      "The SIGMA Heavy Duty Chair is designed for real-world use with reinforced strength and dependable comfort. It is an ideal choice wherever reliability and everyday practicality matter most.",
    keyFeatures: [
      "Reinforced structural support",
      "High load-bearing design",
      "Long-life finishing",
      "Reliable for high-use settings",
    ],
  },

  {
    slug: "sigma-stylish-cafe-chair",
    material: "Compact synthetic plastic",
    chairType: "Café chair",
    dimensions: "41 x 41 x 80 cm",
    weight: "4.3 kg",
    maxWeightCapacity: "100 kg",
    suitableUsage:
      "Coffee shops, lounges, waiting areas",
    indoorOutdoor:
      "Indoor and outdoor seating",
    careInstructions:
      "Wipe with a soft dry cloth after use.",
    longDescription:
      "The SIGMA Stylish Café Chair combines neat proportions with an eye-catching finish for social and professional spaces. It is compact, attractive, and suited to contemporary café environments.",
    keyFeatures: [
      "Compact footprint",
      "Modern social seating profile",
      "Suitable for compact layouts",
      "Comfortable and visually elegant",
    ],
  },

  {
    slug: "sigma-outdoor-relax-chair",
    material: "Outdoor-grade moulded plastic",
    chairType: "Relax chair",
    dimensions: "49 x 47 x 87 cm",
    weight: "5.9 kg",
    maxWeightCapacity: "125 kg",
    suitableUsage:
      "Outdoor lounging, garden seating, terraces",
    indoorOutdoor: "Outdoor use",
    careInstructions:
      "Avoid prolonged direct sun exposure and clean with a mild cleanser.",
    longDescription:
      "Outdoor comfort meets a modern silhouette in the SIGMA Outdoor Relax Chair. Its angled profile and supportive seat make it a standout choice for patios, decks, and open-air lounges.",
    keyFeatures: [
      "Relaxed seat contour",
      "Outdoor-ready body",
      "Strong, lightweight structure",
      "Stylish and practical for open spaces",
    ],
  },

  {
    slug: "sigma-premium-visitor-chair",
    material: "Premium synthetic plastic",
    chairType: "Visitor chair",
    dimensions: "45 x 43 x 84 cm",
    weight: "5.1 kg",
    maxWeightCapacity: "115 kg",
    suitableUsage:
      "Waiting lounges, guest rooms, customer-facing spaces",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Use a damp soft cloth for a quick refresh anytime.",
    longDescription:
      "The SIGMA Premium Visitor Chair is designed to create a polished first impression. It blends a refined profile with guest-friendly comfort, elevating waiting areas and reception spaces.",
    keyFeatures: [
      "Guest-ready comfort",
      "Elegant professional profile",
      "Strong daily-use structure",
      "Suitable for premium reception zones",
    ],
  },

  {
    slug: "sigma-modern-study-chair",
    material: "Premium moulded plastic",
    chairType: "Study chair",
    dimensions: "44 x 41 x 80 cm",
    weight: "4.6 kg",
    maxWeightCapacity: "110 kg",
    suitableUsage:
      "Study desks, kids’ learning corners, home offices",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Wipe with a dry microfiber cloth after daily use.",
    longDescription:
      "The SIGMA Modern Study Chair is optimized for focused work and comfort without sacrificing a clean modern look. It is a practical ergonomic choice for desks, study areas, and small work corners.",
    keyFeatures: [
      "Comfortable seat contour",
      "Compact modern footprint",
      "Ideal for work and study",
      "Easy maintenance and lasting finish",
    ],
  },

  {
    slug: "sigma-deluxe-plastic-chair",
    material: "Deluxe synthetic plastic",
    chairType: "Deluxe chair",
    dimensions: "46 x 43 x 84 cm",
    weight: "5.3 kg",
    maxWeightCapacity: "120 kg",
    suitableUsage:
      "Premium seating zones, lounges, dining corners",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Use a gentle cleaning solution for resilient surface care.",
    longDescription:
      "For a more premium experience, the SIGMA Deluxe Plastic Chair combines comfort, balance, and sophisticated finish. It is made for daily elegance in stylish homes and hospitality interiors.",
    keyFeatures: [
      "Deluxe premium finish",
      "Balanced comfort profile",
      "Fast assembly and easy care",
      "Premium look for multiple interiors",
    ],
  },

  {
    slug: "sigma-strong-utility-chair",
    material: "Utility-grade moulded plastic",
    chairType: "Utility chair",
    dimensions: "47 x 44 x 82 cm",
    weight: "5.6 kg",
    maxWeightCapacity: "130 kg",
    suitableUsage:
      "Utility rooms, workshops, commercial areas",
    indoorOutdoor:
      "Indoor and sheltered outdoor use",
    careInstructions:
      "Clean with a damp cloth and a mild all-purpose cleaner.",
    longDescription:
      "The SIGMA Strong Utility Chair is built for practical, everyday seating where durability and stability matter most. It is a dependable seating option for workstations and utility-heavy environments.",
    keyFeatures: [
      "Robust support profile",
      "Long-life construction",
      "Reliable for daily work settings",
      "Minimal maintenance required",
    ],
  },

  {
    slug: "sigma-contemporary-lounge-chair",
    material: "Contemporary moulded plastic",
    chairType: "Lounge chair",
    dimensions: "50 x 48 x 90 cm",
    weight: "6.0 kg",
    maxWeightCapacity: "135 kg",
    suitableUsage:
      "Lounge areas, family rooms, boutique interiors",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Use a soft cloth and mild soap for easy upkeep.",
    longDescription:
      "The SIGMA Contemporary Lounge Chair is a refined seating silhouette designed to add visual warmth and exceptional ease to lounge and waiting spaces. It is a modern statement with everyday performance.",
    keyFeatures: [
      "Soft lounge silhouette",
      "Premium visual styling",
      "Balanced everyday support",
      "Statement look for modern interiors",
    ],
  },

  {
    slug: "sigma-premium-moulded-chair",
    material: "Premium moulded shell",
    chairType: "Premium moulded chair",
    dimensions: "47 x 45 x 86 cm",
    weight: "5.8 kg",
    maxWeightCapacity: "130 kg",
    suitableUsage:
      "Premium seating, showrooms, modern lounge corners",
    indoorOutdoor: "Indoor use",
    careInstructions:
      "Dust lightly and clean with a damp cloth when needed.",
    longDescription:
      "The SIGMA Premium Moulded Chair is a signature seating piece that delivers premium comfort and a polished, sculpted finish. It is ideal for elevated spaces that demand both utility and visual charm.",
    keyFeatures: [
      "Premium moulded finish",
      "Modern statement design",
      "Comfort-first posture",
      "Built for stylish everyday performance",
    ],
  },
];

/* =========================================================
   FEATURED PRODUCTS
========================================================= */

export const featuredProducts: Product[] = [
  /* =======================================================
     PRODUCT 1
     COLOR IMAGES ARE ACTIVE
  ======================================================= */

  {
    id: 1,
    slug: "sigma-classic-moulded-chair",
    name: "SIGMA Classic Moulded Chair",
    description:
      "Classic comfort with a smooth sculptural silhouette built for homes and offices.",
    category: "Outdoor Furniture",

    image:
      "/images/product-1/product-1-blue.png",

    colorImages: {
      Blue:
        "/images/product-1/product-1-blue.png",
      Orange:
        "/images/product-1/product-1-orange.png",
      Red:
        "/images/product-1/product-1-red.png",
      White:
        "/images/product-1/product-1-white.png",
      Yellow:
        "/images/product-1/product-1-yellow.png",
    },

    price: 14500,
    rating: 4.8,
    code: "SIG-CH-001",
    stock: "In stock",

    colors: [
      {
        name: "Blue",
        value: "#16BFD8",
      },
      {
        name: "Orange",
        value: "#F97316",
      },
      {
        name: "Red",
        value: "#E34031",
      },
      {
        name: "White",
        value: "#F8F8F8",
      },
      {
        name: "Yellow",
        value: "#F6C000",
      },
    ],

    features: [
      "Premium moulded plastic",
      "Comfortable back support",
      "Rust-safe legs",
      "Easy maintenance",
    ],
  },

  /* =======================================================
     PRODUCT 2
     COLOR IMAGES CAN BE ADDED LATER
  ======================================================= */

  {
    id: 2,
    slug: "sigma-modern-plastic-chair",
    name: "SIGMA Modern Plastic Chair",
    description:
      "A crisp, contemporary seat designed for practical elegance in every space.",
    category: "Indoor Furniture",

    image:
      "/images/product-2/product-2-seagreen.png",
       colorImages: {
      Aqua:
        "/images/product-2/product-2-aqua.png",
      Blue:
        "/images/product-2/product-2-blue.png",
      Brown:
        "/images/product-2/product-2-brown.png",
      gray:
        "/images/product-2/product-2-gray.png",
      olive:
        "/images/product-2/product-2-olive.png",
         purple:
        "/images/product-2/product-2-purple.png",
      red:
        "/images/product-2/product-2-red.png",
      seagreen:
        "/images/product-2/product-2-seagreen.png",
          skin:
        "/images/product-2/product-2-skin.png",
      white:
        "/images/product-2/product-2-white.png",
   
    },

    price: 13200,
    rating: 4.7,
    code: "SIG-CH-002",
    stock: "In stock",

   colors: [
  {
    name: "aqua",
    value: "#00FFFF",
  },
  {
    name: "blue",
    value: "#0000FF",
  },
  {
    name: "brown",
    value: "#A52A2A",
  },
  {
    name: "grey",
    value: "#808080",
  },
  {
    name: "olive",
    value: "#808000",
  },
  {
    name: "purple",
    value: "#800080",
  },
  {
    name: "red",
    value: "#FF0000",
  },
  {
    name: "seagreen",
    value: "#2E8B57",
  },
  {
    name: "skin",
    value: "#F5CBA7",
  },
  {
    name: "white",
    value: "#FFFFFF",
  },
],

features: [
  "Lightweight design",
  "Weather-friendly build",
  "Clean modern finish",
  "Space-saving shape",
],
  
  },

  /* =======================================================
     PRODUCT 3
  ======================================================= */

  {
    id: 3,
    slug: "sigma-premium-garden-chair",
    name: "SIGMA Premium Garden Chair",
    description:
      "Relax outdoors in a chair crafted for comfort, durability, and style.",
    category: "Outdoor Furniture",

    image:
      "/images/product-3/product-3-red.jpeg",
       colorImages: {
      blue:
        "/images/product-3/product-3-blue.jpeg",
      brown:
        "/images/product-3/product-3-brown.jpeg",
      gray:
        "/images/product-3/product-3-gray.jpeg",
      purple:
        "/images/product-3/product-3-purple.jpeg",
      red:
        "/images/product-3/product-3-red.jpeg",
         seagreen:
        "/images/product-3/product-3-seagreen.jpeg",
      skin:
        "/images/product-3/product-3-skin.jpeg",
      white:
        "/images/product-3/product-3-white.jpeg",
      
   
    },


    price: 15800,
    rating: 4.9,
    code: "SIG-CH-003",
    stock: "In stock",
colors: [
  {
    name: "blue",
    value: "#0000FF",
  },
  {
    name: "brown",
    value: "#A52A2A",
  },
  {
    name: "gray",
    value: "#808080",
  },
  {
    name: "purple",
    value: "#800080",
  },
  {
    name: "red",
    value: "#FF0000",
  },
  {
    name: "seagreen",
    value: "#2E8B57",
  },
  {
    name: "skin",
    value: "#F5CBA7",
  },
  {
    name: "white",
    value: "#FFFFFF",
  },
],


    features: [
      "UV protected",
      "Weather resistant",
      "Comfortable contour",
      "Outdoor-ready frame",
    ],
  },

  /* =======================================================
     PRODUCT 4
  ======================================================= */

  {
    id: 4,
    slug: "sigma-comfort-arm-chair",
    name: "SIGMA Comfort Arm Chair",
    description:
      "Plush support and refined shaping bring extra comfort to everyday seating.",
    category: "Indoor Furniture",

    image:
      "/images/product-4/product-4-orange.png",
       colorImages: {
      blue:
        "/images/product-4/product-4-blue.png",
      orange:
        "/images/product-4/product-4-orange.png",
      red:
        "/images/product-4/product-4-red.png",
      yellow:
        "/images/product-4/product-4-yellow.png",
      
      
   
    },



    price: 16900,
    rating: 4.8,
    code: "SIG-CH-004",
    stock: "In stock",

    colors: [
  {
    name: "blue",
    value: "#0000FF",
  },
  {
    name: "orange",
    value: "#FFA500",
  },
  {
    name: "red",
    value: "#FF0000",
  },
  {
    name: "yellow",
    value: "#FFFF00",
  },
],

    features: [
      "Ergonomic armrests",
      "Soft curved seat",
      "Sturdy base",
      "Elegant profile",
    ],
  },

  /* =======================================================
     PRODUCT 5
  ======================================================= */

  {
    id: 5,
    slug: "sigma-elegant-dining-chair",
    name: "SIGMA Elegant Dining Chair",
    description:
      "A polished dining chair that blends style with comfort at the table.",
    category: "Indoor Furniture",

    image:
      "/images/product-5/product-5-rust.png",
        colorImages: {
      rust:
        "/images/product-5/product-5-rust.png",
      black:
        "/images/product-5/product-5-black.png",
      brown:
        "/images/product-5/product-5-brown.png",
      purple:
        "/images/product-5/product-5-purple.png",
         red:
        "/images/product-5/product-5-red.png",
      skin:
        "/images/product-5/product-5-skin.png",
      skyblue:
        "/images/product-5/product-5-skyblue.png",
          white:
        "/images/product-5/product-5-white.png",
      
      
   
    },


    price: 15100,
    rating: 4.7,
    code: "SIG-CH-005",
    stock: "In stock",


colors: [
  {
    name: "rust",
    value: "#B7410E",
  },
  {
    name: "black",
    value: "#000000",
  },
  {
    name: "brown",
    value: "#A52A2A",
  },
  {
    name: "purple",
    value: "#800080",
  },
  {
    name: "red",
    value: "#FF0000",
  },
  {
    name: "skin",
    value: "#F5CBA7",
  },
  {
    name: "skyblue",
    value: "#87CEEB",
  },
  {
    name: "white",
    value: "#FFFFFF",
  },
],
    features: [
      "Fine dining finish",
      "Stable frame",
      "Easy-clean surface",
      "Classy detailing",
    ],
  },

  /* =======================================================
     PRODUCT 6
  ======================================================= */

  {
    id: 6,
    slug: "sigma-executive-office-chair",
    name: "SIGMA Executive Office Chair",
    description:
      "Built for executive comfort with ergonomic support and professional presence.",
    category: "Office Furniture",

    image:
      "/images/products/chair-placeholder.svg",

    price: 21400,
    rating: 4.9,
    code: "SIG-CH-006",
    stock: "In stock",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Dark Green",
        value: "#14532D",
      },
      {
        name: "Olive Green",
        value: "#6B7280",
      },
      {
        name: "Maroon",
        value: "#7F1D1D",
      },
    ],

    features: [
      "Executive styling",
      "Breathable backrest",
      "High comfort",
      "Durable body",
    ],
  },

  /* =======================================================
     PRODUCT 7
  ======================================================= */

  {
    id: 7,
    slug: "sigma-heavy-duty-chair",
    name: "SIGMA Heavy Duty Chair",
    description:
      "A robust chair made to handle daily use with premium structure and comfort.",
    category: "Moulded Range",

    image:
      "/images/products/chair-placeholder.svg",

    price: 18600,
    rating: 4.8,
    code: "SIG-CH-007",
    stock: "In stock",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Grey",
        value: "#8F8F8F",
      },
      {
        name: "Brown",
        value: "#92400E",
      },
      {
        name: "Gold",
        value: "#D97706",
      },
    ],

    features: [
      "Heavy-duty support",
      "High load capacity",
      "Sturdy design",
      "Long lasting finish",
    ],
  },

  /* =======================================================
     PRODUCT 8
  ======================================================= */

  {
    id: 8,
    slug: "sigma-stylish-cafe-chair",
    name: "SIGMA Stylish Café Chair",
    description:
      "A compact café chair that adds a refined edge to social and professional spaces.",
    category: "Outdoor Furniture",

    image:
      "/images/products/chair-placeholder.svg",

    price: 12400,
    rating: 4.6,
    code: "SIG-CH-008",
    stock: "In stock",

    colors: [
      {
        name: "White",
        value: "#F7F4EE",
      },
      {
        name: "Silver",
        value: "#C7C8CA",
      },
      {
        name: "Blue",
        value: "#3B82F6",
      },
      {
        name: "Green",
        value: "#16A34A",
      },
    ],

    features: [
      "Compact footprint",
      "Modern café style",
      "Weather-friendly",
      "Stackable option",
    ],
  },

  /* =======================================================
     PRODUCT 9
  ======================================================= */

  {
    id: 9,
    slug: "sigma-outdoor-relax-chair",
    name: "SIGMA Outdoor Relax Chair",
    description:
      "Designed for breezy patios and peaceful corners with a laid-back silhouette.",
    category: "Outdoor Furniture",

    image:
      "/images/products/chair-placeholder.svg",

    price: 17300,
    rating: 4.8,
    code: "SIG-CH-009",
    stock: "In stock",

    colors: [
      {
        name: "Beige",
        value: "#E7D6B6",
      },
      {
        name: "Cream",
        value: "#F7E7C6",
      },
      {
        name: "Brown",
        value: "#92400E",
      },
      {
        name: "Orange",
        value: "#F97316",
      },
    ],

    features: [
      "Relaxed comfort",
      "Outdoor durability",
      "Easy-care body",
      "Contoured seat",
    ],
  },

  /* =======================================================
     PRODUCT 10
  ======================================================= */

  {
    id: 10,
    slug: "sigma-premium-visitor-chair",
    name: "SIGMA Premium Visitor Chair",
    description:
      "A welcoming guest chair that balances comfort and polished presentation.",
    category: "Office Furniture",

    image:
      "/images/products/chair-placeholder.svg",

    price: 13900,
    rating: 4.6,
    code: "SIG-CH-010",
    stock: "In stock",

    colors: [
      {
        name: "Grey",
        value: "#8F8F8F",
      },
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Navy Blue",
        value: "#1E3A8A",
      },
      {
        name: "Maroon",
        value: "#7F1D1D",
      },
    ],

    features: [
      "Guest-ready comfort",
      "Modern shape",
      "Durable shell",
      "Professional finish",
    ],
  },

  /* =======================================================
     PRODUCT 11
  ======================================================= */

  {
    id: 11,
    slug: "sigma-modern-study-chair",
    name: "SIGMA Modern Study Chair",
    description:
      "An updated study chair made for focused work and comfortable concentration.",
    category: "Kids Furniture",

    image:
      "/images/products/chair-placeholder.svg",

    price: 12800,
    rating: 4.7,
    code: "SIG-CH-011",
    stock: "In stock",

    colors: [
      {
        name: "Blue",
        value: "#3B82F6",
      },
      {
        name: "White",
        value: "#F7F4EE",
      },
      {
        name: "Pink",
        value: "#F472B6",
      },
      {
        name: "Grey",
        value: "#8F8F8F",
      },
    ],

    features: [
      "Study-friendly posture",
      "Compact footprint",
      "Easy to clean",
      "Fresh aesthetic",
    ],
  },

  /* =======================================================
     PRODUCT 12
  ======================================================= */

  {
    id: 12,
    slug: "sigma-deluxe-plastic-chair",
    name: "SIGMA Deluxe Plastic Chair",
    description:
      "A deluxe chair that pairs a refined look with lasting everyday resilience.",
    category: "Moulded Range",

    image:
      "/images/products/chair-placeholder.svg",

    price: 16200,
    rating: 4.8,
    code: "SIG-CH-012",
    stock: "In stock",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "White",
        value: "#F7F4EE",
      },
      {
        name: "Sky Blue",
        value: "#7DD3FC",
      },
      {
        name: "Royal Blue",
        value: "#2563EB",
      },
    ],

    features: [
      "Deluxe finish",
      "Balanced support",
      "Water-resistant shell",
      "Fast assembly",
    ],
  },

  /* =======================================================
     PRODUCT 13
  ======================================================= */

  {
    id: 13,
    slug: "sigma-strong-utility-chair",
    name: "SIGMA Strong Utility Chair",
    description:
      "A dependable utility chair that meets demanding spaces with strength and ease.",
    category: "Moulded Range",

    image:
      "/images/products/chair-placeholder.svg",

    price: 14700,
    rating: 4.7,
    code: "SIG-CH-013",
    stock: "In stock",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "Red",
        value: "#DC2626",
      },
      {
        name: "Olive Green",
        value: "#6B7280",
      },
      {
        name: "Silver",
        value: "#C7C8CA",
      },
    ],

    features: [
      "Utility-ready durability",
      "High resilience",
      "Easy maintenance",
      "Reliable structure",
    ],
  },

  /* =======================================================
     PRODUCT 14
  ======================================================= */

  {
    id: 14,
    slug: "sigma-contemporary-lounge-chair",
    name: "SIGMA Contemporary Lounge Chair",
    description:
      "A softly sculpted lounge chair that elevates both comfort and character.",
    category: "Indoor Furniture",

    image:
      "/images/products/chair-placeholder.svg",

    price: 18300,
    rating: 4.9,
    code: "SIG-CH-014",
    stock: "In stock",

    colors: [
      {
        name: "Cream",
        value: "#F7E7C6",
      },
      {
        name: "Grey",
        value: "#8F8F8F",
      },
      {
        name: "Gold",
        value: "#D97706",
      },
      {
        name: "Brown",
        value: "#92400E",
      },
    ],

    features: [
      "Soft lounge profile",
      "Elegant support",
      "Premium finish",
      "Statement design",
    ],
  },

  /* =======================================================
     PRODUCT 15
  ======================================================= */

  {
    id: 15,
    slug: "sigma-premium-moulded-chair",
    name: "SIGMA Premium Moulded Chair",
    description:
      "Premium moulding and refined comfort in a chair built to stand out.",
    category: "Moulded Range",

    image:
      "/images/products/chair-placeholder.svg",

    price: 17600,
    rating: 4.9,
    code: "SIG-CH-015",
    stock: "In stock",

    colors: [
      {
        name: "Black",
        value: "#111111",
      },
      {
        name: "White",
        value: "#F7F4EE",
      },
      {
        name: "Green",
        value: "#16A34A",
      },
      {
        name: "Purple",
        value: "#8B5CF6",
      },
    ],

    features: [
      "Premium moulded shell",
      "Balanced comfort",
      "Versatile styling",
      "Built to last",
    ],
  },
];
=======
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
>>>>>>> 3772676be083406e54fc030d52b4da2fb3972f4c
