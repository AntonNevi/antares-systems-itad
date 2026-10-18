// The four service pages. Wording follows SITE_STANDARDS.md: positive, confident, no rates, fees or approval odds.
// No rates, fees or approval odds. Keep every claim inside the approved wording.
// Text fields accept internal links written as [anchor text](/path/).
export type Art = 'property' | 'btl' | 'capex' | 'working-capital' | 'it';

export interface Item { t?: string; d: string }
export interface Section {
  h2: string;
  paras?: string[];
  items?: Item[];
  ordered?: boolean;
  after?: string[];
  art?: Art;
}
export interface Faq { q: string; a: string }

export interface Page {
  slug: string;
  path: string;
  kind: 'finance' | 'it';
  art: Art;
  navLabel: string;
  label: string;
  tileTitle: string;
  tile: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  serviceType: string;
  summary: string;
  sections: Section[];
  faqs: Faq[];
  related: string[];
}

export const INTRO_STEPS = [
  { t: 'First conversation', d: 'We discuss what you need: how much, what for and by when. There is no charge for this conversation.' },
  { t: 'Case summary', d: 'We prepare what lenders ask for: accounts, property or asset details, and how the finance will be repaid.' },
  { t: 'Lender matching', d: 'We take your case to the lenders in our partner network that fit it, and bring you the options available.' },
  { t: 'Completion', d: 'We stay in touch and support you through to completion.' },
];

const FEE_FAQ: Faq = {
  q: 'Do you charge a fee?',
  a: 'There is no charge for the first conversation. We may receive a commission through our partner network, and any fee or commission is confirmed in writing before you proceed.',
};

