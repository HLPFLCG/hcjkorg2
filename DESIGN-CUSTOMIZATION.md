# 🎨 HCJK Website Design Customization Guide

## 📍 **Where to Edit Everything**

---

## 📝 **1. Fonts**

### **Primary Font Loading**
📁 **File**: `app/layout.tsx`

```javascript
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"], // Add weights
  display: "swap", // Performance optimization
})
```

### **Add Custom Fonts**
Replace `Inter` with any Google Font:

```javascript
import { Playfair_Display, Roboto } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})
```

### **Font Variables**
📁 **File**: `app/globals.css`

```css
:root {
  --font-inter: "Inter", sans-serif;
  --font-old-london: "Old London";            /* Brand font */
  --font-heading: "Playfair Display", serif;  /* Add this */
  --font-body: "Roboto", sans-serif;          /* Add this */
}
```

---

## 🎨 **2. Colors & Theme**

### **Light Theme Colors**
📁 **File**: `app/globals.css` (in the `:root` section)

```css
:root {
  /* Background Colors */
  --background: 0 0% 100%;           /* White background */
  --card: 0 0% 100%;                  /* Card backgrounds */
  
  /* Text Colors */
  --foreground: 0 0% 0%;              /* Main text */
  --primary: 0 0% 0%;                 /* Primary text */
  --muted-foreground: 0 0% 45%;       /* Secondary text */
  
  /* Accent Colors */
  --accent: 0 0% 96%;                 /* Light accents */
  --border: 0 0% 90%;                 /* Borders */
  
  /* Custom Brand Colors - Add These */
  --brand-primary: 220 90% 56%;       /* Blue accent */
  --brand-secondary: 160 84% 39%;     /* Green accent */
  --brand-accent: 340 82% 68%;        /* Purple accent */
}
```

### **Dark Theme Colors**
📁 **File**: `app/globals.css` (in the `.dark` section)

```css
.dark {
  --background: 0 0% 0%;              /* Dark background */
  --card: 0 0% 3%;                     /* Dark cards */
  --foreground: 0 0% 100%;             /* Light text */
  --primary: 0 0% 100%;                /* Light primary */
  --muted-foreground: 0 0% 64%;        /* Muted light text */
  --accent: 0 0% 15%;                  /* Dark accents */
  --border: 0 0% 15%;                  /* Dark borders */
  
  /* Keep brand colors consistent */
  --brand-primary: 220 90% 56%;
  --brand-secondary: 160 84% 39%;
  --brand-accent: 340 82% 68%;
}
```

---

## 🖼️ **3. Layout & Spacing**

### **Border Radius & Design System**
📁 **File**: `app/globals.css`

```css
:root {
  --radius: 0.5rem;                   /* Border radius */
  --radius-sm: 0.25rem;               /* Small radius */
  --radius-lg: 1rem;                  /* Large radius */
  --radius-full: 9999px;              /* Full round */
  
  /* Spacing Scale */
  --spacing-xs: 0.5rem;               /* 8px */
  --spacing-sm: 1rem;                 /* 16px */
  --spacing-md: 2rem;                 /* 32px */
  --spacing-lg: 4rem;                 /* 64px */
  --spacing-xl: 8rem;                 /* 128px */
}
```

---

## 📱 **4. Responsive Design**

### **Mobile-Specific Styles**
📁 **File**: `app/globals.css`

```css
/* Mobile Styles */
@media (max-width: 768px) {
  .toggle-container {
    display: none !important;
  }
  
  #introduction {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  
  /* Custom mobile styles */
  h1 {
    font-size: 2rem !important;
  }
  
  .container {
    padding: 0 1rem !important;
  }
}

/* Tablet Styles */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Tablet-specific styles */
}

/* Desktop Styles */
@media (min-width: 1024px) {
  /* Desktop-specific styles */
}
```

---

## 🎯 **5. Component-Specific Styling**

### **Header Styling**
📁 **File**: `components/header.tsx`

```javascript
// Edit header classes and styles
<div className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 ${
  isScrolled ? "bg-background backdrop-blur-md shadow-sm" : "bg-transparent"
}`}>

// Brand logo styling
<Link href="/" className={`font-old-london text-2xl ${
  isScrolled ? "text-primary" : "text-primary"
}`}>
  HCJK
</Link>
```

### **Button Styling**
📁 **File**: `components/animated-button.tsx`

```javascript
// Customize button appearance
const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  // Add custom variants
  brand: "bg-brand-primary text-white hover:bg-brand-primary/90",
}
```

---

## 🌈 **6. Advanced Customizations**

### **Custom CSS Classes**
📁 **File**: `app/globals.css`

```css
/* Custom utility classes */
@layer utilities {
  .gradient-text {
    background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .card-hover {
    transition: all 0.3s ease;
  }
  
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  }
  
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
```

### **Animation Customization**
📁 **File**: `app/globals.css`

```css
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
```

---

## 🖌️ **7. Typography System**

### **Text Styles**
📁 **File**: `app/globals.css`

```css
@layer base {
  h1 {
    @apply text-4xl md:text-6xl font-bold;
    font-family: var(--font-heading);
    line-height: 1.1;
  }
  
  h2 {
    @apply text-3xl md:text-4xl font-semibold;
    font-family: var(--font-heading);
  }
  
  h3 {
    @apply text-2xl md:text-3xl font-medium;
    font-family: var(--font-heading);
  }
  
  body {
    font-family: var(--font-body);
    line-height: 1.6;
  }
  
  .brand-text {
    font-family: var(--font-old-london);
  }
}
```

---

## 🎪 **8. Quick Color Reference**

### **HSL Color Values**
```css
/* Black & White */
--black: 0 0% 0%;
--white: 0 0% 100%;
--gray-100: 0 0% 96%;
--gray-200: 0 0% 90%;
--gray-500: 0 0% 45%;

/* Brand Colors */
--blue: 220 90% 56%;      /* #1e40af */
--green: 160 84% 39%;     /* #059669 */
--purple: 340 82% 68%;    /* #a21caf */
--red: 0 84% 60%;        /* #dc2626 */
--orange: 25 95% 53%;    /* #ea580c */

/* Generate any color: https://htmlcolorcodes.com/color-hsl/ */
```

---

## 🚀 **9. Deployment After Changes**

```bash
git add .
git commit -m "Updated design with custom fonts and colors"
git push origin main
```

Changes will auto-deploy to:
- ✅ GitHub Pages (1-2 minutes)
- ✅ Cloudflare Pages (2-5 minutes)

---

## 🎯 **10. Pro Tips**

### **Font Performance**
- Use `display: "swap"` for better loading
- Limit font weights to what you actually use
- Subset fonts to reduce file size

### **Color Accessibility**
- Ensure 4.5:1 contrast ratio for text
- Test with https://contrastchecker.com/
- Consider color-blind users

### **Performance**
- Use CSS variables for theming
- Minimize custom CSS
- Leverage Tailwind's built-in classes

---

**🎨 Your HCJK website is fully customizable! Edit these files to make it uniquely yours!**