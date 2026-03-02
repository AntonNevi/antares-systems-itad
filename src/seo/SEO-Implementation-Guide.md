# Antares Systems SEO Implementation Guide

## Executive Summary

This document specifies all SEO elements for the Antares Systems website (antaressystems.net) based on certified ITAD positioning. The site already has strong foundations - this guide provides page-by-page optimization.

---

## 1. PAGE-SPECIFIC SEO ELEMENTS

### Page: `/` (Homepage)

**Current State**: Has proper meta tags, H1, schema

**Optimized Meta Tags**:
```yaml
title: "Secure Data Erasure London | ADISA Certified ITAD | Antares Systems"
description: "ADISA L2 and Common Criteria EAL3+ certified data erasure. NIST 800-88 compliant ITAD services for London, Manchester, Bristol. Get forensic verification and legal-grade certificates."
og:title: "Secure Data Erasure London | ADISA Certified ITAD | Antares Systems"
og:description: "ADISA L2 and Common Criteria EAL3+ certified data erasure. NIST 800-88 compliant ITAD services for London, Manchester, Bristol. Get forensic verification and legal-grade certificates."
twitter:title: "Secure Data Erasure London | ADISA Certified ITAD | Antares Systems"
twitter:description: "ADISA L2 and Common Criteria EAL3+ certified data erasure. NIST 800-88 compliant ITAD services for London, Manchester, Bristol."
```

**Header Hierarchy** (verify in code):
- H1: "Secure IT Asset Buyback & Certified Data Erasure in London" ✓
- H2: "Company Overview"
- H2: "Core Services"  
- H3: "Data Destruction"
- H3: "IT Buyback"
- H3: "IT Solutions"
- H2: "International Operations"

**Schema.org JSON-LD** (enhance existing):
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Antares Systems",
  "alternateName": "Antares Systems ITAD",
  "description": "London-based ITAD technology partner. Certified to ADISA L2 and Common Criteria EAL3+ standards. End-to-end IT lifecycle management.",
  "url": "https://antaressystems.net",
  "logo": "https://antaressystems.net/logo_antares.webp",
  "telephone": "+44-7774-153420",
  "email": "info@antaressystems.net",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "CR2 8PD",
    "addressLocality": "London",
    "postalCode": "CR2 8PD",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.3484",
    "longitude": "-0.1056"
  },
  "openingHours": "Mo-Fr 09:00-17:30",
  "priceRange": "££",
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": ["ITAD", "Data Erasure", "IT Asset Disposal"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ITAD Services",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Certified Data Erasure"},
      {"@type": "ListItem", "position": 2, "name": "IT Asset Buyback"},
      {"@type": "ListItem", "position": 3, "name": "Office IT Solutions"},
      {"@type": "ListItem", "position": 4, "name": "Secure Logistics"},
      {"@type": "ListItem", "position": 5, "name": "On-Site Services"}
    ]
  },
  "certification": [
    {"@type": "Certification", "name": "ADISA L2", "authority": "ADISA"},
    {"@type": "Certification", "name": "Common Criteria EAL3+", "authority": "NIAP"}
  ],
  "sameAs": [
    "https://www.linkedin.com/company/antares-systems-ltd",
    "https://twitter.com/AntaresSystemsUK"
  ]
}
```

**Internal Links** (add if missing):
- "/" → "/services" anchor: "ITAD services"
- "/" → "/services/data-erasure" anchor: "certified data erasure"
- "/" → "/services/itad-asset-recovery" anchor: "IT asset buyback"
- "/" → "/services/office-it-solutions" anchor: "office IT solutions"
- "/" → "/compliance" anchor: "compliance certifications"
- "/" → "/contacts" anchor: "Get a quote"

---

### Page: `/services`

**Current State**: Good structure, service hub page

**Optimized Meta Tags**:
```yaml
title: "ITAD Services London | Certified Data Destruction & IT Asset Disposal UK"
description: "Comprehensive ITAD services in London, Manchester, Bristol. ADISA L2 certified data erasure, secure IT asset disposal, corporate buyback, office IT solutions. NIST 800-88 compliant with full chain-of-custody."
og:title: "ITAD Services London | Certified Data Destruction & IT Asset Disposal UK"
og:description: "Comprehensive ITAD services in London, Manchester, Bristol. ADISA L2 certified data erasure, secure IT asset disposal, corporate buyback, office IT solutions."
```

**Header Hierarchy**:
- H1: "ITAD Cluster Services" (consider: "ITAD Services London | Certified Data Destruction & IT Asset Disposal")
- H2: "Certified Data Erasure"
- H2: "IT Asset Buyback"
- H2: "Office IT Solutions"
- H2: "Secure Logistics"
- H2: "On-Site Services"

**Schema.org**: Use existing `servicesHub` type

---

### Page: `/services/data-erasure`

**Current State**: Strong page with process flow

**Optimized Meta Tags**:
```yaml
title: "ADISA L2 Data Erasure London | NIST 800-88 & Common Criteria EAL3+ Certified"
description: "ADISA L2 and Common Criteria EAL3+ certified data erasure in London. NIST 800-88 and IEEE 2883-2022 compliant. Forensic verification, chain-of-custody, legal-grade certificates. Server, laptop, storage destruction."
og:title: "ADISA L2 Data Erasure London | NIST 800-88 & Common Criteria EAL3+ Certified"
og:description: "ADISA L2 and Common Criteria EAL3+ certified data erasure in London. NIST 800-88 and IEEE 2883-2022 compliant. Forensic verification, chain-of-custody, legal-grade certificates."
```

**Header Hierarchy**:
- H1: "Certified Data Erasure"
- H2: "Process Flow"
- H3: "Asset Registration"
- H3: "Secure Transport"
- H3: "Certified Wiping"
- H3: "Forensic Verification"
- H3: "Documentation"
- H2: "Standards & Compliance"
- H2: "Environmental Impact"

**Schema.org** (enhance existing):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ADISA L2 Certified Data Erasure",
  "serviceType": "Data Erasure",
  "provider": {
    "@type": "Organization",
    "name": "Antares Systems"
  },
  "description": "ADISA L2 and Common Criteria EAL3+ certified data erasure. NIST 800-88 and IEEE 2883-2022 compliant data destruction with forensic verification.",
  "areaServed": ["London", "Manchester", "Bristol", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Erasure Services",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Software-Based Data Wiping"},
      {"@type": "ListItem", "position": 2, "name": "Degaussing Services"},
      {"@type": "ListItem", "position": 3, "name": "Physical Hardware Destruction"}
    ]
  },
  "additionalProperty": [
    {"@type": "PropertyValue", "name": "Certification", "value": "ADISA L2"},
    {"@type": "PropertyValue", "name": "Certification", "value": "Common Criteria EAL3+"},
    {"@type": "PropertyValue", "name": "Compliance", "value": "NIST 800-88"},
    {"@type": "PropertyValue", "name": "Compliance", "value": "IEEE 2883-2022"}
  ]
}
```

