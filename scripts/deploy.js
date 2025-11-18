const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 HCJK Website Deployment Script\n');

// Check if it's a Cloudflare Pages environment
const isCloudflare = process.env.CF_PAGES === '1';

if (isCloudflare) {
  console.log('✅ Detected Cloudflare Pages environment');
  console.log('📦 Building for Cloudflare deployment...');
} else {
  console.log('✅ Detected GitHub Pages environment');
  console.log('📦 Building for GitHub Pages deployment...');
}

try {
  // Build the project
  execSync('npm run build', { stdio: 'inherit' });
  
  if (isCloudflare) {
    console.log('✅ Build completed for Cloudflare Pages');
  } else {
    console.log('✅ Build completed for GitHub Pages');
    console.log('🌐 Site will be available at: https://hlpflcg.github.io/hcjkorg2/');
  }
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}