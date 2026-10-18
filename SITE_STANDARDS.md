# Antares Systems — Site Standards

The single source of truth for antaressystems.net: facts we may state, how we write, how the site looks,
and how it is built. Every person and every AI agent working on the site reads this file first.
If something is not covered here, ask before inventing it. Last updated: 17 October 2026.

---

## 1. Verified company facts

| Item | Value | Notes |
|---|---|---|
| Legal name | Antares Systems Ltd | Trading name: Antares Systems |
| Registration | Registered in England and Wales, company no. 14557428 | |
| Registered office | 4 Hawthorn Crescent, South Croydon, London, CR2 8PD (update after the move) | Must appear on the site (trading disclosure rules) |
| VAT number | GB 430817609 (verify against the VAT certificate) | Shown in the footer and in the Organization schema |
| ICO registration | ZC094526 | Renew before 16 February 2027 |
| Insurance | Public Liability and Professional Indemnity | Never publish insurer, policy number or limits. Policy ends 17 Feb 2027. Trade description is "IT Consultant": update before finance work starts |
| Email | info@antaressystems.net | |
| Phone | +44 7774 153420 | Display as +44 7774 153 420 |
| Finance status | **[pending principal agreement]** | See section 3 for the two approved variants |

### Allowed with this exact meaning
- Data erasure on the site: "in line with recognised industry standards, with a report for each device". Do not name
  NIST, IEEE, Certus or any software on the site.
- The only certification wording allowed: "Erasure certified to ADISA L2 and Common Criteria EAL3+ is available on
  request." It comes from the Certus erasure software (agreement in principle only, licensed per job); the
  certification belongs to the software, not to Antares. Never say Antares itself is certified.
- Director experience: more than ten years in corporate finance within a large industrial holding group, organising
  the raising and servicing of corporate debt across more than 50 companies (negotiating with banks, group limits,
  debt service). Supported by a reference letter. Do not name the former employer. Do not publish any amount of debt raised (for example a euro total) unless it is confirmed and can be evidenced.

### Never claim
ADISA certification of the company · NCSC · HMG IS5 · ISO 27001 / 9001 / 14001 ·
Cyber Essentials (Plus) · Microsoft Authorised Refurbisher (MAR) · G-Cloud · Environment Agency permits ·
waste carrier or WEEE registration · "carbon-negative", "zero landfill" · response times, capacities, percentages,
customer counts or sector names we cannot evidence · FCA authorisation of Antares · rates or approval odds ·
any lender-network size other than the figure the partner has confirmed in writing (currently 200+) · names or logos of principals or lenders before written permission.

---

## 2. Positioning and voice

**Order of business:** finance first, IT second. Headline form: *Business Finance Solutions & IT Asset Buyback*.

**Audience:** directors and owners of UK limited companies, LLPs and property SPVs. Not individuals or sole traders.

**Voice:** calm, precise, courteous. A private-bank letter, not a sales brochure.
- UK English (organisation, specialise, licence as noun).
- Plain English: average sentence under 20 words; one idea per sentence; active voice.
- No superlatives ("best", "leading", "trusted", "premium", "world-class"), no exclamation marks, no emoji.
- Say what happens and who does it. Name fees and risks openly.
- Headings in sentence case. Numbers as digits from 10 upwards.

**Finance vocabulary (until a principal agreement says otherwise)**

| Use | Avoid |
|---|---|
| source, prepare, present your case, take it to lenders, support through to completion | advise, recommend, arrange, broker, best deal, better than everyone |
| our partner network of 200+ lenders, creditors and banks (figure confirmed by the partner) | our regulated partner, whole of market |
| subject to status and lender criteria | guaranteed, approved, fast approval |
| we may receive a fee | free, no cost (unless verified in writing) |

---

## 3. Status and partner wording

Decision of 18 Oct 2026 (director): the site speaks positively about what Antares does and does not list what it cannot do. No "regulated partner", no "we do not give advice or arrange finance", no FCA disclaimer text. The partner network is described as **200+ lenders, creditors and banks**; keep that figure in step with what the partner confirms in writing (`NETWORK` in `src/data/site.ts`).

