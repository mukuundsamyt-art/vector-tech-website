export interface MaterialCard {
  name: string;
  specs?: string;
  capabilities: string[];
}

export interface ServiceData {
  slug: string;
  tag: string;
  title: string;
  intro: string;
  materials: MaterialCard[];
}

export const services: Record<string, ServiceData> = {
  'co2-laser-cutting': {
    slug: 'co2-laser-cutting',
    tag: 'CO2 LASER SYSTEMS',
    title: 'CO2 Laser Cutting',
    intro:
      'Our CO2 laser systems deliver micron-level precision across a wide range of materials and thicknesses. Whether you need intricate engravings on crystal or clean through-cuts on thick acrylic, our machines handle it with exceptional edge quality and zero post-processing.',
    materials: [
      {
        name: 'Acrylic',
        specs: '1–15mm, all colours',
        capabilities: ['Cutting', 'Engraving', 'Surface etching', 'Edge polishing cuts'],
      },
      {
        name: 'MDF',
        specs: '1–4.5mm',
        capabilities: ['Precision cutting', 'Deep engraving', 'Pattern work'],
      },
      {
        name: 'Leather',
        specs: undefined,
        capabilities: ['Clean cutting', 'Surface engraving', 'Pattern cutting'],
      },
      {
        name: 'Glass and Crystal',
        specs: undefined,
        capabilities: ['Engraving only', 'Surface frosting', 'Logo and text marking'],
      },
    ],
  },
  'cnc-machining': {
    slug: 'cnc-machining',
    tag: 'CNC ROUTER',
    title: 'CNC Machining',
    intro:
      'Our CNC routers deliver computer-controlled precision on wood, composite panels, and acrylics. From detailed carving to structural profiling, every pass is guided by exact toolpaths for repeatable, consistent results across small batches or bulk production runs.',
    materials: [
      {
        name: 'Wood',
        specs: undefined,
        capabilities: ['2D cutting', 'Relief carving', 'Grooving', 'Profiling'],
      },
      {
        name: 'WPC',
        specs: 'Wood Plastic Composite',
        capabilities: ['Cutting', 'Carving', 'Grooving', 'Edge profiling'],
      },
      {
        name: 'ACP',
        specs: 'Aluminium Composite Panel',
        capabilities: ['Precision cutting', 'Routing', 'Panel fabrication'],
      },
      {
        name: 'Acrylic',
        specs: undefined,
        capabilities: ['Cutting', 'Grooving', 'Profiling', 'Edge routing'],
      },
    ],
  },
  'co2-marking': {
    slug: 'co2-marking',
    tag: 'CO2 MARKING SYSTEMS',
    title: 'CO2 Marking',
    intro:
      'CO2 laser marking creates permanent, high-contrast identifiers on a diverse range of industrial and consumer materials. From product branding on acrylic to machine labels on stainless steel, our marking system delivers crisp, durable results that withstand heavy use.',
    materials: [
      {
        name: 'Bottles',
        specs: undefined,
        capabilities: ['Brand marking', 'Permanent labeling', 'Serial numbers', 'Batch codes'],
      },
      {
        name: 'Acrylic',
        specs: undefined,
        capabilities: ['Surface marking', 'Branding', 'Logo engraving', 'Depth marking'],
      },
      {
        name: 'Stainless Steel',
        specs: undefined,
        capabilities: ['Permanent engraving', 'Industrial marking', 'Logo branding'],
      },
      {
        name: 'PVC Products',
        specs: undefined,
        capabilities: ['Branding', 'Labeling', 'Permanent marking'],
      },
      {
        name: 'Machine Labeling',
        specs: undefined,
        capabilities: ['Industrial asset tags', 'QR codes', 'Barcode marking', 'Safety labels'],
      },
    ],
  },
  'neon-signages': {
    slug: 'neon-signages',
    tag: 'CUSTOM LED NEON',
    title: 'Neon Signages',
    intro:
      'VectorTech fabricates custom LED neon signs for businesses, retail spaces, events, and home interiors. Every sign is hand-crafted to your exact specifications — logos, lettering, symbols, and shapes — all built for vibrant, long-lasting display.',
    materials: [
      {
        name: 'Custom LED Neon',
        specs: undefined,
        capabilities: ['Indoor signage', 'Outdoor weatherproof signs', 'Full colour customisation'],
      },
      {
        name: 'Business Signs',
        specs: undefined,
        capabilities: ['Storefront branding', 'Reception area signage', 'Brand identity displays'],
      },
      {
        name: 'Decorative Neon',
        specs: undefined,
        capabilities: ['Interior decor', 'Event installations', 'Home decor pieces'],
      },
      {
        name: 'Custom Shapes',
        specs: undefined,
        capabilities: ['Logo reproduction', 'Letter forms', 'Symbol and icon shapes', 'Bespoke designs'],
      },
    ],
  },
  'trading-fabrication': {
    slug: 'trading-fabrication',
    tag: 'ACRYLIC SUPPLY & FABRICATION',
    title: 'Trading and Fabrication',
    intro:
      'Beyond cutting and marking, VectorTech supplies raw acrylic sheets and fabricates a full range of acrylic products — sign boards, display boxes, visual merchandise holders, and custom retail stands — all manufactured in-house to your exact dimensions and finish.',
    materials: [
      {
        name: 'Acrylic Sheets',
        specs: '8×4ft standard',
        capabilities: ['All colours and tints', 'Multiple thickness options', 'Cut-to-size service'],
      },
      {
        name: 'Sign Boards',
        specs: undefined,
        capabilities: ['Custom dimensions', 'Various materials and finishes', 'Logo and text integration'],
      },
      {
        name: 'Acrylic Boxes',
        specs: undefined,
        capabilities: ['Display boxes', 'Packaging solutions', 'Custom sizing and sealing'],
      },
      {
        name: 'Visual Merchandise',
        specs: undefined,
        capabilities: ['Retail display solutions', 'Point-of-sale units', 'Product showcase stands'],
      },
      {
        name: 'Acrylic Stands',
        specs: undefined,
        capabilities: ['Product display stands', 'Menu holders', 'Literature and leaflet holders', 'Custom height and angle'],
      },
    ],
  },
};
