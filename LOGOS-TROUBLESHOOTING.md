# Association Logos - Troubleshooting Guide

## Issue: Logos Not Displaying (White Boxes Show)

### Quick Fix Checklist

1. **Check File Names** (must be EXACT):
   - ✅ `cedia-logo.png` (all lowercase, .png extension)
   - ✅ `avixa-logo.png` (all lowercase, .png extension)
   - ✅ `cepro-logo.png` (all lowercase, .png extension)
   - ✅ `bicsi-logo.png` (all lowercase, .png extension)

2. **Check File Location**:
   ```
   images/
     └── associations/
         ├── cedia-logo.png  ← Must be here
         ├── avixa-logo.png  ← Must be here
         ├── cepro-logo.png  ← Must be here
         └── bicsi-logo.png  ← Must be here
   ```

3. **Check File Format**:
   - ❌ NOT `.jpg`, `.jpeg`, or `.JPG`
   - ❌ NOT `.PNG` (uppercase)
   - ✅ MUST be `.png` (lowercase)

4. **Check GitHub**:
   - Files must be committed to GitHub
   - Files must be pushed to remote
   - Check your repository online to verify files are there

5. **Check Deployment**:
   - GitHub Pages takes 1-2 minutes to rebuild
   - Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
   - Try in incognito/private window

## Common Mistakes

### ❌ Wrong File Names
```
CEDIA-Logo.png  ← Wrong (uppercase)
cedia_logo.png  ← Wrong (underscore)
cedia-logo.jpg  ← Wrong (jpg not png)
cedia.png       ← Wrong (missing "-logo")
```

### ✅ Correct File Names
```
cedia-logo.png  ← Correct!
avixa-logo.png  ← Correct!
cepro-logo.png  ← Correct!
bicsi-logo.png  ← Correct!
```

## How to Fix

### Step 1: Verify Local Files
```bash
# Navigate to your project folder
cd kingsystems-website

# Check if files exist
ls images/associations/

# Should show:
# README.md
# cedia-logo.png
# avixa-logo.png
# cepro-logo.png
# bicsi-logo.png
```

### Step 2: Check File Extensions
```bash
# Make sure they're PNG files
file images/associations/*.png

# Should show:
# cedia-logo.png: PNG image data...
# avixa-logo.png: PNG image data...
# etc.
```

### Step 3: Rename if Needed
```bash
# If files have wrong names, rename them:
mv images/associations/CEDIA-Logo.png images/associations/cedia-logo.png
mv images/associations/avixa.jpg images/associations/avixa-logo.png
# etc.
```

### Step 4: Convert JPG to PNG (if needed)
If your logos are JPG, you need to convert them to PNG:

**Option A: Online Converter**
1. Go to https://png2jpg.com/ (or similar)
2. Upload JPG file
3. Download as PNG
4. Rename to correct filename

**Option B: Using ImageMagick** (if installed)
```bash
convert cedia-logo.jpg cedia-logo.png
convert avixa-logo.jpg avixa-logo.png
convert cepro-logo.jpg cepro-logo.png
convert bicsi-logo.jpg bicsi-logo.png
```

**Option C: Using Preview (Mac)**
1. Open image in Preview
2. File → Export
3. Format: PNG
4. Save with correct name

**Option D: Using Paint (Windows)**
1. Open image in Paint
2. File → Save As → PNG
3. Save with correct name

### Step 5: Commit and Push
```bash
# Add files to git
git add images/associations/*.png

# Commit
git commit -m "Add association logo files"

# Push to GitHub
git push origin main
```

### Step 6: Wait for Deployment
- GitHub Pages rebuilds automatically (1-2 minutes)
- Watch the "Actions" tab in GitHub to see build progress
- Once done, refresh your website

### Step 7: Clear Cache
```
# Windows/Linux
Ctrl + Shift + R

# Mac
Cmd + Shift + R

# Or try incognito/private window
```

## Still Not Working?

### Check Browser Console
1. Press F12 (or right-click → Inspect)
2. Go to "Console" tab
3. Look for errors like:
   - `404 Not Found` - File doesn't exist
   - `Failed to load resource` - Wrong path or name

### Check Network Tab
1. Press F12 → "Network" tab
2. Reload page
3. Look for logo files in the list
4. Check their status:
   - ✅ `200 OK` - File loaded successfully
   - ❌ `404 Not Found` - File missing or wrong name

### Verify File Paths in HTML
The HTML expects files at these exact paths:
```html
images/associations/cedia-logo.png
images/associations/avixa-logo.png
images/associations/cepro-logo.png
images/associations/bicsi-logo.png
```

### Check GitHub Repository
1. Go to your GitHub repository online
2. Navigate to `images/associations/`
3. Verify all 4 PNG files are there
4. Click on each file to view it
5. Confirm they're actual images (not empty files)

## File Size Recommendations

- **Minimum**: 200px wide
- **Recommended**: 400-600px wide
- **Maximum**: 1000px wide
- **File Size**: Under 100KB each

## Image Quality

### ✅ Good Quality
- Transparent background (PNG)
- Sharp, clear text
- No compression artifacts
- Proper aspect ratio

### ❌ Poor Quality
- Blurry or pixelated
- Wrong colors
- Distorted proportions
- White background (should be transparent)

## Getting Better Logo Files

If your current logos look poor, get better ones:

1. **CEDIA**: Login to cedia.net → Member Portal → Marketing Resources
2. **AVIXA**: Login to avixa.org → Member Resources → Logo Downloads
3. **CE Pro**: Contact membership@cepro.com for logo package
4. **BICSI**: Login to bicsi.org → Member Area → Marketing Tools

## Quick Test

Create a simple test HTML file to verify logos work:

```html
<!-- test-logos.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Logo Test</title>
</head>
<body>
    <h1>Logo Test</h1>
    <img src="images/associations/cedia-logo.png" style="height: 100px;">
    <img src="images/associations/avixa-logo.png" style="height: 100px;">
    <img src="images/associations/cepro-logo.png" style="height: 100px;">
    <img src="images/associations/bicsi-logo.png" style="height: 100px;">
</body>
</html>
```

If logos show in this test file, they'll work in the main site.

## Final Checklist

Before asking for help, verify:
- [ ] Files are named EXACTLY: `cedia-logo.png`, `avixa-logo.png`, `cepro-logo.png`, `bicsi-logo.png`
- [ ] Files are in `images/associations/` folder
- [ ] Files are PNG format (not JPG)
- [ ] Files are committed to git
- [ ] Files are pushed to GitHub
- [ ] GitHub Pages has rebuilt (check Actions tab)
- [ ] Browser cache is cleared
- [ ] Tested in incognito/private window

## Contact

If still not working after following ALL steps above:
1. Check GitHub repository URL
2. Verify deployment is complete
3. Share error messages from browser console
4. Confirm file sizes and formats

---

**Status**: Logo files need to be uploaded to `images/associations/`

**Last Updated**: Current session