Open items before relying on this wording long term:
- When the introducer / appointed representative agreement is signed, the principal supplies the status line it requires (for example "Antares Systems Ltd is an introducer appointed representative of [Principal], authorised and regulated by the FCA, FRN [number]") and approves every finance promotion. Add that line to `FOOTER_NOTE` in `src/data/site.ts` and keep the principal's approval on file.
- Avoid the regulated verbs "advise" and "arrange", and unprovable superlatives ("best", "better than everyone"). Use "source", "prepare", "present", "take to lenders", "support through to completion".

**Standard texts (single source: `src/data/site.ts` and `src/data/services.ts`)**
- Footer note: "Antares Systems Ltd works with a partner network of 200+ lenders, creditors and banks. All finance is subject to status and lender criteria."
- "Our approach" box (every finance page): sourcing through the partner network, full terms and any fee or commission in the agreement signed before proceeding, finance subject to status and lender criteria.
- Fee question (every finance page): no charge for the first conversation; commission may be received through the partner network; any fee or commission confirmed in writing before proceeding.
- Property pages keep the factual note that lenders usually take a legal charge over the property.

**Trading disclosure (footer, every page):** company name, "Registered in England and Wales", company number,
registered office address, ICO number, VAT number.

---

## 4. Site map

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Position, four service tiles, how an introduction works, why us |
| Property finance | `/property-finance/` | Commercial mortgages, bridging, refurbishment, refinancing. Target: commercial property finance searches |
| Buy-to-let | `/buy-to-let/` | Limited-company and SPV buy-to-let only. Target: limited company / SPV buy-to-let searches |
| CAPEX & OPEX | `/capex-opex-finance/` | Asset finance (CAPEX); OPEX limited to three types: invoice finance, revolving credit facilities, business loans (secured and unsecured) |
| IT asset buyback | `/it-asset-buyback/` | IT buyback with data erasure. Lowest commercial priority |
| History | `/history/` | One short block, "Our history" |
| Contact | `/contacts/` | Form and direct details |
| Privacy policy | `/privacy-policy/` | UK GDPR notice |
| Terms of use | `/terms-of-service/` | Website terms |

Header navigation: Property finance · Buy-to-let · CAPEX & OPEX · IT asset buyback · History · Contact, plus button "Discuss your funding" (button shown from 1200px wide). There is no Services page or tab. The four service pages share one template (`src/pages/[slug].astro`) fed by `src/data/services.ts`; add or change page copy there.

**Redirects (301):** `/services/` → `/it-asset-buyback/` (Google indexed it as "ITAD Services London"); every old IT disposal URL (`/services/data-erasure/`, `/services/itad-asset-recovery/`, `/services/buyback/`, `/services/data-destruction/`, `/services/hardware-refurbishment/`, `/services/it-recycling/` and the other old `/services/*` pages, `/products*`) → `/it-asset-buyback/`; `/compliance/` and `/regulatory/` → `/property-finance/`. Full list in `public/_redirects`.
The footer carries the status note in section 3 and the "Our approach" box appears on each of the three finance pages (not on the IT page).

---

## 5. Design system

**Direction:** private-bank restraint. Generous white space, serif headlines, hairline rules, no shadows on the page,
no glass effects, no stock photography. A calm steel blue with one gold accent. The logo carries the star motif
(Antares is a navigational star); there is no other star or constellation artwork.

### 5.1 Colour tokens (light theme only)

| Token | Hex | Use | Contrast on white |
|---|---|---|---|
| `--ink` | `#0B1F3A` | Headlines, footer and dark bands | 16.5:1 |
| `--text` | `#1C2635` | Body text | 15.2:1 |
| `--muted` | `#566173` | Secondary text, captions | 6.3:1 |
| `--blue` | `#234B80` | Brand, primary buttons, links, logo star | 8.8:1 |
| `--blue-deep` | `#17355F` | Button hover, visited links | 12.3:1 |
| `--gold` | `#BC9759` | Logo accent. Hairlines, markers, the one accent in pictures, text on `--ink` only (also the focus ring in the footer) | decorative (2.7:1); 6.1:1 on ink |
| `--paper` | `#FFFFFF` | Page background | |
| `--porcelain` | `#F4F6F9` | Alternate section background, panels | |
| `--line` | `#D8DEE7` | 1px rules, borders | |
| `--field` | `#7A8699` | Form field borders (3:1 against white) | 3.6:1 |
| `--mist` | `#C9D2DE` | Body text on `--ink` (footer, CTA band) | 11:1 on ink |
| `--mist-dim` | `#AEB9C9` | Small print on `--ink` | 8:1 on ink |
| `--success` | `#1F7A4D` | Form success message | 5.3:1 |
| `--error` | `#B42318` | Form errors | 6.6:1 |

