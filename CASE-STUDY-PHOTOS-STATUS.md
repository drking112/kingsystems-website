# 📸 CASE STUDY PHOTOS - STATUS & ACTION PLAN

## Current Situation

### ✅ Case Studies with Full Pages (4 total):
1. **Air Force Academy Falcon Stadium** ✅ HAS PHOTOS
2. **DaVita Corporate Headquarters** ❓ NEEDS CHECK
3. **Unicom Capital Penthouse** ❓ NEEDS CHECK
4. **Denver Art Museum** ❓ NEEDS CHECK

### 📁 GitHub Folder Structure Issue

**Problem Detected:**
- HTML code references: `images/Portfolio/USAF Academy/` (uppercase P, spaces)
- Actual GitHub folder: `images/portfolio/usaf-academy/` (lowercase p, hyphens)

**This mismatch will cause images to NOT load on the live site!**

---

## 📊 Photo Inventory

### Air Force Academy Falcon Stadium ✅
**GitHub Folder:** `images/portfolio/usaf-academy/`
**Photos Available:** 13 files
**Photos Currently Used:** 10 files

#### Available Photos:
1. ✅ Falcon Stadium.png (hero image)
2. ✅ Picture2.png (locker room)
3. ✅ Picture3.jpg (suite tech)
4. ✅ Picture4.jpg (club display)
5. ✅ Picture5.jpg (display install)
6. ✅ Picture6.jpg (club area)
7. ✅ Picture7.png (blue & silver club)
8. ✅ Picture8.jpg (AV equipment)
9. ✅ Picture9.jpg (suite display)
10. ❌ Picture10.jpg (NOT USED)
11. ✅ Picture11.jpg (tech detail)
12. ✅ Picture12.jpg (install detail)
13. ❌ Picture13.jpg (NOT USED)

**Status:** ✅ Already has excellent photo gallery

---

### DaVita Corporate Headquarters ❓
**Expected GitHub Folder:** `images/portfolio/davita/`
**HTML References:** `images/portfolio/DaVita/Picture1.jpg`

**Need to Check:**
- Does `images/portfolio/davita/` or `images/portfolio/DaVita/` exist in GitHub?
- How many photos are in that folder?
- Is only Picture1.jpg being used?

**Action:** List contents of DaVita folder in GitHub

---

### Unicom Capital Penthouse ❓
**HTML References:** Uses GenSpark URL for hero
**GitHub Folder:** Unknown

**Current Situation:**
- Hero image: `https://www.genspark.ai/api/files/s/pT0F5TT7`
- May not have GitHub photos yet

**Action:** 
- Check if folder exists in GitHub
- If yes, replace GenSpark URL with GitHub photos
- Add photo gallery if multiple photos available

---

### Denver Art Museum ❓
**HTML References:** Uses GenSpark URL for hero
**GitHub Folder:** Unknown

**Current Situation:**
- Hero image: `https://www.genspark.ai/api/files/s/cawRZuah`
- May not have GitHub photos yet

**Action:**
- Check if folder exists in GitHub
- If yes, replace GenSpark URL with GitHub photos
- Add photo gallery if multiple photos available

---

## 🚨 CRITICAL: Path Case Sensitivity Issue

### The Problem:
Your GitHub repository uses: `images/Portfolio/` (uppercase P)
Your HTML code uses: `images/portfolio/` (lowercase p)

**Linux servers (which most hosting uses) are case-sensitive!**

### Where This Affects:

#### Portfolio Page References:
```html
<!-- Current code (lowercase) -->
url('images/portfolio/USAF%20Academy/Falcon%20Stadium.png')
url('images/portfolio/DaVita/Picture1.jpg')
url('images/portfolio/City%20of%20Brighton/Picture1.jpg')
```

#### GitHub Structure (uppercase):
```
images/Portfolio/USAF Academy/
images/Portfolio/DaVita/
images/Portfolio/City of Brighton/
```

### The Fix:
**Option 1:** Change all HTML references to use uppercase `Portfolio`
**Option 2:** Rename GitHub folder to lowercase `portfolio`

**Recommendation:** Option 1 (change HTML) is easier since the GitHub folder is already set up.

---

## 📋 Action Items

### 🔴 HIGH PRIORITY (Do First):

