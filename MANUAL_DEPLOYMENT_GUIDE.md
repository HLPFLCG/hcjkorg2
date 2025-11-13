# Manual Deployment Guide

Since the GitHub token has expired, here's how to deploy the changes manually:

## Option 1: Update GitHub Token and Push

1. **Generate New GitHub Token:**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control)
   - Copy the token

2. **Update Git Remote:**
   ```bash
   cd hcjk-nextjs
   git remote set-url origin https://x-access-token:YOUR_NEW_TOKEN@github.com/HLPFLCG/hcjkorg2.git
   git push origin main
   ```

3. **Cloudflare Auto-Deploy:**
   - Cloudflare Pages will automatically detect the push
   - Build and deploy will start automatically
   - Live in 2-5 minutes at www.hcjk.org

## Option 2: Direct Cloudflare Pages Upload

1. **Build the Site:**
   ```bash
   cd hcjk-nextjs
   npm run build
   ```

2. **Upload to Cloudflare:**
   - Go to Cloudflare Pages dashboard
   - Select your project (hcjkorg2)
   - Click "Create deployment"
   - Upload the `out/` folder
   - Deploy

## Option 3: Use Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Deploy:**
   ```bash
   cd hcjk-nextjs
   npm run build
   wrangler pages deploy out --project-name=hcjkorg2
   ```

## What's Changed

All changes are committed locally and ready to deploy:

### Commit: "Fix hero image display and overhaul footer to match header style"

**Files Changed:**
- `components/Hero.tsx` - Fixed background image
- `components/Footer.tsx` - Complete redesign
- `public/images/logo/HH.png` - New logo added

**Changes:**
1. Hero background now uses CSS background-image
2. Footer completely redesigned to match header
3. HH logo added to footer
4. All spacing and colors updated
5. Text sizes increased for consistency

## Verification Steps

After deployment, check:

1. ✅ Hero image displays correctly
2. ✅ Footer has HH logo
3. ✅ Footer matches header style (beige background, merlot accents)
4. ✅ Footer text is larger and more readable
5. ✅ Social icons are bigger and more prominent
6. ✅ All links work correctly
7. ✅ Mobile responsive design works

## Current Preview

**Development Server:** https://3000-5bdab0d7-d19f-4ccf-942c-cea1391f6e7a.proxy.daytona.works

You can test all changes here before deploying to production.

## Troubleshooting

### If hero image still doesn't show:
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors
- Verify image path in deployed files

### If footer looks wrong:
- Clear browser cache
- Check if CSS is loading correctly
- Verify HH.png uploaded correctly

### If build fails:
- Run `npm install` to ensure dependencies
- Check for TypeScript errors
- Verify all image paths are correct

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files uploaded correctly
3. Clear cache and hard refresh
4. Check Cloudflare Pages build logs