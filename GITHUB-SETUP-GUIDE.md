# GitHub + Cloudflare Pages Setup Guide
## Professional Workflow for King Systems Website

---

## 📋 **Prerequisites**

Before starting, you'll need:
- [ ] GitHub account (free): https://github.com/signup
- [ ] Git installed on your computer (or use GitHub Desktop)
- [ ] Your project files downloaded locally

---

## 🚀 **Step-by-Step Setup**

### **Part 1: Create GitHub Repository (5 minutes)**

#### Option A: Using GitHub Website (Easiest)

1. **Go to GitHub**: https://github.com/new

2. **Repository Settings:**
   - **Repository name**: `kingsystems-website`
   - **Description**: `King Systems - Luxury AV Integration Website`
   - **Visibility**: ✅ **Public** (required for free Cloudflare Pages)
   - **Initialize**: ❌ Leave all checkboxes UNCHECKED

3. **Click**: "Create repository"

4. **Copy the repository URL** shown on screen:
   ```
   https://github.com/YOUR-USERNAME/kingsystems-website.git
   ```

---

### **Part 2: Download Your Project Files**

You have 3 options:

#### Option A: Download from AI Editor (Current Location)
1. In this AI editor, there should be a "Download" or "Export" option
2. Download all files as ZIP
3. Extract to a folder: `C:\Projects\kingsystems-website\` (Windows) or `~/Projects/kingsystems-website/` (Mac/Linux)

#### Option B: Download from Current Cloudflare Deployment
1. I'll provide a complete ZIP of all files
2. Extract locally

#### Option C: I'll List All Files for Manual Download
- I can show you all files to download one by one

**Which option works for you?**

---

### **Part 3: Upload Files to GitHub**

Choose your preferred method:

#### **Method 1: GitHub Desktop (EASIEST - Recommended for Beginners)** ⭐

1. **Download GitHub Desktop**: https://desktop.github.com/

2. **Install and Sign In** to your GitHub account

3. **Add Repository:**
   - File → Add Local Repository
   - Choose your project folder
   - Click "Create Repository" if prompted

4. **Initial Commit:**
   - You'll see all files listed
   - Add commit message: `Initial commit - King Systems website`
   - Click "Commit to main"

5. **Publish to GitHub:**
   - Click "Publish repository"
   - Uncheck "Keep this code private" (must be public for free Cloudflare)
   - Click "Publish repository"

6. **Done!** ✅ Your code is now on GitHub

---

#### **Method 2: Command Line (For Developers)**

**Windows (Git Bash):**
```bash
cd C:\Projects\kingsystems-website
git init
git add .
git commit -m "Initial commit - King Systems website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kingsystems-website.git
git push -u origin main
```

**Mac/Linux (Terminal):**
```bash
cd ~/Projects/kingsystems-website
git init
git add .
git commit -m "Initial commit - King Systems website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kingsystems-website.git
git push -u origin main
```

---

#### **Method 3: GitHub Web Interface (Upload Manually)**

1. **Go to your repository** on GitHub
2. **Click**: "uploading an existing file"
3. **Drag all your project files** into the browser
4. **Commit message**: `Initial commit`
5. **Click**: "Commit changes"

⚠️ **Note**: This method doesn't allow folder uploads easily - use GitHub Desktop instead

---

### **Part 4: Connect Cloudflare Pages to GitHub (5 minutes)**

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com/

2. **Navigate to**: Workers & Pages → Pages

3. **Click**: "Connect to Git" (blue button)

4. **Select**: GitHub

5. **Authorize Cloudflare**:
   - GitHub will ask for permissions
   - Click "Authorize Cloudflare Pages"

6. **Select Your Repository**:
   - Find: `YOUR-USERNAME/kingsystems-website`
   - Click "Begin setup"

7. **Build Configuration**:
   - **Project name**: `kingsystemsstaging` (or choose new name)
   - **Production branch**: `main`
   - **Build command**: (leave empty)
   - **Build output directory**: `/` (root)
   - **Root directory**: `/` (root)

8. **Environment Variables**: (none needed for static site)

9. **Click**: "Save and Deploy"

10. **Wait 30-60 seconds** for first deployment

11. **Done!** ✅ Your site is live and connected to GitHub

---

### **Part 5: Get Your Live URLs**

After deployment completes:

1. **Production URL**: `https://kingsystemsstaging.pages.dev`
2. **Custom Domain**: (add later from Settings)

Share the production URL with your SEO team!

---

## 🔄 **How to Make Updates (Going Forward)**

### **Easy Workflow:**

1. **Edit Files Locally**:
   - Open your project folder
   - Edit HTML/CSS/JS files with any editor (Notepad++, VS Code, etc.)

2. **Commit Changes** (GitHub Desktop):
   - Open GitHub Desktop
   - You'll see changed files
   - Add commit message: "Updated homepage hero section"
   - Click "Commit to main"

3. **Push to GitHub**:
   - Click "Push origin"

4. **Automatic Deployment**:
   - Cloudflare detects the change
   - Automatically builds and deploys
   - Live in 30 seconds! ✅

---

## 📁 **Recommended Project Structure**

```
kingsystems-website/
├── index.html
├── about.html
├── contact.html
├── residential.html
├── commercial.html
├── case-studies.html
├── blog.html
├── service-plans.html
├── sitemap.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo/           # Store logo here
│   ├── hero/
│   ├── portfolio/
│   └── clients/
├── case-studies/
├── commercial/
├── .gitignore          # (I'll create this)
└── README.md
```

---

## 🖼️ **Media File Strategy**

### **Small Files (< 1MB) - Logos, Icons**
✅ Store in GitHub: `images/logo/logo.png`
- Deploys with site
- Always available
- Reference: `<img src="/images/logo/logo.png">`

### **Large Files (> 1MB) - Photos, Videos**
✅ Use ImgBB (free):
1. Upload to: https://imgbb.com
2. Copy direct link
3. Use in HTML: `<img src="https://i.ibb.co/xxxxx/image.jpg">`

---

## 🐛 **Troubleshooting**

### **Issue: Git not found**
**Solution**: Install Git:
- Windows: https://git-scm.com/download/win
- Mac: `brew install git` or install Xcode tools
- Linux: `sudo apt install git`

### **Issue: Permission denied**
**Solution**: Set up SSH key or use GitHub Desktop (easier)

### **Issue: Cloudflare not auto-deploying**
**Solution**: 
1. Check Cloudflare Pages → Settings → Builds & deployments
2. Ensure "Auto deploy" is enabled
3. Check GitHub webhooks are connected

### **Issue: 404 on deployed site**
**Solution**: Ensure `index.html` is in repository root, not in subfolder

---

## 📞 **Need Help?**

- GitHub Docs: https://docs.github.com
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- GitHub Desktop Guide: https://docs.github.com/en/desktop

---

## ✅ **Success Checklist**

After completing setup, you should have:

- [x] GitHub repository created
- [x] All project files in GitHub
- [x] Cloudflare Pages connected to GitHub
- [x] Staging site deployed and live
- [x] Auto-deploy working (test by making a small change)
- [x] SEO team can access staging URL

---

## 🎯 **Next Steps**

1. **Test auto-deploy**: Make a small HTML change, push to GitHub, verify it deploys
2. **Fix logo**: Upload to ImgBB or `images/logo/`, update HTML files
3. **SEO testing**: Share URL with SEO team
4. **Custom domain**: When ready, add kingsystemsllc.com in Cloudflare Pages settings

---

**Questions? Let me know and I'll help you through each step!** 🚀
