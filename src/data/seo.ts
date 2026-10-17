// Structured data (schema.org JSON-LD). Facts only from SITE_STANDARDS.md section 1.
// No ratings, reviews, certifications or regulated status for Antares Systems Ltd.
import { SITE } from './site';
import { services } from './services';

export const HOME = `${SITE.url}/`;
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const DIRECTOR_ID = `${SITE.url}/#director`;
export const OG_IMAGE = { url: `${SITE.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Antares Systems: Business Finance Solutions and IT Asset Buyback' };

const UK = { '@type': 'Country', name: 'United Kingdom' };

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: HOME,
  logo: { '@type': 'ImageObject', '@id': `${SITE.url}/#logo`, url: `${SITE.url}/logo_antares.png`, width: 952, height: 264, caption: SITE.name },
  image: OG_IMAGE.url,
  description:
    'Antares Systems introduces UK limited companies, SPVs and property investors to lenders through a regulated partner, and buys surplus business IT equipment with data erasure.',
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address[0],
    addressLocality: SITE.address[1],
    addressRegion: SITE.address[2],
    postalCode: SITE.address[3],
    addressCountry: 'GB',
  },
  areaServed: UK,
  identifier: { '@type': 'PropertyValue', propertyID: 'Companies House company number', value: SITE.companyNo },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: 'GB',
    availableLanguage: ['English'],
  },
  knowsAbout: [
    'Commercial property finance',
    'Buy-to-let mortgages for limited companies',
    'Asset finance',
    'Working capital finance',
    'IT asset buyback',
    'Data erasure',
  ],
  sameAs: [SITE.companiesHouse],
};

export const director = {
  '@type': 'Person',
  '@id': DIRECTOR_ID,
  name: SITE.director,
  jobTitle: 'Director',
  worksFor: { '@id': ORG_ID },
  sameAs: [SITE.linkedin],
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  alternateName: [SITE.legalName],
  url: HOME,
  inLanguage: 'en-GB',
  publisher: { '@id': ORG_ID },
};

export const serviceNodes = () =>
  services.map((s) => ({
    '@type': 'Service',
    '@id': `${SITE.url}/services/#${s.id}`,
    name: s.title,
    serviceType: s.id === 'it-asset-buyback' ? 'IT asset buyback and data erasure' : 'Business finance introduction',
    description: s.summary,
    url: `${SITE.url}/services/#${s.id}`,
    image: `${SITE.url}/img/${s.art}.webp`,
    provider: { '@id': ORG_ID },
    areaServed: UK,
  }));