---

### Page: `/services/itad-asset-recovery`

**Current State**: Good, called "IT Asset Buyback"

**Optimized Meta Tags**:
```yaml
title: "IT Asset Buyback London | Corporate IT Disposal & Bulk Computer Recycling"
description: "Maximum recovery value for corporate IT assets. Fair-market valuation for AI servers, GPU servers, HPC clusters. Secure collection, same-day payment. London, Manchester, Bristol. NIST 800-88 certified data destruction included."
og:title: "IT Asset Buyback London | Corporate IT Disposal & Bulk Computer Recycling"
og:description: "Maximum recovery value for corporate IT assets. Fair-market valuation for AI servers, GPU servers, HPC clusters. Secure collection, same-day payment."
```

**Header Hierarchy**:
- H1: "IT Asset Buyback"
- H2: "Valuation Process"
- H2: "Security & Compliance"
- H2: "Accepted Equipment"

---

### Page: `/services/office-it-solutions`

**Optimized Meta Tags**:
```yaml
title: "Office IT Solutions London | Workplace Technology Deployment & Microsoft 365"
description: "End-to-end workplace technology deployment in London. Hardware procurement, Microsoft 365 licensing, professional installation, ongoing support. Scalable solutions from 5 to 500+ users. Integration with IT buyback programs."
og:title: "Office IT Solutions London | Workplace Technology Deployment & Microsoft 365"
og:description: "End-to-end workplace technology deployment. Hardware procurement, Microsoft 365 licensing, professional installation, ongoing support."
```

**Header Hierarchy**:
- H1: "Office IT Solutions"
- H2: "What We Deliver"
- H3: "Hardware Sourcing"
- H3: "Software Licensing"
- H3: "Professional Installation"
- H3: "Ongoing Support"
- H2: "How It Works"
- H2: "Why Antares"

---

### Page: `/services/secure-logistics`

**Optimized Meta Tags**:
```yaml
title: "Secure IT Logistics UK | Chain-of-Custody Transport & International Export"
description: "GPS-tracked, secure IT asset transport. International export to Kazakhstan, Uzbekistan, Middle East. Chain-of-custody documentation. Tamper-evident packaging. UK-wide collection from London, Manchester, Bristol."
og:title: "Secure IT Logistics UK | Chain-of-Custody Transport & International Export"
og:description: "GPS-tracked, secure IT asset transport. International export to Kazakhstan, Uzbekistan, Middle East. Chain-of-custody documentation."
```

