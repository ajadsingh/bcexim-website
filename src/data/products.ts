export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  applications: string[];
  packaging: string[];
  image: string;
  gallery?: { label: string; image: string }[];
  exportNote?: string;
}

export const products: Product[] = [
  {
    id: "onion-powder-flakes",
    name: "Onion Powder / Flakes",
    category: "Dehydrated Products",
    description:
      "Premium quality dehydrated onion available in powder and flakes form, sourced from the finest Indian onion varieties. Available in Red, White, and Pink onion variants, our dehydrated onion products retain the characteristic sharp aroma and rich flavor. Processed under strict hygiene standards using advanced dehydration technology to lock in taste and nutritional value.",
    specifications: [
      "Variants: Red Onion, White Onion, Pink Onion",
      "Forms: Powder (80-100 Mesh) / Flakes (3-6 mm)",
      "Moisture: Max 5%",
      "Color: Cream to Light Brown (Powder) / White to Light Yellow (Flakes)",
      "Purity: 99% min",
      "Shelf Life: 18-24 months",
      "Foreign Matter: Max 0.5%",
    ],
    applications: [
      "Soup and sauce mixes",
      "Seasoning and spice blends",
      "Ready-to-eat and ready-to-cook meals",
      "Snack foods and crackers",
      "Bakery products",
      "Fast food chains and catering",
      "Food processing industry",
    ],
    packaging: [
      "25 kg Kraft Paper Bags with Inner Liner",
      "20 kg Corrugated Cartons",
      "14 kg Kraft Bags",
      "Custom bulk packaging available",
      "Private labeling options",
    ],
    exportNote:
      "India is one of the world's leading exporters of dehydrated onion. Our onion powder and flakes meet EU, US FDA, and Middle East food safety standards.",
    image: "/images/products/onion-powder-export.png",
    gallery: [
      { label: "Onion Powder (Red & White)", image: "/images/products/onion-powder-export.png" },
      { label: "Red Onion Flakes & Minced", image: "/images/products/red-onion-flakes-export.png" },
      { label: "White Onion Flakes & Minced", image: "/images/products/white-onion-flakes-export.png" },
      { label: "Pink Onion Powder", image: "/images/products/pink-onion-powder-export.jpg" },
    ],
  },
  {
    id: "garlic-powder-flakes",
    name: "Garlic Powder / Flakes",
    category: "Dehydrated Products",
    description:
      "Pure dehydrated garlic available in powder and flakes form, made from premium quality fresh Indian garlic. Our dehydrated garlic products deliver consistent, authentic garlic flavor and aroma, free from additives and preservatives. Ideal for industrial food processing, retail seasoning, and export markets worldwide.",
    specifications: [
      "Forms: Powder (80-100 Mesh) / Flakes (3-8 mm)",
      "Moisture: Max 6%",
      "Color: Cream to Pale Yellow",
      "Purity: 99% min",
      "Allicin Content: High (Characteristic Pungent Garlic Flavor)",
      "Shelf Life: 18-24 months",
      "Foreign Matter: Max 0.5%",
    ],
    applications: [
      "Seasoning and spice blends",
      "Meat and poultry processing",
      "Bakery and bread products",
      "Sauce and condiment manufacturing",
      "Instant soups and noodles",
      "Salad dressings and marinades",
      "Snack seasoning",
    ],
    packaging: [
      "25 kg Kraft Paper Bags with Inner Liner",
      "20 kg Corrugated Cartons with Liner",
      "Aluminum Foil Bags (Various Sizes)",
      "Custom bulk packaging available",
      "Retail packaging on request",
    ],
    exportNote:
      "India is a major global supplier of dehydrated garlic. Our garlic products comply with EU Regulation (EC) No 396/2005, US FDA standards, and GCC food safety requirements.",
    image: "/images/products/glovanta-garlic-flakes.png",
    gallery: [
      { label: "Garlic Flakes & Minced", image: "/images/products/glovanta-garlic-flakes.png" },
      { label: "Garlic Powder (Fine Mesh)", image: "/images/products/glovanta-garlic-powder.png" },
      { label: "Dehydrated Garlic Flakes (Wizdom)", image: "/images/products/garlic-flakes-export.jpeg" },
    ],
  },
  {
    id: "psyllium-husk-powder",
    name: "Psyllium Husk & Powder",
    category: "Health & Wellness",
    description:
      "Premium quality Psyllium Husk (Isabgol) and Psyllium Husk Powder sourced from certified farms in Gujarat and Rajasthan — India's primary psyllium growing regions. Available in multiple purity grades from 85% to 99%, in organic and conventional forms, and with steam-sterilization options to meet strict pharmaceutical and food safety requirements of international markets.",
    specifications: [
      "Purity Grades: 99% (Pharma Grade), 98% (High Food Grade), 95% (Standard Food Grade), 85-90% (Industrial Grade)",
      "Swelling Index: 35-40 ml/g (Pharma Grade)",
      "Forms: Whole Husk (Flakes) / Powder (60-200 Mesh)",
      "Moisture: Max 12%",
      "Foreign Matter: Max 0.5%",
      "Ash Content: Max 4%",
      "Available Organic & Conventional",
      "Steam Sterilization Available",
    ],
    applications: [
      "Pharmaceutical tablet binders and fiber supplements",
      "Dietary fiber supplements and health drinks",
      "Gluten-free bakery and food products",
      "Binding, thickening, and stabilizing in processed foods",
      "Animal nutrition and feed industry",
      "Laxative and digestive health products",
      "Cereal and breakfast food manufacturing",
    ],
    packaging: [
      "25 kg PP Bags with Inner Liner",
      "40 kg Fiber Drums",
      "Custom bulk packaging available",
      "Organic certified available (NPOP / USDA NOP / EU Organic)",
      "Private labeling options",
    ],
    exportNote:
      "India supplies over 85% of the global psyllium demand. Our psyllium husk meets USP, BP, EP, FCC, and ACS pharmacopoeial standards and complies with USFDA, EU, and other major import regulations.",
    image: "/images/products/psyllium-main.webp",
    gallery: [
      { label: "Psyllium Husk (Whole Flakes / Isabgol)", image: "/images/products/psyllium-husk-export.webp" },
      { label: "Psyllium Husk Powder (Plantago ovata)", image: "/images/products/psyllium-powder-export.webp" },
      { label: "Psyllium Cleaned Husk Batch", image: "/images/products/psyllium-main.webp" },
    ],
  },
  {
    id: "guar-gum-powder",
    name: "Guar Gum Powder",
    category: "Industrial & Food Ingredients",
    description:
      "High-quality Guar Gum Powder processed from premium Indian guar seeds (Cyamopsis tetragonoloba), available in multiple grades for food, industrial, oil & gas, pharmaceutical, and cosmetic applications. India is the world's largest producer and exporter of guar gum, accounting for over 85% of global supply. Our guar gum delivers exceptional viscosity, water-binding, and thickening properties across all grades.",
    specifications: [
      "Grades: Food Grade / Industrial Grade / Oil & Gas Drilling Grade / Fast Hydration (FHG) / Pharma & Cosmetic Grade",
      "Mesh Size: 100-300 Mesh (varies by grade)",
      "Moisture: Max 12%",
      "Ash Content: Max 1.5%",
      "Protein: 4-6%",
      "Viscosity: 3500-5500 cps (1% solution, Brookfield)",
      "pH: 5.5-7.0",
      "Purity: 99% min",
    ],
    applications: [
      "Food thickener, stabilizer, and emulsifier (baked goods, dairy, sauces, beverages)",
      "Shale gas extraction and hydraulic fracturing fluids",
      "Paper making, textile printing, and mining",
      "Pharmaceutical tablet binders and personal care products",
      "Fast Hydration grade for continuous mixing operations",
      "Cosmetics, lotions, and toothpaste formulations",
      "Explosives and construction industry",
    ],
    packaging: [
      "25 kg PP Bags",
      "50 kg PP Bags",
      "Custom bulk packaging",
      "Jumbo Bags (Big Bags) available",
      "Private labeling on request",
    ],
    exportNote:
      "India accounts for over 85% of global guar gum exports. Our guar gum powder complies with food safety standards (FCC, E-412), REACH regulations, and oilfield industry specifications (API standards).",
    image: "/images/products/altrafine-guar-gum.jpg",
    gallery: [
      { label: "Guar Gum Powder (100-300 Mesh)", image: "/images/products/altrafine-guar-gum.jpg" },
      { label: "Fast Hydration Guar Gum (FHG)", image: "/images/products/guar-fast-hydration.jpg" },
      { label: "Industrial & Oilfield Grade", image: "/images/products/guar-gum-export.jpg" },
    ],
  },
];

export const productCategories = [
  "All",
  "Dehydrated Products",
  "Health & Wellness",
  "Industrial & Food Ingredients",
];
