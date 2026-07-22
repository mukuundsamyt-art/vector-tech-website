export interface ProductItem {
  title: string;
  detail: string;
}

export interface Product {
  name: string;
  description: string;
  items: ProductItem[];
}

export interface ProductCategoryData {
  slug: string;
  tag: string;
  title: string;
  intro: string;
  products: Product[];
}

export const productCategories: Record<string, ProductCategoryData> = {
  'co2-laser-cutting': {
    slug: 'co2-laser-cutting',
    tag: 'CO2 LASER CUTTING',
    title: 'CO2 Laser Cutting Products',
    intro: 'Precision-cut and engraved pieces produced on our CO2 laser systems — clean edges, fine details, zero post-processing.',
    products: [
      {
        name: 'Acrylic Nameplates',
        description: 'Precision-cut acrylic nameplates with engraved detailing for offices and storefronts.',
        items: [
          { title: 'Desk Nameplates', detail: 'Custom text and logos, multiple thicknesses' },
          { title: 'Door Signage Plates', detail: 'Wall-mount ready, engraved or cut-through letters' },
          { title: 'Wall-Mounted Plates', detail: 'Full-size branded signage panels' },
        ],
      },
      {
        name: 'Crystal Awards & Trophies',
        description: 'Laser-engraved crystal pieces for corporate recognition and events.',
        items: [
          { title: 'Corporate Award Blocks', detail: 'Deep-engraved logos and text on optical crystal' },
          { title: 'Event Trophies', detail: 'Custom shapes, pillar or dome crystal forms' },
          { title: 'Custom Engraved Plaques', detail: 'Mixed crystal and acrylic plaques' },
        ],
      },
      {
        name: 'Leather Personalised Goods',
        description: 'Laser-cut and engraved leather accessories with custom branding.',
        items: [
          { title: 'Engraved Wallets', detail: 'Logo and monogram engraving on genuine leather' },
          { title: 'Branded Keychains', detail: 'Cut to custom shape, engraved detail' },
          { title: 'Custom Leather Tags', detail: 'Product tags, luggage labels, retail hangtags' },
        ],
      },
    ],
  },
  'cnc-machining': {
    slug: 'cnc-machining',
    tag: 'CNC MACHINING',
    title: 'CNC Machining Products',
    intro: 'Computer-controlled cuts and carvings on wood, composites, and acrylic — built for consistent, repeatable output at any volume.',
    products: [
      {
        name: 'Decorative Wall Panels',
        description: 'CNC-carved wood and WPC panels for interior feature walls and architectural accents.',
        items: [
          { title: 'Geometric Relief Panels', detail: 'Repeating 3D carved patterns on MDF or wood' },
          { title: 'Branded Logo Panels', detail: 'Company logos in relief, suitable for reception walls' },
          { title: 'Lattice Divider Screens', detail: 'Cut-through lattice patterns for partition screens' },
        ],
      },
      {
        name: 'Signage Bases & Plinths',
        description: 'Machined ACP and acrylic signage substrates for retail, wayfinding, and branding.',
        items: [
          { title: 'ACP Panel Fascias', detail: 'Routed and profiled aluminium composite sign faces' },
          { title: 'Acrylic Letter Bases', detail: 'Precision-cut mounting plates for 3D letters' },
          { title: 'Freestanding Sign Plinths', detail: 'CNC-cut MDF or WPC bases, paint-ready' },
        ],
      },
      {
        name: 'Custom Furniture Panels',
        description: 'Profiled wood and WPC panels for cabinetry, furniture fronts, and millwork.',
        items: [
          { title: 'Cabinet Door Fronts', detail: 'Routed profiles, flush or raised panel styles' },
          { title: 'Shelving Brackets', detail: 'Structural and decorative CNC-cut brackets' },
          { title: 'Table Edge Profiling', detail: 'Consistent edge profiles across full production runs' },
        ],
      },
    ],
  },
  'co2-marking': {
    slug: 'co2-marking',
    tag: 'CO2 MARKING',
    title: 'CO2 Marking Products',
    intro: 'Permanent, high-contrast marks on industrial and consumer materials — resistant to wear, chemicals, and time.',
    products: [
      {
        name: 'Bottle Branding Kits',
        description: 'Permanently marked bottles for product branding, batch coding, and retail identity.',
        items: [
          { title: 'Logo-Marked Glass Bottles', detail: 'Deep surface marking, no ink required' },
          { title: 'Batch-Coded Containers', detail: 'Serial and date codes on plastic and glass' },
          { title: 'Branded PET Bottles', detail: 'PVC and PET surfaces, permanent mark' },
        ],
      },
      {
        name: 'Stainless Steel Nameplates',
        description: 'Industrial-grade SS plates marked with logos, specs, and asset codes.',
        items: [
          { title: 'Machine Asset Tags', detail: 'Equipment ID plates with barcodes and QR' },
          { title: 'Product Rating Plates', detail: 'Electrical and mechanical spec plates' },
          { title: 'Branded SS Panels', detail: 'Corporate ID plates for machinery and enclosures' },
        ],
      },
      {
        name: 'Acrylic Branding Sets',
        description: 'Surface-marked acrylic pieces for retail, corporate, and display use.',
        items: [
          { title: 'Frosted Logo Plates', detail: 'Acrylic panels with depth-marked frosted logos' },
          { title: 'Retail Price Tags', detail: 'Durable marked acrylic swing tags' },
          { title: 'Display Header Boards', detail: 'Marked headers for retail shelving and POS' },
        ],
      },
    ],
  },
  'neon-signages': {
    slug: 'neon-signages',
    tag: 'LED NEON',
    title: 'Neon Signage Products',
    intro: 'Hand-crafted LED neon signs for every space — built to exact specification, every colour, every shape.',
    products: [
      {
        name: 'Business Logo Signs',
        description: 'Custom LED neon reproductions of brand logos for storefronts and reception areas.',
        items: [
          { title: 'Storefront Sign Boards', detail: 'Weatherproof, full-colour neon for shopfronts' },
          { title: 'Reception Wall Signs', detail: 'Backlit logo signs for corporate lobbies' },
          { title: 'Brand Identity Pieces', detail: 'Multi-element neon brand installations' },
        ],
      },
      {
        name: 'Decorative Wall Neons',
        description: 'Statement interior neon pieces for homes, hospitality, and event spaces.',
        items: [
          { title: 'Quote and Phrase Signs', detail: 'Custom text in script or block letter neon' },
          { title: 'Abstract Shape Neons', detail: 'Geometric and organic shapes in any colour' },
          { title: 'Themed Decor Pieces', detail: 'Bespoke neon for restaurants, bars, and studios' },
        ],
      },
      {
        name: 'Event Installation Pieces',
        description: 'Large-format LED neon installations for weddings, activations, and brand events.',
        items: [
          { title: 'Backdrop Neon Frames', detail: 'Floor-standing or wall-mounted event backdrops' },
          { title: 'Stage and Set Neons', detail: 'High-brightness neon for stage productions' },
          { title: 'Activation Neon Props', detail: 'Brand-activation neon props with custom base' },
        ],
      },
    ],
  },
  'trading-fabrication': {
    slug: 'trading-fabrication',
    tag: 'ACRYLIC FABRICATION',
    title: 'Trading & Fabrication Products',
    intro: 'In-house fabricated acrylic products and sheet supply — built to your dimensions, finish, and quantity.',
    products: [
      {
        name: 'Retail Display Stands',
        description: 'Custom acrylic display stands for product showcasing, POS, and visual merchandising.',
        items: [
          { title: 'Tiered Product Risers', detail: 'Multi-level acrylic display risers for retail shelves' },
          { title: 'Counter-Top POS Units', detail: 'Point-of-sale display units with branding panels' },
          { title: 'Literature Holders', detail: 'A4 and DL brochure and leaflet holders' },
        ],
      },
      {
        name: 'Acrylic Display Boxes',
        description: 'Crystal-clear acrylic boxes for product display, packaging, and protection.',
        items: [
          { title: 'Open-Front Display Cases', detail: 'Dust-free display for collectibles and products' },
          { title: 'Hinged-Lid Packaging Boxes', detail: 'Retail-ready boxes with secure hinged lids' },
          { title: 'Custom-Size Enclosures', detail: 'Made-to-measure acrylic enclosures any dimension' },
        ],
      },
      {
        name: 'Custom Sign Board Sets',
        description: 'Full sign board fabrication packages for shopfronts, offices, and wayfinding.',
        items: [
          { title: 'Backlit Sign Boards', detail: 'LED backlit panels with printed or engraved face' },
          { title: 'Wayfinding Sign Sets', detail: 'Directional sign systems for malls and offices' },
          { title: 'Menu Board Panels', detail: 'Restaurant and café menu boards, write-on or printed' },
        ],
      },
    ],
  },
};

export const categoryCards = [
  { slug: 'co2-laser-cutting', title: 'CO2 Laser Cutting Products', description: 'Nameplates, awards, leather goods, and engraved acrylic pieces.' },
  { slug: 'cnc-machining', title: 'CNC Machining Products', description: 'Wall panels, signage bases, furniture profiling, and carved composites.' },
  { slug: 'co2-marking', title: 'CO2 Marking Products', description: 'Bottle branding, SS nameplates, and permanent acrylic marking sets.' },
  { slug: 'neon-signages', title: 'Neon Signage Products', description: 'Business signs, decorative wall neons, and event installation pieces.' },
  { slug: 'trading-fabrication', title: 'Trading & Fabrication Products', description: 'Display stands, acrylic boxes, and custom sign board sets.' },
];