export const pages: Page[] = [
  {
    slug: 'property-finance',
    path: '/property-finance/',
    kind: 'finance',
    art: 'property',
    navLabel: 'Property finance',
    label: 'Business finance',
    tileTitle: 'Property finance',
    tile: 'Commercial mortgages, bridging and refurbishment finance for companies and property investors.',
    metaTitle: 'Commercial Mortgages & Property Finance UK | Antares Systems',
    metaDescription:
      'Commercial mortgages, bridging and refurbishment finance for UK companies and property investors, through a partner network of 200+ lenders, creditors and banks.',
    h1: 'Commercial property finance for UK companies and investors',
    lead:
      'Commercial mortgages, bridging loans and refurbishment finance for companies, SPVs and property investors. We prepare your case and take it to lenders across our partner network of 200+ lenders, creditors and banks.',
    serviceType: 'Commercial property finance',
    summary:
      'Commercial mortgages, bridging finance, refurbishment finance and refinancing for UK companies and property investors, through a partner network of 200+ lenders, creditors and banks.',
    sections: [
      {
        h2: 'Commercial mortgages, bridging and other property finance',
        items: [
          { t: 'Commercial mortgages', d: 'Longer-term borrowing to buy or refinance offices, shops, industrial units and mixed-use buildings, either as an investment or as premises for your own trading business.' },
          { t: 'Bridging finance', d: 'Short-term borrowing when a purchase has to complete quickly, usually repaid by a sale or a refinance.' },
          { t: 'Refurbishment and light development finance', d: 'Funding to improve, convert or extend a property, often released in stages as the works progress.' },
          { t: 'Refinancing and capital raising', d: 'Replacing an existing loan, or borrowing against property you already own to release cash for another purpose.' },
        ],
      },
      {
        h2: 'What property lenders look at',
        paras: ['Terms vary widely between lenders. Most focus on four things: the property, the income it produces or the business that occupies it, the borrower’s track record, and how the loan will be repaid.'],
        items: [
          { t: 'The property', d: 'Its type, location, condition and valuation.' },
          { t: 'The income', d: 'Rent and lease terms for an investment, or trading accounts for an owner-occupier.' },
          { t: 'The borrower', d: 'The experience and finances of the directors and shareholders, and any property they already own.' },
          { t: 'The exit', d: 'For short-term loans, how you will repay: usually a sale or a refinance.' },
        ],
      },
      {
        h2: 'Information to have ready',
        paras: ['A clear summary at the start saves time and helps avoid surprises later. Lenders commonly ask for:'],
        items: [
          { d: 'Recent accounts, or management figures for a newer company.' },
          { d: 'Details of the property: address, tenure, use, price and any existing loan.' },
          { d: 'Leases or a tenancy schedule where the property is let.' },
          { d: 'A schedule of the directors’ other property and borrowings.' },
          { d: 'For refurbishment projects, a description of the works and a budget.' },
        ],
      },
      {
        h2: 'Costs and security',
        paras: [
          'Lenders usually take a legal charge over the property, which may be at risk if repayments are not made. Costs commonly include a valuation fee, legal fees and an arrangement fee, and some loans carry early repayment charges.',
        ],
      },
    ],
    faqs: [
      { q: 'Can a limited company borrow to buy property?', a: 'Yes. Many lenders lend to limited companies, SPVs and LLPs. If the property will be let as residential accommodation, see our [buy-to-let finance page](/buy-to-let/).' },
      { q: 'How much can I borrow against a commercial property?', a: 'It depends on the lender, the type of property, its income and your circumstances. Lenders normally lend a proportion of the property’s value, and you fund the rest. Once we have your details, we take your case to lenders in our network and come back to you with the options available.' },
      { q: 'What is the difference between a commercial mortgage and bridging finance?', a: 'A commercial mortgage is longer-term borrowing, repaid over a number of years from rent or trading income. Bridging finance is short-term borrowing for a purchase that has to complete quickly or a property that a mortgage lender will not yet accept, and it is repaid by a sale or a refinance.' },
      { q: 'How quickly can bridging finance complete?', a: 'Timescales depend on the lender, the valuation and the legal work. Tell us your deadline at the start and we will factor it into which lenders we approach.' },
      { q: 'Which properties do you cover?', a: 'We work with UK property. Tell us where the property is when you get in touch, as lender appetite varies by location and type.' },
      FEE_FAQ,
    ],
    related: ['buy-to-let', 'capex-opex-finance', 'it-asset-buyback'],
  },
  {
    slug: 'buy-to-let',
    path: '/buy-to-let/',
    kind: 'finance',
    art: 'btl',
    navLabel: 'Buy-to-let',
    label: 'Business finance',
    tileTitle: 'Buy-to-let',
    tile: 'Mortgages for limited-company landlords and SPVs, from a first property to a portfolio.',
    metaTitle: 'Limited Company Buy-to-Let Mortgages (SPV) | Antares Systems',
    metaDescription:
      'Buy-to-let mortgages for limited companies and SPVs: purchases, remortgages, HMOs and portfolios, through a partner network of 200+ lenders.',
    h1: 'Buy-to-let finance for limited companies and SPVs',
    lead:
      'Buy-to-let mortgages for property held in a limited company or special purpose vehicle (SPV). Lenders assess company lending differently from personal buy-to-let, so we prepare your case and take it to our partner network of 200+ lenders, creditors and banks. This page is for limited companies and SPVs.',
    serviceType: 'Limited company buy-to-let finance',
    summary:
      'Buy-to-let mortgages on property held in a limited company or SPV, including purchases, remortgages, HMOs and portfolios, through a partner network of 200+ lenders.',
    sections: [
      {
        h2: 'What is an SPV?',
        paras: [
          'A special purpose vehicle (SPV) is a limited company set up to hold property, usually residential property let to tenants. Landlords use them to keep the property business separate from their personal affairs, to hold a portfolio in one place, or for tax reasons.',
          'Whether a company suits you is a question for your accountant. Once you have decided, we can help with the borrowing.',
        ],
      },
      {
        h2: 'Limited company buy-to-let finance we can source',
        items: [
          { t: 'Purchases through an SPV', d: 'Buying a first or additional property in a limited company.' },
          { t: 'Remortgages', d: 'Refinancing a property or a portfolio that is already held in a company.' },
          { t: 'HMOs and multi-unit blocks', d: 'Houses in multiple occupation and blocks of flats let as a single investment.' },
          { t: 'Portfolio finance', d: 'Borrowing against several properties held by one company or a group of companies.' },
          { t: 'Refurbishment before letting', d: 'Short-term finance to improve a property, followed by a refinance onto a buy-to-let mortgage. See [bridging and refurbishment finance](/property-finance/).' },
        ],
      },
      {
        h2: 'How lenders assess company buy-to-let',
        paras: ['Each lender sets its own criteria. These are the points that come up most often:'],
        items: [
          { t: 'Company activity', d: 'Many lenders expect the company to be set up for property letting, with a property-related SIC code such as 68209.' },
          { t: 'Rental cover', d: 'Lenders test whether the expected rent comfortably covers the mortgage interest. Each lender uses its own test.' },
          { t: 'Personal guarantees', d: 'Directors or shareholders are commonly asked to guarantee the loan. You could be personally liable if the company cannot repay.' },
          { t: 'The property and tenancy', d: 'Type, location, condition, valuation and the tenancy arrangements.' },
          { t: 'Portfolio landlords', d: 'If you have four or more mortgaged buy-to-let properties, lenders look at the whole portfolio, not only the property you are financing.' },
          { t: 'Experience', d: 'Some lenders prefer landlords who already own let property.' },
        ],
      },
      {
        h2: 'Information to have ready',
        items: [
          { d: 'Company details, including the SIC code, directors and shareholders.' },
          { d: 'Property details, the purchase price or valuation, and the expected rent or current tenancy agreement.' },
          { d: 'A schedule of existing property and mortgages held by the directors or the company.' },
          { d: 'Where the deposit is coming from.' },
        ],
      },
      {
        h2: 'Tax and costs',
        paras: [
          'Company-owned property is taxed differently from property held personally. Stamp Duty Land Tax, corporation tax and the treatment of mortgage interest all depend on your circumstances, and moving an existing property into a company can trigger charges. Confirm the details with your accountant before you proceed.',
          'Lenders usually take a legal charge over the property, which may be at risk if repayments are not made. Costs commonly include a valuation fee, legal fees and an arrangement fee, and some loans carry early repayment charges.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I get a buy-to-let mortgage through a limited company?', a: 'Yes. A number of lenders offer buy-to-let mortgages to limited companies and SPVs. Their criteria differ, so a well-prepared case matters.' },
      { q: 'How much deposit do I need?', a: 'It depends on the lender, the property and the rent. Lenders lend a proportion of the property’s value and you fund the rest, and they will ask where the deposit is coming from. We take your case to lenders in our network and come back to you with the options available.' },
      { q: 'Will I need to give a personal guarantee?', a: 'Many lenders ask for one. Requirements vary, and we will tell you what a lender asks for as your case progresses.' },
      { q: 'Can I move a property I already own into a company?', a: 'It can be done, but it may trigger tax charges and usually needs the existing lender’s consent or a new mortgage. Speak to your accountant first.' },
      { q: 'Do you cover buy-to-let for individuals?', a: 'This service is for limited companies and SPVs.' },
      { q: 'Do I need a separate company for each property?', a: 'Not necessarily. Some landlords hold several properties in one company and others use one company per property. Your accountant can confirm the best structure for you, and lenders have their own views.' },
      FEE_FAQ,
    ],
    related: ['property-finance', 'capex-opex-finance', 'it-asset-buyback'],
  },
  {
    slug: 'capex-opex-finance',
    path: '/capex-opex-finance/',
    kind: 'finance',
    art: 'capex',
    navLabel: 'CAPEX & OPEX',
    label: 'Business finance',
    tileTitle: 'CAPEX and OPEX finance',
    tile: 'Asset finance for equipment and vehicles, and funding for running costs and growth.',
    metaTitle: 'CAPEX and OPEX Finance for UK Businesses | Antares Systems',
    metaDescription:
      'Asset finance for capital expenditure, and invoice finance, revolving credit and business loans for running costs, through a partner network of 200+ lenders.',
    h1: 'CAPEX and OPEX finance for UK businesses',
    lead:
      'Finance for the assets your business buys (CAPEX) and the costs it pays to keep running (OPEX): asset finance, invoice finance, revolving credit and business loans. We explain the main options in plain terms, prepare your case and take it to lenders across our partner network of 200+ lenders, creditors and banks.',
    serviceType: 'Asset finance and working capital',
    summary:
      'Asset finance (hire purchase and leasing) and operating finance: invoice finance, revolving credit facilities and business loans, through a partner network of 200+ lenders.',
    sections: [
      {
        h2: 'CAPEX and OPEX in plain English',
        paras: [
          'CAPEX (capital expenditure) is money spent on assets that last, such as machinery, vehicles, technology and fit-outs. OPEX (operating expenditure) is the money a business spends to keep running, such as stock, wages, rent and supplier payments.',
          'The two are financed in different ways, and a lender will want to know which one you are funding. For borrowing secured on commercial or let property, see [property finance](/property-finance/) and [buy-to-let finance](/buy-to-let/).',
        ],
      },
      {
        h2: 'CAPEX finance: asset finance and leasing',
        paras: ['Asset finance spreads the cost of equipment over time instead of paying for it up front, so cash stays free for the business.'],
        items: [
          { t: 'Hire purchase', d: 'You pay in instalments and usually own the asset once the agreement ends.' },
          { t: 'Finance lease', d: 'You pay to use the asset for an agreed period. The lender owns it, and what happens at the end is set out in the agreement.' },
          { t: 'Vehicles and fleets', d: 'Cars, vans and commercial vehicles for one vehicle or a whole fleet.' },
          { t: 'Technology and fit-outs', d: 'Computers, machinery, kitchens, workshops and office or shop fit-outs.' },
          { t: 'Refinancing owned assets', d: 'Releasing cash from equipment or vehicles you already own outright.' },
        ],
        after: ['The asset usually acts as the security, so it may be taken back if repayments are not made. Hire purchase and leasing are treated differently for tax, so check with your accountant.', 'Replacing computers or servers? We can also [buy your surplus IT equipment](/it-asset-buyback/).'],
      },
      {
        h2: 'OPEX finance: invoice finance, revolving credit and business loans',
        paras: ['Funding for day-to-day costs, seasonal peaks and growth, structured around how cash moves through your business.'],
        items: [
          { t: 'Invoice finance', d: 'Borrow against unpaid invoices instead of waiting for customers to pay. It suits businesses that sell to other businesses on credit terms.' },
          { t: 'Revolving credit facility', d: 'A limit you can draw on, repay and draw on again, usually paying interest only on what you use. It suits cash needs that rise and fall.' },
          { t: 'Business loan, secured or unsecured', d: 'A fixed sum repaid over an agreed term. A secured loan is backed by an asset or property. An unsecured loan is not, but may need personal guarantees.' },
        ],
        after: ['Some facilities need personal guarantees or a debenture over the company’s assets, which gives the lender a claim over them if the loan is not repaid.'],
      },
      {
        h2: 'Information to have ready',
        items: [
          { d: 'Recent accounts and current management figures.' },
          { d: 'Business bank statements.' },
          { d: 'For asset finance, a quote or invoice for the asset.' },
          { d: 'For invoice finance, a list of your debtors and the invoices outstanding.' },
          { d: 'A short explanation of how the funds will be used and repaid.' },
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between hire purchase and a finance lease?', a: 'With hire purchase you usually end up owning the asset. With a finance lease the lender keeps ownership and you pay to use it. The tax treatment differs, so check with your accountant.' },
      { q: 'Can I finance used equipment?', a: 'Often yes, although lenders consider the age and resale value of the asset. Tell us what you plan to buy.' },
      { q: 'Can a newer company get finance?', a: 'Lenders usually prefer a trading history, but some consider newer companies, sometimes with personal guarantees or a deposit.' },
      FEE_FAQ,
    ],
    related: ['property-finance', 'buy-to-let', 'it-asset-buyback'],
  },
  {
    slug: 'it-asset-buyback',
    path: '/it-asset-buyback/',
    kind: 'it',
    art: 'it',
    navLabel: 'IT asset buyback',
    label: 'IT services',
    tileTitle: 'IT asset buyback',
    tile: 'Fair-market value for surplus business IT, with documented data erasure.',
    metaTitle: 'IT Asset Buyback and Data Erasure, London | Antares Systems',
    metaDescription:
      'We buy surplus business laptops, servers and networking equipment for reuse: an ITAD option with itemised offers and data erasure reported per device.',
    h1: 'IT asset buyback and data erasure',
    lead:
      'We buy surplus business IT equipment, from laptops to servers and networking, and erase the data before resale. You recover value from equipment you no longer need, with a clear record for every device.',
    serviceType: 'IT asset buyback and data erasure',
    summary:
      'Purchase of surplus business IT equipment, with data erased before resale and a report for each device.',
    sections: [
      {
        h2: 'What IT equipment we buy',
        items: [
          { d: 'Laptops, desktops and workstations.' },
          { d: 'Servers and storage.' },
          { d: 'Networking equipment.' },
          { d: 'GPU and HPC hardware.' },
        ],
        after: [
          'Planning an IT asset disposal (ITAD) project? Buyback lets you recover value from equipment that still works, with the data erased before resale.',
          'We buy equipment for reuse. We do not provide waste collection or recycling.',
        ],
      },
      {
        h2: 'Typical reasons to sell',
        items: [
          { d: 'A laptop or desktop refresh.' },
          { d: 'Server, storage or network upgrades.' },
          { d: 'Office moves, downsizing and closures.' },
          { d: 'GPU and HPC hardware being replaced.' },
        ],
      },
      {
        h2: 'How IT asset buyback works',
        ordered: true,
        items: [
          { d: '[Send us an equipment list](/contacts/).' },
          { d: 'We give you an itemised written offer.' },
          { d: 'We collect at an agreed time, with a signed handover.' },
          { d: 'We erase the data and send you a report for each device.' },
          { d: 'We pay by bank transfer, as agreed in the offer.' },
        ],
      },
      {
        h2: 'Data erasure',
        paras: [
          'Data is erased in line with recognised industry standards, with a report for each device. Erasure certified to ADISA L2 and Common Criteria EAL3+ is available on request.',
          'Under UK GDPR your business remains responsible for the personal data on its devices. Tell us if any device holds sensitive data so that we can agree how it is handled, and keep your own record of the handover.',
        ],
      },
      {
        h2: 'What affects the offer',
        paras: ['Offers are itemised and in writing. They depend on the model, age, specification and condition of each device, the quantity, and current demand for resale. Please list known faults on your equipment list. You are free to decline an offer.'],
      },
    ],
    faqs: [],
    related: ['property-finance', 'buy-to-let', 'capex-opex-finance'],
  },
];

export const bySlug = (slug: string) => pages.find((p) => p.slug === slug)!;
