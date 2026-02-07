import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogSlugs, getBlogPostWithHtml } from '@/lib/blog'
import { getBlogPostSchema } from '@/lib/structured-data'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostWithHtml(slug)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://hcjk.org/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Heather Krystecki'],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostWithHtml(slug)

  const date = new Date(post.date + 'T00:00:00')
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostSchema(post)),
        }}
      />

      <div className="h-24" />

      {/* Header */}
      <section className="pt-20 md:pt-30 pb-12 px-8 text-center">
        <time className="text-[10px] tracking-super-wide uppercase text-stone/50 mb-8 block">
          {formatted}
        </time>
        <h1 className="font-serif text-display-sm md:text-display text-charcoal font-light mt-6">
          {post.title}
        </h1>
        <div className="divider mx-auto mt-10" />
      </section>

      {/* Content */}
      <section className="pb-30 px-8">
        <div
          className="max-w-prose-wide mx-auto blog-content"
          dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
        />
      </section>

      {/* Back link */}
      <section className="pb-30 px-8 text-center">
        <div className="divider mx-auto mb-12" />
        <Link href="/blog/" className="btn-secondary">
          Back to Journal
        </Link>
      </section>
    </article>
  )
}
