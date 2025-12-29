# 🚀 KING SYSTEMS SEO IMPROVEMENT PLAN
## Prioritized, Actionable, Specific

**Created:** December 29, 2024  
**Status:** IMPLEMENTATION READY

---

## ✅ COMPLETED: Schema Markup (Step 1)

**Status:** Organization & LocalBusiness schema added to homepage  
**Impact:** HIGH - Google now understands what/where/who you are

### What Was Added:
- Organization schema (foundingDate, contactPoint, areas served)
- LocalBusiness schema (geo coordinates, hours, price range)

### Still Need To Add:
- [ ] Service schema on ALL service pages (20+ pages)
- [ ] Product schema on technology pages
- [ ] FAQ schema on service-plans pages
- [ ] Case study schema on portfolio pages

---

## 1️⃣ COMPLETE SCHEMA MARKUP ROLLOUT

### Priority: 🔴 CRITICAL (Week 1)

**Pages Needing Service Schema** (15 pages):
```
/commercial/conference-rooms.html
/commercial/training-rooms.html
/commercial/hospitality.html
/commercial/sound-masking.html
/commercial/digital-signage.html
/commercial/cabling-fiber.html
/residential/home-theater.html
/residential/whole-home-audio.html
/residential/lighting-control.html
/industries/corporate.html
/industries/education.html
/industries/healthcare.html
/industries/government.html
/law-assessment-page.html
/law-conference-room-roi-calculator.html
```

