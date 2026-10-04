// ─────────────────────────────────────────────
//  Atelier 27 — Content Data
//  FICTIONAL DEMO — NOT A REAL CLIENT
// ─────────────────────────────────────────────
import type { Project, Service, ProcessStep, Testimonial, Stat } from '@/config/types';

export const projects: Project[] = [
  {
    id: 'courtyard-house',
    title: 'The Courtyard House',
    location: 'Ahmedabad, Gujarat',
    category: 'Residential',
    year: 2024,
    shortDescription: 'A home built around light and the memory of a childhood garden.',
    description:
      'A 3,800 sq ft residence designed around a central courtyard. The project drew on the typology of traditional Gujarati havelis, reinterpreted through a contemporary material palette of raw concrete, teak, and weathered brass.',
    image: '/images/projects/courtyard-house.jpg',
    featured: true,
    area: '3,800 sq ft',
    tags: ['Residential', 'Courtyard', 'Contemporary'],
  },
  {
    id: 'aria-residence',
    title: 'Aria Residence',
    location: 'Bandra, Mumbai',
    category: 'Interior Design',
    year: 2024,
    shortDescription: 'A sea-facing apartment where every room frames the horizon.',
    description:
      'A 2,200 sq ft apartment renovation in Bandra West. The brief was to create a calm, editorial interior that would work as both a family home and a space for creative work.',
    image: '/images/projects/aria-residence.jpg',
    featured: true,
    area: '2,200 sq ft',
    tags: ['Interior', 'Apartment', 'Minimal'],
  },
  {
    id: 'oak-apartment',
    title: 'The Oak Apartment',
    location: 'Koregaon Park, Pune',
    category: 'Interior Design',
    year: 2023,
    shortDescription: 'Warmth, craft, and careful material choices in a Pune high-rise.',
    description:
      'A compact 1,400 sq ft apartment that prioritises craftsmanship over complexity. Solid oak joinery, handmade tiles, and natural plaster work together to create an interior that rewards close attention.',
    image: '/images/projects/oak-apartment.jpg',
    featured: true,
    area: '1,400 sq ft',
    tags: ['Interior', 'Compact', 'Craft'],
  },
  {
    id: 'casa-verde',
    title: 'Casa Verde',
    location: 'Whitefield, Bangalore',
    category: 'Residential',
    year: 2023,
    shortDescription: 'Architecture in conversation with a landscape of old trees.',
    description:
      'A 5,200 sq ft family home designed around an existing grove of trees. The building\'s form bends and shifts to preserve the canopy, treating the landscape as structural.',
    image: '/images/projects/casa-verde.jpg',
    featured: false,
    area: '5,200 sq ft',
    tags: ['Residential', 'Landscape', 'Biophilic'],
  },
  {
    id: 'monsoon-villa',
    title: 'The Monsoon Villa',
    location: 'Alibaug, Maharashtra',
    category: 'Residential',
    year: 2022,
    shortDescription: 'A weekend retreat designed for rain, silence, and long meals.',
    description:
      'A 4,000 sq ft weekend villa on the Alibaug coast. The design responds to the dramatic monsoon landscape — deep overhangs, cross-ventilation, and outdoor spaces that function in all weathers.',
    image: '/images/projects/monsoon-villa.jpg',
    featured: false,
    area: '4,000 sq ft',
    tags: ['Villa', 'Coastal', 'Retreat'],
  },
  {
    id: 'studio-twelve',
    title: 'Studio Twelve',
    location: 'Banjara Hills, Hyderabad',
    category: 'Commercial',
    year: 2022,
    shortDescription: 'A design studio that doubles as an argument for craft.',
    description:
      'An 1,800 sq ft office and studio space for a fashion label. The brief was a workspace that could transition from production to client presentations without visual disruption.',
    image: '/images/projects/studio-twelve.jpg',
    featured: false,
    area: '1,800 sq ft',
    tags: ['Commercial', 'Studio', 'Office'],
  },
];

export const services: Service[] = [
  {
    id: 'architecture',
    title: 'Architecture',
    description:
      'From concept to completion — new builds, extensions, and structural transformations that begin with how a space is meant to be experienced.',
    features: ['Site analysis', 'Concept design', 'Working drawings', 'Project coordination'],
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description:
      'Interior spaces designed with the same rigour as architecture. Material, light, and proportion working together.',
    features: ['Space planning', 'Material selection', 'Custom furniture', 'Lighting design'],
  },
  {
    id: 'residential',
    title: 'Residential Design',
    description:
      'Homes are our primary focus. We design residences that grow more interesting with time rather than less.',
    features: ['Family homes', 'Apartments', 'Weekend homes', 'Heritage renovations'],
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    description:
      'Studios, offices, and retail environments that create a clear identity and support the work done inside them.',
    features: ['Offices', 'Studios', 'Retail', 'Hospitality'],
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description:
      'Thoughtful transformation of existing structures — respecting what is there while creating something genuinely new.',
    features: ['Structural changes', 'Material upgrades', 'Space reconfiguration', 'Heritage work'],
  },
  {
    id: 'consultation',
    title: 'Spatial Consultation',
    description:
      'A focused engagement for those who need expert perspective before committing to a larger project.',
    features: ['2-hour sessions', 'Site visits', 'Material guidance', 'Project scoping'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We begin with listening. Understanding how you live, work, and move through space is the foundation of every project.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'From research and site analysis, we develop a design direction — spatial, material, and atmospheric — before any drawings are made.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'The concept is developed into detailed drawings, material specifications, and a clear project scope with timeline and cost.',
  },
  {
    number: '04',
    title: 'Execution',
    description:
      'We work closely with skilled craftspeople and contractors throughout construction, maintaining quality from structure to detail.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Arjun & Priya M.',
    role: 'Homeowners',
    company: 'The Courtyard House, Ahmedabad',
    content:
      'Working with Atelier 27 was unlike anything we expected. They understood what we wanted before we could fully articulate it ourselves.',
    isDemo: true,
  },
  {
    id: 't2',
    name: 'Kavya R.',
    role: 'Creative Director',
    company: 'Studio Twelve, Hyderabad',
    content:
      'The studio they designed has genuinely changed how we work. It\'s the kind of space that makes you want to be more careful about everything you do inside it.',
    isDemo: true,
  },
  {
    id: 't3',
    name: 'Rohan & Anisha S.',
    role: 'Homeowners',
    company: 'Aria Residence, Mumbai',
    content:
      'Every material, every joint, every piece of light feels considered. Months after moving in, we are still noticing things.',
    isDemo: true,
  },
];

export const stats: Stat[] = [
  { value: '47', label: 'Projects completed', suffix: '+' },
  { value: '8', label: 'Years of practice', suffix: '' },
  { value: '6', label: 'Cities across India', suffix: '' },
  { value: '100', label: 'Client satisfaction', suffix: '%' },
];
