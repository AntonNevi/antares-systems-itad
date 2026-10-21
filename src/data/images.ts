// Alt text for the seven pictures in public/img (SITE_STANDARDS.md 5.5).
export type ImageName = 'property' | 'btl' | 'capex' | 'working-capital' | 'debt-review' | 'it' | 'hero';
export const ALT: Record<ImageName, string> = {
  hero: 'City office buildings at dusk with warm light in the windows',
  property: 'Commercial office building at dusk',
  btl: 'Terrace of townhouses on a quiet residential street',
  capex: 'Business equipment and a commercial vehicle in a clean workshop',
  'working-capital': 'Ledger, pen and papers on a desk under a brass lamp',
  'debt-review': 'Desk at dusk with loan papers, a laptop and a brass lamp above a city view',
  it: 'Business laptops and a server rack in a clean room',
};
