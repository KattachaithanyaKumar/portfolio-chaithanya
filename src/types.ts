export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  company: string;
  location: string;
  email: string;
  navItems: NavItem[];
  talkButtonText: string;
  resumeButtonText: string;
  resumeUrl: string;
  resumeFileName?: string;
  copyrightText: string;
  statusBadge: string;
}

export interface HeroData {
  eyebrow: string;
  headlineLines: [string, string];
  statNumber: string;
  statSuffix: string;
  statLabel: string;
  bioParagraph: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface StatBlock {
  number: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface AboutData {
  eyebrow: string;
  eyebrowLabel?: string;
  heading?: string;
  bio: string;
  bioParagraph1?: string;
  bioParagraph2?: string;
  accentBadgeText: string;
  portraitAlt: string;
  stats: StatBlock[];
}

export interface ServiceCard {
  id: string;
  iconName: string;
  title: string;
  description: string;
  isAccent?: boolean;
  actionText?: string;
  actionHref?: string;
  tags?: string[];
}

export interface ServicesData {
  eyebrow: string;
  heading: string;
  description: string;
  services: ServiceCard[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface SkillsData {
  eyebrow: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  teamSummary: string;
  projectHighlight: string;
  bulletPoints: string[];
  techStack: string[];
}

export interface ExperienceData {
  eyebrow: string;
  heading: string;
  description: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  highlights?: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
  featured?: boolean;
}

export interface ProjectsData {
  eyebrow: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface TestimonialsData {
  eyebrow: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export interface CtaData {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
  availabilityNote: string;
}

export interface SocialLink {
  id: string;
  name: string;
  iconName: string;
  url: string;
  handle: string;
  isPrimary?: boolean;
}

export interface ContactData {
  eyebrow: string;
  heading: string;
  description: string;
  emailLabel: string;
  locationLabel: string;
  locationValue: string;
  nameInputLabel: string;
  namePlaceholder: string;
  emailInputLabel: string;
  emailPlaceholder: string;
  subjectInputLabel: string;
  subjectPlaceholder: string;
  messageInputLabel: string;
  messagePlaceholder: string;
  submitButtonText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
  mailtoFallbackText: string;
}
