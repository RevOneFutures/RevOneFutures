# Deployment Guide - Vercel

This guide will walk you through deploying your email template system to Vercel so your team can access it.

## Prerequisites

1. **GitHub Account** (for version control and easy deployment)
2. **Vercel Account** (free tier works perfectly)
3. **Node.js** installed locally

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new account (if you don't have one)
2. Click the "+" icon in the top right → "New repository"
3. Name it something like `revone-email-templates`
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

In your terminal, run these commands:

```bash
# Navigate to your project directory
cd "/Users/lennardmacbookair/RevOne Emails "

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: React.email template system"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Create Vercel Account & Deploy

1. Go to [Vercel](https://vercel.com) and sign up (you can use GitHub to sign in)
2. Click "Add New..." → "Project"
3. Import your GitHub repository:
   - Find your repository in the list
   - Click "Import"
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty (or `npm run build` if you want)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
5. Click "Deploy"

Vercel will automatically:
- Install dependencies
- Build your project
- Deploy it
- Give you a URL like `https://your-project.vercel.app`

## Step 4: Update Image URLs (Important!)

After deployment, you need to update the image URLs in your email template to use your Vercel URL:

1. Copy your Vercel deployment URL (e.g., `https://revone-emails.vercel.app`)
2. Open `emails/revone-account-created.tsx`
3. Replace the image `src` attributes:

**Find these lines (around line 33 and 99):**
```typescript
src={process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}/static/images/Logo%20Alternative.png`
  : '/static/images/Logo Alternative.png'}
```

**Replace with:**
```typescript
src="https://YOUR_VERCEL_URL.vercel.app/static/images/Logo%20Alternative.png"
```

Replace `YOUR_VERCEL_URL` with your actual Vercel URL.

4. Commit and push the changes:
```bash
git add emails/revone-account-created.tsx
git commit -m "Update image URLs for production"
git push
```

Vercel will automatically redeploy with the new changes!

## Step 5: Set Up Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- **Production**: Deploys from `main` branch
- **Preview**: Creates preview deployments for pull requests

You can also manually trigger deployments from the Vercel dashboard.

## Step 6: Share with Your Team

1. Share your Vercel URL: `https://your-project.vercel.app`
2. Your team can now:
   - Browse templates at the root URL
   - Preview templates with custom variables
   - Copy HTML for use in Resend

## Adding New Templates

1. Create a new `.tsx` file in the `emails/` directory
2. Add the template metadata to `templates.json`
3. Commit and push to GitHub
4. Vercel will automatically deploy the new template!

Example `templates.json` entry:
```json
{
  "id": "new-template",
  "name": "New Template",
  "description": "Description of the template",
  "category": "Category Name",
  "file": "new-template.tsx",
  "variables": [
    {
      "name": "variableName",
      "type": "string",
      "required": false,
      "default": "default value",
      "description": "Variable description"
    }
  ],
  "preview": {
    "variableName": "Preview value"
  }
}
```

## Troubleshooting

### Images not showing?
- Make sure images are in `public/static/images/`
- Use absolute URLs with your Vercel domain
- Check that image filenames match exactly (case-sensitive)

### API routes not working?
- Check `vercel.json` configuration
- Ensure `@vercel/node` is in `package.json` devDependencies
- Check Vercel function logs in the dashboard

### Template not appearing?
- Verify the template is in `templates.json`
- Check that the file path in `templates.json` matches the actual file
- Check browser console for errors

## Environment Variables (Optional)

If you want to use environment variables for configuration:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables like:
   - `NEXT_PUBLIC_BASE_URL`: Your Vercel URL
   - `RESEND_API_KEY`: For sending emails (if needed)

## Cost

Vercel's free tier includes:
- Unlimited deployments
- 100GB bandwidth/month
- Serverless functions (perfect for our API routes)

This is more than enough for a template preview system!

## Support

- Vercel Docs: https://vercel.com/docs
- React.email Docs: https://react.email
- GitHub Issues: Create an issue in your repo for team questions

