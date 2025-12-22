# Images Directory Structure

## Folder Organization:

```
images/
├── logo/              # Company logos (PNG, SVG)
├── hero/              # Hero/banner images
├── portfolio/         # Portfolio/case study images
├── team/              # Team member photos
├── clients/           # Client logos
├── icons/             # Icon files
└── backgrounds/       # Background images
```

## How to Add Images:

### Method 1: Add Files to This Project (Recommended)
1. Download/save your image files locally
2. Use the Write tool or upload them to this project
3. Reference them in HTML: `<img src="images/logo/king-systems-logo.png">`
4. Deploy to Cloudflare Pages (images included automatically)

### Method 2: Use External CDN
- Upload to: Imgur, ImgBB, Cloudflare Images
- Use direct URLs in your HTML
- Pros: No file size limits in project
- Cons: Dependency on external service

## Current Image References:

All GenSpark URLs need to be replaced with either:
- Local files: `images/logo/logo.png`
- Or stable CDN URLs

## File Size Guidelines:

- Logos: < 100KB (use PNG or SVG)
- Hero images: < 500KB (optimize JPG/WebP)
- Portfolio: < 300KB per image
- Thumbnails: < 100KB

Optimize images before uploading using:
- TinyPNG.com
- Squoosh.app
- ImageOptim
