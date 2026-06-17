export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  applications: string[];
  packaging: string[];
  image: string; // placeholder gradient
}

export const products: Product[] = [
  {
    id: "red-chilli-powder",
    name: "Red Chilli Powder",
    category: "Spices",
    description:
      "Premium quality red chilli powder sourced from the finest Indian chillies, known for their vibrant color, pungent aroma, and rich flavor. Our chilli powder is processed under strict hygiene standards to retain maximum potency and freshness.",
    specifications: [
      "Moisture: Max 10%",
      "Color: Deep Red (ASTA 60-80)",
      "Heat Level: 30,000-50,000 SHU",
      "Ash Content: Max 8%",
      "Particle Size: 40-80 Mesh",
    ],
    applications: [
      "Curries and gravies",
      "Snack seasonings",
      "Marinades and sauces",
      "Processed food industry",
    ],
    packaging: [
      "25 kg PP Bags",
      "Custom bulk packaging available",
      "Private labeling options",
    ],
    image: "linear-gradient(135deg, #dc2626, #991b1b)",
  },
  {
    id: "red-chilli-flakes",
    name: "Red Chilli Flakes",
    category: "Spices",
    description:
      "Crushed dried red chillies offering a bold, fiery kick and eye-catching texture. Ideal for pizza, pasta, and a wide range of culinary applications. Carefully dried and processed to preserve essential oils and flavor.",
    specifications: [
      "Moisture: Max 8%",
      "Flake Size: 3-6 mm",
      "Heat Level: 30,000-45,000 SHU",
      "Color: Bright Red",
      "Purity: 99% min",
    ],
    applications: [
      "Pizza and pasta toppings",
      "Asian cuisine",
      "Seasoning blends",
      "Food service industry",
    ],
    packaging: [
      "10 kg, 25 kg PP Bags",
      "Custom size available",
      "Retail packaging available",
    ],
    image: "linear-gradient(135deg, #ea580c, #c2410c)",
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices",
    description:
      "High-curcumin turmeric powder from Indian-grown turmeric roots. Known as the golden spice, it offers exceptional color, medicinal properties, and a warm, earthy flavor. Processed in ISO-certified facilities.",
    specifications: [
      "Curcumin Content: 2.5% - 5%",
      "Moisture: Max 8%",
      "Particle Size: 60-80 Mesh",
      "Color: Bright Yellow-Orange",
      "Purity: 99.5% min",
    ],
    applications: [
      "Curry powder blends",
      "Health supplements",
      "Natural food coloring",
      "Pharmaceutical industry",
      "Cosmetics",
    ],
    packaging: [
      "25 kg PP Bags with Liner",
      "10 kg Cartons",
      "Organic certified available",
    ],
    image: "linear-gradient(135deg, #f59e0b, #b45309)",
  },
  {
    id: "dried-turmeric",
    name: "Dried Turmeric",
    category: "Spices",
    description:
      "Whole dried turmeric fingers sourced from the finest Indian turmeric varieties including Erode, Nizamabad, and Salem turmeric. Selected for high curcumin content and superior color value.",
    specifications: [
      "Variety: Finger/Bulb",
      "Curcumin: 2.5% - 5%",
      "Moisture: Max 10%",
      "Foreign Matter: Max 1%",
      "Defective: Max 3%",
    ],
    applications: [
      "Grinding for powder",
      "Direct culinary use",
      "Herbal medicine",
      "Oleoresin extraction",
    ],
    packaging: [
      "50 kg Jute Bags",
      "25 kg PP Bags",
      "Custom packing available",
    ],
    image: "linear-gradient(135deg, #d97706, #92400e)",
  },
  {
    id: "dehydrated-onion-powder",
    name: "Dehydrated Onion Powder",
    category: "Dehydrated Products",
    description:
      "Made from premium quality Indian onions, dehydrated and ground to a fine powder. Retains the characteristic onion flavor and aroma, offering convenience and long shelf life without compromising on taste.",
    specifications: [
      "Moisture: Max 5%",
      "Particle Size: 80-100 Mesh",
      "Color: Cream to Light Brown",
      "Flavor: Characteristic Onion",
      "Shelf Life: 18 months",
    ],
    applications: [
      "Soup and sauce mixes",
      "Seasoning blends",
      "Ready-to-eat meals",
      "Snack foods",
      "Bakery products",
    ],
    packaging: [
      "25 kg Kraft Paper Bags with Liner",
      "20 kg Cartons",
      "Custom bulk available",
    ],
    image: "linear-gradient(135deg, #d4a574, #b8860b)",
  },
  {
    id: "dehydrated-garlic-powder",
    name: "Dehydrated Garlic Powder",
    category: "Dehydrated Products",
    description:
      "Pure garlic powder made from premium dehydrated garlic cloves. Offers consistent garlic flavor with the convenience of powder form. Free from additives and preservatives, ideal for industrial food processing.",
    specifications: [
      "Moisture: Max 6%",
      "Particle Size: 80-100 Mesh",
      "Color: Cream to Pale Yellow",
      "Flavor: Pungent Garlic",
      "Shelf Life: 18 months",
    ],
    applications: [
      "Seasoning and spices",
      "Meat processing",
      "Bakery products",
      "Sauce manufacturing",
      "Snack seasoning",
    ],
    packaging: [
      "25 kg Kraft Paper Bags",
      "Aluminum foil bags",
      "Custom packaging",
    ],
    image: "linear-gradient(135deg, #ebe3d5, #c4b5a0)",
  },
  {
    id: "dehydrated-garlic-flakes",
    name: "Dehydrated Garlic Flakes",
    category: "Dehydrated Products",
    description:
      "Crisp, aromatic dehydrated garlic flakes made from fresh Indian garlic. These flakes rehydrate beautifully and deliver authentic garlic taste in soups, sauces, and prepared foods. Ideal for both retail and industrial use.",
    specifications: [
      "Moisture: Max 6%",
      "Flake Size: 3-8 mm",
      "Color: Cream to Pale Yellow",
      "Flavor: Characteristic Garlic",
      "Shelf Life: 18 months",
    ],
    applications: [
      "Instant soups and noodles",
      "Salad dressings",
      "Seasoning blends",
      "Processed meats",
      "Ready meals",
    ],
    packaging: [
      "20 kg Cartons with Liner",
      "14 kg Kraft Bags",
      "Retail packs available",
    ],
    image: "linear-gradient(135deg, #f3e5d8, #d4c3b3)",
  },
  {
    id: "dried-onions",
    name: "Dried / Dehydrated Onions",
    category: "Dehydrated Products",
    description:
      "Dehydrated onion in various forms — kibbled, minced, chopped, and flakes. Made from fresh, carefully selected Indian onions using advanced dehydration technology to lock in flavor, aroma, and nutritional value.",
    specifications: [
      "Forms: Kibbled, Minced, Chopped, Flakes",
      "Moisture: Max 5%",
      "Color: White to Cream",
      "Flavor: Characteristic Onion",
      "Shelf Life: 18 months",
    ],
    applications: [
      "Food processing industry",
      "Soup and gravy mixes",
      "Ready-to-cook meals",
      "Fast food chains",
      "Canteen and catering",
    ],
    packaging: [
      "14 kg Kraft Bags",
      "20 kg Cartons",
      "Custom sizes available",
    ],
    image: "linear-gradient(135deg, #e8d5b7, #c9a96e)",
  },
  {
    id: "dried-ginger",
    name: "Dried Ginger (Bleached & Unbleached)",
    category: "Dehydrated Products",
    description:
      "Premium dried ginger available in both bleached and unbleached varieties. Sourced from the finest Indian ginger-growing regions, our dried ginger retains its characteristic pungent aroma and medicinal properties.",
    specifications: [
      "Type: Bleached / Unbleached",
      "Moisture: Max 10%",
      "Volatile Oil: Min 1.5%",
      "Fiber Content: Max 8%",
      "Clean, Sound, Merchantable Quality",
    ],
    applications: [
      "Spice blends and masalas",
      "Herbal tea and beverages",
      "Pharmaceuticals",
      "Bakery products",
      "Confectionery",
    ],
    packaging: [
      "50 kg Jute Bags",
      "25 kg PP Bags",
      "Vacuum packed options",
    ],
    image: "linear-gradient(135deg, #d4a853, #8b7355)",
  },
  {
    id: "jaggery",
    name: "Jaggery",
    category: "Natural Sweeteners",
    description:
      "Traditional Indian natural sweetener made from pure sugarcane juice. Our jaggery is unrefined, chemical-free, and rich in minerals. Available in solid block form with a characteristic golden-brown color and distinct caramel flavor.",
    specifications: [
      "Form: Solid Blocks",
      "Color: Golden Brown to Dark Brown",
      "Sucrose: 65-85%",
      "Moisture: Max 4%",
      "Insoluble Matter: Max 0.2%",
    ],
    applications: [
      "Traditional Indian sweets",
      "Natural sweetening agent",
      "Confectionery industry",
      "Beverages",
      "Health foods",
    ],
    packaging: [
      "30 kg Cartons",
      "500g - 1 kg Consumer Packs",
      "Custom bulk packing",
    ],
    image: "linear-gradient(135deg, #8B4513, #A0522D)",
  },
  {
    id: "jaggery-powder",
    name: "Jaggery Powder",
    category: "Natural Sweeteners",
    description:
      "Convenient powdered form of traditional jaggery, offering the same rich, caramel-like sweetness in an easy-to-use format. Perfect for baking, beverages, and processed foods. No additives, fully natural.",
    specifications: [
      "Form: Fine Powder / Granules",
      "Color: Golden to Light Brown",
      "Moisture: Max 2%",
      "Particle Size: 40-60 Mesh",
      "Shelf Life: 12 months",
    ],
    applications: [
      "Bakery and confectionery",
      "Instant beverage mixes",
      "Health supplements",
      "Dessert toppings",
      "Industrial food processing",
    ],
    packaging: [
      "25 kg PP Bags with Liner",
      "10 kg Cartons",
      "Retail pouches available",
    ],
    image: "linear-gradient(135deg, #a0724a, #754c2a)",
  },
  {
    id: "ginger-garlic-paste",
    name: "Ginger Garlic Paste",
    category: "Pastes",
    description:
      "Ready-to-use ginger garlic paste made from premium fresh ginger and garlic in the perfect ratio. An essential base for Indian cooking, processed under hygienic conditions to ensure the best flavor and extended shelf life.",
    specifications: [
      "Ratio: 40% Ginger, 60% Garlic",
      "pH: 4.0 - 4.5",
      "Brix: 28-32",
      "Shelf Life: 12 months",
      "Preservative: Natural / As requested",
    ],
    applications: [
      "Indian and Asian cuisine base",
      "Restaurant and catering",
      "Food processing industry",
      "Marinades and sauces",
      "Ready-to-cook meals",
    ],
    packaging: [
      "1 kg, 5 kg Plastic Jars",
      "10 kg Buckets",
      "Aseptic bags for bulk export",
    ],
    image: "linear-gradient(135deg, #c5a565, #8b7d3c)",
  },
  {
    id: "banana-powder",
    name: "Banana Powder",
    category: "Fruit Powders",
    description:
      "Natural banana powder made from ripe Indian bananas through a gentle dehydration process. Retains the natural sweetness, flavor, and nutritional benefits of fresh bananas. Ideal for smoothies, baking, and baby food.",
    specifications: [
      "Moisture: Max 5%",
      "Color: Cream to Pale Yellow",
      "Particle Size: 80-100 Mesh",
      "Flavor: Natural Banana",
      "Shelf Life: 12 months",
    ],
    applications: [
      "Baby food and nutrition",
      "Smoothies and shakes",
      "Bakery products",
      "Ice cream and desserts",
      "Health supplements",
    ],
    packaging: [
      "25 kg Kraft Paper Bags",
      "Aluminum foil bags",
      "Custom retail packs",
    ],
    image: "linear-gradient(135deg, #f5e6b8, #d4c380)",
  },
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    category: "Superfoods",
    description:
      "Nutrient-dense moringa leaf powder (also known as drumstick leaf powder) sourced from organically grown moringa trees. Rich in vitamins, minerals, and antioxidants. A true superfood for the health-conscious global market.",
    specifications: [
      "Part: Dried Leaf Powder",
      "Moisture: Max 7%",
      "Protein: Min 25%",
      "Particle Size: 80-100 Mesh",
      "Color: Rich Green",
    ],
    applications: [
      "Dietary supplements",
      "Green smoothies",
      "Energy bars",
      "Herbal tea blends",
      "Cosmetics and skincare",
    ],
    packaging: [
      "25 kg Kraft Bags with Liner",
      "10 kg Aluminum Foil Bags",
      "Organic certified available",
    ],
    image: "linear-gradient(135deg, #166534, #14532d)",
  },
  {
    id: "khajur-powder",
    name: "Khajur Powder (Date Powder)",
    category: "Natural Sweeteners",
    description:
      "Pure date powder made from premium Indian dates (khajur). A natural, unrefined sweetener packed with fiber, potassium, and antioxidants. An excellent sugar alternative for health-conscious consumers and the natural foods industry.",
    specifications: [
      "Moisture: Max 5%",
      "Natural Sugar: 60-70%",
      "Fiber Content: 8-10%",
      "Particle Size: 60-80 Mesh",
      "Color: Dark Brown",
    ],
    applications: [
      "Natural sweetener replacement",
      "Energy bars and snacks",
      "Bakery and desserts",
      "Smoothies and shakes",
      "Infant nutrition",
    ],
    packaging: [
      "25 kg PP Bags with Liner",
      "10 kg Aluminum Foil Bags",
      "Consumer packs on request",
    ],
    image: "linear-gradient(135deg, #5c3317, #3e1f0c)",
  },
];

export const productCategories = [
  "All",
  "Spices",
  "Dehydrated Products",
  "Natural Sweeteners",
  "Pastes",
  "Fruit Powders",
  "Superfoods",
];
