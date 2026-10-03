// ─────────────────────────────────────────────
//  ProductDetailPage — Shriram Industries
//  Technical specs, engineering details & inquiries
// ─────────────────────────────────────────────
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Scale, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CTASection from '@/components/cta/CTASection';
import { shriramProducts } from '@/data/shriram';
import { siteConfig } from '@/config/site';
import { imagePath } from '@/lib/utils';
import { fadeLeft, fadeRight } from '@/animations/motion/variants';

// Product-specific technical specifications map
const specsMap: Record<string, {
  material: string;
  wireGauge: string;
  loadCapacity: string;
  finish: string;
  availableSizes: string[];
  features: string[];
  warranty: string;
}> = {
  'kitchen-basket-ss304': {
    material: 'Authentic AISI 304 (18/8) Stainless Steel',
    wireGauge: '5.0 mm outer perimeter frame / 2.8 mm high-tensile mesh',
    loadCapacity: 'Up to 45 kg dynamic weight test passed',
    finish: 'Multi-stage Electro-Chemical Polishing (Mirror Gloss)',
    availableSizes: ['15" x 20" x 4"', '17" x 20" x 6"', '19" x 20" x 8"', '21" x 20" x 8"', 'Custom widths available'],
    features: [
      'Genuine SS 304 Nickel-Chromium composition preventing rust in humid coastal and tropical kitchens',
      'Electro-polished surface eliminates microscopic burrs that trap oil or spices',
      'Universal mounting brackets for side-mount or undermount telescopic drawer slides',
      'Reinforced bottom cross-wires prevent sagging under heavy cast iron or grain vessels',
    ],
    warranty: '10-Year Anti-Rust Warranty',
  },
  'corner-carousel-unit': {
    material: 'SS 304 Trays with Heavy Cold-Rolled Steel Central Pivot Column',
    wireGauge: '4.8 mm outer protective guard wire / Solid ribbed SS base',
    loadCapacity: '25 kg per shelf (50 kg total distributed load)',
    finish: 'Triple-layer Bright Chrome & Electro-Polish finish',
    availableSizes: ['700mm diameter (for 800mm corner carcass)', '750mm diameter (for 900mm corner carcass)'],
    features: [
      '360° fluid bi-directional swivel on sealed industrial ball bearings',
      'Height-adjustable shelves to accommodate tall blenders or large cooking pots',
      'Perimeter safety guard wire prevents spice containers from slipping off during rotation',
      'Transforms unreachable L-corner dead zones into full-access storage',
    ],
    warranty: '5-Year Mechanical Pivot & Surface Warranty',
  },
  'tandem-box-drawer': {
    material: 'High-Strength Cold Rolled Steel with Epoxy Powder Coating & SS Rails',
    wireGauge: 'N/A (Solid double-wall acoustic dampening steel box)',
    loadCapacity: '35 kg to 50 kg synchronised heavy-duty load rating',
    finish: 'Matte Charcoal Grey / Brushed Stainless Steel Accents',
    availableSizes: ['Lengths: 450mm, 500mm, 550mm', 'Heights: 84mm (Low), 135mm (Medium), 199mm (High)'],
    features: [
      'Integrated soft-close hydraulic dampers for whisper-quiet feather closure',
      'Full extension drawer runners allow 100% visibility to rear corners',
      'Tool-free 3D front adjustment (vertical, horizontal, and tilt)',
      'Tested to over 80,000 opening and closing cycles under load',
    ],
    warranty: '10-Year Performance Guarantee',
  },
  'pull-out-pantry': {
    material: 'SS 304 Wire Baskets on Heavy Heavy-Gauge Steel Chassis',
    wireGauge: '5.2 mm outer border / 3.0 mm ribbed interior wire',
    loadCapacity: '80 kg total structural load capacity across 5 or 6 tiers',
    finish: 'Lustrous Electro-Polish finish with corrosion protection',
    availableSizes: ['Widths: 400mm, 450mm, 600mm', 'Height adjustable: 1750mm – 2100mm'],
    features: [
      'Centre-mounted or side-mounted heavy-duty telescopic synchronised runners',
      'Smooth pull-out motion brings the entire larder into clear view from both sides',
      'Adjustable basket heights to fit tall bottles, bulk cereal packs, and spice jars',
      'Integrated damping prevents jars from rattling or colliding during closing',
    ],
    warranty: '10-Year Rust Guarantee on SS Baskets',
  },
  'telescopic-channel-ss': {
    material: 'AISI 304 Virgin Stainless Steel Slides & Ball Bearings',
    wireGauge: '1.2 mm thick steel gauge inner and outer profiles',
    loadCapacity: '45 kg dynamic rated load capacity',
    finish: 'Passivated Natural Stainless Steel (Rust-proof & non-peeling)',
    availableSizes: ['10" (250mm)', '12" (300mm)', '14" (350mm)', '16" (400mm)', '18" (450mm)', '20" (500mm)', '24" (600mm)'],
    features: [
      'SS 304 solid stainless steel ball bearings ensure frictionless glide forever',
      'Withstands direct water exposure and acidic vapors in Indian wet kitchens',
      'Quick-release lever allows effortless removal of the drawer for periodic cleaning',
      'Surpasses 96-hour continuous salt spray corrosion resistance standards',
    ],
    warranty: 'Lifetime SS 304 Material Guarantee',
  },
  'thali-partition': {
    material: 'SS 304 Food-Grade Stainless Steel Rods',
    wireGauge: '4.5 mm robust separator rods / 5.0 mm perimeter base',
    loadCapacity: 'Accommodates up to 18 large Indian thalis / heavy brass plates',
    finish: 'Electro-polished smooth surface to prevent scratching of fine tableware',
    availableSizes: ['Designed to drop into 15", 17", 19", and 21" deep modular baskets'],
    features: [
      'Keeps heavy dinner plates, parats, and thalis vertically organized for zero-touch extraction',
      'Removable separator rods for custom plate spacing and thick bowls',
      'Zero welds on plate-contact edges to avoid chipping porcelain or melamine plates',
      'Easy to lift out and rinse directly under the tap',
    ],
    warranty: '10-Year Rust Guarantee',
  },
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = shriramProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 pt-32 pb-20">
        <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em]">Product Not Found</p>
        <h1 className="heading-lg text-[var(--color-foreground)]">Looking for a specific item?</h1>
        <p className="text-[var(--color-muted)] text-sm max-w-md text-center">
          The requested hardware item could not be found. Please check our full catalogue.
        </p>
        <Link
          to="/projects"
          className="mt-4 px-6 py-3 bg-[var(--color-foreground)] text-[var(--color-background)] text-label text-[0.65rem] hover:bg-[var(--color-accent)] transition-colors"
        >
          View All Products
        </Link>
      </div>
    );
  }

  const specs = specsMap[product.id] || {
    material: 'AISI 304 Food Grade Stainless Steel',
    wireGauge: 'Heavy Gauge Wire with Precision CNC Spot Welds',
    loadCapacity: '35 - 45 kg dynamic load tested',
    finish: 'Electro-Chemical Lustre Polish',
    availableSizes: ['Standard modular carcass sizes (15" to 36")'],
    features: [
      'Genuine SS 304 material certified for kitchen moisture resistance',
      'Smooth edges and heavy-gauge construction',
      'Compatible with all standard modular kitchen fittings',
    ],
    warranty: '10-Year Guarantee',
  };

  const relatedProducts = shriramProducts.filter((p) => p.id !== product.id).slice(0, 3);
  const whatsappUrl = `https://wa.me/918047639215?text=${encodeURIComponent(
    `Hello Shriram Industries! I am interested in getting a quote/catalog for "${product.title}" (${product.category}).`
  )}`;

  return (
    <>
      <SEO
        title={`${product.title} — Shriram Industries`}
        description={product.description}
        keywords={[product.title, product.category, 'Shriram Industries', 'Indore', 'kitchen hardware', 'SS 304']}
        ogImage={product.image || '/images/products/kitchen-hero.jpg'}
      />

      {/* Breadcrumb Header */}
      <div className="pt-32 pb-8 md:pt-40 md:pb-12 border-b border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="container-ami">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-label text-[0.6rem] text-[var(--color-muted)] hover:text-[var(--color-foreground)] mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Products
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="demo-badge bg-orange-500/10 text-orange-600 border-orange-500/20 font-medium">
                  {product.category}
                </span>
                <span className="text-label text-[0.6rem] text-[var(--color-muted)]">
                  SKU #{product.id.toUpperCase()}
                </span>
              </div>
              <h1 className="heading-xl text-[var(--color-foreground)] max-w-3xl">
                {product.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 text-white text-label text-[0.65rem] hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare size={14} />
                WhatsApp Quick Enquiry
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-foreground)] text-[var(--color-background)] text-label text-[0.65rem] hover:bg-[var(--color-accent)] transition-colors"
              >
                Request Bulk Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main product showcase & specs */}
      <section className="section-padding">
        <div className="container-ami">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Product Image & Badges */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-900 border border-[var(--color-border)] shadow-md">
                {product.image ? (
                  <img
                    src={imagePath(product.image)}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#1e232a] to-[#121518] text-white">
                    <div className="w-16 h-16 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center mb-4">
                      <Sparkles className="text-orange-400 w-8 h-8" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-orange-400 font-medium">SS304 Precision Engineered</span>
                    <span className="text-lg font-light text-zinc-100 mt-2">{product.title}</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white text-[0.65rem] uppercase tracking-widest font-mono">
                  Factory Direct · Indore
                </div>
              </div>

              {/* Quality Badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 border border-[var(--color-border)] bg-[var(--color-card)] text-center">
                  <ShieldCheck className="w-5 h-5 mx-auto text-orange-500 mb-1" />
                  <p className="text-[0.65rem] font-semibold text-[var(--color-foreground)]">SS 304 Certified</p>
                  <p className="text-[0.55rem] text-[var(--color-muted)]">Rust-free assurance</p>
                </div>
                <div className="p-3 border border-[var(--color-border)] bg-[var(--color-card)] text-center">
                  <Scale className="w-5 h-5 mx-auto text-orange-500 mb-1" />
                  <p className="text-[0.65rem] font-semibold text-[var(--color-foreground)]">Heavy Load Rated</p>
                  <p className="text-[0.55rem] text-[var(--color-muted)]">Zero sag under weight</p>
                </div>
                <div className="p-3 border border-[var(--color-border)] bg-[var(--color-card)] text-center">
                  <Layers className="w-5 h-5 mx-auto text-orange-500 mb-1" />
                  <p className="text-[0.65rem] font-semibold text-[var(--color-foreground)]">Electro-Polished</p>
                  <p className="text-[0.55rem] text-[var(--color-muted)]">Mirror chrome lustre</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Technical Specifications */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-2">
                  Technical Specifications
                </p>
                <h2 className="heading-md text-[var(--color-foreground)] mb-4">
                  Engineered for Performance & Longevity
                </h2>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden">
                <table className="w-full text-left text-sm divide-y divide-[var(--color-border)]">
                  <tbody>
                    <tr className="divide-x divide-[var(--color-border)]">
                      <th className="py-3 px-4 text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)] font-medium bg-[var(--color-background)]/50 w-1/3">
                        Material Grade
                      </th>
                      <td className="py-3 px-4 text-xs font-medium text-[var(--color-foreground)]">
                        {specs.material}
                      </td>
                    </tr>
                    <tr className="divide-x divide-[var(--color-border)]">
                      <th className="py-3 px-4 text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)] font-medium bg-[var(--color-background)]/50">
                        Wire Gauge / Profile
                      </th>
                      <td className="py-3 px-4 text-xs text-[var(--color-foreground)]">
                        {specs.wireGauge}
                      </td>
                    </tr>
                    <tr className="divide-x divide-[var(--color-border)]">
                      <th className="py-3 px-4 text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)] font-medium bg-[var(--color-background)]/50">
                        Dynamic Load Rating
                      </th>
                      <td className="py-3 px-4 text-xs text-[var(--color-foreground)]">
                        {specs.loadCapacity}
                      </td>
                    </tr>
                    <tr className="divide-x divide-[var(--color-border)]">
                      <th className="py-3 px-4 text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)] font-medium bg-[var(--color-background)]/50">
                        Surface Treatment
                      </th>
                      <td className="py-3 px-4 text-xs text-[var(--color-foreground)]">
                        {specs.finish}
                      </td>
                    </tr>
                    <tr className="divide-x divide-[var(--color-border)]">
                      <th className="py-3 px-4 text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)] font-medium bg-[var(--color-background)]/50">
                        Available Sizes
                      </th>
                      <td className="py-3 px-4 text-xs text-[var(--color-foreground)]">
                        <div className="flex flex-wrap gap-1.5">
                          {specs.availableSizes.map((s) => (
                            <span key={s} className="inline-block px-2 py-0.5 bg-[var(--color-background)] border border-[var(--color-border)] text-[0.65rem] text-[var(--color-foreground)]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                    <tr className="divide-x divide-[var(--color-border)]">
                      <th className="py-3 px-4 text-[0.65rem] uppercase tracking-wider text-[var(--color-muted)] font-medium bg-[var(--color-background)]/50">
                        Manufacturer Warranty
                      </th>
                      <td className="py-3 px-4 text-xs font-semibold text-emerald-600">
                        {specs.warranty}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Key Features */}
              <div>
                <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-3">
                  Why Contractors & Homeowners Choose This
                </p>
                <ul className="space-y-2.5">
                  {specs.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--color-foreground)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Call to Action Box */}
              <div className="p-6 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--color-foreground)]">
                      Order Wholesale or Request Samples
                    </h3>
                    <p className="text-xs text-[var(--color-muted)] mt-1">
                      Call our technical desk directly at {siteConfig.contact.phone} for immediate assistance.
                    </p>
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone?.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-orange-600 text-white text-label text-[0.65rem] hover:bg-orange-700 transition-colors whitespace-nowrap self-start sm:self-auto"
                  >
                    <PhoneCall size={13} />
                    Call Sales
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="container-ami py-16 border-t border-[var(--color-border)]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-2">
              Explore More
            </p>
            <h2 className="heading-md text-[var(--color-foreground)]">
              Complementary Hardware
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-label text-[0.65rem] text-[var(--color-muted)] hover:text-[var(--color-foreground)] flex items-center gap-1"
          >
            All Products <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <Link
              key={rel.id}
              to={`/projects/${rel.id}`}
              className="group p-5 border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)] transition-all block"
            >
              <div className="aspect-[4/3] bg-zinc-800 overflow-hidden mb-4 relative">
                {rel.image ? (
                  <img src={imagePath(rel.image)} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400 text-xs uppercase tracking-wider">
                    SS 304 Fitting
                  </div>
                )}
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[0.55rem] uppercase tracking-wider">
                  {rel.category}
                </div>
              </div>
              <h3 className="font-serif text-base text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
                {rel.title}
              </h3>
              <p className="text-xs text-[var(--color-muted)] line-clamp-2">
                {rel.shortDescription || rel.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Equipping an entire kitchen or building project?"
        subline="Send us your floor plan or cabinet elevations for free hardware calculation and quantity optimization."
        primaryCta={{ label: 'Contact Technical Team', href: '/contact' }}
        secondaryCta={{ label: 'Back to Catalogue', href: '/projects' }}
        dark
      />
    </>
  );
}