**Header Hierarchy**:
- H1: "Secure Logistics"
- H2: "Collection Process"
- H2: "Security Protocols"
- H2: "Export & International Coverage"

---

### Page: `/services/onsite-services`

**Optimized Meta Tags**:
```yaml
title: "On-Site Data Destruction London | Emergency 4-Hour IT Disposal"
description: "Emergency on-site data destruction with 4-hour deployment in London, Manchester, Bristol. Witnessed IT asset disposal, immediate certification. NIST 800-88 compliant. For financial, healthcare, legal, government sectors."
og:title: "On-Site Data Destruction London | Emergency 4-Hour IT Disposal"
og:description: "Emergency on-site data destruction with 4-hour deployment. Witnessed IT asset disposal, immediate certification."
```

**Header Hierarchy**:
- H1: "On-Site Services"
- H2: "Emergency Response Scenarios"
- H2: "Security Process"
- H2: "Ideal For These Industries"

---

### Page: `/compliance`

**Optimized Meta Tags**:
```yaml
title: "ADISA Certified ITAD Compliance | Data Destruction Certificates UK"
description: "Antares Systems compliance portfolio. ADISA L2, Common Criteria EAL3+, NIST 800-88, IEEE 2883-2022. ICO registered ZC094526. WEEE compliant. Professional indemnity insurance. London-based ITAD partner."
og:title: "ADISA Certified ITAD Compliance | Data Destruction Certificates UK"
og:description: "Antares Systems compliance portfolio. ADISA L2, Common Criteria EAL3+, NIST 800-88, IEEE 2883-2022. ICO registered ZC094526."
```

**Header Hierarchy**:
- H1: "Your Data Protection is Our Business"
- H2: "Carbon-Negative IT Disposal" (consider reword for H1)
- H2: "ACTIVE STATUS"
- H2: "COMPLIANCE FRAMEWORK"

---

### Page: `/contacts`

**Optimized Meta Tags**:
```yaml
title: "Contact ITAD London | Get Quote for Data Erasure & IT Asset Disposal"
description: "Contact Antares Systems for certified ITAD services. Same-day response for data erasure quotes, IT asset buyback, office IT solutions. London, Manchester, Bristol. Call +44 7774 153420 or email info@antaressystems.net"
og:title: "Contact ITAD London | Get Quote for Data Erasure & IT Asset Disposal"
og:description: "Contact Antares Systems for certified ITAD services. Same-day response for data erasure quotes, IT asset buyback, office IT solutions."
```

