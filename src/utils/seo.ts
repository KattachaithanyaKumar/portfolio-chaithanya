import { siteConfig } from '../data/site';
import { socialLinks } from '../data/social';
import { skillsData } from '../data/skills';

/**
 * Generates the Schema.org JSON-LD Person entity structure for search engines
 */
export function getPersonJsonLd() {
  const sameAsProfiles = socialLinks
    .filter((s) => s.url && !s.url.startsWith('mailto:'))
    .map((s) => s.url);

  // Extract primary skills list
  const skillsList = skillsData.categories.flatMap((cat) => cat.skills);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${typeof window !== 'undefined' ? window.location.origin : 'https://kattachaithanyakumar.dev'}#person`,
    name: siteConfig.name,
    alternateName: ['Chaithanya', 'Katta Chaithanya Kumar', 'Chaithanya Kumar'],
    jobTitle: siteConfig.role,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.company,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressCountry: 'India',
    },
    email: `mailto:${siteConfig.email}`,
    url: typeof window !== 'undefined' ? window.location.origin : 'https://kattachaithanyakumar.dev',
    sameAs: sameAsProfiles,
    knowsAbout: skillsList,
    description: `${siteConfig.role} at ${siteConfig.company}, specialized in building high-performance design systems, generative AI user interfaces, and scalable frontend architectures.`,
  };
}
