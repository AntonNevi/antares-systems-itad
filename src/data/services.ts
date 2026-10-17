export interface ServiceRow { k: string; v: string }
export interface Service {
  id: string;
  art: 'property' | 'btl' | 'capex' | 'working-capital' | 'it';
  label: string;
  title: string;
  tile: string;
  summary: string;
  usesTitle: string;
  uses: string[];
  steps?: string[];
  rows: ServiceRow[];
}

export const services: Service[] = [
  {
    id: 'property-finance',
    art: 'property',
    label: 'Business finance',
    title: 'Property finance',
    tile: 'Commercial mortgages, bridging and refurbishment finance for property owners and investors.',
    summary:
      'Finance to buy, refinance or raise capital against commercial and investment property. Lenders look at the property, the income it produces and the strength of the borrower, and their terms vary widely.',
    usesTitle: 'Typical uses',
    uses: [
      'Buying offices, shops, industrial units or mixed-use buildings',
      'Owner-occupier mortgages for trading businesses',
      'Refinancing, or releasing equity from property you own',
      'Bridging finance when a purchase must complete quickly',
      'Refurbishment and light development',
    ],
    rows: [
      { k: 'Suited to', v: 'Trading companies buying their premises, property investment companies and experienced developers.' },
      { k: 'Lenders usually ask for', v: 'Recent accounts, property details and valuation, rental or trading figures, and information about the directors.' },
      { k: 'Good to know', v: 'Lenders usually take a legal charge over the property, which may be at risk if repayments are not made.' },
    ],
  },
  {
    id: 'buy-to-let-spv',
    art: 'btl',
    label: 'Business finance',
    title: 'Buy-to-let for SPVs',
    tile: 'Mortgages for limited-company landlords, from a first property to a portfolio.',
    summary:
      'Buy-to-let mortgages for property held in a limited company or special purpose vehicle (SPV). Lenders assess these differently from personal buy-to-let, and this service covers lending to companies only.',
    usesTitle: 'Typical uses',
    uses: [
      'Buying a first or additional property through an SPV',
      'Remortgaging an existing property or portfolio',
      'Houses in multiple occupation (HMOs) and multi-unit blocks',
      'Portfolio finance',
    ],
    rows: [
      { k: 'Lenders usually ask for', v: 'Company details, expected rent, property details, information about the directors and shareholders, and usually personal guarantees.' },
      { k: 'Good to know', v: 'The tax treatment of company-owned property depends on your circumstances, so speak to your accountant.' },
    ],
  },
  {
    id: 'capex-finance',
    art: 'capex',
    label: 'Business finance',
    title: 'CAPEX finance',
    tile: 'Asset finance and leasing for equipment, vehicles, machinery and fit-outs.',
    summary:
      'Spread the cost of the assets your business needs instead of paying up front, and keep cash free for running the business.',
    usesTitle: 'Typical uses',
    uses: [
      'Hire purchase and finance leases for equipment, plant and machinery',
      'Commercial vehicles and fleets',
      'Technology and fit-outs',
      'Refinancing assets you already own to release cash',
    ],
    rows: [
      { k: 'Lenders usually ask for', v: 'Recent accounts and a quote or invoice for the asset.' },
      { k: 'Good to know', v: 'The asset usually acts as security. Leasing and hire purchase are treated differently for tax, so check with your accountant.' },
    ],
  },
  {
    id: 'working-capital',
    art: 'working-capital',
    label: 'Business finance',
    title: 'OPEX and working capital',
    tile: 'Funding for running costs and growth, including invoice finance and revolving facilities.',
    summary:
      'Funding for day-to-day costs, seasonal peaks and growth, structured around how cash moves through your business.',
    usesTitle: 'Typical uses',
    uses: [
      'Invoice finance',
      'Revolving credit facilities',
      'Secured and unsecured business loans',
      'Trade finance for paying suppliers and importing stock',
      'Spreading VAT and corporation tax bills',
    ],
    rows: [
      { k: 'Lenders usually ask for', v: 'Accounts and management figures, bank statements, a debtor list for invoice finance, and a short explanation of how the funds will be used and repaid.' },
      { k: 'Good to know', v: 'Some facilities need personal guarantees or a debenture over company assets.' },
    ],
  },
  {
    id: 'it-asset-buyback',
    art: 'it',
    label: 'IT services',
    title: 'IT asset buyback and data erasure',
    tile: 'Fair-market value for surplus business IT, with documented data erasure.',
    summary:
      'We buy surplus business IT equipment and erase the data before resale, so you recover value with a clear record for every device.',
    usesTitle: 'How it works',
    uses: [],
    steps: [
      'Send us an equipment list.',
      'We give you an itemised written offer.',
      'We collect at an agreed time, with a signed handover.',
      'We erase the data and send you a report for each device.',
      'We pay by bank transfer, as agreed in the offer.',
    ],
    rows: [
      { k: 'What we buy', v: 'Laptops, desktops, workstations, servers, storage, networking equipment and GPU or HPC hardware.' },
      { k: 'Data erasure', v: 'Data is erased in line with recognised industry standards, with a report for each device. Erasure certified to ADISA L2 and Common Criteria EAL3+ is available on request.' },
      { k: 'Good to know', v: 'We buy equipment for reuse. We do not provide waste collection or recycling.' },
    ],
  },
];
