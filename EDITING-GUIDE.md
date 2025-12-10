# 📸 HCJK Website Editing Guide

## 🎯 **Quick Overview**
Your HCJK website is now live and working! Here's how to edit sections and add new images.

---

## 📁 **Image Management**

### **Current Collections Structure**
```
public/
├── Bali/           # 16 images + cover.jpeg
├── Iceland/        # 14 images + cover.jpg
├── Morocco/        # 21 images + cover.webp
├── Tokyo/          # 20 images + cover.jpg
├── new zealand/    # 18 images + cover.jpg
└── Urban Portraits/ # 16 images + cover.jpg
```

### **Adding New Images to Existing Collections**

1. **Upload Images**:
   - Add images to the appropriate collection folder in `public/`
   - Name them: `{collection-name}-{number}.{format}`
   - Example: `bali-17.jpeg`, `tokyo-21.jpg`

2. **Update Image Count**:
   Edit `lib/collections.ts` - find your collection and update the count:
   ```javascript
   'bali': { 
     count: 17,  // Change from 16 to 17
     formats: ['jpeg', 'jpg']
   }
   ```

### **Creating a New Collection**

1. **Create Folder**:
   ```bash
   mkdir public/MyNewCollection
   ```

2. **Add Cover Image**:
   ```bash
   # Add: public/MyNewCollection/cover.jpg
   ```

3. **Add Images**:
   ```bash
   # Add: public/MyNewCollection/mynewcollection-1.jpg
   # Add: public/MyNewCollection/mynewcollection-2.jpg
   # etc...
   ```

4. **Update Collections Configuration**:
   Edit `lib/collections.ts`:

   ```javascript
   // Add to collectionFormats:
   'mynewcollection': 'jpg',

   // Add to collectionFolders:
   'mynewcollection': 'MyNewCollection',

   // Add to collectionImages:
   'mynewcollection': { 
     count: 2,
     formats: ['jpg']
   },

   // Add to collections array:
   {
     id: "7",
     slug: "mynewcollection",
     title: "My New Collection",
     description: "Description of my new collection",
     fullDescription: "Full detailed description...",
     coverImage: getCoverImagePath("MyNewCollection"),
     tags: ["Nature", "Travel"],
     featured: true,
     photos: getCollectionImages("mynewcollection"),
   }
   ```

5. **Update Dynamic Routes**:
   Edit `app/collections/[slug]/page.tsx`:
   ```javascript
   export async function generateStaticParams() {
     const collections = [
       'bali', 'iceland', 'morocco', 'tokyo', 
       'urban-portraits', 'new-zealand', 'mynewcollection' // Add this
     ]
     
     return collections.map((slug) => ({
       slug,
     }))
   }
   ```

---

## 📝 **Editing Text Content**

### **Homepage Text**
Edit `app/page.tsx`:

```javascript
// Change introduction text
<h2 className="text-3xl md:text-4xl mb-6">Your New Title</h2>
<p className="text-primary-secondary mb-6">
  Your new description text here...
</p>
```

### **Contact Information**
Edit `components/footer.tsx`:

```javascript
<a href="mailto:your-email@domain.com">
  <li>your-email@domain.com</li>
</a>
```

### **Navigation Menu**
Edit `components/header.tsx`:

```javascript
const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/showcase" }, // Changed from Showcase
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]
```

---

## 🎨 **Design Customization**

### **Colors**
Edit `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
  /* Add your custom colors */
}
```

### **Fonts**
Edit `app/layout.tsx` to change fonts:

```javascript
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })
```

---

## 🚀 **Adding New Pages**

### **Create a New Page**
1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`

```javascript
export default function NewPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">New Page Title</h1>
      <p>Your content here...</p>
    </div>
  )
}
```

### **Add to Navigation**
Edit `components/header.tsx`:

```javascript
const navigation = [
  { name: "Home", href: "/" },
  { name: "New Page", href: "/newpage" }, // Add this
  // ... other navigation items
]
```

---

## 📊 **Collection Metadata**

### **Camera Settings**
Edit `lib/collections.ts`:

```javascript
const defaultMetadata = {
  camera: "Your Camera Model",
  lens: "Your Lens",
  aperture: "f/2.8",
  shutterSpeed: "1/125",
  iso: "200",
  focalLength: "50mm",
  takenAt: new Date().toISOString().split("T")[0],
}
```

### **Aspect Ratios**
Edit `lib/collections.ts`:

```javascript
const aspectRatios = [
  { width: 1920, height: 1080 }, // 16:9
  { width: 1080, height: 1920 }, // 9:16 (vertical)
  { width: 1200, height: 1200 }, // 1:1 (square)
  // Add your custom ratios
]
```

---

## 🔄 **Deploying Changes**

1. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Updated collection with new images"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Auto-Deploy**:
   - ✅ GitHub Pages: Automatic (1-2 minutes)
   - ✅ Cloudflare Pages: Automatic (2-5 minutes)

---

## 📱 **Testing Locally**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit: http://localhost:3000
```

---

## 🎯 **Quick Tips**

1. **Image Optimization**: Use WebP format for better performance
2. **Image Sizing**: Keep images under 2000px width for web
3. **Consistent Naming**: Follow the `{collection}-{number}.{format}` pattern
4. **SEO**: Update meta descriptions in `app/layout.tsx`
5. **Social Links**: Update footer with your social media links

---

## 🆘 **Common Issues**

### **Images Not Showing**
- Check file names match the pattern
- Ensure images are in the correct folder
- Verify case sensitivity

### **Build Errors**
- Run `npm run build` locally to debug
- Check for syntax errors in edited files
- Ensure all imports are correct

### **Deployment Issues**
- Wait 5-10 minutes for changes to propagate
- Clear browser cache
- Check GitHub Actions for errors

---

**🎉 Happy Editing! Your HCJK website is fully customizable and ready for your content!**