import type {
  Article,
  Bundle,
  Collection,
  ColorSwatch,
  LookbookItem,
  MenFeaturedProduct,
  Product,
  SaleItem,
  Testimonial,
  TrendReport,
} from '../types';

export const TICKER_ITEMS = [
  'New Season — Resort 2026',
  'Natural Fibers Only',
  'Handcrafted in Portugal',
  'Free Delivery Above ₹12,000',
] as const;

export const WOMEN_CATEGORIES = [
  'All',
  'Dresses',
  'Tops',
  'Trousers',
  'Outerwear',
  'Accessories',
] as const;

export const homeCollections: Collection[] = [
  {
    id: 'quiet-hours',
    name: 'The Quiet Hours',
    subtitle: 'Eveningwear · 28 pieces',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80',
    variant: 'tall',
    path: '/women',
  },
  {
    id: 'departure',
    name: 'Departure',
    subtitle: 'Resort · 34 pieces',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    variant: 'sq',
    path: '/women',
  },
  {
    id: 'archive-3',
    name: 'Archive No. 3',
    subtitle: 'Menswear · 52 pieces',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80',
    variant: 'sq',
    path: '/men',
  },
];

export const homeArrivals: Product[] = [
  {
    id: 'linen-column',
    name: 'Linen Column Dress',
    price: '₹ 28,500',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80',
    aspectRatio: '2/3',
    viewers: 14,
  },
  {
    id: 'wrap-blouse',
    name: 'Relaxed Wrap Blouse',
    price: '₹ 14,900',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80',
    aspectRatio: '2/3',
    viewers: 9,
  },
  {
    id: 'merino-overshirt',
    name: 'Merino Overshirt',
    price: '₹ 34,000',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&q=80',
    aspectRatio: '2/3',
    viewers: 11,
  },
  {
    id: 'silk-skirt',
    name: 'Silk Bias Skirt',
    price: '₹ 22,000',
    tag: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=500&q=80',
    aspectRatio: '2/3',
    viewers: 6,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "The quality is unlike anything I've owned at this price. The linen dress is perfectly cut — it feels like it was made for me.",
    author: '— Arjun M., Mumbai',
  },
  {
    id: '2',
    quote:
      'I wore the wool coat for three months straight. It aged beautifully. Nothing else I own has done that.',
    author: '— Priya S., Delhi',
  },
  {
    id: '3',
    quote:
      'Packaging, fit, fabric — every detail is considered. I keep coming back every single season.',
    author: '— Karan T., Bangalore',
  },
];

export const gramImages = [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=70',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=70',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&q=70',
  'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=300&q=70',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=70',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&q=70',
];

export const womenProducts: Product[] = [
  ...homeArrivals.slice(0, 3),
  {
    id: 'linen-shirt',
    name: 'Oversized Linen Shirt',
    price: '₹ 11,500',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'wide-trouser',
    name: 'Pleated Wide Trouser',
    price: '₹ 18,900',
    tag: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'wool-coat',
    name: 'Cocoon Wool Coat',
    price: '₹ 72,000',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80',
    aspectRatio: '2/3',
  },
];

export const lookbookItems: LookbookItem[] = [
  {
    id: 'look-01',
    number: '01',
    name: 'Look 01 — Dawn',
    price: '3 pieces · from ₹14,900',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80',
  },
  {
    id: 'look-02',
    number: '02',
    name: 'Look 02 — Noon',
    price: '2 pieces · from ₹18,900',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80',
  },
  {
    id: 'look-03',
    number: '03',
    name: 'Look 03 — Dusk',
    price: '4 pieces · from ₹11,500',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80',
  },
  {
    id: 'look-04',
    number: '04',
    name: 'Look 04 — Night',
    price: '3 pieces · from ₹22,000',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80',
  },
];

export const menFeatured: MenFeaturedProduct[] = [
  {
    id: 'merino-overshirt',
    name: 'Merino Overshirt',
    price: '₹ 34,000',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80',
    layout: 'tall',
  },
  {
    id: 'field-jacket',
    name: 'Camel Field Jacket',
    price: '₹ 58,000',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80',
    layout: 'short',
  },
  {
    id: 'wool-trouser',
    name: 'Tapered Wool Trouser',
    price: '₹ 21,500',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    layout: 'short',
  },
  {
    id: 'linen-suit',
    name: 'Linen Relaxed Suit',
    price: '₹ 82,000',
    image: 'https://images.unsplash.com/photo-1561365452-adb940139ffa?w=600&q=80',
    layout: 'tall',
  },
];

export const menEssentials: Product[] = [
  {
    id: 'crew-tee',
    name: 'Cotton Crew Tee',
    price: '₹ 6,500',
    tag: 'Core',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 'denim',
    name: 'Five-Pocket Denim',
    price: '₹ 16,000',
    tag: 'Core',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 'crewneck',
    name: 'Merino Crewneck',
    price: '₹ 19,500',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=500&q=80',
    aspectRatio: '3/4',
  },
  {
    id: 'camp-shirt',
    name: 'Linen Camp Shirt',
    price: '₹ 12,900',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1603252109612-24fa03d145c8?w=500&q=80',
    aspectRatio: '3/4',
  },
];

