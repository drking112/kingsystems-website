# King Systems - Luxury AV Integration Website

🚀 **Live Site**: https://kingsystems-website.pages.dev

---

## 📖 About This Project

King Systems is Colorado's premier luxury AV integration specialist, offering cutting-edge technology solutions for residential estates and commercial properties. This website showcases our services, portfolio, and expertise in Crestron, Lutron, and Savant systems.

---

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom styling
- **Tailwind CSS** - Utility-first framework (CDN)
- **JavaScript** - Interactive features
- **Font Awesome** - Icons
- **Cloudflare Pages** - Hosting & CDN

---

## 📁 Project Structure

```
kingsystems-website/
├── index.html                          # Homepage
├── about.html                          # About Us
├── contact.html                        # Contact Form
├── residential.html                    # Residential Services
├── commercial.html                     # Commercial Services
├── case-studies.html                   # Portfolio/Case Studies
├── blog.html                          # Blog Listing
├── service-plans.html                 # Service Plans Overview
├── residential-service-plans.html     # Residential Plans
├── commercial-service-plans.html      # Commercial Plans
├── sitemap.html                       # Site Map
├── test-logos.html                    # Logo Testing Page
│
├── case-studies/
│   └── denver-art-museum.html         # Case Study Example
│
├── commercial/
│   ├── conference-rooms.html          # Conference Room Solutions
│   ├── training-rooms.html            # Training Room Tech
│   ├── hospitality.html               # Hospitality Solutions
│   ├── sound-masking.html             # Sound Masking Systems
│   ├── digital-signage.html           # Digital Signage
│   └── cabling-fiber.html             # Cabling & Fiber
│
├── css/
│   └── style.css                      # Custom styles
│
├── js/
│   └── main.js                        # Main JavaScript
│
├── images/
│   ├── logo/                          # Company logos
│   ├── hero/                          # Hero images
│   ├── portfolio/                     # Portfolio images
│   └── clients/                       # Client logos
│
├── .gitignore                         # Git ignore rules
├── README.md                          # This file
├── GITHUB-SETUP-GUIDE.md              # Setup instructions
├── DEPLOYMENT-WORKFLOW.md             # Deployment guide
├── PROJECT_SUMMARY.md                 # Project overview
└── LOGO_UPDATE.md                     # Logo fix documentation
```

---

## 🚀 Deployment

### **Current Setup: Cloudflare Pages + GitHub**

**Automatic Deployment:**
1. Push changes to `main` branch
2. Cloudflare automatically detects changes
3. Site deploys in ~30 seconds
4. Live at: https://kingsystems-website.pages.dev

**Manual Deployment:**
- Cloudflare Dashboard → Pages → kingsystemsstaging
- "Create deployment" → Upload ZIP

---

## 🔧 Local Development

### **Requirements:**
- Any text editor (VS Code, Sublime, Notepad++)
- Web browser
- Git (for version control)

### **Setup:**
```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/kingsystems-website.git

# Navigate to project
cd kingsystems-website

# Open in browser
# Simply open index.html in your browser
# Or use VS Code Live Server extension
```

### **Making Changes:**
```bash
# 1. Edit files locally
# 2. Test in browser

# 3. Commit changes
git add .
git commit -m "Description of changes"

# 4. Push to GitHub
git push origin main

# 5. Cloudflare auto-deploys
```

---

## 📝 Content Pages

### **Main Pages:**
- **Homepage** (`index.html`) - Hero, services overview, featured projects
- **Residential** (`residential.html`) - Home automation, theaters, lighting
- **Commercial** (`commercial.html`) - Enterprise solutions, conference rooms
- **Portfolio** (`case-studies.html`) - Project showcases
- **About** (`about.html`) - Company information
- **Contact** (`contact.html`) - Contact form and information
- **Service Plans** (`service-plans.html`) - Maintenance and support

