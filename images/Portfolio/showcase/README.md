# King Systems Showcase Images

This folder contains technology showcase photos used across service pages for close-up equipment shots, installation details, and technology demonstrations.

## Purpose

Showcase images are used for:
- **Technology close-ups** (Crestron panels, QSC racks, video wall displays)
- **Installation details** (clean wiring, equipment racks, control systems)
- **Product demonstrations** (active displays, working systems)
- **Service page feature sections** (conference rooms, video walls, smart boards, etc.)

## Image Specifications

### Required Specs
- **Format**: JPG (for photos)
- **Resolution**: 1000×750px minimum (4:3 ratio preferred)
- **File Size**: 200-300KB (optimized/compressed)
- **Quality**: 80-85% JPEG compression
- **Color**: sRGB color space

### Naming Convention
Use descriptive, lowercase names with hyphens:

✅ **Good examples**:
- `crestron-touch-panel.jpg`
- `qsc-qsys-rack.jpg`
- `video-wall-control-room.jpg`
- `conference-room-camera.jpg`
- `smart-board-classroom.jpg`
- `display-installation.jpg`

❌ **Bad examples**:
- `IMG_3154.jpg`
- `photo (1).jpg`
- `DSC_0042.jpg`

## Current Usage

Showcase images are referenced on these pages:

### Commercial Service Pages
- **conference-rooms.html** - Conference room technology details
- **video-walls.html** - Video wall installation examples
- **training-rooms.html** - Training room technology
- **digital-signage.html** - Digital signage displays
- **hospitality.html** - Hospitality AV systems

### Education Pages
- **education/smart-boards.html** - Smart board technology
- **industries/education.html** - Education technology overview

### Healthcare Pages
- **healthcare/security-surveillance.html** - Security camera systems
- **industries/healthcare.html** - Healthcare AV technology

## Photo Categories Needed

### 1. Control Systems
- Crestron touch panels (wall-mounted and tabletop)
- Control4 controllers
- QSC Q-SYS touch screens
- Control room workstations

### 2. Display Technology
- Video walls (LCD and LED)
- 4K/8K displays
- Interactive displays
- Digital signage screens
- Smart boards

### 3. Audio Equipment
- QSC amplifiers and DSPs
- Microphone arrays
- Speaker installations
- Biamp processors

### 4. Video Conferencing
- PTZ cameras
- Conference room cameras
- Zoom Rooms setups
- Microsoft Teams Rooms

### 5. Installation Details
- Clean equipment racks
- Professional wiring/cabling
- Ceiling installations
- Wall-mounted equipment

## How to Add New Showcase Images

### Step 1: Prepare Your Photos
1. Resize to 1000×750px (or larger, maintaining 4:3 ratio)
2. Compress to 200-300KB using [TinyPNG.com](https://tinypng.com)
3. Rename with descriptive names (see naming convention above)

### Step 2: Upload to GitHub
1. Navigate to: `kingsystems-website/images/showcase/`
2. Click "Add file" → "Upload files"
3. Drag and drop your optimized images
4. Commit with message: "Add showcase images: [brief description]"

### Step 3: Reference in HTML
Use relative paths from the page location:

**From root-level pages** (commercial.html, index.html):
```html
<img src="images/showcase/crestron-touch-panel.jpg" alt="Crestron Touch Panel">
```

**From commercial/ subfolder** (commercial/conference-rooms.html):
```html
<img src="../images/showcase/qsc-qsys-rack.jpg" alt="QSC Q-SYS Rack">
```

**From education/ subfolder** (education/smart-boards.html):
```html
<img src="../images/showcase/smart-board-classroom.jpg" alt="Smart Board Classroom">
```

## Example Implementation

### Conference Rooms Page
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white p-6 rounded-lg shadow">
        <img src="../images/showcase/conference-room-camera.jpg" 
             alt="Conference Room Camera" 
             class="w-full h-48 object-cover rounded mb-4">
        <h4 class="font-bold mb-2">PTZ Cameras</h4>
        <p class="text-sm text-gray-600">Intelligent tracking and framing</p>
    </div>
</div>
```

## Optimization Tools

- **TinyPNG** - https://tinypng.com (best compression)
- **Squoosh** - https://squoosh.app (Google tool)
- **ImageOptim** - https://imageoptim.com (Mac app)

## Best Practices

### DO:
✅ Use well-lit, professional photos  
✅ Show clean, organized installations  
✅ Focus on technology details  
✅ Capture working systems when possible  
✅ Use consistent lighting and quality  

### DON'T:
❌ Use blurry or low-quality photos  
❌ Include watermarks or branding (except yours)  
❌ Show messy wiring or incomplete installs  
❌ Use photos with people's faces (privacy)  
❌ Upload uncompressed/huge files  

---

## Questions?

If you need help placing showcase images on specific pages, just ask!

**Last Updated**: January 5, 2025
