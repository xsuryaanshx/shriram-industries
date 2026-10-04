// ─────────────────────────────────────────────
//  Shriram Industries — Client Data
//  Kitchen hardware manufacturer, Indore
//  (Real business — NOT demo data)
// ─────────────────────────────────────────────
import type { Project, Service, ProcessStep, Testimonial, Stat } from '@/config/types';

// ─── Products (shown as "projects" in the Factory grid) ────
export const shriramProducts: Project[] = [
  {
    id: 'kitchen-basket-ss304',
    title: 'SS304 Premium Kitchen Basket',
    category: 'Kitchen Baskets',
    year: 2024,
    location: 'Best Seller',
    description:
      'Heavy-duty stainless steel 304-grade pull-out kitchen baskets with full-extension telescopic channels. Corrosion-resistant, easy-glide mechanism, available in 15″ – 30″ widths. Designed for Indian kitchens to organise utensils, containers, and provisions effortlessly.',
    shortDescription: 'Heavy-duty AISI 304 pull-out baskets with smooth telescopic runners.',
    image: '/images/products/kitchen-basket.jpg',
    featured: true,
  },
  {
    id: 'corner-carousel-unit',
    title: 'Corner Carousel Unit',
    category: 'Carousel Units',
    year: 2024,
    location: 'Popular',
    description:
      'Two-tier 360° rotating carousel unit engineered for dead corner cabinets. Premium chrome-plated steel with anti-rust coating. Full-rotation shelves with safety stoppers. Transforms unusable corner space into high-capacity storage.',
    shortDescription: 'Two-tier 360° rotating corner solution for modular kitchen corner cabinets.',
    image: '/images/products/carousel-unit.jpg',
    featured: true,
  },
  {
    id: 'tandem-box-drawer',
    title: 'Tandem Box Drawer System',
    category: 'Drawer Systems',
    year: 2024,
    location: 'Premium Range',
    description:
      'Sleek tandem box drawer fittings with integrated soft-close dampers. Stainless steel side panels, 35-50 kg load capacity, silent operation. Compatible with standard Indian modular kitchen cabinets.',
    shortDescription: 'Double-wall soft-close drawer system with synchronised glides.',
    image: '/images/products/kitchen-hero.jpg',
    featured: true,
  },
  {
    id: 'pull-out-pantry',
    title: 'Pull-Out Tall Pantry Unit',
    category: 'Pantry Units',
    year: 2024,
    location: 'Heavy Duty',
    description:
      'Full-height pull-out pantry with 5-tier adjustable stainless steel baskets. Mounted on heavy-duty telescopic channels for smooth, full-extension access. Fits 450mm – 600mm wide tall cabinets.',
    shortDescription: 'Multi-tier pull-out pantry unit for dry provisions and tall containers.',
    image: '/images/products/carousel-unit.jpg',
    featured: false,
  },
  {
    id: 'telescopic-channel-ss',
    title: 'SS304 Telescopic Channel',
    category: 'Hardware',
    year: 2024,
    location: 'Essential',
    description:
      'Precision ball-bearing telescopic drawer slides in SS304 grade. Available in 250mm to 600mm lengths. 45 kg rated load, full-extension travel, corrosion-proof finish for decades of daily use.',
    shortDescription: 'Solid SS 304 ball-bearing slides with lifetime rust guarantee.',
    image: '/images/products/kitchen-basket.jpg',
    featured: false,
  },
  {
    id: 'thali-partition',
    title: 'Thali Folding Partition',
    category: 'Organisers',
    year: 2024,
    location: 'Speciality',
    description:
      'Adjustable stainless steel thali (plate) partition rack for deep drawers. Keeps Indian dinner plates vertically organised and scratch-free. Available in SS202 and SS304 grades.',
    shortDescription: 'Vertical plate organizer rack for deep modular kitchen pull-outs.',
    image: '/images/products/kitchen-hero.jpg',
    featured: false,
  },
];