Retired: `#10bb82` green, `#9E9E9E` grey, `#0081CC`, `#004AAD` blue (too bright), `#43ADB9` teal. Never put gold text on white.

### 5.2 Typography

- **Display / headings:** Newsreader Variable, weight 500. Self-hosted via `@fontsource-variable/newsreader`.
- **Body / interface:** Source Sans 3 Variable, weights 400 and 600. Self-hosted via `@fontsource-variable/source-sans-3`.
- Fallbacks: `Newsreader, "Times New Roman", Georgia, serif` · `"Source Sans 3", "Segoe UI", system-ui, sans-serif`.
- Figures: `font-variant-numeric: tabular-nums` wherever numbers align.

| Role | Desktop size / line-height | Mobile | Notes |
|---|---|---|---|
| Hero (H1 home) | 56 / 1.08 | 38 / 1.12 | Newsreader 500, `text-wrap: balance`, letter-spacing −0.01em |
| H1 (inner pages) | 44 / 1.12 | 34 / 1.15 | Newsreader 500 |
| H2 | 34 / 1.18 | 28 / 1.2 | Newsreader 500 |
| H3 | 22 / 1.3 | 20 / 1.3 | Source Sans 3 600 |
| Lead paragraph | 21 / 1.55 | 19 / 1.55 | Source Sans 3 400, `--muted` |
| Body | 18 / 1.65 | 17 / 1.65 | Source Sans 3 400, max 68 characters per line |
| Small / legal | 15 / 1.55 | 15 / 1.55 | |
| Label (eyebrow) | 13 / 1.4 | 13 / 1.4 | Source Sans 3 600, uppercase, letter-spacing 0.12em, `--blue` |

### 5.3 Layout and spacing

