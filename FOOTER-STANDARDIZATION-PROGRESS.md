# Footer Standardization - Progress

## Pages to Update with Standard Footer

### Main Pages:
- [x] index.html - Already has full footer
- [x] commercial.html - UPDATED
- [x] residential.html - UPDATED
- [ ] about.html
- [ ] blog.html
- [ ] service-plans.html
- [ ] contact.html
- [ ] portfolio.html
- [ ] portfolio-commercial.html
- [ ] portfolio-residential.html
- [ ] case-studies.html

### Industry Pages:
- [ ] industries/corporate.html
- [ ] industries/education.html
- [ ] industries/healthcare.html
- [ ] industries/government.html

### Commercial Subpages:
- [ ] commercial/conference-rooms.html
- [ ] commercial/training-rooms.html
- [ ] commercial/hospitality.html
- [ ] commercial/sound-masking.html
- [ ] commercial/digital-signage.html
- [ ] commercial/cabling-fiber.html

### Residential Subpages:
- [ ] residential/home-theater.html
- [ ] residential/whole-home-audio.html
- [ ] residential/lighting-control.html

### Case Study Pages:
- [ ] case-studies/davita-corporate-headquarters.html
- [ ] case-studies/air-force-academy-falcon-stadium.html
- [ ] case-studies/unicom-capital-penthouse.html
- [ ] case-studies/city-of-brighton-municipal-projects.html
- [ ] case-studies/denver-art-museum.html

## Standard Footer HTML

```html
<footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <img src="/images/logo-2/King Systems Hoodie Logo 2024 - 1000 x 701.png" alt="King Systems" class="h-16 w-auto mb-4">
                <p class="text-gray-400 text-sm">Colorado's premier luxury technology integration specialists since 2002.</p>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Resources</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="/case-studies.html">Case Studies</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                    <li><a href="/service-plans.html">Service Plans</a></li>
                    <li><a href="/testimonials.html">Testimonials</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Commercial</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="/commercial/conference-rooms.html">Conference Rooms</a></li>
                    <li><a href="/commercial/training-rooms.html">Training Rooms</a></li>
                    <li><a href="/commercial/hospitality.html">Hospitality</a></li>
                    <li><a href="/commercial/sound-masking.html">Sound Masking</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Residential</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="/residential.html">Smart Home Integration</a></li>
                    <li><a href="/residential/home-theater.html">Home Theater</a></li>
                    <li><a href="/residential/whole-home-audio.html">Whole-Home Audio</a></li>
                    <li><a href="/residential/lighting-control.html">Lighting Control</a></li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 King Systems LLC. All rights reserved. | Colorado's Luxury Technology Specialists</p>
        </div>
    </div>
</footer>
```
