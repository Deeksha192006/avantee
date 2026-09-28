export const productCategories = [
  {
    id: 'fabrics',
    title: 'Recycled Sustainable Fabrics',
    subtitle: 'High-performance recycled fabrics engineered for comfortable, durable and sustainable textile applications.'
  },
  {
    id: 'yarns',
    title: 'Recycled Sustainable Yarns',
    subtitle: 'GRS-certified recycled yarns engineered for knitting, wearing, melange and denim applications.'
  }
];

export const productsData = [
  // 1. RECYCLED SUSTAINABLE FABRICS
  {
    id: 'knit-fabrics',
    legacyId: 'prod-knit-fabrics',
    slug: 'knit-fabrics',
    category: 'fabrics',
    categoryName: 'Recycled Sustainable Fabrics',
    name: 'Knit Fabrics',
    tag: '100% GRS Certified • Soft & Elastic',
    denier: '180 to 320 GSM Circular Knit',
    cut: 'Width 60 / 68 Inches Rolls',
    image: '/images/fabric_stack_dark.png',
    desc: 'Recycled knit fabrics designed for comfortable, durable and sustainable textile applications.',
    bulletPoints: [
      '100% GRS & RCS Certified',
      'High Elasticity & Superior Stretch Recovery',
      'Zero Water Waste Dope-Dyeing Tech',
      'Ultra-Soft Premium Hand Feel',
      'Micro-Denier Recycled Cotton & Poly Blend'
    ],
    applications: ['Sustainable Hoodies & Sweatshirts', 'Eco T-Shirts & Polos', 'Activewear & Athleisure', 'Seamless Apparel'],
    specs: { Weight: '180 - 320 GSM', Elasticity: 'High Stretch Recovery', GRSStatus: '100% Certified', WaterSaved: '4,900 L / kg' }
  },
  {
    id: 'woven-fabrics',
    legacyId: 'prod-woven-fabrics',
    slug: 'woven-fabrics',
    category: 'fabrics',
    categoryName: 'Recycled Sustainable Fabrics',
    name: 'Woven Fabrics',
    tag: 'High Tensile • Precision Loom Weave',
    denier: '200 to 450 GSM Heavy Weave',
    cut: 'Width 58 / 60 Inches Rolls',
    image: '/images/eco_material_rolls.png',
    desc: 'Recycled woven fabrics developed for durable and versatile textile applications with a focus on sustainability.',
    bulletPoints: [
      'High Tensile & Tear Resistance',
      'Automated Precision Loom Weaving',
      '100% Traceable Recycled Material',
      'Crisp Executive & Tailored Finish',
      'Minimal Shrinkage & High Martindale Rubs'
    ],
    applications: ['Woven Apparel & Shirting', 'Suitings & Trousers', 'Eco Jeans & Denim Jackets', 'Industrial Canvas'],
    specs: { Weight: '200 - 450 GSM', TensileStrength: '1580 N Warp', GRSStatus: '100% Certified', Shrinkage: '< 1.8%' }
  },

  // 2. RECYCLED SUSTAINABLE YARNS
  {
    id: 'recycled-knit-yarn',
    legacyId: 'prod-knit-yarn',
    slug: 'recycled-knit-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Knit Yarn',
    tag: '100% GRS & RCS Certified',
    denier: 'Count Ne 20s to Ne 40s Knit Spin',
    cut: 'Branded Kraft Paper Band Spools',
    image: '/images/recycled_knit_yarn.jpg',
    desc: 'Recycled yarn designed for knitting applications, combining performance, consistency and sustainable production.',
    bulletPoints: [
      '100% GRS & RCS Certified',
      'Zero Water Waste Dope-Dyeing Tech',
      'Ultra-Soft Premium Hand Feel',
      'High Elasticity & Loop Stability',
      'Micro-Denier Staple Fiber Blend'
    ],
    applications: ['Sustainable Hoodies & Sweatshirts', 'Knitwear & T-Shirts', 'Activewear & Athleisure', 'Seamless Apparel'],
    specs: { Tenacity: '5.6 - 6.0 g/d', Elongation: '30% - 36%', GRSStatus: '100% Certified', WaterSaved: '4,800 L / kg' }
  },
  {
    id: 'recycled-wearing-yarn',
    legacyId: 'prod-weaving-yarn',
    slug: 'recycled-wearing-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Wearing Yarn',
    tag: 'High Tensile & Wear Resistance',
    denier: 'Count Ne 10s to Ne 36s Wear Spin',
    cut: 'Ring-Spun & Open-End Spools',
    image: '/images/recycled_weaving_yarn.jpg',
    desc: 'Recycled yarn suitable for wearing and apparel applications, offering reliable performance with a sustainable approach.',
    bulletPoints: [
      'High Tensile & Wear Resistance',
      'Optimal Warp & Weft Performance',
      '100% Traceable Recycled Material',
      'Consistent Uster Capacitive Testing',
      'Zero Water Waste Masterbatch Dyeing'
    ],
    applications: ['Woven Apparel & Shirting', 'Suitings & Trousers', 'Industrial Eco-Canvas', 'Sustainable Home Textiles'],
    specs: { TensileStrength: '1580 N Warp', TwistMultiplier: '3.9 - 4.3', GRSStatus: '100% Certified', WaterSaved: '5,100 L / kg' }
  },
  {
    id: 'recycled-melange-yarn',
    legacyId: 'prod-melange-yarn',
    slug: 'recycled-melange-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Melange Yarn',
    tag: 'Multi-Tonal Heather Color Palette',
    denier: 'Count Ne 16s to Ne 32s Heather Blend',
    cut: 'Precision Pre-Dyed Fiber Spools',
    image: '/images/recycled_melange_yarn.jpg',
    desc: 'Recycled melange yarn produced with blended colour effects for versatile and sustainable textile applications.',
    bulletPoints: [
      'Multi-Tonal Heather Color Palette',
      'Pre-Dyed Fiber Blending Tech',
      '100% Waterless Dyeing Process',
      'GRS Certified Recycled Cotton',
      'Soft Touch & Luxury Surface Finish'
    ],
    applications: ['Heather Knitwear & Sweaters', 'Casualwear & Fleece', 'Fashion Garments', 'Decorative Textiles'],
    specs: { ColorFastness: 'Grade 4.8+', BlendRatio: '80% Recycled Cotton / 20% Poly', GRSStatus: '100% Certified', WaterSaved: '5,000 L / kg' }
  },
  {
    id: 'recycled-denim-yarn',
    legacyId: 'prod-denim-yarn',
    slug: 'recycled-denim-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Denim Yarn',
    tag: 'Upcycled Post-Consumer Denim Waste',
    denier: 'Count Ne 6s to Ne 20s Indigo Slub',
    cut: 'Heavy Duty Ring Spun Cones',
    image: '/images/recycled_denim_yarn.jpg',
    desc: 'Recycled yarn developed for denim applications, supporting sustainable textile production through the reuse of materials.',
    bulletPoints: [
      'Upcycled Post-Consumer Denim Waste',
      'Authentic Slub & Texture Profile',
      'Deep Indigo Dope-Dyed Masterbatch',
      'High Structural Durability',
      '100% Circular Supply Chain'
    ],
    applications: ['Eco Jeans & Denim Jackets', 'Upcycled Denim Apparel', 'Heavy Canvas Bags & Accessories', 'Workwear & Streetwear'],
    specs: { SlubIndex: 'Authentic Vintage Slub', Tenacity: '5.2 g/d', IndigoFastness: 'Grade 4.5+', WaterSaved: '6,200 L / kg' }
  }
];

export const getProductBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase();
  return productsData.find(
    (p) =>
      p.slug.toLowerCase() === cleanSlug ||
      p.id.toLowerCase() === cleanSlug ||
      p.legacyId.toLowerCase() === cleanSlug
  );
};