- Spacing scale (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. No other values.
- Container: max 1200px content width, side padding 32px desktop, 24px tablet, 16px phone (never less).
- Grid: 12 columns, 32px gap desktop, 24px below 1024px; one column below 640px.
- Section rhythm: 96px top and bottom desktop, 64px phone. Alternate `--paper` and `--porcelain` backgrounds.
- Corner radius: 2px for buttons and inputs, 0 for panels. Borders 1px `--line`.
- No drop shadows. Elevation is shown with background colour and hairlines only.
- Breakpoints: 640 · 1024 · 1280.

### 5.4 Components

- **Header:** white, 80px high, 1px bottom rule; logo left; nav right in Source Sans 3 600 16px; primary button at far right. Sticky with the safe-area rule. Mobile: menu button opens a full-width panel.
- **Buttons:** primary = `--blue` fill, white text, 48px high, 24px side padding, 2px radius; hover `--blue-deep`. Secondary = 1px `--ink` outline, ink text. Text in sentence case. One primary button per view.
- **Links:** `--blue`, underline offset 3px, always underlined in body text.
- **Service page:** hero with H1, lead and a 4:3 picture; then one band per topic (heading in the left third, content in the right two thirds, bands alternate white and porcelain), FAQ as visible text (no FAQ markup), how an introduction works with the risk box (finance pages), related-service tiles, ink CTA band. Each page has exactly one H1 and its own title and description.
- **Service tile (home):** equal-height tiles in a 2 × 2 grid (three across on the related-services row of each service page), hairline border, label, title (H3), one sentence, "Read more" link. No icons.
- **Steps:** numbered 1–4 in Newsreader 500 at 34px, gold hairline above each step. Only for real sequences.
- **History:** one prose block under the heading "Our history", no stages.
- **Trust strip:** one line of three facts separated by thin vertical rules, `--muted` text, no badges.
- **Notice box ("Our approach"):** `--porcelain` background, 2px `--blue` rule on the left, small text.
- **Forms:** labels above fields, 48px inputs, 1px `--line` border, 2px focus ring `--blue` (`--gold` on dark bands); inline error text in `--error`; never rely on placeholder text alone.
- **Footer:** `--ink` background, white and `#C9D2DE` text; four columns; legal line at the bottom in 14px.

### 5.5 Imagery

- **Current set (17 Oct 2026):** six pictures in one "blue hour" art direction, generated with Nano Banana (Google
  Gemini image model) from the prompts below, then retouched (small brand marks removed) and exported by us. Deep navy
  sky and shadow, warm gold window light, wet-ground reflections, calm and premium. They are AI-generated images,
  not documentary photographs: do not describe them as photographs of real client property or real premises.
- **Slots:** `public/img/<name>.webp` (1200×900) and `<name>-800.webp` (800×600), shown through
  `src/components/Visual.astro`.
  Names: `hero` (City street at blue hour) · `property` (modern stone-and-glass office building, wet road) · `btl`
  (Victorian terrace with a gas-style lamp) · `capex` (workshop with a milling machine and a plain white van) · `working-capital`
  (ledger, fountain pen, papers and a brass banker's lamp) · `it` (stacked laptops beside server racks).
  Box ratio 4:3, `--ink` background, 2px radius, `object-fit: cover`.
- **Prompt pattern (keep identical for new images):** "Fine-art [subject] at blue hour, deep navy sky, warm golden
  window light, wet surfaces reflecting the light. Calm, premium and understated, 35mm lens, shallow depth of field,
  subtle film grain, muted colour grade of navy, steel blue and warm gold, editorial magazine quality. No people, no
  text, no signage, no logos, 4:3 aspect ratio." Attach the approved home-page picture as a style reference.
- **Checks before use:** no people, no readable text or numbers, no brand marks (remove with inpainting if present;
  vehicles and server hardware often carry badges), no distorted geometry. Crop to 4:3, export WebP quality 82, each
  file under 250 KB.
- **Records:** check the generator's current terms for commercial use and keep a note of tool, prompt and date for each published image.
- Alt text describes purpose (for example "Commercial office building at dusk"); decorative images use `alt=""`.

- Logo (17 Oct 2026): four-pointed star in `--blue` with a gold centre, wordmark "ANTARES" in Newsreader with
  "SYSTEMS" in Source Sans 3 and a fine gold rule. Files: `public/logo_antares.svg` (on light),
  `public/logo_antares_light.svg` (on `--ink`), `public/logo_antares.png` (structured data), `public/og-image.jpg` (link previews). Header height 46px,
  minimum 32px, clear space equal to the star's radius. Icons are the logo's star alone, one star centred with equal margins, on a transparent background: `public/favicon.svg` (blue star, gold centre; lighter blue in dark mode), `favicon.ico` (48×48), `favicon-192x192.png`. `apple-touch-icon.png` (180×180) has a white background because iOS does not support transparency. Each file is under 1.5 KB. Google needs a square icon whose size is a multiple of 48px and updates it after a re-crawl (days to weeks).

### 5.6 Motion

Hover transitions 150ms ease on colour only. No scroll-triggered reveals, no parallax, no auto-playing content.
Respect `prefers-reduced-motion`.

### 5.7 Accessibility (WCAG 2.2 AA)

Skip link; semantic landmarks; one H1 per page; visible focus on every control; tap targets at least 44px;
text contrast 4.5:1 minimum; forms with labels and error messages; links that make sense out of context.

---

## 6. Technology

- **Framework:** Astro 5, static output, `trailingSlash: 'always'`, directory build format.
- **Styling:** Tailwind CSS 4. All tokens from section 5 live in `src/styles/global.css` under `@theme`; no hard-coded colours in components.
- **Fonts:** self-hosted with Fontsource (no Google Fonts requests).
- **Scripts:** no third-party scripts. Remove HTMX (unused). Small inline scripts only for the mobile menu and form.
- **Contact form:** Web3Forms (public access key in the form; name Web3Forms in the privacy policy).
- **Cookies:** none that are non-essential, so no cookie banner. State this in the privacy policy.
- **Structured data:** one JSON-LD `@graph` per page, built in `src/data/seo.ts` and `BaseLayout.astro` (see 6.1). Facts from section 1 only.
- **Hosting:** Cloudflare Pages from GitHub `main`. Redirects in `public/_redirects`, headers in `public/_headers`.
- **Secrets:** never commit `.kilocode/mcp.json`, `.env` files, API keys or tokens.

### 6.1 SEO (17 Oct 2026)

- **Titles:** `Page topic | Antares Systems`, 60 characters or fewer, unique per page. Home: "Business Finance Solutions & IT Buyback | Antares Systems".
- **Descriptions:** 120 to 155 characters, unique per page, "introduce" wording only, no promises of approval, rates or speed.
- **Head (BaseLayout):** canonical URL with trailing slash on every indexable page; `robots` meta (`index, follow, max-image-preview:large`); `noindex` and no canonical on 404; Open Graph and Twitter tags with `public/og-image.jpg` (1200×630); preload of the two Latin font files; icons and manifest.
- **Structured data:** every indexable page carries `Organization` (name, legal name, logo `public/logo_antares.png`, contact details, registered office, Companies House number and link), `Person` (the director, with LinkedIn), `WebSite` (site name "Antares Systems"), the page itself (`WebPage`, `AboutPage` or `ContactPage`) and a `BreadcrumbList` (except the home page). Each service page adds one `Service` node for its own service. The service page's `WebPage` points to that node with `about` and `mainEntity`. Never add ratings, reviews, FAQ markup, certifications, prices or anything implying Antares Systems Ltd is FCA-regulated. Leave out the VAT number until it is confirmed.
- **Headings:** one H1 per page; H2 and H3 in order; service names in H2.
- **Service pages:** one target search phrase per page, used in the title, H1, first paragraph and at least one H2. Titles stay under about 580px wide (60 characters); descriptions 120–160 characters. A visible breadcrumb (Home / page) matches the `BreadcrumbList`. Each page links to the related pages in its body text with descriptive anchor text (written `[anchor text](/path/)` in `src/data/services.ts`) and in the related-services tiles. Each page has its own share image in `public/og/<slug>.jpg` (1200×630, cropped from its picture); other pages use `og-image.jpg`.
- **Sitemap:** generated by `@astrojs/sitemap` at `/sitemap-index.xml` (404 excluded). Update `LASTMOD` in `astro.config.mjs` when page content changes. `/sitemap.xml` redirects to it.
- **robots.txt:** allow everything, point to the sitemap. Nothing else.
- **Redirects:** every retired URL from the old site has a 301 in `public/_redirects` to the closest current page. Cloudflare adds trailing slashes itself (308); do not add rules for that.
- **Cloudflare dashboard (not in the code):** "Always Use HTTPS" on; a redirect rule from `www.antaressystems.net` to `https://antaressystems.net` (301). `*.pages.dev` copies send `X-Robots-Tag: noindex` from `public/_headers`.
- **Benchmarks (local Lighthouse, 17 Oct 2026):** SEO 100, accessibility 100, best practices 100 and performance 99 to 100 on every page, mobile and desktop. Re-run before each release.
- **After publishing:** verify the domain in Google Search Console (DNS record in Cloudflare) and Bing Webmaster Tools, submit `/sitemap-index.xml`, request indexing of the home page, and check the Pages and Enhancements reports after two weeks. Create a Google Business Profile as a service-area business (address hidden) with the same name, phone and website as the site.

### Release checklist
1. `npm run build` passes.
2. Visual check at 390px, 768px and 1440px (Playwright screenshots).
3. Text scan: no phrase from "Never claim"; status statement and risk wording present; footer disclosure complete.
4. Links and redirects checked; no image over 200 KB; Lighthouse SEO, accessibility and best practices at 100 (section 6.1).
5. Commit on a branch, review, merge to `main`, push.

---

## 7. Working tools

- **Playwright** (already connected): page screenshots and layout checks at the three widths.
- **Web search** (Tavily / DuckDuckGo, already connected): check regulatory wording and facts before publishing.
- **context7** (already in your Antigravity setup): current Astro and Tailwind documentation.
- No extra MCP is needed for design: pictures are generated and exported as WebP, fonts are self-hosted.