### **Commercial Solutions Pages:**
- Conference Rooms
- Training Rooms
- Hospitality Solutions
- Sound Masking
- Digital Signage
- Cabling & Fiber

### **Case Studies:**
- Denver Art Museum (example)

---

## 🖼️ Media Management

### **Logo & Small Assets:**
- Store in `/images/logo/`
- Committed to repository
- Reference: `/images/logo/logo.png`

### **Large Media Files:**
- Use ImgBB: https://imgbb.com (free)
- Upload images, get direct links
- Reference in HTML: `<img src="https://i.ibb.co/xxxxx/image.jpg">`

---

## 🐛 Known Issues & To-Do

### **Current Issues:**
- [x] ✅ FIXED: Logo URLs pointing to temporary GenSpark URLs (need permanent hosting)
- [x] ✅ FIXED: Image paths updated to relative URLs for proper deployment
- [x] ✅ FIXED: Manufacturer partner logos now display as images (not text)
- [x] ✅ FIXED: Client logo file naming inconsistencies (delta-dental → delta_dental)
- [ ] Some client logo files may be missing (denver_art_museum, us_air_force, trinity, etc.)
- [ ] Some portfolio images using external temporary URLs

### **Planned Features:**
- [ ] Blog post system (static HTML or CMS integration)
- [ ] Contact form backend (FormSpree or Cloudflare Workers)
- [ ] Image gallery/lightbox for case studies
- [ ] Client testimonials section
- [ ] Video integration for project showcases

### **SEO Optimization:**
- [ ] Add robots.txt
- [ ] Add sitemap.xml
- [ ] Optimize meta descriptions
- [ ] Add structured data (Schema.org)
- [ ] Image alt text optimization
- [ ] Page speed optimization

---

## 🎯 Production Deployment Plan

### **When Ready to Replace WordPress Site:**

1. **Pre-Launch Checklist:**
   - [ ] SEO team approval
   - [ ] All images using permanent URLs
   - [ ] Contact form tested and working
   - [ ] Mobile responsiveness verified
   - [ ] Cross-browser testing completed
   - [ ] Page speed optimized (>90 score)

2. **DNS Configuration:**
   - Add custom domain in Cloudflare Pages settings
   - Update DNS for kingsystemsllc.com to point to Cloudflare
   - SSL certificate (auto-generated by Cloudflare)

3. **WordPress Migration:**
   - Export WordPress content (if needed)
   - Set up 301 redirects from old URLs
   - Update Google Search Console
   - Update social media links

---

## 📊 SEO Testing

**Current Site URL:**
https://kingsystems-website.pages.dev

**Testing Tools:**
- Google PageSpeed Insights
- GTmetrix
- Mobile-Friendly Test
- Lighthouse (Chrome DevTools)

**Prevent Indexing During Staging:**
Add to `<head>` of all pages:
```html
<meta name="robots" content="noindex, nofollow">
```
(Remove before production launch)

---

## 🤝 Contributing

This is a private business website. For internal team updates:

1. Create feature branch: `git checkout -b feature/new-page`
2. Make changes and test locally
3. Commit: `git commit -m "Add new feature"`
4. Push: `git push origin feature/new-page`
5. Create pull request on GitHub
6. Review and merge to main

---

## 📧 Contact

**King Systems**
- Website: https://kingsystemsllc.com
- Live Site: https://kingsystems-website.pages.dev
- Email: [Your Email]
- Phone: [Your Phone]

---

## 📄 License

© 2024 King Systems LLC. All rights reserved.

---

## 🔗 Useful Links

- [GitHub Setup Guide](GITHUB-SETUP-GUIDE.md)
- [Deployment Workflow](DEPLOYMENT-WORKFLOW.md)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

**Last Updated**: 2025-12-29

---

## 🎉 Recent Updates

