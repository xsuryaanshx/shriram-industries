// ─────────────────────────────────────────────
//  AMI WEBSITE FACTORY — Site Configuration
//  Duplicate this file for each new client.
// ─────────────────────────────────────────────

export interface SiteColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
}

export interface SiteContact {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  city?: string;
}

export interface SiteSocial {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
}

export interface SiteSEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  twitterHandle?: string;
}

export interface SiteConfig {
  // Identity
  businessName: string;
  tagline: string;
  description: string;
  industry: string;
  isDemo?: boolean;

  // Branding
  logo?: string;
  favicon?: string;
  colors: SiteColors;
  fonts?: {
    sans?: string;
    serif?: string;
  };
  theme?: string; // CSS data-theme attribute

  // Content
  contact: SiteContact;
  social: SiteSocial;
  seo: SiteSEO;

  // Navigation
  nav?: { label: string; href: string }[];

  // Features
  features?: {
    darkMode?: boolean;
    threejs?: boolean;
    gsapScrollTrigger?: boolean;
  };
}

// ─────────────────────────────────────────────
//  Atelier 27 — Demo Site Configuration
//  FICTIONAL BUSINESS — NOT A REAL CLIENT
// ─────────────────────────────────────────────
export const atelier27Config: SiteConfig = {
  businessName: 'Atelier 27',
  tagline: 'Spaces designed to be lived in.',
  description:
    'An architecture and interior design studio crafting thoughtful, enduring spaces. Based in Mumbai, working across India.',
  industry: 'Interior Design & Architecture',
  isDemo: true,

  theme: 'atelier27',

  colors: {
    primary:    '#1c1a17',
    secondary:  '#b5a48a',
    accent:     '#c9a96e',
    background: '#f6f3ef',
    foreground: '#1c1a17',
    muted:      '#8b8278',
    border:     '#ddd7cf',
  },

  fonts: {
    sans:  'Inter',
    serif: 'Cormorant Garamond',
  },

  contact: {
    phone:    '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email:    'hello@atelier27.in',
    address:  '27, Kala Ghoda, Mumbai',
    city:     'Mumbai, Maharashtra',
  },

  social: {
    instagram: 'https://instagram.com/atelier27',
    linkedin:  'https://linkedin.com/company/atelier27',
  },

  seo: {
    title:       'Atelier 27 — Architecture & Interior Design',
    description: 'Thoughtful architecture and interior design for residential and commercial spaces across India.',
    keywords:    ['architecture', 'interior design', 'Mumbai', 'residential design', 'commercial spaces'],
    ogImage:     '/images/og-atelier27.jpg',
    canonicalUrl: 'https://atelier27.in',
  },

  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About',    href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact',  href: '/contact' },
  ],

  features: {
    darkMode:          false,
    threejs:           true,
    gsapScrollTrigger: true,
  },
};

// Active config — swap this for each client
export const siteConfig = atelier27Config;
