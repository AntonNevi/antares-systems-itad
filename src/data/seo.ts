// Structured data (schema.org JSON-LD). Facts only from SITE_STANDARDS.md section 1.
// No ratings, reviews or certifications for Antares Systems Ltd.
import { SITE } from './site';
import type { Page } from './services';

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
    'Antares Systems provides business finance solutions for UK companies, SPVs and property investors through a partner network of 200+ lenders, creditors and banks, and buys surplus business IT equipment with data erasure.',
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
    'Commercial mortgages',
    'Bridging finance',
    'Buy-to-let mortgages for limited companies and SPVs',
    'Asset finance',
    'Invoice finance',
    'Revolving credit facilities',
    'Business debt review and refinancing',
    'Business loans',
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

export const servicePage = (p: Page) => [
  {
    '@type': 'Service',
    '@id': `${SITE.url}${p.path}#service`,
    name: p.tileTitle,
    serviceType: p.serviceType,
    description: p.summary,
    url: `${SITE.url}${p.path}`,
    image: `${SITE.url}/img/${p.art}.webp`,
    provider: { '@id': ORG_ID },
    areaServed: UK,
    audience: { '@type': 'BusinessAudience', audienceType: p.kind === 'finance' ? 'UK companies, LLPs, SPVs and property investors' : 'UK businesses with surplus IT equipment' },
  },
];
