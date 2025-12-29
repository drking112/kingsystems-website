# 📧 Contact Form Backend Integration Guide

## Quick Start: Formspree Integration (5 Minutes)

Formspree is the easiest way to connect your contact form to email without any backend code.

---

## Option 1: Formspree (RECOMMENDED) ⭐

### **Step 1: Create Formspree Account**
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account (50 submissions/month free)
3. Create a new form
4. Get your form endpoint: `https://formspree.io/f/YOUR_FORM_ID`

### **Step 2: Update index.html**

Find this line in `index.html`:
```html
<form id="contactForm" class="space-y-4">
```

Change it to:
```html
<form id="contactForm" class="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Make sure to add `name` attributes to all inputs** (already done ✅):
```html
<input type="text" name="firstName" ... >
<input type="text" name="lastName" ... >
<input type="email" name="email" ... >
<input type="tel" name="phone" ... >
<select name="projectType" ... >
<textarea name="message" ... >
```

### **Step 3: Update JavaScript (Optional)**

In `js/main.js`, you can keep the current JavaScript for the success message, or let Formspree handle it:

**Current behavior** (custom success message):
```javascript
// Shows alert and closes modal
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // ... form handling
});
```

**OR - Let Formspree redirect** (simpler):
Remove the `e.preventDefault()` and let the form submit naturally. Add a `_next` hidden field:

```html
<input type="hidden" name="_next" value="https://kingsystemsllc.com/thank-you.html">
```

### **Step 4: Configure Formspree Settings**

In your Formspree dashboard:
1. **Email Notifications**: Set to `info@kingsystemsllc.com` or your preferred email
2. **Reply-To**: Use the submitter's email field
3. **Spam Protection**: Enable reCAPTCHA (optional)
4. **Autoresponder**: Send confirmation email to submitter (optional)

### **Step 5: Test**
1. Submit a test form
2. Check your email inbox
3. Verify data received correctly

---

## Option 2: EmailJS (JavaScript-Only)

### **Step 1: Setup EmailJS**
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for free (200 emails/month)
3. Connect your email service (Gmail, Outlook, etc.)
4. Create an email template

### **Step 2: Install EmailJS**

Add to `<head>` in `index.html`:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY");
    })();
</script>
```

### **Step 3: Update Form Handler**

In `js/main.js`, replace the form submission handler:

```javascript
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Prepare template parameters
        const templateParams = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            projectType: document.getElementById('projectType').value,
            message: document.getElementById('message').value,
        };
        
        // Send email
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(() => {
                alert('Thank you! Your message has been received. Our team will contact you shortly.');
                contactForm.reset();
                closeContactModal();
            }, (error) => {
                console.error('Failed to send:', error);
                alert('Sorry, there was an error. Please try again or call us at (303) 410-0924.');
            });
    });
}
```

### **Step 4: Create Email Template**

In EmailJS dashboard, create a template like:

```
Subject: New Contact Form Submission - {{firstName}} {{lastName}}

Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phone}}
Project Type: {{projectType}}

Message:
{{message}}

---
Submitted from: King Systems Website Contact Form
```

---

## Option 3: Netlify Forms (If hosting on Netlify)

### **Step 1: Add Netlify Attribute**
```html
<form id="contactForm" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <!-- Add hidden field for bot detection -->
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
    
    <!-- rest of form -->
</form>
```

### **Step 2: Configure Notifications**
In Netlify dashboard:
1. Go to Forms section
2. Set up email notifications
3. Add webhook (optional)

### **Step 3: Update JavaScript**