1. **Fix Case Sensitivity Issue**
   - Update all HTML references from `images/portfolio/` to `images/Portfolio/`
   - Files to update:
     - portfolio-commercial.html
     - case-studies.html
     - case-studies/air-force-academy-falcon-stadium.html

2. **Fix Folder Name Format**
   - GitHub uses: `USAF Academy`, `City of Brighton`, etc. (with spaces)
   - HTML uses: `USAF%20Academy`, `City%20of%20Brighton` (URL encoded)
   - Check if URL encoding works or if we need to match GitHub exactly

3. **Inventory DaVita Photos**
   - Check GitHub: `images/Portfolio/DaVita/`
   - Count available photos
   - Add photo gallery to DaVita case study if multiple photos exist

4. **Check Other Project Folders**
   - City of Brighton
   - SquareTwo Financial
   - Isaacson Rosenbaum
   - Service Source
   - Fortis Bank
   
   Do these folders exist in GitHub? How many photos in each?

---

## 🟡 MEDIUM PRIORITY (After Above):

5. **Add Photo Galleries**
   - **DaVita:** If multiple photos exist, add gallery like Air Force Academy
   - **Unicom Capital:** Replace GenSpark URL, add gallery if photos exist
   - **Denver Art Museum:** Replace GenSpark URL, add gallery if photos exist

6. **Use Remaining Air Force Academy Photos**
   - Picture10.jpg
   - Picture13.jpg
   - Can add these to existing gallery or use as additional context

---

## 🟢 LOW PRIORITY (Nice to Have):

7. **Create Case Study Pages for Other Projects**
   - City of Brighton
   - SquareTwo Financial
   - Isaacson Rosenbaum
   - Service Source
   - Fortis Bank

8. **Add More Photo Types**
   - Before/after comparisons
   - Technology close-ups
   - Wide facility shots
   - People using systems (if available)

---

## 🎯 What You Need to Tell Me

To fix the photos properly, I need to know:

### 1. **Confirm GitHub Folder Structure:**
Visit: https://github.com/drking112/kingsystems-website/tree/main/images/Portfolio

Tell me:
- ✅ Is the folder `Portfolio` (uppercase P)?
- ✅ What folders are inside? (List them exactly as they appear)
- ✅ For each folder, how many photos?

### 2. **Which Projects Have Photos?**
Based on your GitHub:
- Air Force Academy: **13 photos** ✅
- DaVita: **? photos**
- City of Brighton: **? photos**
- SquareTwo Financial: **? photos**
- Unicom Capital: **? photos**
- Others: **?**

### 3. **Which Case Studies Need Galleries?**
You said: "There are plenty of images for them"

Which ones specifically:
- [ ] DaVita Corporate Headquarters
- [ ] Unicom Capital Penthouse  
- [ ] Denver Art Museum
- [ ] City of Brighton (doesn't have full case study page yet)
- [ ] SquareTwo Financial (doesn't have full case study page yet)
- [ ] Others?

---

## 💡 My Recommendation

**Quick Win Approach:**

1. **First, fix the path case sensitivity** (5 minutes)
   - Change `images/portfolio/` → `images/Portfolio/` in all HTML
   - This ensures existing photos actually load

2. **Then, tell me which folders have photos** (you just need to look at GitHub)
   - I'll add photo galleries to any case study that has 3+ photos
   - I'll replace GenSpark URLs with real GitHub photos

3. **Then, prioritize which case studies to enhance**
   - The 3 flagship projects (Air Force, Unicom, DaVita) should have the BEST galleries
   - Additional projects can have simpler photo displays

---

## ✅ Summary

**Current Status:**
- Air Force Academy: ✅ 10 photos used, looks great
- DaVita, Unicom, Denver Art Museum: ❓ Unknown photo availability
- Path issue: 🚨 Case sensitivity will break images on live site

**What I Need From You:**
1. Screenshot or list of folders in `images/Portfolio/` on GitHub
2. Confirm which projects have multiple photos available
3. I'll then add proper photo galleries to all case studies

**Time to Fix:**
- Path corrections: 5-10 minutes
- Add photo galleries (per project): 10-15 minutes each

Let me know what's in the GitHub folder and I'll make all the case studies visually rich! 📸

---

**Created:** December 28, 2024  
**Status:** Waiting for GitHub folder inventory
