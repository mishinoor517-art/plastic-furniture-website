import { BrickWallIcon } from "lucide-react";

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

export interface ColorOption {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  image: string;

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

export const navCategories: NavCategory[] = [
  {
    name: "Outdoor Furniture",
    slug: "outdoor-furniture",
    items: [
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

  {
    name: "Indoor Furniture",
    slug: "indoor-furniture",
    items: [
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

  {
    name: "Kids Furniture",
    slug: "kids-furniture",
    items: [
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

  {
    name: "Office Furniture",
    slug: "office-furniture",
    items: [
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

  {
    name: "Moulded Range",
    slug: "moulded-range",
    items: [
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
    ],
  },
];

/* =========================================================
   HERO SLIDES
========================================================= */

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    tagline: "Relax in Style",
    title: "MODERN LOUNGE CHAIR",
    description:
      "Designed for modern spaces, the Modern Lounge Chair combines elegant design with everyday comfort. Perfect for homes, cafés, lounges, and waiting areas.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

  {
    id: 2,
    image: "/images/hero-2.jpg",
    tagline: "Royal Comfort",
    title: "PREMIUM MOULDED ARM CHAIR",
    description:
      "Royal Comfort Chair is designed for durability, style, and everyday comfort. Made from high-quality moulded plastic, it is perfect for indoor and outdoor use in homes, cafes, and commercial spaces.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

  {
    id: 3,
    image: "/images/hero-3.jpg",
    tagline: "Ocean Theme",
    title: "OUTDOOR CHAIR SET",
    description:
      "Weather resistant, rustproof frame, comfortable cushions, and UV protected. Bring seaside freshness right to your patio with the Ocean Outdoor collection.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

  {
    id: 4,
    image: "/images/hero-6.jpg",
    tagline: "Modern Comfort. Everyday Style.",
    title: "NEXORA DINING CHAIR",
    description:
      "Crafted from premium virgin plastic for superior strength, weather-shielded and rust-free, with a smart stackable design that saves space and keeps every area clutter-free.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

  {
    id: 5,
    image: "/images/hero-5.jpg",
    tagline: "Elegance Arm Chair",
    title: "MOULDED FOR COMFORT",
    description:
      "Stylish, strong, and comfortable - perfect for any space, inside or out. Built to last with reinforced legs and back support.",
    exploreHref: "#categories",
    shopHref: "#products",
  },

  {
    id: 6,
    image: "/images/hero-7.jpg",
    tagline: "Learn. Play. Grow.",
    title: "KIDS STUDY TABLE & CHAIR",
    description:
      "Safe, durable, and made from child-friendly non-toxic material with smooth edges. Easy to assemble and easy to clean - the perfect size for kids aged 1 to 6 years.",
    exploreHref: "#categories",
    shopHref: "#products",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

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
    id: 5,
    name: "Kids Furniture",
    image: "/images/categories/kids-furniture.jpg",
    slug: "kids-furniture",
  },
];

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
      "/images/product-1/product-1-olive.png",

    colorImages: {
      olive:
        "/images/product-1/product-1-olive.png",
      blue:
        "/images/product-1/product-1-blue.png",
      brown:
        "/images/product-1/product-1-brown.png",
      purple:
        "/images/product-1/product-1-purple.png",
      skin:
        "/images/product-1/product-1-skin.png",
        white:
        "/images/product-1/product-1-white.png",
      gray:
        "/images/product-1/product-1-gray.png",
      
    },

    price: 14500,
    rating: 4.8,
    code: "SIG-CH-001",
    stock: "In stock",
colors: [
  {
    name: "olive",
    value: "#808000",
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
    name: "purple",
    value: "#800080",
  },
  {
    name: "skin",
    value: "#F5C6A5",
  },
  {
    name: "white",
    value: "#FFFFFF",
  },
  {
    name: "gray",
    value: "#808080",
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
      "/images/product-4/product-4-blue.png",
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
      "/images/product-6/product-6-red.png",
       colorImages: {
      aqua:
        "/images/product-6/product-6-aqua.png",
      blue:
        "/images/product-6/product-6-blue.png",
      orange:
        "/images/product-6/product-6-orange.png",
      purple:
        "/images/product-6/product-6-purple.png",
         red:
        "/images/product-6/product-6-red.png",
      skin:
        "/images/product-6/product-6-skin.png",
   
    },



    price: 21400,
    rating: 4.9,
    code: "SIG-CH-006",
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
    name: "orange",
    value: "#FFA500",
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
    value: "#F1C27D",
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
      "/images/product-7/product-7-brown.png",
       colorImages: {
      brown:
        "/images/product-7/product-7-brown.png",
      skyblue:
        "/images/product-7/product-7-skyblue.png",
      white:
        "/images/product-7/product-7-white.png",
      black:
        "/images/product-7/product-7-black.png",
         },


    price: 18600,
    rating: 4.8,
    code: "SIG-CH-007",
    stock: "In stock",

    colors: [
  {
    name: "brown",
    value: "#FF0000",
  },
  {
    name: "skyblue",
    value: "#00FFFF",
  },
  {
    name: "black",
    value: "#000000",
  }
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
      "/images/product-8/product-8-green.png",
      colorImages: {
      green:
        "/images/product-8/product-8-green.png",
      blue:
        "/images/product-8/product-8-blue.png",
      orange:
        "/images/product-8/product-8-orange.png",
      yellow:
        "/images/product-8/product-8-yellow.png",
         red:
        "/images/product-8/product-8-red.png",
      
    },



    price: 12400,
    rating: 4.6,
    code: "SIG-CH-008",
    stock: "In stock",
colors: [
  {
    name: "green",
    value: "#008000",
  },
  {
    name: "blue",
    value: "#0000FF",
  },
  {
    name: "orange",
    value: "#FFA500",
  },
  {
    name: "yellow",
    value: "#FFFF00",
  },
  {
    name: "red",
    value: "#FF0000",
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
      "/images/product-9/product-9-purple.png",
            colorImages: {
      purple:
        "/images/product-9/product-9-purple.png",
      red:
        "/images/product-9/product-9-red.png",
      orange:
        "/images/product-9/product-9-orange.png",
      blue:
        "/images/product-9/product-9-blue.png",
       aqua:
        "/images/product-9/product-9-aqua.png",
      
    },
    price: 17300,
    rating: 4.8,
    code: "SIG-CH-009",
    stock: "In stock",

   colors: [
  {
    name: "purple",
    value: "#800080",
  },
  {
    name: "red",
    value: "#FF0000",
  },
  {
    name: "orange",
    value: "#FFA500",
  },
  {
    name: "blue",
    value: "#0000FF",
  },
  {
    name: "aqua",
    value: "#00FFFF",
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
      "/images/product-10/product-10-yellow.jpeg",
         colorImages: {
      yellow:
        "/images/product-10/product-10-yellow.jpeg",
      blue:
        "/images/product-10/product-10-blue.jpeg",
      green:
        "/images/product-10/product-10-green.jpeg",
      red:
        "/images/product-10/product-10-red.jpeg",
       
      
    },

    price: 13900,
    rating: 4.6,
    code: "SIG-CH-010",
    stock: "In stock",

    colors: [
      {
        name: "yellow",
        value: "#8F8F8F",
      },
      {
        name: "blue",
        value: "#111111",
      },
      {
        name: "green",
        value: "#1E3A8A",
      },
      {
        name: "red",
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
      "/images/product-11/product-11-red.jpeg",
      colorImages: {
      red:
        "/images/product-11/product-11-red.jpeg",
      blue:
        "/images/product-11/product-11-blue.jpeg",
      
       
      
    },


    price: 12800,
    rating: 4.7,
    code: "SIG-CH-011",
    stock: "In stock",

    colors: [
  {
    name: "red",
    value: "#FF0000",
  },
  {
    name: "blue",
    value: "#0000FF",
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

/* =========================================================
   INTERACTIVE PRODUCT WHEEL
   Edit this array to change the 4 products shown in the
   interactive selector below the main product grid.
========================================================= */

export interface WheelProductSpec {
  label: string;
  value: string;
}

export interface WheelProduct {
  id: number;
  eyebrow: string;
  name: string;
  description: string;
  image: string;
  specs: WheelProductSpec[];
  price: number;
  ctaLabel: string;
  ctaHref: string;
}

export const wheelProducts: WheelProduct[] = [
  {
    id: 1,
    eyebrow: "Signature Pick",
    name: "SIGMA Classic Moulded Chair",
    description:
      "Classic comfort with a smooth sculptural silhouette built for homes and offices. A timeless shape that fits effortlessly into any room.",
    image: "/images/product-1/product-1-blue.png",
    specs: [
      { label: "Material", value: "Premium moulded plastic" },
      { label: "Capacity", value: "Up to 130 kg" },
      { label: "Finish", value: "Matte, rust-safe legs" },
      { label: "Best for", value: "Home & office use" },
    ],
    price: 14500,
    ctaLabel: "View Product",
    ctaHref: "/products/sigma-classic-moulded-chair",
  },
  {
    id: 2,
    eyebrow: "Everyday Favorite",
    name: "SIGMA Modern Plastic Chair",
    description:
      "A crisp, contemporary seat designed for practical elegance in every space, indoors or out. Lightweight yet built to last.",
    image: "/images/product-2/product-2-seagreen.png",
    specs: [
      { label: "Material", value: "Durable engineered plastic" },
      { label: "Capacity", value: "Up to 120 kg" },
      { label: "Finish", value: "Smooth, easy to clean" },
      { label: "Best for", value: "Indoor & outdoor use" },
    ],
    price: 12800,
    ctaLabel: "View Product",
    ctaHref: "/products/sigma-modern-plastic-chair",
  },
  {
    id: 3,
    eyebrow: "Guest Favorite",
    name: "SIGMA Heritage Armchair",
    description:
      "A statement armchair with a sculpted profile and confident stance, ideal for lounges, patios, and reception spaces.",
    image: "/images/product-3/product-3-red.jpeg",
    specs: [
      { label: "Material", value: "Reinforced moulded shell" },
      { label: "Capacity", value: "Up to 140 kg" },
      { label: "Finish", value: "Weather-resistant coating" },
      { label: "Best for", value: "Lounges & outdoor patios" },
    ],
    price: 16200,
    ctaLabel: "View Product",
    ctaHref: "/products/sigma-heritage-armchair",
  },
  {
    id: 4,
    eyebrow: "Editor's Choice",
    name: "SIGMA Studio Lounge Chair",
    description:
      "A relaxed, curved design built for comfort-first seating with a soft, contemporary finish that suits premium interiors.",
    image: "/images/product-5/product-5-rust.png",
    specs: [
      { label: "Material", value: "Premium moulded finish" },
      { label: "Capacity", value: "Up to 125 kg" },
      { label: "Finish", value: "Soft-touch surface" },
      { label: "Best for", value: "Showrooms & lounge corners" },
    ],
    price: 15400,
    ctaLabel: "View Product",
    ctaHref: "/products/sigma-studio-lounge-chair",
  },
];

/* =========================================================
   VIDEO SHOWCASE
   Replace `src` with your own video file/URL and `poster`
   with your own thumbnail image. Leave `src` empty to keep
   a slot ready without playing a placeholder video.
========================================================= */

export interface VideoShowcaseItem {
  id: number;
  title: string;
  description: string;
  poster: string;
  src: string;
}

export const videoShowcaseItems: VideoShowcaseItem[] = [
  {
    id: 1,
    title: "Crafted for Everyday Comfort",
    description: "A closer look at how our moulded chairs are designed and tested.",
    poster: "/images/product-1/product-1-blue.png",
    src: "",
  },
  {
    id: 2,
    title: "Inside the SIGMA Showroom",
    description: "Take a walkthrough of our latest indoor and outdoor collections.",
    poster: "/images/product-3/product-3-red.jpeg",
    src: "",
  },
  {
    id: 3,
    title: "Built to Last, Season After Season",
    description: "See how our furniture holds up to daily use, indoors and out.",
    poster: "/images/product-5/product-5-rust.png",
    src: "",
  },
];

/* =========================================================
   COMPANY LOGO MARQUEE
   Replace each entry with your own client/partner logo.
   Set `image` to a logo file path to use a real logo, or
   leave it empty to use the full-color placeholder badge.
========================================================= */

export interface CompanyLogo {
  id: number;
  name: string;
  url?: string;
  image?: string;
  colorFrom: string;
  colorTo: string;
}

export const companyLogos: CompanyLogo[] = [
  { id: 1, name: "Northgate Retail", url: "#", colorFrom: "#606C38", colorTo: "#8CA05A" },
  { id: 2, name: "Coastline Hotels", url: "#", colorFrom: "#C5A880", colorTo: "#E7CBA0" },
  { id: 3, name: "Urban Nest Interiors", url: "#", colorFrom: "#2563EB", colorTo: "#60A5FA" },
  { id: 4, name: "Greenfield Offices", url: "#", colorFrom: "#16A34A", colorTo: "#4ADE80" },
  { id: 5, name: "Marbella Living", url: "#", colorFrom: "#E34031", colorTo: "#F59E0B" },
  { id: 6, name: "Skyline Workspaces", url: "#", colorFrom: "#7C3AED", colorTo: "#C084FC" },
  { id: 7, name: "Riverside Cafes", url: "#", colorFrom: "#0891B2", colorTo: "#22D3EE" },
  { id: 8, name: "Heritage Resorts", url: "#", colorFrom: "#B45309", colorTo: "#F59E0B" },
];