**Schema.org** (add LocalBusiness to contact page):
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "name": "Antares Systems",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "postalCode": "CR2 8PD",
    "addressCountry": "GB"
  },
  "telephone": "+44-7774-153420",
  "email": "info@antaressystems.net",
  "url": "https://antaressystems.net/contacts",
  "openingHours": "Mo-Fr 09:00-17:30"
}
```

---

## 2. TECHNICAL SEO CHECKLIST

### Canonical URLs
All pages should have self-referencing canonical. Verify in BaseLayout:
```html
<link rel="canonical" href="https://antaressystems.net/{page-path}" />
```

### Hreflang (add to BaseLayout head)
```html
<link rel="alternate" hreflang="en-GB" href="https://antaressystems.net/" />
<link rel="alternate" hreflang="en" href="https://antaressystems.net/" />
```

### XML Sitemap (current is good, verify)
Priority structure:
- `/` → 1.0 ✓
- `/services` → 0.9 ✓
- `/services/data-erasure` → 0.8 ✓
- `/services/itad-asset-recovery` → 0.8 ✓
- `/services/office-it-solutions` → 0.8 ✓
- `/services/secure-logistics` → 0.8 ✓
- `/services/onsite-services` → 0.8 ✓
- `/compliance` → 0.6 ✓
- `/contacts` → 0.6 ✓

**Missing from sitemap**: `/services/office-it-solutions` - add this URL

### robots.txt
Current is good. Verify:
```
User-Agent: *
Allow: /
Disallow: /node_modules/
Disallow: /src/
Sitemap: https://antaressystems.net/sitemap.xml
```

---

## 3. INTERNAL LINKING STRATEGY

### Homepage → Service Pages
| Source | Target | Anchor Text |
|--------|--------|-------------|
| Hero CTA | /services | "Our Services" |
| Trust Bar | /compliance | "View our certifications" |
| Service Cards | /services/data-erasure | "Data Destruction" |
| Service Cards | /services/itad-asset-recovery | "IT Buyback" |
| Service Cards | /services/office-it-solutions | "IT Solutions" |
| Footer | /services | "Services" |
| Footer | /contacts | "Contact Us" |

### Service Pages → Cross-Links
| Source | Target | Anchor Text |
|--------|--------|-------------|
| Data Erasure | /services/onsite-services | "emergency on-site destruction" |
| Data Erasure | /compliance | "compliance certifications" |
| IT Buyback | /services/secure-logistics | "secure collection" |
| IT Buyback | /services/data-erasure | "included data destruction" |
| Office IT | /services/itad-asset-recovery | "IT asset buyback" |
| Office IT | /contacts | "request a quote" |
| Secure Logistics | /services/data-erasure | "certified processing" |
| On-Site | /services/data-erasure | "certified data erasure" |
| On-Site | /contacts | "book emergency deployment" |

### Breadcrumb Structure (verify implementation)
Home > Services > [Current Service]
Home > Compliance
Home > Contacts

---

## 4. IMAGE OPTIMIZATION

### Current Images (verify in public folder)
All images should be:
- WebP format ✓ (verified: /Secure_data.png, /IT_asset.png, etc.)
- Lazy loading: `loading="lazy"` ✓
- Descriptive alt text ✓

### Image Alt Text (verify/enhance)

| File | Current Alt | Recommended Alt |
|------|-------------|-----------------|
| /logo_antares.webp | - | "Antares Systems - ADISA Certified ITAD Partner" |
| /Secure_data.png | Good | "ADISA L2 certified data erasure facility in London" |
| /IT_asset.png | Good | "Corporate IT asset buyback - GPU servers and enterprise hardware" |
| /F1.jpg | Good | Keep current - very descriptive |
| /F2.jpg | Good | Keep current |
| /F3.png | Good | "Office IT solutions - workplace technology deployment" |
| /F4.jpg | Good | "Secure IT logistics - GPS-tracked transport" |
| /F5.jpg | Good | "On-site data destruction - witnessed IT asset disposal" |
| /ESG.png | Good | "Carbon-negative IT disposal and ESG compliance" |

---

## 5. CONTENT OPTIMIZATION

### Keyword Density Guidelines

**Tier 1 (Primary)** - 1-2% density:
- secure data erasure London
- ITAD London
- ADISA certified
- certified data destruction

**Tier 2 (Secondary)** - 0.5-1%:
- NIST 800-88 compliant
- Common Criteria EAL3+
- chain-of-custody
- certificate of destruction

**LSI Keywords** (include naturally):
- forensic verification
- asset recovery
- remarketing
- workplace technology
- IT lifecycle management

### E-E-A-T Signals (verify on site)
✓ Certifications displayed: ADISA L2, Common Criteria EAL3+
✓ Physical address: London, CR2 8PD
✓ Contact details: phone, email
✓ Professional details: founding date 2020

---

## 6. IMPLEMENTATION PRIORITY

### Priority 1 - Critical
1. Add office-it-solutions to sitemap.xml
2. Update meta descriptions for all pages per spec
3. Add hreflang tags to BaseLayout

### Priority 2 - Important
4. Enhance schema.org with LocalBusiness on all pages
5. Add missing internal cross-links between service pages
6. Verify/enhance breadcrumb implementation

### Priority 3 - Nice to Have
7. Add FAQ schema to data-erasure and compliance pages
8. Review image compression (ensure WebP under 100KB)
9. Add more detailed certification badges

---

## 7. CERTIFICATIONS - VERIFIED CLAIMS

### Confirmed (can claim):
- ✓ ADISA L2 (Asset Recovery)
- ✓ ADISA (Data Erasure)
- ✓ Common Criteria EAL3+
- ✓ NIST 800-88 Rev 1
- ✓ IEEE 2883-2022
- ✓ ICO Registered: ZC094526
- ✓ WEEE (EA/WR351100)

### Do NOT Claim (unverified):
- ✗ ISO 27001 (not verified)
- ✗ NCSC Approved/Assured (not verified)
- ✗ HMG IS5 (use "NIST 800-88" instead)
- ✗ Cyber Essentials Plus (not verified)

---

## 8. GEOGRAPHIC TARGETING

### Primary Location
- London (base)
- CR2 8PD (postal code)

### Secondary Locations
- Manchester
- Bristol
- Leeds
- Edinburgh
- Glasgow
- Birmingham

### UK-Wide Coverage
- "UK-wide" or "across the United Kingdom"
- "London, Manchester, Bristol" in meta descriptions

---

## Summary

The Antares Systems website has a **strong SEO foundation**. Key improvements needed:

1. **Meta tags**: Update descriptions per page-specific targets
2. **Sitemap**: Add missing /services/office-it-solutions
3. **Schema**: Enhance with LocalBusiness type
4. **Internal linking**: Add cross-links between related services
5. **hreflang**: Add for international targeting

No visual changes required - all implementation is in meta tags, schema, and content structure.