export const craftStats = [
  { value: '14', label: 'Fabric Mills' },
  { value: '6', label: 'Countries' },
  { value: '2', label: 'Collections / Year' },
  { value: '100%', label: 'Natural Fibers' },
] as const;

export const articles: Article[] = [
  {
    id: 'wardrobe',
    category: 'Style Guide',
    title: (
      <>
        How to build a wardrobe
        <br />
        that <em>actually lasts</em>
      </>
    ),
    excerpt:
      "The capsule wardrobe concept has been misunderstood. It's not about owning fewer things — it's about owning the right things. Here's how to think about what earns its place.",
    author: 'Anika Sharma',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80',
  },
  {
    id: 'linen',
    category: 'Material Study',
    title: (
      <>
        The <em>linen question</em>:<br />
        why now, why this season
      </>
    ),
    excerpt:
      'Linen has been worn for six thousand years. So why does it feel so urgent in 2026? We visit the mills of Brittany to understand what makes this fibre the only one that matters.',
    author: 'Rohan Das',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80',
  },
  {
    id: 'profile',
    category: 'Profile',
    title: (
      <>
        <em>Dressed for nothing</em>
        <br />
        in particular
      </>
    ),
    excerpt:
      'Photographer Ishan Mehta shoots in silence, edits in silence, and dresses the same way. We spend a morning in his Delhi studio exploring restraint and creativity.',
    author: 'Priya Kapoor',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=700&q=80',
  },
  {
    id: 'quiet',
    category: 'Trend Report',
    title: (
      <>
        Why the <em>quiet</em>
        <br />
        is getting louder
      </>
    ),
    excerpt:
      "Quiet luxury isn't going anywhere — but it's evolving. From pristine minimalism into something warmer, more textural, more human. The labels leading this shift.",
    author: 'Editorial Team',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=700&q=80',
  },
];

export const trendReport: TrendReport[] = [
  {
    id: 't1',
    trend: 'Trend 01',
    name: 'The Long Silhouette',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80',
  },
  {
    id: 't2',
    trend: 'Trend 02',
    name: 'Desert Neutrals',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80',
  },
  {
    id: 't3',
    trend: 'Trend 03',
    name: 'Tonal Dressing',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80',
  },
  {
    id: 't4',
    trend: 'Trend 04',
    name: 'Relaxed Tailoring',
    image: 'https://images.unsplash.com/photo-1561365452-adb940139ffa?w=500&q=80',
  },
];

export const colorSwatches: ColorSwatch[] = [
  { id: 'sw1', name: 'Raw Linen', className: 'sw1' },
  { id: 'sw2', name: 'Desert Sand', className: 'sw2' },
  { id: 'sw3', name: 'Dusk Sienna', className: 'sw3' },
  { id: 'sw4', name: 'Deep Earth', className: 'sw4' },
  { id: 'sw5', name: 'Sage Stone', className: 'sw5' },
  { id: 'sw6', name: 'Pale Dust', className: 'sw6' },
];

export const haulProducts: Product[] = [
  {
    id: 'h1',
    name: 'Washed Linen Set',
    price: '₹ 32,000',
    tag: 'Drop Exclusive',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h2',
    name: 'Structured Bomber',
    price: '₹ 48,000',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h3',
    name: 'Pleated Midi Dress',
    price: '₹ 26,500',
    tag: 'Limited',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h4',
    name: 'Linen Blouson Jacket',
    price: '₹ 44,000',
    image: 'https://images.unsplash.com/photo-1561365452-adb940139ffa?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h5',
    name: 'Silk Wide Trouser',
    price: '₹ 19,500',
    tag: 'Last 2',
    image: 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h6',
    name: 'Cotton Utility Vest',
    price: '₹ 14,900',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h7',
    name: 'Draped Shoulder Top',
    price: '₹ 12,500',
    tag: 'Drop Exclusive',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80',
    aspectRatio: '2/3',
  },
  {
    id: 'h8',
    name: 'Heavy Canvas Trouser',
    price: '₹ 21,000',
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80',
    aspectRatio: '2/3',
  },
];

export const saleItems: SaleItem[] = [
  {
    id: 's1',
    name: 'Resort Wrap Dress',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    discount: '–30%',
    newPrice: '₹ 19,950',
    oldPrice: '₹ 28,500',
  },
  {
    id: 's2',
    name: 'Merino Field Coat',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80',
    discount: '–40%',
    newPrice: '₹ 38,400',
    oldPrice: '₹ 64,000',
  },
  {
    id: 's3',
    name: 'Linen Shirt Dress',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    discount: '–25%',
    newPrice: '₹ 16,425',
    oldPrice: '₹ 21,900',
  },
];

export const bundles: Bundle[] = [
  {
    id: 'b1',
    tag: 'Bundle — Save ₹6,000',
    name: 'The Resort Duo',
    description:
      'Linen Column Dress + Silk Bias Skirt. The only two pieces you need for the entire trip.',
    price: '₹ 44,500',
    oldPrice: '₹ 50,500',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&q=80',
    ],
  },
  {
    id: 'b2',
    tag: 'Bundle — Save ₹8,000',
    name: 'The Work Week',
    description: 'Merino Overshirt + Tapered Wool Trouser. Five days, zero decisions.',
    price: '₹ 47,500',
    oldPrice: '₹ 55,500',
    images: [
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=300&q=80',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=300&q=80',
    ],
  },
];
