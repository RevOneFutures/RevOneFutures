# Quick Start Guide

## ✅ What's Been Created

Your Stripo-like email template system is ready! Here's what was set up:

### Files Created:
- ✅ `templates.json` - Template registry
- ✅ `api/templates.ts` - API to list all templates
- ✅ `api/preview/[templateId].ts` - API to preview templates
- ✅ `public/index.html` - Template gallery (homepage)
- ✅ `public/preview.html` - Enhanced preview page with variable editing
- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `config/constants.ts` - Image URL configuration
- ✅ `DEPLOYMENT.md` - Complete deployment guide

### Images:
- ✅ Logo copied to `public/static/images/Logo Alternative.png`

## 🚀 Next Steps

### 1. Test Locally (Optional)
```bash
npm run dev
```
Visit `http://localhost:3000` to see the template gallery.

### 2. Create GitHub Account & Repository

1. Go to https://github.com and sign up
2. Create a new repository:
   - Click "+" → "New repository"
   - Name it (e.g., `revone-email-templates`)
   - Don't initialize with README
   - Click "Create repository"

### 3. Push Code to GitHub

```bash
cd "/Users/lennardmacbookair/RevOne Emails "

# Initialize git
git init
git add .
git commit -m "Initial commit: Email template system"

# Add your GitHub repo (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel

1. Go to https://vercel.com and sign up (use GitHub to sign in)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Click "Deploy" (no configuration needed - it's all set up!)
5. Wait for deployment (takes ~1-2 minutes)

### 5. Update Image URLs (After Deployment)

After Vercel gives you a URL (e.g., `https://revone-emails.vercel.app`):

1. Open `config/constants.ts`
2. Update `BASE_URL`:
   ```typescript
   export const BASE_URL = 'https://your-actual-vercel-url.vercel.app';
   ```
3. Commit and push:
   ```bash
   git add config/constants.ts
   git commit -m "Update image URLs for production"
   git push
   ```

Vercel will automatically redeploy!

### 6. Share with Team

Share your Vercel URL with your team:
- **Gallery**: `https://your-project.vercel.app`
- **Direct Preview**: `https://your-project.vercel.app/preview.html?id=revone-account-created`

## 📋 What Your Team Can Do

- ✅ Browse all templates in a beautiful gallery
- ✅ Preview templates with custom variables
- ✅ Copy HTML for use in Resend
- ✅ See template metadata and descriptions
- ✅ Test different variable combinations

## 🎯 Adding New Templates

1. Create new `.tsx` file in `emails/` directory
2. Add entry to `templates.json`
3. Commit and push to GitHub
4. Vercel auto-deploys the new template!

## 📚 Full Documentation

- **Deployment Guide**: See `DEPLOYMENT.md`
- **Main README**: See `README.md`

## 🆘 Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Vercel automatically handles most things
- All configuration is already done!

---

**You're all set!** Just follow steps 2-6 above to get your template system live. 🚀