Keep the AJAX submission working:
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        alert('Thank you! Your message has been received.');
        contactForm.reset();
        closeContactModal();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Sorry, there was an error. Please try again.');
    });
});
```

---

## Option 4: Google Sheets + Apps Script (Free, Unlimited)

### **Step 1: Create Google Sheet**
1. Create a new Google Sheet
2. Add headers: `Timestamp | First Name | Last Name | Email | Phone | Project Type | Message`

### **Step 2: Create Apps Script**

Tools → Script Editor, paste this code:

```javascript
function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
        new Date(),
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.projectType,
        data.message
    ]);
    
    // Optional: Send email notification
    MailApp.sendEmail({
        to: "info@kingsystemsllc.com",
        subject: "New Contact Form Submission",
        body: `
            Name: ${data.firstName} ${data.lastName}
            Email: ${data.email}
            Phone: ${data.phone}
            Project Type: ${data.projectType}
            
            Message:
            ${data.message}
        `
    });
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
        .setMimeType(ContentService.MimeType.JSON);
}
```

### **Step 3: Deploy**
1. Deploy → New Deployment
2. Type: Web App
3. Execute as: Me
4. Who has access: Anyone
5. Copy the Web App URL

### **Step 4: Update JavaScript**

```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(() => {
        alert('Thank you! Your message has been received.');
        contactForm.reset();
        closeContactModal();
    });
});
```

---

## Option 5: Custom Backend API

If you have your own server, here's a Node.js example:

### **Backend (Express + Nodemailer)**

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, phone, projectType, message } = req.body;
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'info@kingsystemsllc.com',
        subject: `New Contact Form - ${firstName} ${lastName}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### **Frontend Update**

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('https://your-api.com/api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            alert('Thank you! Your message has been received.');
            contactForm.reset();
            closeContactModal();
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        console.error(error);
        alert('Sorry, there was an error. Please call us at (303) 410-0924.');
    }
});
```

---

## 📊 Comparison Table

| Solution | Setup Time | Monthly Cost | Submissions/mo | Pros | Cons |
|----------|------------|--------------|----------------|------|------|
| **Formspree** | 5 min | Free-$10 | 50-1000 | Easiest, no code | Limited free tier |
| **EmailJS** | 15 min | Free-$15 | 200-50000 | JavaScript only | Rate limits |
| **Netlify** | 10 min | Free-$19 | 100-1000 | Built-in if using Netlify | Netlify-specific |
| **Google Sheets** | 30 min | Free | Unlimited | Free, unlimited | Requires Apps Script |
| **Custom API** | 2+ hours | $5-50 | Unlimited | Full control | Requires backend |

---

## 🎯 Recommendation

### **For King Systems:**

**Best Choice: Formspree Pro ($10/month)**

**Why?**
- Professional business needs reliable service
- 1000 submissions/month is plenty
- No code changes needed
- Spam protection included
- Automatic email notifications
- Integrates with CRM tools
- Built-in autoresponders
- File uploads supported

**Setup Steps:**
1. Sign up at formspree.io ($10/month)
2. Create form, get endpoint
3. Update `<form action="...">` in index.html
4. Configure email to info@kingsystemsllc.com
5. Enable spam protection
6. Set up autoresponder ("Thanks for contacting us!")
7. Test and deploy

**Total time: 10 minutes**

---

## 🚀 Quick Implementation (Formspree)

Here's the exact code to add to `index.html`:

**Find line ~730:**
```html
<form id="contactForm" class="space-y-4">
```

**Replace with:**
```html
<form id="contactForm" class="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Add hidden fields for better email formatting:**
```html
<form id="contactForm" class="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="hidden" name="_subject" value="New Contact Form Submission - King Systems" />
    <input type="hidden" name="_next" value="https://kingsystemsllc.com/thank-you.html" />
    
    <!-- rest of form fields -->
</form>
```

**That's it!** Form is now connected to email.

---

## 📧 Email Format (What You'll Receive)

```
From: noreply@formspree.io
To: info@kingsystemsllc.com
Subject: New Contact Form Submission - King Systems

firstName: John
lastName: Doe
email: john.doe@example.com
phone: (303) 555-1234
projectType: commercial
message: Looking for conference room AV integration for 10 rooms...

---
Submitted via King Systems Contact Form
Date: Dec 29, 2024 3:45 PM
```

---

## ✅ Post-Integration Checklist

After connecting backend:
- [ ] Test form submission
- [ ] Verify email received
- [ ] Check spam folder (whitelist Formspree)
- [ ] Test all required fields
- [ ] Test invalid email format
- [ ] Test phone number field
- [ ] Test dropdown selection
- [ ] Test long message (textarea)
- [ ] Test on mobile device
- [ ] Test across browsers
- [ ] Set up autoresponder (optional)
- [ ] Configure spam protection
- [ ] Add to CRM if applicable
- [ ] Update team on new lead source

---

## 🎉 You're Done!

Your contact form is now:
✅ Live on the website  
✅ Connected to email  
✅ Capturing leads 24/7  
✅ Mobile-responsive  
✅ Professional and branded  

**Test it now:**
https://kingsystems-website.pages.dev/

**Questions?**
- Formspree Support: help@formspree.io
- Formspree Docs: https://help.formspree.io/

---

**Ready to capture leads and grow your business! 🚀**
