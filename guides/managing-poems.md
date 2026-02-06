# Managing Poems

Your poems are one of the most important parts of the site. Here's how to add, change, or rearrange them.

---

## Where Poems Live

Poems appear in several places across the site:

| Location | File | Description |
|---|---|---|
| Home page -- first poem | `app/page.tsx` | "in the quiet between us..." |
| Home page -- second poem | `app/page.tsx` | "you asked me what i was looking for..." |
| Home page -- decorative quote | `app/page.tsx` | "some things are too true to say out loud" |
| About page -- pull quote | `app/about/page.tsx` | "i write because some things are too true..." |
| About page -- decorative sidebar | `app/about/page.tsx` | "poetry lives in the everyday" |
| Shop page -- featured poem | `app/shop/page.tsx` | "you asked me what i was looking for..." |
| Contact page -- decorative quote | `app/contact/page.tsx` | "every word is a bridge" |

---

## How Poems Are Formatted

Poems use this structure:

```html
<blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
  in the quiet between us
  <br />
  i found the words
  <br />
  i had been searching for&mdash;
  <br />
  the ones that sound like home
</blockquote>
```

**Key things to know:**
- Each line of the poem is separated by `<br />`
- Em dashes are written as `&mdash;`
- Apostrophes are written as `&apos;`
- Don't change the `className="..."` part -- that controls the styling

---

## Changing an Existing Poem

1. Open the file on GitHub (click the pencil icon)
2. Find the poem you want to change (search for a few words from it)
3. Replace the text between `<br />` tags with your new lines
4. Commit the change

**Example -- changing the home page first poem:**

Before:
```html
in the quiet between us
<br />
i found the words
<br />
i had been searching for&mdash;
<br />
the ones that sound like home
```

After:
```html
your new first line here
<br />
your new second line here
<br />
your new third line here
<br />
your new fourth line here
```

You can have more or fewer lines -- just add or remove `<br />` between them.

---

## Decorative Quotes (Smaller Text in Boxes)

The decorative quotes in the sidebar boxes are simpler. They look like this:

```html
<p className="font-serif text-3xl font-light text-charcoal/15 leading-tight italic">
  &ldquo;poetry lives
  <br />
  in the everyday&rdquo;
</p>
```

- `&ldquo;` = opening curly quote
- `&rdquo;` = closing curly quote
- These are intentionally light/faded -- that's the `text-charcoal/15` part

---

## Adding a Poem to the Home Page

If you want to add another poem section to the home page, copy this entire block and paste it where you'd like it to appear:

```html
{/* New Poem */}
<section className="py-30 md:py-40 px-8">
  <div className="max-w-prose-narrow mx-auto text-center">
    <blockquote className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed poetry-text">
      your first line
      <br />
      your second line
      <br />
      your third line
    </blockquote>
    <div className="divider mx-auto mt-12 mb-8" />
    <p className="text-[10px] tracking-super-wide uppercase text-stone/50">
      From &ldquo;I See You, I See Me&rdquo;
    </p>
  </div>
</section>
```

Place it between any two existing `<section>` blocks.

---

## Background Colors for Poem Sections

You'll notice poem sections alternate between backgrounds:

- **Cream (default):** No extra class needed -- just `<section className="py-30 md:py-40 px-8">`
- **Linen (slightly darker warm tone):** Add `bg-linen` -- `<section className="py-30 md:py-40 px-8 bg-linen">`
- **Dark (charcoal with cream text):** `<section className="py-30 md:py-40 px-8 bg-charcoal text-cream">`

For dark sections, change `text-charcoal` to `text-cream` in the blockquote.

---

## Tips

- Keep poems lowercase if that's your style -- the site is designed for it
- Shorter poems (3-5 lines) tend to look best in the featured spots
- The decorative sidebar quotes work best at 2-3 lines
- Always preview after making changes -- the site redeploys in about 2 minutes