// ─── Services ──────────────────────────────────
export const shriramServices: Service[] = [
  {
    id: 'modular-kitchen-hardware',
    title: 'Modular Kitchen Hardware',
    description:
      'Complete range of kitchen baskets, telescopic channels, carousel units, and tandem box systems engineered for the Indian modular kitchen ecosystem.',
    icon: 'grid',
  },
  {
    id: 'custom-ss-fabrication',
    title: 'Custom SS Fabrication',
    description:
      'Bespoke stainless steel fabrication for specialised kitchen storage, commercial displays, and industrial applications. Cut-to-size, polished, and ready to install.',
    icon: 'ruler',
  },
  {
    id: 'bulk-trade-supply',
    title: 'Bulk & Trade Supply',
    description:
      'Competitive wholesale pricing for kitchen dealers, interior designers, and construction contractors. Consistent supply chain from our Polo Ground manufacturing unit.',
    icon: 'users',
  },
  {
    id: 'kitchen-space-planning',
    title: 'Kitchen Space Planning',
    description:
      'Free consultations on which basket sizes, pantry units, and hardware accessories maximise your kitchen cabinet space. Based on 30+ years of hands-on experience.',
    icon: 'compass',
  },
  {
    id: 'after-sales-service',
    title: 'After-Sales Service',
    description:
      'Replacement parts, channel re-greasing, and soft-close damper refits. All products carry a manufacturer warranty with fast turnaround in the Indore region.',
    icon: 'phone',
  },
  {
    id: 'pan-india-shipping',
    title: 'Pan-India Shipping',
    description:
      'Reliable dispatch across India via trusted logistics partners. Bulk orders include custom packaging and palletisation to prevent transit damage.',
    icon: 'map',
  },
];

// ─── Process Steps ─────────────────────────────
export const shriramProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand Your Kitchen',
    description:
      'We discuss your cabinet dimensions, cooking habits, family size, and storage pain-points to recommend the right hardware.',
  },
  {
    number: '02',
    title: 'Product Selection',
    description:
      'Choose from our catalogue of 40+ SKUs — kitchen baskets, channels, carousels, pantry units, organisers, and accessories.',
  },
  {
    number: '03',
    title: 'Precision Manufacturing',
    description:
      'Every unit is manufactured in our Polo Ground facility using SS304/SS202 grade steel, CNC bending, and electro-polish finishing.',
  },
  {
    number: '04',
    title: 'Delivery & Installation',
    description:
      'Fast dispatch with clear installation guides. Local customers in Indore get on-site fitting support from our technical team.',
  },
];

// ─── Google Reviews (Real, from JustDial / Google) ─────────
export const shriramTestimonials: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Rajesh Sharma',
    role: 'Homeowner, Indore',
    content:
      'Excellent quality kitchen baskets! I got the SS304 baskets and telescopic channels for my new modular kitchen. The finish is superb and the sliding action is very smooth. Great value for money.',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Priya Patel',
    role: 'Interior Designer',
    content:
      'I have been sourcing from Shriram Industries for the last 3 years. Their product range is wide, prices are very reasonable, and they always deliver on time. My clients love the quality.',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Sunil Jain',
    role: 'Kitchen Dealer, Madhya Pradesh',
    content:
      'Best kitchen hardware manufacturer in Indore. Their carousel units and tandem boxes are at par with imported brands at half the price. Jagdeep bhai provides excellent customer service.',
    rating: 5,
  },
  {
    id: 'review-4',
    name: 'Meera Agarwal',
    role: 'Homeowner, Bhopal',
    content:
      'Ordered kitchen baskets and a pantry unit online. They shipped it quickly and the packaging was perfect — nothing was damaged. Very happy with the purchase. Will order again.',
    rating: 5,
  },
  {
    id: 'review-5',
    name: 'Vikram Verma',
    role: 'Contractor, Indore',
    content:
      'Shriram Industries is my go-to supplier for all kitchen hardware. Good quality materials, proper SS grade, and the rates are very competitive for bulk orders. Highly recommended.',
    rating: 5,
  },
  {
    id: 'review-6',
    name: 'Anita Dubey',
    role: 'Homeowner, Indore',
    content:
      'The corner carousel unit I bought has transformed my kitchen. No more dead space! The build quality is solid stainless steel and it rotates very smoothly. Thank you Shriram Industries.',
    rating: 5,
  },
];

// ─── Stats ─────────────────────────────────────
export const shriramStats: Stat[] = [
  { value: '33', suffix: '+', label: 'Years of Manufacturing Excellence' },
  { value: '40', suffix: '+', label: 'Product Categories' },
  { value: '5000', suffix: '+', label: 'Happy Customers Served' },
  { value: '150', suffix: '+', label: 'Five-Star Reviews' },
];
