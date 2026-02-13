export interface Plugin {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  phase: number;
  status?: 'available' | 'coming-soon' | 'beta';
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
}

export interface HeroContent {
  headline: string;
  subheading: string;
  cta: string;
}
