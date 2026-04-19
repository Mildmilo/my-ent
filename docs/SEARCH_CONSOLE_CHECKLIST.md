# Search Console & GBP Checklist — Session 19 Post-Deploy

This checklist covers the manual steps that must be completed outside the codebase after the SEO foundation deploy (Session 19). These steps cannot be automated — they need to be done by Dr Banks or a delegate with access to the Google Search Console and Google Business Profile accounts for My-ENT.

## 1. Google Search Console

### Property verification

- [ ] Open Google Search Console at https://search.google.com/search-console
- [ ] Add a new property of type **Domain** for `my-ent.com.au` (the Domain property covers both www and apex variants in a single property — preferred over URL Prefix property)
- [ ] Complete DNS verification by adding the TXT record shown by Search Console to the my-ent.com.au DNS zone at Crazy Domains
- [ ] Confirm verification succeeds (can take up to an hour for DNS propagation)

### Sitemap submission

- [ ] In the verified property, open **Sitemaps** in the left sidebar
- [ ] Submit: `https://www.my-ent.com.au/sitemap.xml`
- [ ] Confirm status shows **Success** within 24 hours

### URL inspection and indexing requests

For each of the pages below, open the URL Inspection tool in Search Console (paste the URL into the top search bar), then click **Request indexing** once Google confirms the page can be crawled.

**Homepage**
- [ ] https://www.my-ent.com.au/

**Surgeon pages**
- [ ] https://www.my-ent.com.au/about/dr-catherine-banks
- [ ] https://www.my-ent.com.au/about/dr-lyndon-chan
- [ ] https://www.my-ent.com.au/about/dr-june-huang
- [ ] https://www.my-ent.com.au/about/dr-rithvik-reddy
- [ ] https://www.my-ent.com.au/about/justine-oates

**Condition pages — 23 total**
- [ ] /conditions/sinusitis
- [ ] /conditions/nasal-polyps
- [ ] /conditions/blocked-nose
- [ ] /conditions/hayfever-allergic-rhinitis
- [ ] /conditions/hearing-loss
- [ ] /conditions/tinnitus
- [ ] /conditions/ear-infections
- [ ] /conditions/snoring-sleep-apnoea
- [ ] /conditions/tonsillitis
- [ ] /conditions/nosebleeds
- [ ] /conditions/post-nasal-drip
- [ ] /conditions/skull-base-conditions
- [ ] /conditions/voice-disorders
- [ ] /conditions/swallowing-problems
- [ ] /conditions/reflux-lpr
- [ ] /conditions/cough
- [ ] /conditions/wax-impaction
- [ ] /conditions/vertigo-dizziness
- [ ] /conditions/paediatric-ear-infections
- [ ] /conditions/paediatric-tonsillitis
- [ ] /conditions/paediatric-snoring-osa
- [ ] /conditions/paediatric-blocked-nose
- [ ] /conditions/paediatric-hearing-loss

**Procedure pages — 16 total**
- [ ] /procedures/endoscopic-sinus-surgery
- [ ] /procedures/septoplasty-turbinate-reduction
- [ ] /procedures/adenoidectomy
- [ ] /procedures/skull-base-surgery
- [ ] /procedures/transsphenoidal-pituitary-surgery
- [ ] /procedures/tonsillectomy
- [ ] /procedures/snoring-surgery-uppp
- [ ] /procedures/sleep-endoscopy-dise
- [ ] /procedures/microlaryngoscopy
- [ ] /procedures/grommets
- [ ] /procedures/myringoplasty
- [ ] /procedures/nasendoscopy
- [ ] /procedures/wax-microsuction
- [ ] /procedures/hearing-implant-surgery
- [ ] /procedures/stapes-surgery
- [ ] /procedures/acoustic-neuroma-surgery

### Coverage monitoring

- [ ] After 7 days, check the **Indexing → Pages** report in Search Console
- [ ] Note any pages showing "Crawled — currently not indexed" or "Discovered — currently not indexed" and investigate
- [ ] Expect indexing to take 1–4 weeks for most pages to appear in search results

### Rich results testing

Use https://search.google.com/test/rich-results to verify structured data is parsed correctly by Google:
- [ ] Test homepage — expect MedicalClinic detected
- [ ] Test /conditions/sinusitis — expect MedicalCondition + FAQPage detected
- [ ] Test /about/dr-catherine-banks — expect Physician detected
- [ ] Test /procedures/endoscopic-sinus-surgery — expect MedicalProcedure detected

## 2. Google Business Profile

- [ ] Log into Google Business Profile at https://business.google.com
- [ ] Locate the My-ENT listing (search by practice name if multiple profiles exist)
- [ ] Update the website field to: `https://www.my-ent.com.au`
- [ ] Confirm NAP (Name, Address, Phone) is consistent with the website:
  - Name: My-ENT
  - Address: Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney NSW 2000
  - Phone: 02 9247 1762
- [ ] Update opening hours to Monday–Friday 8:30 am – 5:00 pm
- [ ] Confirm categories include at least: ENT specialist, Otolaryngologist

## 3. DNS — apex domain fix (separate task)

The bare domain `my-ent.com.au` currently does not resolve (confirmed in Session 19 diagnostic). This does not affect users typing `www.my-ent.com.au` but breaks anyone typing the bare domain.

Fix in Crazy Domains DNS panel:
- [ ] Add A record: `@` → `76.76.21.21` (Vercel's apex IP)
- [ ] In Vercel Settings → Domains: confirm both `my-ent.com.au` and `www.my-ent.com.au` are added; set `www.my-ent.com.au` as primary
- [ ] Wait 30 minutes for DNS propagation
- [ ] Verify with: `curl -sIL -o /dev/null -w "%{url_effective} → %{http_code}\n" https://my-ent.com.au` — expect `308` redirect to www

## 4. Completion check

Once all of the above are complete:
- [ ] URL Inspection on 3 sample pages shows "URL is on Google"
- [ ] Rich Results Test shows no errors for sampled schemas
- [ ] Google Business Profile status shows "Published"
- [ ] Apex domain resolves and redirects to www

This completes Session 19 SEO work. Subsequent SEO improvements (e.g. image alt audit, Core Web Vitals, link building) are tracked separately.
