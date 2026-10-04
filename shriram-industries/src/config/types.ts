// ─────────────────────────────────────────────
//  AMI WEBSITE FACTORY — Content Types
//  Structured data types for all client content
// ─────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  year: number;
  description: string;
  shortDescription: string;
  image: string;
  images?: string[];
  featured?: boolean;
  area?: string;
  tags?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating?: number;
  isDemo?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
