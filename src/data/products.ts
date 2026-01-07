import productNecklace from "@/assets/product-necklace.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  images: string[];
  category: string;
  badge?: string;
  description: string;
  details: string[];
  sizes: string[];
  materials: string;
  care: string;
}

export const products: Product[] = [
  // Necklaces
  {
    id: 1,
    name: "Golden Pearl Pendant",
    price: 1250,
    priceFormatted: "$1,250",
    image: productNecklace,
    images: [productNecklace, productNecklace, productNecklace],
    category: "Necklaces",
    badge: "New Arrival",
    description: "An exquisite pendant featuring a lustrous golden South Sea pearl, delicately suspended from an 18K gold chain. This timeless piece embodies understated luxury and sophisticated elegance.",
    details: [
      "18K solid gold chain",
      "10mm South Sea pearl",
      "Adjustable length: 16-18 inches",
      "Lobster clasp closure",
      "Comes in signature gift box"
    ],
    sizes: ["16 inch", "17 inch", "18 inch"],
    materials: "18K Gold, South Sea Pearl",
    care: "Store in a cool, dry place. Clean with soft cloth. Avoid contact with perfumes and chemicals."
  },
  {
    id: 5,
    name: "Diamond Tennis Necklace",
    price: 4850,
    priceFormatted: "$4,850",
    image: productNecklace,
    images: [productNecklace, productNecklace, productNecklace],
    category: "Necklaces",
    badge: "Bestseller",
    description: "A stunning tennis necklace featuring brilliant-cut diamonds set in 18K white gold. The epitome of timeless glamour for special occasions.",
    details: [
      "3.5 carat total weight",
      "VS clarity diamonds",
      "18K white gold setting",
      "Secure box clasp",
      "GIA certified"
    ],
    sizes: ["16 inch", "18 inch"],
    materials: "18K White Gold, Natural Diamonds",
    care: "Professional cleaning recommended. Store separately in padded box."
  },
  {
    id: 6,
    name: "Layered Gold Chain",
    price: 890,
    priceFormatted: "$890",
    image: productNecklace,
    images: [productNecklace, productNecklace, productNecklace],
    category: "Necklaces",
    description: "A versatile layered chain necklace in polished 14K gold. Perfect for everyday elegance or layering with other pieces.",
    details: [
      "14K solid gold",
      "Three-strand design",
      "Adjustable lengths",
      "Spring ring clasp",
      "Handcrafted finish"
    ],
    sizes: ["16-18 inch"],
    materials: "14K Gold",
    care: "Clean with warm soapy water. Dry thoroughly before storing."
  },
  
  // Earrings
  {
    id: 2,
    name: "Classic Gold Hoops",
    price: 890,
    priceFormatted: "$890",
    image: productEarrings,
    images: [productEarrings, productEarrings, productEarrings],
    category: "Earrings",
    description: "Timeless gold hoop earrings crafted from premium 14K gold. These versatile pieces transition seamlessly from day to evening, adding a touch of sophistication to any ensemble.",
    details: [
      "14K solid gold",
      "25mm diameter",
      "Hinged closure for easy wear",
      "Polished finish",
      "Hypoallergenic"
    ],
    sizes: ["Small (20mm)", "Medium (25mm)", "Large (30mm)"],
    materials: "14K Gold",
    care: "Polish regularly with a soft jewelry cloth. Store separately to avoid scratches."
  },
  {
    id: 7,
    name: "Diamond Stud Earrings",
    price: 2450,
    priceFormatted: "$2,450",
    image: productEarrings,
    images: [productEarrings, productEarrings, productEarrings],
    category: "Earrings",
    badge: "Bestseller",
    description: "Classic diamond studs featuring perfectly matched round brilliant diamonds in a timeless four-prong setting.",
    details: [
      "1 carat total weight",
      "VS1 clarity, G color",
      "18K white gold setting",
      "Butterfly back closure",
      "GIA certified"
    ],
    sizes: ["One Size"],
    materials: "18K White Gold, Natural Diamonds",
    care: "Professional cleaning recommended twice yearly."
  },
  {
    id: 8,
    name: "Pearl Drop Earrings",
    price: 675,
    priceFormatted: "$675",
    image: productEarrings,
    images: [productEarrings, productEarrings, productEarrings],
    category: "Earrings",
    badge: "New Arrival",
    description: "Elegant freshwater pearl drops suspended from delicate gold hooks. A sophisticated choice for any occasion.",
    details: [
      "9mm freshwater pearls",
      "14K gold hooks",
      "1.5 inch drop length",
      "AAA quality pearls",
      "Secure closure"
    ],
    sizes: ["One Size"],
    materials: "14K Gold, Freshwater Pearls",
    care: "Keep away from cosmetics and perfumes. Wipe with soft cloth after wear."
  },
  
  // Rings
  {
    id: 3,
    name: "Solitaire Diamond Ring",
    price: 3450,
    priceFormatted: "$3,450",
    image: productRing,
    images: [productRing, productRing, productRing],
    category: "Rings",
    badge: "Bestseller",
    description: "A breathtaking solitaire ring featuring a brilliant-cut diamond set in a classic four-prong setting. The epitome of timeless elegance, perfect for life's most precious moments.",
    details: [
      "0.75 carat brilliant-cut diamond",
      "VS1 clarity, F color grade",
      "18K white gold band",
      "GIA certified",
      "Includes certificate of authenticity"
    ],
    sizes: ["5", "6", "7", "8", "9"],
    materials: "18K White Gold, Natural Diamond",
    care: "Professional cleaning recommended twice yearly. Store in padded jewelry box."
  },
  {
    id: 9,
    name: "Eternity Band",
    price: 2890,
    priceFormatted: "$2,890",
    image: productRing,
    images: [productRing, productRing, productRing],
    category: "Rings",
    description: "A stunning eternity band featuring diamonds set all around in 18K gold. Symbol of everlasting love and commitment.",
    details: [
      "1.5 carat total weight",
      "Round brilliant diamonds",
      "Shared prong setting",
      "2.5mm band width",
      "Comfort fit design"
    ],
    sizes: ["5", "6", "7", "8"],
    materials: "18K Gold, Natural Diamonds",
    care: "Avoid wearing during physical activities. Clean regularly."
  },
  {
    id: 10,
    name: "Vintage Sapphire Ring",
    price: 4200,
    priceFormatted: "$4,200",
    image: productRing,
    images: [productRing, productRing, productRing],
    category: "Rings",
    badge: "Limited Edition",
    description: "An exquisite vintage-inspired ring featuring a Ceylon sapphire surrounded by a halo of diamonds. A piece of art for the discerning collector.",
    details: [
      "1.2 carat Ceylon sapphire",
      "0.5 carat diamond halo",
      "18K white gold setting",
      "Milgrain detailing",
      "Certified natural sapphire"
    ],
    sizes: ["5", "6", "7", "8", "9"],
    materials: "18K White Gold, Natural Sapphire, Diamonds",
    care: "Avoid ultrasonic cleaners. Professional cleaning recommended."
  },
  
  // Bracelets
  {
    id: 4,
    name: "Chain Link Bracelet",
    price: 675,
    priceFormatted: "$675",
    image: productBracelet,
    images: [productBracelet, productBracelet, productBracelet],
    category: "Bracelets",
    description: "A beautifully crafted chain link bracelet in polished 14K gold. Each link is precision-made for durability and comfort, creating a piece that becomes more precious with time.",
    details: [
      "14K solid gold",
      "Cable link design",
      "Toggle clasp closure",
      "Weight: 8.5 grams",
      "Handcrafted finish"
    ],
    sizes: ["6.5 inch", "7 inch", "7.5 inch", "8 inch"],
    materials: "14K Gold",
    care: "Clean with warm soapy water. Dry thoroughly before storing."
  },
  {
    id: 11,
    name: "Tennis Bracelet",
    price: 3650,
    priceFormatted: "$3,650",
    image: productBracelet,
    images: [productBracelet, productBracelet, productBracelet],
    category: "Bracelets",
    badge: "Bestseller",
    description: "A classic tennis bracelet featuring perfectly matched round diamonds in a secure four-prong setting. The ultimate statement of elegance.",
    details: [
      "3 carat total weight",
      "VS clarity diamonds",
      "18K white gold",
      "Hidden safety clasp",
      "53 diamonds"
    ],
    sizes: ["6.5 inch", "7 inch", "7.5 inch"],
    materials: "18K White Gold, Natural Diamonds",
    care: "Check prongs annually. Professional cleaning recommended."
  },
  {
    id: 12,
    name: "Bangle Bracelet",
    price: 1150,
    priceFormatted: "$1,150",
    image: productBracelet,
    images: [productBracelet, productBracelet, productBracelet],
    category: "Bracelets",
    badge: "New Arrival",
    description: "A sleek oval bangle in polished 18K gold. The perfect everyday essential that stacks beautifully with other pieces.",
    details: [
      "18K solid gold",
      "Oval shape for comfort",
      "Hinged opening",
      "High polish finish",
      "6mm width"
    ],
    sizes: ["Small", "Medium", "Large"],
    materials: "18K Gold",
    care: "Store in jewelry pouch. Clean with soft cloth."
  },
];

export const categories = ["Rings", "Necklaces", "Earrings", "Bracelets"] as const;
export type Category = typeof categories[number];

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getRelatedProducts = (id: number, limit = 4): Product[] => {
  const product = getProductById(id);
  if (!product) return products.slice(0, limit);
  
  // Get products from same category first, then fill with others
  const sameCategory = products.filter((p) => p.id !== id && p.category === product.category);
  const others = products.filter((p) => p.id !== id && p.category !== product.category);
  
  return [...sameCategory, ...others].slice(0, limit);
};

export const getFeaturedProducts = (limit = 4): Product[] => {
  // Return one from each category for variety
  const featured: Product[] = [];
  categories.forEach((category) => {
    const categoryProducts = getProductsByCategory(category);
    if (categoryProducts.length > 0) {
      featured.push(categoryProducts[0]);
    }
  });
  return featured.slice(0, limit);
};
