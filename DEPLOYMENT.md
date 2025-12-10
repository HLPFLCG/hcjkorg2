# HCJK Website Deployment Guide

## 🌐 Current Deployment Options

### Option 1: GitHub Pages (Current Setup)
- **URL**: https://hlpflcg.github.io/hcjkorg2/
- **Status**: ✅ Active and Working
- **Auto-deployment**: ✅ Enabled on push to main

### Option 2: Cloudflare Pages (Recommended)
- **URL**: https://hcjk-org.pages.dev (or your custom domain)
- **Status**: 🚧 Ready to Configure
- **Auto-deployment**: ✅ Will be enabled

---

## 🔧 Setting Up Cloudflare Pages Deployment

### Step 1: Get Required Credentials

1. **Cloudflare API Token**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use "Custom token" template
   - Permissions:
     - Account: `Cloudflare Pages:Edit`
     - Zone: `Zone:Read` (if using custom domain)
   - Account Resources: Include your account
   - Click "Continue to summary" → "Create Token"
   - Copy the token

2. **Cloudflare Account ID**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - In the right sidebar, you'll see "Account ID"
   - Copy the Account ID

### Step 2: Add GitHub Secrets

In your GitHub repository:
1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add these secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID

### Step 3: Deploy with GitHub Actions

Push your changes, and the new workflow will automatically deploy to Cloudflare Pages!

---

## 🎯 Custom Domain Setup (Optional)

### Using Cloudflare with Custom Domain:

1. **Point your domain to Cloudflare**:
   - Add your domain to Cloudflare
   - Update nameservers to Cloudflare's nameservers

2. **Configure Cloudflare Pages**:
   - Go to Pages → hcjk-org project
   - Click "Custom domains"
   - Add your domain (e.g., hcjk.org)

3. **DNS Records**:
   - Create CNAME record: `www` → `hcjk-org.pages.dev`
   - Create A record: `@` → Cloudflare's IP (for naked domain)

---

## 📋 Deployment Commands

### Local Deployment Testing:
```bash
# Test GitHub Pages build
npm run build

# Test Cloudflare build
npm run build:cloudflare

# Deploy to Cloudflare locally (requires wrangler)
npm install -g wrangler
npm run deploy:cloudflare
```

### Automatic Deployment:
- **GitHub Pages**: Push to `main` branch
- **Cloudflare Pages**: Push to `main` branch (after secrets are configured)

---

## 🔍 Troubleshooting

### Common Issues:

1. **Build fails on Cloudflare**:
   - Check that `CLOUDFLARE_API_TOKEN` has correct permissions
   - Verify `CLOUDFLARE_ACCOUNT_ID` is correct

2. **Assets not loading**:
   - Make sure `basePath` is properly configured
   - Check that asset paths are relative

3. **Custom domain not working**:
   - Verify DNS propagation (can take 24-48 hours)
   - Check SSL certificate status in Cloudflare

---

## 🚀 Quick Start for Cloudflare

1. Fork/clone this repository
2. Get Cloudflare credentials (Step 1 above)
3. Add GitHub secrets (Step 2 above)
4. Push to main branch
5. Visit your Cloudflare Pages dashboard to see the deployment!

---

## 📞 Support

If you need help with deployment:
- Check the GitHub Actions logs for errors
- Verify all secrets are correctly set
- Ensure your Cloudflare account has Pages permissions enabled

**Happy Deploying! 🎉**