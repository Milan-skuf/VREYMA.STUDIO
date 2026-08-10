export type WindowId = 'about' | 'works' | 'pricing' | 'contacts' | 'notes' | 'music' | 'trash' | 'privacy' | 'terms' | 'activation';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size?: { width: number; height: number };
}

export interface Project {
  id: string;
  title: string;
  category: 'Landing' | 'E-commerce' | 'Web App' | '3D & Motion' | 'Branding';
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  videos?: string[];
  tags: string[];
  year: string;
  client: string;
  link?: string;
  stats?: { label: string; value: string }[];
  deliverables: string[];
  isFeatured?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceFrom: string;
  duration: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  genre: string;
}