**Template for Each:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[SPECIFIC SERVICE - e.g. Conference Room AV Integration]",
  "provider": {
    "@type": "Organization",
    "name": "King Systems LLC"
  },
  "areaServed": {
    "@type": "State",
    "name": "Colorado"
  }
}
```

**FAQ Schema Needed On:**
- service-plans.html
- commercial-service-plans.html
- residential-service-plans.html
- law-assessment-page.html (already has content, just needs schema)

**Case Study Schema Needed On** (5 pages):
```
/case-studies/air-force-academy-falcon-stadium.html
/case-studies/davita-corporate-headquarters.html
/case-studies/unicom-capital-penthouse.html
/case-studies/city-of-brighton-municipal-projects.html
/case-studies/denver-art-museum.html
```

---

## 2️⃣ GOOGLE BUSINESS PROFILE OPTIMIZATION

### Priority: 🔴 CRITICAL (Week 1)

**Current Status:** Unknown - Need GBP access

**Required Actions:**

### Categories (Primary + Secondary):
- **Primary:** Audio Visual Consultant
- **Secondary 1:** Home Automation Company  
- **Secondary 2:** Business Networking Company

### Weekly Photo Updates:
- Upload 3-5 photos per week
- Tag photos with location (Denver, Aspen, Vail, etc.)
- Include: Project completions, team at work, before/after

### Service Descriptions:
Match your spine pages exactly:
- Conference Room AV Integration
- Home Theater Design & Installation
- Smart Home Automation
- Training Room Technology
- Video Conferencing Systems
- Lighting Control Systems

### Posts Strategy (2x per week):
- Link to blog articles
- Link to case studies
- Announce new projects
- Share technology tips

---

## 3️⃣ BACKLINK STRATEGY

### Priority: 🟠 HIGH (Month 1-3)

**Target: 10-20 High-Quality Backlinks**

### Immediate Opportunities (Week 1-2):

**Manufacturer Partners:**
- [ ] Crestron dealer listing
- [ ] Lutron dealer directory
- [ ] Control4 dealer page
- [ ] Savant dealer directory

**Local Business:**
- [ ] Denver Chamber of Commerce
- [ ] Crested Butte Chamber
- [ ] Aspen Chamber
- [ ] Vail Chamber

**Industry Associations:**
- [ ] CEDIA (Custom Electronic Design & Installation Association)
- [ ] NSCA (National Systems Contractors Association)
- [ ] AVIXA

### Medium-term (Month 2-3):

**Partner Sites:**
- Architects you work with
- General contractors
- Interior designers
- Real estate developers

**Action:** Email 5 partners: "Would you add us to your 'Preferred Vendors' page?"

**Client Case Studies:**
- Ask 3-5 clients if you can publish case study on their site linking back
- Offer to write it for them

---

## 4️⃣ KEYWORD INTENT REFINEMENT

### Priority: 🟠 HIGH (Week 2)

**Current Problem:** Pages target broad keywords  
**Solution:** Add intent-driven H2s to existing pages

### Commercial Page Updates:

**Add these H2 sections:**
```html
<h2>Commercial AV Integrator Denver</h2>
<h2>Conference Room AV Design Denver</h2>
<h2>Video Wall Installation Colorado</h2>
<h2>Corporate AV Systems Denver Metro</h2>
```

**DO NOT create new pages - just add H2 sections with 2-3 paragraphs each**

### Residential Page Updates:

**Add these H2 sections:**
```html
<h2>Smart Home Installation Denver</h2>
<h2>Home Theater Installer Colorado</h2>
<h2>Crestron Home Automation Denver</h2>
<h2>Lutron Lighting Control Colorado</h2>
```

### Industry Pages Updates:

**Government:**
```html
<h2>Government Facility AV Systems Denver</h2>
<h2>Municipal Building Technology Colorado</h2>
```

**Healthcare:**
```html
<h2>Healthcare AV Integration Denver</h2>
<h2>Telemedicine Technology Installation Colorado</h2>
```

---

## 5️⃣ INTERNAL LINK ANCHOR OPTIMIZATION

### Priority: 🟡 MEDIUM (Week 3)

**Current Problem:** Generic anchor text ("Learn more", "Click here")

**Solution:** Descriptive, keyword-rich anchors

### Replace These Across Site:

**BEFORE → AFTER:**
- "Learn More" → "Commercial AV Integration Services"
- "View Portfolio" → "Colorado AV Integration Case Studies"
- "Contact Us" → "Schedule Commercial AV Consultation Denver"
- "Get Started" → "Request Smart Home Assessment Colorado"
- "See Projects" → "View Conference Room Installations Denver"

### Pages to Update (10 high-traffic pages):
1. index.html
2. commercial.html
3. residential.html
4. about.html
5. case-studies.html
6. portfolio-commercial.html
7. industries/corporate.html
8. industries/government.html
9. commercial/conference-rooms.html
10. residential/home-theater.html

---

## 6️⃣ AUTHORITY CONTENT (3-5 PAGES)

### Priority: 🟡 MEDIUM (Month 2)

**DO NOT create a blog strategy**  
**DO create 3-5 evergreen authority pages**

### Pages to Create:

#### 1. "How to Choose a Commercial AV Integrator"
**URL:** `/resources/choosing-av-integrator.html`  
**Purpose:** Support sales, earn backlinks  
**Sections:**
- Questions to ask vendors
- Red flags to avoid
- Certifications that matter
- TCO vs upfront cost
- Why experience matters

#### 2. "What Does Commercial AV Really Cost?"
**URL:** `/resources/commercial-av-costs.html`  
**Purpose:** Answer #1 prospect question, rank for cost queries  
**Sections:**
- Conference room: $15k-$35k breakdown
- Training room: $20k-$50k breakdown
- Boardroom: $40k-$100k breakdown
- What affects price
- Hidden costs to avoid
- ROI calculator link

#### 3. "Installer vs Integrator: What's the Difference?"
**URL:** `/resources/installer-vs-integrator.html`  
**Purpose:** Position yourself as integrator, not installer  
**Sections:**
- Definition of each
- Why integration costs more (and why it's worth it)
- Examples of integration vs installation
- When you need each

#### 4. "Commercial AV Standards for Modern Offices"
**URL:** `/resources/commercial-av-standards.html`  
**Purpose:** Demonstrate expertise, support enterprise sales  
**Sections:**
- Industry standards (AVIXA, etc.)
- Network requirements
- Cabling standards
- ADA compliance
- Security requirements

#### 5. "Smart Home Technology That Actually Works in Mountain Homes"
**URL:** `/resources/mountain-home-technology.html`  
**Purpose:** Target high-net-worth Aspen/Vail market  
**Sections:**
- Altitude/weather challenges
- Network reliability at elevation
- Remote monitoring importance
- Backup systems
- Case study: Aspen estate

---

## 7️⃣ PAGE SPEED & CORE WEB VITALS

### Priority: 🟡 MEDIUM (Week 4)

**Action:** Run PageSpeed Insights on these 3 pages:
1. https://kingsystems-website.pages.dev/
2. https://kingsystems-website.pages.dev/commercial.html
3. https://kingsystems-website.pages.dev/commercial/conference-rooms.html

**Likely Issues:**
- CLS (Cumulative Layout Shift) - Logo sizing
- LCP (Largest Contentful Paint) - Hero images
- Unused JavaScript - Font Awesome, Tailwind CDN

**Fixes:**
- Add width/height to images
- Preload hero images
- Consider self-hosting Font Awesome
- Lazy load images below fold

---

## 8️⃣ PROOF SIGNALS (SCHEMA-BACKED)

### Priority: 🟢 LOW (Month 3)

**Add to Homepage:**
```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "127"
}
```

**Add to Each Case Study:**
```json
{
  "@type": "CreativeWork",
  "name": "[Project Name]",
  "description": "[Description]",
  "creator": {
    "@type": "Organization",
    "name": "King Systems LLC"
  },
  "datePublished": "2024-12-28"
}
```

**Add Stats Sections:**
- "500+ Projects Completed Since 2002"
- "60+ Fortune 500 & Government Clients"
- "99.8% System Uptime Guarantee"
- "24/7 Support Available"

---

## 🚫 WHAT NOT TO DO

**DO NOT:**
- ❌ Add more service pages (you have enough)
- ❌ Create location pages for every city
- ❌ Rewrite existing spine pages (they're fine)
- ❌ Keyword stuff
- ❌ Buy cheap backlinks from Fiverr
- ❌ Add a blog posting schedule (waste of time)
- ❌ Create 50 blog posts (3-5 authority pages only)

---

## 📊 IMPLEMENTATION TIMELINE

### Week 1 (CRITICAL):
- [x] Homepage schema (DONE)
- [ ] Add schema to ALL service pages (15 pages)
- [ ] Add FAQ schema to service-plans pages
- [ ] Optimize Google Business Profile
- [ ] Submit sitemap to Google Search Console

### Week 2:
- [ ] Add case study schema (5 pages)
- [ ] Add intent-driven H2s to commercial/residential
- [ ] Request manufacturer backlinks
- [ ] Join chambers of commerce

### Week 3:
- [ ] Update internal link anchors (10 pages)
- [ ] Add industry-specific H2s
- [ ] Request partner backlinks

### Week 4:
- [ ] Run PageSpeed Insights
- [ ] Fix Core Web Vitals issues
- [ ] Create first authority page

### Month 2:
- [ ] Create remaining 2-3 authority pages
- [ ] Continue backlink outreach
- [ ] Monitor rankings in Search Console

### Month 3:
- [ ] Add proof signals with schema
- [ ] Optimize based on Search Console data
- [ ] Refine based on results

---

## 📈 SUCCESS METRICS

**Track These in Google Search Console:**

### Immediate (30 days):
- Pages indexed: All 35+ pages
- Impressions: 50% increase
- Average position: Improve 5-10 spots

### Short-term (60 days):
- Clicks: 30% increase
- Branded searches: Rank #1-3
- Local keywords: Appear in top 20

### Medium-term (90 days):
- Clicks: 100% increase
- 5+ keywords in top 10
- 3+ backlinks acquired

---

## 🎯 PRIORITY RANKING

**This Week (Do First):**
1. Schema markup on all service pages
2. Google Business Profile optimization
3. Submit sitemap.xml

**This Month:**
4. Keyword intent H2s
5. Internal link anchor updates
6. Manufacturer backlinks

**Next Month:**
7. 3-5 authority pages
8. Partner backlinks
9. PageSpeed fixes

---

## 📝 NEXT ACTIONS FOR YOU

1. **Provide GBP Access** - So I can optimize it
2. **Confirm Business Info** - Street address, exact hours
3. **Approve Schema** - Review organization details
4. **Social Media URLs** - For schema sameAs
5. **Review Stats** - Verify "500+ projects, 22 years" claims

---

**Status:** Ready to implement. Schema started. Need your input on GBP access and business details.

Let me know what you want me to tackle first!
