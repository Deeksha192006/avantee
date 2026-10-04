export const productCategories = [
  {
    id: 'yarns',
    title: 'Recycled Sustainable Yarns',
    subtitle: 'GRS-certified recycled yarns engineered for knitting, weaving, melange and denim applications.'
  },
  {
    id: 'fabrics',
    title: 'Recycled Sustainable Fabrics',
    subtitle: 'High-performance recycled fabrics engineered for comfortable, durable and sustainable textile applications.'
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
    specs: { Weight: '180 - 320 GSM', Elasticity: 'High Stretch Recovery', BlendRatio: '60% Recycled Cotton / 40% Recycled Poly', GRSStatus: '100% Certified', WaterSaved: '4,900 L / kg' }
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
    specs: { Weight: '200 - 450 GSM', TensileStrength: '1580 N Warp', BlendRatio: '65% Recycled Poly / 35% Recycled Cotton', GRSStatus: '100% Certified', Shrinkage: '< 1.8%' }
  },

  // 2. RECYCLED SUSTAINABLE YARNS
  {
    id: 'recycled-knitting-yarn',
    legacyId: 'recycled-knit-yarn',
    slug: 'recycled-knitting-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Knitting Yarn',
    tag: '100% GRS & RCS Certified • Soft & Elastic',
    denier: 'Count Ne 20s to Ne 40s Knit Spin',
    cut: 'Branded Kraft Paper Band Spools',
    image: '/images/recycled_knit_yarn.jpg',
    desc: 'Recycled yarn designed for circular and flat knitting applications, combining loop stability, exceptional consistency and eco-friendly manufacturing.',
    bulletPoints: [
      '100% GRS & RCS Certified',
      'Zero Water Waste Dope-Dyeing Tech',
      'Ultra-Soft Premium Hand Feel',
      'High Elasticity & Loop Stability',
      'Micro-Denier Staple Yarn Blend'
    ],
    applications: ['Sustainable Hoodies & Sweatshirts', 'Knitwear & T-Shirts', 'Activewear & Athleisure', 'Seamless Apparel'],
    specs: { Tenacity: '5.6 - 6.0 g/d', Elongation: '30% - 36%', BlendRatio: '60% Recycled Cotton / 40% Recycled Poly', GRSStatus: '100% Certified', WaterSaved: '4,800 L / kg' }
  },
  {
    id: 'recycled-weaving-yarn',
    legacyId: 'recycled-wearing-yarn',
    slug: 'recycled-weaving-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Weaving Yarn',
    tag: 'High Tensile & Wear Resistance',
    denier: 'Count Ne 10s to Ne 36s Weaving Spin',
    cut: 'High-Tenacity Open-End Spools',
    image: '/images/recycled_weaving_yarn.jpg',
    desc: 'Recycled yarn engineered for high-speed weaving looms, delivering maximum warp and weft tensile strength with minimal breakages.',
    bulletPoints: [
      'High Tensile & Wear Resistance',
      'Optimal Warp & Weft Performance',
      '100% Traceable Recycled Material',
      'Consistent Uster Capacitive Testing',
      'Zero Water Waste Masterbatch Dyeing'
    ],
    applications: ['Woven Apparel & Shirting', 'Suitings & Trousers', 'Industrial Eco-Canvas', 'Sustainable Home Textiles'],
    specs: { TensileStrength: '1580 N Warp', TwistMultiplier: '3.9 - 4.3', BlendRatio: '65% Recycled Poly / 35% Recycled Cotton', GRSStatus: '100% Certified', WaterSaved: '5,100 L / kg' }
  },
  {
    id: 'recycled-cotton-melange-yarn',
    legacyId: 'recycled-melange-yarn',
    slug: 'recycled-cotton-melange-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Cotton Melange Yarn',
    tag: 'Multi-Tonal Heather Color Palette',
    denier: 'Count Ne 16s to Ne 32s Heather Blend',
    cut: 'Precision Pre-Dyed Yarn Spools',
    image: '/images/recycled_melange_yarn.jpg',
    desc: 'Recycled cotton melange yarn produced with blended colour effects without wet-dyeing, creating rich heather textures for high-end fashion.',
    bulletPoints: [
      'Multi-Tonal Heather Color Palette',
      'Pre-Dyed Yarn Blending Tech',
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
    tag: 'Upcycled Pre-Consumer Denim Waste',
    denier: 'Count Ne 6s to Ne 20s Indigo Slub',
    cut: 'Heavy Duty Open-End Cones',
    image: '/images/recycled_denim_yarn.jpg',
    desc: 'Recycled yarn developed for denim applications, supporting 100% recycling through the reuse and upcycling of pre-consumer denim waste.',
    bulletPoints: [
      'Upcycled 100% Pre-Consumer Denim Waste',
      'Authentic Slub & Texture Profile',
      'Deep Indigo Dope-Dyed Masterbatch',
      'High Structural Durability',
      '100% Circular Supply Chain'
    ],
    applications: ['Eco Jeans & Denim Jackets', 'Upcycled Denim Apparel', 'Heavy Canvas Bags & Accessories', 'Workwear & Streetwear'],
    specs: { SlubIndex: 'Authentic Vintage Slub', Tenacity: '5.2 g/d', BlendRatio: '85% Upcycled Pre-Consumer Denim Cotton / 15% Poly', IndigoFastness: 'Grade 4.5+', WaterSaved: '6,200 L / kg' }
  },
  {
    id: 'recycled-speciality-blended-yarn',
    legacyId: 'prod-speciality-blended',
    slug: 'recycled-speciality-blended-yarn',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Recycled Speciality Blended Yarn',
    tag: 'High Performance Custom Engineered Blends',
    denier: 'Count Ne 12s to Ne 40s Speciality Spin',
    cut: 'Precision Wound Yarn Cones',
    image: '/images/yarn_cones_emerald.png',
    desc: 'Custom-engineered specialty blended yarns combining recycled materials with organic cotton, bamboo, or high-tenacity filament for specific functional requirements.',
    bulletPoints: [
      'Tailored Yarn Ratios to Buyer Specs',
      'Enhanced Tenacity & Abrasion Resistance',
      '100% Traceable Sustainable Feedstock',
      'Thermal & Moisture Regulating Blends',
      'Consistent Count & Low Imperfection Levels'
    ],
    applications: ['Technical Performance Wear', 'High-Strength Industrial Fabrics', 'Luxury Eco-Fashion', 'Flame Retardant & Antimicrobial Textiles'],
    specs: { Tenacity: '6.2 g/d', BlendRatio: 'Custom Tailored Blends (Cotton/PET/Viscose)', GRSStatus: '100% Certified', WaterSaved: '5,400 L / kg' }
  },
  {
    id: 'regenerated-blends-counts',
    legacyId: 'regenerated-fibers-blends-counts',
    slug: 'regenerated-blends-counts',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Regenerated Blends & Counts',
    tag: 'Precise Micron & Staple Selection',
    denier: 'Wide Count Range Ne 6s to 40s (1 & 2 Ply)',
    cut: 'Evenly Balanced Open-End Cones',
    image: '/images/yarn_cones_spools.png',
    desc: 'Superior regenerated yarn blends processed through multi-stage opening and carding to deliver optimum staple alignment, uniform count, and low hairiness.',
    bulletPoints: [
      'Multi-Stage Carding for Staple Alignment',
      'Wide Range of Counts for Weaving & Knitting',
      'Even Ply Consistency & Low Hairiness',
      'Certified OEKO-TEX & GRS Compliant',
      'High Cost Efficiency with Premium Quality'
    ],
    applications: ['Single & Double Jersey Knits', 'Rib Knits & Terry Fabrics', 'Heavy Twills & Drill Fabrics', 'Carpets & Home Furnishings'],
    specs: { CountRange: 'Ne 6s to 40s (Single & Double Ply)', BlendRatio: 'Multi-Polymer Regenerated Matrix', UsterCV: '< 13.5%', GRSStatus: '100% Certified', WaterSaved: '5,800 L / kg' }
  },
  {
    id: 'colored-yarn-shades',
    legacyId: 'prod-colored-yarn-shades',
    slug: 'colored-yarn-shades',
    category: 'yarns',
    categoryName: 'Recycled Sustainable Yarns',
    name: 'Colored Yarn Shades',
    tag: 'Waterless Dope-Dyed 150+ Shades Palette',
    denier: 'Count Ne 10s to Ne 36s Dyed Palette',
    cut: 'Color-Coded Masterbatch Cones',
    image: '/images/yarn_balls_pastel.jpg',
    desc: 'Extensive portfolio of 150+ vibrant, consistent colored yarn shades created through dope-dying and pre-dyed blending without toxic effluent water discharge.',
    bulletPoints: [
      'Over 150 Standard & Custom Pantone Shades',
      'Waterless Dope-Dyed Sustainable Process',
      'Superior Color Fastness to Washing & Light',
      'Zero Lot-to-Lot Shade Variation',
      'No Chemical Bleaching or Toxic Effluent'
    ],
    applications: ['Color-Blocked Apparel', 'Jacquard & Pattern Knits', 'Striped Fabrics & Polo Shirts', 'Home Furnishings & Upholstery'],
    specs: { ShadePalette: '150+ Shades Palette', ColorFastness: 'Grade 5.0', BlendRatio: '70% Recycled Cotton / 30% Poly', GRSStatus: '100% Certified', WaterSaved: '6,500 L / kg' }
  }
];

export const getProductBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  return productsData.find(
    (p) =>
      p.slug.toLowerCase() === cleanSlug ||
      p.id.toLowerCase() === cleanSlug ||
      (p.legacyId && p.legacyId.toLowerCase() === cleanSlug) ||
      (cleanSlug === 'recycled-knit-yarn' && p.slug === 'recycled-knitting-yarn') ||
      (cleanSlug === 'recycled-wearing-yarn' && p.slug === 'recycled-weaving-yarn') ||
      (cleanSlug === 'recycled-melange-yarn' && p.slug === 'recycled-cotton-melange-yarn') ||
      (cleanSlug === 'regenerated-fibers-blends-counts' && p.slug === 'regenerated-blends-counts')
  );
};

