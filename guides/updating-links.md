# Updating Links

This guide covers how to change URLs, social links, and email addresses across the site.

---

## All Links in One Place

Here's every external link on the site and where to find it:

### Barnes & Noble Book Link

The purchase link appears in **3 places**:

| File | Section |
|---|---|
| `app/page.tsx` | Home — Book Showcase "Get Your Copy" button |
| `app/shop/page.tsx` | Shop — "Buy on Barnes & Noble" button |
| `app/shop/page.tsx` | Shop — bottom "Order Your Copy" button |
| `components/footer.tsx` | Footer — "Barnes & Noble" link |

The current URL:
```
https://www.barnesandnoble.com/w/i-see-you-i-see-me-heather-krystecki/1149164117
```

**To update:** Search for `barnesandnoble.com` in each file and replace the URL.

---

### Instagram Link

Appears in **5 places**:

| File | Section |
|---|---|
| `app/page.tsx` | Home — Instagram section "@hcjk_collection" button |
| `app/about/page.tsx` | About — sidebar "@hcjk_collection" link |
| `app/contact/page.tsx` | Contact — Social section |
| `components/footer.tsx` | Footer — "Instagram" link |

The current URL:
```
https://www.instagram.com/hcjk_collection/
```

**To update:** Search for `instagram.com/hcjk_collection` in each file.

If you change your Instagram handle, also update the display text (`@hcjk_collection`).

---

### Email Address

Appears in **2 places**:

| File | Section |
|---|---|
| `app/contact/page.tsx` | Contact — Email section |
| `components/footer.tsx` | Footer — email link |

The current email:
```
heather@hcjk.org
```

Look for both:
- `href="mailto:heather@hcjk.org"` (the clickable link)
- `heather@hcjk.org` (the display text)

Update **both** when changing the email.

---

## Adding a New Retailer Link (e.g., Amazon)

To add another purchase link on the Shop page, open `app/shop/page.tsx` and find the "Purchase Section" area. Add a new link below the existing Barnes & Noble button:

```html
<a
  href="https://www.amazon.com/your-book-link-here"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary block text-center w-full"
>
  Buy on Amazon
</a>
```

---

## Adding a New Social Media Link

To add a new social link to the **footer**, open `components/footer.tsx` and find the "Connect" section. Add a new entry:

```html
<a
  href="https://www.tiktok.com/@your_handle"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
>
  TikTok
</a>
```

To add it to the **Contact page**, open `app/contact/page.tsx` and find the "Social" section. Add:

```html
<div>
  <p className="text-[10px] tracking-super-wide uppercase text-stone/40 mb-4">
    TikTok
  </p>
  <a
    href="https://www.tiktok.com/@your_handle"
    target="_blank"
    rel="noopener noreferrer"
    className="text-base text-charcoal hover:text-blush transition-colors duration-300"
  >
    @your_handle
  </a>
</div>
```

---

## Contact Form

The contact form is powered by **Formspree**. The form ID is `xblqjywk` and lives in `components/contact-form.tsx`.

If you need to change the Formspree form or create a new one:
1. Go to [formspree.io](https://formspree.io)
2. Create/find your form
3. Copy the form ID
4. Update this line in `components/contact-form.tsx`:
   ```
   const [state, handleSubmit] = useForm("xblqjywk")
   ```
   Replace `xblqjywk` with your new form ID.

Form submissions go to whatever email is configured in your Formspree dashboard.