### 2025-12-29: Floating Contact Form Added 💬
- **NEW FEATURE**: Professional floating chat button with contact form popup
- **Location**: Bottom-right corner (fixed, always visible)
- **Features**: 
  - Smooth animations (fade-in, scale effects)
  - 6-field contact form (First Name, Last Name, Email, Phone, Project Type, Message)
  - 3 close methods (X button, click outside, ESC key)
  - Mobile-responsive design
  - Brand-consistent styling (blue/white color scheme)
- **Form Integration**: Ready for Formspree/EmailJS backend (see docs)
- **Files Modified**: `index.html`, `js/main.js`
- **Documentation**: See [CONTACT-FORM-IMPLEMENTATION.md](CONTACT-FORM-IMPLEMENTATION.md) and [CONTACT-FORM-BACKEND-INTEGRATION.md](CONTACT-FORM-BACKEND-INTEGRATION.md)
- **Next Step**: Connect to email service (Formspree recommended - 10 min setup)

### 2025-12-22 (11:30 PM): ROOT CAUSE IDENTIFIED - Client Logo Issue 🔍
- **CRITICAL DISCOVERY**: GenSpark only has 3 client logos, but HTML references 27+
- **Problem**: Copying from GenSpark to GitHub DELETES your 74 existing logo files
- **Solution**: Created diagnostic tool `test-client-logos.html` to identify which logos exist
- **Action Required**: User must run diagnostic and report which logos are in GitHub
- **DO NOT**: Copy `images/clients/` folder from GenSpark to GitHub anymore!
- See [ROOT-CAUSE-CLIENT-LOGOS.md](ROOT-CAUSE-CLIENT-LOGOS.md) for full details

### 2025-12-22 (11:15 PM): EMERGENCY Client Logo Fix ✅
- **CRITICAL**: Removed all Wikipedia placeholder logos (Microsoft, Google, X, Comcast)
- **Fixed**: Corrupt duplicate section causing backwards scrolling
- **Corrected**: All filename mismatches (hyphens vs underscores)
- **Optimized**: Scrolling speed set to 25 seconds (smooth, professional)
- All 27 client logos now display correctly with seamless looping
- See [EMERGENCY-CLIENT-LOGO-FIX.md](EMERGENCY-CLIENT-LOGO-FIX.md) for details

### 2025-12-22 (10:50 PM): Logo Speed & Display Fix ✅
- **Client Logo Speed**: DOUBLED scrolling speed (30s → 15s per cycle)
- **Partner Logo Display**: Fixed McIntosh, Sonos, Sonus Faber rendering issues
- **CSS Updates**: Increased logo size constraints for better visibility
- **Diagnostic Tool**: Created `test-partner-logos.html` for logo testing
- All 14 partner logos + 74 client logos now optimized
- See [SPEED-AND-LOGO-FIX.md](SPEED-AND-LOGO-FIX.md) for complete details

### 2025-12-22: Logo Fixes Complete ✅
- **Manufacturer Logos**: Replaced text with actual logo images (14 partner brands)
- **Client Logo References**: Fixed file naming inconsistency (delta-dental → delta_dental)
- **University of Denver**: Downloaded and added missing logo file
- **Partner Logo Styling**: Added CSS for grayscale hover effects and animation
- All logos now display correctly on deployed site
- See [LOGO-FIX-DECEMBER-22.md](LOGO-FIX-DECEMBER-22.md) for complete details

### 2025-12-22: Complete Image Path Fix ✅
- **Client Logos**: Fixed all client logo image paths (85 references)
- **Company Logo**: Updated King Systems logo in 18 HTML files
- Changed from absolute paths (`/images/...`) to relative paths (`images/...`)
- Changed from GenSpark URLs to local files (`images/logo/king-systems-logo.jpg`)
- Ensures proper image loading on Cloudflare Pages deployment
- All 19 client logos + company logo now use correct paths
- See [FILES-UPDATED-SUMMARY.md](FILES-UPDATED-SUMMARY.md) for complete details
