# 🚀 HCJK Website Deployment Guide - Updated

## ✅ **Deployment Status**

### GitHub Pages (Production)
- **URL**: https://hlpflcg.github.io/hcjkorg2/
- **Status**: ✅ **WORKING PERFECTLY**
- **Auto-deployment**: ✅ Active on every push

### Cloudflare Pages (Alternative)
- **URL**: https://hcjk-org.pages.dev (once configured)
- **Status**: 🚧 **READY - Fixes Applied**
- **Auto-deployment**: ✅ Ready to activate

---

## 🔧 **Easier Cloudflare Setup (Recommended)**

Instead of using API tokens, you can use the **Cloudflare Pages GitHub App**:

### **Step 1: Connect GitHub to Cloudflare**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/pages)
2. Click **"Connect to Git"**
3. Choose **GitHub**
4. Install the Cloudflare Pages GitHub App
5. Select the `HLPFLCG/hcjkorg2` repository

### **Step 2: Configure Cloudflare Pages**

**Build Settings:**
- **Framework preset**: `Next.js (Static HTML Export)`
- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `out`
- **Node.js version**: `20`

**Environment Variables** (optional):
- `NODE_VERSION`: `20`
- `CF_PAGES`: `1`

### **Step 3: Deploy**

Click **"Save and Deploy"** - Cloudflare will automatically build and deploy your site!

---

## 🔑 **Alternative: API Token Method**

If you prefer the API token method (already configured):

1. **Get Cloudflare API Token**:
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Create token with `Cloudflare Pages:Edit` permission

2. **Get Account ID**:
   - Go to: https://dash.cloudflare.com/
   - Copy Account ID from sidebar

3. **Add GitHub Secrets**:
   - Go to: https://github.com/HLPFLCG/hcjkorg2/settings/secrets/actions
   - Add `CLOUDFLARE_API_TOKEN`
   - Add `CLOUDFLARE_ACCOUNT_ID`

---

## 🐛 **Recent Fixes Applied**

✅ **Fixed Yarn/NPM Conflicts**
- Removed package-lock.json
- Generated compatible yarn.lock
- Updated build scripts

✅ **Added Wrangler Configuration**
- Created wrangler.toml for better Cloudflare support
- Added build:cf script for Cloudflare-specific builds

✅ **Updated GitHub Actions**
- Fixed dependency installation
- Improved error handling

---

## 🌐 **Current URLs**

| Platform | URL | Status |
|----------|-----|--------|
| GitHub Pages | https://hlpflcg.github.io/hcjkorg2/ | ✅ Live |
| Cloudflare Pages | https://hcjk-org.pages.dev/ | 🚧 Ready |

---

## 📋 **Quick Commands**

```bash
# Test GitHub Pages build
npm run build

# Test Cloudflare build  
npm run build:cloudflare

# Deploy to Cloudflare (locally)
npm run deploy:cloudflare
```

---

## 🎯 **Recommended Next Steps**

1. **Primary Option**: Use Cloudflare Pages GitHub App (easier)
2. **Backup Option**: Keep GitHub Pages active (already working)
3. **Custom Domain**: Configure in Cloudflare for better performance

---

## 🔍 **Troubleshooting**

If Cloudflare deployment fails:
- Check that build command is: `npm run build:cloudflare`
- Verify output directory is: `out`
- Ensure Node.js version is set to `20`
- Check GitHub Actions logs for errors

---

**🎉 Your site is already live and working on GitHub Pages! The Cloudflare setup is now ready when you want to activate it.**